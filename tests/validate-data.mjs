import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const context={window:{}};
vm.createContext(context);
vm.runInContext(readFileSync(new URL('../data.js', import.meta.url),'utf8'),context);
const {categories,questions}=context.window.OIC_DATA;
if(categories.length!==6)throw new Error(`Expected six categories, got ${categories.length}`);
const weights=categories.reduce((n,c)=>n+c.weight,0);if(weights!==100)throw new Error(`Weights must total 100, got ${weights}`);
for(const c of categories){const bank=questions.filter(q=>q.categoryId===c.id);if(bank.length!==50)throw new Error(`${c.id} requires 50 questions, got ${bank.length}`);if(new Set(bank.map(q=>q.id)).size!==50)throw new Error(`${c.id} has duplicate IDs`);const kinds=Object.fromEntries(['fundamentals','application','scenario','expert'].map(k=>[k,bank.filter(q=>q.type===k).length]));const expected={fundamentals:10,application:15,scenario:15,expert:10};for(const [k,n] of Object.entries(expected))if(kinds[k]!==n)throw new Error(`${c.id} ${k}: expected ${n}, got ${kinds[k]}`);for(const q of bank){if(q.sourceType!=='original'||q.source!=='Generated practice')throw new Error(`${q.id} must be public original practice`);if(!q.reference?.section||!q.correct?.length||q.options.length<4)throw new Error(`${q.id} lacks required metadata`)}}
const distribution={started:7,connections:10,orchestration:16,scheduled:5,monitoring:6,ai:6};if(Object.values(distribution).reduce((a,b)=>a+b,0)!==50)throw new Error('Exam distribution must total 50');
console.log(`Validated ${questions.length} public original practice questions across six categories.`);
