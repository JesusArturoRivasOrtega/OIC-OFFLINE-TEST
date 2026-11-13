import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const context={window:{}};
vm.createContext(context);
for(const file of ['rationales.js','authored-questions.js','question-translations.js','question-references.js','data.js','curriculum.js','curriculum-depth.js','curriculum-workbook.js']){
  vm.runInContext(readFileSync(new URL(`../${file}`,import.meta.url),'utf8'),context);
}
const {questions}=context.window.OIC_DATA;
const chapters=context.window.OIC_CURRICULUM;
const issues=[];
for(const chapter of chapters){
  if(!context.window.OIC_WORKBOOK[chapter.id])issues.push(`${chapter.id}: missing expanded bilingual study`);
  if(chapter.editorialStatus!=='verified')issues.push(`${chapter.id}: syllabus coverage and source references not editorially verified`);
}
for(const q of questions){
  if(q.source!=='Original editorial practice')issues.push(`${q.id}: still generated from a concept variation`);
  if(!q.questionEs)issues.push(`${q.id}: Spanish stem missing`);
  if(q.reference?.status!=='item-level verified')issues.push(`${q.id}: reference not verified for this item`);
  if(q.reference?.status==='item-level verified'&&!q.reference.pdfPage&&!q.reference.url)issues.push(`${q.id}: verified reference lacks an exact page or URL`);
  if(q.verification!=='verified')issues.push(`${q.id}: answer not editorially verified`);
  if(q.options.some(x=>!x.why))issues.push(`${q.id}: option rationale missing`);
  if(q.options.some(x=>!x.textEs||!x.whyEs))issues.push(`${q.id}: Spanish options or rationales missing`);
  if(q.source==='Generated practice'&&q.translationStatus!=='reviewed')issues.push(`${q.id}: Spanish translation has not been proofread`);
}
const stems=questions.map(q=>q.question.trim().toLowerCase());
if(new Set(stems).size!==stems.length)issues.push('duplicate question stems');
if(issues.length){
  console.error(`Editorial release gate BLOCKED: ${issues.length} unresolved checks across ${questions.length} questions and ${chapters.length} readings.`);
  for(const issue of issues.slice(0,25))console.error(`- ${issue}`);
  if(issues.length>25)console.error(`... ${issues.length-25} more`);
  process.exitCode=1;
}else console.log('Editorial gate passed.');
