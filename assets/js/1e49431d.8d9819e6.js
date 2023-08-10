"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9555],{40494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>_,frontMatter:()=>d,metadata:()=>c,toc:()=>y});var r=a(87462),i=(a(67294),a(3905)),s=a(26389),l=a(94891),m=(a(75190),a(47507)),n=a(24310),o=a(63303),p=(a(75035),a(85162));const d={id:"virtual-group-params",title:"VirtualGroupParams",description:"Parameters queries the parameters of the module.",sidebar_label:"VirtualGroupParams",hide_title:!0,hide_table_of_contents:!0,api:{description:"Parameters queries the parameters of the module.",operationId:"VirtualGroupParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{deposit_denom:{type:"string",description:"deposit_denom defines the staking coin denomination."},gvg_staking_per_bytes:{type:"string",title:"store price, in bnb wei per charge byte"},max_local_virtual_group_num_per_bucket:{type:"integer",format:"int64",title:"the max number of lvg which allowed in a bucket"},max_global_virtual_group_num_per_family:{type:"integer",format:"int64",title:"the max number of gvg which can exist in a family"},max_store_size_per_family:{type:"string",format:"uint64",title:"if the store size reach the exceed, the family is not allowed to sever more buckets"}}}},description:"QueryParamsResponse is response type for the Query/Params RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Storage"],method:"get",path:"/greenfield/virtualgroup/params",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"VirtualGroupParams",description:{content:"Parameters queries the parameters of the module.",type:"text/plain"},url:{path:["greenfield","virtualgroup","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,c={unversionedId:"greenfield-api/virtual-group-params",id:"greenfield-api/virtual-group-params",title:"VirtualGroupParams",description:"Parameters queries the parameters of the module.",source:"@site/docs/greenfield-api/virtual-group-params.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/virtual-group-params",permalink:"/greenfield-docs/docs/greenfield-api/virtual-group-params",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"virtual-group-params",title:"VirtualGroupParams",description:"Parameters queries the parameters of the module.",sidebar_label:"VirtualGroupParams",hide_title:!0,hide_table_of_contents:!0,api:{description:"Parameters queries the parameters of the module.",operationId:"VirtualGroupParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{deposit_denom:{type:"string",description:"deposit_denom defines the staking coin denomination."},gvg_staking_per_bytes:{type:"string",title:"store price, in bnb wei per charge byte"},max_local_virtual_group_num_per_bucket:{type:"integer",format:"int64",title:"the max number of lvg which allowed in a bucket"},max_global_virtual_group_num_per_family:{type:"integer",format:"int64",title:"the max number of gvg which can exist in a family"},max_store_size_per_family:{type:"string",format:"uint64",title:"if the store size reach the exceed, the family is not allowed to sever more buckets"}}}},description:"QueryParamsResponse is response type for the Query/Params RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Storage"],method:"get",path:"/greenfield/virtualgroup/params",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"VirtualGroupParams",description:{content:"Parameters queries the parameters of the module.",type:"text/plain"},url:{path:["greenfield","virtualgroup","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"GlobalVirtualGroupFamily",permalink:"/greenfield-docs/docs/greenfield-api/global-virtual-group-family"},next:{title:"AccountInfo",permalink:"/greenfield-docs/docs/greenfield-api/account-info"}},g={},y=[{value:"VirtualGroupParams",id:"virtualgroupparams",level:2}],h={toc:y},f="wrapper";function _(e){let{components:t,...a}=e;return(0,i.kt)(f,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"virtualgroupparams"},"VirtualGroupParams"),(0,i.kt)("p",null,"Parameters queries the parameters of the module."),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"params"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"params holds all the parameters of this module.")),(0,i.kt)(n.Z,{collapsible:!1,name:"deposit_denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"deposit_denom defines the staking coin denomination."},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"gvg_staking_per_bytes",required:!1,schemaName:"store price, in bnb wei per charge byte",qualifierMessage:void 0,schema:{type:"string",title:"store price, in bnb wei per charge byte"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"max_local_virtual_group_num_per_bucket",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"the max number of lvg which allowed in a bucket"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"max_global_virtual_group_num_per_family",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"the max number of gvg which can exist in a family"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"max_store_size_per_family",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"if the store size reach the exceed, the family is not allowed to sever more buckets"},mdxType:"SchemaItem"}))))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "params": {\n    "deposit_denom": "string",\n    "gvg_staking_per_bytes": "string",\n    "max_local_virtual_group_num_per_bucket": 0,\n    "max_global_virtual_group_num_per_family": 0,\n    "max_store_size_per_family": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(n.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}_.isMDXComponent=!0}}]);