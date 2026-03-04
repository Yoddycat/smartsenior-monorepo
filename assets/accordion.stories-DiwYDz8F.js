import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function A(...r){return r.filter(Boolean).join(" ")}const V=s.createContext(null);function _(){const r=s.useContext(V);if(!r)throw new Error("Accordion components must be used within an Accordion provider");return r}const p=s.forwardRef(({type:r="single",defaultValue:a,value:o,onValueChange:c,children:m,className:d},u)=>{const l=()=>a?Array.isArray(a)?a:[a]:[],[C,I]=s.useState(l),g=o!==void 0?Array.isArray(o)?o:[o]:C,B=s.useCallback(f=>{let x;r==="single"?x=g.includes(f)?[]:[f]:x=g.includes(f)?g.filter(k=>k!==f):[...g,f],o===void 0&&I(x),c&&c(r==="single"?x[0]||"":x)},[g,r,o,c]);return e.jsx(V.Provider,{value:{openItems:g,toggleItem:B,type:r},children:e.jsx("div",{ref:u,className:A("w-full divide-y divide-[var(--border)]",d),children:m})})});p.displayName="Accordion";const n=s.forwardRef(({className:r,value:a,children:o,...c},m)=>e.jsx("div",{ref:m,className:A("",r),"data-value":a,...c,children:s.Children.map(o,d=>s.isValidElement(d)?s.cloneElement(d,{itemValue:a}):d)}));n.displayName="AccordionItem";const i=s.forwardRef(({className:r,children:a,itemValue:o,...c},m)=>{const{openItems:d,toggleItem:u}=_(),l=o?d.includes(o):!1;return e.jsxs("button",{ref:m,type:"button","aria-expanded":l,onClick:()=>o&&u(o),className:A("flex w-full items-center justify-between py-4 px-1","text-left text-base font-medium","text-[var(--foreground)]","hover:text-[var(--primary)]","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] rounded-md","transition-colors",r),...c,children:[a,e.jsx("svg",{className:A("w-5 h-5 shrink-0 text-[var(--foreground-muted)] transition-transform duration-200",l&&"rotate-180"),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"6 9 12 15 18 9"})})]})});i.displayName="AccordionTrigger";const t=s.forwardRef(({className:r,children:a,itemValue:o,...c},m)=>{const{openItems:d}=_(),u=o?d.includes(o):!1,l=s.useRef(null),[C,I]=s.useState(0);return s.useEffect(()=>{l.current&&I(u?l.current.scrollHeight:0)},[u]),e.jsx("div",{ref:m,role:"region",className:A("overflow-hidden transition-all duration-200",r),style:{height:C},...c,children:e.jsx("div",{ref:l,className:"pb-4 px-1 text-base text-[var(--foreground-muted)]",children:a})})});t.displayName="AccordionContent";p.__docgenInfo={description:`Accordion component following SmartSenior Design System

Accessible accordion with smooth animations`,methods:[],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:"",defaultValue:{value:"'single'",computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger",props:{itemValue:{required:!1,tsType:{name:"string"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"AccordionContent",props:{itemValue:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Components/Accordion",component:p,tags:["autodocs"],parameters:{layout:"centered"}},v={render:()=>e.jsxs(p,{type:"single",defaultValue:"item-1",style:{width:"400px"},children:[e.jsxs(n,{value:"item-1",children:[e.jsx(i,{children:"Primeiro item"}),e.jsx(t,{children:"Este é o conteúdo do primeiro item do accordion. Pode conter qualquer tipo de informação."})]}),e.jsxs(n,{value:"item-2",children:[e.jsx(i,{children:"Segundo item"}),e.jsx(t,{children:"Este é o conteúdo do segundo item do accordion."})]}),e.jsxs(n,{value:"item-3",children:[e.jsx(i,{children:"Terceiro item"}),e.jsx(t,{children:"Este é o conteúdo do terceiro item do accordion."})]})]})},y={render:()=>e.jsxs(p,{type:"multiple",defaultValue:["item-1","item-3"],style:{width:"400px"},children:[e.jsxs(n,{value:"item-1",children:[e.jsx(i,{children:"Seção 1"}),e.jsx(t,{children:"Múltiplos itens podem ficar abertos ao mesmo tempo."})]}),e.jsxs(n,{value:"item-2",children:[e.jsx(i,{children:"Seção 2"}),e.jsx(t,{children:"Clique em qualquer cabeçalho para expandir ou recolher."})]}),e.jsxs(n,{value:"item-3",children:[e.jsx(i,{children:"Seção 3"}),e.jsx(t,{children:"Esta seção também começa aberta por padrão."})]})]})},h={render:()=>e.jsxs("div",{style:{width:"500px"},children:[e.jsx("h2",{style:{marginBottom:"1.5rem",fontWeight:600,fontSize:"1.5rem"},children:"Perguntas Frequentes"}),e.jsxs(p,{type:"single",children:[e.jsxs(n,{value:"q1",children:[e.jsx(i,{children:"Como faço para criar uma conta?"}),e.jsx(t,{children:'Clique no botão "Criar Conta" no canto superior direito da página. Preencha seus dados e siga as instruções para verificar seu email.'})]}),e.jsxs(n,{value:"q2",children:[e.jsx(i,{children:"Quais formas de pagamento são aceitas?"}),e.jsx(t,{children:"Aceitamos cartões de crédito (Visa, Mastercard, Elo), PIX, boleto bancário e transferência bancária."})]}),e.jsxs(n,{value:"q3",children:[e.jsx(i,{children:"Qual é o prazo de entrega?"}),e.jsx(t,{children:"O prazo de entrega varia de acordo com sua região. Após a confirmação do pagamento, o prazo médio é de 5 a 10 dias úteis."})]}),e.jsxs(n,{value:"q4",children:[e.jsx(i,{children:"Como solicitar reembolso?"}),e.jsx(t,{children:'Para solicitar reembolso, acesse "Meus Pedidos", selecione o pedido desejado e clique em "Solicitar Reembolso". O prazo para reembolso é de até 7 dias úteis.'})]})]})]})},j={render:()=>e.jsx("div",{style:{width:"450px"},children:e.jsxs(p,{type:"multiple",defaultValue:["general"],children:[e.jsxs(n,{value:"general",children:[e.jsx(i,{children:"Configurações Gerais"}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Idioma"}),e.jsx("span",{style:{color:"var(--foreground-muted)"},children:"Português (BR)"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Fuso horário"}),e.jsx("span",{style:{color:"var(--foreground-muted)"},children:"Brasília (GMT-3)"})]})]})})]}),e.jsxs(n,{value:"privacy",children:[e.jsx(i,{children:"Privacidade"}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Perfil público"}),e.jsx("span",{style:{color:"var(--foreground-muted)"},children:"Ativado"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Mostrar online"}),e.jsx("span",{style:{color:"var(--foreground-muted)"},children:"Desativado"})]})]})})]}),e.jsxs(n,{value:"notifications",children:[e.jsx(i,{children:"Notificações"}),e.jsx(t,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Email"}),e.jsx("span",{style:{color:"var(--foreground-muted)"},children:"Ativado"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Push"}),e.jsx("span",{style:{color:"var(--foreground-muted)"},children:"Ativado"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"SMS"}),e.jsx("span",{style:{color:"var(--foreground-muted)"},children:"Desativado"})]})]})})]})]})})};var b,w,T;v.parameters={...v.parameters,docs:{...(b=v.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Accordion type="single" defaultValue="item-1" style={{
    width: '400px'
  }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Primeiro item</AccordionTrigger>
        <AccordionContent>
          Este é o conteúdo do primeiro item do accordion. Pode conter qualquer tipo de informação.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Segundo item</AccordionTrigger>
        <AccordionContent>
          Este é o conteúdo do segundo item do accordion.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Terceiro item</AccordionTrigger>
        <AccordionContent>
          Este é o conteúdo do terceiro item do accordion.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(T=(w=v.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var q,S,P;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" defaultValue={['item-1', 'item-3']} style={{
    width: '400px'
  }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Seção 1</AccordionTrigger>
        <AccordionContent>
          Múltiplos itens podem ficar abertos ao mesmo tempo.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Seção 2</AccordionTrigger>
        <AccordionContent>
          Clique em qualquer cabeçalho para expandir ou recolher.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Seção 3</AccordionTrigger>
        <AccordionContent>
          Esta seção também começa aberta por padrão.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(P=(S=y.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var E,N,R;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>
      <h2 style={{
      marginBottom: '1.5rem',
      fontWeight: 600,
      fontSize: '1.5rem'
    }}>
        Perguntas Frequentes
      </h2>
      <Accordion type="single">
        <AccordionItem value="q1">
          <AccordionTrigger>Como faço para criar uma conta?</AccordionTrigger>
          <AccordionContent>
            Clique no botão "Criar Conta" no canto superior direito da página.
            Preencha seus dados e siga as instruções para verificar seu email.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>Quais formas de pagamento são aceitas?</AccordionTrigger>
          <AccordionContent>
            Aceitamos cartões de crédito (Visa, Mastercard, Elo), PIX,
            boleto bancário e transferência bancária.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>Qual é o prazo de entrega?</AccordionTrigger>
          <AccordionContent>
            O prazo de entrega varia de acordo com sua região. Após a confirmação
            do pagamento, o prazo médio é de 5 a 10 dias úteis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger>Como solicitar reembolso?</AccordionTrigger>
          <AccordionContent>
            Para solicitar reembolso, acesse "Meus Pedidos", selecione o pedido
            desejado e clique em "Solicitar Reembolso". O prazo para reembolso
            é de até 7 dias úteis.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(R=(N=h.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var M,D,z;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '450px'
  }}>
      <Accordion type="multiple" defaultValue={['general']}>
        <AccordionItem value="general">
          <AccordionTrigger>Configurações Gerais</AccordionTrigger>
          <AccordionContent>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
              <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
                <span>Idioma</span>
                <span style={{
                color: 'var(--foreground-muted)'
              }}>Português (BR)</span>
              </div>
              <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
                <span>Fuso horário</span>
                <span style={{
                color: 'var(--foreground-muted)'
              }}>Brasília (GMT-3)</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="privacy">
          <AccordionTrigger>Privacidade</AccordionTrigger>
          <AccordionContent>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
              <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
                <span>Perfil público</span>
                <span style={{
                color: 'var(--foreground-muted)'
              }}>Ativado</span>
              </div>
              <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
                <span>Mostrar online</span>
                <span style={{
                color: 'var(--foreground-muted)'
              }}>Desativado</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="notifications">
          <AccordionTrigger>Notificações</AccordionTrigger>
          <AccordionContent>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
              <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
                <span>Email</span>
                <span style={{
                color: 'var(--foreground-muted)'
              }}>Ativado</span>
              </div>
              <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
                <span>Push</span>
                <span style={{
                color: 'var(--foreground-muted)'
              }}>Ativado</span>
              </div>
              <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
                <span>SMS</span>
                <span style={{
                color: 'var(--foreground-muted)'
              }}>Desativado</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(z=(D=j.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const H=["Default","Multiple","FAQ","Settings"];export{v as Default,h as FAQ,y as Multiple,j as Settings,H as __namedExportsOrder,W as default};
