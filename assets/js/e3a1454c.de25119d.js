"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6983],{90099:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>f});var i=s(87462),n=(s(67294),s(3905)),a=s(26389),r=s(94891),o=s(75190),l=s(47507),p=s(24310),u=s(63303),m=(s(75035),s(85162));const d={id:"list-group",title:"ListGroup",description:"Queries a list of ListGroup items.",sidebar_label:"ListGroup",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a list of ListGroup items.",operationId:"ListGroup",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{pagination:{type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}},description:"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest.\n\n message SomeResponse {\n         repeated Bar results = 1;\n         PageResponse page = 2;\n }"},group_infos:{type:"array",items:{type:"object",properties:{owner:{type:"string",description:"owner is the owner of the group. It can not changed once it created."},group_name:{type:"string",description:"group_name is the name of group which is unique under an account."},source_type:{title:"source_type",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_MIRROR_PENDING"],default:"SOURCE_TYPE_ORIGIN"},id:{type:"string",title:"id is the unique identifier of group"},extra:{type:"string",title:"extra is used to store extra info for the group"}}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"group_owner",in:"path",required:!0,schema:{type:"string"}},{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Storage"],method:"get",path:"/greenfield/storage/list_group/{group_owner}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"ListGroup",description:{content:"Queries a list of ListGroup items.",type:"text/plain"},url:{path:["greenfield","storage","list_group",":group_owner"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"group_owner"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,y={unversionedId:"greenfield-api/list-group",id:"greenfield-api/list-group",title:"ListGroup",description:"Queries a list of ListGroup items.",source:"@site/docs/greenfield-api/list-group.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/list-group",permalink:"/greenfield-docs/docs/greenfield-api/list-group",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-group",title:"ListGroup",description:"Queries a list of ListGroup items.",sidebar_label:"ListGroup",hide_title:!0,hide_table_of_contents:!0,api:{description:"Queries a list of ListGroup items.",operationId:"ListGroup",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{pagination:{type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}},description:"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest.\n\n message SomeResponse {\n         repeated Bar results = 1;\n         PageResponse page = 2;\n }"},group_infos:{type:"array",items:{type:"object",properties:{owner:{type:"string",description:"owner is the owner of the group. It can not changed once it created."},group_name:{type:"string",description:"group_name is the name of group which is unique under an account."},source_type:{title:"source_type",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_MIRROR_PENDING"],default:"SOURCE_TYPE_ORIGIN"},id:{type:"string",title:"id is the unique identifier of group"},extra:{type:"string",title:"extra is used to store extra info for the group"}}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"group_owner",in:"path",required:!0,schema:{type:"string"}},{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Storage"],method:"get",path:"/greenfield/storage/list_group/{group_owner}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"ListGroup",description:{content:"Queries a list of ListGroup items.",type:"text/plain"},url:{path:["greenfield","storage","list_group",":group_owner"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"group_owner"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"ListBuckets",permalink:"/greenfield-docs/docs/greenfield-api/list-buckets"},next:{title:"ListObjects",permalink:"/greenfield-docs/docs/greenfield-api/list-objects"}},g={},f=[{value:"ListGroup",id:"listgroup",level:2}],h={toc:f},b="wrapper";function k(e){let{components:t,...s}=e;return(0,n.kt)(b,(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"listgroup"},"ListGroup"),(0,n.kt)("p",null,"Queries a list of ListGroup items."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"group_owner",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(a.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A successful response.")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(u.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"pagination"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"PageResponse is to be embedded in gRPC response messages where the\ncorresponding request message has used PageRequest."),(0,n.kt)("p",null," message SomeResponse {\nrepeated Bar results = 1;\nPageResponse page = 2;\n}")),(0,n.kt)(p.Z,{collapsible:!1,name:"next_key",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"total",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"group_infos"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"owner is the owner of the group. It can not changed once it created."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"group_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"group_name is the name of group which is unique under an account."},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"source_type",required:!1,schemaName:"source_type",qualifierMessage:"**Possible values:** [`SOURCE_TYPE_ORIGIN`, `SOURCE_TYPE_BSC_CROSS_CHAIN`, `SOURCE_TYPE_MIRROR_PENDING`]",schema:{title:"source_type",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_MIRROR_PENDING"],default:"SOURCE_TYPE_ORIGIN"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"id is the unique identifier of group",qualifierMessage:void 0,schema:{type:"string",title:"id is the unique identifier of group"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"extra",required:!1,schemaName:"extra is used to store extra info for the group",qualifierMessage:void 0,schema:{type:"string",title:"extra is used to store extra info for the group"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "pagination": {\n    "next_key": "string",\n    "total": "string"\n  },\n  "group_infos": [\n    {\n      "owner": "string",\n      "group_name": "string",\n      "source_type": "SOURCE_TYPE_ORIGIN",\n      "id": "string",\n      "extra": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"An unexpected error response.")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(u.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"details"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);