"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1902],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=a.createContext({}),i=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(o),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||n;return o?a.createElement(f,s(s({ref:t},c),{},{components:o})):a.createElement(f,s({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<n;i++)s[i]=o[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},52072:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var a=o(87462),r=(o(67294),o(3905));const n={title:"Uploader"},s="Uploader",l={unversionedId:"guide/storage-provider/modules/uploader",id:"guide/storage-provider/modules/uploader",title:"Uploader",description:"Uploader is responsible for receiving and cutting the object payload data into segments, then storing it into PieceStore, and notifying the downstream service to asynchronously replicate the object payload data that processed by EC algorithm to the secondary SP. The workflow of Uploader users can refer Uploader. We currently abstract SP as the GfSp framework, which provides users with customizable capabilities to meet their specific requirements. Uploader module provides an abstract interface, which is called Uploader, as follows:",source:"@site/docs/guide/storage-provider/modules/uploader.md",sourceDirName:"guide/storage-provider/modules",slug:"/guide/storage-provider/modules/uploader",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/uploader",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/modules/uploader.md",tags:[],version:"current",frontMatter:{title:"Uploader"},sidebar:"guideSidebar",previous:{title:"Authenticator",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/authenticator"},next:{title:"Downloader",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/downloader"}},d={},i=[{value:"UploadObjectTask",id:"uploadobjecttask",level:2},{value:"ResumableUploadObjectTask",id:"resumableuploadobjecttask",level:2},{value:"GfSp Framework Uploader Code",id:"gfsp-framework-uploader-code",level:2}],c={toc:i},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uploader"},"Uploader"),(0,r.kt)("p",null,"Uploader is responsible for receiving and cutting the object payload data into segments, then storing it into PieceStore, and notifying the downstream service to asynchronously replicate the object payload data that processed by EC algorithm to the secondary SP. The workflow of Uploader users can refer ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/introduction/workflow#uploader"},"Uploader"),". We currently abstract SP as the GfSp framework, which provides users with customizable capabilities to meet their specific requirements. Uploader module provides an abstract interface, which is called ",(0,r.kt)("inlineCode",{parentName:"p"},"Uploader"),", as follows:"),(0,r.kt)("p",null,"Uploader is an abstract interface to handle putting object requests from users' account and store their payload data into primary SP piece store."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Uploader interface {\n    Modular\n    // PreUploadObject prepares to handle UploadObject, it can do some checks\n    // such as checking for duplicates, if limitation of SP has been reached, etc.\n    PreUploadObject(ctx context.Context, task task.UploadObjectTask) error\n    // HandleUploadObjectTask handles the UploadObject, store payload data into piece store by data stream.\n    HandleUploadObjectTask(ctx context.Context, task task.UploadObjectTask, stream io.Reader) error\n    // PostUploadObject is called after HandleUploadObjectTask, it can recycle\n    // resources, make statistics and do some other operations.\n    PostUploadObject(ctx context.Context, task task.UploadObjectTask)\n    \n    // PreResumableUploadObject prepares to handle ResumableUploadObject, it can do some checks\n    // such as checking for duplicates, if limitation of SP has been reached, etc.\n    PreResumableUploadObject(ctx context.Context, task task.ResumableUploadObjectTask) error\n    // HandleResumableUploadObjectTask handles the ResumableUploadObject, store payload data into piece store by data stream.\n    HandleResumableUploadObjectTask(ctx context.Context, task task.ResumableUploadObjectTask, stream io.Reader) error\n    // PostResumableUploadObject is called after HandleResumableUploadObjectTask, it can recycle\n    // resources, statistics and other operations.\n    PostResumableUploadObject(ctx context.Context, task task.ResumableUploadObjectTask)\n    \n    // QueryTasks queries upload object tasks that running on uploading by task sub-key.\n    QueryTasks(ctx context.Context, subKey task.TKey) ([]task.Task, error)\n}\n")),(0,r.kt)("p",null,"Uploader interface inherits ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/lifecycle_modular#modular-interface"},"Modular interface"),", so Uploader module can be managed by lifecycle and resource manager. In terms of the functions provided by Uploader module, there is only one part: just upload object. It has three methods: PreXXX, HanldeXXX and PostXXX. Therefore, you can rewrite these methods to meet your own requirements. As we can see from the second parameter of the methods defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"Uploader")," interface, uploadObject is split into ",(0,r.kt)("inlineCode",{parentName:"p"},"UploadObjectTask"),". They are also defined as an interface. We can query UploadObject tasks that we care about by ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryTasks")," method through using subKey."),(0,r.kt)("h2",{id:"uploadobjecttask"},"UploadObjectTask"),(0,r.kt)("p",null,"The corresponding interfaces definition is shown below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#objecttask"},"ObjectTask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#uploadobjecttask"},"UploadObjectTask"))),(0,r.kt)("p",null,"ObjectTask inherits ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#task"},"Task interface"),". UploadObjectTask also defines ten methods to help query info or set data. You can overwrite all these methods in your own."),(0,r.kt)("p",null,"The corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"protobuf")," definition is shown below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#gfspuploadobjecttask-proto"},"GfSpUploadObjectTask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#objectinfo-proto"},"ObjectInfo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#params-proto"},"Params"))),(0,r.kt)("h2",{id:"resumableuploadobjecttask"},"ResumableUploadObjectTask"),(0,r.kt)("p",null,"The corresponding interfaces definition is shown below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#objecttask"},"ObjectTask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#resumableuploadobjecttask"},"ResumableUploadObjectTask"))),(0,r.kt)("p",null,"ObjectTask inherits ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#task"},"Task interface"),". UploadObjectTask also defines ten methods to help query info or set data. You can overwrite all these methods in your own."),(0,r.kt)("p",null,"The corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"protobuf")," definition is shown below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#gfspresumableuploadobjecttask-proto"},"GfSpResumableUploadObjectTask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#objectinfo-proto"},"ObjectInfo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#params-proto"},"Params"))),(0,r.kt)("h2",{id:"gfsp-framework-uploader-code"},"GfSp Framework Uploader Code"),(0,r.kt)("p",null,"Uploader module code implementation: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/modular/uploader"},"Uploader")))}u.isMDXComponent=!0}}]);