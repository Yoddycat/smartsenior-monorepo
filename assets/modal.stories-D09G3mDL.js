import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-Dx_1l3Sb.js";import{M as n,a as c,b as p,c as u,d as f,e as m,f as x}from"./modal-cAP5x3_h.js";import{B as a}from"./button-SCXP6LJl.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";const P={title:"Components/Modal",component:n,tags:["autodocs"],parameters:{layout:"centered"}},r={render:()=>{const[t,o]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Abrir Modal"}),e.jsxs(n,{open:t,onClose:()=>o(!1),children:[e.jsx(c,{onClose:()=>o(!1)}),e.jsxs(p,{children:[e.jsx(u,{children:"Título do Modal"}),e.jsx(f,{children:"Esta é uma descrição do modal explicando seu propósito."})]}),e.jsx(m,{children:e.jsx("p",{children:"Conteúdo do modal vai aqui. Você pode adicionar qualquer elemento."})}),e.jsxs(x,{children:[e.jsx(a,{variant:"ghost",onClick:()=>o(!1),children:"Cancelar"}),e.jsx(a,{variant:"primary",onClick:()=>o(!1),children:"Confirmar"})]})]})]})}},l={render:()=>{const[t,o]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Modal Pequeno"}),e.jsxs(n,{open:t,onClose:()=>o(!1),size:"sm",children:[e.jsx(c,{onClose:()=>o(!1)}),e.jsx(p,{children:e.jsx(u,{children:"Confirmação"})}),e.jsx(m,{children:e.jsx("p",{children:"Tem certeza que deseja continuar?"})}),e.jsxs(x,{children:[e.jsx(a,{variant:"ghost",onClick:()=>o(!1),children:"Não"}),e.jsx(a,{variant:"primary",onClick:()=>o(!1),children:"Sim"})]})]})]})}},s={render:()=>{const[t,o]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Modal Grande"}),e.jsxs(n,{open:t,onClose:()=>o(!1),size:"lg",children:[e.jsx(c,{onClose:()=>o(!1)}),e.jsxs(p,{children:[e.jsx(u,{children:"Termos de Uso"}),e.jsx(f,{children:"Por favor, leia atentamente os termos abaixo."})]}),e.jsx(m,{children:e.jsxs("div",{style:{maxHeight:"300px",overflow:"auto"},children:[e.jsx("p",{style:{marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx("p",{style:{marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})}),e.jsxs(x,{children:[e.jsx(a,{variant:"ghost",onClick:()=>o(!1),children:"Recusar"}),e.jsx(a,{variant:"primary",onClick:()=>o(!1),children:"Aceitar"})]})]})]})}},i={render:()=>{const[t,o]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Editar Perfil"}),e.jsxs(n,{open:t,onClose:()=>o(!1),children:[e.jsx(c,{onClose:()=>o(!1)}),e.jsxs(p,{children:[e.jsx(u,{children:"Editar Perfil"}),e.jsx(f,{children:"Atualize suas informações pessoais."})]}),e.jsx(m,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Nome"}),e.jsx("input",{type:"text",defaultValue:"João da Silva",style:{width:"100%",height:"48px",padding:"0 16px",border:"1px solid var(--border)",borderRadius:"8px",fontSize:"16px"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Email"}),e.jsx("input",{type:"email",defaultValue:"joao@email.com",style:{width:"100%",height:"48px",padding:"0 16px",border:"1px solid var(--border)",borderRadius:"8px",fontSize:"16px"}})]})]})}),e.jsxs(x,{children:[e.jsx(a,{variant:"ghost",onClick:()=>o(!1),children:"Cancelar"}),e.jsx(a,{variant:"primary",onClick:()=>o(!1),children:"Salvar"})]})]})]})}};var h,M,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Abrir Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalClose onClose={() => setOpen(false)} />
          <ModalHeader>
            <ModalTitle>Título do Modal</ModalTitle>
            <ModalDescription>
              Esta é uma descrição do modal explicando seu propósito.
            </ModalDescription>
          </ModalHeader>
          <ModalContent>
            <p>Conteúdo do modal vai aqui. Você pode adicionar qualquer elemento.</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Confirmar
            </Button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...(C=(M=r.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var j,g,v;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Modal Pequeno</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm">
          <ModalClose onClose={() => setOpen(false)} />
          <ModalHeader>
            <ModalTitle>Confirmação</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <p>Tem certeza que deseja continuar?</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Não</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Sim</Button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,B,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Modal Grande</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="lg">
          <ModalClose onClose={() => setOpen(false)} />
          <ModalHeader>
            <ModalTitle>Termos de Uso</ModalTitle>
            <ModalDescription>
              Por favor, leia atentamente os termos abaixo.
            </ModalDescription>
          </ModalHeader>
          <ModalContent>
            <div style={{
            maxHeight: '300px',
            overflow: 'auto'
          }}>
              <p style={{
              marginBottom: '1rem'
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{
              marginBottom: '1rem'
            }}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Recusar</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Aceitar</Button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var S,O,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Editar Perfil</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalClose onClose={() => setOpen(false)} />
          <ModalHeader>
            <ModalTitle>Editar Perfil</ModalTitle>
            <ModalDescription>
              Atualize suas informações pessoais.
            </ModalDescription>
          </ModalHeader>
          <ModalContent>
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
                  Nome
                </label>
                <input type="text" defaultValue="João da Silva" style={{
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
                  Email
                </label>
                <input type="email" defaultValue="joao@email.com" style={{
                width: '100%',
                height: '48px',
                padding: '0 16px',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '16px'
              }} />
              </div>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Salvar</Button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...(k=(O=i.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const R=["Default","SmallSize","LargeSize","FormModal"];export{r as Default,i as FormModal,s as LargeSize,l as SmallSize,R as __namedExportsOrder,P as default};
