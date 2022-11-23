"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4195],{2400:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var n=a(7294),l=a(6010),i=a(2263),r=a(7676);const c="features_xdhU";var o=a(7462),m=a(5488),s=a(5162),d=a(2977),g=a(5117);const p=(0,d.Z)((()=>(0,g.Z)({title:{fontWeight:700,fontSize:"2rem",marginBottom:15},container:{display:"flex",width:"100%",justifyContent:"space-between",margin:15},content:{flexDirection:"column",display:"flex",width:"100%"},fullWidth:{width:"100%"},imgContainer:{height:56,width:56,float:"left",position:"relative"},img:{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"100%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",boxSizing:"border-box",backgroundClip:"content-box",border:"4px solid transparent",borderRadius:"6px"},companyContainer:{flex:"1 0",width:"auto",marginLeft:"80px",overflow:"hidden",marginBottom:8},jobTitle:{fontSize:16,fontWeight:600,marginBottom:0,marginTop:0},company:{display:"inline",fontSize:13},flex:{display:"flex"},date:{fontSize:10,marginTop:0,marginBottom:0},city:{marginLeft:80,fontSize:10},information:{fontSize:14}})));var h=a(150);const E=(0,d.Z)((()=>(0,h.Z)({container:{flexDirection:"row",margin:20,marginLeft:0,display:"flex"},imgContainer:{flex:"1 1",marginRight:10},img:{width:250,borderRadius:6,border:"1px solid #e8e8e8",flex:"1 1"},content:{flex:"2 1"},titleContainer:{display:"flex",flexDirection:"row"},title:{flex:"2 0",fontWeight:800,fontSize:18},description:{fontSize:14},linkContainer:{display:"flex"},link:{marginRight:".7rem",marginLeft:"-.7rem",padding:".5rem .7rem",color:"blue"}})));var u=a(3329);const f=e=>{let{stack:t}=e;return n.createElement(n.Fragment,null,t.map((e=>n.createElement(u.Z,{label:e,color:"secondary",style:{marginRight:5},key:e}))))},k=e=>{let{img:t,title:a,description:l,codeLink:i,liveLink:r,techstack:c}=e;const o=E();return n.createElement("section",{className:o.container},n.createElement("div",{className:o.imgContainer},n.createElement("img",{src:t,className:o.img,alt:"dummy img"})),n.createElement("div",{className:o.content},n.createElement("div",{className:o.titleContainer},n.createElement("span",{className:o.title},a)),n.createElement("span",{className:o.description},l),n.createElement("div",{className:o.linkContainer},i?n.createElement("a",{style:{marginRight:".7rem",marginLeft:"-.7rem",padding:".5rem .7rem"},href:i,target:"_blank"},"Code"):n.createElement(n.Fragment,null),r?n.createElement("a",{style:{marginRight:".7rem",marginLeft:"-.7rem",padding:".5rem .7rem"},href:r,target:"_blank"},"Live"):n.createElement(n.Fragment,null)),n.createElement(f,{stack:c})))},b=e=>{let{img:t,jobTitle:a,company:l,date:i,workLength:r,location:c,tasks:o,techstack:m}=e;const s=p();return n.createElement("section",null,n.createElement("div",{className:s.container},n.createElement("div",{className:s.content},n.createElement("div",{className:s.fullWidth},n.createElement("div",{className:s.imgContainer},t?n.createElement("img",{alt:l,src:t,className:s.img}):n.createElement(n.Fragment,null)),n.createElement("div",{className:s.companyContainer},n.createElement("h3",{className:s.jobTitle},a),n.createElement("span",{className:s.company},l),n.createElement("div",{className:s.flex},n.createElement("h4",{className:s.date},n.createElement("span",null,i," \u2022")),n.createElement("h4",{className:s.date},n.createElement("span",null," ",r))),n.createElement("div",{style:{display:"block",fontSize:10}},n.createElement("span",null,c)))),n.createElement("div",{className:s.city},n.createElement("p",{className:s.information},o.map((e=>n.createElement(n.Fragment,null,"\u2022 ",e," ",n.createElement("br",null))))),n.createElement(f,{stack:m})))))},v=e=>{let{img:t,school:a,study:l,date:i}=e;const r=p();return n.createElement("section",null,n.createElement("div",{className:r.container},n.createElement("div",{className:r.content},n.createElement("div",{className:r.fullWidth},n.createElement("div",{className:r.imgContainer},n.createElement("img",{alt:a,src:t,className:r.img})),n.createElement("div",{className:r.companyContainer},n.createElement("h3",{className:r.jobTitle},a),n.createElement("span",{className:r.company},l),n.createElement("div",{className:r.flex},n.createElement("h4",{className:r.date},n.createElement("span",null,i))))))))},N=[{img:"img/codingschool.png",title:"CodingSchool API",description:"Backend API for CodingSchool application, which is a bootcamp directory website",codeLink:"https://github.com/nico1aseth/codingschool-api",liveLink:"https://codingschool.lol",techstack:["ExpressJS","MongoDB"]},{img:"img/portfolio.png",title:"Portfolio",description:"Personal portfolio",codeLink:"https://github.com/djamaile/portfolio",liveLink:"djamaile.dev",techstack:["ReactJS","TypeScript"]}],y=[{img:"img/gdsc.png",jobTitle:"GDSC Lead",company:"Google Developer Student Clubs",date:"Sep 2022 - now",workLength:"10 mos",location:"Taipei, Taiwan",tasks:["Developing and managing the GDSC team in NTU","Hosting events regarding Google technology","International collaboration with other GDSC team to co-host virtual Flutter hackathon"],techstack:["Leadership","Communication"]},{img:"img/binance.png",jobTitle:"Binance Campus Ambassador",company:"Binance",date:"Jan 2022 - Sep 2022",workLength:"9 mos",location:"Taipei, Taiwan",tasks:["Writing articles of Binance DEX utility","Brand promotion"],techstack:["Writing","Branding"]}],w=[{img:"img/ntu.jpg",school:"National Taiwan University",study:"BSc, Agricultural Chemistry",date:"2020 - now"}],x=()=>n.createElement(m.Z,null,n.createElement(s.Z,{value:"projects",label:"PROJECTS",default:!0},N.map(((e,t)=>n.createElement(k,(0,o.Z)({key:t},e))))),n.createElement(s.Z,{value:"resume",label:"RESUME"},n.createElement("h2",null,"Experience"),y.map(((e,t)=>n.createElement(b,(0,o.Z)({key:t},e)))),n.createElement("h2",null,"Education"),w.map(((e,t)=>n.createElement(v,(0,o.Z)({key:t},e))))));function C(){return n.createElement("section",{className:c},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--offset-4 col--8"},n.createElement(x,null)))))}const S="heroBanner_qdFl";var Z=a(4731),L=a(7417),T=a(4996),B=a(8487),j=a(2949),z=a(9722);const R=[{name:"linkedin",classname:"fab fa-linkedin fa-fw",link:"https://www.linkedin.com/in/%E9%8F%A1%E6%BA%8F-%E7%8E%8B-a20400222/"},{name:"github",classname:"fab fa-github fa-fw",link:"https://github.com/nico1aseth"}],W=e=>{switch(e){case"linkedin":return"#0a66c2";case"github":return"purple";default:return"blue"}},_=()=>{const{colorMode:e,setColorMode:t}=(0,j.I)();return(0,n.useEffect)((()=>{const e=(0,B.loadCSS)("https://use.fontawesome.com/releases/v5.12.0/css/all.css",document.querySelector("#font-awesome-css"));return()=>{void 0!==e.parentNode&&e.parentNode.removeChilde(e)}}),[]),n.createElement("div",null,R.map((t=>n.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",key:t.classname},n.createElement(z.Z,{className:t.classname,sx:{color:"dark"===e?"on":"off",fontSize:30,marginTop:1,marginRight:1,"&:hover":{color:`${W(t.name)}`}}})))))};function D(){const{siteConfig:e}=(0,i.Z)();return n.createElement("header",{className:(0,l.Z)("hero",S)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement(L.Z,{sx:{display:"flex"}},n.createElement(L.Z,{m:"auto"},n.createElement(Z.Z,{alt:"Nicolas Wang",src:(0,T.Z)("/img/dog.png"),sx:{width:150,height:150,m:2}}))),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement(_,null)))}function F(){return n.createElement(r.Z,{title:"Home",description:"Blog of Nicolas Wang"},n.createElement(D,null),n.createElement("main",null,n.createElement(C,null)))}}}]);