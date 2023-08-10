"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9958],{83625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={title:"Run Testnet SP Node",order:3},i=void 0,s={unversionedId:"guide/storage-provider/run-book/run-testnet-SP-node",id:"guide/storage-provider/run-book/run-testnet-SP-node",title:"Run Testnet SP Node",description:"This guide helps you to set up a Storage Provider and add it to Greenfield testnet.",source:"@site/docs/guide/storage-provider/run-book/run-testnet-SP-node.md",sourceDirName:"guide/storage-provider/run-book",slug:"/guide/storage-provider/run-book/run-testnet-SP-node",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/run-testnet-SP-node",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/run-book/run-testnet-SP-node.md",tags:[],version:"current",frontMatter:{title:"Run Testnet SP Node",order:3},sidebar:"guideSidebar",previous:{title:"Run Local SP Network",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/run-local-SP-network"},next:{title:"Run Mainnet SP Node",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/run-mainnet-SP-node"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Recommended Hardware",id:"recommended-hardware",level:3},{value:"Wallet Preparation",id:"wallet-preparation",level:3},{value:"Databbase Configuration",id:"databbase-configuration",level:3},{value:"PieceStore Configuration",id:"piecestore-configuration",level:3},{value:"Gateway Configuration",id:"gateway-configuration",level:3},{value:"1. Support both path-style and virtual-style routers in https certificates",id:"1-support-both-path-style-and-virtual-style-routers-in-https-certificates",level:4},{value:"2. Cross Region Configuration",id:"2-cross-region-configuration",level:4},{value:"Create Storage Provider",id:"create-storage-provider",level:2},{value:"1. Compile SP",id:"1-compile-sp",level:3},{value:"2. SP Testnet Config",id:"2-sp-testnet-config",level:3},{value:"Generate config template",id:"generate-config-template",level:4},{value:"Write config",id:"write-config",level:4},{value:"3. Run SP",id:"3-run-sp",level:3},{value:"4. Deploy Dashboard",id:"4-deploy-dashboard",level:3},{value:"Add Storage Provider to Greenfield testnet",id:"add-storage-provider-to-greenfield-testnet",level:2},{value:"Fee Table",id:"fee-table",level:3},{value:"1. Submit-proposal",id:"1-submit-proposal",level:3},{value:"Understanding the parameters",id:"understanding-the-parameters",level:4},{value:"2. Deposit BNB to proposal",id:"2-deposit-bnb-to-proposal",level:3},{value:"3. Wait voting and check voting result",id:"3-wait-voting-and-check-voting-result",level:3},{value:"Storage Provider Operations",id:"storage-provider-operations",level:2},{value:"Deposit collateral",id:"deposit-collateral",level:3},{value:"EditStorageProvider",id:"editstorageprovider",level:3},{value:"Verify Functions",id:"verify-functions",level:2},{value:"Storage Provider Standard Test",id:"storage-provider-standard-test",level:3},{value:"Tools",id:"tools",level:3},{value:"Trouble shooting",id:"trouble-shooting",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide helps you to set up a Storage Provider and add it to Greenfield testnet."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"recommended-hardware"},"Recommended Hardware"),(0,o.kt)("p",null,"The following lists the recommended hardware requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X, Linux, or Windows\uff1b"),(0,o.kt)("li",{parentName:"ul"},"16 cores of CPU, 64 GB of memory(RAM);"),(0,o.kt)("li",{parentName:"ul"},"1 Gbps network connection with upload/download speeds of 10MB/s+\uff1b"),(0,o.kt)("li",{parentName:"ul"},"At least 1 TB disk space for backend storage;"),(0,o.kt)("li",{parentName:"ul"},"50GB+ SQL database;"),(0,o.kt)("li",{parentName:"ul"},"Piece Store: AWS S3, MinIO(Beta);"),(0,o.kt)("li",{parentName:"ul"},"5 Greenfield accounts with enough BNB tokens.")),(0,o.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Each storage provider will hold 6 different accounts serving different purposes")),(0,o.kt)("h3",{id:"wallet-preparation"},"Wallet Preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Operator Account: Used to edit the information of the StorageProvider. Please make sure it have enough BNB to deposit the create storage provider proposal(1 BNB) and pay the gas fee of ",(0,o.kt)("inlineCode",{parentName:"li"},"EditStorageProvider")," transaction."),(0,o.kt)("li",{parentName:"ul"},"Funding Account: Used to deposit staking tokens and receive earnings. It is important to ensure that there is enough money in this account, and the user must submit a deposit as a guarantee. At least ",(0,o.kt)("strong",{parentName:"li"},"1000+")," BNB are required for staking. You should use this address to send ",(0,o.kt)("inlineCode",{parentName:"li"},"CreateValidator")," proposal on-chain. "),(0,o.kt)("li",{parentName:"ul"},"Seal Account: Used to seal the user's object. Please make sure it has enough BNB to pay the gas fee of ",(0,o.kt)("inlineCode",{parentName:"li"},"SealObject")," transaction."),(0,o.kt)("li",{parentName:"ul"},"Approval Account: Used to approve user's requests. This account does not require holding BNB tokens."),(0,o.kt)("li",{parentName:"ul"},"GC Account: It is a special address for sp and is used by sp to clean up local expired or unwanted storage. Please make sure it has enough BNB tokens because it's going to keep sending transactions up the chain."),(0,o.kt)("li",{parentName:"ul"},"Bls Account: Used to create bls signature when sealing objects to ensure integrity, it does not need to be deposited. ")),(0,o.kt)("p",null,"You can use the below command to generate this six accounts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys add operator --keyring-backend os\n./build/bin/gnfd keys add funding --keyring-backend os\n./build/bin/gnfd keys add seal --keyring-backend os\n./build/bin/gnfd keys add approval --keyring-backend os\n./build/bin/gnfd keys add gc --keyring-backend os\n./build/bin/gnfd keys add bls --keyring-backend os --algo eth_bls\n")),(0,o.kt)("p",null,"and then export the private key to prepare for SP deployment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys export operator --unarmored-hex --unsafe  --keyring-backend os\n./build/bin/gnfd keys export funding --unarmored-hex --unsafe  --keyring-backend os\n./build/bin/gnfd keys export seal --unarmored-hex --unsafe --keyring-backend os\n./build/bin/gnfd keys export approval --unarmored-hex --unsafe --keyring-backend os\n./build/bin/gnfd keys export gc --unarmored-hex --unsafe --keyring-backend os\n./build/bin/gnfd keys export bls --unarmored-hex --unsafe --keyring-backend os\n")),(0,o.kt)("p",null,"Please keep these six private keys safe!"),(0,o.kt)("p",null,"Also, obtain bls public key, bls proof to fill in the proposal of creating Storage Provider"),(0,o.kt)("p",null,"bls_pub_key: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys show bls --keyring-backend os --output json | jq -r '.pubkey_hex' \n")),(0,o.kt)("p",null,"bls_proof:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'./build/bin/gnfd keys sign "${bls_pub_key}"   --from bls --keyring-backend os\n')),(0,o.kt)("h3",{id:"databbase-configuration"},"Databbase Configuration"),(0,o.kt)("p",null,"You should create three databases: SpDB, BsDB and BsDBBackup, take MySQL as an example, other DB is the same:"),(0,o.kt)("p",null,"block_syncer and block_syncer_backup require the ",(0,o.kt)("strong",{parentName:"p"},"utf8mb4_unicode_ci encoding")," format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# login in mysql and create database\n# the default encoding for the database should be utf8mb4_unicode_ci\nmysql> CREATE DATABASE storage_provider_db;\nmysql> CREATE DATABASE block_syncer;\nmysql> CREATE DATABASE block_syncer_backup;\n# check the database encoding format\nmysql> show create database block_syncer;\n")),(0,o.kt)("p",null,"This is the encoding we expect to see"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Database"),(0,o.kt)("th",{parentName:"tr",align:null},"Create Database"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"blocl_syncer"),(0,o.kt)("td",{parentName:"tr",align:null},"CREATE DATABASE ",(0,o.kt)("inlineCode",{parentName:"td"},"block_syncer")," /",(0,o.kt)("em",{parentName:"td"},"!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE ",(0,o.kt)("inlineCode",{parentName:"em"},"utf8mb4_0900_ai_ci")," "),"/")))),(0,o.kt)("h3",{id:"piecestore-configuration"},"PieceStore Configuration"),(0,o.kt)("p",null,"Please follow this ",(0,o.kt)("a",{parentName:"p",href:"./piece-store"},"doc")," to config your PieceStore."),(0,o.kt)("h3",{id:"gateway-configuration"},"Gateway Configuration"),(0,o.kt)("h4",{id:"1-support-both-path-style-and-virtual-style-routers-in-https-certificates"},"1. Support both path-style and virtual-style routers in https certificates"),(0,o.kt)("p",null,"You need certificates for SP's exposed gateway service domain name and wildcard subdomain name of it, say you exposed your SP's gateway service on ",(0,o.kt)("a",{parentName:"p",href:"https://my-sp1.testnet.dummy-sp.io"},"https://my-sp1.testnet.dummy-sp.io"),", then you need SSL certificates for both ",(0,o.kt)("inlineCode",{parentName:"p"},"my-sp1.testnet.dummy-sp.io")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*.my-sp1.testnet.dummy-sp.io"),".\nFor instance, if you reqeust AWS ACM certificate, you could request with this:\n",(0,o.kt)("img",{alt:"SP AWS ACM CERT",src:n(90751).Z,width:"2126",height:"760"})),(0,o.kt)("p",null,"Also, route all traffic from both ",(0,o.kt)("inlineCode",{parentName:"p"},"my-sp1.testnet.dummy-sp.io")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*.my-sp1.testnet.dummy-sp.io")," to gateway service, for instance, if you use nginx for ingress control, then you'll need to configure rules look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rules:\n  - host: my-sp1.testnet.dummy-sp.io\n    http:\n      paths:\n      - backend:\n          service:\n            name: gateway # where your SP gateway service is internally, such a k8s service.\n            port:\n              number: 9033\n        path: /\n        pathType: ImplementationSpecific\n  - host: '*.my-sp1.testnet.dummy-sp.io'\n    http:\n      paths:\n      - backend:\n          service:\n            name: gateway # the same with the above one.\n            port:\n              number: 9033\n        path: /\n        pathType: ImplementationSpecific\n")),(0,o.kt)("h4",{id:"2-cross-region-configuration"},"2. Cross Region Configuration"),(0,o.kt)("p",null,"When working with web applications (e.g. DCellar),  SPs need to allow cross region requests.\nSee : ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors")),(0,o.kt)("p",null,"If CORS is not configured properly, you may find the DCellar (or any other web applications which mean to interact with your SP) will report CORS errors, similar to below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CORS ERROR",src:n(19273).Z,width:"3448",height:"140"})),(0,o.kt)("p",null,"Most people run their SP services behind the nginx or other similar reverse proxies. Usually the CORS settings should be configured in those reverse proxies."),(0,o.kt)("p",null,"We recommend SP with reverse proxy can return the following headers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"access-control-allow-headers: *\naccess-control-allow-methods: *\naccess-control-allow-origin: *\naccess-control-expose-headers: *\n")),(0,o.kt)("p",null,"After you finish the configuration, you can verify if it works in DCellar."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://dcellar.io"},"https://dcellar.io")),(0,o.kt)("li",{parentName:"ol"},'Press F12 to launch web developer tools and go to "Network" tab.'),(0,o.kt)("li",{parentName:"ol"},"Connect your wallet"),(0,o.kt)("li",{parentName:"ol"},'Find the "OPTIONS" request to your SP and check its status and response headers. If you see a similar result to the following screenshot, it means your CORS configuration is correct.\n',(0,o.kt)("img",{alt:"CORRECT_CORS",src:n(89284).Z,width:"2524",height:"742"}))),(0,o.kt)("h2",{id:"create-storage-provider"},"Create Storage Provider"),(0,o.kt)("h3",{id:"1-compile-sp"},"1. Compile SP"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/compile-dependences#compile-sp"},"Compile SP doc"),"."),(0,o.kt)("h3",{id:"2-sp-testnet-config"},"2. SP Testnet Config"),(0,o.kt)("h4",{id:"generate-config-template"},"Generate config template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd greenfield-storage-provider/build\n\n# dump default configuration\n./gnfd-sp config.dump\n")),(0,o.kt)("h4",{id:"write-config"},"Write config"),(0,o.kt)("p",null,"You can learn about how to write your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file ",(0,o.kt)("a",{parentName:"p",href:"./config"},"here")),(0,o.kt)("p",null,"It's recommended to deploy Kubernetes cluser following this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-sp-deployment/blob/main/docs/README.md"},"guide"),". The corresonding config file is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-sp-deployment/blob/main/docs/k8s/aws/config.toml"},"here"),"."),(0,o.kt)("h3",{id:"3-run-sp"},"3. Run SP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# start sp\n./gnfd-sp --config ${config_file_path}\n")),(0,o.kt)("h3",{id:"4-deploy-dashboard"},"4. Deploy Dashboard"),(0,o.kt)("p",null,"You can prepare your monitoring dashboard following ",(0,o.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/infra-deployment/grafana/"},"this guide")),(0,o.kt)("h2",{id:"add-storage-provider-to-greenfield-testnet"},"Add Storage Provider to Greenfield testnet"),(0,o.kt)("p",null,"Greenfield Blockchain valdiators are responsible for selecting storage providers. For each on-chain proposal to add new storage provider, there are deposit period for depositing BNB and voting period for validators to make votes. Once the proposal passes, new SP can join the network afterwards."),(0,o.kt)("p",null,"You can query the governance parameters ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/gov-v-1-params"},"here")),(0,o.kt)("h3",{id:"fee-table"},"Fee Table"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Fee"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Submit Storage Provider Proposal"),(0,o.kt)("td",{parentName:"tr",align:null},"1 BNB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage Provider Proposal Deposit"),(0,o.kt)("td",{parentName:"tr",align:null},"0.00003 BNB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Edit Storage Provider"),(0,o.kt)("td",{parentName:"tr",align:null},"0.1BNB")))),(0,o.kt)("h3",{id:"1-submit-proposal"},"1. Submit-proposal"),(0,o.kt)("p",null,"The SP needs to initiate an on-chain proposal that specifies the Msg information to be automatically executed after the vote is approved. In this case, the Msg is ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgCreateStorageProvider"),". It's worth noting that the deposit tokens needs to be greater than the minimum deposit tokens specified on the chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'\n./build/bin/gnfd tx sp create-storage-provider path/to/create_storage_provider.json --from funding  --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443 --chain-id "greenfield_5600-1"\n\n# create_sp.json\n$ cat ./create_sp.json\n{\n  "messages":[\n  {\n    "@type":"/greenfield.sp.MsgCreateStorageProvider",\n    "description":{\n      "moniker": "sp0",\n      "identity":"",\n      "website":"",\n      "security_contact":"",\n      "details":""\n    },\n    "sp_address":"{operator_address}",\n    "funding_address":"{funding_address}",\n    "seal_address":"{seal_address}",\n    "approval_address":"{approval_address}",\n    "gc_address":"{gc_address}",\n    "endpoint": "https://sp0.greenfield.io",\n    "deposit":{\n      "denom":"BNB",\n      "amount":"1000000000000000000000"\n    },\n    "read_price": "0.108",\n    "store_price": "0.016"",\n    "free_read_quota": 10000,\n    "creator":"0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2",\n    "bls_key": "{bls_pub_key}",\n    "bls_proof": "{bls_proof}"\n  }\n],\n  "metadata": "4pIMOgIGx1vZGU=",\n  "title": "Create <name> Storage Provider",\n  "summary": "create <name> Storage Provider",\n  "deposit": "1000000000000000000BNB"\n}\n')),(0,o.kt)("h4",{id:"understanding-the-parameters"},"Understanding the parameters"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can get the gov module address by this command"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org/cosmos/auth/v1beta1/module_accounts/gov" -H  "accept: application/json"\n'))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"endpoint")," is URL of your gateway"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"read_price")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"store_price")," unit is ",(0,o.kt)("inlineCode",{parentName:"li"},"wei/bytes/s")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"free_read_quota")," unit is ",(0,o.kt)("em",{parentName:"li"},"Bytes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"creator")," is the address of ",(0,o.kt)("inlineCode",{parentName:"li"},"gov module")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"metadata")," is optional")),(0,o.kt)("h3",{id:"2-deposit-bnb-to-proposal"},"2. Deposit BNB to proposal"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can get the mininum deposit for proposal by the above command. Please make sure that the initial deposit is greater than ",(0,o.kt)("inlineCode",{parentName:"p"},"min_deposit")," when submitting the proposal."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org/cosmos/gov/v1/params/deposit" -H  "accept: application/json"\n'))),(0,o.kt)("p",null,"You can skip this step if the initial deposit amount is greater than the min deposit required by the proposal."),(0,o.kt)("p",null,"Each proposal needs to deposit enough tokens to enter the voting phase."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'./build/bin/gnfd tx gov deposit {proposal_id} 1BNB --from {funding_address} --keyring-backend os --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443 --chain-id "greenfield_5600-1"\n')),(0,o.kt)("h3",{id:"3-wait-voting-and-check-voting-result"},"3. Wait voting and check voting result"),(0,o.kt)("p",null,"After submitting the proposal successfully, you must wait for the voting to be completed and the proposal to be approved. It will last ",(0,o.kt)("strong",{parentName:"p"},"7 days")," on mainnet while ",(0,o.kt)("strong",{parentName:"p"},"1 day")," on testnet. Once it has passed and is executed successfully, you can verify that the storage provider has been joined."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please ensure that the storage provider service is running before it has been joined.")),(0,o.kt)("p",null,"You can check the on-chain SP information to confirm whether the SP has been successfully created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd query sp storage-providers --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443\n")),(0,o.kt)("p",null,"Alternatively, you can check the proposal to know about its execution status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd query gov proposal {proposal_id} --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443\n")),(0,o.kt)("h2",{id:"storage-provider-operations"},"Storage Provider Operations"),(0,o.kt)("h3",{id:"deposit-collateral"},"Deposit collateral"),(0,o.kt)("p",null,"This command is used for the SP to supplement collateral, because if the service status of the SP is not good during operation, it will be slashed by users, resulting in the deduction of its deposit tokens."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx sp deposit [sp-address] [value] [flags]\n")),(0,o.kt)("h3",{id:"editstorageprovider"},"EditStorageProvider"),(0,o.kt)("p",null,"This command is used to edit the information of the SP, including endpoint, description and .etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx sp edit-storage-provider [sp-address] [flags]\n")),(0,o.kt)("h2",{id:"verify-functions"},"Verify Functions"),(0,o.kt)("h3",{id:"storage-provider-standard-test"},"Storage Provider Standard Test"),(0,o.kt)("p",null,"It's required for all SP to run this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-sp-standard-test"},"standard test")," to make sure your SP is running as expected."),(0,o.kt)("h3",{id:"tools"},"Tools"),(0,o.kt)("p",null,"SP can use Greenfield Cmd or DCellar to verify SP functions in Testnet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Greenfield Cmd: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-cmd"},"repo"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"DCellar: ",(0,o.kt)("a",{parentName:"p",href:"https://dcellar.io/"},"website")))),(0,o.kt)("h2",{id:"trouble-shooting"},"Trouble shooting"),(0,o.kt)("p",null,"If you meet issues, please read ",(0,o.kt)("a",{parentName:"p",href:"./common-issues"},"this doc"),"."))}c.isMDXComponent=!0},19273:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/405-cors-error-945a9941e2d457303de5e6892e585b2a.png"},89284:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/406-correct-cors-4cacd4062aba31bdd22b403f6735c821.png"},90751:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/407-SP-AWS-ACM-Cert-cad80e589b7ce989d4a708a839019c3c.jpg"}}]);