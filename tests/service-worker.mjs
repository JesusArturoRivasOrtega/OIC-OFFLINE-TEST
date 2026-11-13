import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const scope='https://example.github.io/OIC-OFFLINE-TEST/';
const handlers={};
const stores=new Map();
const deleted=[];
const self={location:new URL(scope),registration:{scope},clients:{claim:async()=>{}},skipWaiting:async()=>{},addEventListener:(name,handler)=>{handlers[name]=handler}};
const caches={
  async open(name){
    if(!stores.has(name))stores.set(name,new Map());
    const store=stores.get(name);
    return {
      async addAll(paths){for(const path of paths)store.set(new URL(path,scope).href,new Response(`cached ${path}`,{headers:{'content-type':path.endsWith('.js')?'text/javascript':'text/html'}}))},
      async match(request){return store.get(typeof request==='string'?request:request.url)},
      async put(request,response){store.set(typeof request==='string'?request:request.url,response)}
    };
  },
  async keys(){return [...stores.keys()]},
  async delete(name){deleted.push(name);return stores.delete(name)}
};
const context={self,caches,URL,Response,fetch:async()=>{throw new TypeError('offline')}};
vm.runInNewContext(readFileSync(new URL('../sw.js',import.meta.url),'utf8'),context);

stores.set('unrelated-pwa-cache',new Map());
stores.set('oic-academy-v14',new Map());
let pending;
handlers.install({waitUntil(p){pending=p}});
await pending;
handlers.activate({waitUntil(p){pending=p}});
await pending;
assert.deepEqual(deleted,['oic-academy-v14'],'activation must preserve caches that do not belong to this app');

let status;
handlers.message({data:{type:'CHECK_OFFLINE_CACHE'},source:{postMessage(value){status=value}},waitUntil(p){pending=p}});
await pending;
assert.equal(status.ready,true,'install should cache every required asset');
assert.equal(status.cached,status.total);

const request=url=>({url:new URL(url,scope).href,method:'GET',mode:url==='./'?'navigate':'same-origin'});
const fetchRequest=async req=>{let responsePromise;handlers.fetch({request:req,respondWith(p){responsePromise=p},waitUntil(p){pending=p}});return responsePromise};
const cachedScript=await fetchRequest(request('app.js'));
assert.equal(cachedScript.status,200);
assert.match(cachedScript.headers.get('content-type'),/javascript/);
const missingScript=await fetchRequest(request('missing.js'));
assert.equal(missingScript.status,503,'missing scripts must not receive the HTML app shell');
const offlinePage=await fetchRequest(request('./'));
assert.equal(offlinePage.status,200,'a cached navigation should return the app shell offline');
let intercepted=false;
handlers.fetch({request:{url:'https://cdn.example.test/lib.js',method:'GET',mode:'no-cors'},respondWith(){intercepted=true}});
assert.equal(intercepted,false,'the app worker must not intercept cross-origin requests');
console.log('Service-worker cache scope, offline fallback, and asset behavior validated.');
