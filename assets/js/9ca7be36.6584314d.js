"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Billing and Payment",order:4},i="Billing and Payment",l={unversionedId:"guide/core-concept/billing-payment",id:"guide/core-concept/billing-payment",title:"Billing and Payment",description:"In Greenfield, users are required to pay two different types of fees:",source:"@site/docs/guide/core-concept/billing-payment.md",sourceDirName:"guide/core-concept",slug:"/guide/core-concept/billing-payment",permalink:"/greenfield-docs/docs/guide/core-concept/billing-payment",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/core-concept/billing-payment.md",tags:[],version:"current",frontMatter:{title:"Billing and Payment",order:4},sidebar:"guideSidebar",previous:{title:"Key Management",permalink:"/greenfield-docs/docs/guide/core-concept/key-management"},next:{title:"Cross-Chain Programmability",permalink:"/greenfield-docs/docs/guide/core-concept/programmability"}},s={},c=[{value:"Storage Service Fee",id:"storage-service-fee",level:2},{value:"Global Virtual Group Family &amp; Global Virtual Group",id:"global-virtual-group-family--global-virtual-group",level:3},{value:"Payment Account",id:"payment-account",level:3},{value:"Downgraded service",id:"downgraded-service",level:3},{value:"Trust or Shift",id:"trust-or-shift",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"billing-and-payment"},"Billing and Payment"),(0,a.kt)("p",null,"In Greenfield, users are required to pay two different types of fees:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Firstly, every transaction will require gas fees to pay the Greenfield validator to\nwrite the metadata on-chain as described in ",(0,a.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/core-concept/gas-fees"},"Gas and Fee")," part."),(0,a.kt)("li",{parentName:"ul"},"Secondly, the Storage Providers (SPs) charge the users for their storage service. Such payment also happens on the\nGreenfield.")),(0,a.kt)("p",null,"The storage service fee will be charged on Greenfield in a steam payment style\nlike ",(0,a.kt)("a",{parentName:"p",href:"https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/constant-flow-agreement-cfa"},"Superfluid"),"."),(0,a.kt)("h2",{id:"storage-service-fee"},"Storage Service Fee"),(0,a.kt)("p",null,"There are two kinds of storage service fees in Greenfield: ",(0,a.kt)("strong",{parentName:"p"},"object storage fee")," and ",(0,a.kt)("strong",{parentName:"p"},"data package fee"),"."),(0,a.kt)("p",null,"For storage, every object stored on Greenfield is charged at the price calculated by size, replica numbers,\na base price ratio, and other parameters. Once the object is stored, the total charge of\nstorage will be mainly only related to time and the base price."),(0,a.kt)("p",null,"Users are granted a free, time-based quota for downloading data, with each bucket corresponding to a set of their\nobjects. If the quota is exceeded, users can upgrade their data package to obtain additional quota. The price for each\ndata package is fixed for a certain period (unless the primary storage provider updates the read price and the user\ntakes some actions to reflect the price change), during which users will only be charged based on the amount of time\nthey spend downloading and the package price. This charging scheme remains in effect until the user modifies their data\npackage settings."),(0,a.kt)("h3",{id:"global-virtual-group-family--global-virtual-group"},"Global Virtual Group Family & Global Virtual Group"),(0,a.kt)("p",null,"For storage fee, it will be not streamed to storage providers directly. It will be streamed to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Global Virtual Group Family's virtual funding address for ",(0,a.kt)("strong",{parentName:"li"},"data package fee")," and primary sp's ",(0,a.kt)("strong",{parentName:"li"},"object storage fee")),(0,a.kt)("li",{parentName:"ul"},"Global Virtual Group's virtual funding address for all secondary sp's ",(0,a.kt)("strong",{parentName:"li"},"object storage fee")),(0,a.kt)("li",{parentName:"ul"},"Validator tax pool for extra tax fee (e.g. 1%), which will be used for rewarding data availability challenge submitters.")),(0,a.kt)("p",null,"When storage providers want to get their income, they can withdraw from Global Virtual Group Family and Global Virtual Group\nthey are in.\nThe validator tax pool cannot be controlled via any private key, and is used for challenge reward."),(0,a.kt)("h3",{id:"payment-account"},"Payment Account"),(0,a.kt)("p",null,'By default, the object owner\'s address will be used to pay for the objects it owns.\nBut users can also create multiple "payment accounts" and associate objects to different payment\naccounts to pay for storage and bandwidth.'),(0,a.kt)("p",null,'The address format of the payment account is the same as normal accounts.\nIt\'s derived by the hash of the user address and payment account index.\nHowever, the payment accounts are actually only logical ones and only exist in the storage payment module.\nUsers can deposit into, withdraw from and query the balance of payment accounts on the Greenfield blockchain,\nbut users cannot use payment accounts to perform staking or other on-chain transactions.\nPayment accounts can be set as "non-refundable". Users cannot withdraw funds from such payment accounts.'),(0,a.kt)("h3",{id:"downgraded-service"},"Downgraded service"),(0,a.kt)("p",null,"Once the payment accounts run out of BNB, the objects associated with these payment accounts will\nsuffer from a downgraded service of downloading, i.e. the download speed and connection numbers will be limited.\nOnce the fund is transferred to the payment accounts, the service quality can be resumed right away.\nIf the service is not resumed for a long time, it is the SPs' discretionary decision to clear the data out,\nin a similar way to how SPs claim to stop services to certain objects. In such a case, the data may be gone\nfrom Greenfield completely."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If users fail to renew their subscription in a timely manner, ",(0,a.kt)("strong",{parentName:"p"},"there is a risk of their stored data being permanently\ndeleted."))),(0,a.kt)("h3",{id:"trust-or-shift"},"Trust or Shift"),(0,a.kt)("p",null,"In Greenfield, there is trust between the users and the SPs for data download."),(0,a.kt)("p",null,"Since downloading bandwidth incurs additional fees and the download journal is not completely stored on the Greenfield\nblockchain, SPs offer an endpoint interface for users to access detailed logs and downloaders'\nsignatures for download billing.\nIf the users and the SPs cannot agree on the bill, users may just select another Primary SP."),(0,a.kt)("p",null,"For more tech details, please refer to\nthe ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/billing-and-payment"},"stream payment module design"),"."))}p.isMDXComponent=!0}}]);