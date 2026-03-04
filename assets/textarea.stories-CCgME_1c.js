import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as C}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function R(...l){return l.filter(Boolean).join(" ")}const i=C.forwardRef(({className:l,error:D,resize:V="vertical",disabled:M,...N},k)=>{const q={none:"resize-none",vertical:"resize-y",horizontal:"resize-x",both:"resize"};return e.jsx("textarea",{ref:k,disabled:M,className:R("w-full min-h-[120px] px-4 py-3","rounded-md border border-[var(--border)]","bg-[var(--background)] text-[var(--foreground)]","text-base font-normal leading-relaxed","placeholder:text-[var(--foreground-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] focus:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--background-muted)]","transition-all duration-200",D&&"border-[var(--error)] focus:ring-[var(--error)]",q[V],l),...N})});i.displayName="Textarea";i.__docgenInfo={description:`Textarea component following SmartSenior Design System

Multi-line text input with accessible styling`,methods:[],displayName:"Textarea",props:{error:{required:!1,tsType:{name:"boolean"},description:""},resize:{required:!1,tsType:{name:"union",raw:"'none' | 'vertical' | 'horizontal' | 'both'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'both'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};const L={title:"Components/Textarea",component:i,tags:["autodocs"],parameters:{layout:"centered"}},r={args:{placeholder:"Digite sua mensagem...",style:{width:"350px"}}},a={args:{defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",style:{width:"350px"}}},o={args:{error:!0,placeholder:"Campo obrigatório",style:{width:"350px"}}},t={args:{disabled:!0,defaultValue:"Texto desabilitado",style:{width:"350px"}}},s={args:{resize:"none",placeholder:"Sem redimensionamento",style:{width:"350px"}}},n={render:()=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Mensagem"}),e.jsx(i,{placeholder:"Escreva sua mensagem...",rows:5}),e.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem",color:"var(--foreground-muted)"},children:"Máximo de 500 caracteres"})]})};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Digite sua mensagem...',
    style: {
      width: '350px'
    }
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    style: {
      width: '350px'
    }
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,f,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: 'Campo obrigatório',
    style: {
      width: '350px'
    }
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,y,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Texto desabilitado',
    style: {
      width: '350px'
    }
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,z,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    resize: 'none',
    placeholder: 'Sem redimensionamento',
    style: {
      width: '350px'
    }
  }
}`,...(S=(z=s.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var T,E,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <label style={{
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: 500
    }}>
        Mensagem
      </label>
      <Textarea placeholder="Escreva sua mensagem..." rows={5} />
      <p style={{
      marginTop: '0.5rem',
      fontSize: '0.875rem',
      color: 'var(--foreground-muted)'
    }}>
        Máximo de 500 caracteres
      </p>
    </div>
}`,...(j=(E=n.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};const I=["Default","WithValue","Error","Disabled","NoResize","FormExample"];export{r as Default,t as Disabled,o as Error,n as FormExample,s as NoResize,a as WithValue,I as __namedExportsOrder,L as default};
