import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const context={window:{}};
vm.createContext(context);
vm.runInContext(readFileSync(new URL('../rationales.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../authored-questions.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../data.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../curriculum.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../curriculum-depth.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../curriculum-workbook.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../case-analysis.js', import.meta.url),'utf8'),context);
const {categories,questions}=context.window.OIC_DATA;
if(Object.keys(context.window.OIC_RATIONALES).length!==60||Object.keys(context.window.OIC_CORRECT_WHY).length!==60)throw new Error('Every provisional concept requires explicit right/wrong rationales');
const chapters=context.window.OIC_CURRICULUM,depth=context.window.OIC_DEPTH;
if(chapters.length!==40)throw new Error(`Expected 40 chapters, got ${chapters.length}`);
for(const chapter of chapters){const entry=depth[chapter.id],workbook=context.window.OIC_WORKBOOK[chapter.id];if(!entry||entry.topics.length<3||entry.en.split(/\s+/).length<65||entry.es.split(/\s+/).length<65)throw new Error(`${chapter.id} lacks substantive bilingual depth`);if(!workbook||workbook.en.split(/\s+/).length<65||workbook.es.split(/\s+/).length<65||!workbook.check||!workbook.checkEs)throw new Error(`${chapter.id} lacks bilingual implementation study`)}
for(const item of context.window.OIC_DATA.labs){const detail=context.window.OIC_CASE_ANALYSIS.labs[item.id];if(!detail||detail.steps.length<3||detail.alternatives.length<2)throw new Error(`${item.id} lacks architecture analysis`)}
for(const item of context.window.OIC_DATA.troubleshooting){const detail=context.window.OIC_CASE_ANALYSIS.troubleshooting[item.id];if(!detail||detail.steps.length<3||!detail.recovery)throw new Error(`${item.id} lacks diagnostic analysis`)}
if(categories.length!==6)throw new Error(`Expected six categories, got ${categories.length}`);
const weights=categories.reduce((n,c)=>n+c.weight,0);if(weights!==100)throw new Error(`Weights must total 100, got ${weights}`);
for(const c of categories){const bank=questions.filter(q=>q.categoryId===c.id);if(bank.length!==50)throw new Error(`${c.id} requires 50 questions, got ${bank.length}`);if(new Set(bank.map(q=>q.id)).size!==50)throw new Error(`${c.id} has duplicate IDs`);const kinds=Object.fromEntries(['fundamentals','application','scenario','expert'].map(k=>[k,bank.filter(q=>q.type===k).length]));const expected={fundamentals:10,application:15,scenario:15,expert:10};for(const [k,n] of Object.entries(expected))if(kinds[k]!==n)throw new Error(`${c.id} ${k}: expected ${n}, got ${kinds[k]}`);for(const q of bank){if(q.sourceType!=='original'||!['Generated practice','Original editorial practice'].includes(q.source))throw new Error(`${q.id} must be public original practice`);if(!q.reference?.section||!q.correct?.length||q.options.length<4)throw new Error(`${q.id} lacks required metadata`);if(q.options.some(o=>!o.why||o.why.length<25))throw new Error(`${q.id} lacks an option-specific rationale`)}}
if(questions.filter(q=>q.source==='Original editorial practice').length!==18)throw new Error('Expected 18 authored case replacements');
if(questions.filter(q=>q.verification==='verified').length!==15)throw new Error('Expected 15 individually checked answers');
if(questions.filter(q=>q.options.every(o=>o.textEs&&o.whyEs)).length!==6)throw new Error('Expected six fully bilingual answer sets');
const distribution={started:7,connections:10,orchestration:16,scheduled:5,monitoring:6,ai:6};if(Object.values(distribution).reduce((a,b)=>a+b,0)!==50)throw new Error('Exam distribution must total 50');
console.log(`Validated ${questions.length} practice prompts, including 18 original case replacements; remaining variants and item references still require editorial review.`);
