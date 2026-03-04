import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function M(...a){return a.filter(Boolean).join(" ")}const k=p.forwardRef(({accept:a,multiple:N=!1,maxSize:y=10*1024*1024,maxFiles:w=5,onFilesSelected:i,onError:t,disabled:c,className:Z},ce)=>{const[E,j]=p.useState(!1),[b,q]=p.useState([]),F=p.useRef(null),D=e=>{if(e===0)return"0 Bytes";const r=1024,d=["Bytes","KB","MB","GB"],n=Math.floor(Math.log(e)/Math.log(r));return parseFloat((e/Math.pow(r,n)).toFixed(2))+" "+d[n]},ee=e=>{var n;const r=[],d=Array.from(e);for(const l of d){if(l.size>y){t==null||t(`Arquivo "${l.name}" excede o tamanho máximo de ${D(y)}`);continue}if(a){const ie=a.split(",").map(o=>o.trim()),C=l.type,le="."+((n=l.name.split(".").pop())==null?void 0:n.toLowerCase());if(!ie.some(o=>o.startsWith(".")?le===o.toLowerCase():o.endsWith("/*")?C.startsWith(o.replace("/*","/")):C===o)){t==null||t(`Tipo de arquivo "${l.name}" não é permitido`);continue}}r.push(l)}return!N&&r.length>1?[r[0]]:r.length>w?(t==null||t(`Máximo de ${w} arquivos permitidos`),r.slice(0,w)):r},T=e=>{const r=ee(e);r.length>0&&(q(r),i==null||i(r))},se=e=>{e.preventDefault(),c||j(!0)},re=e=>{e.preventDefault(),j(!1)},ae=e=>{e.preventDefault(),j(!1),!c&&e.dataTransfer.files&&T(e.dataTransfer.files)},te=()=>{var e;c||(e=F.current)==null||e.click()},ne=e=>{e.target.files&&T(e.target.files)},oe=e=>{const r=b.filter((d,n)=>n!==e);q(r),i==null||i(r)};return s.jsxs("div",{className:M("w-full",Z),children:[s.jsxs("div",{onClick:te,onDragOver:se,onDragLeave:re,onDrop:ae,className:M("relative flex flex-col items-center justify-center p-8","border-2 border-dashed rounded-lg cursor-pointer","transition-colors duration-200",E?"border-[var(--primary)] bg-[var(--primary)]/5":"border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--background-muted)]",c&&"cursor-not-allowed opacity-50"),children:[s.jsx("input",{ref:F,type:"file",accept:a,multiple:N,onChange:ne,disabled:c,className:"sr-only"}),s.jsxs("svg",{className:"w-12 h-12 mb-4 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"17 8 12 3 7 8"}),s.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),s.jsx("p",{className:"mb-2 text-base font-medium text-[var(--foreground)]",children:"Arraste arquivos aqui ou clique para selecionar"}),s.jsxs("p",{className:"text-sm text-[var(--foreground-muted)]",children:[a?`Formatos: ${a}`:"Todos os formatos"," • Máximo: ",D(y)]})]}),b.length>0&&s.jsx("div",{className:"mt-4 space-y-2",children:b.map((e,r)=>s.jsxs("div",{className:"flex items-center justify-between p-3 bg-[var(--background-muted)] rounded-lg",children:[s.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[s.jsxs("svg",{className:"w-5 h-5 shrink-0 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),s.jsx("polyline",{points:"14 2 14 8 20 8"})]}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("p",{className:"text-sm font-medium truncate text-[var(--foreground)]",children:e.name}),s.jsx("p",{className:"text-xs text-[var(--foreground-muted)]",children:D(e.size)})]})]}),s.jsx("button",{onClick:()=>oe(r),className:"p-1 rounded hover:bg-[var(--background)] transition-colors","aria-label":"Remover arquivo",children:s.jsxs("svg",{className:"w-4 h-4 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),s.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},`${e.name}-${r}`))})]})});k.displayName="FileUpload";k.__docgenInfo={description:`FileUpload component following SmartSenior Design System

Drag and drop file upload with click support`,methods:[],displayName:"FileUpload",props:{accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10 * 1024 * 1024",computed:!1}},maxFiles:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},onFilesSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: string) => void",signature:{arguments:[{type:{name:"string"},name:"error"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ge={title:"Components/FileUpload",component:k,tags:["autodocs"],parameters:{layout:"centered"}},m={args:{style:{width:"400px"}}},u={args:{accept:"image/*",style:{width:"400px"}}},f={args:{multiple:!0,maxFiles:5,style:{width:"400px"}}},g={args:{accept:".pdf",style:{width:"400px"}}},x={args:{maxSize:1*1024*1024,style:{width:"400px"}}},h={args:{disabled:!0,style:{width:"400px"}}},v={args:{onFilesSelected:a=>console.log("Arquivos selecionados:",a),onError:a=>console.log("Erro:",a),style:{width:"400px"}}};var S,B,A;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    style: {
      width: '400px'
    }
  }
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var z,W,O;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    accept: 'image/*',
    style: {
      width: '400px'
    }
  }
}`,...(O=(W=u.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var $,R,U;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    multiple: true,
    maxFiles: 5,
    style: {
      width: '400px'
    }
  }
}`,...(U=(R=f.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var _,I,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    accept: '.pdf',
    style: {
      width: '400px'
    }
  }
}`,...(L=(I=g.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var V,H,P;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    maxSize: 1 * 1024 * 1024,
    // 1MB
    style: {
      width: '400px'
    }
  }
}`,...(P=(H=x.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var G,K,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    disabled: true,
    style: {
      width: '400px'
    }
  }
}`,...(J=(K=h.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,X,Y;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    onFilesSelected: files => console.log('Arquivos selecionados:', files),
    onError: error => console.log('Erro:', error),
    style: {
      width: '400px'
    }
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const xe=["Default","ImagesOnly","Multiple","PDFOnly","SmallSize","Disabled","WithCallbacks"];export{m as Default,h as Disabled,u as ImagesOnly,f as Multiple,g as PDFOnly,x as SmallSize,v as WithCallbacks,xe as __namedExportsOrder,ge as default};
