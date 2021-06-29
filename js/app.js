(()=>{function x(t){return`<li class="d-flex justify-content-between align-items-center list-task ${t.completed?"task-check":""}">
            <label class="task">
              <input data-id="${t.id}" type="checkbox" class="checkbox" ${t.completed?"checked":""}/>
              ${t.name}
            </label>
            <button data-id="${t.id}" class="btn-trash" type="button">
              <i class="fas fa-trash"></i>
            </button>
          </li>`}var p=x;function i(t,e){e.innerHTML=t}var o=[{id:1,name:"First task",completed:!1},{id:2,name:"Second task",completed:!1},{id:3,name:"Third task",completed:!0}];function k(){return o}function b(t){return o.filter(function(e){switch(t){case"active":if(!e.completed)return e;break;case"completed":if(e.completed)return e;break;case"all":return e}})}function y(t){return o=o.filter(function(n){if(n.id!=t)return n}),o.filter(function(n){if(n.completed)return n})}function L(){return o.length>0?o[o.length-1].id+1:0}function T(t){let n={id:L(),name:t,completed:!1};return o.push(n),o}function h(t){o=o.filter(function(e){return e.id==t&&(e.completed=!e.completed),e})}function v(){o=o.filter(function(t){if(t.completed!=!0)return t})}function g(t){return`<ul class="list-tasks">
            ${t.map(p).join("")} 
        </ul>`}function s(t,e){i(g(t),e),q(),w(e),A(e)}function q(){document.querySelectorAll(".checkbox").forEach(function(e){e.addEventListener("click",function(n){n.target.parentElement.parentElement.classList.toggle("task-check");let c=n.currentTarget.dataset.id;h(c)})})}function w(t){document.querySelectorAll(".btn-trash").forEach(function(n){n.addEventListener("click",function(c){let l=c.currentTarget.dataset.id,a=y(l);s(a,t),document.querySelectorAll(".btn-trash").forEach(function(d){d.style.display="block"})})})}function A(t){document.querySelector("#trash").addEventListener("click",function(n){v(),s([],t)})}function I(t){i(` <ul class="nav-buttons">
    <li class="nav-button active"><button class="button" data-id="all">All</button">
    </li>
    <li class="nav-button"><button class="button" data-id="active">Active</button></li>
    <li class="nav-button"><button class="button" data-id="completed">Completed</button></li>
</ul>
    `,t),C()}function C(){let t=document.querySelectorAll(".nav-button"),e=document.querySelector("#tasks");t.forEach(function(n){n.addEventListener("click",function(c){c.target.parentElement.classList.add("active"),t.forEach(function(r){n!=r&&r.classList.remove("active")});let l=c.currentTarget.children[0].dataset.id,a=b(l);s(a,e);let u=document.querySelector("#trash"),d=document.querySelectorAll(".btn-trash"),f=document.querySelector(".button-submit"),m=document.querySelector(".input");l==="completed"?(u.style.display="block",f.style.display="none",m.style.display="none",d.forEach(function(r){r.style.display="block"})):(u.style.display="none",f.style.display="initial",m.style.display="initial")})})}var $=I;function B(t){i(`<input class="input" type="text" placeholder="add details">
    <button type="button" class="button-submit">Add</button>`,t),F(),N()}var E=B;function F(){document.querySelector(".button-submit").addEventListener("click",function(e){let n=document.querySelector(".input");S(n)})}function N(){let t=document.querySelector(".input");t.addEventListener("keydown",function(e){let n=e.key;if(console.log(n),n!="Enter")return!1;S(t)})}function S(t){let e=document.querySelector("#tasks"),n=t.value;if(n===""||n.length<=3)return!1;let c=T(n);s(c,e),t.value=""}var D=k(),j=document.querySelector("#tasks"),M=document.querySelector("#Filters"),H=document.querySelector("#InputTask");window.addEventListener("DOMContentLoaded",function(){s(D,j),$(M),E(H)});})();