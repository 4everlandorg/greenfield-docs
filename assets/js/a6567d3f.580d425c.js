"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7638],{77973:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var s=a(87462),m=(a(67294),a(3905)),i=a(26389),r=a(94891),n=a(75190),o=a(47507),l=a(24310),p=a(63303),d=(a(75035),a(85162));const c={id:"params-by-timestamp",title:"ParamsByTimestamp",description:"ParamsByTimestamp queries the parameters of the module.",sidebar_label:"ParamsByTimestamp",hide_title:!0,hide_table_of_contents:!0,api:{description:"ParamsByTimestamp queries the parameters of the module.",operationId:"ParamsByTimestamp",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{versioned_params:{type:"object",properties:{reserve_time:{type:"string",format:"uint64",title:"Time duration which the buffer balance need to be reserved for NetOutFlow e.g. 6 month"},validator_tax_rate:{type:"string",title:"The tax rate to pay for validators in storage payment. The default value is 1%(0.01)"}},description:"VersionedParams defines the parameters with multiple versions, each version is stored with different timestamp."},payment_account_count_limit:{type:"string",format:"uint64",title:"The maximum number of payment accounts that can be created by one user"},forced_settle_time:{type:"string",format:"uint64",description:"Time duration threshold of forced settlement.\nIf dynamic balance is less than NetOutFlowRate * forcedSettleTime, the account can be forced settled."},max_auto_settle_flow_count:{type:"string",format:"uint64",title:"the maximum number of flows that will be auto forced settled in one block"},max_auto_resume_flow_count:{type:"string",format:"uint64",title:"the maximum number of flows that will be auto resumed in one block"},fee_denom:{type:"string",title:"The denom of fee charged in payment module"}}}},description:"QueryParamsByTimestampResponse is response type for the Query/ParamsByTimestamp RPC method with timestamp."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"timestamp",description:"the timestamp of the block time you want to query",in:"path",required:!0,schema:{type:"string",format:"int64"}}],tags:["Payment"],method:"get",path:"/greenfield/payment/params/{timestamp}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"ParamsByTimestamp",description:{content:"ParamsByTimestamp queries the parameters of the module.",type:"text/plain"},url:{path:["greenfield","payment","params",":timestamp"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) the timestamp of the block time you want to query",type:"text/plain"},type:"any",value:"",key:"timestamp"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,y={unversionedId:"greenfield-api/params-by-timestamp",id:"greenfield-api/params-by-timestamp",title:"ParamsByTimestamp",description:"ParamsByTimestamp queries the parameters of the module.",source:"@site/docs/greenfield-api/params-by-timestamp.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/params-by-timestamp",permalink:"/greenfield-docs/docs/greenfield-api/params-by-timestamp",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"params-by-timestamp",title:"ParamsByTimestamp",description:"ParamsByTimestamp queries the parameters of the module.",sidebar_label:"ParamsByTimestamp",hide_title:!0,hide_table_of_contents:!0,api:{description:"ParamsByTimestamp queries the parameters of the module.",operationId:"ParamsByTimestamp",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{versioned_params:{type:"object",properties:{reserve_time:{type:"string",format:"uint64",title:"Time duration which the buffer balance need to be reserved for NetOutFlow e.g. 6 month"},validator_tax_rate:{type:"string",title:"The tax rate to pay for validators in storage payment. The default value is 1%(0.01)"}},description:"VersionedParams defines the parameters with multiple versions, each version is stored with different timestamp."},payment_account_count_limit:{type:"string",format:"uint64",title:"The maximum number of payment accounts that can be created by one user"},forced_settle_time:{type:"string",format:"uint64",description:"Time duration threshold of forced settlement.\nIf dynamic balance is less than NetOutFlowRate * forcedSettleTime, the account can be forced settled."},max_auto_settle_flow_count:{type:"string",format:"uint64",title:"the maximum number of flows that will be auto forced settled in one block"},max_auto_resume_flow_count:{type:"string",format:"uint64",title:"the maximum number of flows that will be auto resumed in one block"},fee_denom:{type:"string",title:"The denom of fee charged in payment module"}}}},description:"QueryParamsByTimestampResponse is response type for the Query/ParamsByTimestamp RPC method with timestamp."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"timestamp",description:"the timestamp of the block time you want to query",in:"path",required:!0,schema:{type:"string",format:"int64"}}],tags:["Payment"],method:"get",path:"/greenfield/payment/params/{timestamp}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"ParamsByTimestamp",description:{content:"ParamsByTimestamp queries the parameters of the module.",type:"text/plain"},url:{path:["greenfield","payment","params",":timestamp"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) the timestamp of the block time you want to query",type:"text/plain"},type:"any",value:"",key:"timestamp"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"PaymentParams",permalink:"/greenfield-docs/docs/greenfield-api/payment-params"},next:{title:"PaymentAccountAll",permalink:"/greenfield-docs/docs/greenfield-api/payment-account-all"}},f={},h=[{value:"ParamsByTimestamp",id:"paramsbytimestamp",level:2}],g={toc:h},b="wrapper";function k(e){let{components:t,...a}=e;return(0,m.kt)(b,(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"paramsbytimestamp"},"ParamsByTimestamp"),(0,m.kt)("p",null,"ParamsByTimestamp queries the parameters of the module."),(0,m.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("strong",null,"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(n.Z,{className:"paramsItem",param:{name:"timestamp",description:"the timestamp of the block time you want to query",in:"path",required:!0,schema:{type:"string",format:"int64"}},mdxType:"ParamsItem"})))),(0,m.kt)("div",null,(0,m.kt)(i.Z,{mdxType:"ApiTabs"},(0,m.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"A successful response.")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{}},(0,m.kt)("summary",{style:{}},(0,m.kt)("strong",null,"params"),(0,m.kt)("span",{style:{opacity:"0.6"}}," object")),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"params holds all the parameters of this module.")),(0,m.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{}},(0,m.kt)("summary",{style:{}},(0,m.kt)("strong",null,"versioned_params"),(0,m.kt)("span",{style:{opacity:"0.6"}}," object")),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"VersionedParams defines the parameters with multiple versions, each version is stored with different timestamp.")),(0,m.kt)(l.Z,{collapsible:!1,name:"reserve_time",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"Time duration which the buffer balance need to be reserved for NetOutFlow e.g. 6 month"},mdxType:"SchemaItem"}),(0,m.kt)(l.Z,{collapsible:!1,name:"validator_tax_rate",required:!1,schemaName:"The tax rate to pay for validators in storage payment. The default value is 1%(0.01)",qualifierMessage:void 0,schema:{type:"string",title:"The tax rate to pay for validators in storage payment. The default value is 1%(0.01)"},mdxType:"SchemaItem"})))),(0,m.kt)(l.Z,{collapsible:!1,name:"payment_account_count_limit",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The maximum number of payment accounts that can be created by one user"},mdxType:"SchemaItem"}),(0,m.kt)(l.Z,{collapsible:!1,name:"forced_settle_time",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",description:"Time duration threshold of forced settlement.\nIf dynamic balance is less than NetOutFlowRate * forcedSettleTime, the account can be forced settled."},mdxType:"SchemaItem"}),(0,m.kt)(l.Z,{collapsible:!1,name:"max_auto_settle_flow_count",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"the maximum number of flows that will be auto forced settled in one block"},mdxType:"SchemaItem"}),(0,m.kt)(l.Z,{collapsible:!1,name:"max_auto_resume_flow_count",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"the maximum number of flows that will be auto resumed in one block"},mdxType:"SchemaItem"}),(0,m.kt)(l.Z,{collapsible:!1,name:"fee_denom",required:!1,schemaName:"The denom of fee charged in payment module",qualifierMessage:void 0,schema:{type:"string",title:"The denom of fee charged in payment module"},mdxType:"SchemaItem"}))))))),(0,m.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "params": {\n    "versioned_params": {\n      "reserve_time": "string",\n      "validator_tax_rate": "string"\n    },\n    "payment_account_count_limit": "string",\n    "forced_settle_time": "string",\n    "max_auto_settle_flow_count": "string",\n    "max_auto_resume_flow_count": "string",\n    "fee_denom": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"An unexpected error response.")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,m.kt)(p.Z,{mdxType:"SchemaTabs"},(0,m.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{}},(0,m.kt)("summary",{style:{}},(0,m.kt)("strong",null,"details"),(0,m.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,m.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);