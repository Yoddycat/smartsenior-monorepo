import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function n(...s){return s.filter(Boolean).join(" ")}const f=p.forwardRef(({value:s,defaultValue:x,onChange:o,placeholder:$="Selecione um horário",disabled:S,error:z,minuteStep:j=5,className:F},G)=>{const[w,g]=p.useState(!1),[J,v]=p.useState(x||""),a=s!==void 0?s:J,K=r=>{const[t,Y]=r.split(":").map(Number);return{hours:t||0,minutes:Y||0}},b=(r,t)=>`${r.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,{hours:h,minutes:y}=a?K(a):{hours:12,minutes:0},L=r=>{const t=b(r,y);s===void 0&&v(t),o==null||o(t)},Q=r=>{const t=b(h,r);s===void 0&&v(t),o==null||o(t)},U=Array.from({length:24},(r,t)=>t),X=Array.from({length:60/j},(r,t)=>t*j);return e.jsxs("div",{ref:G,className:n("relative w-full",F),children:[e.jsxs("button",{type:"button",onClick:()=>!S&&g(!w),disabled:S,className:n("w-full h-12 px-4 flex items-center justify-between","rounded-md border border-[var(--border)]","bg-[var(--background)] text-[var(--foreground)]","text-base text-left","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--background-muted)]","transition-all duration-200",z&&"border-[var(--error)] focus:ring-[var(--error)]"),children:[e.jsx("span",{className:a?"text-[var(--foreground)]":"text-[var(--foreground-muted)]",children:a||$}),e.jsxs("svg",{className:"w-5 h-5 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]})]}),w&&e.jsxs("div",{className:n("absolute z-50 mt-2 p-4","bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg"),children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm font-medium text-[var(--foreground-muted)] mb-2 text-center",children:"Hora"}),e.jsx("div",{className:"h-48 overflow-y-auto scrollbar-thin",children:U.map(r=>e.jsx("button",{type:"button",onClick:()=>L(r),className:n("w-12 py-2 text-base text-center rounded-md transition-colors","hover:bg-[var(--background-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",r===h?"bg-[var(--primary)] text-[var(--primary-foreground)]":"text-[var(--foreground)]"),children:r.toString().padStart(2,"0")},r))})]}),e.jsx("div",{className:"flex items-center text-2xl font-bold text-[var(--foreground-muted)]",children:":"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm font-medium text-[var(--foreground-muted)] mb-2 text-center",children:"Minuto"}),e.jsx("div",{className:"h-48 overflow-y-auto scrollbar-thin",children:X.map(r=>e.jsx("button",{type:"button",onClick:()=>Q(r),className:n("w-12 py-2 text-base text-center rounded-md transition-colors","hover:bg-[var(--background-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",r===y?"bg-[var(--primary)] text-[var(--primary-foreground)]":"text-[var(--foreground)]"),children:r.toString().padStart(2,"0")},r))})]})]}),e.jsxs("div",{className:"mt-4 pt-4 border-t border-[var(--border)] flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>g(!1),className:"px-4 py-2 text-base text-[var(--foreground-muted)] hover:bg-[var(--background-muted)] rounded-md transition-colors",children:"Cancelar"}),e.jsx("button",{type:"button",onClick:()=>{const r=b(h,y);s===void 0&&v(r),o==null||o(r),g(!1)},className:"px-4 py-2 text-base bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md hover:bg-[var(--primary-hover)] transition-colors",children:"Confirmar"})]})]})]})});f.displayName="TimePicker";f.__docgenInfo={description:`TimePicker component following SmartSenior Design System

Time selection with accessible controls`,methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(time: string) => void",signature:{arguments:[{type:{name:"string"},name:"time"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Selecione um horário'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},minuteStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const se={title:"Components/TimePicker",component:f,tags:["autodocs"],parameters:{layout:"centered"}},i={args:{style:{width:"200px"}}},d={args:{defaultValue:"14:30",style:{width:"200px"}}},l={args:{minuteStep:15,placeholder:"Intervalos de 15min",style:{width:"200px"}}},c={args:{error:!0,placeholder:"Selecione um horário",style:{width:"200px"}}},u={args:{disabled:!0,defaultValue:"09:00",style:{width:"200px"}}},m={render:()=>{const[s,x]=p.useState("12:00");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"200px"},children:[e.jsx(f,{value:s,onChange:x}),e.jsxs("p",{children:["Horário selecionado: ",s]})]})}};var N,T,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    style: {
      width: '200px'
    }
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var V,q,D;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: '14:30',
    style: {
      width: '200px'
    }
  }
}`,...(D=(q=d.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var P,_,E;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    minuteStep: 15,
    placeholder: 'Intervalos de 15min',
    style: {
      width: '200px'
    }
  }
}`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var I,O,H;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: 'Selecione um horário',
    style: {
      width: '200px'
    }
  }
}`,...(H=(O=c.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var M,W,A;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: '09:00',
    style: {
      width: '200px'
    }
  }
}`,...(A=(W=u.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var B,C,R;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState('12:00');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '200px'
    }}>
        <TimePicker value={time} onChange={setTime} />
        <p>Horário selecionado: {time}</p>
      </div>;
  }
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const oe=["Default","WithValue","MinuteStep15","Error","Disabled","Controlled"];export{m as Controlled,i as Default,u as Disabled,c as Error,l as MinuteStep15,d as WithValue,oe as __namedExportsOrder,se as default};
