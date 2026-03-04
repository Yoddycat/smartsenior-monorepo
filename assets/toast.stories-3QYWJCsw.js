import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-Dx_1l3Sb.js";import{B as u}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";function T(...r){return r.filter(Boolean).join(" ")}const i=l.forwardRef(({id:r,title:s,description:t,variant:o="default",duration:n=5e3,onClose:a},c)=>{l.useEffect(()=>{if(n>0&&a){const U=setTimeout(()=>{a(r)},n);return()=>clearTimeout(U)}},[r,n,a]);const d={default:"bg-[var(--background)] border-[var(--border)]",success:"bg-[var(--success)] text-[var(--success-foreground)] border-[var(--success)]",warning:"bg-[var(--warning)] text-[var(--warning-foreground)] border-[var(--warning)]",error:"bg-[var(--error)] text-[var(--error-foreground)] border-[var(--error)]",info:"bg-[var(--info)] text-[var(--info-foreground)] border-[var(--info)]"},y={default:null,success:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M20 6L9 17l-5-5"})}),warning:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})}),error:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),info:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]})};return e.jsxs("div",{ref:c,role:"alert",className:T("flex items-start gap-3 w-full max-w-sm p-4","rounded-lg border shadow-lg","animate-in slide-in-from-top-2 fade-in duration-300",d[o]),children:[y[o]&&e.jsx("div",{className:"shrink-0 mt-0.5",children:y[o]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"font-medium text-base",children:s}),t&&e.jsx("p",{className:"mt-1 text-sm opacity-90",children:t})]}),a&&e.jsx("button",{onClick:()=>a(r),className:T("shrink-0 p-1 rounded-md","hover:bg-black/10 dark:hover:bg-white/10","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]","transition-colors"),"aria-label":"Fechar",children:e.jsxs("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})});i.displayName="Toast";const R=({toasts:r,position:s="top-right",onClose:t})=>{const o={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4","top-center":"top-4 left-1/2 -translate-x-1/2","bottom-center":"bottom-4 left-1/2 -translate-x-1/2"};return e.jsx("div",{className:T("fixed z-50 flex flex-col gap-2",o[s]),children:r.map(n=>e.jsx(i,{...n,onClose:t},n.id))})};function L(){const[r,s]=l.useState([]),t=l.useCallback(a=>{const c=Math.random().toString(36).substr(2,9);return s(d=>[...d,{...a,id:c}]),c},[]),o=l.useCallback(a=>{s(c=>c.filter(d=>d.id!==a))},[]),n=l.useCallback(()=>{s([])},[]);return{toasts:r,addToast:t,removeToast:o,clearToasts:n}}i.__docgenInfo={description:`Toast component following SmartSenior Design System

Notification toast with auto-dismiss`,methods:[],displayName:"Toast",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"ToastContainer",props:{toasts:{required:!0,tsType:{name:"Array",elements:[{name:"ToastProps"}],raw:"ToastProps[]"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'",elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'bottom-center'"}]},description:"",defaultValue:{value:"'top-right'",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const X={title:"Components/Toast",component:i,tags:["autodocs"],parameters:{layout:"centered"}},m={args:{id:"1",title:"Notificação",description:"Esta é uma notificação padrão."}},p={args:{id:"2",title:"Sucesso!",description:"Sua ação foi concluída com sucesso.",variant:"success"}},f={args:{id:"3",title:"Atenção",description:"Verifique as informações antes de continuar.",variant:"warning"}},v={args:{id:"4",title:"Erro",description:"Ocorreu um erro ao processar sua solicitação.",variant:"error"}},g={args:{id:"5",title:"Informação",description:"Uma nova atualização está disponível.",variant:"info"}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"350px"},children:[e.jsx(i,{id:"1",title:"Default",description:"Notificação padrão"}),e.jsx(i,{id:"2",title:"Sucesso!",description:"Operação concluída",variant:"success"}),e.jsx(i,{id:"3",title:"Atenção",description:"Verifique os dados",variant:"warning"}),e.jsx(i,{id:"4",title:"Erro",description:"Falha na operação",variant:"error"}),e.jsx(i,{id:"5",title:"Info",description:"Nova mensagem",variant:"info"})]})},h={render:()=>{const r=()=>{const{toasts:s,addToast:t,removeToast:o}=L();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:[e.jsx(u,{size:"sm",onClick:()=>t({title:"Salvo!",description:"Alterações salvas com sucesso.",variant:"success"}),children:"Toast Sucesso"}),e.jsx(u,{size:"sm",variant:"outline",onClick:()=>t({title:"Atenção",description:"Campos obrigatórios pendentes.",variant:"warning"}),children:"Toast Aviso"}),e.jsx(u,{size:"sm",variant:"destructive",onClick:()=>t({title:"Erro",description:"Não foi possível conectar.",variant:"error"}),children:"Toast Erro"}),e.jsx(u,{size:"sm",variant:"secondary",onClick:()=>t({title:"Info",description:"Nova versão disponível.",variant:"info"}),children:"Toast Info"})]}),e.jsx(R,{toasts:s,onClose:o})]})};return e.jsx(r,{})}};var b,j,w;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: '1',
    title: 'Notificação',
    description: 'Esta é uma notificação padrão.'
  }
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,N,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: '2',
    title: 'Sucesso!',
    description: 'Sua ação foi concluída com sucesso.',
    variant: 'success'
  }
}`,...(C=(N=p.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var S,B,E;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: '3',
    title: 'Atenção',
    description: 'Verifique as informações antes de continuar.',
    variant: 'warning'
  }
}`,...(E=(B=f.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,q,A;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: '4',
    title: 'Erro',
    description: 'Ocorreu um erro ao processar sua solicitação.',
    variant: 'error'
  }
}`,...(A=(q=v.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var D,z,V;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: '5',
    title: 'Informação',
    description: 'Uma nova atualização está disponível.',
    variant: 'info'
  }
}`,...(V=(z=g.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var W,_,O;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '350px'
  }}>
      <Toast id="1" title="Default" description="Notificação padrão" />
      <Toast id="2" title="Sucesso!" description="Operação concluída" variant="success" />
      <Toast id="3" title="Atenção" description="Verifique os dados" variant="warning" />
      <Toast id="4" title="Erro" description="Falha na operação" variant="error" />
      <Toast id="5" title="Info" description="Nova mensagem" variant="info" />
    </div>
}`,...(O=(_=x.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var M,F,P;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const ToastDemo = () => {
      const {
        toasts,
        addToast,
        removeToast
      } = useToast();
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
            <Button size="sm" onClick={() => addToast({
            title: 'Salvo!',
            description: 'Alterações salvas com sucesso.',
            variant: 'success'
          })}>
              Toast Sucesso
            </Button>
            <Button size="sm" variant="outline" onClick={() => addToast({
            title: 'Atenção',
            description: 'Campos obrigatórios pendentes.',
            variant: 'warning'
          })}>
              Toast Aviso
            </Button>
            <Button size="sm" variant="destructive" onClick={() => addToast({
            title: 'Erro',
            description: 'Não foi possível conectar.',
            variant: 'error'
          })}>
              Toast Erro
            </Button>
            <Button size="sm" variant="secondary" onClick={() => addToast({
            title: 'Info',
            description: 'Nova versão disponível.',
            variant: 'info'
          })}>
              Toast Info
            </Button>
          </div>
          <ToastContainer toasts={toasts} onClose={removeToast} />
        </div>;
    };
    return <ToastDemo />;
  }
}`,...(P=(F=h.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const Y=["Default","Success","Warning","Error","Info","AllVariants","Interactive"];export{x as AllVariants,m as Default,v as Error,g as Info,h as Interactive,p as Success,f as Warning,Y as __namedExportsOrder,X as default};
