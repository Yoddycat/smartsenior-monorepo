import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function d(...r){return r.filter(Boolean).join(" ")}const Ee={h1:"text-4xl md:text-5xl font-bold tracking-tight",h2:"text-3xl md:text-4xl font-bold tracking-tight",h3:"text-2xl md:text-3xl font-semibold",h4:"text-xl md:text-2xl font-semibold",h5:"text-lg md:text-xl font-medium",h6:"text-base md:text-lg font-medium",body:"text-base leading-relaxed","body-lg":"text-lg leading-relaxed","body-sm":"text-sm leading-relaxed",caption:"text-xs leading-normal",overline:"text-xs uppercase tracking-widest font-medium",lead:"text-xl leading-relaxed text-[var(--foreground-muted)]"},Ce={default:"text-[var(--foreground)]",muted:"text-[var(--foreground-muted)]",primary:"text-[var(--primary)]",success:"text-[var(--success)]",warning:"text-[var(--warning)]",error:"text-[var(--error)]",info:"text-[var(--info)]"},Be={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},Ie={left:"text-left",center:"text-center",right:"text-right",justify:"text-justify"},Pe={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body:"p","body-lg":"p","body-sm":"p",caption:"span",overline:"span",lead:"p"},a=c.forwardRef(({variant:r="body",as:n,color:o="default",align:i,weight:t,truncate:s=!1,className:h,children:I,style:P,...x},A)=>{const _e=n||Pe[r],Se=s?typeof s=="number"?{display:"-webkit-box",WebkitLineClamp:s,WebkitBoxOrient:"vertical",overflow:"hidden"}:{}:{};return e.jsx(_e,{ref:A,className:d(Ee[r],Ce[o],t&&Be[t],i&&Ie[i],s===!0&&"truncate",h),style:{...Se,...P},...x,children:I})});a.displayName="Typography";const l=c.forwardRef(({level:r=2,...n},o)=>{const i=`h${r}`;return e.jsx(a,{ref:o,variant:i,...n})});l.displayName="Heading";const g=c.forwardRef(({size:r="base",...n},o)=>{const i=r==="sm"?"body-sm":r==="lg"?"body-lg":"body";return e.jsx(a,{ref:o,variant:i,...n})});g.displayName="Text";const p=c.forwardRef(({required:r,disabled:n,error:o,className:i,children:t,...s},h)=>e.jsxs("label",{ref:h,className:d("text-sm font-medium leading-none",n?"text-[var(--foreground-muted)] cursor-not-allowed":"text-[var(--foreground)]",o&&"text-[var(--error)]",i),...s,children:[t,r&&e.jsx("span",{className:"ml-1 text-[var(--error)]","aria-hidden":"true",children:"*"})]}));p.displayName="Label";const B=c.forwardRef((r,n)=>e.jsx(a,{ref:n,variant:"caption",color:"muted",...r}));B.displayName="Caption";const m=c.forwardRef(({variant:r="mark",className:n,children:o,...i},t)=>r==="mark"?e.jsx("mark",{ref:t,className:d("bg-[var(--warning)] bg-opacity-30 text-[var(--foreground)] px-1 rounded",n),...i,children:o}):r==="code"?e.jsx("code",{ref:t,className:d("bg-[var(--background-muted)] text-[var(--primary)] px-1.5 py-0.5 rounded text-sm font-mono",n),...i,children:o}):r==="kbd"?e.jsx("kbd",{ref:t,className:d("inline-flex items-center justify-center px-2 py-1 text-xs font-medium","bg-[var(--background-muted)] text-[var(--foreground)]","border border-[var(--border)] rounded shadow-sm","font-mono",n),...i,children:o}):null);m.displayName="Highlight";const y=c.forwardRef(({cite:r,author:n,className:o,children:i,...t},s)=>e.jsxs("figure",{className:d("my-4",o),children:[e.jsx("blockquote",{ref:s,cite:r,className:d("border-l-4 border-[var(--primary)] pl-4 py-2","text-lg italic text-[var(--foreground)]"),...t,children:i}),n&&e.jsxs("figcaption",{className:"mt-2 text-sm text-[var(--foreground-muted)]",children:["— ",n]})]}));y.displayName="Blockquote";const u=c.forwardRef(({from:r="var(--primary)",via:n,to:o="var(--accent)",direction:i="right",className:t,children:s,style:h,...I},P)=>{const x={left:"to left",right:"to right",top:"to top",bottom:"to bottom"},A=n?`linear-gradient(${x[i]}, ${r}, ${n}, ${o})`:`linear-gradient(${x[i]}, ${r}, ${o})`;return e.jsx("span",{ref:P,className:d("bg-clip-text text-transparent font-bold",t),style:{backgroundImage:A,...h},...I,children:s})});u.displayName="GradientText";const V=c.forwardRef(({size:r="base",className:n,children:o,...i},t)=>{const s={sm:"prose-sm",base:"prose-base",lg:"prose-lg"};return e.jsx("div",{ref:t,className:d("prose max-w-none",s[r],"[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-[var(--foreground)]","[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:text-[var(--foreground)]","[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:text-[var(--foreground)]","[&_p]:mb-4 [&_p]:text-[var(--foreground)] [&_p]:leading-relaxed","[&_a]:text-[var(--primary)] [&_a]:underline [&_a]:hover:text-[var(--primary-hover)]","[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4","[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4","[&_li]:mb-1 [&_li]:text-[var(--foreground)]","[&_blockquote]:border-l-4 [&_blockquote]:border-[var(--primary)] [&_blockquote]:pl-4 [&_blockquote]:italic","[&_code]:bg-[var(--background-muted)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm","[&_pre]:bg-[var(--background-muted)] [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto","[&_hr]:border-[var(--border)] [&_hr]:my-6","[&_img]:rounded-lg [&_img]:my-4","[&_table]:w-full [&_table]:border-collapse","[&_th]:border [&_th]:border-[var(--border)] [&_th]:p-2 [&_th]:bg-[var(--background-muted)]","[&_td]:border [&_td]:border-[var(--border)] [&_td]:p-2",n),...i,children:o})});V.displayName="Prose";a.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:"keyof typeof typographyVariants",elements:[{name:"literal",value:"h1"},{name:"literal",value:"h2"},{name:"literal",value:"h3"},{name:"literal",value:"h4"},{name:"literal",value:"h5"},{name:"literal",value:"h6"},{name:"literal",value:"body"},{name:"literal",value:'"body-lg"'},{name:"literal",value:'"body-sm"'},{name:"literal",value:"caption"},{name:"literal",value:"overline"},{name:"literal",value:"lead"}]},description:"",defaultValue:{value:"'body'",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},color:{required:!1,tsType:{name:"union",raw:"'default' | 'muted' | 'primary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:""},truncate:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"",defaultValue:{value:"2",computed:!1}}},composes:["Omit"]};g.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'base'",computed:!1}}},composes:["Omit"]};p.__docgenInfo={description:"",methods:[],displayName:"Label",props:{required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};B.__docgenInfo={description:"",methods:[],displayName:"Caption",composes:["Omit"]};m.__docgenInfo={description:"",methods:[],displayName:"Highlight",props:{variant:{required:!1,tsType:{name:"union",raw:"'mark' | 'code' | 'kbd'",elements:[{name:"literal",value:"'mark'"},{name:"literal",value:"'code'"},{name:"literal",value:"'kbd'"}]},description:"",defaultValue:{value:"'mark'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"Blockquote",props:{cite:{required:!1,tsType:{name:"string"},description:""},author:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"GradientText",props:{from:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--primary)'",computed:!1}},via:{required:!1,tsType:{name:"string"},description:""},to:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--accent)'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};V.__docgenInfo={description:"",methods:[],displayName:"Prose",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'base'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Re={title:"Typography/Typography",component:a,parameters:{layout:"padded"},tags:["autodocs"]},v={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"h1",children:"Heading 1 - Display"}),e.jsx(a,{variant:"h2",children:"Heading 2 - Title"}),e.jsx(a,{variant:"h3",children:"Heading 3 - Subtitle"}),e.jsx(a,{variant:"h4",children:"Heading 4 - Section"}),e.jsx(a,{variant:"h5",children:"Heading 5 - Subsection"}),e.jsx(a,{variant:"h6",children:"Heading 6 - Label"}),e.jsx(a,{variant:"lead",children:"Lead - Texto introdutório destacado"}),e.jsx(a,{variant:"body-lg",children:"Body Large - Texto maior para ênfase"}),e.jsx(a,{variant:"body",children:"Body - Texto padrão para parágrafos e conteúdo"}),e.jsx(a,{variant:"body-sm",children:"Body Small - Texto menor para informações secundárias"}),e.jsx(a,{variant:"caption",children:"Caption - Legendas e textos auxiliares"}),e.jsx(a,{variant:"overline",children:"OVERLINE - CATEGORIAS E LABELS"})]})},f={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{color:"default",children:"Default - Cor padrão do texto"}),e.jsx(a,{color:"muted",children:"Muted - Texto secundário"}),e.jsx(a,{color:"primary",children:"Primary - Destaque principal"}),e.jsx(a,{color:"success",children:"Success - Mensagens de sucesso"}),e.jsx(a,{color:"warning",children:"Warning - Alertas"}),e.jsx(a,{color:"error",children:"Error - Erros"}),e.jsx(a,{color:"info",children:"Info - Informações"})]})},b={render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx(a,{align:"left",children:"Alinhado à esquerda (padrão)"}),e.jsx(a,{align:"center",children:"Centralizado"}),e.jsx(a,{align:"right",children:"Alinhado à direita"}),e.jsx(a,{align:"justify",children:"Texto justificado - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})},T={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{weight:"normal",children:"Normal weight (400)"}),e.jsx(a,{weight:"medium",children:"Medium weight (500)"}),e.jsx(a,{weight:"semibold",children:"Semibold weight (600)"}),e.jsx(a,{weight:"bold",children:"Bold weight (700)"})]})},j={render:()=>e.jsxs("div",{className:"space-y-4 max-w-xs",children:[e.jsx(a,{truncate:!0,children:"Single line truncate - Este texto será cortado com reticências quando for muito longo"}),e.jsx(a,{truncate:2,children:"Multi-line truncate (2 lines) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}),e.jsx(a,{truncate:3,children:"Multi-line truncate (3 lines) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})},N={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{level:1,children:"Heading Level 1"}),e.jsx(l,{level:2,children:"Heading Level 2"}),e.jsx(l,{level:3,children:"Heading Level 3"}),e.jsx(l,{level:4,children:"Heading Level 4"}),e.jsx(l,{level:5,children:"Heading Level 5"}),e.jsx(l,{level:6,children:"Heading Level 6"})]})},w={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(l,{level:2,children:"Default Heading"}),e.jsx(l,{level:2,color:"primary",children:"Primary Heading"}),e.jsx(l,{level:2,color:"muted",children:"Muted Heading"})]})},q={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(g,{size:"lg",children:"Large text - Para ênfase e destaque"}),e.jsx(g,{size:"base",children:"Base text - Tamanho padrão para parágrafos"}),e.jsx(g,{size:"sm",children:"Small text - Para informações secundárias"})]})},k={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(p,{htmlFor:"name",children:"Nome completo"}),e.jsx("input",{id:"name",className:"mt-1 block w-full rounded border p-2"})]}),e.jsxs("div",{children:[e.jsx(p,{htmlFor:"email",required:!0,children:"Email"}),e.jsx("input",{id:"email",className:"mt-1 block w-full rounded border p-2"})]}),e.jsxs("div",{children:[e.jsx(p,{htmlFor:"disabled",disabled:!0,children:"Campo desabilitado"}),e.jsx("input",{id:"disabled",disabled:!0,className:"mt-1 block w-full rounded border p-2"})]}),e.jsxs("div",{children:[e.jsx(p,{htmlFor:"error",error:!0,children:"Campo com erro"}),e.jsx("input",{id:"error",className:"mt-1 block w-full rounded border border-red-500 p-2"})]})]})},H={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("img",{src:"https://via.placeholder.com/400x200",alt:"Placeholder",className:"rounded-lg"}),e.jsx(B,{className:"mt-2 block",children:"Figura 1: Exemplo de imagem com legenda"})]}),e.jsx("div",{children:e.jsx(B,{children:"Última atualização: 04/03/2026"})})]})},L={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(a,{children:["Use ",e.jsx(m,{variant:"mark",children:"mark"})," para destacar texto importante."]}),e.jsxs(a,{children:["Use ",e.jsx(m,{variant:"code",children:"código inline"})," para snippets de código."]}),e.jsxs(a,{children:["Pressione ",e.jsx(m,{variant:"kbd",children:"Ctrl"})," + ",e.jsx(m,{variant:"kbd",children:"S"})," para salvar."]})]})},_={render:()=>e.jsxs("div",{className:"space-y-6 max-w-lg",children:[e.jsx(y,{children:"A simplicidade é a sofisticação máxima."}),e.jsx(y,{author:"Leonardo da Vinci",children:"A simplicidade é a sofisticação máxima."}),e.jsx(y,{author:"Steve Jobs",cite:"https://example.com",children:"Design não é apenas como algo parece e se sente. Design é como funciona."})]})},S={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"h2",children:e.jsx(u,{children:"SmartSenior Design System"})}),e.jsx(a,{variant:"h3",children:e.jsx(u,{from:"var(--success)",to:"var(--info)",children:"Gradiente Verde para Azul"})}),e.jsx(a,{variant:"h3",children:e.jsx(u,{from:"var(--warning)",via:"var(--error)",to:"var(--primary)",children:"Gradiente com três cores"})}),e.jsx(a,{variant:"h3",children:e.jsx(u,{direction:"bottom",children:"Gradiente Vertical"})})]})},E={render:()=>e.jsxs(V,{className:"max-w-2xl",children:[e.jsx("h1",{children:"Título Principal"}),e.jsxs("p",{children:["Este é um exemplo de conteúdo rico usando o componente ",e.jsx("strong",{children:"Prose"}),". Ele aplica estilos consistentes para elementos HTML comuns."]}),e.jsx("h2",{children:"Subtítulo"}),e.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Você pode incluir ",e.jsx("a",{href:"#",children:"links"})," e ",e.jsx("code",{children:"código inline"}),"."]}),e.jsx("h3",{children:"Lista não ordenada"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Primeiro item"}),e.jsx("li",{children:"Segundo item"}),e.jsx("li",{children:"Terceiro item"})]}),e.jsx("h3",{children:"Lista ordenada"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Passo um"}),e.jsx("li",{children:"Passo dois"}),e.jsx("li",{children:"Passo três"})]}),e.jsx("blockquote",{children:"Este é um blockquote para citações ou destaques importantes."}),e.jsx("pre",{children:e.jsx("code",{children:`function hello() {
  console.log("Hello, World!");
}`})}),e.jsx("hr",{}),e.jsx("p",{children:"Texto final após a linha horizontal."})]})},C={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"muted",className:"mb-2",children:"FONT FAMILY"}),e.jsx(a,{variant:"h1",children:"Inter Variable"})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"muted",className:"mb-4",children:"ALPHABET"}),e.jsx(a,{variant:"h3",className:"mb-2",children:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),e.jsx(a,{variant:"h3",className:"mb-2",children:"abcdefghijklmnopqrstuvwxyz"}),e.jsx(a,{variant:"h3",children:"0123456789 !@#$%^&*()"})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"muted",className:"mb-4",children:"WEIGHTS"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{style:{fontWeight:100},children:"Thin (100) - The quick brown fox"}),e.jsx(a,{style:{fontWeight:200},children:"Extra Light (200) - The quick brown fox"}),e.jsx(a,{style:{fontWeight:300},children:"Light (300) - The quick brown fox"}),e.jsx(a,{style:{fontWeight:400},children:"Regular (400) - The quick brown fox"}),e.jsx(a,{style:{fontWeight:500},children:"Medium (500) - The quick brown fox"}),e.jsx(a,{style:{fontWeight:600},children:"Semibold (600) - The quick brown fox"}),e.jsx(a,{style:{fontWeight:700},children:"Bold (700) - The quick brown fox"}),e.jsx(a,{style:{fontWeight:800},children:"Extra Bold (800) - The quick brown fox"}),e.jsx(a,{style:{fontWeight:900},children:"Black (900) - The quick brown fox"})]})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"overline",color:"muted",className:"mb-4",children:"ACCESSIBILITY"}),e.jsx(a,{variant:"body-lg",className:"max-w-lg",children:"A fonte Inter foi escolhida por sua excelente legibilidade em telas, especialmente para usuários seniores. Com altura-x generosa e distinção clara entre caracteres similares (I, l, 1, O, 0), ela garante uma experiência de leitura confortável."})]})]})};var W,G,R;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography variant="h1">Heading 1 - Display</Typography>
      <Typography variant="h2">Heading 2 - Title</Typography>
      <Typography variant="h3">Heading 3 - Subtitle</Typography>
      <Typography variant="h4">Heading 4 - Section</Typography>
      <Typography variant="h5">Heading 5 - Subsection</Typography>
      <Typography variant="h6">Heading 6 - Label</Typography>
      <Typography variant="lead">Lead - Texto introdutório destacado</Typography>
      <Typography variant="body-lg">Body Large - Texto maior para ênfase</Typography>
      <Typography variant="body">Body - Texto padrão para parágrafos e conteúdo</Typography>
      <Typography variant="body-sm">Body Small - Texto menor para informações secundárias</Typography>
      <Typography variant="caption">Caption - Legendas e textos auxiliares</Typography>
      <Typography variant="overline">OVERLINE - CATEGORIAS E LABELS</Typography>
    </div>
}`,...(R=(G=v.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var M,z,F;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Typography color="default">Default - Cor padrão do texto</Typography>
      <Typography color="muted">Muted - Texto secundário</Typography>
      <Typography color="primary">Primary - Destaque principal</Typography>
      <Typography color="success">Success - Mensagens de sucesso</Typography>
      <Typography color="warning">Warning - Alertas</Typography>
      <Typography color="error">Error - Erros</Typography>
      <Typography color="info">Info - Informações</Typography>
    </div>
}`,...(F=(z=f.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var D,O,U;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-lg">
      <Typography align="left">Alinhado à esquerda (padrão)</Typography>
      <Typography align="center">Centralizado</Typography>
      <Typography align="right">Alinhado à direita</Typography>
      <Typography align="justify">
        Texto justificado - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
}`,...(U=(O=b.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var $,Y,J;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Typography weight="normal">Normal weight (400)</Typography>
      <Typography weight="medium">Medium weight (500)</Typography>
      <Typography weight="semibold">Semibold weight (600)</Typography>
      <Typography weight="bold">Bold weight (700)</Typography>
    </div>
}`,...(J=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,X;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-xs">
      <Typography truncate>
        Single line truncate - Este texto será cortado com reticências quando for muito longo
      </Typography>
      <Typography truncate={2}>
        Multi-line truncate (2 lines) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </Typography>
      <Typography truncate={3}>
        Multi-line truncate (3 lines) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
    </div>
}`,...(X=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
}`,...(ae=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,ne,ie;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Heading level={2}>Default Heading</Heading>
      <Heading level={2} color="primary">Primary Heading</Heading>
      <Heading level={2} color="muted">Muted Heading</Heading>
    </div>
}`,...(ie=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,te,se;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text size="lg">Large text - Para ênfase e destaque</Text>
      <Text size="base">Base text - Tamanho padrão para parágrafos</Text>
      <Text size="sm">Small text - Para informações secundárias</Text>
    </div>
}`,...(se=(te=q.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,de,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <Label htmlFor="name">Nome completo</Label>
        <input id="name" className="mt-1 block w-full rounded border p-2" />
      </div>
      <div>
        <Label htmlFor="email" required>Email</Label>
        <input id="email" className="mt-1 block w-full rounded border p-2" />
      </div>
      <div>
        <Label htmlFor="disabled" disabled>Campo desabilitado</Label>
        <input id="disabled" disabled className="mt-1 block w-full rounded border p-2" />
      </div>
      <div>
        <Label htmlFor="error" error>Campo com erro</Label>
        <input id="error" className="mt-1 block w-full rounded border border-red-500 p-2" />
      </div>
    </div>
}`,...(ce=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,ue;H.parameters={...H.parameters,docs:{...(pe=H.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <img src="https://via.placeholder.com/400x200" alt="Placeholder" className="rounded-lg" />
        <Caption className="mt-2 block">Figura 1: Exemplo de imagem com legenda</Caption>
      </div>
      <div>
        <Caption>Última atualização: 04/03/2026</Caption>
      </div>
    </div>
}`,...(ue=(me=H.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,ge,ye;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography>
        Use <Highlight variant="mark">mark</Highlight> para destacar texto importante.
      </Typography>
      <Typography>
        Use <Highlight variant="code">código inline</Highlight> para snippets de código.
      </Typography>
      <Typography>
        Pressione <Highlight variant="kbd">Ctrl</Highlight> + <Highlight variant="kbd">S</Highlight> para salvar.
      </Typography>
    </div>
}`,...(ye=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var xe,ve,fe;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 max-w-lg">
      <Blockquote>
        A simplicidade é a sofisticação máxima.
      </Blockquote>
      <Blockquote author="Leonardo da Vinci">
        A simplicidade é a sofisticação máxima.
      </Blockquote>
      <Blockquote author="Steve Jobs" cite="https://example.com">
        Design não é apenas como algo parece e se sente.
        Design é como funciona.
      </Blockquote>
    </div>
}`,...(fe=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var be,Te,je;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography variant="h2">
        <GradientText>SmartSenior Design System</GradientText>
      </Typography>
      <Typography variant="h3">
        <GradientText from="var(--success)" to="var(--info)">
          Gradiente Verde para Azul
        </GradientText>
      </Typography>
      <Typography variant="h3">
        <GradientText from="var(--warning)" via="var(--error)" to="var(--primary)">
          Gradiente com três cores
        </GradientText>
      </Typography>
      <Typography variant="h3">
        <GradientText direction="bottom">
          Gradiente Vertical
        </GradientText>
      </Typography>
    </div>
}`,...(je=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:je.source}}};var Ne,we,qe;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <Prose className="max-w-2xl">
      <h1>Título Principal</h1>
      <p>
        Este é um exemplo de conteúdo rico usando o componente <strong>Prose</strong>.
        Ele aplica estilos consistentes para elementos HTML comuns.
      </p>

      <h2>Subtítulo</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Você pode incluir <a href="#">links</a> e <code>código inline</code>.
      </p>

      <h3>Lista não ordenada</h3>
      <ul>
        <li>Primeiro item</li>
        <li>Segundo item</li>
        <li>Terceiro item</li>
      </ul>

      <h3>Lista ordenada</h3>
      <ol>
        <li>Passo um</li>
        <li>Passo dois</li>
        <li>Passo três</li>
      </ol>

      <blockquote>
        Este é um blockquote para citações ou destaques importantes.
      </blockquote>

      <pre><code>{\`function hello() {
  console.log("Hello, World!");
}\`}</code></pre>

      <hr />

      <p>
        Texto final após a linha horizontal.
      </p>
    </Prose>
}`,...(qe=(we=E.parameters)==null?void 0:we.docs)==null?void 0:qe.source}}};var ke,He,Le;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <Typography variant="overline" color="muted" className="mb-2">FONT FAMILY</Typography>
        <Typography variant="h1">Inter Variable</Typography>
      </div>

      <div>
        <Typography variant="overline" color="muted" className="mb-4">ALPHABET</Typography>
        <Typography variant="h3" className="mb-2">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </Typography>
        <Typography variant="h3" className="mb-2">
          abcdefghijklmnopqrstuvwxyz
        </Typography>
        <Typography variant="h3">
          0123456789 !@#$%^&*()
        </Typography>
      </div>

      <div>
        <Typography variant="overline" color="muted" className="mb-4">WEIGHTS</Typography>
        <div className="space-y-2">
          <Typography style={{
          fontWeight: 100
        }}>Thin (100) - The quick brown fox</Typography>
          <Typography style={{
          fontWeight: 200
        }}>Extra Light (200) - The quick brown fox</Typography>
          <Typography style={{
          fontWeight: 300
        }}>Light (300) - The quick brown fox</Typography>
          <Typography style={{
          fontWeight: 400
        }}>Regular (400) - The quick brown fox</Typography>
          <Typography style={{
          fontWeight: 500
        }}>Medium (500) - The quick brown fox</Typography>
          <Typography style={{
          fontWeight: 600
        }}>Semibold (600) - The quick brown fox</Typography>
          <Typography style={{
          fontWeight: 700
        }}>Bold (700) - The quick brown fox</Typography>
          <Typography style={{
          fontWeight: 800
        }}>Extra Bold (800) - The quick brown fox</Typography>
          <Typography style={{
          fontWeight: 900
        }}>Black (900) - The quick brown fox</Typography>
        </div>
      </div>

      <div>
        <Typography variant="overline" color="muted" className="mb-4">ACCESSIBILITY</Typography>
        <Typography variant="body-lg" className="max-w-lg">
          A fonte Inter foi escolhida por sua excelente legibilidade em telas,
          especialmente para usuários seniores. Com altura-x generosa e distinção
          clara entre caracteres similares (I, l, 1, O, 0), ela garante uma
          experiência de leitura confortável.
        </Typography>
      </div>
    </div>
}`,...(Le=(He=C.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};const Me=["AllVariants","Colors","Alignment","Weights","Truncate","HeadingLevels","HeadingWithColors","TextSizes","LabelVariants","CaptionExample","HighlightVariants","BlockquoteExample","GradientTextExamples","ProseExample","FontSpecimen"];export{b as Alignment,v as AllVariants,_ as BlockquoteExample,H as CaptionExample,f as Colors,C as FontSpecimen,S as GradientTextExamples,N as HeadingLevels,w as HeadingWithColors,L as HighlightVariants,k as LabelVariants,E as ProseExample,q as TextSizes,j as Truncate,T as Weights,Me as __namedExportsOrder,Re as default};
