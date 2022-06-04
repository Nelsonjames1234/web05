1:  const close=document.querySelector(".close");  
2:  const open=document.querySelector(".ham");  
3:  const menu=document.querySelector(".menu")  
4:  close.addEventListener("click",()=>{  
5:    menu.style.visibility="hidden";  
6:  })  
7:  open.addEventListener("click",()=>{  
8:    menu.style.visibility="visible";  
9:  }) 
(function(doc){
    var scriptElm = doc.scripts[doc.scripts.length - 1];
    var warn = ['[ionicons] Deprecated script, please remove: ' + scriptElm.outerHTML];
  
    warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')
  
    var parts = scriptElm.src.split('/');
    parts.pop();
    parts.push('ionicons');
    var url = parts.join('/');
  
    var scriptElm = doc.createElement('script');
    scriptElm.setAttribute('type', 'module');
    scriptElm.src = url + '/ionicons.esm.js';
    doc.head.appendChild(scriptElm);
    warn.push(scriptElm.outerHTML);
  
    scriptElm = doc.createElement('script');
    scriptElm.setAttribute('nomodule', '');
    scriptElm.src = url + '/ionicons.js';
    doc.head.appendChild(scriptElm);
    warn.push(scriptElm.outerHTML);
  
    console.warn(warn.join('\n'));
  
  })(document);
  
