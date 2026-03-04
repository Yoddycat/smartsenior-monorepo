import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-Dx_1l3Sb.js";import{M as w,a as N,b,c as I,d as M,e as R,f as _}from"./modal-cAP5x3_h.js";import{B as a}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";const m=n.forwardRef(({open:t,onClose:r,title:f,description:s,children:i,className:g},x)=>e.jsxs(w,{ref:x,open:t,onClose:r,className:g,children:[e.jsx(N,{onClose:r}),e.jsxs(b,{children:[e.jsx(I,{children:f}),s&&e.jsx(M,{children:s})]}),i&&e.jsx(R,{children:i})]}));m.displayName="Dialog";const o=n.forwardRef(({open:t,onClose:r,onConfirm:f,title:s,description:i,confirmText:g="Confirmar",cancelText:x="Cancelar",variant:F="default"},z)=>e.jsxs(w,{ref:z,open:t,onClose:r,size:"sm",children:[e.jsxs(b,{children:[e.jsx(I,{children:s}),e.jsx(M,{children:i})]}),e.jsxs(_,{children:[e.jsx(a,{variant:"ghost",onClick:r,children:x}),e.jsx(a,{variant:F==="danger"?"destructive":"primary",onClick:()=>{f(),r()},children:g})]})]}));o.displayName="AlertDialog";m.__docgenInfo={description:`Dialog component following SmartSenior Design System

Simple dialog wrapper around Modal for common use cases`,methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:`AlertDialog component following SmartSenior Design System

Confirmation dialog with action buttons`,methods:[],displayName:"AlertDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Confirmar'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancelar'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const U={title:"Components/Dialog",component:m,tags:["autodocs"],parameters:{layout:"centered"}},l={render:()=>{const[t,r]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Abrir Dialog"}),e.jsx(m,{open:t,onClose:()=>r(!1),title:"Informação",description:"Este é um dialog simples para exibir informações.",children:e.jsx("p",{children:"Você pode adicionar qualquer conteúdo aqui dentro."})})]})}},c={render:()=>{const[t,r]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Abrir Alert Dialog"}),e.jsx(o,{open:t,onClose:()=>r(!1),onConfirm:()=>alert("Confirmado!"),title:"Confirmar Ação",description:"Tem certeza que deseja continuar com esta ação?"})]})}},d={render:()=>{const[t,r]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"destructive",onClick:()=>r(!0),children:"Excluir Item"}),e.jsx(o,{open:t,onClose:()=>r(!1),onConfirm:()=>alert("Item excluído!"),title:"Excluir Item",description:"Esta ação não pode ser desfeita. O item será permanentemente removido.",confirmText:"Excluir",cancelText:"Cancelar",variant:"danger"})]})}},u={render:()=>{const[t,r]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",onClick:()=>r(!0),children:"Sair da Conta"}),e.jsx(o,{open:t,onClose:()=>r(!1),onConfirm:()=>alert("Logout realizado!"),title:"Sair da Conta",description:"Você será desconectado e precisará fazer login novamente.",confirmText:"Sair",cancelText:"Voltar"})]})}},p={render:()=>{const[t,r]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>r(!0),children:"Fechar sem Salvar"}),e.jsx(o,{open:t,onClose:()=>r(!1),onConfirm:()=>alert("Alterações descartadas!"),title:"Alterações não salvas",description:"Você tem alterações não salvas. Deseja descartar e continuar?",confirmText:"Descartar",cancelText:"Voltar e Salvar",variant:"danger"})]})}};var C,v,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Abrir Dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Informação" description="Este é um dialog simples para exibir informações.">
          <p>Você pode adicionar qualquer conteúdo aqui dentro.</p>
        </Dialog>
      </>;
  }
}`,...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var j,S,h;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Abrir Alert Dialog</Button>
        <AlertDialog open={open} onClose={() => setOpen(false)} onConfirm={() => alert('Confirmado!')} title="Confirmar Ação" description="Tem certeza que deseja continuar com esta ação?" />
      </>;
  }
}`,...(h=(S=c.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var T,y,A;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Excluir Item
        </Button>
        <AlertDialog open={open} onClose={() => setOpen(false)} onConfirm={() => alert('Item excluído!')} title="Excluir Item" description="Esta ação não pode ser desfeita. O item será permanentemente removido." confirmText="Excluir" cancelText="Cancelar" variant="danger" />
      </>;
  }
}`,...(A=(y=d.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var O,q,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Sair da Conta
        </Button>
        <AlertDialog open={open} onClose={() => setOpen(false)} onConfirm={() => alert('Logout realizado!')} title="Sair da Conta" description="Você será desconectado e precisará fazer login novamente." confirmText="Sair" cancelText="Voltar" />
      </>;
  }
}`,...(E=(q=u.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var V,k,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Fechar sem Salvar</Button>
        <AlertDialog open={open} onClose={() => setOpen(false)} onConfirm={() => alert('Alterações descartadas!')} title="Alterações não salvas" description="Você tem alterações não salvas. Deseja descartar e continuar?" confirmText="Descartar" cancelText="Voltar e Salvar" variant="danger" />
      </>;
  }
}`,...(B=(k=p.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const W=["Default","AlertDialogDefault","AlertDialogDanger","ConfirmLogout","SaveChanges"];export{d as AlertDialogDanger,c as AlertDialogDefault,u as ConfirmLogout,l as Default,p as SaveChanges,W as __namedExportsOrder,U as default};
