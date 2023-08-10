"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3911],{70838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>v,frontMatter:()=>c,metadata:()=>h,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(26389),s=n(94891),r=n(75190),d=n(47507),l=n(24310),p=n(63303),m=(n(75035),n(85162));const c={id:"unbonding-delegation",title:"UnbondingDelegation",description:"UnbondingDelegation queries unbonding info for given validator delegator",sidebar_label:"UnbondingDelegation",hide_title:!0,hide_table_of_contents:!0,api:{description:"UnbondingDelegation queries unbonding info for given validator delegator\npair.",operationId:"UnbondingDelegation",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{unbond:{type:"object",properties:{delegator_address:{type:"string",description:"delegator_address is the bech32-encoded address of the delegator."},validator_address:{type:"string",description:"validator_address is the bech32-encoded address of the validator."},entries:{type:"array",items:{type:"object",properties:{creation_height:{type:"string",format:"int64",description:"creation_height is the height which the unbonding took place."},completion_time:{type:"string",format:"date-time",description:"completion_time is the unix time for unbonding completion."},initial_balance:{type:"string",description:"initial_balance defines the tokens initially scheduled to receive at completion."},balance:{type:"string",description:"balance defines the tokens to receive at completion."},unbonding_id:{type:"string",format:"uint64",title:"Incrementing id that uniquely identifies this entry"},unbonding_on_hold_ref_count:{type:"string",format:"int64",title:"Strictly positive if this entry's unbonding has been stopped by external modules"}},description:"UnbondingDelegationEntry defines an unbonding object with relevant metadata."},description:"entries are the unbonding delegation entries."}},description:"UnbondingDelegation stores all of a single delegator's unbonding bonds\nfor a single validator in an time-ordered list."}},description:"QueryDelegationResponse is response type for the Query/UnbondingDelegation\nRPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n    // or ...\n    if (any.isSameTypeAs(Foo.getDefaultInstance())) {\n      foo = any.unpack(Foo.getDefaultInstance());\n    }\n\nExample 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\nExample 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := anypb.New(foo)\n     if err != nil {\n       ...\n     }\n     ...\n     foo := &pb.Foo{}\n     if err := any.UnmarshalTo(foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\nJSON\n\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"validator_addr",description:"validator_addr defines the validator address to query for.",in:"path",required:!0,schema:{type:"string"}},{name:"delegator_addr",description:"delegator_addr defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Staking"],method:"get",path:"/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}/unbonding_delegation",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"UnbondingDelegation",description:{content:"UnbondingDelegation queries unbonding info for given validator delegator\npair.",type:"text/plain"},url:{path:["cosmos","staking","v1beta1","validators",":validator_addr","delegations",":delegator_addr","unbonding_delegation"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) validator_addr defines the validator address to query for.",type:"text/plain"},type:"any",value:"",key:"validator_addr"},{disabled:!1,description:{content:"(Required) delegator_addr defines the delegator address to query for.",type:"text/plain"},type:"any",value:"",key:"delegator_addr"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},g=void 0,h={unversionedId:"greenfield-api/unbonding-delegation",id:"greenfield-api/unbonding-delegation",title:"UnbondingDelegation",description:"UnbondingDelegation queries unbonding info for given validator delegator",source:"@site/docs/greenfield-api/unbonding-delegation.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/unbonding-delegation",permalink:"/greenfield-docs/docs/greenfield-api/unbonding-delegation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"unbonding-delegation",title:"UnbondingDelegation",description:"UnbondingDelegation queries unbonding info for given validator delegator",sidebar_label:"UnbondingDelegation",hide_title:!0,hide_table_of_contents:!0,api:{description:"UnbondingDelegation queries unbonding info for given validator delegator\npair.",operationId:"UnbondingDelegation",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{unbond:{type:"object",properties:{delegator_address:{type:"string",description:"delegator_address is the bech32-encoded address of the delegator."},validator_address:{type:"string",description:"validator_address is the bech32-encoded address of the validator."},entries:{type:"array",items:{type:"object",properties:{creation_height:{type:"string",format:"int64",description:"creation_height is the height which the unbonding took place."},completion_time:{type:"string",format:"date-time",description:"completion_time is the unix time for unbonding completion."},initial_balance:{type:"string",description:"initial_balance defines the tokens initially scheduled to receive at completion."},balance:{type:"string",description:"balance defines the tokens to receive at completion."},unbonding_id:{type:"string",format:"uint64",title:"Incrementing id that uniquely identifies this entry"},unbonding_on_hold_ref_count:{type:"string",format:"int64",title:"Strictly positive if this entry's unbonding has been stopped by external modules"}},description:"UnbondingDelegationEntry defines an unbonding object with relevant metadata."},description:"entries are the unbonding delegation entries."}},description:"UnbondingDelegation stores all of a single delegator's unbonding bonds\nfor a single validator in an time-ordered list."}},description:"QueryDelegationResponse is response type for the Query/UnbondingDelegation\nRPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n    // or ...\n    if (any.isSameTypeAs(Foo.getDefaultInstance())) {\n      foo = any.unpack(Foo.getDefaultInstance());\n    }\n\nExample 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\nExample 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := anypb.New(foo)\n     if err != nil {\n       ...\n     }\n     ...\n     foo := &pb.Foo{}\n     if err := any.UnmarshalTo(foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\nJSON\n\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"validator_addr",description:"validator_addr defines the validator address to query for.",in:"path",required:!0,schema:{type:"string"}},{name:"delegator_addr",description:"delegator_addr defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}}],tags:["Staking"],method:"get",path:"/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}/unbonding_delegation",servers:[{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"UnbondingDelegation",description:{content:"UnbondingDelegation queries unbonding info for given validator delegator\npair.",type:"text/plain"},url:{path:["cosmos","staking","v1beta1","validators",":validator_addr","delegations",":delegator_addr","unbonding_delegation"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) validator_addr defines the validator address to query for.",type:"text/plain"},type:"any",value:"",key:"validator_addr"},{disabled:!1,description:{content:"(Required) delegator_addr defines the delegator address to query for.",type:"text/plain"},type:"any",value:"",key:"delegator_addr"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"Delegation",permalink:"/greenfield-docs/docs/greenfield-api/delegation"},next:{title:"ValidatorUnbondingDelegations",permalink:"/greenfield-docs/docs/greenfield-api/validator-unbonding-delegations"}},y={},u=[{value:"UnbondingDelegation",id:"unbondingdelegation",level:2}],f={toc:u},b="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"unbondingdelegation"},"UnbondingDelegation"),(0,i.kt)("p",null,"UnbondingDelegation queries unbonding info for given validator delegator\npair."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"validator_addr",description:"validator_addr defines the validator address to query for.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"delegator_addr",description:"delegator_addr defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"unbond"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"UnbondingDelegation stores all of a single delegator's unbonding bonds\nfor a single validator in an time-ordered list.")),(0,i.kt)(l.Z,{collapsible:!1,name:"delegator_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"delegator_address is the bech32-encoded address of the delegator."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"validator_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"validator_address is the bech32-encoded address of the validator."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"entries"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"entries are the unbonding delegation entries.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"creation_height",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",description:"creation_height is the height which the unbonding took place."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"completion_time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"completion_time is the unix time for unbonding completion."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"initial_balance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"initial_balance defines the tokens initially scheduled to receive at completion."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"balance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"balance defines the tokens to receive at completion."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"unbonding_id",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"Incrementing id that uniquely identifies this entry"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"unbonding_on_hold_ref_count",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"Strictly positive if this entry's unbonding has been stopped by external modules"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "unbond": {\n    "delegator_address": "string",\n    "validator_address": "string",\n    "entries": [\n      {\n        "creation_height": "string",\n        "completion_time": "2023-08-08T04:32:19.137Z",\n        "initial_balance": "string",\n        "balance": "string",\n        "unbonding_id": "string",\n        "unbonding_on_hold_ref_count": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);