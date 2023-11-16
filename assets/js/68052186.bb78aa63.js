"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Simple Tool for File Management",order:2},o="Building File Management Tool with Greenfield SDK",l={unversionedId:"tutorials/dapp/file-management/overview",id:"tutorials/dapp/file-management/overview",title:"Simple Tool for File Management",description:"Several Chain API libraries are available. These libraries manage the low-level logic of connecting to Greenfield node, making requests, and handing the responses.",source:"@site/docs/tutorials/dapp/file-management/overview.md",sourceDirName:"tutorials/dapp/file-management",slug:"/tutorials/dapp/file-management/overview",permalink:"/greenfield-docs/docs/tutorials/dapp/file-management/overview",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/tutorials/dapp/file-management/overview.md",tags:[],version:"current",frontMatter:{title:"Simple Tool for File Management",order:2},sidebar:"tutorialsSidebar",previous:{title:"Hosting a Website on Greenfield",permalink:"/greenfield-docs/docs/tutorials/dapp/hosting-websites/overview"},next:{title:"Resumable Upload/Download Demo",permalink:"/greenfield-docs/docs/tutorials/dapp/resumable-upload/overview"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Go-SDK Features",id:"go-sdk-features",level:2},{value:"Setup",id:"setup",level:2},{value:"Create a Go Project",id:"create-a-go-project",level:3},{value:"Test a simple function",id:"test-a-simple-function",level:3},{value:"Get Chain Data",id:"get-chain-data",level:2},{value:"Get Address balance",id:"get-address-balance",level:2},{value:"Manage Wallet",id:"manage-wallet",level:2},{value:"Make a storage deal",id:"make-a-storage-deal",level:2},{value:"1. Create a main file",id:"1-create-a-main-file",level:3},{value:"2. Choose your own SP",id:"2-choose-your-own-sp",level:3},{value:"3. Create your bucket",id:"3-create-your-bucket",level:3},{value:"4. Upload your object",id:"4-upload-your-object",level:3},{value:"5. Object management",id:"5-object-management",level:3},{value:"5.1 Read object",id:"51-read-object",level:4},{value:"5.2 Update object visibility",id:"52-update-object-visibility",level:4},{value:"5.3 Delete object",id:"53-delete-object",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Source Code",id:"source-code",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-file-management-tool-with-greenfield-sdk"},"Building File Management Tool with Greenfield SDK"),(0,r.kt)("p",null,"Several Chain API libraries are available. These libraries manage the low-level logic of connecting to Greenfield node, making requests, and handing the responses."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk"},"go-sdk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-js-sdk"},"js-sdk"))),(0,r.kt)("p",null,"In this tutorial we\u2019ll use the go-SDK library to interact with testnet."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before getting started, you should be familiar with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/greenfield-docs/docs/guide/introduction/overview"},"Greenfield basics")),(0,r.kt)("li",{parentName:"ul"},"Greenfield command line ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-cmd#examples"},"examples"))),(0,r.kt)("p",null,"Also, make sure you have the following dependencies installed with the latest version:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go version above 1.20")),(0,r.kt)("h2",{id:"go-sdk-features"},"Go-SDK Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"basic.go")," includes the basic functions to fetch the blockchain info."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"storage.go")," includes the most storage functions such as creating a bucket, uploading files, downloading files, heading, and deleting resources."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group.go")," includes group-related functions such as creating a group and updating group member."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"payment.go")," includes the payment-related functions to a management payment account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"crosschain.go")," includes the cross-chain-related functions to transfer or mirror resources to BSC.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"create-a-go-project"},"Create a Go Project"),(0,r.kt)("p",null,"Let\u2019s set up a Go project with the necessary dependencies."),(0,r.kt)("p",null,"Init"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir ~/hellogreenfield\n$ cd ~/hellogreenfield\n$ go mod init hellogreenfield\n")),(0,r.kt)("p",null,"Add SDK Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ go get github.com/bnb-chain/greenfield-go-sdk\n")),(0,r.kt)("p",null,"Edit go.mod to replace dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"replace (\n    cosmossdk.io/api => github.com/bnb-chain/greenfield-cosmos-sdk/api v0.0.0-20230425074444-eb5869b05fe9\n    cosmossdk.io/math => github.com/bnb-chain/greenfield-cosmos-sdk/math v0.0.0-20230425074444-eb5869b05fe9\n    github.com/cometbft/cometbft => github.com/bnb-chain/greenfield-cometbft v0.0.2\n    github.com/cometbft/cometbft-db => github.com/bnb-chain/greenfield-cometbft-db v0.8.1-alpha.1\n    github.com/cosmos/cosmos-sdk => github.com/bnb-chain/greenfield-cosmos-sdk v0.2.3\n    github.com/cosmos/iavl => github.com/bnb-chain/greenfield-iavl v0.20.1-alpha.1\n    github.com/syndtr/goleveldb => github.com/syndtr/goleveldb v1.0.1-0.20210819022825-2ae1ddf74ef7\n)\n")),(0,r.kt)("p",null,"Install dependensies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go mod tidy\n")),(0,r.kt)("h3",{id:"test-a-simple-function"},"Test a simple function"),(0,r.kt)("p",null,"Now we\u2019re ready to connect to Greenfield testnet and interact with the storage provider APIs. Let\u2019s write a simple script to query the Greenfield version to verify if everything works as expected."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.go")," file in your project and add the following code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n  "context"\n  "log"\n\n  "github.com/bnb-chain/greenfield-go-sdk/client"\n  "github.com/bnb-chain/greenfield-go-sdk/types"\n)\n\nconst (\n  rpcAddr    = "https://greenfield-chain.bnbchain.org:443"\n  chainId    = "greenfield_1017-1"\n  /*testnet\n  rpcAddr    = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\n  chainId    = "greenfield_5600-1"\n  */\n  privateKey = ""\n)\n\nfunc main() {\n  account, err := types.NewAccountFromPrivateKey("test", privateKey)\n  if err != nil {\n    log.Fatalf("New account from private key error, %v", err)\n  }\n\n  cli, err := client.New(chainId, rpcAddr, client.Option{DefaultAccount: account})\n  if err != nil {\n    log.Fatalf("unable to new greenfield client, %v", err)\n  }\n\n  ctx := context.Background()\n  nodeInfo, versionInfo, err := cli.GetNodeInfo(ctx)\n  if err != nil {\n    log.Fatalf("unable to get node info, %v", err)\n  }\n\n  log.Printf("nodeInfo moniker: %s, go version: %s", nodeInfo.Moniker, versionInfo.GoVersion)\n  latestBlock, err := cli.GetLatestBlock(ctx)\n  if err != nil {\n    log.Fatalf("unable to get latest block, %v", err)\n  }\n  log.Printf("latestBlock header: %s", latestBlock.Header)\n\n  heightBefore := latestBlock.Header.Height\n  log.Printf("Wait for block height: %d", heightBefore)\n  err = cli.WaitForBlockHeight(ctx, heightBefore+10)\n  if err != nil {\n    log.Fatalf("unable to wait for block height, %v", err)\n  }\n  height, err := cli.GetLatestBlockHeight(ctx)\n  if err != nil {\n    log.Fatalf("unable to get latest block height, %v", err)\n  }\n\n  log.Printf("Current block height: %d", height)\n}\n')),(0,r.kt)("p",null,"Run the following command in your project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go run main.go\n")),(0,r.kt)("p",null,"This will output something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'2023/09/12 22:18:10 nodeInfo moniker: fullnode, go version: go version go1.20.7 linux/amd64\n2023/09/12 22:18:10 latestBlock header: {{%!s(uint64=11) %!s(uint64=0)} greenfield_5600-1 %!s(int64=401149) 2023-09-13 04:18:05.661693468 +0000 UTC\n{\n    "header": {\n      "version": {\n        "block": "11",\n        "app": "0"\n      },\n      "chain_id": "greenfield_5600-1",\n      "height": "401149",\n      "time": "2023-09-13T04:18:05.661693468Z",\n      "last_block_id": {\n        "hash": "KenBGYDrtA7Bnyy6j3R3d16GWuHnIl5gJW0J3kmM4r8=",\n        "part_set_header": {\n          "total": 1,\n          "hash": "W6nmeVJEhHinvI4I6HBsU/A87Zma8DVVvddBATJdctE="\n        }\n      },\n      "last_commit_hash": "/G92Jzr8fPpqKY89F3xa3dytOF8a2HLvqCrccm9scXM=",\n      "data_hash": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",\n      "validators_hash": "FykCd/548F1J28ssZr71B1805hzxENaQvexsW/Dxo3E=",\n      "next_validators_hash": "FykCd/548F1J28ssZr71B1805hzxENaQvexsW/Dxo3E=",\n      "consensus_hash": "FgA8CM0pWCco2OYq8pA9tuklVX8bmHmMV2Ssdj31W4E=",\n      "app_hash": "wv+XqXhJBQPYpat/Obaj00u86KfJ8le4LIIFFAgqVmA=",\n      "last_results_hash": "f6XeDeH8QasoTSGpSJL0r2WGE4MlrXOVt0cE3bIQE8I=",\n      "evidence_hash": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",\n      "proposer_address": "KhlQ9bz1O8iaWZnqKe36m3IpcP4=",\n      "randao_mix": "/6zQmCJztTeqZIRHe/pXxhgSbfwDLE85awoa4c8sShUUwGGLqFyshMag63MTB7JC2fAsUqPg1ryALY+uQNZ3Bw=="\n    }\n}\n2023/09/12 22:18:10 Wait for block height: 401149\n2023/09/12 22:18:34 Current block height: 401159\n')),(0,r.kt)("p",null,"If everything is set up correctly, your code will be able to connect to the Greenfield node and return the chain data as shown above."),(0,r.kt)("h2",{id:"get-chain-data"},"Get Chain Data"),(0,r.kt)("p",null,"In the previous step, we created a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.go")," file to demonstrate the basic steps to connect to the node and initialize a ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," to query chain data. Next, let\u2019s use some more functions.\nGet current chain head:\nWe can add the following code in main.go to query current head of the chain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  blockByHeight, err := cli.GetBlockByHeight(ctx, height)\n  if err != nil {\n    log.Fatalf("unable to get block by height, %v", err)\n  }\n  log.Printf("Current block height: %d", blockByHeight.Header)\n')),(0,r.kt)("h2",{id:"get-address-balance"},"Get Address balance"),(0,r.kt)("p",null,"With a given greenfield wallet address, you can query its balance by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAccountBalance")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  balance, err := cli.GetAccountBalance(ctx, account.GetAddress().String())\n  if err != nil {\n    log.Fatalf("unable to get balance, %v", err)\n  }\n  log.Printf("%s Current balance: %s", account.GetAddress().String(), balance.String())\n')),(0,r.kt)("p",null,"Apart from the basic data queries shown above, there are many more features. Please see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-docs/docs/api-sdk/endpoints"},"JSON-RPC API Reference")," for all Greenfield API definitions."),(0,r.kt)("h2",{id:"manage-wallet"},"Manage Wallet"),(0,r.kt)("p",null,"Greenfield wallets hold addresses that you can use to manage objects, sign transactions, and pay for gas fees. In this section, we will demonstrate different ways to manage your wallet."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, let\u2019s make sure your connected node is running and the wallet address contains some testnet BNB."),(0,r.kt)("li",{parentName:"ol"},"Create a new file called ",(0,r.kt)("inlineCode",{parentName:"li"},"account.go")," in the same project as earlier. This is where we\u2019ll write all out wallet-related code."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"account.go")," import modules and initialize your private key or mnemonic phrase.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  //import mnemonic\n  account, err := types.NewAccountFromMnemonic("test", mnemonic)\n  //import private key\n  account, err := types.NewAccountFromPrivateKey("test", privateKey)\n')),(0,r.kt)("p",null,"Let\u2019s create a second wallet address so we can test transfers. The new address will be created locally and start with 0 token balance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  account2, _, err := types.NewAccount("test2")\n')),(0,r.kt)("p",null,"Now, let\u2019s try to transfer tBNB to this new address. Under the hood, this will create a transaction to transfer tBNB from fromAddress to toAddress, sign the transaction using SDK, and send the signed transaction to the Greenfield node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    transferTxHash, err := cli.Transfer(ctx, account2.GetAddress().String(), math.NewIntFromUint64(10000000000), types2.TxOption{})\n   if err != nil {\n    log.Fatalf("unable to send, %v", err)\n   }\n   log.Printf("Transfer response: %s", transferTxHash)\n\n   waitForTx, err := cli.WaitForTx(ctx, transferTxHash)\n\n   log.Printf("Wair for tx: %s", waitForTx.TxResult.String())\n\n   balance, err = cli.GetAccountBalance(ctx, account2.GetAddress().String())\n')),(0,r.kt)("p",null,"Run the code to test the transfer of tBNB:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go run account.go\n")),(0,r.kt)("p",null,"This will output something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'2023/09/07 11:18:51 Wair for tx: data:"\\022&\\n$/cosmos.bank.v1beta1.MsgSendResponse\\032\\010\\000\\000\\000\\000\\000\\000\\372\\235" log:"[{\\"msg_index\\":0,\\"events\\":[{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"action\\",\\"value\\":\\"/cosmos.bank.v1beta1.MsgSend\\"},{\\"key\\":\\"sender\\",\\"value\\":\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\"},{\\"key\\":\\"module\\",\\"value\\":\\"bank\\"}]},{\\"type\\":\\"coin_spent\\",\\"attributes\\":[{\\"key\\":\\"spender\\",\\"value\\":\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\"},{\\"key\\":\\"amount\\",\\"value\\":\\"10000000000BNB\\"}]},{\\"type\\":\\"coin_received\\",\\"attributes\\":[{\\"key\\":\\"receiver\\",\\"value\\":\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\"},{\\"key\\":\\"amount\\",\\"value\\":\\"10000000000BNB\\"}]},{\\"type\\":\\"transfer\\",\\"attributes\\":[{\\"key\\":\\"recipient\\",\\"value\\":\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\"},{\\"key\\":\\"sender\\",\\"value\\":\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\"},{\\"key\\":\\"amount\\",\\"value\\":\\"10000000000BNB\\"}]},{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"sender\\",\\"value\\":\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\"}]}]}]" gas_wanted:1200 gas_used:1200 events:<type:"coin_spent" attributes:<key:"spender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > attributes:<key:"amount" value:"6000000000000BNB" index:true > > events:<type:"coin_received" attributes:<key:"receiver" value:"0xf1829676DB577682E944fc3493d451B67Ff3E29F" index:true > attributes:<key:"amount" value:"6000000000000BNB" index:true > > events:<type:"transfer" attributes:<key:"recipient" value:"0xf1829676DB577682E944fc3493d451B67Ff3E29F" index:true > attributes:<key:"sender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > attributes:<key:"amount" value:"6000000000000BNB" index:true > > events:<type:"message" attributes:<key:"sender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > > events:<type:"tx" attributes:<key:"fee" value:"6000000000000BNB" index:true > attributes:<key:"fee_payer" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > > events:<type:"tx" attributes:<key:"acc_seq" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd/0" index:true > > events:<type:"tx" attributes:<key:"signature" value:"plUsfX6lsI0PLjPfFRY7RvYafQ9GK4gAh3pZHddcMdsR9wJRgKUVJ/JDy4HrIEI+qYHP1bGUOxWExmsVdab0xwE=" index:true > > events:<type:"message" attributes:<key:"action" value:"/cosmos.bank.v1beta1.MsgSend" index:true > attributes:<key:"sender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > attributes:<key:"module" value:"bank" index:true > > events:<type:"coin_spent" attributes:<key:"spender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > attributes:<key:"amount" value:"10000000000BNB" index:true > > events:<type:"coin_received" attributes:<key:"receiver" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > attributes:<key:"amount" value:"10000000000BNB" index:true > > events:<type:"transfer" attributes:<key:"recipient" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > attributes:<key:"sender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > attributes:<key:"amount" value:"10000000000BNB" index:true > > events:<type:"message" attributes:<key:"sender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > >\n')),(0,r.kt)("h2",{id:"make-a-storage-deal"},"Make a storage deal"),(0,r.kt)("p",null,"Storing data is one of the most important features of Greenfield. In this section, we\u2019ll walk through the end-to-end process of storing your data on the Greenfield network. We\u2019ll start by importing your data, then make a storage deal with a storage provider, and finally wait for the deal to complete."),(0,r.kt)("h3",{id:"1-create-a-main-file"},"1. Create a main file"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"storage.go")," file in your demo project and add the following boilerplate code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\u200b\n  // initialize account\n  account, err := types.NewAccountFromPrivateKey("test", privateKey)\n  log.Println("address info:", account)\u200b\n  if err != nil {\n    log.Fatalf("New account from private key error, %v", err)\n  }\n\n  //initialize client\n  cli, err := client.New(chainId, rpcAddr, client.Option {DefaultAccount: account})\n  if err != nil {\n    log.Fatalf("unable to new greenfield client, %v", err)\n  }\n\n  ctx := context.Background()\u200b\n\n  // 1. choose storage provider\n  // 2. Create a bucket\n  // 3. Upload your data and set a quota      \u200b\n}\n')),(0,r.kt)("h3",{id:"2-choose-your-own-sp"},"2. Choose your own SP"),(0,r.kt)("p",null,"You can query the list of SP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  // get storage providers list\n  spLists, err := cli.ListStorageProviders(ctx, true)\n  if err != nil {\n    log.Fatalf("fail to list in service sps")\n  }\n\n  //choose the first sp to be the primary SP\n  primarySP := spLists[0].GetOperatorAddress()\n')),(0,r.kt)("h3",{id:"3-create-your-bucket"},"3. Create your bucket"),(0,r.kt)("p",null,"Bucket can be private or public. You can customize it with options."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VISIBILITY_TYPE_PUBLIC_READ"),(0,r.kt)("li",{parentName:"ul"},"VISIBILITY_TYPE_PRIVATE")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  chargedQuota := uint64(10000000)\n  visibility := storageTypes.VISIBILITY_TYPE_PUBLIC_READ\n  opts := types.CreateBucketOptions{Visibility: visibility, ChargedQuota: chargedQuota}\n\n  bucketTx, err := cli.CreateBucket(ctx, bucketName, primarySP, opts)\n  if err != nil {\n    log.Fatalf("unable to send, %v", err)\n  }\n  log.Printf("Create bucket response: %s", bucketTx)\n')),(0,r.kt)("p",null,"To understand how does ",(0,r.kt)("inlineCode",{parentName:"p"},"quota")," work, read ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-docs/docs/guide/core-concept/billing-payment#storage-service-fee"},"this doc"),"."),(0,r.kt)("h3",{id:"4-upload-your-object"},"4. Upload your object"),(0,r.kt)("p",null,"Objects can also be private or public.\nUploading objects is composed of two parts: create and put."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CreateObject")," gets an approval of creating an object and sends createObject txn to Greenfield network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PutObject")," supports the second stage of uploading the object to bucket.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  // create and put object\n  var buffer bytes.Buffer\n  line := `0123456789`\n  for i := 0; i < objectSize/10; i++ {\n    buffer.WriteString(fmt.Sprintf("%s", line))\n  }\n\n  txnHash, err := cli.CreateObject(ctx, bucketName, objectName, bytes.NewReader(buffer.Bytes()), types.CreateObjectOptions{})\n\n  handleErr(err, "CreateObject")\n\n  err = cli.PutObject(ctx, bucketName, objectName, int64(buffer.Len()),\n    bytes.NewReader(buffer.Bytes()), types.PutObjectOptions{TxnHash: txnHash})\n  handleErr(err, "PutObject")\n\n  log.Printf("object: %s has been uploaded to SP\\n", objectName)\n\n  waitObjectSeal(cli, bucketName, objectName)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  func waitObjectSeal(cli client.Client, bucketName, objectName string) {\n    ctx := context.Background()\n    // wait for the object to be sealed\n    timeout := time.After(15 * time.Second)\n    ticker := time.NewTicker(2 * time.Second)\n\n    for {\n      select {\n      case <-timeout:\n        err := errors.New("object not sealed after 15 seconds")\n        handleErr(err, "HeadObject")\n      case <-ticker.C:\n        objectDetail, err := cli.HeadObject(ctx, bucketName, objectName)\n        handleErr(err, "HeadObject")\n        if objectDetail.ObjectInfo.GetObjectStatus().String() == "OBJECT_STATUS_SEALED" {\n          ticker.Stop()\n          fmt.Printf("put object %s successfully \\n", objectName)\n          return\n        }\n      }\n    }\n  }\n')),(0,r.kt)("p",null,"The primary SP syncs with secondary SPs to set up the data redundancy, and then it signs a ",(0,r.kt)("inlineCode",{parentName:"p"},"Seal"),' transaction with the finalized metadata for storage. If the primary SP determines that it doesn\'t want to store the file due to whatever reason, it can also "SealReject" the request.'),(0,r.kt)("h3",{id:"5-object-management"},"5. Object management"),(0,r.kt)("h4",{id:"51-read-object"},"5.1 Read object"),(0,r.kt)("p",null,"You can call ",(0,r.kt)("inlineCode",{parentName:"p"},"GetObject")," function to download data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  // get object\n  reader, info, err := cli.GetObject(ctx, bucketName, objectName, types.GetObjectOptions{})\n  handleErr(err, "GetObject")\n  log.Printf("get object %s successfully, size %d \\n", info.ObjectName, info.Size)\n  handleErr(err, "GetObject")\n  objectBytes, err := io.ReadAll(reader)\n  fmt.Printf("Read data: %s\\n", string(objectBytes))\n\n')),(0,r.kt)("h4",{id:"52-update-object-visibility"},"5.2 Update object visibility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can call ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateBucketVisibility")," to change bucket visibility"),(0,r.kt)("li",{parentName:"ul"},"You can call ",(0,r.kt)("inlineCode",{parentName:"li"},"UpdateObjectVisibility")," to change object visibility")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  //update bucket visibility\n  updateBucketTx, err := cli.UpdateBucketVisibility(ctx, bucketName,\n              storageTypes.VISIBILITY_TYPE_PRIVATE, types.UpdateVisibilityOption{})\n\n  resp, err := cli.WaitForTx(ctx, updateBucketTx)\n  fmt.Printf("Update response: %s\\n", resp)\n  handleErr(err, "UpdateBucketVisibility")\n\n  // Update object visibility\n  updateObjectTx, err := cli.UpdateObjectVisibility(ctx, bucketName,objectName,\n              storageTypes.VISIBILITY_TYPE_PRIVATE, types.UpdateObjectOption{})\n\n  resp, err := cli.WaitForTx(ctx, updateObjectTx)\n  fmt.Printf("Update response: %s\\n", resp)\n  handleErr(err, "UpdateObjectVisibility")\n')),(0,r.kt)("h4",{id:"53-delete-object"},"5.3 Delete object"),(0,r.kt)("p",null,"The function DeleteObject support deleting objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  // delete object\n  delTx, err := cli.DeleteObject(ctx, bucketName, objectName, types.DeleteObjectOption{})\n  handleErr(err, "DeleteObject")\n  _, err = cli.WaitForTx(ctx, delTx)\n  if err != nil {\n    log.Fatalln("txn fail")\n  }\n  log.Printf("object: %s has been deleted\\n", objectName)\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations on making it all the way through this tutorial! In this tutorial, we learned the basics of interacting with the Greenfield network using SDK library."),(0,r.kt)("h3",{id:"source-code"},"Source Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk/blob/master/examples/storage.go"},"Go-SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-js-sdk/blob/main/examples/nodejs/storage.js"},"JS-SDK"))))}p.isMDXComponent=!0}}]);