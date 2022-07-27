(function(){"use strict";var o={287:function(o,a,r){var e=r(9242),l=r(3396);const n=(0,l.Uk)("forme");function t(o,a,r,e,t,u){const s=(0,l.up)("nav-bar"),m=(0,l.up)("router-link"),c=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(s),(0,l.Wm)(m,{to:"/",hidden:""},{default:(0,l.w5)((()=>[n])),_:1}),(0,l.Wm)(c)])}var u=r.p+"img/c.bf095351.png";const s=(0,l._)("nav",{class:"navbar navbar-light bg-secondary"},[(0,l._)("a",{class:"navbar-brand m-1"},[(0,l._)("img",{src:u,width:"30",height:"30",class:"d-inline-block align-top",alt:"Icone letra C"}),(0,l.Uk)(" Cavalo Pantaneiro ")])],-1),m=[s];function c(o,a,r,e,n,t){return(0,l.wg)(),(0,l.iD)("div",null,m)}var i={name:"NavBar"},d=r(89);const p=(0,d.Z)(i,[["render",c]]);var f=p,v={name:"App",components:{NavBar:f}};const b=(0,d.Z)(v,[["render",t]]);var h=b,g=r(5431);(0,g.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(o){console.error("Error during service worker registration:",o)}});var D=r(2483),_=r(7139);const y={class:"form-group mb-2"},C=(0,l._)("label",{for:"comprimentoDoCorpo"},"Comp. do Corpo:",-1),w={class:"form-group mb-2"},V=(0,l._)("label",{for:"comprimentoDaEspadua"},"Comp. da espádua:",-1),k={class:"form-group mb-2"},W=(0,l._)("label",{for:"comprimentoDorsoLombar"},"Comp. dorso-lombar:",-1),A={class:"form-group mb-2"},x=(0,l._)("label",{for:"larguraDoPeito"},"Largura do peito:",-1),E={class:"form-group mb-2"},L=(0,l._)("label",{for:"larguraDasAncas"},"Largura das ancas:",-1),U={class:"form-group mb-2"},O=(0,l._)("label",{for:"alturaDaGarupa"},"Altura da garupa:",-1),P={class:"form-group mb-2"},G=(0,l._)("label",{for:"alturaDaCernelha"},"Altura da cernelha:",-1),F={class:"form-group mb-2"},j=(0,l._)("label",{for:"alturaDoDorso"},"Altura do dorso:",-1),M={class:"form-group mb-2"},N={class:"row"},S=(0,l._)("legend",{class:"col-form-label col-sm-2 pt-0"},"Sexo:",-1),B={class:"col-sm-10"},Z={class:"form-check"},z=(0,l._)("label",{class:"form-check-label",for:"Macho"}," Macho ",-1),R={class:"form-check"},T=(0,l._)("label",{class:"form-check-label",for:"femea"}," Femea ",-1),q=(0,l._)("br",null,null,-1),I=(0,l._)("div",{class:"row justify-content-center"},[(0,l._)("button",{type:"submit",class:"btn btn-primary w-50 p-3"},"Calcular")],-1);function H(o,a,r,n,t,u){const s=(0,l.up)("Field"),m=(0,l.up)("ErrorMessage"),c=(0,l.up)("Form");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(c,{class:"m-2",onSubmit:u.tiraMedidas},{default:(0,l.w5)((()=>[(0,l._)("div",y,[C,(0,l.Wm)(s,{type:"number",modelValue:t.comprimentoDoCorpo,"onUpdate:modelValue":a[0]||(a[0]=o=>t.comprimentoDoCorpo=o),class:"form-control",id:"comprimentoDoCorpo",placeholder:"Comprimento do Corpo",rules:u.validate,name:"comprimentoCorpo"},null,8,["modelValue","rules"]),(0,l.Wm)(m,{name:"comprimentoCorpo",style:{color:"red"}})]),(0,l._)("div",w,[V,(0,l.Wm)(s,{type:"number",modelValue:t.comprimentoDaEspadua,"onUpdate:modelValue":a[1]||(a[1]=o=>t.comprimentoDaEspadua=o),class:"form-control",id:"comprimentoDaEspadua",placeholder:"Comprimento da espadua",rules:u.validate,name:"comprimentoEspadua"},null,8,["modelValue","rules"]),(0,l.Wm)(m,{name:"comprimentoEspadua",style:{color:"red"}})]),(0,l._)("div",k,[W,(0,l.Wm)(s,{type:"number",modelValue:t.comprimentoDorsoLombar,"onUpdate:modelValue":a[2]||(a[2]=o=>t.comprimentoDorsoLombar=o),class:"form-control",id:"comprimentoDorsoLombar",placeholder:"Comprimento dorso-lombar",rules:u.validate,name:"comprimentoDorsoLombar"},null,8,["modelValue","rules"]),(0,l.Wm)(m,{name:"comprimentoDorsoLombar",style:{color:"red"}})]),(0,l._)("div",A,[x,(0,l.Wm)(s,{type:"number",modelValue:t.larguraDoPeito,"onUpdate:modelValue":a[3]||(a[3]=o=>t.larguraDoPeito=o),class:"form-control",id:"larguraDoPeito",placeholder:"Largura do peito",rules:u.validate,name:"larguraPeito"},null,8,["modelValue","rules"]),(0,l.Wm)(m,{name:"larguraPeito",style:{color:"red"}})]),(0,l._)("div",E,[L,(0,l.Wm)(s,{type:"number",modelValue:t.larguraDasAncas,"onUpdate:modelValue":a[4]||(a[4]=o=>t.larguraDasAncas=o),class:"form-control",id:"larguraDasAncas",placeholder:"Largura das ancas",rules:u.validate,name:"larguraAncas"},null,8,["modelValue","rules"]),(0,l.Wm)(m,{name:"larguraAncas",style:{color:"red"}})]),(0,l._)("div",U,[O,(0,l.Wm)(s,{type:"number",modelValue:t.alturaDaGarupa,"onUpdate:modelValue":a[5]||(a[5]=o=>t.alturaDaGarupa=o),class:"form-control",id:"alturaDaGarupa",placeholder:"Altura da garupa",rules:u.validate,name:"alturaGarupa"},null,8,["modelValue","rules"]),(0,l.Wm)(m,{name:"alturaGarupa",style:{color:"red"}})]),(0,l._)("div",P,[G,(0,l.Wm)(s,{type:"number",modelValue:t.alturaDaCernelha,"onUpdate:modelValue":a[6]||(a[6]=o=>t.alturaDaCernelha=o),class:"form-control",id:"alturaDaCernelha",placeholder:"Altura da cernelha",rules:u.validate,name:"alturaCernelha"},null,8,["modelValue","rules"]),(0,l.Wm)(m,{name:"alturaCernelha",style:{color:"red"}})]),(0,l._)("div",F,[j,(0,l.Wm)(s,{type:"number",modelValue:t.alturaDoDorso,"onUpdate:modelValue":a[7]||(a[7]=o=>t.alturaDoDorso=o),class:"form-control",id:"alturaDoDorso",placeholder:"Altura do dorso",rules:u.validate,name:"alturaDorso"},null,8,["modelValue","rules"]),(0,l.Wm)(m,{name:"alturaDorso",style:{color:"red"}})]),(0,l._)("fieldset",M,[(0,l._)("div",N,[S,(0,l._)("div",B,[(0,l._)("div",Z,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"radio",name:"inputRadio",id:"macho",value:"macho","onUpdate:modelValue":a[8]||(a[8]=o=>t.sexo=o),checked:""},null,512),[[e.G2,t.sexo]]),z]),(0,l._)("div",R,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"radio",name:"inputRadio",id:"femea",value:"femea","onUpdate:modelValue":a[9]||(a[9]=o=>t.sexo=o)},null,512),[[e.G2,t.sexo]]),T,q,(0,l._)("span",null,"Sexo: "+(0,_.zw)(t.sexo),1)])])])]),I])),_:1},8,["onSubmit"])])}var J=r(5708),K={name:"FormCavalo",components:{Form:J.l0,Field:J.gN,ErrorMessage:J.Bc},data(){return{comprimentoDoCorpo:null,comprimentoDaEspadua:null,comprimentoDorsoLombar:null,larguraDoPeito:null,larguraDasAncas:null,alturaDaGarupa:null,alturaDaCernelha:null,alturaDoDorso:null,sexo:"macho"}},methods:{tiraMedidas(){this.comprimentoDoCorpo="",this.comprimentoDaEspadua="",this.comprimentoDorsoLombar="",this.larguraDoPeito="",this.larguraDasAncas="",this.alturaDaGarupa="",this.alturaDaCernelha="",this.alturaDoDorso="",this.sexo="macho"},validate(o){return!!o||"Este campo é obriagatório"}}};const Q=(0,d.Z)(K,[["render",H]]);var X=Q;const Y=[{path:"/",component:X}],$=(0,D.p7)({history:(0,D.r5)(),routes:Y});var oo=$;const ao=(0,e.ri)(h);ao.use(oo),ao.mount("#app")}},a={};function r(e){var l=a[e];if(void 0!==l)return l.exports;var n=a[e]={exports:{}};return o[e](n,n.exports,r),n.exports}r.m=o,function(){var o=[];r.O=function(a,e,l,n){if(!e){var t=1/0;for(c=0;c<o.length;c++){e=o[c][0],l=o[c][1],n=o[c][2];for(var u=!0,s=0;s<e.length;s++)(!1&n||t>=n)&&Object.keys(r.O).every((function(o){return r.O[o](e[s])}))?e.splice(s--,1):(u=!1,n<t&&(t=n));if(u){o.splice(c--,1);var m=l();void 0!==m&&(a=m)}}return a}n=n||0;for(var c=o.length;c>0&&o[c-1][2]>n;c--)o[c]=o[c-1];o[c]=[e,l,n]}}(),function(){r.n=function(o){var a=o&&o.__esModule?function(){return o["default"]}:function(){return o};return r.d(a,{a:a}),a}}(),function(){r.d=function(o,a){for(var e in a)r.o(a,e)&&!r.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:a[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){r.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)}}(),function(){r.p="/"}(),function(){var o={143:0};r.O.j=function(a){return 0===o[a]};var a=function(a,e){var l,n,t=e[0],u=e[1],s=e[2],m=0;if(t.some((function(a){return 0!==o[a]}))){for(l in u)r.o(u,l)&&(r.m[l]=u[l]);if(s)var c=s(r)}for(a&&a(e);m<t.length;m++)n=t[m],r.o(o,n)&&o[n]&&o[n][0](),o[n]=0;return r.O(c)},e=self["webpackChunkcavalo_pwa_v2"]=self["webpackChunkcavalo_pwa_v2"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(287)}));e=r.O(e)})();
//# sourceMappingURL=app.8bf2c0be.js.map