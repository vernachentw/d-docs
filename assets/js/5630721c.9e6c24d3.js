"use strict";(self.webpackChunkgips_docs=self.webpackChunkgips_docs||[]).push([[792],{6151:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"introduction/gipsense-map-api-user-manual","title":"GIPSense Map API \u4f7f\u7528\u624b\u518a","description":"\u7248\u672c","source":"@site/docs/introduction/gipsense-map-api-user-manual.md","sourceDirName":"introduction","slug":"/introduction/gipsense-map-api-user-manual","permalink":"/introduction/gipsense-map-api-user-manual","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Product","permalink":"/tags/product"},{"inline":true,"label":"CHT","permalink":"/tags/cht"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"GIPSense Map API \u4f7f\u7528\u624b\u518a","tags":["Product","CHT"]},"sidebar":"tutorialSidebar","previous":{"title":"GIPSense API \u4f7f\u7528\u624b\u518a","permalink":"/introduction/gipsense-api-user-manual"},"next":{"title":"GIPSense\u4e8b\u4ef6\u63a8\u64ad\u8aaa\u660e","permalink":"/introduction/gipsens-events-notification"}}');var l=s(4848),d=s(8453);const a={sidebar_position:2,title:"GIPSense Map API \u4f7f\u7528\u624b\u518a",tags:["Product","CHT"]},r="GIPSense Map API \u4f7f\u7528\u624b\u518a",t={},c=[{value:"\u7248\u672c",id:"\u7248\u672c",level:2},{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u65b9\u5f0f\u4e00\u3001\u4f7f\u7528 channel \u65b9\u5f0f\u547c\u53eb\u8207\u6e9d\u901a",id:"\u65b9\u5f0f\u4e00\u4f7f\u7528-channel-\u65b9\u5f0f\u547c\u53eb\u8207\u6e9d\u901a",level:2},{value:"1. \u985e\u578b A - \u767c\u51fa\u8acb\u6c42\uff0c\u53d6\u5f97\u56de\u61c9",id:"1-\u985e\u578b-a---\u767c\u51fa\u8acb\u6c42\u53d6\u5f97\u56de\u61c9",level:3},{value:"1.1 \u78ba\u8a8d API \u662f\u5426\u6e96\u5099\u5b8c\u6210\uff1a isReady",id:"11-\u78ba\u8a8d-api-\u662f\u5426\u6e96\u5099\u5b8c\u6210-isready",level:4},{value:"1.2 \u78ba\u8a8d\u6a13\u5c64\u7684\u5730\u5716\u8cc7\u8a0a\u662f\u5426\u8f09\u5165\u5b8c\u6210: isSpaceReady",id:"12-\u78ba\u8a8d\u6a13\u5c64\u7684\u5730\u5716\u8cc7\u8a0a\u662f\u5426\u8f09\u5165\u5b8c\u6210-isspaceready",level:4},{value:"1.3 \u8a2d\u5b9a\u7279\u6b8a\u53c3\u6578: configure",id:"13-\u8a2d\u5b9a\u7279\u6b8a\u53c3\u6578-configure",level:4},{value:"1.4 \u8a2d\u5b9a\u6b32\u986f\u793a\u7684\u6a19\u7684\u7269\uff1a setTargetItemUids",id:"14-\u8a2d\u5b9a\u6b32\u986f\u793a\u7684\u6a19\u7684\u7269-settargetitemuids",level:4},{value:"1.5 \u53d6\u5f97\u6b32\u986f\u793a\u7684\u4eba\u54e1\uff1a getTargetItemUids",id:"15-\u53d6\u5f97\u6b32\u986f\u793a\u7684\u4eba\u54e1-gettargetitemuids",level:4},{value:"1.6 \u8a2d\u5b9a\u6b32\u986f\u793a\u7684\u6a19\u7c64\uff1a setTargetTagIds",id:"16-\u8a2d\u5b9a\u6b32\u986f\u793a\u7684\u6a19\u7c64-settargettagids",level:4},{value:"1.7 \u53d6\u5f97\u6b32\u986f\u793a\u7684\u6a19\u7c64\uff1a getTargetTagIds",id:"17-\u53d6\u5f97\u6b32\u986f\u793a\u7684\u6a19\u7c64-gettargettagids",level:4},{value:"1.8 \u8a2d\u5b9a\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d\uff1a setItemOnly",id:"18-\u8a2d\u5b9a\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d-setitemonly",level:4},{value:"1.9 \u53d6\u5f97\u76ee\u524d\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d\uff1a getItemOnly",id:"19-\u53d6\u5f97\u76ee\u524d\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d-getitemonly",level:4},{value:"1.10 \u8a2d\u5b9a\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d\uff1a setUseLastValidPosition",id:"110-\u8a2d\u5b9a\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d-setuselastvalidposition",level:4},{value:"1.11 \u53d6\u5f97\u76ee\u524d\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d\uff1a getUseLastValidPosition",id:"111-\u53d6\u5f97\u76ee\u524d\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d-getuselastvalidposition",level:4},{value:"1.12 \u8a2d\u5b9a\u5730\u5716\u7e2e\u653e\u5c3a\u5bf8\uff1a setZoom",id:"112-\u8a2d\u5b9a\u5730\u5716\u7e2e\u653e\u5c3a\u5bf8-setzoom",level:4},{value:"1.13 \u53d6\u5f97\u5730\u5716\u7e2e\u653e\u5c3a\u5bf8\uff1a getZoom",id:"113-\u53d6\u5f97\u5730\u5716\u7e2e\u653e\u5c3a\u5bf8-getzoom",level:4},{value:"1.14 \u5207\u63db\u7a7a\u9593\uff1a changeSpaceAsync",id:"114-\u5207\u63db\u7a7a\u9593-changespaceasync",level:4},{value:"1.15 \u53d6\u5f97\u76ee\u524d\u5b9a\u4f4d\u7a7a\u9593\u8cc7\u8a0a\uff1a getCurrentSpace",id:"115-\u53d6\u5f97\u76ee\u524d\u5b9a\u4f4d\u7a7a\u9593\u8cc7\u8a0a-getcurrentspace",level:4},{value:"1.16 \u5b9a\u4f4d\u6307\u5b9a\u76ee\u6a19\uff1a locateItem",id:"116-\u5b9a\u4f4d\u6307\u5b9a\u76ee\u6a19-locateitem",level:4},{value:"2. \u985e\u578b B - \u53d6\u5f97\u8cc7\u8a0a",id:"2-\u985e\u578b-b---\u53d6\u5f97\u8cc7\u8a0a",level:3},{value:"2.1 API \u6e96\u5099\u5b8c\u6210\u901a\u77e5\uff1a ready",id:"21-api-\u6e96\u5099\u5b8c\u6210\u901a\u77e5-ready",level:4},{value:"2.2 \u6a13\u5c64\u5207\u63db\u901a\u77e5\uff1aspaceChanged",id:"22-\u6a13\u5c64\u5207\u63db\u901a\u77e5spacechanged",level:4},{value:"2.3 \u6a13\u5c64\u6e96\u5099\u5b8c\u6210\u901a\u77e5\uff1a spaceReady",id:"23-\u6a13\u5c64\u6e96\u5099\u5b8c\u6210\u901a\u77e5-spaceready",level:4},{value:"2.4 \u6a19\u7684\u7269\u9ede\u9078\u901a\u77e5\uff1a itemClicked",id:"24-\u6a19\u7684\u7269\u9ede\u9078\u901a\u77e5-itemclicked",level:4},{value:"\u65b9\u5f0f\u4e8c \u4f7f\u7528 HTTP GET \u65b9\u5f0f\u547c\u53eb",id:"\u65b9\u5f0f\u4e8c-\u4f7f\u7528-http-get-\u65b9\u5f0f\u547c\u53eb",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"gipsense-map-api-\u4f7f\u7528\u624b\u518a",children:"GIPSense Map API \u4f7f\u7528\u624b\u518a"})}),"\n",(0,l.jsx)(n.h2,{id:"\u7248\u672c",children:"\u7248\u672c"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Updated Date"}),(0,l.jsx)(n.th,{children:"Version"}),(0,l.jsx)(n.th,{children:"Notes"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2023/01/29"}),(0,l.jsx)(n.td,{children:"1.0.0"}),(0,l.jsx)(n.td,{children:"1st Release"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2023/01/29"}),(0,l.jsx)(n.td,{children:"1.1.0"}),(0,l.jsxs)(n.td,{children:["\u65b0\u589e api:",(0,l.jsx)("br",{}),"\u985e\u5225 A\uff1a",(0,l.jsx)("br",{})," isAccessReady",(0,l.jsx)("br",{})," setPositions",(0,l.jsx)("br",{})," setCurrentTarget",(0,l.jsx)("br",{}),"zoomToAll",(0,l.jsx)("br",{})," zoomToSpace",(0,l.jsx)("br",{})," zoomToAllPositions",(0,l.jsx)("br",{})," setPositionDisplay",(0,l.jsx)("br",{})," \u985e\u5225 B\uff1a",(0,l.jsx)("br",{})," accessReady ",(0,l.jsx)("br",{})," currentTargetChanged"]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,l.jsx)(n.p,{children:"\u70ba\u6eff\u8db3\u7b2c\u4e09\u65b9\u61c9\u7528\u6574\u5408\u5b9a\u4f4d\u5730\u5716\u9700\u6c42\uff0c\u4e26\u63d0\u4f9b\u5feb\u901f\u6574\u5408\u7684\u958b\u767c\u5de5\u5177\uff0cGIPSense \u63d0\u4f9b\u5d4c\u5165\u5f0f\u5716\u53f0 API\uff0c\u53ef\u76f4\u63a5\u5c07\u5730\u5716\u4ecb\u9762\u6574\u5408\u81f3\u61c9\u7528\u7cfb\u7d71\u4e4b\u4f7f\u7528\u8005\u4ecb\u9762\uff0c\u4e0d\u5fc5\u719f\u6089\u5730\u5716\u4ecb\u9762\u958b\u767c\u6846\u67b6\u3002\u5d4c\u5165\u5f0f\u5716\u53f0\u4ee5 iframe \u578b\u5f0f\uff0c\u63d0\u4f9b\u958b\u767c\u8005\u9032\u884c\u5b9a\u4f4d\u61c9\u7528\u6574\u5408\u6240\u9700\u4e4b\u5730\u5716\u64cd\u4f5c\u529f\u80fd API\u3002\u4e26\u63d0\u4f9b\u900f\u904e channel \u65b9\u5f0f\u547c\u53eb\u6e9d\u901a\u6216\u76f4\u63a5\u4ee5 URL GET \u53c3\u6578\u9032\u884c\u63a7\u5236\u3002\u4e00\u822c\u800c\u8a00\uff0cGIPSense \u6240\u63d0\u4f9b\u4e4b\u5d4c\u5165\u5f0f\u5716\u53f0\u4e4b\u547c\u53eb\u8cc7\u6e90\u8def\u5f91\u70ba\u4ee5\u4e0b\u683c\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-http=",children:"http://{FQDN or IP}:8686/rtls/app/{lang}/map\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53c3\u6578\u8aaa\u660e\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"FQDN or IP\uff1a\u670d\u52d9\u5b8c\u6574\u7db2\u57df\u57df\u540d\u6216 IP \u4f4d\u5740"}),"\n",(0,l.jsx)(n.li,{children:"lang\uff1a\u82e5\u70ba\u591a\u8a9e\u7248\u672c GIPSense\uff0c\u5247\u9700\u65bc\u6b64\u8655\u4ee3\u5165\u8a9e\u7cfb\u7248\u672c\uff0c\u5982\uff1azh-tw \u6216 en\uff0c\u5982\u70ba\u975e\u591a\u8a9e\u7248\u672c\uff0c\u5247\u53ef\u7701\u53bb\u6b64\u8def\u5f91"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u4ee5\u4e0b\u8aaa\u660e\u5169\u7a2e\u4ecb\u63a5\u65b9\u5f0f\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u65b9\u5f0f\u4e00\u4f7f\u7528-channel-\u65b9\u5f0f\u547c\u53eb\u8207\u6e9d\u901a",children:"\u65b9\u5f0f\u4e00\u3001\u4f7f\u7528 channel \u65b9\u5f0f\u547c\u53eb\u8207\u6e9d\u901a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["message \u683c\u5f0f\uff1a {type: string, cmd: string, data: object or string}","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u53c3\u6578\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u985e\u578b: \u8a0a\u606f\u985e\u578b, \u5305\u542b\u4ee5\u4e0b: ",(0,l.jsx)(n.strong,{children:"request, response, info"})]}),"\n",(0,l.jsx)(n.li,{children:"cmd: \u6307\u4ee4\u540d\u7a31, \u53c3\u8003\u5f8c\u7e8c API \u6307\u4ee4\u5167\u5bb9"}),"\n",(0,l.jsx)(n.li,{children:"data: \u8cc7\u6599\uff0c\u6839\u64da\u578b\u614b\u548c\u6307\u4ee4\u540d\u7a31\u6703\u6709\u4e0d\u540c"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u985e\u578b\uff1a\u5d4c\u5165\u5f0f\u5716\u53f0 API \u63d0\u4f9b\u5169\u985e\u578b\u5982\u4e0b\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u985e\u578b A(\u767c\u51fa\u8acb\u6c42\uff0c\u53d6\u5f97\u56de\u61c9)"}),"\uff1a \u7531\u958b\u767c\u8005\u63a7\u5236\uff0c\u5c0d\u5716\u53f0 app \u767c\u51fa\u4e00\u500b request message \u5f8c\uff0capp \u56de\u50b3\u4e00\u500b\u6536\u5230\u6307\u4ee4\u7684 response message\uff0c\u53ef\u7528\u65bc\u63a7\u5236 app \u884c\u70ba\uff0c\u6216\u53d6\u5f97 app \u72c0\u614b"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u985e\u578b B(\u53d6\u5f97\u5716\u53f0\u8cc7\u8a0a)"}),"\uff1a \u7531\u5716\u53f0 app \u4e3b\u52d5\u767c\u51fa message\uff0c\u901a\u77e5\u958b\u767c\u8005 app \u5df2\u5b8c\u6210\u67d0\u9805\u52d5\u4f5c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u6388\u6b0a\u8a8d\u8b49\u8aaa\u660e\uff1a\n\u65bc\u5be6\u969b\u61c9\u7528\u64cd\u4f5c\uff0c\u7531\u65bc\u5716\u8cc7\u6a5f\u654f\u6027\u56e0\u7d20\uff0c\u65bc GIPSense \u5f8c\u53f0\u53ef\u9650\u5b9a\u5716\u8cc7\u662f\u5426\u9650\u5b9a\u6388\u6b0a\u700f\u89bd\uff0c\u82e5\u70ba\u9650\u5b9a\u6388\u6b0a\u4e4b\u60c5\u6cc1\uff0c\u5247\u5fc5\u9808\u7531 FAE \u4eba\u54e1\u63d0\u4f9b\u6838\u767c\u4e4b API Key\uff0c\u4e26\u900f\u904e\u985e\u578b A \u4e2d\u4e4b\u300c1.3 \u8a2d\u5b9a\u7279\u6b8a\u8cc7\u8a0a\uff1a configure\u300d\u529f\u80fd API \u9032\u884c\u8a8d\u8b49\u8a2d\u5b9a\uff0c\u59cb\u80fd\u5448\u73fe\u5730\u5716\u4e4b\u8cc7\u6599\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"1-\u985e\u578b-a---\u767c\u51fa\u8acb\u6c42\u53d6\u5f97\u56de\u61c9",children:"1. \u985e\u578b A - \u767c\u51fa\u8acb\u6c42\uff0c\u53d6\u5f97\u56de\u61c9"}),"\n",(0,l.jsx)(n.h4,{id:"11-\u78ba\u8a8d-api-\u662f\u5426\u6e96\u5099\u5b8c\u6210-isready",children:"1.1 \u78ba\u8a8d API \u662f\u5426\u6e96\u5099\u5b8c\u6210\uff1a isReady"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1a isReady()"}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u78ba\u8a8d API \u6e96\u5099\u5b8c\u6210\uff0c\u624d\u53ef\u4ee5\u958b\u59cb\u64cd\u4f5c API\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["Request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "isReady", data: null})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Response \u8a0a\u606f\u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "isReady", data: true}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"12-\u78ba\u8a8d\u6a13\u5c64\u7684\u5730\u5716\u8cc7\u8a0a\u662f\u5426\u8f09\u5165\u5b8c\u6210-isspaceready",children:"1.2 \u78ba\u8a8d\u6a13\u5c64\u7684\u5730\u5716\u8cc7\u8a0a\u662f\u5426\u8f09\u5165\u5b8c\u6210: isSpaceReady"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1a isSapceReady()"}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u78ba\u8a8d\u76ee\u524d space \u662f\u5426\u5df2\u7d93\u5730\u5716\u8cc7\u8a0a\u8f09\u5165\u5b8c\u6210\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["Request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "isSpaceReady", data: null})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Response \u8a0a\u606f\u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "isSapceReady", data: true}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"13-\u8a2d\u5b9a\u7279\u6b8a\u53c3\u6578-configure",children:"1.3 \u8a2d\u5b9a\u7279\u6b8a\u53c3\u6578: configure"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1aconfigure({key: string, value: unknown })"}),"\n",(0,l.jsxs)(n.li,{children:["\u53c3\u6578\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"key\uff1a string - \u6b32\u57f7\u884c\u64cd\u4f5c\u985e\u578b key \u503c"}),"\n",(0,l.jsx)(n.li,{children:"value\uff1a unknown - \u6b32\u57f7\u884c\u64cd\u4f5c\u985e\u578b\u6240\u9700\u8a2d\u5b9a\u7684\u503c\uff0c\u578b\u614b\u4f9d\u4e0d\u540c\u8a2d\u5b9a\u5167\u5bb9\u800c\u5b9a"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8aaa\u660e\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8a2d\u5b9a\u7279\u6b8a\u8cc7\u8a0a\uff0c\u7531\u6b64\u63a7\u5236\u7684\u8a2d\u5b9a\u6703\u5f71\u97ff\u6574\u500b\u7368\u7acb\u5716\u53f0\u904b\u4f5c\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u8a2d\u5b9a\u958b\u767c\u8005\u9a57\u8b49\u7528\u9014\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"key: authentication"}),"\n",(0,l.jsx)(n.li,{children:"value:{apiKey: string, appId: string}\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Request \u7bc4\u4f8b\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Setting up API token authentication information:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'window.postMessage({type: "request", cmd: "configure", data: {key: "authentication", value: {apiKey: "xxx", appId: "ooo"} }})\n'})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"\u6b64\u64cd\u4f5c\u65bc\u6e2c\u8a66\u6a5f\u74b0\u5883\u4e0d\u9700\u57f7\u884c\u8a8d\u8b49\u4f5c\u696d\uff0c\u65bc\u6b63\u5f0f\u74b0\u5883\u767c\u653e API key"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"14-\u8a2d\u5b9a\u6b32\u986f\u793a\u7684\u6a19\u7684\u7269-settargetitemuids",children:"1.4 \u8a2d\u5b9a\u6b32\u986f\u793a\u7684\u6a19\u7684\u7269\uff1a setTargetItemUids"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1a setTargetItemUids(uids)"}),"\n",(0,l.jsxs)(n.li,{children:["\u53c3\u6578\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"uids\uff1a Array(string) - \u6b32\u986f\u793a\u6a19\u7684\u7269\u7684 monitored item uid \u9663\u5217"}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u88ab\u6307\u5b9a\u7684\u4eba\u54e1\uff0c\u9ede\u4f4d\u624d\u6703\u986f\u793a\u5728\u5730\u5716\u4e0a\u3002\u901a\u5e38\u5728\u6536\u5230 ready \u8a0a\u606f\u518d\u547c\u53eb\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6240\u6709\u4eba\u54e1\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "setTargetItemUids", data: null})\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6307\u5b9a\u5169\u500b\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "setTargetItemUids", data: ["P-00001", "P-00002"]})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "setTargetItemUids", data: ["P-00001", "P-00002"]}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"15-\u53d6\u5f97\u6b32\u986f\u793a\u7684\u4eba\u54e1-gettargetitemuids",children:"1.5 \u53d6\u5f97\u6b32\u986f\u793a\u7684\u4eba\u54e1\uff1a getTargetItemUids"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1a getTargetItemUids()"}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u56de\u50b3\u4e00\u500b uids \u9663\u5217\uff0c\u53d6\u5f97\u76ee\u524d\u6b32\u986f\u793a\u7684\u4eba\u54e1 itemUid\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "getTargetItemUids", data: null})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6240\u6709\u4eba\u54e1\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "getTargetItemUids", data: null}\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u76ee\u524d\u6307\u5b9a\u5169\u500b\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "getTargetItemUids", data: ["P-00001", "P-00002"]}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"16-\u8a2d\u5b9a\u6b32\u986f\u793a\u7684\u6a19\u7c64-settargettagids",children:"1.6 \u8a2d\u5b9a\u6b32\u986f\u793a\u7684\u6a19\u7c64\uff1a setTargetTagIds"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1a setTargetTagIds(ids)"}),"\n",(0,l.jsxs)(n.li,{children:["\u53c3\u6578\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ids\uff1a Array(number) - \u6b32\u986f\u793a\u6a19\u7c64\u7684 id \u9663\u5217"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u88ab\u6307\u5b9a\u7684\u6a19\u7c64\uff0c\u9ede\u4f4d\u624d\u6703\u986f\u793a\u5728\u5730\u5716\u4e0a\u3002\u901a\u5e38\u5728\u6536\u5230 ready \u8a0a\u606f\u518d\u547c\u53eb\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6240\u6709\u6a19\u7c64\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "setTargetTagIds", data: null})\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6307\u5b9a\u5169\u500b\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'window.postMessage({type: "request", cmd: "setTargetTagIds", data: [44889, 46624]})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "setTargetTagIds", data: [44889, 46624]}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"17-\u53d6\u5f97\u6b32\u986f\u793a\u7684\u6a19\u7c64-gettargettagids",children:"1.7 \u53d6\u5f97\u6b32\u986f\u793a\u7684\u6a19\u7c64\uff1a getTargetTagIds"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1a getTargetTagIds()"}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u56de\u50b3\u4e00\u500b ids \u9663\u5217\uff0c\u53d6\u5f97\u76ee\u524d\u6b32\u986f\u793a\u7684\u6a19\u7c64 id\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "getTargetTagIds", data: null})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6240\u6709\u6a19\u7c64\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "getTargetTagIds", data: null}\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u76ee\u524d\u6307\u5b9a\u5169\u500b\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "getTargetTagIds", data: [44889, 46624]}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"18-\u8a2d\u5b9a\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d-setitemonly",children:"1.8 \u8a2d\u5b9a\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d\uff1a setItemOnly"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1asetItemOnly(value: boolean)"}),"\n",(0,l.jsxs)(n.li,{children:["\u53c3\u6578\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"value: (boolean) - \u6c7a\u5b9a\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u8a2d\u5b9a\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u53ea\u986f\u793a\u6a19\u7684\u7269\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "setItemOnly", data: true})\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u540c\u6642\u986f\u793a\u6a19\u7684\u7269\u53ca\u6a19\u7c64\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "setItemOnly", data: false})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "setItemOnly", data: true}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"19-\u53d6\u5f97\u76ee\u524d\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d-getitemonly",children:"1.9 \u53d6\u5f97\u76ee\u524d\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d\uff1a getItemOnly"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1agetItemOnly()"}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u53d6\u5f97\u76ee\u524d\u662f\u5426\u53ea\u986f\u793a\u6a19\u7684\u7269\u9ede\u4f4d\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "getItemOnly", data: null})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "getItemOnly", data: true}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"110-\u8a2d\u5b9a\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d-setuselastvalidposition",children:"1.10 \u8a2d\u5b9a\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d\uff1a setUseLastValidPosition"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1asetUseLastValidPosition(value: boolean)"}),"\n",(0,l.jsxs)(n.li,{children:["\u53c3\u6578\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"value: (boolean) - \u6c7a\u5b9a\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8aaa\u660e\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8a2d\u5b9a\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u96e2\u7dda\u7684\u9ede\u4f4d\u53ea\u80fd\u986f\u793a\u6700\u5f8c\u6709\u6548\u9ede\u4f4d\uff0c\u5982\u679c\u8a2d\u70ba false \u5247\u770b\u4e0d\u5230\u96e2\u7dda\u9ede\u4f4d\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7121\u6cd5\u5b9a\u4f4d\u6642\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d\u986f\u793a\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "setUseLastValidPosition", data: true})\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7121\u6cd5\u5b9a\u4f4d\u6642\u4e0d\u986f\u793a\u9ede\u4f4d\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "setUseLastValidPosition", data: false})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "setUseLastValidPosition", data: true}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"111-\u53d6\u5f97\u76ee\u524d\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d-getuselastvalidposition",children:"1.11 \u53d6\u5f97\u76ee\u524d\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d\uff1a getUseLastValidPosition"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1agetUseLastValidPosition()"}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u53d6\u5f97\u76ee\u524d\u5728\u7121\u6cd5\u5b9a\u4f4d\u6642\u662f\u5426\u4f7f\u7528\u6700\u5f8c\u6709\u6548\u9ede\u4f4d\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "getUseLastValidPosition", data: null})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "getUseLastValidPosition", data: true}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"112-\u8a2d\u5b9a\u5730\u5716\u7e2e\u653e\u5c3a\u5bf8-setzoom",children:"1.12 \u8a2d\u5b9a\u5730\u5716\u7e2e\u653e\u5c3a\u5bf8\uff1a setZoom"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1asetZoom(zoom: number)"}),"\n",(0,l.jsxs)(n.li,{children:["\u53c3\u6578\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"zoom: (number) - \u7e2e\u653e\u5c3a\u5bf8"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u6307\u5b9a\u5730\u5716\u7e2e\u653e\u5c3a\u5bf8\uff0c\u7e2e\u653e\u81f3\u5408\u9069\u7684\u986f\u793a\u5927\u5c0f\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "setZoom", data: 22})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "setZoom", data: 22}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"113-\u53d6\u5f97\u5730\u5716\u7e2e\u653e\u5c3a\u5bf8-getzoom",children:"1.13 \u53d6\u5f97\u5730\u5716\u7e2e\u653e\u5c3a\u5bf8\uff1a getZoom"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1agetZoom()"}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u53d6\u5f97\u76ee\u524d\u7684\u5730\u5716\u7e2e\u653e\u5c3a\u5bf8\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "getZoom", data: null})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'{type: "response", cmd: "getZoom", data: 22}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"114-\u5207\u63db\u7a7a\u9593-changespaceasync",children:"1.14 \u5207\u63db\u7a7a\u9593\uff1a changeSpaceAsync"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1a changeSpaceAsync(spaceName: string)"}),"\n",(0,l.jsxs)(n.li,{children:["\u53c3\u6578\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"spaceName\uff1a(string) - \u6a13\u5c64\u540d\u7a31"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u6839\u64da\u6307\u5b9a\u7684 space name \u5207\u63db\u6a13\u5c64\uff0c\u4ee5\u975e\u540c\u6b65\u7684\u65b9\u5f0f\u8f09\u5165\u8a72\u6a13\u5c64\u7684\u5730\u5716\u8cc7\u8a0a\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "changeSpaceAsync", data: "2F"})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "changeSpaceAsync", data: "2F"}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"115-\u53d6\u5f97\u76ee\u524d\u5b9a\u4f4d\u7a7a\u9593\u8cc7\u8a0a-getcurrentspace",children:"1.15 \u53d6\u5f97\u76ee\u524d\u5b9a\u4f4d\u7a7a\u9593\u8cc7\u8a0a\uff1a getCurrentSpace"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u683c\u5f0f\uff1agetCurrentSpace()"}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u53d6\u5f97\u76ee\u524d\u7684\u6a13\u5c64\u8cc7\u8a0a\uff0c\u63d0\u4f9b\u540d\u7a31\u4ee5\u8b58\u5225\u4e0d\u540c\u6a13\u5c64\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "getCurrentSpace", data: null})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "getCurrentSpace", data: {name: "2F"}}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"116-\u5b9a\u4f4d\u6307\u5b9a\u76ee\u6a19-locateitem",children:"1.16 \u5b9a\u4f4d\u6307\u5b9a\u76ee\u6a19\uff1a locateItem"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u683c\u5f0f\uff1a locateItem({itemUid: string, setCenter",":boolean",", setCurrent",":boolean","})"]}),"\n",(0,l.jsxs)(n.li,{children:["\u53c3\u6578\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"itemUid\uff1a (string) - \u76ee\u6a19 uid"}),"\n",(0,l.jsx)(n.li,{children:"setCenter\uff1a (boolean) - \u662f\u5426\u4f9d\u8a72\u76ee\u6a19\u70ba\u4e2d\u5fc3\u79fb\u52d5\u5730\u5716"}),"\n",(0,l.jsx)(n.li,{children:"setCurrent\uff1a (boolean) - \u662f\u5426\u8a2d\u70ba\u76ee\u524d\u9ede\u4f4d (\u986f\u793a popup)"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u7528\u4f86\u5b9a\u4f4d\u67d0\u4e00\u500b MonitoredItem \u7684\u9ede\u4f4d\uff0c\u6839\u64da\u9ede\u4f4d\u6240\u5728\u6a13\u5c64\u5207\u63db space \u4e26\u986f\u793a\u9ede\u4f4d\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["request \u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript=",children:'window.postMessage({type: "request", cmd: "locateItem", data: {itemUid: "P-00001", setCenter: true, setCurrent: true}})\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["response \u8a0a\u606f\u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "response", cmd: "locateItem", data: {itemUid: "P-00001", setCenter: true, setCurrent: true}}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"2-\u985e\u578b-b---\u53d6\u5f97\u8cc7\u8a0a",children:"2. \u985e\u578b B - \u53d6\u5f97\u8cc7\u8a0a"}),"\n",(0,l.jsx)(n.h4,{id:"21-api-\u6e96\u5099\u5b8c\u6210\u901a\u77e5-ready",children:"2.1 API \u6e96\u5099\u5b8c\u6210\u901a\u77e5\uff1a ready"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u7576 API \u6e96\u5099\u5b8c\u6210\uff0c\u6703\u81ea\u52d5\u767c\u51fa\u901a\u77e5\uff0c\u4ee5\u78ba\u4fdd app \u4e0d\u6703\u904e\u65e9\u64cd\u4f5c API\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["info \u8a0a\u606f\u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "info", cmd: "ready", data: true}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"22-\u6a13\u5c64\u5207\u63db\u901a\u77e5spacechanged",children:"2.2 \u6a13\u5c64\u5207\u63db\u901a\u77e5\uff1aspaceChanged"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u7576\u6a13\u5c64\u5207\u63db\u6642\u6703\u81ea\u52d5\u767c\u51fa\u901a\u77e5\uff0c\u4ee5\u78ba\u4fdd app \u80fd\u540c\u6b65\u6a13\u5c64\u8cc7\u8a0a\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["info \u8a0a\u606f\u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "info", cmd: "spaceChanged", data: {name: "2F"}}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"23-\u6a13\u5c64\u6e96\u5099\u5b8c\u6210\u901a\u77e5-spaceready",children:"2.3 \u6a13\u5c64\u6e96\u5099\u5b8c\u6210\u901a\u77e5\uff1a spaceReady"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u7576\u6a13\u5c64\u5207\u63db\u5f8c\uff0c\u8f09\u5165\u5730\u5716\u5716\u5c64\u8cc7\u8a0a\u5b8c\u6210\uff0c\u6703\u81ea\u52d5\u767c\u51fa\u901a\u77e5\uff0c\u4ee5\u78ba\u4fdd app \u80fd\u540c\u6b65\u5730\u5716\u5716\u5c64\u8cc7\u8a0a\u3002\u8acb\u6ce8\u610f\u5982\u679c\u5feb\u901f\u5207\u63db\u6a13\u5c64\uff0c\u53ea\u6703\u8f09\u5165\u6700\u5f8c\u4e00\u6b21\u5207\u63db\u6a13\u5c64\u7684\u5730\u5716\u5716\u5c64\u8cc7\u8a0a\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["info \u8a0a\u606f\u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "info", cmd: "spaceReady", data: {name: "2F"}}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"24-\u6a19\u7684\u7269\u9ede\u9078\u901a\u77e5-itemclicked",children:"2.4 \u6a19\u7684\u7269\u9ede\u9078\u901a\u77e5\uff1a itemClicked"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8aaa\u660e\uff1a \u5728\u5730\u5716\u4e0a\u9ede\u9078\u6a19\u7684\u7269\u5f8c\uff0c\u6a19\u7684\u7269\u4e0a\u65b9\u6703\u51fa\u73fe\u767d\u5e95\u63d0\u793a\u6846\u53ca\u85cd\u8272\u6a19\u7684\u7269\u540d\u7a31\uff0c\u518d\u9ede\u9078\u85cd\u8272\u7684\u6a19\u7684\u7269\u540d\u7a31\u5c31\u6703\u767c\u51fa\u901a\u77e5\uff0c\u901a\u77e5\u7684\u5167\u5bb9\u70ba\u6a19\u7684\u7269\u7684\u5c6c\u6027\u5167\u5bb9\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["info \u8a0a\u606f\u7bc4\u4f8b\uff1a","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:'{type: "info", cmd: "itemClicked", data: {"uid":"P-00001","kind":"MEMBER","name":"Guest1", ... }}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u65b9\u5f0f\u4e8c-\u4f7f\u7528-http-get-\u65b9\u5f0f\u547c\u53eb",children:"\u65b9\u5f0f\u4e8c \u4f7f\u7528 HTTP GET \u65b9\u5f0f\u547c\u53eb"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528 HTTP GET \u4ecb\u9762\u65b9\u5f0f\u547c\u53eb\u5d4c\u5165\u5f0f\u5730\u5716\u6240\u63d0\u4f9b\u4e4b\u53c3\u6578\u529f\u80fd\u5982\u4e0b\u6574\u7406\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Request URI"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-htmlembedded=",children:"http:// {IP or FQDN}:8686/rtls/app/{lan}/map\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Method: GET"}),"\n",(0,l.jsx)(n.li,{children:"Request Header: accept application/json"}),"\n",(0,l.jsxs)(n.li,{children:["\u53c3\u6578\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["mode: \u5730\u5716\u6a21\u5f0f, \u5305\u542b\u4ee5\u4e0b\u53c3\u6578:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"default: \u9810\u8a2d\u6a21\u5f0f, \u9700\u900f\u904e\u8b8a\u66f4 space name \u4f86\u5207\u63db\u5730\u5716"}),"\n",(0,l.jsx)(n.li,{children:"locating: \u8ffd\u8e64\u6a21\u5f0f, \u8ffd\u8e64\u6307\u5b9a\u7684 itemUid\uff0c\u5716\u53f0\u81ea\u52d5\u4f9d\u64da item \u7684\u4f4d\u7f6e\u4f86\u5207\u63db\u5730\u5716"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["space: \u7a7a\u9593\u540d\u7a31. \u6b64\u53c3\u6578\u7576",(0,l.jsx)(n.strong,{children:"mode = default"}),"\u6642\u6709\u6548\uff0c\u63a5\u6536\u53c3\u6578\u70ba GIPSense \u4e2d\u6240\u8a2d\u5b9a\u4e4b space \u540d\u7a31"]}),"\n",(0,l.jsxs)(n.li,{children:["locatingItemUid: \u8ffd\u8e64\u6a19\u7684\u7269\u8b58\u5225\u78bc. \u6b64\u53c3\u6578\u7576",(0,l.jsx)(n.strong,{children:"mode = locating"}),"\u6642\u6709\u6548\uff0c\u63a5\u53d7\u53c3\u6578\u70ba\u5b9a\u70ba\u7cfb\u7d71\u4e2d\uff0c\u6a19\u7684\u7269\u4e4b Uid"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsx)(n.p,{children:"\u57f7\u884c\u6b64\u65b9\u5f0f\u547c\u53eb\uff0c\u4ecd\u9808\u5c0d\u5730\u5716\u8996\u7a97\u7269\u4ef6\u57f7\u884c\u8a8d\u8b49\u8a2d\u5b9a\uff1a"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json=",children:"window.postMessage({type: 'request', cmd: 'configure', data: {key: \"authentication\", value: {apiKey: \"xxx\", appId: \"xxx\"}}}, '*');\n"})})]})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var i=s(6540);const l={},d=i.createContext(l);function a(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);