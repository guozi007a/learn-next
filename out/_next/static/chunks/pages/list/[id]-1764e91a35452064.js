(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{4836:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/list/[id]",function(){return e(4934)}])},4934:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return _}});var s=e(5893),r=e(1163),c=e(7294),i=e(9351),l=e.n(i),d=e(1664),o=e.n(d),u=e(5703),a=e.n(u);let h=t=>{let{href:n,text:e}=t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{className:a().link_button,children:(0,s.jsx)(o(),{href:n,children:e})})})},x=()=>{let t=(0,r.useRouter)(),{id:n}=t.query,[e,i]=(0,c.useState)({}),d=async()=>{if(n)try{let t=await fetch("".concat("/learn-next","/api/list/").concat(n)),e=await t.json();"0"===e.code&&i(e.data)}catch(t){console.log(t)}};return(0,c.useEffect)(()=>{d()},[n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"以下是你要查看的单个学生的信息："}),(0,s.jsx)("table",{className:l().table,rules:"rows",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"姓名"}),(0,s.jsx)("td",{children:e.name})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"性别"}),(0,s.jsx)("td",{children:e.sex?"男":"女"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"分数"}),(0,s.jsx)("td",{children:e.score})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"排名"}),(0,s.jsx)("td",{children:e.sort})]})]})}),(0,s.jsx)(h,{href:"/",text:"返回首页"})]})};var _=x},5703:function(t){t.exports={link_button:"LinkButton_link_button__fSENT"}},9351:function(t){t.exports={table:"_id__table__s1vor"}},1163:function(t,n,e){t.exports=e(6885)}},function(t){t.O(0,[664,774,888,179],function(){return t(t.s=4836)}),_N_E=t.O()}]);