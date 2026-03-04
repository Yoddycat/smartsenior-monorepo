import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as t}from"./index-Dx_1l3Sb.js";import{B as C}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";function i(...r){return r.filter(Boolean).join(" ")}const d=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:i("rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] shadow-md",r),...a}));d.displayName="Card";const s=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:i("flex flex-col space-y-1.5 p-6",r),...a}));s.displayName="CardHeader";const n=t.forwardRef(({className:r,children:a,...o},B)=>e.jsx("h3",{ref:B,className:i("text-2xl font-semibold leading-tight tracking-tight font-[var(--font-heading)]",r),...o,children:a}));n.displayName="CardTitle";const l=t.forwardRef(({className:r,...a},o)=>e.jsx("p",{ref:o,className:i("text-base text-[var(--foreground-muted)]",r),...a}));l.displayName="CardDescription";const c=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:i("p-6 pt-0",r),...a}));c.displayName="CardContent";const u=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:i("flex items-center p-6 pt-0",r),...a}));u.displayName="CardFooter";d.__docgenInfo={description:"Card component following SmartSenior Design System",methods:[],displayName:"Card"};s.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};u.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};n.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};l.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};c.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const k={title:"Components/Card",component:d,tags:["autodocs"],parameters:{layout:"centered"}},p={render:()=>e.jsxs(d,{style:{width:"350px"},children:[e.jsxs(s,{children:[e.jsx(n,{children:"Título do Card"}),e.jsx(l,{children:"Descrição do card com informações adicionais."})]}),e.jsx(c,{children:e.jsx("p",{children:"Conteúdo principal do card. Aqui você pode adicionar qualquer informação relevante."})})]})},m={render:()=>e.jsxs(d,{style:{width:"350px"},children:[e.jsxs(s,{children:[e.jsx(n,{children:"Plano Premium"}),e.jsx(l,{children:"Acesso completo a todos os recursos."})]}),e.jsxs(c,{children:[e.jsxs("div",{style:{fontSize:"2rem",fontWeight:"bold"},children:["R$ 99",e.jsx("span",{style:{fontSize:"1rem",fontWeight:"normal"},children:"/mês"})]}),e.jsxs("ul",{style:{marginTop:"1rem",paddingLeft:"1.5rem"},children:[e.jsx("li",{children:"Suporte 24/7"}),e.jsx("li",{children:"Acesso ilimitado"}),e.jsx("li",{children:"Relatórios avançados"})]})]}),e.jsx(u,{children:e.jsx(C,{variant:"accent",style:{width:"100%"},children:"Assinar Agora"})})]})},h={render:()=>e.jsx(d,{style:{width:"300px",padding:"1.5rem"},children:e.jsx("p",{style:{margin:0},children:"Um card simples sem header ou footer, apenas com conteúdo direto."})})},x={render:()=>e.jsxs(d,{style:{width:"400px"},children:[e.jsxs(s,{children:[e.jsx(n,{children:"Entrar na Conta"}),e.jsx(l,{children:"Digite suas credenciais para acessar."})]}),e.jsx(c,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Email"}),e.jsx("input",{type:"email",placeholder:"seu@email.com",style:{width:"100%",height:"48px",padding:"0 16px",border:"1px solid var(--border)",borderRadius:"8px",fontSize:"16px"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Senha"}),e.jsx("input",{type:"password",placeholder:"Sua senha",style:{width:"100%",height:"48px",padding:"0 16px",border:"1px solid var(--border)",borderRadius:"8px",fontSize:"16px"}})]})]})}),e.jsxs(u,{style:{flexDirection:"column",gap:"0.75rem"},children:[e.jsx(C,{variant:"primary",style:{width:"100%"},children:"Entrar"}),e.jsx(C,{variant:"link",children:"Esqueceu a senha?"})]})]})};var f,g,y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '350px'
  }}>
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>
          Descrição do card com informações adicionais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Conteúdo principal do card. Aqui você pode adicionar qualquer informação relevante.</p>
      </CardContent>
    </Card>
}`,...(y=(g=p.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var j,v,b;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '350px'
  }}>
      <CardHeader>
        <CardTitle>Plano Premium</CardTitle>
        <CardDescription>
          Acesso completo a todos os recursos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>
          R$ 99<span style={{
          fontSize: '1rem',
          fontWeight: 'normal'
        }}>/mês</span>
        </div>
        <ul style={{
        marginTop: '1rem',
        paddingLeft: '1.5rem'
      }}>
          <li>Suporte 24/7</li>
          <li>Acesso ilimitado</li>
          <li>Relatórios avançados</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="accent" style={{
        width: '100%'
      }}>
          Assinar Agora
        </Button>
      </CardFooter>
    </Card>
}`,...(b=(v=m.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,S,D;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '300px',
    padding: '1.5rem'
  }}>
      <p style={{
      margin: 0
    }}>
        Um card simples sem header ou footer, apenas com conteúdo direto.
      </p>
    </Card>
}`,...(D=(S=h.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var N,R,_;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '400px'
  }}>
      <CardHeader>
        <CardTitle>Entrar na Conta</CardTitle>
        <CardDescription>
          Digite suas credenciais para acessar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
          <div>
            <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 500
          }}>
              Email
            </label>
            <input type="email" placeholder="seu@email.com" style={{
            width: '100%',
            height: '48px',
            padding: '0 16px',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '16px'
          }} />
          </div>
          <div>
            <label style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 500
          }}>
              Senha
            </label>
            <input type="password" placeholder="Sua senha" style={{
            width: '100%',
            height: '48px',
            padding: '0 16px',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            fontSize: '16px'
          }} />
          </div>
        </div>
      </CardContent>
      <CardFooter style={{
      flexDirection: 'column',
      gap: '0.75rem'
    }}>
        <Button variant="primary" style={{
        width: '100%'
      }}>
          Entrar
        </Button>
        <Button variant="link">
          Esqueceu a senha?
        </Button>
      </CardFooter>
    </Card>
}`,...(_=(R=x.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const q=["Default","WithFooter","Simple","LoginForm"];export{p as Default,x as LoginForm,h as Simple,m as WithFooter,q as __namedExportsOrder,k as default};
