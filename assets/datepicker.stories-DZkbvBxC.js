import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function d(...r){return r.filter(Boolean).join(" ")}const ie=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],le=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],f=i.forwardRef(({value:r,defaultValue:l,onChange:h,placeholder:Q="Selecione uma data",disabled:v,error:K,minDate:w,maxDate:j,className:G},U)=>{const[S,N]=i.useState(!1),[X,Z]=i.useState(l),[n,k]=i.useState(r||l||new Date),s=r!==void 0?r:X,$=t=>{const a=t.getFullYear(),b=t.getMonth(),ne=new Date(a,b,1),se=new Date(a,b+1,0).getDate(),oe=ne.getDay(),y=[];for(let o=0;o<oe;o++)y.push(null);for(let o=1;o<=se;o++)y.push(new Date(a,b,o));return y},D=t=>!!(w&&t<w||j&&t>j),M=(t,a)=>t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear(),T=t=>{D(t)||(r===void 0&&Z(t),h==null||h(t),N(!1))},ee=()=>{k(new Date(n.getFullYear(),n.getMonth()-1,1))},te=()=>{k(new Date(n.getFullYear(),n.getMonth()+1,1))},re=t=>t.toLocaleDateString("pt-BR"),ae=$(n);return e.jsxs("div",{ref:U,className:d("relative w-full",G),children:[e.jsxs("button",{type:"button",onClick:()=>!v&&N(!S),disabled:v,className:d("w-full h-12 px-4 flex items-center justify-between","rounded-md border border-[var(--border)]","bg-[var(--background)] text-[var(--foreground)]","text-base text-left","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--background-muted)]","transition-all duration-200",K&&"border-[var(--error)] focus:ring-[var(--error)]"),children:[e.jsx("span",{className:s?"text-[var(--foreground)]":"text-[var(--foreground-muted)]",children:s?re(s):Q}),e.jsxs("svg",{className:"w-5 h-5 text-[var(--foreground-muted)]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})]}),S&&e.jsxs("div",{className:d("absolute z-50 mt-2 p-4 w-full min-w-[300px]","bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg"),children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("button",{type:"button",onClick:ee,className:"p-2 rounded-md hover:bg-[var(--background-muted)] transition-colors",children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"15 18 9 12 15 6"})})}),e.jsxs("span",{className:"text-base font-semibold",children:[ie[n.getMonth()]," ",n.getFullYear()]}),e.jsx("button",{type:"button",onClick:te,className:"p-2 rounded-md hover:bg-[var(--background-muted)] transition-colors",children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"9 18 15 12 9 6"})})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:le.map(t=>e.jsx("div",{className:"text-center text-sm font-medium text-[var(--foreground-muted)] py-2",children:t},t))}),e.jsx("div",{className:"grid grid-cols-7 gap-1",children:ae.map((t,a)=>e.jsx("div",{className:"aspect-square",children:t?e.jsx("button",{type:"button",onClick:()=>T(t),disabled:D(t),className:d("w-full h-full flex items-center justify-center","text-base rounded-md transition-colors","hover:bg-[var(--background-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",s&&M(t,s)?"bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]":"text-[var(--foreground)]",M(t,new Date)&&!s&&"font-bold",D(t)&&"opacity-30 cursor-not-allowed"),children:t.getDate()}):null},a))}),e.jsx("div",{className:"mt-4 pt-4 border-t border-[var(--border)]",children:e.jsx("button",{type:"button",onClick:()=>T(new Date),className:"w-full py-2 text-base text-[var(--primary)] hover:bg-[var(--background-muted)] rounded-md transition-colors",children:"Hoje"})})]})]})});f.displayName="DatePicker";f.__docgenInfo={description:`DatePicker component following SmartSenior Design System

Calendar date picker with accessible navigation`,methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"Date"},description:""},defaultValue:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Selecione uma data'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ge={title:"Components/DatePicker",component:f,tags:["autodocs"],parameters:{layout:"centered"}},c={args:{style:{width:"280px"}}},u={args:{defaultValue:new Date,style:{width:"280px"}}},m={args:{minDate:new Date,maxDate:new Date(Date.now()+720*60*60*1e3),placeholder:"Próximos 30 dias",style:{width:"280px"}}},p={args:{error:!0,placeholder:"Selecione uma data",style:{width:"280px"}}},g={args:{disabled:!0,defaultValue:new Date,style:{width:"280px"}}},x={render:()=>{const[r,l]=i.useState(void 0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"280px"},children:[e.jsx(f,{value:r,onChange:l}),e.jsxs("p",{children:["Data selecionada: ",(r==null?void 0:r.toLocaleDateString("pt-BR"))||"Nenhuma"]})]})}};var C,q,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    style: {
      width: '280px'
    }
  }
}`,...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var P,W,B;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date(),
    style: {
      width: '280px'
    }
  }
}`,...(B=(W=u.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,F,Y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    minDate: new Date(),
    maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    // 30 dias
    placeholder: 'Próximos 30 dias',
    style: {
      width: '280px'
    }
  }
}`,...(Y=(F=m.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};var I,O,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: 'Selecione uma data',
    style: {
      width: '280px'
    }
  }
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var _,A,J;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: new Date(),
    style: {
      width: '280px'
    }
  }
}`,...(J=(A=g.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var L,z,H;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '280px'
    }}>
        <DatePicker value={date} onChange={setDate} />
        <p>Data selecionada: {date?.toLocaleDateString('pt-BR') || 'Nenhuma'}</p>
      </div>;
  }
}`,...(H=(z=x.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const xe=["Default","WithValue","WithMinMax","Error","Disabled","Controlled"];export{x as Controlled,c as Default,g as Disabled,p as Error,m as WithMinMax,u as WithValue,xe as __namedExportsOrder,ge as default};
