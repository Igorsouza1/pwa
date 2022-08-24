(function(){"use strict";var a={9834:function(a,o,e){var r=e(9242),l=e(3396);const n=(0,l.Uk)("login"),t=(0,l.Uk)("form");function s(a,o,e,r,s,u){const c=(0,l.up)("nav-bar"),i=(0,l.up)("router-link"),m=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(c),(0,l.Wm)(i,{to:"/",hidden:""},{default:(0,l.w5)((()=>[n])),_:1}),(0,l.Wm)(i,{to:"/login",hidden:""},{default:(0,l.w5)((()=>[t])),_:1}),(0,l.Wm)(m)])}var u=e.p+"img/c.bf095351.png";const c=(0,l._)("nav",{class:"navbar navbar-light bg-dark bg-gradient"},[(0,l._)("a",{class:"navbar-brand m-1"},[(0,l._)("img",{src:u,width:"30",height:"30",class:"d-inline-block align-top",alt:"Icone letra C"}),(0,l._)("p",{class:"text-white d-inline p"},"Cavalo Pantaneiro")])],-1),i=[c];function m(a,o,e,r,n,t){return(0,l.wg)(),(0,l.iD)("div",null,i)}var d={name:"NavBar"},p=e(89);const f=(0,p.Z)(d,[["render",m]]);var v=f,g={name:"App",components:{NavBar:v}};const h=(0,p.Z)(g,[["render",s]]);var b=h,D=e(5431);(0,D.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){self.addEventListener("fetch",(function(a){a.respondWith(caches.open("cavalo_pwa_v2-precache-v2").then((function(o){return o.match(a.request).then((function(e){var r=fetch(a.request).then((function(e){return o.put(a.request,e.clone()),e}));return e||r}))})))})),console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(a){console.error("Error during service worker registration:",a)}});var _=e(2483),w=e(7139);const C={class:"form-group mb-2"},y=(0,l._)("label",{for:"comprimentoDoCorpo"},"Comp. do Corpo:",-1),k={class:"form-group mb-2"},V=(0,l._)("label",{for:"comprimentoDaEspadua"},"Comp. da espádua:",-1),x={class:"form-group mb-2"},A=(0,l._)("label",{for:"comprimentoDorsoLombar"},"Comp. dorso-lombar:",-1),W={class:"form-group mb-2"},E=(0,l._)("label",{for:"larguraDoPeito"},"Largura do peito:",-1),L={class:"form-group mb-2"},z=(0,l._)("label",{for:"larguraDasAncas"},"Largura das ancas:",-1),G={class:"form-group mb-2"},P=(0,l._)("label",{for:"alturaDaGarupa"},"Altura da garupa:",-1),U={class:"form-group mb-2"},F=(0,l._)("label",{for:"alturaDaCernelha"},"Altura da cernelha:",-1),O={class:"form-group mb-2"},M=(0,l._)("label",{for:"alturaDoDorso"},"Altura do dorso:",-1),j={class:"form-group mb-2"},B={class:"row"},N=(0,l._)("legend",{class:"col-form-label col-sm-2 pt-0"},"Sexo:",-1),S={class:"col-sm-10"},R={class:"form-check"},q=(0,l._)("label",{class:"form-check-label",for:"Macho"}," Macho ",-1),Z={class:"form-check"},Q=(0,l._)("label",{class:"form-check-label",for:"femea"}," Femea ",-1),I=(0,l._)("br",null,null,-1),T=(0,l._)("div",{class:"row justify-content-center"},[(0,l._)("a",{type:"submit",href:"/#/resultado",class:"btn btn-primary w-50 p-3"},"Calcular")],-1);function H(a,o,e,n,t,s){const u=(0,l.up)("Field"),c=(0,l.up)("ErrorMessage"),i=(0,l.up)("Form");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(i,{class:"m-2",onSubmit:s.tiraMedidas},{default:(0,l.w5)((()=>[(0,l._)("div",C,[y,(0,l.Wm)(u,{type:"number",modelValue:t.comprimentoDoCorpo,"onUpdate:modelValue":o[0]||(o[0]=a=>t.comprimentoDoCorpo=a),class:"form-control",id:"comprimentoDoCorpo",placeholder:"Comprimento do Corpo",rules:s.validate,name:"comprimentoCorpo"},null,8,["modelValue","rules"]),(0,l.Wm)(c,{name:"comprimentoCorpo",style:{color:"red"}})]),(0,l._)("div",k,[V,(0,l.Wm)(u,{type:"number",modelValue:t.comprimentoDaEspadua,"onUpdate:modelValue":o[1]||(o[1]=a=>t.comprimentoDaEspadua=a),class:"form-control",id:"comprimentoDaEspadua",placeholder:"Comprimento da espadua",rules:s.validate,name:"comprimentoEspadua"},null,8,["modelValue","rules"]),(0,l.Wm)(c,{name:"comprimentoEspadua",style:{color:"red"}})]),(0,l._)("div",x,[A,(0,l.Wm)(u,{type:"number",modelValue:t.comprimentoDorsoLombar,"onUpdate:modelValue":o[2]||(o[2]=a=>t.comprimentoDorsoLombar=a),class:"form-control",id:"comprimentoDorsoLombar",placeholder:"Comprimento dorso-lombar",rules:s.validate,name:"comprimentoDorsoLombar"},null,8,["modelValue","rules"]),(0,l.Wm)(c,{name:"comprimentoDorsoLombar",style:{color:"red"}})]),(0,l._)("div",W,[E,(0,l.Wm)(u,{type:"number",modelValue:t.larguraDoPeito,"onUpdate:modelValue":o[3]||(o[3]=a=>t.larguraDoPeito=a),class:"form-control",id:"larguraDoPeito",placeholder:"Largura do peito",rules:s.validate,name:"larguraPeito"},null,8,["modelValue","rules"]),(0,l.Wm)(c,{name:"larguraPeito",style:{color:"red"}})]),(0,l._)("div",L,[z,(0,l.Wm)(u,{type:"number",modelValue:t.larguraDasAncas,"onUpdate:modelValue":o[4]||(o[4]=a=>t.larguraDasAncas=a),class:"form-control",id:"larguraDasAncas",placeholder:"Largura das ancas",rules:s.validate,name:"larguraAncas"},null,8,["modelValue","rules"]),(0,l.Wm)(c,{name:"larguraAncas",style:{color:"red"}})]),(0,l._)("div",G,[P,(0,l.Wm)(u,{type:"number",modelValue:t.alturaDaGarupa,"onUpdate:modelValue":o[5]||(o[5]=a=>t.alturaDaGarupa=a),class:"form-control",id:"alturaDaGarupa",placeholder:"Altura da garupa",rules:s.validate,name:"alturaGarupa"},null,8,["modelValue","rules"]),(0,l.Wm)(c,{name:"alturaGarupa",style:{color:"red"}})]),(0,l._)("div",U,[F,(0,l.Wm)(u,{type:"number",modelValue:t.alturaDaCernelha,"onUpdate:modelValue":o[6]||(o[6]=a=>t.alturaDaCernelha=a),class:"form-control",id:"alturaDaCernelha",placeholder:"Altura da cernelha",rules:s.validate,name:"alturaCernelha"},null,8,["modelValue","rules"]),(0,l.Wm)(c,{name:"alturaCernelha",style:{color:"red"}})]),(0,l._)("div",O,[M,(0,l.Wm)(u,{type:"number",modelValue:t.alturaDoDorso,"onUpdate:modelValue":o[7]||(o[7]=a=>t.alturaDoDorso=a),class:"form-control",id:"alturaDoDorso",placeholder:"Altura do dorso",rules:s.validate,name:"alturaDorso"},null,8,["modelValue","rules"]),(0,l.Wm)(c,{name:"alturaDorso",style:{color:"red"}})]),(0,l._)("fieldset",j,[(0,l._)("div",B,[N,(0,l._)("div",S,[(0,l._)("div",R,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"radio",name:"inputRadio",id:"macho",value:"macho","onUpdate:modelValue":o[8]||(o[8]=a=>t.sexo=a),checked:""},null,512),[[r.G2,t.sexo]]),q]),(0,l._)("div",Z,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"radio",name:"inputRadio",id:"femea",value:"femea","onUpdate:modelValue":o[9]||(o[9]=a=>t.sexo=a)},null,512),[[r.G2,t.sexo]]),Q,I,(0,l._)("span",null,"Sexo: "+(0,w.zw)(t.sexo),1)])])])]),T])),_:1},8,["onSubmit"])])}var J=e(5708),$={name:"FormCavalo",components:{Form:J.l0,Field:J.gN,ErrorMessage:J.Bc},data(){return{comprimentoDoCorpo:null,comprimentoDaEspadua:null,comprimentoDorsoLombar:null,larguraDoPeito:null,larguraDasAncas:null,alturaDaGarupa:null,alturaDaCernelha:null,alturaDoDorso:null,sexo:"macho"}},methods:{tiraMedidas(){console.log("GG")},validate(a){return!!a||"Este campo é obriagatório"}}};const K=(0,p.Z)($,[["render",H]]);var X=K;const Y=a=>((0,l.dD)("data-v-7f8629bc"),a=a(),(0,l.Cn)(),a),aa={class:"forcingSize d-flex flex-row justify-content-center align-items-center"},oa={class:"w-75 text-center"},ea=Y((()=>(0,l._)("h3",null,"Faça login para continuar",-1)));function ra(a,o,e,r,n,t){return(0,l.wg)(),(0,l.iD)("div",aa,[(0,l._)("div",oa,[ea,(0,l._)("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=(...a)=>t.login&&t.login(...a))},"Log in")])])}var la={name:"LoginAuth",methods:{login(){this.$auth0.loginWithRedirect()}}};const na=(0,p.Z)(la,[["render",ra],["__scopeId","data-v-7f8629bc"]]);var ta=na,sa=e.p+"img/cavaloPantaneiroMedidas.5020bc1e.png";const ua={class:"teste"},ca={class:"card m-auto mt-2",style:{width:"90%"}},ia={class:"card-body"},ma=(0,l._)("h5",{class:"card-title"},"Cavalo Pantaneiro - Alta Qualidade",-1),da={class:"card-text"},pa={class:"card-text"},fa={class:"card-text"},va={class:"card-text"},ga={class:"card-text"},ha={class:"card-text"},ba={class:"card-text"},Da={class:"card-text"},_a={class:"card-text"},wa=(0,l._)("div",{class:"imageCavalo"},[(0,l._)("img",{src:sa,alt:"Medidas Lineares do cavalo Pantaneiro"})],-1),Ca=(0,l._)("a",{href:"/",class:"card-link btn btn-primary mt-5"},"Novas medidas",-1);function ya(a,o,e,r,n,t){return(0,l.wg)(),(0,l.iD)("div",ua,[(0,l._)("div",ca,[(0,l._)("div",ia,[ma,(0,l._)("p",da,"Média: "+(0,w.zw)(n.media),1),(0,l._)("p",pa,"(1-2)Altura da Cernelha: "+(0,w.zw)(n.comprimentoDaEspadua),1),(0,l._)("p",fa,"(3-4)Altura do Dorso: "+(0,w.zw)(n.alturaDaGarupa),1),(0,l._)("p",va,"(5-6)Altura da Garupa: "+(0,w.zw)(n.comprimentoDaEspadua),1),(0,l._)("p",ga,"(7-8)Comprimento do Corpo: "+(0,w.zw)(n.comprimentoDoCorpo),1),(0,l._)("p",ha,"(9-10)Comprimento da Espadua: "+(0,w.zw)(n.comprimentoDaEspadua),1),(0,l._)("p",ba,"(11-12)comprimento dorsoLombar: "+(0,w.zw)(n.comprimentoDaEspadua),1),(0,l._)("p",Da,"(13-14)Largura do peito: "+(0,w.zw)(n.comprimentoDaEspadua),1),(0,l._)("p",_a,"(15-16)Largura das Ancas: "+(0,w.zw)(n.comprimentoDaEspadua),1),wa,Ca])])])}var ka={name:"ResultadoCavalo",data(){return{media:null,comprimentoDoCorpo:null,comprimentoDaEspadua:null,alturaDaGarupa:null}}};const Va=(0,p.Z)(ka,[["render",ya]]);var xa=Va;const Aa=[{path:"/",component:X},{path:"/login",component:ta},{path:"/resultado",component:xa}],Wa=(0,_.p7)({history:(0,_.r5)(),routes:Aa});var Ea=Wa,La=e(3326);const za=(0,La.B8)({domain:"dev-d8k6skw4.us.auth0.com",client_id:"0gS5gRHJvzz1bf1Cog8BtIAqBFQRtiQQ",redirect_uri:"https://pwa-da1.pages.dev/#/"});var Ga=za;const Pa=(0,r.ri)(b);Pa.use(Ea),Pa.use(Ga),Pa.mount("#app")}},o={};function e(r){var l=o[r];if(void 0!==l)return l.exports;var n=o[r]={exports:{}};return a[r](n,n.exports,e),n.exports}e.m=a,function(){var a=[];e.O=function(o,r,l,n){if(!r){var t=1/0;for(i=0;i<a.length;i++){r=a[i][0],l=a[i][1],n=a[i][2];for(var s=!0,u=0;u<r.length;u++)(!1&n||t>=n)&&Object.keys(e.O).every((function(a){return e.O[a](r[u])}))?r.splice(u--,1):(s=!1,n<t&&(t=n));if(s){a.splice(i--,1);var c=l();void 0!==c&&(o=c)}}return o}n=n||0;for(var i=a.length;i>0&&a[i-1][2]>n;i--)a[i]=a[i-1];a[i]=[r,l,n]}}(),function(){e.n=function(a){var o=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(o,{a:o}),o}}(),function(){e.d=function(a,o){for(var r in o)e.o(o,r)&&!e.o(a,r)&&Object.defineProperty(a,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)}}(),function(){e.p="/"}(),function(){var a={143:0};e.O.j=function(o){return 0===a[o]};var o=function(o,r){var l,n,t=r[0],s=r[1],u=r[2],c=0;if(t.some((function(o){return 0!==a[o]}))){for(l in s)e.o(s,l)&&(e.m[l]=s[l]);if(u)var i=u(e)}for(o&&o(r);c<t.length;c++)n=t[c],e.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return e.O(i)},r=self["webpackChunkcavalo_pwa_v2"]=self["webpackChunkcavalo_pwa_v2"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(9834)}));r=e.O(r)})();
//# sourceMappingURL=app.f42cd317.js.map