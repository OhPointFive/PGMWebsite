(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var l=n(1),a=n(9),o=(n(0),n(220)),r={id:"monument-modes",title:"Monument Modes"},b={id:"modules/objectives/monument-modes",title:"Monument Modes",description:"This module can be used to customize the modes that cores and destroyables cycle",source:"@site/docs/modules/objectives/monument-modes.mdx",permalink:"/docs/modules/objectives/monument-modes",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/objectives/monument-modes.mdx",sidebar:"Modules",previous:{title:"Destroy the Core",permalink:"/docs/modules/objectives/dtc"},next:{title:"Blitz",permalink:"/docs/modules/objectives/blitz"}},c=[],s={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This module can be used to customize the modes that cores and destroyables cycle\nthrough, and at what duration they do so. When a monuments mode changes its\nmaterial is usually changed from a hard to a soft block."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<modes>")," tag can contain any number of ",Object(o.b)("inlineCode",{parentName:"p"},"<mode>")," tags at any duration, even at the same time.\nEach ",Object(o.b)("inlineCode",{parentName:"p"},"<mode>")," has configurable characteristics that define it."),Object(o.b)("div",{className:"table-container"},Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Element"),Object(o.b)("th",null,"Description"),Object(o.b)("th",null),Object(o.b)("th",null,"Value/Children"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"<modes> </modes>")),Object(o.b)("td",null,"Node containing the monument modes for this match."),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("th",null,"Sub-elements"),Object(o.b)("th",null),Object(o.b)("th",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"<mode/>")),Object(o.b)("td",null,"An individual monument mode."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--secondary"},"None")))))),Object(o.b)("h5",{id:"mode-attributes"},"Mode Attributes"),Object(o.b)("div",{className:"table-container"},Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Attribute"),Object(o.b)("th",null,"Description"),Object(o.b)("th",null,"Value"),Object(o.b)("th",null,"Default"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"after")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--danger"},"Required"),"Time from the start of the game till this mode takes effect. If a filter is defined, then it will be the time since the filter passes ",Object(o.b)("label",null,"ALLOW"),"."),Object(o.b)("td",null,Object(o.b)("a",{href:"/docs/reference/misc/time-periods"},"Time Period")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"material")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--danger"},"Required"),"Material the core/destroyable changes to."),Object(o.b)("td",null,Object(o.b)("a",{href:"/docs/reference/items/inventory#material_matchers"},"Single Material Pattern")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"id")),Object(o.b)("td",null,"The unique ID of the mode."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"String")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"filter")),Object(o.b)("td",null,"Filter that triggers mode countdown."),Object(o.b)("td",null,Object(o.b)("a",{href:"/docs/modules/mechanics/filters"},"Dynamic Filter")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"name")),Object(o.b)("td",null,"Custom mode name, used for the mode change notice."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"String")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"show-before")),Object(o.b)("td",null,"The time before a mode is over to show it in the BossBar.",Object(o.b)("br",null),"If show-before is set to 0 the mode is not shown in the BossBar at all."),Object(o.b)("td",null,Object(o.b)("a",{href:"/docs/reference/misc/time-periods"},"Time Period")),Object(o.b)("td",null,"60 sec"))))),Object(o.b)("h4",{id:"examples"},"Examples"),Object(o.b)("p",null,"This specifies a mode that will change the material of affected objectives\nto gold blocks after ten minutes of gameplay."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<modes>\n    <mode after="10m" material="gold block"/>\n</modes>\n')),Object(o.b)("p",null,"A mode can be triggered by a dynamic filter when it passes ",Object(o.b)("inlineCode",{parentName:"p"},"ALLOW")," to PGM.\nIn this case, the ",Object(o.b)("inlineCode",{parentName:"p"},"after")," attribute means the mode will change in the\ngiven amount of time after the filter changes to ",Object(o.b)("inlineCode",{parentName:"p"},"ALLOW"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Turns objectives to emerald blocks 20 seconds after Red Monument and Blue Monument have been destryoed --\x3e\n<modes>\n    <mode after="20s" filter="modes-filter" material="emerald block"/>\n</modes>\n<filters>\n    <all id="modes-filter">\n        <objective>red-mon</objective>\n        <objective>blue-mon</objective>\n    </all>\n</filters>\n')),Object(o.b)("p",null,"In order for an objective to change modes,\nit must have ",Object(o.b)("inlineCode",{parentName:"p"},"modes")," or ",Object(o.b)("inlineCode",{parentName:"p"},'mode-changes="true"')," in its element tag.\nObjectives with ",Object(o.b)("inlineCode",{parentName:"p"},"mode-changes")," enabled will cycle through all\nmodes, regardless if the mode has an ID."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<destroyables name="Monument" materials="obsidian">\n    <destroyable owner="red" mode-changes="true">\n        <region><cuboid min="46,16,26" max="45,14,25"/></region>\n    </destroyable>\n    \x3c!-- destroyable is already affected by modes listed --\x3e\n</destroyable>\n<cores>\n    <core team="red" modes="gold-mode sandstone-mode glass-mode">\n        <region><cuboid min="10,15,12" max="12,13,16"/></region>\n    </core>\n</cores>\n<modes>\n    <mode after="5m" material="gold block" id="gold-mode"/>\n    <mode after="10m" material="sandstone" id="sandstone-mode"/>\n    <mode after="15m" material="glass" id="glass-mode"/>\n</modes>\n')),Object(o.b)("p",null,"This shows a mode that will change the material of enabled objectives to\ncoal blocks after ten minutes of gameplay. The following text, ",Object(o.b)("inlineCode",{parentName:"p"},"> > > EASY MODE < < <"),"\nwill be on top of the BossBar in yellow."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<modes>\n    <mode after="5m" material="coal block" name="`eEASY MODE"/>\n</modes>\n')),Object(o.b)("p",null,"In this example, the two cores and the two monuments turn to glass in ten minutes, and the\ntwo cores will turn to gold in fifteen minutes. Enabling an objective's ",Object(o.b)("inlineCode",{parentName:"p"},"mode-changes"),"\nattribute is not necessary in this case."),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<cores>\n    <core team="red-team"  region="red-core" modes="glass-mode gold-mode"/>\n    <core team="blue-team" region="blu-core" modes="glass-mode gold-mode"/>\n</cores>\n<destroyables materials="obsidian">\n    <destroyable owner="red-team" modes="glass-mode" region="mon-red" name="Red Monument"/>\n    <destroyable owner="blue-team" modes="glass-mode" region="mon-blu" name="Blue Monument"/>\n</destroyables>\n<modes>\n    <mode id="glass-mode" after="10m" material="glass" name="`fGlass Mode"/>\n    <mode id="gold-mode" after="15m" material="gold block" name="`6Gold Mode"/>\n</modes>\n')))}d.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var l=n(0),a=n.n(l);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},i=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=d(n),u=l,O=i["".concat(r,".").concat(u)]||i[u]||m[u]||o;return n?a.a.createElement(O,b({ref:t},s,{components:n})):a.a.createElement(O,b({ref:t},s))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:l,r[1]=b;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);