import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const args=process.argv.slice(2);
let category=null,priority=null,json=false,patterns=false;
const words=[];
for(let i=0;i<args.length;i++) {
 if(args[i]==='--category')category=args[++i];
 else if(args[i]==='--priority')priority=args[++i];
 else if(args[i]==='--json')json=true;
 else if(args[i]==='--patterns')patterns=true;
 else if(args[i].startsWith('--'))throw new Error('Unknown option: '+args[i]);
 else words.push(args[i].toLowerCase());
}
const data=JSON.parse(await fs.readFile(path.join(root,patterns?'patterns.json':'catalog.json'),'utf8'));
if(category&&!Object.hasOwn(data.categories??{},category))throw new Error('Unknown category: '+category);
if(priority&&!Object.hasOwn(data.priorities??{},priority))throw new Error('Unknown priority: '+priority);
const rows=(data.entries??data.patterns).filter(row=>{
 const searchable=JSON.stringify(row).toLowerCase();
 return (!category||row.category===category)&&(!priority||row.priority===priority)&&words.every(word=>searchable.includes(word));
});
if(json)console.log(JSON.stringify(rows,null,2));
else for(const row of rows)console.log(patterns?row.id+' | '+row.name_ar+' | '+row.action_ar:row.name+' | '+data.priorities[row.priority]+' | '+row.description_ar+'\n'+row.source_url);
if(!rows.length&&!json)console.log('لا توجد نتائج؛ ابحث عن الفعل أو نوع العنصر بالعربي أو الإنجليزي.');
