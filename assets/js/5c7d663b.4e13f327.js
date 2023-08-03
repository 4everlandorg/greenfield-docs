"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(n),h=i,f=l["".concat(p,".").concat(h)]||l[h]||u[h]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Authenticator"},o="Authenticator",s={unversionedId:"guide/storage-provider/modules/authenticator",id:"guide/storage-provider/modules/authenticator",title:"Authenticator",description:"Authenticator module is used to verify users authentication. Each request arrived to SP gateway requires authentication. SP uses authentication to know who you are.",source:"@site/docs/guide/storage-provider/modules/authenticator.md",sourceDirName:"guide/storage-provider/modules",slug:"/guide/storage-provider/modules/authenticator",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/authenticator",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/modules/authenticator.md",tags:[],version:"current",frontMatter:{title:"Authenticator"},sidebar:"guideSidebar",previous:{title:"Approver",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/approver"},next:{title:"Uploader",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/uploader"}},p={},c=[{value:"Greenfield Storage Provider Off-Chain Authentication",id:"greenfield-storage-provider-off-chain-authentication",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"WorkFlow",id:"workflow",level:2},{value:"Overall workflow",id:"overall-workflow",level:3},{value:"Step 1 - Generate EdDSA key pairs in Apps",id:"step-1---generate-eddsa-key-pairs-in-apps",level:3},{value:"Step 2 - Register EdDSA public key in SPs",id:"step-2---register-eddsa-public-key-in-sps",level:3},{value:"Step 3 - Use EdDSA seed to sign request and verification",id:"step-3---use-eddsa-seed-to-sign-request-and-verification",level:3},{value:"Step 4 - Manage EdDSA key pairs",id:"step-4---manage-eddsa-key-pairs",level:3},{value:"Auth API Specification",id:"auth-api-specification",level:3},{value:"Rational",id:"rational",level:2},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Preventing replay attacks",id:"preventing-replay-attacks",level:3}],d={toc:c},l="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authenticator"},"Authenticator"),(0,i.kt)("p",null,"Authenticator module is used to verify users authentication. Each request arrived to SP gateway requires authentication. SP uses authentication to know who you are."),(0,i.kt)("p",null,"We currently abstract SP as the GfSp framework, which provides users with customizable capabilities to meet their specific requirements. Authenticator module provides an abstract interface, which is called ",(0,i.kt)("inlineCode",{parentName:"p"},"Authenticator"),", as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Authenticator is an abstract interface to verify users authentication.\ntype Authenticator interface {\n    Modular\n    // VerifyAuthentication verifies the operator authentication.\n    VerifyAuthentication(ctx context.Context, auth AuthOpType, account, bucket, object string) (bool, error)\n    // GetAuthNonce get the auth nonce for which the dApp or client can generate EDDSA key pairs.\n    GetAuthNonce(ctx context.Context, account string, domain string) (*spdb.OffChainAuthKey, error)\n    // UpdateUserPublicKey updates the user public key once the dApp or client generates the EDDSA key pairs.\n    UpdateUserPublicKey(ctx context.Context, account string, domain string, currentNonce int32, nonce int32,\n        userPublicKey string, expiryDate int64) (bool, error)\n    // VerifyOffChainSignature verifies the signature signed by user's EDDSA private key.\n    VerifyOffChainSignature(ctx context.Context, account string, domain string, offChainSig string, realMsgToSign string) (bool, error)\n}\n\n// AuthOpType defines the operator type used to authentication verification.\ntype AuthOpType int32\n\nconst (\n    // AuthOpTypeUnKnown defines the default value of AuthOpType\n    AuthOpTypeUnKnown AuthOpType = iota\n    // AuthOpAskCreateBucketApproval defines the AskCreateBucketApproval operator\n    AuthOpAskCreateBucketApproval\n    // AuthOpAskMigrateBucketApproval defines the AskMigrateBucketApproval operator\n    AuthOpAskMigrateBucketApproval\n    // AuthOpAskCreateObjectApproval defines the AskCreateObjectApproval operator\n    AuthOpAskCreateObjectApproval\n    // AuthOpTypeGetChallengePieceInfo defines the GetChallengePieceInfo operator\n    AuthOpTypeGetChallengePieceInfo\n    // AuthOpTypePutObject defines the PutObject operator\n    AuthOpTypePutObject\n    // AuthOpTypeGetObject defines the GetObject operator\n    AuthOpTypeGetObject\n    // AuthOpTypeGetUploadingState defines the GetUploadingState operator\n    AuthOpTypeGetUploadingState\n    // AuthOpTypeGetBucketQuota defines the GetBucketQuota operator\n    AuthOpTypeGetBucketQuota\n    // AuthOpTypeListBucketReadRecord defines the ListBucketReadRecord operator\n    AuthOpTypeListBucketReadRecord\n    // AuthOpTypeGetRecoveryPiece defines the GetRecoveryPiece operator\n    AuthOpTypeGetRecoveryPiece\n)\n")),(0,i.kt)("p",null,"Authenticator interface inherits ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/lifecycle_modular#modular-interface"},"Modular interface"),", so Authenticator module can be managed by lifecycle and resource manager."),(0,i.kt)("p",null,"You can overwrite ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyAuthentication")," to implement your own authentication mode by different AuthOpType. This is the most basic authentication."),(0,i.kt)("h2",{id:"greenfield-storage-provider-off-chain-authentication"},"Greenfield Storage Provider Off-Chain Authentication"),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"This document outlines an off-chain authentication specification for greenfield storage providers (SPs) and clients. The specification includes a full functional workflow and a reference implementation, making it easy for any application integrating with greenfield SPs to build an off-chain authentication mechanism."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Applications based on the greenfield chain often need to interact with multiple greenfield SPs, which are off-chain services that require users to use Ethereum-compatible accounts to represent their identities."),(0,i.kt)("p",null,"For most interactions between applications and SPs, users' identities are required. Typically, applications can use message signing via account private keys to authenticate users, as long as they have access to their private keys. However, for browser-based applications, accessing the end users' private keys directly is not possible, making it necessary to prompt users to sign messages for each off-chain request between applications and SPs. This results in a poor user experience."),(0,i.kt)("p",null,"This document describes a workflow to address this problem."),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("h3",{id:"overall-workflow"},"Overall workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"auth-workflow",src:n(80168).Z,width:"722",height:"839"})),(0,i.kt)("h3",{id:"step-1---generate-eddsa-key-pairs-in-apps"},"Step 1 - Generate EdDSA key pairs in Apps"),(0,i.kt)("p",null,"Applications can design how to generate EdDSA key pairs themselves, and SPs do not have any restrictions on it."),(0,i.kt)("p",null,"Here is one example."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'For each Ethereum address, the SP counts how many times the account public key has been updated for a given app domain since registration. This value is called the "key nonce" and denoted as n. It starts from 0 and increments by 1 after each successful account public key update. The app can invoke the ',(0,i.kt)("strong",{parentName:"li"},'SP API "request_nonce"')," to retrieve the nonce value n. A simple request to get the nonce is:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl --location 'https://${SP_API_ADDRESS}/auth/request_nonce' \\\n--header 'X-Gnfd-User-Address: 0x3d0a49B091ABF8940AD742c0139416cEB30CdEe0' \\\n--header 'X-Gnfd-App-Domain: https://greenfield_app1.domain.com'\n")),(0,i.kt)("p",null,"The response is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "current_nonce": 0,\n    "next_nonce": 1,\n    "current_public_key": "",\n    "expiry_date": ""\n}\n')),(0,i.kt)("p",null,"Since we are trying to build a new key pairs, we will use next_nonce value as n."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"The app puts ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sp addresses")," into a constant strings:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"Sign this message to let dapp ${dapp_domain} access the following SPs:\n- SP ${SP_ADDRESS_1} (name:${SP_NAME_1}) with nonce:${NONCE_1}\n- SP ${SP_ADDRESS_2} (name:${SP_NAME_2}) with nonce:${NONCE_2}\n...\n")),(0,i.kt)("p",null,"We denote the new string as\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"M")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The app then requests the user to sign M with their Ethereum ECDSA private key, then gets the signature S.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The app uses sha256(S) as the seed to generate the EdDSA key pairs EdDSA_private_K and EdDSA_public_K.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The app saves EdDSA_private_K as plain text in the browser's session storage and registers EdDSA_public_K as the account public key into the SP servers."))),(0,i.kt)("h3",{id:"step-2---register-eddsa-public-key-in-sps"},"Step 2 - Register EdDSA public key in SPs"),(0,i.kt)("p",null,"For each combination of user address and app domain, the SP backend maintains a key nonce ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),". It starts from 0 and increments by 1 after each successful account key update."),(0,i.kt)("p",null,"To register an account public key into a certain SP, you can invoke ",(0,i.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/docs/api/storgae-provider-rest/auth/update_key.html"},'SP API "update',"_",'key"'),"."),(0,i.kt)("p",null,"Here is an example. Suppose that"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"user account address")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"0x3d0a49B091ABF8940AD742c0139416cEB30CdEe0")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"app domain")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"https://greenfield_app1.domain.com")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"nonce")," for above user address and app domain from ",(0,i.kt)("a",{parentName:"li",href:"https://greenfield.bnbchain.org/docs/api/storgae-provider-rest/auth/get_nonce.html"},'SP API "request',"_",'nonce"')," is ",(0,i.kt)("inlineCode",{parentName:"li"},"1")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"SP operator address")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"0x70d1983A9A76C8d5d80c4cC13A801dc570890819")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"EdDSA","_","public","_","K")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"4db642fe6bc2ceda2e002feb8d78dfbcb2879d8fe28e84e02b7a940bc0440083")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"expiry time")," for this ",(0,i.kt)("inlineCode",{parentName:"li"},"EdDSA_public_K")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"2023-04-28T16:25:24Z"),". The expiry time indicates the expiry time of this ",(0,i.kt)("inlineCode",{parentName:"li"},"EdDSA_public_K")," , which should be a future time and within ",(0,i.kt)("strong",{parentName:"li"},"7 days."))),(0,i.kt)("p",null,"The app will put above information into a text message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"https://greenfield_app1.domain.com wants you to sign in with your BNB Greenfield account:\\n0x3d0a49B091ABF8940AD742c0139416cEB30CdEe0\\n\\nRegister your identity public key 4db642fe6bc2ceda2e002feb8d78dfbcb2879d8fe28e84e02b7a940bc0440083\\n\\nURI: https://greenfield_app1.domain.com\\nVersion: 1\\nChain ID: 5600\\nIssued At: 2023-04-24T16:25:24Z\\nExpiration Time: 2023-04-28T16:25:24Z\\nResources:\\n- SP 0x70d1983A9A76C8d5d80c4cC13A801dc570890819 (name: SP_001) with nonce: 1\n")),(0,i.kt)("p",null,"We denote this text message as ",(0,i.kt)("inlineCode",{parentName:"p"},"M2")),(0,i.kt)("p",null,"and request user to sign and get the signature",(0,i.kt)("inlineCode",{parentName:"p"},"S2"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"auth-update-key-metamask",src:n(65282).Z,width:"1102",height:"1804"})),(0,i.kt)("p",null,"Finally, the app invokes ",(0,i.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/docs/api/storgae-provider-rest/auth/update_key.html"},'SP API "update',"_",'key"')," by putting ",(0,i.kt)("inlineCode",{parentName:"p"},"S2")," into http Authorization header. The following is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"curl --location --request POST 'https://${SP_API_ADDRESS}/auth/update_key' \\\n--header 'Origin: https://greenfield_app1.domain.com' \\\n--header 'X-Gnfd-App-Domain: https://greenfield_app1.domain.com' \\\n--header 'X-Gnfd-App-Reg-Nonce: 1' \\\n--header 'X-Gnfd-App-Reg-Public-Key: 4db642fe6bc2ceda2e002feb8d78dfbcb2879d8fe28e84e02b7a940bc0440083' \\\n--header 'X-Gnfd-App-Reg-Expiry-Date: 2023-04-28T16:25:24Z' \\\n--header 'Authorization: PersonalSign ECDSA-secp256k1,SignedMsg=https://greenfield_app1.domain.com wants you to sign in with your BNB Greenfield account:\\n0x3d0a49B091ABF8940AD742c0139416cEB30CdEe0\\n\\nRegister your identity public key 4db642fe6bc2ceda2e002feb8d78dfbcb2879d8fe28e84e02b7a940bc0440083\\n\\nURI: https://greenfield_app1.domain.com\\nVersion: 1\\nChain ID: 5600\\nIssued At: 2023-04-24T16:25:24Z\\nExpiration Time: 2023-04-28T16:25:24Z\\nResources:\\n- SP 0x70d1983A9A76C8d5d80c4cC13A801dc570890819 (name: SP_001) with nonce: 1,Signature=0x8663c48cfecb611d64540d3b653f51ef226f3f674e2c390ea9ca45746b22a4f839a15576b5b4cc1051183ae9b69ac54160dc3241bbe99c695a52fe25eaf2f8c01b'\n")),(0,i.kt)("p",null,"Once the response code returns 200, you can check if the new account public key is saved into this SP by invoking ",(0,i.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/docs/api/storgae-provider-rest/auth/get_nonce.html"},'SP API "request',"_",'nonce"'),"\nThis API returns the latest key nonce for a given user address and app domain."),(0,i.kt)("p",null,"If the API returns the new key nonce, the account public key has been successfully registered into the SP servers. The app can now use the EdDSA key pair generated in Step 1 to authenticate the user in future interactions with the SP."),(0,i.kt)("h3",{id:"step-3---use-eddsa-seed-to-sign-request-and-verification"},"Step 3 - Use EdDSA seed to sign request and verification"),(0,i.kt)("p",null,"In Step1 & Step2, we generated EdDSA keys and registered them into SP. In Step3, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"EdDSA_private_K")," to sign request when an app invokes a certain SP API."),(0,i.kt)("p",null,"To sign a request, the app needs to define a customized text message with a recent expiry timestamp (denoted as ",(0,i.kt)("inlineCode",{parentName:"p"},"EdDSA_M"),") and use ",(0,i.kt)("inlineCode",{parentName:"p"},"EdDSA_private_K")," to sign this message to get the signature ",(0,i.kt)("inlineCode",{parentName:"p"},"EdDSA_S"),"."),(0,i.kt)("p",null,"The text message format is ",(0,i.kt)("inlineCode",{parentName:"p"},"${actionContent}_${expiredTimestamp}"),"."),(0,i.kt)("p",null,'For example, if a user clicks the "download" button in an app to download a private object they own, this will invoke the SP getObject API.\nThe ',(0,i.kt)("inlineCode",{parentName:"p"},"EdDSA_M")," could be defined as ",(0,i.kt)("inlineCode",{parentName:"p"},"Invoke_GetObject_1682407345000"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"EdDSA_S")," would be ",(0,i.kt)("inlineCode",{parentName:"p"},"a48fff140b148369a108611502acff919720b5493aa36ba0886d8d73634ee20404963b847104d06aa822cf904741aff70ede4ba7d70fa8808c3206d4c93be623"),"."),(0,i.kt)("p",null,"To combine ",(0,i.kt)("inlineCode",{parentName:"p"},"EdDSA_M")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"EdDSA_S"),", the app should include them in the Authorization header when invoking the GetObject API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"curl --location 'https://${SP_API_ADDRESS}/${bucket_name}/${object_name}' \\\n--header 'authorization: OffChainAuth EDDSA,SignedMsg=Invoke_GetObject_1682407345000,Signature=a48fff140b148369a108611502acff919720b5493aa36ba0886d8d73634ee20404963b847104d06aa822cf904741aff70ede4ba7d70fa8808c3206d4c93be623' \\\n--header 'X-Gnfd-User-Address: 0x3d0a49B091ABF8940AD742c0139416cEB30CdEe0' \\\n--header 'X-Gnfd-App-Domain: https://greenfield_app1.domain.com' \n")),(0,i.kt)("p",null,"By including the signed message and signature in the Authorization header, the app can authenticate the request with the SP servers. The SP servers can then verify the signature using the EdDSA_public_K registered in Step 2."),(0,i.kt)("h3",{id:"step-4---manage-eddsa-key-pairs"},"Step 4 - Manage EdDSA key pairs"),(0,i.kt)("p",null,"Although we defined an expiry date for registered ",(0,i.kt)("inlineCode",{parentName:"p"},"EdDSA_public_K"),", users might want to know how many EdDSA keys they are currently using and might want to delete them for security concerns."),(0,i.kt)("p",null,"To list a user's registered EdDSA account public keys in an SP, apps can invoke ",(0,i.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/docs/api/storgae-provider-rest/auth/list_key.html"},'SP API "list',"_",'key"'),".\nTo delete a user's registered EdDSA account public key in an SP, apps can invoke  ",(0,i.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/docs/api/storgae-provider-rest/auth/delete_key.html"},'SP API "delete',"_",'key"')),(0,i.kt)("h3",{id:"auth-api-specification"},"Auth API Specification"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/docs/api/storgae-provider-rest/auth"},"SP Auth Rest API Doc")),(0,i.kt)("h2",{id:"rational"},"Rational"),(0,i.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,i.kt)("h3",{id:"preventing-replay-attacks"},"Preventing replay attacks"),(0,i.kt)("p",null,"To prevent replay attacks, which are man-in-the-middle attacks in which an attacker is able to capture the user's signature and resend it to establish a new session for themselves, the following measures should be taken:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A new ",(0,i.kt)("inlineCode",{parentName:"li"},"nonce")," should be selected each time when EdDSA keys are generated. This ensures that each generated key pair is unique and cannot be replayed."),(0,i.kt)("li",{parentName:"ul"},"When using EdDSA_private_K to sign a request, a recent timestamp as the expiry date must be included. This ensures that the signed message is only valid for a limited time and cannot be reused in a replay attack.")),(0,i.kt)("p",null,"By implementing these measures, the app can minimize the risk of replay attacks and ensure the security of the user's data and interactions with the SP servers."))}u.isMDXComponent=!0},80168:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/015-Auth-Overview-4661affcfe015a476aef678cc475e0dd.png"},65282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/015-Auth-Update-Key-Metamask-961fcbc2e43767074df471e63c9e7285.png"}}]);