"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5939],{36525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>y,toc:()=>_});var r=a(87462),i=(a(67294),a(3905)),s=a(26389),m=a(94891),n=a(75190),o=a(47507),l=a(24310),c=a(63303),p=(a(75035),a(85162));const u={id:"query-params-by-timestamp",title:"QueryParamsByTimestamp",description:"Parameters queries the parameters of the module.",sidebar_label:"QueryParamsByTimestamp",hide_title:!0,hide_table_of_contents:!0,api:{description:"Parameters queries the parameters of the module.",operationId:"QueryParamsByTimestamp",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{versioned_params:{type:"object",properties:{max_segment_size:{type:"string",format:"uint64",title:"max_segment_size is the maximum size of a segment. default: 16M"},redundant_data_chunk_num:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of data chunks of EC redundancy algorithm"},redundant_parity_chunk_num:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of parity chunks of EC redundancy algorithm"},min_charge_size:{type:"string",format:"uint64",title:"min_charge_size is the minimum charge size of the payload, objects smaller than this size will be charged as this size"}},description:"VersionedParams defines the parameters for the storage module with multi version, each version store with different timestamp."},max_payload_size:{type:"string",format:"uint64",title:"max_payload_size is the maximum size of the payload, default: 2G"},bsc_mirror_bucket_relayer_fee:{type:"string",title:"relayer fee for the mirror bucket tx to bsc"},bsc_mirror_bucket_ack_relayer_fee:{type:"string",title:"relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx to bsc"},bsc_mirror_object_relayer_fee:{type:"string",title:"relayer fee for the mirror object tx to bsc"},bsc_mirror_object_ack_relayer_fee:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to bsc"},bsc_mirror_group_relayer_fee:{type:"string",title:"relayer fee for the mirror object tx to bsc"},bsc_mirror_group_ack_relayer_fee:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to bsc"},max_buckets_per_account:{type:"integer",format:"int64",title:"The maximum number of buckets that can be created per account"},discontinue_counting_window:{type:"string",format:"uint64",title:"The window to count the discontinued objects or buckets"},discontinue_object_max:{type:"string",format:"uint64",title:"The max objects can be requested in a window"},discontinue_bucket_max:{type:"string",format:"uint64",title:"The max buckets can be requested in a window"},discontinue_confirm_period:{type:"string",format:"int64",title:"The object will be deleted after the confirm period in seconds"},discontinue_deletion_max:{type:"string",format:"uint64",title:"The max delete objects in each end block"},stale_policy_cleanup_max:{type:"string",format:"uint64",title:"The max number for deleting policy in each end block"},min_quota_update_interval:{type:"string",format:"uint64",title:"The min interval for making quota smaller in seconds"},max_local_virtual_group_num_per_bucket:{type:"integer",format:"int64",title:"the max number of local virtual group per bucket"}}}},description:"QueryVersionedParamsResponse is response type for the Query/Params RPC method with timestamp."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"timestamp",description:"the timestamp of the block time you want to query",in:"path",required:!0,schema:{type:"string",format:"int64"}}],tags:["Storage"],method:"get",path:"/greenfield/storage/params/{timestamp}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QueryParamsByTimestamp",description:{content:"Parameters queries the parameters of the module.",type:"text/plain"},url:{path:["greenfield","storage","params",":timestamp"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) the timestamp of the block time you want to query",type:"text/plain"},type:"any",value:"",key:"timestamp"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},d=void 0,y={unversionedId:"greenfield-api/query-params-by-timestamp",id:"greenfield-api/query-params-by-timestamp",title:"QueryParamsByTimestamp",description:"Parameters queries the parameters of the module.",source:"@site/docs/greenfield-api/query-params-by-timestamp.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/query-params-by-timestamp",permalink:"/greenfield-docs/docs/greenfield-api/query-params-by-timestamp",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-params-by-timestamp",title:"QueryParamsByTimestamp",description:"Parameters queries the parameters of the module.",sidebar_label:"QueryParamsByTimestamp",hide_title:!0,hide_table_of_contents:!0,api:{description:"Parameters queries the parameters of the module.",operationId:"QueryParamsByTimestamp",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{versioned_params:{type:"object",properties:{max_segment_size:{type:"string",format:"uint64",title:"max_segment_size is the maximum size of a segment. default: 16M"},redundant_data_chunk_num:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of data chunks of EC redundancy algorithm"},redundant_parity_chunk_num:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of parity chunks of EC redundancy algorithm"},min_charge_size:{type:"string",format:"uint64",title:"min_charge_size is the minimum charge size of the payload, objects smaller than this size will be charged as this size"}},description:"VersionedParams defines the parameters for the storage module with multi version, each version store with different timestamp."},max_payload_size:{type:"string",format:"uint64",title:"max_payload_size is the maximum size of the payload, default: 2G"},bsc_mirror_bucket_relayer_fee:{type:"string",title:"relayer fee for the mirror bucket tx to bsc"},bsc_mirror_bucket_ack_relayer_fee:{type:"string",title:"relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx to bsc"},bsc_mirror_object_relayer_fee:{type:"string",title:"relayer fee for the mirror object tx to bsc"},bsc_mirror_object_ack_relayer_fee:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to bsc"},bsc_mirror_group_relayer_fee:{type:"string",title:"relayer fee for the mirror object tx to bsc"},bsc_mirror_group_ack_relayer_fee:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to bsc"},max_buckets_per_account:{type:"integer",format:"int64",title:"The maximum number of buckets that can be created per account"},discontinue_counting_window:{type:"string",format:"uint64",title:"The window to count the discontinued objects or buckets"},discontinue_object_max:{type:"string",format:"uint64",title:"The max objects can be requested in a window"},discontinue_bucket_max:{type:"string",format:"uint64",title:"The max buckets can be requested in a window"},discontinue_confirm_period:{type:"string",format:"int64",title:"The object will be deleted after the confirm period in seconds"},discontinue_deletion_max:{type:"string",format:"uint64",title:"The max delete objects in each end block"},stale_policy_cleanup_max:{type:"string",format:"uint64",title:"The max number for deleting policy in each end block"},min_quota_update_interval:{type:"string",format:"uint64",title:"The min interval for making quota smaller in seconds"},max_local_virtual_group_num_per_bucket:{type:"integer",format:"int64",title:"the max number of local virtual group per bucket"}}}},description:"QueryVersionedParamsResponse is response type for the Query/Params RPC method with timestamp."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"timestamp",description:"the timestamp of the block time you want to query",in:"path",required:!0,schema:{type:"string",format:"int64"}}],tags:["Storage"],method:"get",path:"/greenfield/storage/params/{timestamp}",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QueryParamsByTimestamp",description:{content:"Parameters queries the parameters of the module.",type:"text/plain"},url:{path:["greenfield","storage","params",":timestamp"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) the timestamp of the block time you want to query",type:"text/plain"},type:"any",value:"",key:"timestamp"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"StorageParams",permalink:"/greenfield-docs/docs/greenfield-api/storage-params"},next:{title:"QueryPolicyById",permalink:"/greenfield-docs/docs/greenfield-api/query-policy-by-id"}},h={},_=[{value:"QueryParamsByTimestamp",id:"queryparamsbytimestamp",level:2}],f={toc:_},g="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(g,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"queryparamsbytimestamp"},"QueryParamsByTimestamp"),(0,i.kt)("p",null,"Parameters queries the parameters of the module."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"timestamp",description:"the timestamp of the block time you want to query",in:"path",required:!0,schema:{type:"string",format:"int64"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"params"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"params holds all the parameters of this module.")),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"versioned_params"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"VersionedParams defines the parameters for the storage module with multi version, each version store with different timestamp.")),(0,i.kt)(l.Z,{collapsible:!1,name:"max_segment_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"max_segment_size is the maximum size of a segment. default: 16M"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"redundant_data_chunk_num",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of data chunks of EC redundancy algorithm"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"redundant_parity_chunk_num",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of parity chunks of EC redundancy algorithm"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"min_charge_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"min_charge_size is the minimum charge size of the payload, objects smaller than this size will be charged as this size"},mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"max_payload_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"max_payload_size is the maximum size of the payload, default: 2G"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"bsc_mirror_bucket_relayer_fee",required:!1,schemaName:"relayer fee for the mirror bucket tx to bsc",qualifierMessage:void 0,schema:{type:"string",title:"relayer fee for the mirror bucket tx to bsc"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"bsc_mirror_bucket_ack_relayer_fee",required:!1,schemaName:"relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx to bsc",qualifierMessage:void 0,schema:{type:"string",title:"relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx to bsc"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"bsc_mirror_object_relayer_fee",required:!1,schemaName:"relayer fee for the mirror object tx to bsc",qualifierMessage:void 0,schema:{type:"string",title:"relayer fee for the mirror object tx to bsc"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"bsc_mirror_object_ack_relayer_fee",required:!1,schemaName:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to bsc",qualifierMessage:void 0,schema:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to bsc"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"bsc_mirror_group_relayer_fee",required:!1,schemaName:"relayer fee for the mirror object tx to bsc",qualifierMessage:void 0,schema:{type:"string",title:"relayer fee for the mirror object tx to bsc"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"bsc_mirror_group_ack_relayer_fee",required:!1,schemaName:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to bsc",qualifierMessage:void 0,schema:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx to bsc"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"max_buckets_per_account",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"The maximum number of buckets that can be created per account"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"discontinue_counting_window",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The window to count the discontinued objects or buckets"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"discontinue_object_max",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The max objects can be requested in a window"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"discontinue_bucket_max",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The max buckets can be requested in a window"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"discontinue_confirm_period",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"The object will be deleted after the confirm period in seconds"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"discontinue_deletion_max",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The max delete objects in each end block"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"stale_policy_cleanup_max",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The max number for deleting policy in each end block"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"min_quota_update_interval",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The min interval for making quota smaller in seconds"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"max_local_virtual_group_num_per_bucket",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"the max number of local virtual group per bucket"},mdxType:"SchemaItem"}))))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "params": {\n    "versioned_params": {\n      "max_segment_size": "string",\n      "redundant_data_chunk_num": 0,\n      "redundant_parity_chunk_num": 0,\n      "min_charge_size": "string"\n    },\n    "max_payload_size": "string",\n    "bsc_mirror_bucket_relayer_fee": "string",\n    "bsc_mirror_bucket_ack_relayer_fee": "string",\n    "bsc_mirror_object_relayer_fee": "string",\n    "bsc_mirror_object_ack_relayer_fee": "string",\n    "bsc_mirror_group_relayer_fee": "string",\n    "bsc_mirror_group_ack_relayer_fee": "string",\n    "max_buckets_per_account": 0,\n    "discontinue_counting_window": "string",\n    "discontinue_object_max": "string",\n    "discontinue_bucket_max": "string",\n    "discontinue_confirm_period": "string",\n    "discontinue_deletion_max": "string",\n    "stale_policy_cleanup_max": "string",\n    "min_quota_update_interval": "string",\n    "max_local_virtual_group_num_per_bucket": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);