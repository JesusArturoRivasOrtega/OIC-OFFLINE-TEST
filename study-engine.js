/* Pure study rules shared by the PWA and validation tests. */
window.OIC_ENGINE = (() => {
  const DAY=86400000;
  function createRng(seed){let value=(Number(seed)||1)>>>0;return()=>{value=(value*1664525+1013904223)>>>0;return value/4294967296}}
  function shuffle(items,random=Math.random){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}
  function grade(previous={},quality,now=Date.now()) {
    const q=Math.max(0,Math.min(5,Number(quality)||0));
    const repetitions=q<3?0:(previous.repetitions||0)+1;
    const interval=q<3?1:repetitions===1?1:repetitions===2?6:Math.max(1,Math.round((previous.interval||6)*(previous.ease||2.5)));
    const ease=Math.max(1.3,(previous.ease||2.5)+0.1-(5-q)*(0.08+(5-q)*0.02));
    return {repetitions,interval,ease,due:now+interval*DAY,lastReviewed:now,lastQuality:q};
  }
  function selection(pool,count,filter='mixed',answers={},random=Math.random,seenIds=[]){
    const seen=new Set(Object.keys(answers));
    let eligible=pool;
    if(filter==='professional')eligible=pool.filter(q=>q.difficulty==='professional');
    if(filter==='expert')eligible=pool.filter(q=>q.difficulty==='expert');
    if(filter==='unanswered')eligible=pool.filter(q=>!seen.has(q.id));
    if(filter==='new'){const shown=new Set(seenIds);eligible=pool.filter(q=>!shown.has(q.id))}
    if(filter==='incorrect')eligible=pool.filter(q=>answers[q.id]&&(answers[q.id].everIncorrect||answers[q.id].correct===false));
    if(filter==='split'){
      const selected=[...shuffle(pool.filter(q=>q.difficulty==='professional'),random).slice(0,5),...shuffle(pool.filter(q=>q.difficulty==='expert'),random).slice(0,5)];
      return shuffle(selected,random);
    }
    return shuffle(eligible,random).slice(0,count);
  }
  function score(question,selected){
    const expected=[...question.correct].sort();const actual=[...selected].sort();
    return expected.length===actual.length&&expected.every((id,i)=>id===actual[i]);
  }
  function examDistribution(questions,random=Math.random,preferred='practice'){
    const counts={started:7,connections:10,orchestration:16,scheduled:5,monitoring:6,ai:6};
    const result=Object.entries(counts).flatMap(([categoryId,n])=>{
      const category=questions.filter(q=>q.categoryId===categoryId&&q.correct?.length);
      const priority=preferred==='expert'?'expert':preferred==='professional'?'professional':null;
      const preferredItems=priority?selection(category.filter(q=>q.difficulty===priority),n,'mixed',{},random):[];
      const remaining=selection(category.filter(q=>!preferredItems.some(x=>x.id===q.id)),n-preferredItems.length,'mixed',{},random);
      return [...preferredItems,...remaining];
    });
    if(result.length!==50)throw new Error('The question bank cannot fill the required exam distribution.');
    return selection(result,50,'mixed',{},random);
  }
  function examReport(session,previous=[]){
    const rows=session.questions.map(q=>({questionId:q.id,categoryId:q.categoryId,difficulty:q.difficulty,correct:!!session.answers?.[q.id]?.correct,answered:!!session.answers?.[q.id]}));
    const byCategory=Object.fromEntries([...new Set(rows.map(r=>r.categoryId))].map(id=>{const group=rows.filter(r=>r.categoryId===id);return [id,{total:group.length,answered:group.filter(r=>r.answered).length,correct:group.filter(r=>r.correct).length,score:Math.round(group.filter(r=>r.correct).length/group.length*100)}]}));
    const correct=rows.filter(r=>r.correct).length;
    const score=Math.round(correct/rows.length*100);
    return {date:Date.now(),level:session.level,score,correct,total:rows.length,answered:rows.filter(r=>r.answered).length,seconds:Math.round((Date.now()-session.started)/1000),byCategory,missed:rows.filter(r=>!r.correct),previousScore:previous.at(-1)?.score??null};
  }
  return {grade,selection,score,examDistribution,examReport,createRng,shuffle};
})();
