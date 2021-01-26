(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{142:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||l[d]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(142)),i={id:"index",title:"react-virtuoso",slug:"/api",sidebar_label:"README",hide_title:!0},c={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"react-virtuoso",description:"npm version",source:"@site/docs/api/index.md",slug:"/api",permalink:"/api",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/index.md",version:"current",sidebar_label:"README"},s=[{value:"Sponsors",id:"sponsors",children:[]},{value:"Get Started",id:"get-started",children:[]},{value:"Grouped Mode",id:"grouped-mode",children:[]},{value:"Grid",id:"grid",children:[]},{value:"Works With Your UI Library of Choice",id:"works-with-your-ui-library-of-choice",children:[]},{value:"Documentation and Demos",id:"documentation-and-demos",children:[]},{value:"Author",id:"author",children:[]},{value:"Contributing",id:"contributing",children:[{value:"Fixes and new Features",id:"fixes-and-new-features",children:[]},{value:"Docs",id:"docs",children:[]}]},{value:"License",id:"license",children:[]}],p={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("img",{src:"https://user-images.githubusercontent.com/13347/101237112-ec4c6000-36de-11eb-936d-4b6b7ec94976.png",width:"229"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"//badge.fury.io/js/react-virtuoso"}),Object(a.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/react-virtuoso.svg?style=flat",alt:"npm version"})))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"React Virtuoso")," is the most powerful React virtual list component, full stop. Here's why:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Variable sized items out of the box; no manual measurements or hard-coding item heights is necessary;"),Object(a.b)("li",{parentName:"ul"},"Support for ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"//virtuoso.dev/prepend-items/"}),"reverse (bottom up) scrolling and prepending items")," (chat, feeds, etc);"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"//virtuoso.dev/grouped-by-first-letter/"}),"Grouped mode with sticky headers"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"//virtuoso.dev/grid-responsive-columns/"}),"Responsive grid layout"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"//virtuoso.dev/auto-resizing/"}),"Automatic handling of content resize"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"//virtuoso.dev/customize-structure/"}),"Custom Header, Footer, and empty list components"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"//virtuoso.dev/top-items/"}),"Pinned top items"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"//virtuoso.dev/endless-scrolling/"}),"Endless scrolling"),", ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"//virtuoso.dev/press-to-load-more/"}),"press to load more"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"//virtuoso.dev/initial-index/"}),"Initial top most item index"),";"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"//virtuoso.dev/scroll-to-index/"}),"Scroll to index method"),".")),Object(a.b)("p",null,"For live examples and documentation, check the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"//virtuoso.dev"}),"documentation website"),"."),Object(a.b)("h2",{id:"sponsors"},"Sponsors"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getstream.io/?utm_source=github&utm_medium=react-virtuoso&utm_campaign=sponsorship"}),Object(a.b)("img",Object(n.a)({parentName:"a"},{src:"https://i.imgur.com/oU7XYkk.png",alt:"Stream"})))),Object(a.b)("p",null,"React Virtuoso is proudly sponsored by ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getstream.io/?utm_source=github&utm_medium=react-virtuoso&utm_campaign=sponsorship"}),"Stream"),", the leading provider in enterprise grade ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getstream.io/activity-feeds/?utm_source=github&utm_medium=react-virtuoso&utm_campaign=sponsorship"}),"Feed")," & ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getstream.io/chat/?utm_source=github&utm_medium=react-virtuoso&utm_campaign=sponsorship"}),"Chat")," APIs. To learn more about Stream, ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://getstream.io/?utm_source=github&utm_medium=react-virtuoso&utm_campaign=sponsorship"}),"click here"),"."),Object(a.b)("p",null,"If you are using Virtuoso for work, ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.patreon.com/react_virtuoso"}),"sponsor it"),". Any donation helps a lot with the project development and maintenance."),Object(a.b)("h2",{id:"get-started"},"Get Started"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install react-virtuoso\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react'\nimport * as ReactDOM from 'react-dom'\nimport { Virtuoso } from 'react-virtuoso'\n\nconst App = () => {\n  return (\n    <Virtuoso style={{ height: '400px' }} totalCount={200} itemContent={index => <div>Item {index}</div>} />\n  )\n}\n\nReactDOM.render(<App />, document.getElementById('root'))\n")),Object(a.b)("h2",{id:"grouped-mode"},Object(a.b)("a",Object(n.a)({parentName:"h2"},{href:"//virtuoso.dev/grouped-by-first-letter/"}),"Grouped Mode")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"GroupedVirtuoso"),' component is a variant of the "flat" ',Object(a.b)("inlineCode",{parentName:"p"},"Virtuoso"),", with the following differences:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Instead of ",Object(a.b)("inlineCode",{parentName:"li"},"totalCount"),", the component exposes ",Object(a.b)("inlineCode",{parentName:"li"},"groupCounts: number[]")," property, which specifies the amount of items in each group.\nFor example, passing ",Object(a.b)("inlineCode",{parentName:"li"},"[20, 30]")," will render two groups with 20 and 30 items each;"),Object(a.b)("li",{parentName:"ul"},"In addition the ",Object(a.b)("inlineCode",{parentName:"li"},"itemContent")," property, the component requires an additional ",Object(a.b)("inlineCode",{parentName:"li"},"groupContent")," property,\nwhich renders the ",Object(a.b)("strong",{parentName:"li"},"group header"),". The ",Object(a.b)("inlineCode",{parentName:"li"},"groupContent")," callback receives the zero-based group index as a parameter.")),Object(a.b)("h2",{id:"grid"},Object(a.b)("a",Object(n.a)({parentName:"h2"},{href:"//virtuoso.dev/grid-responsive-columns/"}),"Grid")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"VirtuosoGrid")," component displays ",Object(a.b)("strong",{parentName:"p"},"same sized items")," in multiple columns.\nThe layout and item sizing is controlled through CSS class properties, which allows you to use media queries, min-width, percentage, etc."),Object(a.b)("h2",{id:"works-with-your-ui-library-of-choice"},"Works With Your UI Library of Choice"),Object(a.b)("p",null,"You can customize the markup up to your requirements - check ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"//virtuoso.dev/material-ui-endless-scrolling/"}),"the Material UI list demo"),".\nIf you need to support reordering, ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"//virtuoso.dev/react-sortable-hoc/"}),"check the React Sortable HOC example"),"."),Object(a.b)("h2",{id:"documentation-and-demos"},"Documentation and Demos"),Object(a.b)("p",null,"For in-depth documentation and live examples of the supported features and live demos, check the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"//virtuoso.dev"}),"documentation website"),"."),Object(a.b)("h2",{id:"author"},"Author"),Object(a.b)("p",null,"Petyo Ivanov ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"//twitter.com/petyosi"}),"@petyosi"),"."),Object(a.b)("h2",{id:"contributing"},"Contributing"),Object(a.b)("h3",{id:"fixes-and-new-features"},"Fixes and new Features"),Object(a.b)("p",null,"To run the tests, use ",Object(a.b)("inlineCode",{parentName:"p"},"npm run test"),".\nAn end-to-end browser-based test suite is runnable with ",Object(a.b)("inlineCode",{parentName:"p"},"npm run e2e"),", with the pages being ",Object(a.b)("inlineCode",{parentName:"p"},"e2e/*.tsx")," and the tests ",Object(a.b)("inlineCode",{parentName:"p"},"e2e/*.test.ts"),". "),Object(a.b)("p",null,"A convenient way to debug something is to preview one the e2e test cases in the browser.\nTo do that, run ",Object(a.b)("inlineCode",{parentName:"p"},"npm run preview e2e/hello.tsx"),". There are several other examples in the ",Object(a.b)("inlineCode",{parentName:"p"},"e2e")," directory."),Object(a.b)("h3",{id:"docs"},"Docs"),Object(a.b)("p",null,"The documentation site is built with docusaurus and the content is available in the ",Object(a.b)("inlineCode",{parentName:"p"},"site/docs")," directory.\nThe API reference is generated from the doc comments in ",Object(a.b)("inlineCode",{parentName:"p"},"src/components.tsx"),"."),Object(a.b)("h2",{id:"license"},"License"),Object(a.b)("p",null,"MIT License."))}u.isMDXComponent=!0}}]);