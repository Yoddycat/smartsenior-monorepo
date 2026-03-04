import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-Dx_1l3Sb.js";import{B as f}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";function c(...t){return t.filter(Boolean).join(" ")}const d=m.forwardRef(({className:t,variant:n="default",...o},l)=>{const v={default:"",bordered:"border border-[var(--border)] rounded-lg overflow-hidden",divided:"divide-y divide-[var(--border)]"};return e.jsx("ul",{ref:l,className:c(v[n],t),...o})});d.displayName="List";const i=m.forwardRef(({className:t,interactive:n,selected:o,disabled:l,...v},S)=>e.jsx("li",{ref:S,className:c("flex items-center gap-3 p-4",n&&!l&&"cursor-pointer hover:bg-[var(--background-muted)] transition-colors",o&&"bg-[var(--primary)]/10",l&&"opacity-50 cursor-not-allowed",t),...v}));i.displayName="ListItem";const u=m.forwardRef(({className:t,...n},o)=>e.jsx("span",{ref:o,className:c("shrink-0 text-[var(--foreground-muted)]",t),...n}));u.displayName="ListItemIcon";const s=m.forwardRef(({className:t,...n},o)=>e.jsx("div",{ref:o,className:c("flex-1 min-w-0",t),...n}));s.displayName="ListItemContent";const r=m.forwardRef(({className:t,...n},o)=>e.jsx("p",{ref:o,className:c("text-base font-medium text-[var(--foreground)] truncate",t),...n}));r.displayName="ListItemTitle";const a=m.forwardRef(({className:t,...n},o)=>e.jsx("p",{ref:o,className:c("text-sm text-[var(--foreground-muted)] truncate",t),...n}));a.displayName="ListItemDescription";const j=m.forwardRef(({className:t,...n},o)=>e.jsx("div",{ref:o,className:c("shrink-0",t),...n}));j.displayName="ListItemAction";d.__docgenInfo={description:`List component following SmartSenior Design System

Flexible list with various styles`,methods:[],displayName:"List",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'divided'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'divided'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{interactive:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"ListItemIcon"};s.__docgenInfo={description:"",methods:[],displayName:"ListItemContent"};r.__docgenInfo={description:"",methods:[],displayName:"ListItemTitle"};a.__docgenInfo={description:"",methods:[],displayName:"ListItemDescription"};j.__docgenInfo={description:"",methods:[],displayName:"ListItemAction"};const G={title:"Components/List",component:d,tags:["autodocs"],parameters:{layout:"centered"}},I={render:()=>e.jsxs(d,{style:{width:"350px"},children:[e.jsx(i,{children:e.jsx(s,{children:e.jsx(r,{children:"Item 1"})})}),e.jsx(i,{children:e.jsx(s,{children:e.jsx(r,{children:"Item 2"})})}),e.jsx(i,{children:e.jsx(s,{children:e.jsx(r,{children:"Item 3"})})})]})},L={render:()=>e.jsxs(d,{variant:"bordered",style:{width:"350px"},children:[e.jsx(i,{children:e.jsxs(s,{children:[e.jsx(r,{children:"Item 1"}),e.jsx(a,{children:"Descrição do item 1"})]})}),e.jsx(i,{children:e.jsxs(s,{children:[e.jsx(r,{children:"Item 2"}),e.jsx(a,{children:"Descrição do item 2"})]})}),e.jsx(i,{children:e.jsxs(s,{children:[e.jsx(r,{children:"Item 3"}),e.jsx(a,{children:"Descrição do item 3"})]})})]})},h={render:()=>e.jsxs(d,{variant:"divided",style:{width:"350px"},children:[e.jsx(i,{children:e.jsx(s,{children:e.jsx(r,{children:"Configurações"})})}),e.jsx(i,{children:e.jsx(s,{children:e.jsx(r,{children:"Privacidade"})})}),e.jsx(i,{children:e.jsx(s,{children:e.jsx(r,{children:"Notificações"})})})]})},p={render:()=>e.jsxs(d,{variant:"bordered",style:{width:"350px"},children:[e.jsxs(i,{interactive:!0,children:[e.jsx(u,{children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),e.jsxs(s,{children:[e.jsx(r,{children:"Perfil"}),e.jsx(a,{children:"Gerencie suas informações"})]})]}),e.jsxs(i,{interactive:!0,children:[e.jsx(u,{children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}),e.jsxs(s,{children:[e.jsx(r,{children:"Configurações"}),e.jsx(a,{children:"Preferências do sistema"})]})]})]})},x={render:()=>e.jsxs(d,{variant:"bordered",style:{width:"400px"},children:[e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Documento.pdf"}),e.jsx(a,{children:"2.4 MB • Enviado há 2 dias"})]}),e.jsx(j,{children:e.jsx(f,{variant:"ghost",size:"sm",children:"Download"})})]}),e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Imagem.png"}),e.jsx(a,{children:"1.2 MB • Enviado há 5 dias"})]}),e.jsx(j,{children:e.jsx(f,{variant:"ghost",size:"sm",children:"Download"})})]})]})};var g,C,y;I.parameters={...I.parameters,docs:{...(g=I.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <List style={{
    width: '350px'
  }}>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 1</ListItemTitle>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 2</ListItemTitle>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 3</ListItemTitle>
        </ListItemContent>
      </ListItem>
    </List>
}`,...(y=(C=I.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var w,D,T;L.parameters={...L.parameters,docs:{...(w=L.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <List variant="bordered" style={{
    width: '350px'
  }}>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 1</ListItemTitle>
          <ListItemDescription>Descrição do item 1</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 2</ListItemTitle>
          <ListItemDescription>Descrição do item 2</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 3</ListItemTitle>
          <ListItemDescription>Descrição do item 3</ListItemDescription>
        </ListItemContent>
      </ListItem>
    </List>
}`,...(T=(D=L.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var N,b,B;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <List variant="divided" style={{
    width: '350px'
  }}>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Configurações</ListItemTitle>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Privacidade</ListItemTitle>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Notificações</ListItemTitle>
        </ListItemContent>
      </ListItem>
    </List>
}`,...(B=(b=h.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var _,A,k;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <List variant="bordered" style={{
    width: '350px'
  }}>
      <ListItem interactive>
        <ListItemIcon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </ListItemIcon>
        <ListItemContent>
          <ListItemTitle>Perfil</ListItemTitle>
          <ListItemDescription>Gerencie suas informações</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem interactive>
        <ListItemIcon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </ListItemIcon>
        <ListItemContent>
          <ListItemTitle>Configurações</ListItemTitle>
          <ListItemDescription>Preferências do sistema</ListItemDescription>
        </ListItemContent>
      </ListItem>
    </List>
}`,...(k=(A=p.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var H,M,R;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <List variant="bordered" style={{
    width: '400px'
  }}>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Documento.pdf</ListItemTitle>
          <ListItemDescription>2.4 MB • Enviado há 2 dias</ListItemDescription>
        </ListItemContent>
        <ListItemAction>
          <Button variant="ghost" size="sm">Download</Button>
        </ListItemAction>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Imagem.png</ListItemTitle>
          <ListItemDescription>1.2 MB • Enviado há 5 dias</ListItemDescription>
        </ListItemContent>
        <ListItemAction>
          <Button variant="ghost" size="sm">Download</Button>
        </ListItemAction>
      </ListItem>
    </List>
}`,...(R=(M=x.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const F=["Default","Bordered","Divided","WithIcons","WithActions"];export{L as Bordered,I as Default,h as Divided,x as WithActions,p as WithIcons,F as __namedExportsOrder,G as default};
