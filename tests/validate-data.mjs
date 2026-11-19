import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const context={window:{}};
vm.createContext(context);
vm.runInContext(readFileSync(new URL('../rationales.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../authored-questions.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../question-translations.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../question-references.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../data.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../reviewed-48.js', import.meta.url),'utf8'),context);
const originalReviewed48Ids=new Set(context.window.OIC_DATA.questions.filter(q=>q.source==='Original editorial practice'&&q.id.endsWith('-02')).map(q=>q.id));
vm.runInContext(readFileSync(new URL('../reviewed-6.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../reviewed-5.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../reviewed-orchestration-5.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../reviewed-monitoring-5.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../reviewed-observability-5.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../reviewed-rest-errors-5.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../reviewed-scheduled-5.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../reviewed-schedule-operations-5.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../reviewed-started-5.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../reviewed-connections-5.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../curriculum.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../curriculum-depth.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../curriculum-workbook.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../chapter-expansion.js', import.meta.url),'utf8'),context);
vm.runInContext(readFileSync(new URL('../case-analysis.js', import.meta.url),'utf8'),context);
const {categories,questions}=context.window.OIC_DATA;
if(Object.keys(context.window.OIC_RATIONALES).length!==60||Object.keys(context.window.OIC_CORRECT_WHY).length!==60)throw new Error('Every provisional concept requires explicit right/wrong rationales');
const chapters=context.window.OIC_CURRICULUM,depth=context.window.OIC_DEPTH;
if(chapters.length<40)throw new Error(`Expected at least 40 chapters, got ${chapters.length}`);
for(const chapter of chapters){const entry=depth[chapter.id],workbook=context.window.OIC_WORKBOOK[chapter.id];if(!entry||entry.topics.length<3||entry.en.split(/\s+/).length<65||entry.es.split(/\s+/).length<65)throw new Error(`${chapter.id} lacks substantive bilingual depth`);if(!workbook||workbook.en.split(/\s+/).length<65||workbook.es.split(/\s+/).length<65||!workbook.check||!workbook.checkEs)throw new Error(`${chapter.id} lacks bilingual implementation study`)}
for(const id of ['started-5','scheduled-3','connections-5','orchestration-2','monitoring-2','ai-1']){const sections=context.window.OIC_CHAPTER_EXPANSIONS[id];if(sections?.length!==4||sections.some(s=>!/^https:\/\/docs\.oracle\.com\//.test(s.source)||s.en.split(/\s+/).length<75||s.es.split(/\s+/).length<75))throw new Error(`${id} lacks four substantive bilingual source-linked sections`)}
for(const item of context.window.OIC_DATA.labs){const detail=context.window.OIC_CASE_ANALYSIS.labs[item.id];if(!detail||detail.steps.length<3||detail.alternatives.length<2)throw new Error(`${item.id} lacks architecture analysis`)}
for(const item of context.window.OIC_DATA.troubleshooting){const detail=context.window.OIC_CASE_ANALYSIS.troubleshooting[item.id];if(!detail||detail.steps.length<3||!detail.recovery)throw new Error(`${item.id} lacks diagnostic analysis`)}
if(categories.length!==6)throw new Error(`Expected six categories, got ${categories.length}`);
const weights=categories.reduce((n,c)=>n+c.weight,0);if(weights!==100)throw new Error(`Weights must total 100, got ${weights}`);
for(const c of categories){const bank=questions.filter(q=>q.categoryId===c.id);if(bank.length!==50)throw new Error(`${c.id} requires 50 questions, got ${bank.length}`);if(new Set(bank.map(q=>q.id)).size!==50)throw new Error(`${c.id} has duplicate IDs`);const kinds=Object.fromEntries(['fundamentals','application','scenario','expert'].map(k=>[k,bank.filter(q=>q.type===k).length]));const expected={fundamentals:10,application:15,scenario:15,expert:10};for(const [k,n] of Object.entries(expected))if(kinds[k]!==n)throw new Error(`${c.id} ${k}: expected ${n}, got ${kinds[k]}`);for(const q of bank){if(q.sourceType!=='original'||!['Generated practice','Original editorial practice'].includes(q.source))throw new Error(`${q.id} must be public original practice`);if(!q.reference?.section||!q.correct?.length||q.options.length<4)throw new Error(`${q.id} lacks required metadata`);if(q.options.some(o=>!o.why||o.why.length<25))throw new Error(`${q.id} lacks an option-specific rationale`)}}
for(const q of questions)if(q.options.some(option=>option.correct!==q.correct.includes(option.id)))throw new Error(`${q.id} answer key and option flags disagree`);
for(const q of questions)if(q.options.some(option=>!option.textEs||!option.whyEs))throw new Error(`${q.id} is missing a Spanish option or rationale`);
for(const q of questions.filter(q=>q.source==='Generated practice'))if(!q.reference.url||q.reference.status==='item-level verified')throw new Error(`${q.id} reference status is inconsistent`);
const generated=questions.filter(q=>q.source==='Generated practice'),keyCounts=Object.fromEntries(['A','B','C','D','E'].map(id=>[id,generated.filter(q=>q.correct.includes(id)).length]));
for(const id of ['A','B','C','D'])if(keyCounts[id]<generated.length*0.18||keyCounts[id]>generated.length*0.38)throw new Error(`Generated answer positions remain biased: ${JSON.stringify(keyCounts)}`);
const authored=questions.filter(q=>q.source==='Original editorial practice');
if(authored.length!==157)throw new Error('Expected 157 authored case replacements');
if(authored.some(q=>q.verification!=='verified'||q.reference.status!=='item-level verified'||!q.reference.pdfPage&&!q.reference.url))throw new Error('Every authored answer needs a verified item-level reference');
if(authored.some(q=>!q.questionEs||q.options.some(o=>!o.textEs||!o.whyEs)))throw new Error('Every authored item needs full Spanish options and rationales');
if(authored.some(q=>q.correct.some(id=>!q.options.some(o=>o.id===id&&o.correct))||q.options.some(o=>o.correct!==q.correct.includes(o.id))))throw new Error('Authored answer flags and correct IDs disagree');
const reviewedBatch=authored.filter(q=>originalReviewed48Ids.has(q.id));
if(reviewedBatch.length!==48)throw new Error(`Expected exactly 48 new reviewed cases, got ${reviewedBatch.length}`);
for(const q of reviewedBatch){
  if(q.options.length!==4||q.correct.length!==1||new Set(q.options.map(o=>o.text)).size!==4)throw new Error(`${q.id}: options are not four distinct single-answer choices`);
  if(new Set(q.options.map(o=>o.why)).size!==4||new Set(q.options.map(o=>o.whyEs)).size!==4)throw new Error(`${q.id}: distractor rationales must be individually distinguishable`);
  if(!/^https:\/\//.test(q.reference.url)||q.translationStatus!=='reviewed')throw new Error(`${q.id}: source or translation review missing`);
}
const reviewedTwelve=['gen-started-08-04','gen-connections-10-04','gen-orchestration-10-04','gen-scheduled-10-04','gen-monitoring-10-04','gen-ai-07-04','gen-started-10-04','gen-connections-09-04','gen-orchestration-09-04','gen-scheduled-09-04','gen-monitoring-09-04','gen-ai-10-04'];
for(const id of reviewedTwelve){const q=authored.find(x=>x.id===id);if(!q||q.options.length!==4||q.correct.length!==1||new Set(q.options.map(o=>o.whyEs)).size!==4)throw new Error(`${id}: new case or bilingual rationales missing`)}
for(const id of ['gen-connections-02-03','gen-connections-02-04','gen-connections-03-03','gen-ai-02-01','gen-ai-03-03']){const q=authored.find(x=>x.id===id);if(!q||q.options.length!==4||q.correct.length!==1||new Set(q.options.map(o=>o.why)).size!==4||new Set(q.options.map(o=>o.whyEs)).size!==4||q.translationStatus!=='reviewed'||!/^https:\/\/docs\.oracle\.com\//.test(q.reference.url))throw new Error(`${id}: source, key, translation, or option rationale missing`)}
for(const id of ['gen-orchestration-02-03','gen-orchestration-03-03','gen-orchestration-04-03','gen-orchestration-05-03','gen-orchestration-07-04']){const q=authored.find(x=>x.id===id);if(!q||q.options.length!==4||q.correct.length!==1||new Set(q.options.map(o=>o.why)).size!==4||new Set(q.options.map(o=>o.whyEs)).size!==4||q.translationStatus!=='reviewed'||!/^https:\/\/docs\.oracle\.com\//.test(q.reference.url))throw new Error(`${id}: orchestration source, key, translation, or option rationale missing`)}
for(const id of ['gen-monitoring-02-01','gen-monitoring-02-03','gen-monitoring-09-05','gen-monitoring-10-01','gen-monitoring-07-01']){const q=authored.find(x=>x.id===id);if(!q||q.options.length!==4||q.correct.length!==1||new Set(q.options.map(o=>o.why)).size!==4||new Set(q.options.map(o=>o.whyEs)).size!==4||q.translationStatus!=='reviewed'||!/^https:\/\/docs\.oracle\.com\//.test(q.reference.url))throw new Error(`${id}: observability source, key, translation, or option rationale missing`)}
for(const id of ['gen-scheduled-02-01','gen-scheduled-02-03','gen-scheduled-03-03','gen-scheduled-04-03','gen-scheduled-08-04']){const q=authored.find(x=>x.id===id);if(!q||q.options.length!==4||q.correct.length!==1||new Set(q.options.map(o=>o.why)).size!==4||new Set(q.options.map(o=>o.whyEs)).size!==4||q.translationStatus!=='reviewed'||!/^https:\/\/docs\.oracle\.com\//.test(q.reference.url))throw new Error(`${id}: schedule source, key, translation, or option rationale missing`)}
for(const id of ['gen-started-01-03','gen-started-07-04','gen-started-08-02','gen-started-08-05','gen-started-10-05']){const q=authored.find(x=>x.id===id);if(!q||q.options.length!==4||q.correct.length!==1||new Set(q.options.map(o=>o.why)).size!==4||new Set(q.options.map(o=>o.whyEs)).size!==4||q.translationStatus!=='reviewed'||!/^https:\/\/docs\.oracle\.com\//.test(q.reference.url))throw new Error(`${id}: lifecycle source, key, translation, or option rationale missing`)}
for(const id of ['gen-connections-03-04','gen-connections-05-03','gen-connections-06-04','gen-connections-08-04','gen-connections-09-02']){const q=authored.find(x=>x.id===id);if(!q||q.options.length!==4||q.correct.length!==1||new Set(q.options.map(o=>o.why)).size!==4||new Set(q.options.map(o=>o.whyEs)).size!==4||q.translationStatus!=='reviewed'||!/^https:\/\/docs\.oracle\.com\//.test(q.reference.url))throw new Error(`${id}: connection source, key, translation, or option rationale missing`)}
if(new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length)throw new Error('Duplicate question stems');
const distribution={started:7,connections:10,orchestration:16,scheduled:5,monitoring:6,ai:6};if(Object.values(distribution).reduce((a,b)=>a+b,0)!==50)throw new Error('Exam distribution must total 50');
console.log(`Validated ${questions.length} practice prompts, including ${authored.length} bilingual source-backed case replacements; remaining variants and item references still require editorial review.`);
