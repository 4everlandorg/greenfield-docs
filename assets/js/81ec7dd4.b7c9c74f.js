"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3584],{65488:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(87462),a=n(67294),r=n(86010),i=n(72389),l=n(67392),d=n(7094),s=n(12466);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:t,block:n,defaultValue:i,values:u,groupId:p,className:m}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??h.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),g=(0,l.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,d.U)(),[w,v]=(0,a.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=p){const e=k[p];null!=e&&e!==w&&f.some((t=>t.value===e))&&v(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),o=f[n].value;o!==w&&(N(t),v(o),null!=p&&y(p,String(o)))},E=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:x},i,{className:(0,r.Z)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,i.Z)();return a.createElement(u,(0,o.Z)({key:String(t)},e))}},27388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905)),r=n(65488),i=n(85162);const l={title:"Greenfield Command",order:4},d="Greenfield Command",s={unversionedId:"guide/getting-started/greenfield-command",id:"guide/getting-started/greenfield-command",title:"Greenfield Command",description:"Greenfield Command is a powerful command line to interact with Greenfield,",source:"@site/docs/guide/getting-started/greenfield-command.md",sourceDirName:"guide/getting-started",slug:"/guide/getting-started/greenfield-command",permalink:"/greenfield-docs/docs/guide/getting-started/greenfield-command",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/getting-started/greenfield-command.md",tags:[],version:"current",frontMatter:{title:"Greenfield Command",order:4},sidebar:"guideSidebar",previous:{title:"Getting Test tBNB",permalink:"/greenfield-docs/docs/guide/getting-started/get-test-bnb"},next:{title:"Accounts",permalink:"/greenfield-docs/docs/guide/core-concept/accounts"}},c={},u=[{value:"Command Tool Guide",id:"command-tool-guide",level:2},{value:"Basic Operations",id:"basic-operations",level:2},{value:"Account Operations",id:"account-operations",level:3},{value:"SP Operations",id:"sp-operations",level:3},{value:"Bucket Operation",id:"bucket-operation",level:3},{value:"Upload/Download Files",id:"uploaddownload-files",level:3},{value:"Group Operation",id:"group-operation",level:3},{value:"Policy Operation",id:"policy-operation",level:3}],p={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"greenfield-command"},"Greenfield Command"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-cmd"},"Greenfield Command")," is a powerful command line to interact with Greenfield,\nby which you can manage your resources on Greenfield."),(0,a.kt)("h2",{id:"command-tool-guide"},"Command Tool Guide"),(0,a.kt)("p",null,'This command tool supports basic storage functions, including creating buckets, uploading and downloading files, and deleting resources.\nIt also supports related operations such as groups, policy, banks, account and so on. To make the command display clearer, commands of different categories are implemented as subcommands of different categories. You can use "gnfd-cmd -h" to view the supported command categories.'),(0,a.kt)("p",null,'The command tool supports the "--home" option to specify the path of the config file and the keystore,\nthe default path is a directory called ".gnfd-cmd" under the home directory of the system.\nWhen running commands that interact with the greenfield, if there is no config/config.toml file under the path and the commands runs without "--config" flag, the tool will generate the config/config.toml file automatically which is consistent with the testnet configuration under the path.'),(0,a.kt)("p",null,"Below is examples of the config file of Testnet and Mainnet. The rpcAddr and chainId should be consistent with the Greenfield network.\nFor Greenfield Mainnet, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/endpoints"},"Greenfield Mainnet RPC Endpoints"),".\nThe rpcAddr indicates the Tendermint RPC address with the port info."),(0,a.kt)(r.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"mainnet",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'rpcAddr = "https://greenfield-chain.bnbchain.org:443"\nchainId = "greenfield_1017-1"\n'))),(0,a.kt)(i.Z,{value:"testnet",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'rpcAddr = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\nchainId = "greenfield_5600-1"\n')))),(0,a.kt)("p",null,'The command has the ability to intelligently select the correct storage provider to respond to the request. The user only needs to set the storage provider operator-address if they want to create a bucket on a specific SP. For example, the user can run "gnfd-cmd storage put test gnfd://bucket1/object1" to upload a file to bucket1 and then run "gnfd-cmd storage put test gnfd://bucket2/object" to upload a file to bucket2, which is stored on another SP without changing the config.'),(0,a.kt)("h2",{id:"basic-operations"},"Basic Operations"),(0,a.kt)("h3",{id:"account-operations"},"Account Operations"),(0,a.kt)("p",null,'Before using the rich features of the command tool, you need to init account info and generate keystore by "account import" or "account new" command .\nAll the other commands need to load the keystore content before running.'),(0,a.kt)("p",null,'The "import" command imports account info from private key file and generate a keystore by following four steps:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Export your private key from MetaMask and write it into a local file as plaintext (You can select "Account Details" from the dropdown menu of MetaMask.\nClick on the "Export Private Key" button at the bottom of the page.)'),(0,a.kt)("li",{parentName:"ol"},'Generate a keystore by the "account import ',"[keyfile]",'" command. Users need set the private key file path, which is created by step 1.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// import key and generate a keystore file \ngnfd-cmd account import key.txt\n")),(0,a.kt)("p",null,'3.The terminal will prompt user to enter the password information. Users can also specify the password file path by using the "--passwordfile". Users are responsible for managing their password information.'),(0,a.kt)("p",null,'The keystore will be generated in the path "keystore/keyfile" under the home directory of the system or the directory set by "-home".\nAnd it is also the path to load keystore when running other commands.'),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Delete the private key file which is created in step 1. It is not needed after the keystore has been generated.")),(0,a.kt)("p",null,'If the user has no private key to import, he can use "account new" create a new greenfield account and the keystore. After creating the account, the user needs to transfer token to the address of this account before using other commands to send transactions or use storage-related functions.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// new account and generate keystore key.json\ngnfd-cmd account account new\n")),(0,a.kt)("p",null,'To obtain the account and keystore info, users can use "account export" to print the private key info and "account ls" to display the accounts information.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// list the account info and keystore path\ngnfd-cmd account ls\n\n// display the encrypted keystore or the private key \ngnfd-cmd account export --unarmoredHex --unsafe\n")),(0,a.kt)("p",null,'Users can create multiple accounts using the "account import" or "account new" command. You can use the "set-default" command to specify which account to use for running other commands by default. When executing commands using the default account, there is no need to specify the keystore. '),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// set the default account.\ngnfd-cmd account set-default [address]\n")),(0,a.kt)("h3",{id:"sp-operations"},"SP Operations"),(0,a.kt)("p",null,"Before making a bucket and uploading files, we need to select a storage provider to store the files in the bucket. By executing the following command, we can obtain a list of storage providers on Greenfield."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ gnfd-cmd sp ls\nname     operator address                           endpoint                               status\nbnbchain 0x231099e40E1f98879C4126ef35D82FF006F24fF2 https://greenfield-sp.bnbchain.org:443 IN_SERVICE\ndefibit  0x05b1d420DcAd3aB51EDDE809D90E6e47B8dC9880 https://greenfield-sp.defibit.io:443   IN_SERVICE\nninicoin 0x2901FDdEF924f077Ec6811A4a6a1CB0F13858e8f https://greenfield-sp.ninicoin.io:443  IN_SERVICE\nnariox   0x88051F12AEaEC7d50058Fc20b275b388e15e2580 https://greenfield-sp.nariox.org:443   IN_SERVICE\nlumibot  0x3131865C8B61Bcb045ed756FBe50862fc23aB873 https://greenfield-sp.lumibot.org:443  IN_SERVICE\nvoltbot  0x6651ED78A4058d8A93CA4979b7AD516D1C9010ac https://greenfield-sp.voltbot.io:443   IN_SERVICE\nnodereal 0x03c0799AD70d19e723359E036a83E8f44f4B8Ba7 https://greenfield-sp.nodereal.io:443  IN_SERVICE\n")),(0,a.kt)("p",null,'And the Users can obtain detailed information about a certain SP by "sp head" and "sp get-price" commands.\nHere is an example of obtaining information about an SP with endpoint ',(0,a.kt)("a",{parentName:"p",href:"https://greenfield-sp.nodereal.io:443"},"https://greenfield-sp.nodereal.io:443"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// get storage provider info\n$ gnfd-cmd sp head  https://greenfield-sp.nodereal.io:443\n\n// get quota and storage price info of storage provider:\n$ gnfd-cmd sp get-price https://greenfield-sp.nodereal.io:443\nget bucket read quota price: 0.1469890427  wei/byte\nget bucket storage price: 0.02183945725  wei/byte\nget bucket free quota: 1073741824\n")),(0,a.kt)("p",null,"You can take note of the operator-address information for the storage provider to which is intended to be uploaded. This parameter will be required for making the bucket in the next step."),(0,a.kt)("h3",{id:"bucket-operation"},"Bucket Operation"),(0,a.kt)("p",null,'You can run "./gnfd-cmd bucket -h " to get help of the bucket operations.'),(0,a.kt)("p",null,"The below command can be used to create a new bucket called testbucket:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gnfd-cmd bucket create gnfd://testbucket\n")),(0,a.kt)("p",null,'The command supports "-primarySP" flag to select the storage provider on which you want to create a bucket. The content of the flag should be the operator address of the storage provider. If this value is not set, the first SP in the storage provider list will be selected as the upload target by default.'),(0,a.kt)("p",null,'The user can update the bucket meta by the "bucket update" command. It supports updating bucket visibility, charged quota, or payment address.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// update bucket charged quota \ngnfd-cmd bucket update --chargedQuota 50000 gnfd://testbucket\n// update bucket visibility\ngnfd-cmd bucket update --visibility=public-read gnfd://testbucket\n")),(0,a.kt)("p",null,'The user can use list the buckets which belong to him with "bucket ls" commands.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," gnfd-cmd bucket ls\n")),(0,a.kt)("h3",{id:"uploaddownload-files"},"Upload/Download Files"),(0,a.kt)("p",null,"(1) put Object"),(0,a.kt)("p",null,"The user can upload the local file to the bucket by the \"object put\" command. The following command example uploads an object named 'testobject' to the 'testbucket' bucket. The file payload for the upload is read from the local file indicated by 'file-path'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'gnfd-cmd object put --contentType "text/xml" file-path gnfd://testbucket/testobject\n')),(0,a.kt)("p",null,"If the object name has not been set, the command will use the file name as object name. After the command is executed, it will send createObject txn to the chain and uploads the payload of the object to the storage provider.\nThe command will return after object completes sealing. Users can also choose to interrupt the sealing process, which does not affect the final completion of the object.\nDuring the upload process, the terminal will print the upload progress and upload speed."),(0,a.kt)("p",null,"(2) download object"),(0,a.kt)("p",null,"The user can download the object into the local file by the \"object get\" command. The following command example downloads 'testobject' from 'testbucket' to the local 'file-path' and prints the length of the downloaded file.\nThe filepath can be a specific file path, a directory path, or not set at all. If the file-path is not set, the command will download the content to a file with the same name as the object name in the current directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gnfd-cmd object get gnfd://testbucket/testobject file-path\n")),(0,a.kt)("p",null,"After the command is executed, it will send a download request to the storage provider and download the object. The terminal will print the download progress and speed."),(0,a.kt)("p",null,"(3) list object and delete object"),(0,a.kt)("p",null,'The user can use list the objects of the specific bucket with "object ls" command.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," gnfd-cmd object ls gnfd://testbucket\n")),(0,a.kt)("p",null,'The user can delete the object with "object delete" command.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," gnfd-cmd object delete gnfd://testbucket/testobject \n")),(0,a.kt)("h3",{id:"group-operation"},"Group Operation"),(0,a.kt)("p",null,'Users can run "./gnfd-cmd group -h " to get help of group operations.'),(0,a.kt)("p",null,'The user can create a new group by the "group create" command. Note that this command can set the initialized group member through the --initMembers parameter. After the command executes successfully, the group ID and transaction hash information will be returned.'),(0,a.kt)("p",null,"You can add or remove members from a group using the \"group update\" command. The user can use '--addMembers' to specify the addresses of the members to be added or '--removeMembers' to specify the addresses of the members to be removed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// create group\ngnfd-cmd group create gnfd://testGroup\n// update member\ngnfd-cmd group update --groupOwner 0x.. --addMembers 0x.. gnfd://testGroup\n")),(0,a.kt)("h3",{id:"policy-operation"},"Policy Operation"),(0,a.kt)("p",null,'Users can run "./gnfd-cmd policy -h " to get help of permission operations.'),(0,a.kt)("p",null,'Users can use the "policy put ',"[RESOURCE-URL]",'" command to assign resource permissions to other accounts or groups (called principal), such as the permission to delete objects.\nAfter the command executes successfully, the object policy information of the principal will be returned. The principal is set by --groupId which indicates the group or --grantee which indicates the account.'),(0,a.kt)("p",null,"The resource url can be the follow types:"),(0,a.kt)("p",null,'1) "',(0,a.kt)("strong",{parentName:"p"},"grn:"),'b::bucket-name", it indicates the bucket policy'),(0,a.kt)("p",null,'2) "',(0,a.kt)("strong",{parentName:"p"},"grn:"),'o::bucket-name/object-name", it indicates the object policy'),(0,a.kt)("p",null,'3) "',(0,a.kt)("strong",{parentName:"p"},"grn:"),'g:owner-address:group-name", it indicates the group policy'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// put object policy \ngnfd-cmd policy put --groupId 11 --actions get,delete grn:o::gnfd-bucket/gnfd-object\n\n// put bucket policy\ngnfd-cmd policy put --grantee 0x.. --actions delete  grn:b::gnfd-bucket\n")),(0,a.kt)("p",null,'Users can also revoke permission by "policy delete" command'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// delete the bucket policy from a group\ngnfd-cmd policy delete --groupId 11  grn:b::gnfd-bucket\n\n// delete the object policy from an grantee\ngnfd-cmd policy delete --grantee 0..  grn:o::gnfd-bucket/gnfd-object\n")),(0,a.kt)("p",null,'Users can list the policy of the grantee or group-id by "policy ls" command'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// list policy info of a group\ngnfd-cmd policy ls --groupId 11  grn:o::gnfd-bucket/gnfd-object\n")),(0,a.kt)("p",null,"In addition to the basic commands mentioned above, the Greenfield Command also supports functions such as transferring tokens and payment account operations. You can find more examples in the readme file of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-cmd"},"Greenfield Command"),"."))}h.isMDXComponent=!0}}]);