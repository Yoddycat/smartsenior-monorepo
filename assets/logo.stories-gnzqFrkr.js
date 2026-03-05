import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function M(...o){return o.filter(Boolean).join(" ")}const Oe={xs:{icon:24,full:100,wordmark:80},sm:{icon:32,full:120,wordmark:96},md:{icon:40,full:160,wordmark:128},lg:{icon:48,full:200,wordmark:160},xl:{icon:64,full:240,wordmark:192},"2xl":{icon:80,full:300,wordmark:240}},r=S.forwardRef(({variant:o="full",size:n="md",color:Ve="default",animated:l=!1,className:L,...C},I)=>{const t=Oe[n],a={default:{primary:"var(--primary)",accent:"var(--accent)",text:"var(--foreground)"},white:{primary:"#ffffff",accent:"#ffffff",text:"#ffffff"},primary:{primary:"var(--primary)",accent:"var(--primary)",text:"var(--primary)"},mono:{primary:"currentColor",accent:"currentColor",text:"currentColor"}}[Ve],Te=()=>e.jsxs("svg",{ref:I,viewBox:"0 0 48 48",width:t.icon,height:t.icon,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:M(l&&"transition-transform hover:scale-105",L),"aria-label":"SmartSenior",role:"img",...C,children:[e.jsx("path",{d:"M24 42C24 42 6 30 6 18C6 12 10.5 7 16.5 7C20.5 7 23 9.5 24 11C25 9.5 27.5 7 31.5 7C37.5 7 42 12 42 18C42 30 24 42 24 42Z",fill:a.primary,className:l?"transition-colors duration-300":""}),e.jsx("path",{d:"M18 24C18 24 20 22 24 22C28 22 30 24 30 24",stroke:a.accent,strokeWidth:"2.5",strokeLinecap:"round",fill:"none",opacity:"0.9"}),e.jsx("path",{d:"M15 28C15 28 18 26 24 26C30 26 33 28 33 28",stroke:a.accent,strokeWidth:"2",strokeLinecap:"round",fill:"none",opacity:"0.7"}),e.jsx("path",{d:"M24 14V20M21 17H27",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]}),_e=()=>e.jsx("svg",{ref:I,viewBox:"0 0 200 40",width:t.wordmark,height:t.wordmark*.2,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:M(l&&"transition-transform hover:scale-105",L),"aria-label":"SmartSenior",role:"img",...C,children:e.jsxs("text",{x:"0",y:"30",fontFamily:"var(--font-family-inter, 'Inter', sans-serif)",fontSize:"28",fontWeight:"700",fill:a.text,children:[e.jsx("tspan",{fill:a.primary,children:"Smart"}),e.jsx("tspan",{fill:a.accent,children:"Senior"})]})}),Be=()=>e.jsxs("svg",{ref:I,viewBox:"0 0 260 48",width:t.full,height:t.full*.185,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:M(l&&"transition-transform hover:scale-105",L),"aria-label":"SmartSenior",role:"img",...C,children:[e.jsxs("g",{transform:"translate(0, 0)",children:[e.jsx("path",{d:"M24 42C24 42 6 30 6 18C6 12 10.5 7 16.5 7C20.5 7 23 9.5 24 11C25 9.5 27.5 7 31.5 7C37.5 7 42 12 42 18C42 30 24 42 24 42Z",fill:a.primary}),e.jsx("path",{d:"M18 24C18 24 20 22 24 22C28 22 30 24 30 24",stroke:a.accent,strokeWidth:"2.5",strokeLinecap:"round",fill:"none",opacity:"0.9"}),e.jsx("path",{d:"M15 28C15 28 18 26 24 26C30 26 33 28 33 28",stroke:a.accent,strokeWidth:"2",strokeLinecap:"round",fill:"none",opacity:"0.7"}),e.jsx("path",{d:"M24 14V20M21 17H27",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]}),e.jsxs("text",{x:"56",y:"34",fontFamily:"var(--font-family-inter, 'Inter', sans-serif)",fontSize:"28",fontWeight:"700",children:[e.jsx("tspan",{fill:a.primary,children:"Smart"}),e.jsx("tspan",{fill:a.accent,children:"Senior"})]})]});return o==="icon"?e.jsx(Te,{}):o==="wordmark"?e.jsx(_e,{}):e.jsx(Be,{})});r.displayName="Logo";const s=S.forwardRef((o,n)=>e.jsx(r,{ref:n,variant:"icon",...o}));s.displayName="LogoIcon";const We=S.forwardRef((o,n)=>e.jsx(r,{ref:n,variant:"wordmark",...o}));We.displayName="LogoWordmark";const Fe=S.forwardRef((o,n)=>e.jsx(r,{ref:n,variant:"full",...o}));Fe.displayName="LogoFull";r.__docgenInfo={description:`SmartSenior Logo Component

Variants:
- full: Icon + wordmark (horizontal)
- icon: Icon only (heart with hand)
- wordmark: Text only`,methods:[],displayName:"Logo",props:{variant:{required:!1,tsType:{name:"union",raw:"'full' | 'icon' | 'wordmark'",elements:[{name:"literal",value:"'full'"},{name:"literal",value:"'icon'"},{name:"literal",value:"'wordmark'"}]},description:"",defaultValue:{value:"'full'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'white' | 'primary' | 'mono'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'white'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'mono'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"LogoIcon"};We.__docgenInfo={description:"",methods:[],displayName:"LogoWordmark"};Fe.__docgenInfo={description:"",methods:[],displayName:"LogoFull"};const He={title:"Brand/Logo",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["full","icon","wordmark"]},size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},color:{control:"select",options:["default","white","primary","mono"]}}},d={args:{variant:"full",size:"md"}},i={args:{variant:"full",size:"lg"}},c={args:{variant:"icon",size:"lg"}},m={args:{variant:"wordmark",size:"lg"}},x={render:()=>e.jsxs("div",{className:"flex flex-col items-start gap-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12 text-sm text-[var(--foreground-muted)]",children:"xs"}),e.jsx(r,{size:"xs"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12 text-sm text-[var(--foreground-muted)]",children:"sm"}),e.jsx(r,{size:"sm"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12 text-sm text-[var(--foreground-muted)]",children:"md"}),e.jsx(r,{size:"md"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12 text-sm text-[var(--foreground-muted)]",children:"lg"}),e.jsx(r,{size:"lg"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12 text-sm text-[var(--foreground-muted)]",children:"xl"}),e.jsx(r,{size:"xl"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-12 text-sm text-[var(--foreground-muted)]",children:"2xl"}),e.jsx(r,{size:"2xl"})]})]})},u={render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(s,{size:"xs"}),e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"}),e.jsx(s,{size:"xl"}),e.jsx(s,{size:"2xl"})]})},p={args:{color:"default",size:"lg"}},g={args:{color:"primary",size:"lg"}},v={args:{color:"mono",size:"lg"}},f={render:()=>e.jsx("div",{className:"bg-[var(--primary)] p-8 rounded-xl",children:e.jsx(r,{color:"white",size:"xl"})})},h={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 bg-[var(--background)] rounded-lg",children:[e.jsx("p",{className:"text-sm text-[var(--foreground-muted)] mb-2",children:"Default"}),e.jsx(r,{color:"default",size:"lg"})]}),e.jsxs("div",{className:"p-4 bg-[var(--background)] rounded-lg",children:[e.jsx("p",{className:"text-sm text-[var(--foreground-muted)] mb-2",children:"Primary"}),e.jsx(r,{color:"primary",size:"lg"})]}),e.jsxs("div",{className:"p-4 bg-[var(--background)] rounded-lg",children:[e.jsx("p",{className:"text-sm text-[var(--foreground-muted)] mb-2",children:"Mono"}),e.jsx(r,{color:"mono",size:"lg"})]}),e.jsxs("div",{className:"p-4 bg-[var(--primary)] rounded-lg",children:[e.jsx("p",{className:"text-sm text-white mb-2",children:"White (em fundo escuro)"}),e.jsx(r,{color:"white",size:"lg"})]})]})},j={args:{animated:!0,size:"xl"}},N={render:()=>e.jsxs("header",{className:"w-full max-w-4xl flex items-center justify-between p-4 bg-[var(--card)] border border-[var(--border)] rounded-xl",children:[e.jsx(r,{size:"sm"}),e.jsxs("nav",{className:"flex gap-4",children:[e.jsx("a",{href:"#",className:"text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]",children:"Início"}),e.jsx("a",{href:"#",className:"text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]",children:"Serviços"}),e.jsx("a",{href:"#",className:"text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]",children:"Contato"})]})]})},w={render:()=>e.jsx("footer",{className:"w-full max-w-4xl p-8 bg-[var(--primary)] rounded-xl text-white",children:e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[e.jsx(r,{color:"white",size:"md"}),e.jsx("p",{className:"text-sm opacity-80",children:"© 2026 SmartSenior. Todos os direitos reservados."})]})})},b={render:()=>e.jsxs("div",{className:"w-80 h-60 flex flex-col items-center justify-center gap-4 bg-[var(--background)] rounded-xl border border-[var(--border)]",children:[e.jsx(s,{size:"xl",animated:!0}),e.jsx("p",{className:"text-sm text-[var(--foreground-muted)]",children:"Carregando..."})]})},y={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[var(--primary)] flex items-center justify-center shadow-lg",children:e.jsx(s,{size:"lg",color:"white"})}),e.jsx("div",{className:"w-12 h-12 rounded-xl bg-[var(--primary)] flex items-center justify-center shadow-md",children:e.jsx(s,{size:"md",color:"white"})}),e.jsx("div",{className:"w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center shadow",children:e.jsx(s,{size:"sm",color:"white"})})]})},z={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-8 h-8 rounded bg-[var(--primary)] flex items-center justify-center",children:e.jsx(s,{size:"xs",color:"white"})}),e.jsx("span",{className:"text-sm text-[var(--foreground-muted)]",children:"32x32 Favicon"})]})},k={render:()=>e.jsxs("div",{className:"max-w-2xl space-y-8 p-6 bg-[var(--card)] rounded-xl border border-[var(--border)]",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"SmartSenior Brand"}),e.jsx("p",{className:"text-sm text-[var(--foreground-muted)] mb-6",children:"O logo SmartSenior combina um coração com elementos de cuidado, representando nossa missão de proporcionar tecnologia acessível e carinho aos idosos."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Variantes"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-[var(--background)] rounded-lg text-center",children:[e.jsx(r,{variant:"full",size:"sm"}),e.jsx("p",{className:"text-xs text-[var(--foreground-muted)] mt-2",children:"Full"})]}),e.jsxs("div",{className:"p-4 bg-[var(--background)] rounded-lg text-center",children:[e.jsx(r,{variant:"icon",size:"md"}),e.jsx("p",{className:"text-xs text-[var(--foreground-muted)] mt-2",children:"Icon"})]}),e.jsxs("div",{className:"p-4 bg-[var(--background)] rounded-lg text-center",children:[e.jsx(r,{variant:"wordmark",size:"sm"}),e.jsx("p",{className:"text-xs text-[var(--foreground-muted)] mt-2",children:"Wordmark"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Área de proteção"}),e.jsx("div",{className:"p-8 bg-[var(--background)] rounded-lg inline-block",children:e.jsx("div",{className:"border-2 border-dashed border-[var(--border)] p-4",children:e.jsx(r,{size:"lg"})})}),e.jsx("p",{className:"text-xs text-[var(--foreground-muted)] mt-2",children:"Mantenha uma área de respiro ao redor do logo equivalente à altura do ícone."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Tamanho mínimo"}),e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsxs("div",{children:[e.jsx(r,{size:"xs"}),e.jsx("p",{className:"text-xs text-[var(--foreground-muted)] mt-1",children:"Mínimo: 100px (full)"})]}),e.jsxs("div",{children:[e.jsx(s,{size:"xs"}),e.jsx("p",{className:"text-xs text-[var(--foreground-muted)] mt-1",children:"Mínimo: 24px (icon)"})]})]})]})]})};var W,F,V;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'full',
    size: 'md'
  }
}`,...(V=(F=d.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var T,_,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'full',
    size: 'lg'
  }
}`,...(B=(_=i.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var O,A,D;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'icon',
    size: 'lg'
  }
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var q,G,R;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'wordmark',
    size: 'lg'
  }
}`,...(R=(G=m.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var H,P,E;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-start gap-6">
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">xs</span>
        <Logo size="xs" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">sm</span>
        <Logo size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">md</span>
        <Logo size="md" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">lg</span>
        <Logo size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">xl</span>
        <Logo size="xl" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">2xl</span>
        <Logo size="2xl" />
      </div>
    </div>
}`,...(E=(P=x.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var Z,J,K;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">
      <LogoIcon size="xs" />
      <LogoIcon size="sm" />
      <LogoIcon size="md" />
      <LogoIcon size="lg" />
      <LogoIcon size="xl" />
      <LogoIcon size="2xl" />
    </div>
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    color: 'default',
    size: 'lg'
  }
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,$,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'lg'
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,se,ae;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    color: 'mono',
    size: 'lg'
  }
}`,...(ae=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var oe,ne,te;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="bg-[var(--primary)] p-8 rounded-xl">
      <Logo color="white" size="xl" />
    </div>
}`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,de,ie;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="p-4 bg-[var(--background)] rounded-lg">
        <p className="text-sm text-[var(--foreground-muted)] mb-2">Default</p>
        <Logo color="default" size="lg" />
      </div>
      <div className="p-4 bg-[var(--background)] rounded-lg">
        <p className="text-sm text-[var(--foreground-muted)] mb-2">Primary</p>
        <Logo color="primary" size="lg" />
      </div>
      <div className="p-4 bg-[var(--background)] rounded-lg">
        <p className="text-sm text-[var(--foreground-muted)] mb-2">Mono</p>
        <Logo color="mono" size="lg" />
      </div>
      <div className="p-4 bg-[var(--primary)] rounded-lg">
        <p className="text-sm text-white mb-2">White (em fundo escuro)</p>
        <Logo color="white" size="lg" />
      </div>
    </div>
}`,...(ie=(de=h.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ce,me,xe;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    animated: true,
    size: 'xl'
  }
}`,...(xe=(me=j.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var ue,pe,ge;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <header className="w-full max-w-4xl flex items-center justify-between p-4 bg-[var(--card)] border border-[var(--border)] rounded-xl">
      <Logo size="sm" />
      <nav className="flex gap-4">
        <a href="#" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]">
          Início
        </a>
        <a href="#" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]">
          Serviços
        </a>
        <a href="#" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]">
          Contato
        </a>
      </nav>
    </header>
}`,...(ge=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ve,fe,he;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <footer className="w-full max-w-4xl p-8 bg-[var(--primary)] rounded-xl text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo color="white" size="md" />
        <p className="text-sm opacity-80">
          © 2026 SmartSenior. Todos os direitos reservados.
        </p>
      </div>
    </footer>
}`,...(he=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var je,Ne,we;b.parameters={...b.parameters,docs:{...(je=b.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div className="w-80 h-60 flex flex-col items-center justify-center gap-4 bg-[var(--background)] rounded-xl border border-[var(--border)]">
      <LogoIcon size="xl" animated />
      <p className="text-sm text-[var(--foreground-muted)]">Carregando...</p>
    </div>
}`,...(we=(Ne=b.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var be,ye,ze;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <div className="w-16 h-16 rounded-2xl bg-[var(--primary)] flex items-center justify-center shadow-lg">
        <LogoIcon size="lg" color="white" />
      </div>
      <div className="w-12 h-12 rounded-xl bg-[var(--primary)] flex items-center justify-center shadow-md">
        <LogoIcon size="md" color="white" />
      </div>
      <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center shadow">
        <LogoIcon size="sm" color="white" />
      </div>
    </div>
}`,...(ze=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:ze.source}}};var ke,Se,Le;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <div className="w-8 h-8 rounded bg-[var(--primary)] flex items-center justify-center">
        <LogoIcon size="xs" color="white" />
      </div>
      <span className="text-sm text-[var(--foreground-muted)]">
        32x32 Favicon
      </span>
    </div>
}`,...(Le=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:Le.source}}};var Ce,Ie,Me;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl space-y-8 p-6 bg-[var(--card)] rounded-xl border border-[var(--border)]">
      <div>
        <h2 className="text-xl font-semibold mb-4">SmartSenior Brand</h2>
        <p className="text-sm text-[var(--foreground-muted)] mb-6">
          O logo SmartSenior combina um coração com elementos de cuidado,
          representando nossa missão de proporcionar tecnologia acessível
          e carinho aos idosos.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Variantes</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-[var(--background)] rounded-lg text-center">
            <Logo variant="full" size="sm" />
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Full</p>
          </div>
          <div className="p-4 bg-[var(--background)] rounded-lg text-center">
            <Logo variant="icon" size="md" />
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Icon</p>
          </div>
          <div className="p-4 bg-[var(--background)] rounded-lg text-center">
            <Logo variant="wordmark" size="sm" />
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Wordmark</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Área de proteção</h3>
        <div className="p-8 bg-[var(--background)] rounded-lg inline-block">
          <div className="border-2 border-dashed border-[var(--border)] p-4">
            <Logo size="lg" />
          </div>
        </div>
        <p className="text-xs text-[var(--foreground-muted)] mt-2">
          Mantenha uma área de respiro ao redor do logo equivalente à altura do ícone.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Tamanho mínimo</h3>
        <div className="flex items-end gap-4">
          <div>
            <Logo size="xs" />
            <p className="text-xs text-[var(--foreground-muted)] mt-1">
              Mínimo: 100px (full)
            </p>
          </div>
          <div>
            <LogoIcon size="xs" />
            <p className="text-xs text-[var(--foreground-muted)] mt-1">
              Mínimo: 24px (icon)
            </p>
          </div>
        </div>
      </div>
    </div>
}`,...(Me=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:Me.source}}};const Pe=["Default","FullLogo","IconOnly","WordmarkOnly","AllSizes","IconSizes","DefaultColor","PrimaryColor","MonoColor","WhiteOnDark","AllColors","Animated","Header","Footer","LoadingScreen","AppIcon","Favicon","BrandGuidelines"];export{h as AllColors,x as AllSizes,j as Animated,y as AppIcon,k as BrandGuidelines,d as Default,p as DefaultColor,z as Favicon,w as Footer,i as FullLogo,N as Header,c as IconOnly,u as IconSizes,b as LoadingScreen,v as MonoColor,g as PrimaryColor,f as WhiteOnDark,m as WordmarkOnly,Pe as __namedExportsOrder,He as default};
