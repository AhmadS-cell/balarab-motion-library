import fs from 'node:fs/promises';
const headers={'User-Agent':'Balarab-Motion-Library-Research','Accept':'application/vnd.github+json'};
const output=[];
for(const repo of ['remotion-dev/remotion','konvajs/konva','DavidHDev/react-bits','av/remotion-bits','reactvideoeditor/remotion-templates']) {
 const response=await fetch('https://api.github.com/repos/'+repo+'/license',{headers});
 const data=await response.json();
 const row={repo,status:response.status,url:data.html_url??null,path:data.path??null,spdx:data.license?.spdx_id??null};
 if(data.content) {
  const text=Buffer.from(data.content,'base64').toString('utf8');
  await fs.writeFile('motion-library/research/'+repo.replace('/','--')+'-license.txt',text);
  row.excerpt=text.slice(0,350);
 }
 output.push(row);
 console.log(JSON.stringify(row));
}
await fs.writeFile('motion-library/research/license-checks.json',JSON.stringify(output,null,2)+'\n');
