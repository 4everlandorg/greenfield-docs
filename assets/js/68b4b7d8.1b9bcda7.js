"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1066],{65229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(87462),o=(a(67294),a(3905));const n={title:"P2P"},i="[Deprecated]P2P",s={unversionedId:"guide/storage-provider/modules/p2p",id:"guide/storage-provider/modules/p2p",title:"P2P",description:"P2P networks are decentralized, meaning participants communicate directly with one another on a relative \u201cequal footing.\u201d No central server or authority controls the network. P2P networks do not require a privileged set of \u201cservers\u201d that behave differently from their \u201cclients,\u201d as in the predominant client-server model.",source:"@site/docs/guide/storage-provider/modules/p2p.md",sourceDirName:"guide/storage-provider/modules",slug:"/guide/storage-provider/modules/p2p",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/p2p",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/modules/p2p.md",tags:[],version:"current",frontMatter:{title:"P2P"}},p={},l=[{value:"ApprovalReplicatePieceTask",id:"approvalreplicatepiecetask",level:2},{value:"GfSp Framework P2P Code",id:"gfsp-framework-p2p-code",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deprecatedp2p"},"[Deprecated]","P2P"),(0,o.kt)("p",null,"P2P networks are decentralized, meaning participants communicate directly with one another on a relative \u201cequal footing.\u201d No central server or authority controls the network. P2P networks do not require a privileged set of \u201cservers\u201d that behave differently from their \u201cclients,\u201d as in the predominant client-server model."),(0,o.kt)("p",null,"P2P networks can take many forms, including file-sharing systems like BitTorrent, blockchain networks like Bitcoin and Ethereum, and decentralized communication standards like Matrix. These systems all have different challenges and tradeoffs, but they share the goal of improving upon the traditional client-server networking model."),(0,o.kt)("p",null,"GfSp uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/libp2p/go-libp2p"},"libp2p")," to complete p2p functions. If you are interested in p2p, you can refer libp2p for more information."),(0,o.kt)("p",null,"SP abandoned the conventional p2p ping service, because the conventional ping service is managed and communicated in units of p2p nodes, without considering the fairness between SPs, the SP's p2p service is more inclined to synchronize messages to different SPs, instead of synchronous p2p nodes. For this purpose we have customized ping service."),(0,o.kt)("p",null,"The customized ping service implements dynamic update of p2p permanent nodes. As usual, permanent nodes should cover as many SPs as possible, which is more decentralized, eg: get replicate approval request needs at least 6 or more replies from different SPs but p2p node are offline and replacement, which is an inevitable problem, If nodes belonging to the same sp all fail and are replaced, then the sp will be unable to communicate, this requires dynamic updates permanent nodes."),(0,o.kt)("p",null,"The customized ping service also implements the pruning function of permanent nodes. For zombie nodes, pruning strategy takes into account the information of the SP dimension, and uses a very conservative pruning strategy. Nodes are only pruned if there are enough backups for one SP and multiple failed interactions, can try to keep each SP with enough nodes to try to connect, so that each sp has an equal opportunity to receive requests."),(0,o.kt)("p",null,"We define a p2p interface to let you customize your own functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// P2P is an abstract interface to the to do replicate piece approvals between SPs.\ntype P2P interface {\n    Modular\n    // HandleReplicatePieceApproval handles the asking replicate piece approval, it will\n    // broadcast the approval to other SPs, waiting the responses. If up to min approved\n    // number or max approved number before timeout, it will return the approvals.\n    HandleReplicatePieceApproval(ctx context.Context, task task.ApprovalReplicatePieceTask, min, max int32,\n        timeout int64) ([]task.ApprovalReplicatePieceTask, error)\n    // HandleQueryBootstrap handles the query p2p node bootstrap node info.\n    HandleQueryBootstrap(ctx context.Context) ([]string, error)\n    // QueryTasks queries replicate piece approval tasks that running on p2p by task sub-key.\n    QueryTasks(ctx context.Context, subKey task.TKey) ([]task.Task, error)\n}\n")),(0,o.kt)("p",null,"P2P interface inherits ",(0,o.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/lifecycle_modular#modular-interface"},"Modular interface"),", so P2P module can be managed by lifecycle and resource manager."),(0,o.kt)("p",null,"In terms of the functions provided by P2P module, there are three methods: HandleReplicatePieceApproval, HandleQueryBootstrap and QueryTasks."),(0,o.kt)("p",null,"As we can see from the second parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"HandleReplicatePieceApproval")," defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"P2P")," interface, there is a replicate piece approval task. It's also defined as an interface."),(0,o.kt)("p",null,"We can query UploadObject tasks that we care about by ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryTasks")," method through using subKey."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Following the implementation of the SP Exit feature, the existing P2P module is currently inactive. Nevertheless, there remains a potential scenario where the P2P module could be reutilized at a later point in time.")),(0,o.kt)("h2",{id:"approvalreplicatepiecetask"},"ApprovalReplicatePieceTask"),(0,o.kt)("p",null,"ApprovalReplicatePieceTask is an abstract interface to record the ask replicate pieces to other SPs(as secondary SP for the object). It is initiated by the primary SP in the replicate pieces phase. Before the primary SP sends it to other SPs, the primary SP will sign the task, other SPs will verify it is sent by a legitimate SP. If other SPs approved the approval, they will SetExpiredHeight and signs the ApprovalReplicatePieceTask."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#approvalreplicatepiecetask"},"ApprovalReplicatePieceTask")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#approvaltask"},"ApprovalTask")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/task#objecttask"},"ObjectTask"))),(0,o.kt)("p",null,"The corresponding protobuf definition is shown below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#gfspreplicatepieceapprovaltask-proto"},"GfSpReplicatePieceApprovalTask")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#objectinfo-proto"},"ObjectInfo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/greenfield-docs/docs/guide/storage-provider/modules/common/proto#params-proto"},"Params"))),(0,o.kt)("h2",{id:"gfsp-framework-p2p-code"},"GfSp Framework P2P Code"),(0,o.kt)("p",null,"P2P module code implementation: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-storage-provider/tree/master/modular/p2p"},"P2P")))}u.isMDXComponent=!0}}]);