import{d as c,o as r,c as o,a as t,n as d,t as a,b as l,w as n,_ as s,e as i,r as g}from"./index-630acd37.js";const h={class:"relative group w-full rounded-3xl group p-2 min-h-[300px]"},p=t("span",{class:"absolute rounded-3xl lg:mb-9 z-0 group-hover:-mb-0 inset-0 border-dtext-3 dark:bg-dsurface bg-[#c9c9c9] border-2 backdrop-blur-lg duration-500 dark:border-ltext3 opacity-50"},null,-1),f={class:"relative flex flex-col lg:grid lg:grid-cols-6"},x=["src"],v={key:1,class:"absolute z-[9] group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out top-0 right-0 w-1/2 h-full text-gray-100 text-xl font-bold flex justify-center items-center"},m=["src"],y={key:3,class:"absolute z-[10] group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out top-0 left-0 w-1/2 h-full text-gray-100 text-3xl font-bold flex px-3 justify-center items-center"},b=["src"],w={class:"text-2xl font-bold text-ltext1 dark:text-dtext1"},k={class:"py-3 text-ltext2 dark:text-dtext2"},_={class:"justify-evenly flex"},S=["href"],q=t("svg",{class:"w-6 h-6 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[t("path",{"fill-rule":"evenodd",d:"M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z","clip-rule":"evenodd"})],-1),Z=["href"],C=t("svg",{class:"w-6 h-6 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"})],-1),H=["href"],V=t("svg",{class:"w-6 h-6 text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[t("path",{d:"M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z"}),t("path",{d:"M6 5H5v1h1V5Z"})],-1),j={class:"flex flex-wrap overflow-hidden duration-500 lg:col-span-6 order-10 justify-center mt-2 text-xs font-medium gap-1 [&>img]:rounded-full [&>img]:group-hover:translate-y-0 [&>img]:lg:-translate-y-20 [&>img]:duration-500"},A=c({__name:"ProjectCard",props:{title:{type:String,required:!0},subtitle:{type:String,required:!1},description:{type:String,required:!0},image:{type:String,required:!0},image2:{type:String,required:!1},gif:{type:String,required:!1},demo:{type:String,required:!1},source:{type:String,required:!1},info:{type:String,required:!1},reverse:{type:Boolean,required:!1}},setup(e){return(u,B)=>(r(),o("article",h,[p,t("div",f,[t("div",{class:d(["relative col-span-4 lg:col-span-3 overflow-hidden duration-500 ease-in-out rounded-2xl",e.reverse?"lg:order-2 lg:group-hover:rounded-r-2xl lg:group-hover:rounded-l-none group-hover:rounded-t-none":" lg:group-hover:rounded-l-2xl lg:group-hover:rounded-r-none group-hover:rounded-b-none "])},[e.gif?(r(),o("img",{key:0,src:e.gif,class:"absolute z-[9] bottom-[-5px] right-[-5px] group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out w-1/2 translate-y-80 group-hover:translate-y-0"},null,8,x)):(r(),o("span",v,a(e.description),1)),e.image2?(r(),o("img",{key:2,src:e.image2,class:"absolute z-[10] group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out -translate-x-1/3 translate-y-80 group-hover:translate-y-12"},null,8,m)):(r(),o("span",y,a(e.title),1)),t("img",{src:e.image,class:"group-hover:brightness-50 transition-all duration-500 ease-in-out group-hover:scale-150 min-h-[260px]"},null,8,b)],2),t("div",{class:d(["px-4 py-1 col-span-2 lg:col-span-3 justify-center flex flex-col backdrop-blur-sm border-2 border-white dark:border-ltext2 dark:bg-transparent bg-white border-opacity-20 bg-opacity-20 group-hover:!bg-opacity-100 duration-500 shadow-sm rounded-2xl",e.reverse?"lg:order-1 lg:group-hover:rounded-l-2xl lg:group-hover:rounded-r-none group-hover:rounded-b-none":"lg:group-hover:rounded-r-2xl lg:group-hover:rounded-l-none group-hover:rounded-t-none"])},[t("h1",w,a(e.title),1),t("p",k,a(e.description),1),t("div",_,[e.source?(r(),o("a",{key:0,target:"_blank",href:e.source},[l(s,{label:"Source"},{default:n(()=>[q]),_:1})],8,S)):i("",!0),e.demo?(r(),o("a",{key:1,target:"_blank",href:e.demo},[l(s,{label:"Demo"},{default:n(()=>[C]),_:1})],8,Z)):i("",!0),e.info?(r(),o("a",{key:2,target:"_blank",href:e.info},[l(s,{label:"Read case study"},{default:n(()=>[V]),_:1})],8,H)):i("",!0)])],2),t("div",j,[g(u.$slots,"default")])])]))}});export{A as default};
