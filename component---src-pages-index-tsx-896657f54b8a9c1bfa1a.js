"use strict";(self.webpackChunkchainlist=self.webpackChunkchainlist||[]).push([[245],{6071:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var a=t(6540),r=t(8168),o=t(5284),i=t(8680),s=t(4848),l=(0,o.R)((function(n,e){const{templateAreas:t,gap:a,rowGap:r,columnGap:o,column:l,row:u,autoFlow:c,autoRows:d,templateRows:m,autoColumns:p,templateColumns:f,...h}=n,g={display:"grid",gridTemplateAreas:t,gridGap:a,gridRowGap:r,gridColumnGap:o,gridAutoColumns:p,gridColumn:l,gridRow:u,gridAutoFlow:c,gridAutoRows:d,gridTemplateRows:m,gridTemplateColumns:f};return(0,s.jsx)(i.B.div,{ref:e,__css:g,...h})}));l.displayName="Grid";var u=t(9267),c=t(8579),d=t(1235),m=(0,o.R)((function(n,e){const{columns:t,spacingX:a,spacingY:r,spacing:o,minChildWidth:i,...m}=n,p=(0,u.D)(),f=i?function(n,e){return(0,d.bk)(n,(n=>{const t=(0,c.gf)("sizes",n,"number"==typeof(a=n)?`${a}px`:a)(e);var a;return null===n?null:`repeat(auto-fit, minmax(${t}, 1fr))`}))}(i,p):(h=t,(0,d.bk)(h,(n=>null===n?null:`repeat(${n}, minmax(0, 1fr))`)));var h;return(0,s.jsx)(l,{ref:e,gap:o,columnGap:a,rowGap:r,templateColumns:f,...m})}));m.displayName="SimpleGrid";var p=t(1692),f=t(7821),h=t(1474),g=t(4520),C=t(2878),v=t(9857),Y=(0,o.R)((function(n,e){const t=(0,g.E)();return(0,s.jsx)(i.B.dd,{ref:e,...n,className:(0,v.cx)("chakra-stat__number",n.className),__css:{...t.number,fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"}})}));Y.displayName="StatNumber";var b=t(7638),w=t(5031),x=t(7537),y=t(1654),k=t(4810),G=t(7437);const R=n=>{let{name:e,chainId:t,nativeCurrency:r,icon:o,...i}=n;const{isConnected:s,handleConnect:l,handleAddChain:u}=(0,a.useContext)(x.b);return(0,G.Y)(k.N_,{to:`/chain/${t}`},(0,G.Y)(p.s,{flexDirection:"column",px:"5",py:"4",borderWidth:"1px",rounded:"md",boxShadow:"base"},(0,G.Y)(p.s,{justifyContent:"space-between"},(0,G.Y)(p.s,{flexDirection:"column",minW:"200px"},(0,G.Y)(p.s,{mb:"2"},(0,G.Y)(f.E,{fontSize:"lg",fontWeight:"semibold",lineHeight:"short",isTruncated:!0,verticalAlign:"middle"},e)),(0,G.Y)(h.k,{mb:"2"},(0,G.Y)(g.r,null,(0,G.Y)(C.v,null,"Chain ID"),(0,G.Y)(Y,{fontSize:"md"},t)),(0,G.Y)(g.r,null,(0,G.Y)(C.v,null,"Currency"),(0,G.Y)(Y,{fontSize:"md"},r.symbol)))),o&&(0,G.Y)(p.s,null,(0,G.Y)(y.P,{name:e,icon:o}))),(0,G.Y)(b.o,{mt:"auto"},s?(0,G.Y)(w.$,{onClick:n=>{n.preventDefault(),u({name:e,chainId:t,nativeCurrency:r,...i})}},"Add Chain"):(0,G.Y)(w.$,{onClick:n=>{n.preventDefault(),l()}},"Connect"))))};var S=t(4239);const A=()=>{const n=(0,k.GR)("3672587576").allChain.nodes,{query:e,showTestnets:t,showDeprecated:o,showFlagged:i}=(0,a.useContext)(S.o),s=e.toLowerCase(),l=n.filter((n=>{var a;const r=n.name.toLowerCase(),l=!t&&(n.faucets.length>0||r.includes("testnet")),u=!o&&"deprecated"===n.status,c=!i&&(null===(a=n.redFlags)||void 0===a?void 0:a.length)>0;return!(l||u||c)&&(!(e.length>0)||(n.name.toLowerCase().includes(s)||n.chainId.toString().includes(e)||n.nativeCurrency.symbol.toLowerCase().includes(s)))}));return(0,G.Y)(m,{minChildWidth:"300px",spacing:4,mb:"8"},l.map((n=>(0,G.Y)(R,(0,r.A)({key:n.id},n)))))};var N=t(4387),_=t(4614);var D=()=>(0,G.Y)(a.Fragment,null,(0,G.Y)(N.G,null),(0,G.Y)(_.P,null,(0,G.Y)(A,null)))},7638:function(n,e,t){t.d(e,{o:function(){return i}});var a=t(8680),r=t(5284),o=t(4848),i=(0,a.B)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.displayName="Center";var s={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,r.R)((function(n,e){const{axis:t="both",...r}=n;return(0,o.jsx)(a.B.div,{ref:e,__css:s[t],...r,position:"absolute"})}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-896657f54b8a9c1bfa1a.js.map