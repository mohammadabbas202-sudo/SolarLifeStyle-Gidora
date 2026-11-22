const fs=require('fs');const parser=require('@babel/parser');
const src=fs.readFileSync('mirror/_next/static/chunks/04muc_4esupvo.js','utf8');
const ast=parser.parse(src,{sourceType:'script'});
const arr=ast.program.body[0].expression.arguments[0].elements;
let fn;for(let i=0;i<arr.length;i++){if(arr[i].type==='NumericLiteral'&&arr[i].value===87856){fn=arr[i+1];break}}
for(const st of fn.body.body){
  if(st.type==='VariableDeclaration'){
    for(const d of st.declarations){
      const len=d.end-d.start; const init=d.init; const kind=init?init.type:'';
      let hint='';
      if(init&&init.type==='CallExpression'&&init.arguments[0]&&init.arguments[0].type==='StringLiteral') hint=init.arguments[0].value;
      console.log(`${d.id.name||'{..}'}\t${d.loc.start.line}\t${len}\t${kind}\t${hint}`);
    }
  } else console.log('--',st.type,st.loc.start.line, st.end-st.start);
}
