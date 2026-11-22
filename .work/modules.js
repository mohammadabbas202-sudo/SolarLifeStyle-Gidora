const fs=require('fs');const parser=require('@babel/parser');
for (const f of fs.readdirSync('mirror/_next/static/chunks').filter(f=>f.endsWith('.js')&&!f.startsWith('turbopack'))) {
  const src=fs.readFileSync('mirror/_next/static/chunks/'+f,'utf8');
  let ast; try{ast=parser.parse(src,{sourceType:'script'});}catch(e){console.log(f,'parse fail',e.message);continue}
  const call=ast.program.body[0].expression; const arr=call.arguments[0];
  const ids=[];let i=0;
  const els=arr.elements;
  for(let k=0;k<els.length;k++){
    const el=els[k];
    if(el.type==='NumericLiteral'){ // id followed by fn (or id, id, ...)
      const next=els[k+1];
      ids.push(el.value+(next&&/Function/.test(next.type)?`[${next.end-next.start}b]`:''));
    }
  }
  console.log(f, ids.join(' '));
}
