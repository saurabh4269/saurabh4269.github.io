(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{1494:function(e,t,n){Promise.resolve().then(n.t.bind(n,8210,23)),Promise.resolve().then(n.t.bind(n,3054,23)),Promise.resolve().then(n.bind(n,7507)),Promise.resolve().then(n.bind(n,3166))},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var a=n(231),r=n.n(a)},6463:function(e,t,n){"use strict";var a=n(1169);n.o(a,"usePathname")&&n.d(t,{usePathname:function(){return a.usePathname}}),n.o(a,"useRouter")&&n.d(t,{useRouter:function(){return a.useRouter}})},3412:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7437),r=e=>(0,a.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",className:"w-5 h-5",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z",clipRule:"evenodd"})}),l=e=>(0,a.jsx)("svg",{fill:"currentColor",viewBox:"0 0 24 24",className:"w-5 h-5",...e,children:(0,a.jsx)("path",{d:"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"})}),s=n(9512);function o(e){let{className:t,thumbClassName:n}=e,{resolvedTheme:o,setTheme:c}=(0,s.F)();return(0,a.jsx)("button",{type:"button",onClick:()=>c("light"===o?"dark":"light"),className:"flex rounded-full bg-light dark:bg-neutral-800/90 w-full justify-start dark:justify-end transition-all duration-300 hover:animate-scale border outline-none border-transparent hover:border-neutral-200 dark:hover:border-neutral-700/50 "+t,children:(0,a.jsxs)("div",{className:"justify-end items-end h-10 w-10 rounded-full bg-white dark:bg-dark p-1 m-1 transition-all duration-300 shadow-sm hover:animate-scale "+n,children:[(0,a.jsx)(l,{className:"dark:hidden  text-yellow-400 transition-all duration-300"}),(0,a.jsx)(r,{className:"hidden dark:block text-slate-500 transition-all duration-300"})]})})}},7507:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(7437),r=n(9512);function l(e){let{children:t}=e;return(0,a.jsx)(r.f,{attribute:"class",enableSystem:!0,defaultTheme:"system",children:t})}},3166:function(e,t,n){"use strict";n.d(t,{default:function(){return v}});var a=n(7437),r=e=>(0,a.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",...e,children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6h16.5M3.75 12.5h16.5m-16.5 6.5h16.5"})}),l=n(3412);class s{}s.main=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Work",path:"/work"},{name:"Blog",path:"/blog"},{name:"Contact",path:"/contact"}];var o=n(7138),c=n(2265),i=n(6463);let d=()=>{var e;let t=(null!==(e=(0,i.usePathname)())&&void 0!==e?e:"").split("/");return t.length<2?[]:t.slice(1)};var u=()=>{let e=d();return 0===e.length?"/":"/"+e[0]},m=n(3580),h=n(2589),f=function(e){let{menu:t}=e,[n,r]=(0,c.useState)(!1);return{dropdown:(0,a.jsxs)("div",{className:"absolute",role:"menu",children:[n&&(0,a.jsx)("div",{className:"fixed inset-0 backdrop-blur-sm bg-neutral-800/20 z-40",onClick:()=>r(!1)}),(0,a.jsx)("div",{className:"relative z-50 mt-3",children:n&&t})]}),isOpen:n,setOpen:r}},v=function(){let e=u(),[t,n]=(0,c.useState)(e);(0,c.useEffect)(()=>{n(e)},[e]);let i=(0,a.jsx)(l.Z,{className:"hover:animate-none !w-[80px]",thumbClassName:"h-7 w-7"}),d="py-4 px-6 sm:py-[8px] sm:px-4 dark:hover:bg-neutral-800 hover:bg-neutral-200/70 dark:hover:text-white hover:text-black rounded-full ",v=s.main.map(e=>{let r=t===e.path;return(0,a.jsx)(o.default,{onClick:()=>{(0,h.k)(),n(e.path),x.isOpen&&x.setOpen(!1)},href:e.path,children:(0,a.jsx)("div",{className:d+"text-base font-normal min-w-[200px] sm:min-w-0 text-start "+(r?"text-black dark:text-white":""),children:e.name})},e.name)}),x=f({menu:(0,a.jsx)("div",{className:m.Z+"px-3 py-4 justify-start shadow-md",children:v})});return(0,a.jsx)("header",{className:"w-full sticky top-0 !z-50 bg-lighter dark:bg-darker rounded-b-3xl sm:backdrop-blur-md sm:!bg-opacity-90 pt-5 mt-4",children:(0,a.jsxs)("div",{className:m.Z+"!p-1 !flex-row items-center justify-between rounded-3xl w-full text-sm text-neutral-500 text-center !px-1.5",children:[(0,a.jsx)("div",{className:"hidden sm:flex flex-wrap items-center w-full",children:v}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{onClick:()=>x.setOpen(!x.isOpen),className:d+"flex sm:hidden !py-1.5 !px-4",children:(0,a.jsx)(r,{className:"w-7 h-7 text-dark dark:text-neutral-200",strokeWidth:2})}),(0,a.jsx)("div",{className:"sm:hidden",children:x.dropdown})]}),i]})})}},3580:function(e,t){"use strict";t.Z="flex flex-col w-full h-full bg-white dark:bg-dark border border-neutral-400/20 dark:border-neutral-600/10 rounded-3xl p-6 items-start justify-between "},2589:function(e,t,n){"use strict";n.d(t,{k:function(){return a}});let a=()=>{window.scrollTo({top:0,behavior:"instant"})}},3054:function(){},8210:function(e){e.exports={style:{fontFamily:"'__font_839df1', '__font_Fallback_839df1'"},className:"__className_839df1"}},9512:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return d}});var a=n(2265),r=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,o=a.createContext(void 0),c={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=a.useContext(o))?e:c},d=e=>a.useContext(o)?e.children:a.createElement(m,{...e}),u=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:c=!0,storageKey:i="theme",themes:d=u,defaultTheme:m=s?"system":"light",attribute:b="data-theme",value:p,children:k,nonce:w}=e,[g,y]=a.useState(()=>f(i,m)),[j,N]=a.useState(()=>f(i)),C=p?Object.values(p):d,S=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=x());let a=p?p[t]:t,l=n?v():null,o=document.documentElement;if("class"===b?(o.classList.remove(...C),a&&o.classList.add(a)):a?o.setAttribute(b,a):o.removeAttribute(b),c){let e=r.includes(m)?m:null,n=r.includes(t)?t:e;o.style.colorScheme=n}null==l||l()},[]),T=a.useCallback(e=>{let t="function"==typeof e?e(e):e;y(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),_=a.useCallback(e=>{N(x(e)),"system"===g&&s&&!t&&S("system")},[g,t]);a.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),a.useEffect(()=>{let e=e=>{e.key===i&&T(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),a.useEffect(()=>{S(null!=t?t:g)},[t,g]);let E=a.useMemo(()=>({theme:g,setTheme:T,forcedTheme:t,resolvedTheme:"system"===g?j:g,themes:s?[...d,"system"]:d,systemTheme:s?j:void 0}),[g,T,t,j,s,d]);return a.createElement(o.Provider,{value:E},a.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:s,enableColorScheme:c,storageKey:i,themes:d,defaultTheme:m,attribute:b,value:p,children:k,attrs:C,nonce:w}),k)},h=a.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:o,enableColorScheme:c,defaultTheme:i,value:d,attrs:u,nonce:m}=e,h="system"===i,f="class"===s?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),v=c?(r.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",x=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=d?d[e]:e,l=t?e+"|| ''":"'".concat(a,"'"),o="";return c&&n&&!t&&r.includes(e)&&(o+="d.style.colorScheme = '".concat(e,"';")),"class"===s?t||a?o+="c.add(".concat(l,")"):o+="null":a&&(o+="d[s](n,".concat(l,")")),o},b=t?"!function(){".concat(f).concat(x(t),"}()"):o?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(l,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(x("dark"),"}else{").concat(x("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(x(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+x(i,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(x(d?"x[e]":"e",!0),"}else{").concat(x(i,!1,!1),";}").concat(v,"}catch(t){}}();");return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:b}})}),f=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},x=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")}},function(e){e.O(0,[609,231,971,23,744],function(){return e(e.s=1494)}),_N_E=e.O()}]);