import React from "react";
import ReactDOM from 'react-dom/client';
/* 
<div id='parent'>
   <div id='child'>
      <h1>I am h1 tag</h1>
   </div>  
</div>

*/

const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I am h1 tag'), React.createElement('h1', {}, 'I am another h1 tag boyyy')]),
    React.createElement('div', { id: 'child2' },
        [React.createElement('h1', {}, 'I am h1 tag'), React.createElement('h1', {}, 'I am another h1 tag girlll')])]);

/* const header = React.createElement('h1', { id: 'header' }, 'Hello from React :>');
console.log(header); */
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); 