const fs=require('fs');const parser=require('@babel/parser');const traverse=require('@babel/traverse').default;
const src=fs.readFileSync('mirror/_next/static/chunks/04muc_4esupvo.js','utf8');
const ast=parser.parse(src,{sourceType:'script'});
const arr=ast.program.body[0].expression.arguments[0].elements;
// find module 87856 fn
let fn;for(let i=0;i<arr.length;i++){if(arr[i].type==='NumericLiteral'&&arr[i].value===87856){fn=arr[i+1];break}}
const imports={};// var -> module id
traverse(ast,{CallExpression(p){const c=p.node.callee;if(c.type==='MemberExpression'&&c.object.name==='e'&&['i','r'].includes(c.property.name)&&p.parent.type==='VariableDeclarator'){imports[p.parent.id.name]=p.node.arguments[0].value}}});
const uses={};
traverse(ast,{MemberExpression(p){const o=p.node.object;if(o.type==='Identifier'&&imports[o.name]&&!p.node.computed){(uses[o.name]??=new Set()).add(p.node.property.name)}}});
for(const k in uses) console.log(k,imports[k],[...uses[k]].join(','));
