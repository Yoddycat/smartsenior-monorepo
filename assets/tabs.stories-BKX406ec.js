import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function v(...r){return r.filter(Boolean).join(" ")}const R=o.createContext(null);function S(){const r=o.useContext(R);if(!r)throw new Error("Tabs components must be used within a Tabs provider");return r}const d=o.forwardRef(({defaultValue:r,value:a,onValueChange:t,children:n,className:l},c)=>{const[b,u]=o.useState(r||""),D=a!==void 0?a:b,I=o.useCallback(x=>{a===void 0&&u(x),t==null||t(x)},[a,t]);return e.jsx(R.Provider,{value:{activeTab:D,setActiveTab:I},children:e.jsx("div",{ref:c,className:v("w-full",l),children:n})})});d.displayName="Tabs";const p=o.forwardRef(({className:r,children:a,...t},n)=>e.jsx("div",{ref:n,role:"tablist",className:v("inline-flex items-center gap-1 p-1","bg-[var(--background-muted)] rounded-lg",r),...t,children:a}));p.displayName="TabsList";const s=o.forwardRef(({className:r,value:a,children:t,...n},l)=>{const{activeTab:c,setActiveTab:b}=S(),u=c===a;return e.jsx("button",{ref:l,role:"tab",type:"button","aria-selected":u,tabIndex:u?0:-1,onClick:()=>b(a),className:v("inline-flex items-center justify-center px-4 py-2.5","text-base font-medium rounded-md","transition-all duration-200","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2",u?"bg-[var(--background)] text-[var(--foreground)] shadow-sm":"text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background)]/50",r),...n,children:t})});s.displayName="TabsTrigger";const i=o.forwardRef(({className:r,value:a,children:t,...n},l)=>{const{activeTab:c}=S();return c===a?e.jsx("div",{ref:l,role:"tabpanel",tabIndex:0,className:v("mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] rounded-md","animate-in fade-in-50 duration-200",r),...n,children:t}):null});i.displayName="TabsContent";d.__docgenInfo={description:`Tabs component following SmartSenior Design System

Accessible tabs with keyboard navigation`,methods:[],displayName:"Tabs",props:{defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"TabsList"};s.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger",props:{value:{required:!0,tsType:{name:"string"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"TabsContent",props:{value:{required:!0,tsType:{name:"string"},description:""}}};const B={title:"Components/Tabs",component:d,tags:["autodocs"],parameters:{layout:"centered"}},m={render:()=>e.jsxs(d,{defaultValue:"tab1",style:{width:"400px"},children:[e.jsxs(p,{children:[e.jsx(s,{value:"tab1",children:"Aba 1"}),e.jsx(s,{value:"tab2",children:"Aba 2"}),e.jsx(s,{value:"tab3",children:"Aba 3"})]}),e.jsx(i,{value:"tab1",children:e.jsx("p",{children:"Conteúdo da primeira aba."})}),e.jsx(i,{value:"tab2",children:e.jsx("p",{children:"Conteúdo da segunda aba."})}),e.jsx(i,{value:"tab3",children:e.jsx("p",{children:"Conteúdo da terceira aba."})})]})},g={render:()=>e.jsxs(d,{defaultValue:"profile",style:{width:"500px"},children:[e.jsxs(p,{children:[e.jsx(s,{value:"profile",children:"Perfil"}),e.jsx(s,{value:"security",children:"Segurança"}),e.jsx(s,{value:"notifications",children:"Notificações"})]}),e.jsx(i,{value:"profile",children:e.jsxs("div",{style:{padding:"1rem",border:"1px solid var(--border)",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontWeight:600},children:"Informações do Perfil"}),e.jsx("p",{style:{color:"var(--foreground-muted)"},children:"Atualize suas informações pessoais e foto de perfil."})]})}),e.jsx(i,{value:"security",children:e.jsxs("div",{style:{padding:"1rem",border:"1px solid var(--border)",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontWeight:600},children:"Configurações de Segurança"}),e.jsx("p",{style:{color:"var(--foreground-muted)"},children:"Gerencie sua senha e autenticação de dois fatores."})]})}),e.jsx(i,{value:"notifications",children:e.jsxs("div",{style:{padding:"1rem",border:"1px solid var(--border)",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginBottom:"1rem",fontWeight:600},children:"Preferências de Notificação"}),e.jsx("p",{style:{color:"var(--foreground-muted)"},children:"Escolha como deseja receber notificações."})]})})]})},f={render:()=>e.jsxs(d,{defaultValue:"description",style:{width:"500px"},children:[e.jsxs(p,{children:[e.jsx(s,{value:"description",children:"Descrição"}),e.jsx(s,{value:"specs",children:"Especificações"}),e.jsx(s,{value:"reviews",children:"Avaliações"})]}),e.jsx(i,{value:"description",children:e.jsx("p",{children:"Este produto é feito com materiais de alta qualidade e oferece durabilidade excepcional. Ideal para uso diário com design moderno e funcional."})}),e.jsx(i,{value:"specs",children:e.jsxs("ul",{style:{paddingLeft:"1.5rem",lineHeight:1.8},children:[e.jsx("li",{children:"Material: Aço inoxidável"}),e.jsx("li",{children:"Dimensões: 20 x 15 x 10 cm"}),e.jsx("li",{children:"Peso: 500g"}),e.jsx("li",{children:"Garantia: 2 anos"})]})}),e.jsx(i,{value:"reviews",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Maria S."})," - ⭐⭐⭐⭐⭐",e.jsx("p",{style:{margin:"0.5rem 0 0",color:"var(--foreground-muted)"},children:"Produto excelente! Chegou antes do prazo."})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"João P."})," - ⭐⭐⭐⭐",e.jsx("p",{style:{margin:"0.5rem 0 0",color:"var(--foreground-muted)"},children:"Muito bom, recomendo."})]})]})})]})};var T,h,y;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" style={{
    width: '400px'
  }}>
      <TabsList>
        <TabsTrigger value="tab1">Aba 1</TabsTrigger>
        <TabsTrigger value="tab2">Aba 2</TabsTrigger>
        <TabsTrigger value="tab3">Aba 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Conteúdo da primeira aba.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Conteúdo da segunda aba.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Conteúdo da terceira aba.</p>
      </TabsContent>
    </Tabs>
}`,...(y=(h=m.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,C,w;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="profile" style={{
    width: '500px'
  }}>
      <TabsList>
        <TabsTrigger value="profile">Perfil</TabsTrigger>
        <TabsTrigger value="security">Segurança</TabsTrigger>
        <TabsTrigger value="notifications">Notificações</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div style={{
        padding: '1rem',
        border: '1px solid var(--border)',
        borderRadius: '8px'
      }}>
          <h3 style={{
          marginBottom: '1rem',
          fontWeight: 600
        }}>Informações do Perfil</h3>
          <p style={{
          color: 'var(--foreground-muted)'
        }}>
            Atualize suas informações pessoais e foto de perfil.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div style={{
        padding: '1rem',
        border: '1px solid var(--border)',
        borderRadius: '8px'
      }}>
          <h3 style={{
          marginBottom: '1rem',
          fontWeight: 600
        }}>Configurações de Segurança</h3>
          <p style={{
          color: 'var(--foreground-muted)'
        }}>
            Gerencie sua senha e autenticação de dois fatores.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div style={{
        padding: '1rem',
        border: '1px solid var(--border)',
        borderRadius: '8px'
      }}>
          <h3 style={{
          marginBottom: '1rem',
          fontWeight: 600
        }}>Preferências de Notificação</h3>
          <p style={{
          color: 'var(--foreground-muted)'
        }}>
            Escolha como deseja receber notificações.
          </p>
        </div>
      </TabsContent>
    </Tabs>
}`,...(w=(C=g.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var A,N,P;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="description" style={{
    width: '500px'
  }}>
      <TabsList>
        <TabsTrigger value="description">Descrição</TabsTrigger>
        <TabsTrigger value="specs">Especificações</TabsTrigger>
        <TabsTrigger value="reviews">Avaliações</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <p>
          Este produto é feito com materiais de alta qualidade e oferece durabilidade excepcional.
          Ideal para uso diário com design moderno e funcional.
        </p>
      </TabsContent>
      <TabsContent value="specs">
        <ul style={{
        paddingLeft: '1.5rem',
        lineHeight: 1.8
      }}>
          <li>Material: Aço inoxidável</li>
          <li>Dimensões: 20 x 15 x 10 cm</li>
          <li>Peso: 500g</li>
          <li>Garantia: 2 anos</li>
        </ul>
      </TabsContent>
      <TabsContent value="reviews">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
          <div>
            <strong>Maria S.</strong> - ⭐⭐⭐⭐⭐
            <p style={{
            margin: '0.5rem 0 0',
            color: 'var(--foreground-muted)'
          }}>
              Produto excelente! Chegou antes do prazo.
            </p>
          </div>
          <div>
            <strong>João P.</strong> - ⭐⭐⭐⭐
            <p style={{
            margin: '0.5rem 0 0',
            color: 'var(--foreground-muted)'
          }}>
              Muito bom, recomendo.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
}`,...(P=(N=f.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const k=["Default","AccountSettings","ProductDetails"];export{g as AccountSettings,m as Default,f as ProductDetails,k as __namedExportsOrder,B as default};
