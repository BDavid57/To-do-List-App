(this["webpackJsonpto-do-list-app"]=this["webpackJsonpto-do-list-app"]||[]).push([[0],{56:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),s=n.n(c),i=n(14),u=(n(56),n(35)),d=n(43),l=n.n(d),j=n(6),o=function(e){return Object(j.jsx)("div",{children:e.itemList.map((function(t){return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsxs)("div",{className:"date-time-display",children:[Object(j.jsx)("p",{children:t.date}),Object(j.jsx)("div",{className:"time-display",children:Object(j.jsx)("p",{children:t.hour})})]}),Object(j.jsxs)("div",{className:"content-display",children:[Object(j.jsx)("p",{children:t.item}),Object(j.jsx)(l.a,{onClick:function(){return function(t){var n=e.itemList.filter((function(e){return e.key!==t}));e.updateItemList(n)}(t.key)},className:"delete-button",style:{fontSize:40,color:u.a[300]}})]})]},t.key)}))})},m=n(16),b=n(100),O=n(99),p=function(e){var t=function(){var t={key:Math.floor(1e5*Math.random()),item:e.currentItem,date:e.currentDate,hour:e.currentTime};e.updateItemList([].concat(Object(m.a)(e.itemList),[t])),e.updateCurrentItem(""),e.setCurrentDate(""),e.setCurrentTime(""),console.log(e.itemList)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"To Do List"}),Object(j.jsx)("div",{className:"input-wrapper",children:Object(j.jsx)(O.a,{className:"item-text",variant:"standard",label:"Add Item",InputLabelProps:{shrink:!0},value:e.currentItem,onKeyDown:function(e){return"Enter"===e.key?t():null},onChange:function(t){return e.updateCurrentItem(t.target.value)}})}),Object(j.jsxs)("div",{className:"date-time-wrapper",children:[Object(j.jsxs)("div",{className:"date-and-time",children:[Object(j.jsx)("div",{className:"date",children:Object(j.jsx)(O.a,{value:e.currentDate,type:"date",onChange:function(t){return e.setCurrentDate(t.target.value)}})}),Object(j.jsx)("div",{className:"time",children:Object(j.jsx)(O.a,{value:e.currentTime,type:"time",onChange:function(t){return e.setCurrentTime(t.target.value)}})})]}),Object(j.jsx)(b.a,{onClick:t,children:"Add"})]})]})};var h=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),u=s[0],d=s[1],l=Object(r.useState)(""),m=Object(i.a)(l,2),b=m[0],O=m[1],h=Object(r.useState)(localStorage.itemList?JSON.parse(localStorage.itemList):[]),x=Object(i.a)(h,2),v=x[0],f=x[1];return Object(r.useEffect)((function(){localStorage.setItem("itemList",JSON.stringify(v))}),[v]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(p,{currentItem:b,updateCurrentItem:O,itemList:v,updateItemList:f,currentDate:n,setCurrentDate:a,currentTime:u,setCurrentTime:d}),Object(j.jsx)(o,{itemList:v,updateItemList:f})]})})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.bad4aa28.chunk.js.map