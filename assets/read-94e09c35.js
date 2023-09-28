async function a(r,e){try{const o=await(await fetch(r)).text();e(o)}catch(t){console.error(`Error loading description file: ${r} Error: ${t}`)}}export{a as r};
