"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[815],{68607:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>g,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>f});var i=a(87462),l=(a(67294),a(3905)),r=a(26389),s=a(94891),o=a(75190),n=a(47507),m=a(24310),p=a(63303),u=(a(75035),a(85162));const d={id:"global-virtual-group-family",title:"GlobalVirtualGroupFamily",description:"Queries a global virtual group family by its id.",sidebar_label:"GlobalVirtualGroupFamily",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a global virtual group family by its id.",operationId:"GlobalVirtualGroupFamily",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{global_virtual_group_family:{type:"object",properties:{id:{type:"integer",format:"int64",description:"id is the identifier of the global virtual group family."},primary_sp_id:{type:"integer",format:"int64",title:"primary_sp_id"},global_virtual_group_ids:{type:"array",items:{type:"integer",format:"int64"},description:"global_virtual_group_ids is a list of identifiers of the global virtual groups associated with the family."},virtual_payment_address:{type:"string",description:"virtual_payment_address is the payment address associated with the global virtual group family."}},description:"Global virtual group family serve as a means of grouping global virtual groups.\nEach bucket must be associated with a unique global virtual group family and cannot cross families."}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"family_id",in:"query",required:!1,schema:{type:"integer",format:"int64"}}],tags:["Storage"],method:"get",path:"/greenfield/virtualgroup/global_virtual_group_family",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"GlobalVirtualGroupFamily",description:{content:"Queries a global virtual group family by its id.",type:"text/plain"},url:{path:["greenfield","virtualgroup","global_virtual_group_family"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"family_id",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},g=void 0,y={unversionedId:"greenfield-api/global-virtual-group-family",id:"greenfield-api/global-virtual-group-family",title:"GlobalVirtualGroupFamily",description:"Queries a global virtual group family by its id.",source:"@site/docs/greenfield-api/global-virtual-group-family.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/global-virtual-group-family",permalink:"/greenfield-docs/docs/greenfield-api/global-virtual-group-family",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"global-virtual-group-family",title:"GlobalVirtualGroupFamily",description:"Queries a global virtual group family by its id.",sidebar_label:"GlobalVirtualGroupFamily",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a global virtual group family by its id.",operationId:"GlobalVirtualGroupFamily",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{global_virtual_group_family:{type:"object",properties:{id:{type:"integer",format:"int64",description:"id is the identifier of the global virtual group family."},primary_sp_id:{type:"integer",format:"int64",title:"primary_sp_id"},global_virtual_group_ids:{type:"array",items:{type:"integer",format:"int64"},description:"global_virtual_group_ids is a list of identifiers of the global virtual groups associated with the family."},virtual_payment_address:{type:"string",description:"virtual_payment_address is the payment address associated with the global virtual group family."}},description:"Global virtual group family serve as a means of grouping global virtual groups.\nEach bucket must be associated with a unique global virtual group family and cannot cross families."}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"family_id",in:"query",required:!1,schema:{type:"integer",format:"int64"}}],tags:["Storage"],method:"get",path:"/greenfield/virtualgroup/global_virtual_group_family",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"GlobalVirtualGroupFamily",description:{content:"Queries a global virtual group family by its id.",type:"text/plain"},url:{path:["greenfield","virtualgroup","global_virtual_group_family"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"family_id",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"GlobalVirtualGroupFamilies",permalink:"/greenfield-docs/docs/greenfield-api/global-virtual-group-families"},next:{title:"VirtualGroupParams",permalink:"/greenfield-docs/docs/greenfield-api/virtual-group-params"}},c={},f=[{value:"GlobalVirtualGroupFamily",id:"globalvirtualgroupfamily",level:2}],b={toc:f},v="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(v,(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"globalvirtualgroupfamily"},"GlobalVirtualGroupFamily"),(0,l.kt)("p",null,"Queries a global virtual group family by its id."),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Query Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(o.Z,{className:"paramsItem",param:{name:"family_id",in:"query",required:!1,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(r.Z,{mdxType:"ApiTabs"},(0,l.kt)(u.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"A successful response.")),(0,l.kt)("div",null,(0,l.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(u.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"global_virtual_group_family"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Global virtual group family serve as a means of grouping global virtual groups.\nEach bucket must be associated with a unique global virtual group family and cannot cross families.")),(0,l.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"id is the identifier of the global virtual group family."},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"primary_sp_id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"primary_sp_id"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"global_virtual_group_ids",required:!1,schemaName:"int64[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"integer",format:"int64"},description:"global_virtual_group_ids is a list of identifiers of the global virtual groups associated with the family."},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"virtual_payment_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"virtual_payment_address is the payment address associated with the global virtual group family."},mdxType:"SchemaItem"}))))))),(0,l.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(n.Z,{responseExample:'{\n  "global_virtual_group_family": {\n    "id": 0,\n    "primary_sp_id": 0,\n    "global_virtual_group_ids": [\n      0\n    ],\n    "virtual_payment_address": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(u.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"An unexpected error response.")),(0,l.kt)("div",null,(0,l.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(u.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,l.kt)(p.Z,{mdxType:"SchemaTabs"},(0,l.kt)(u.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"details"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(m.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,l.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(u.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(n.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);