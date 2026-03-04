import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function g(...s){return s.filter(Boolean).join(" ")}const Ne=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m22 2-7 20-4-9-9-4Z"}),e.jsx("path",{d:"M22 2 11 13"})]}),De=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),A=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 8V4H8"}),e.jsx("rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}),e.jsx("path",{d:"M2 14h2"}),e.jsx("path",{d:"M20 14h2"}),e.jsx("path",{d:"M15 13v2"}),e.jsx("path",{d:"M9 13v2"})]}),Te=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),e.jsx("path",{d:"M3 3v5h5"}),e.jsx("path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}),e.jsx("path",{d:"M16 16h5v5"})]}),we=()=>e.jsx("div",{className:"flex items-center gap-1 px-4 py-3",children:e.jsxs("div",{className:"flex gap-1",children:[e.jsx("span",{className:"w-2 h-2 bg-[var(--foreground-muted)] rounded-full animate-bounce [animation-delay:-0.3s]"}),e.jsx("span",{className:"w-2 h-2 bg-[var(--foreground-muted)] rounded-full animate-bounce [animation-delay:-0.15s]"}),e.jsx("span",{className:"w-2 h-2 bg-[var(--foreground-muted)] rounded-full animate-bounce"})]})}),k=({message:s,showTimestamp:i=!0,showAvatar:a=!0,avatar:o,name:c,onRetry:l})=>{const t=s.role==="user",r=s.status==="error",n=u=>u?u.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):"",m=t?e.jsx(De,{}):e.jsx(A,{});return e.jsxs("div",{className:g("flex gap-3 px-4 py-2",t&&"flex-row-reverse"),children:[a&&e.jsx("div",{className:g("flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",t?"bg-[var(--primary)] text-white":"bg-[var(--background-muted)] text-[var(--foreground)]"),children:o||m}),e.jsxs("div",{className:g("flex flex-col gap-1 max-w-[75%]",t&&"items-end"),children:[c&&e.jsx("span",{className:"text-xs font-medium text-[var(--foreground-muted)]",children:c}),e.jsx("div",{className:g("px-4 py-3 rounded-2xl text-base leading-relaxed",t?"bg-[var(--primary)] text-white rounded-br-md":"bg-[var(--background-muted)] text-[var(--foreground)] rounded-bl-md",r&&"border-2 border-[var(--error)]"),children:e.jsx("p",{className:"whitespace-pre-wrap break-words",children:s.content})}),e.jsxs("div",{className:g("flex items-center gap-2",t&&"flex-row-reverse"),children:[i&&s.timestamp&&e.jsx("span",{className:"text-xs text-[var(--foreground-muted)]",children:n(s.timestamp)}),s.status==="sending"&&e.jsx("span",{className:"text-xs text-[var(--foreground-muted)]",children:"Enviando..."}),r&&l&&e.jsxs("button",{onClick:l,className:g("flex items-center gap-1 text-xs text-[var(--error)]","hover:underline focus:outline-none focus:underline"),children:[e.jsx(Te,{}),"Tentar novamente"]})]})]})]})};k.displayName="ChatBubble";const V=({onSend:s,placeholder:i="Digite sua mensagem...",disabled:a=!1,isLoading:o=!1,className:c})=>{const[l,t]=f.useState(""),r=f.useRef(null),n=()=>{const p=l.trim();p&&!a&&!o&&(s(p),t(""),r.current&&(r.current.style.height="auto"))},m=p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),n())},u=p=>{t(p.target.value),r.current&&(r.current.style.height="auto",r.current.style.height=`${Math.min(r.current.scrollHeight,150)}px`)};return e.jsxs("div",{className:g("flex items-end gap-2 p-4 border-t border-[var(--border)] bg-[var(--card)]",c),children:[e.jsx("textarea",{ref:r,value:l,onChange:u,onKeyDown:m,placeholder:i,disabled:a||o,rows:1,className:g("flex-1 resize-none px-4 py-3 rounded-xl text-base","bg-[var(--background)] border border-[var(--border)]","text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent","disabled:opacity-50 disabled:cursor-not-allowed","min-h-[48px] max-h-[150px]")}),e.jsx("button",{onClick:n,disabled:a||o||!l.trim(),className:g("flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center","bg-[var(--primary)] text-white","hover:bg-[var(--primary-hover)] transition-colors","focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2","disabled:opacity-50 disabled:cursor-not-allowed"),"aria-label":"Enviar mensagem",children:o?e.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):e.jsx(Ne,{})})]})};V.displayName="ChatInput";const Le=({prompts:s,onClick:i})=>e.jsx("div",{className:"flex flex-wrap gap-2 px-4 py-3",children:s.map((a,o)=>e.jsx("button",{onClick:()=>i(a),className:g("px-4 py-2 rounded-full text-sm","bg-[var(--background-muted)] text-[var(--foreground)]","border border-[var(--border)]","hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)]","focus:outline-none focus:ring-2 focus:ring-[var(--ring)]","transition-colors"),children:a},o))}),Ie=({message:s,assistantAvatar:i,assistantName:a="Assistente"})=>e.jsxs("div",{className:"flex flex-col items-center justify-center py-8 px-4 text-center",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center mb-4",children:i||e.jsx(A,{})}),e.jsx("h3",{className:"text-lg font-semibold text-[var(--foreground)] mb-2",children:a}),e.jsx("p",{className:"text-[var(--foreground-muted)] max-w-md",children:s})]}),x=({messages:s,onSendMessage:i,onRetry:a,isLoading:o=!1,placeholder:c="Digite sua mensagem...",disabled:l=!1,showTimestamp:t=!0,showAvatar:r=!0,userAvatar:n,assistantAvatar:m,assistantName:u="Assistente",userName:p="Você",welcomeMessage:R,suggestedPrompts:I,onSuggestedPromptClick:E,maxHeight:q=500,className:ye})=>{const P=f.useRef(null),je=f.useRef(null);f.useEffect(()=>{var d;(d=P.current)==null||d.scrollIntoView({behavior:"smooth"})},[s,o]);const be=d=>{E?E(d):i(d)},Me=s.length===0&&R,Ce=s.length===0&&I&&I.length>0;return e.jsxs("div",{className:g("flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden",ye),children:[e.jsxs("div",{ref:je,className:"flex-1 overflow-y-auto",style:{maxHeight:typeof q=="number"?`${q}px`:q},children:[Me&&e.jsx(Ie,{message:R,assistantAvatar:m,assistantName:u}),Ce&&e.jsx(Le,{prompts:I,onClick:be}),s.filter(d=>d.role!=="system").map(d=>e.jsx(k,{message:d,showTimestamp:t,showAvatar:r,avatar:d.role==="user"?n:m,name:d.role==="user"?p:u,onRetry:a?()=>a(d.id):void 0},d.id)),o&&e.jsxs("div",{className:"flex gap-3 px-4 py-2",children:[r&&e.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-[var(--background-muted)] text-[var(--foreground)] flex items-center justify-center",children:m||e.jsx(A,{})}),e.jsx("div",{className:"bg-[var(--background-muted)] rounded-2xl rounded-bl-md",children:e.jsx(we,{})})]}),e.jsx("div",{ref:P})]}),e.jsx(V,{onSend:i,placeholder:c,disabled:l,isLoading:o})]})};x.displayName="AIChat";x.__docgenInfo={description:"",methods:[],displayName:"AIChat",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"ChatMessage"}],raw:"ChatMessage[]"},description:""},onSendMessage:{required:!0,tsType:{name:"signature",type:"function",raw:"(content: string) => void",signature:{arguments:[{type:{name:"string"},name:"content"}],return:{name:"void"}}},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"(messageId: string) => void",signature:{arguments:[{type:{name:"string"},name:"messageId"}],return:{name:"void"}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Digite sua mensagem..."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTimestamp:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},userAvatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},assistantAvatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},assistantName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Assistente"',computed:!1}},userName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Você"',computed:!1}},welcomeMessage:{required:!1,tsType:{name:"string"},description:""},suggestedPrompts:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onSuggestedPromptClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},maxHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"500",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"ChatBubble",props:{message:{required:!0,tsType:{name:"ChatMessage"},description:""},showTimestamp:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};V.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(content: string) => void",signature:{arguments:[{type:{name:"string"},name:"content"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Digite sua mensagem..."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};we.__docgenInfo={description:"",methods:[],displayName:"TypingIndicator"};const Re={title:"Components/AIChat",component:x,parameters:{layout:"centered"},tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{})})]},h=[{id:"1",role:"assistant",content:"Olá! Como posso ajudar você hoje?",timestamp:new Date(Date.now()-6e4)},{id:"2",role:"user",content:"Preciso de ajuda para agendar uma consulta médica.",timestamp:new Date(Date.now()-5e4)},{id:"3",role:"assistant",content:"Claro! Posso ajudar com isso. Qual especialidade médica você está procurando?",timestamp:new Date(Date.now()-4e4)},{id:"4",role:"user",content:"Cardiologista",timestamp:new Date(Date.now()-3e4)},{id:"5",role:"assistant",content:"Encontrei 3 cardiologistas disponíveis na sua região. Você prefere atendimento presencial ou por telemedicina?",timestamp:new Date(Date.now()-2e4)}],v={args:{messages:h,onSendMessage:s=>console.log("Send:",s)}},S={args:{messages:[],onSendMessage:s=>console.log("Send:",s),welcomeMessage:"Olá! Sou seu assistente virtual. Como posso ajudar você hoje?",assistantName:"SmartSenior"}},w={args:{messages:[],onSendMessage:s=>console.log("Send:",s),welcomeMessage:"Olá! Sou seu assistente de saúde. Como posso ajudar?",suggestedPrompts:["Agendar consulta","Ver medicamentos","Falar com médico","Dúvidas frequentes"]}},y={args:{messages:[{id:"1",role:"user",content:"Qual é o horário de funcionamento da clínica?",timestamp:new Date}],onSendMessage:s=>console.log("Send:",s),isLoading:!0}},j={args:{messages:[{id:"1",role:"user",content:"Agendar consulta para amanhã",timestamp:new Date,status:"error"}],onSendMessage:s=>console.log("Send:",s),onRetry:s=>console.log("Retry:",s)}},b={args:{messages:h,onSendMessage:s=>console.log("Send:",s),showTimestamp:!1}},M={args:{messages:h,onSendMessage:s=>console.log("Send:",s),showAvatar:!1}},C={args:{messages:h,onSendMessage:s=>console.log("Send:",s),assistantName:"Dr. SmartSenior",userName:"Paciente"}},N={args:{messages:h,onSendMessage:s=>console.log("Send:",s),disabled:!0}},D={args:{messages:h,onSendMessage:s=>console.log("Send:",s),maxHeight:600},decorators:[s=>e.jsx("div",{style:{width:"450px"},children:e.jsx(s,{})})]},T={render:function(){const[i,a]=f.useState([]),[o,c]=f.useState(!1),l=async t=>{const r={id:Date.now().toString(),role:"user",content:t,timestamp:new Date,status:"sent"};a(n=>[...n,r]),c(!0),setTimeout(()=>{const n=["Entendi sua solicitação. Deixe-me verificar...","Claro! Posso ajudar com isso.","Essa é uma ótima pergunta! Vou buscar as informações.","Obrigado por entrar em contato. Vou processar seu pedido."],m={id:(Date.now()+1).toString(),role:"assistant",content:n[Math.floor(Math.random()*n.length)],timestamp:new Date};a(u=>[...u,m]),c(!1)},1500)};return e.jsx(x,{messages:i,onSendMessage:l,isLoading:o,welcomeMessage:"Olá! Sou o assistente virtual SmartSenior. Como posso ajudar você hoje?",assistantName:"SmartSenior",suggestedPrompts:["Agendar consulta","Meus medicamentos","Falar com atendente"]})}},L={render:function(){const[i,a]=f.useState([{id:"1",role:"assistant",content:"Bom dia! Sou a assistente de saúde SmartSenior. Vi que você tem uma consulta agendada para amanhã às 14h com Dr. Carlos (Cardiologista). Posso ajudar com algo?",timestamp:new Date}]),[o,c]=f.useState(!1),l=t=>{const r={id:Date.now().toString(),role:"user",content:t,timestamp:new Date};a(n=>[...n,r]),c(!0),setTimeout(()=>{let n="Entendi. Vou verificar isso para você.";t.toLowerCase().includes("remarcar")?n=`Claro! Encontrei os seguintes horários disponíveis com Dr. Carlos:

• Quinta-feira, 10h
• Sexta-feira, 15h30
• Segunda-feira, 9h

Qual horário prefere?`:t.toLowerCase().includes("cancelar")?n="Você tem certeza que deseja cancelar a consulta de amanhã com Dr. Carlos? Esta ação pode gerar taxa de cancelamento.":t.toLowerCase().includes("medicamento")&&(n=`Seus medicamentos atuais:

💊 Losartana 50mg - 1x ao dia (manhã)
💊 AAS 100mg - 1x ao dia (almoço)
💊 Sinvastatina 20mg - 1x ao dia (noite)

Lembre-se de não interromper o uso sem orientação médica.`);const m={id:(Date.now()+1).toString(),role:"assistant",content:n,timestamp:new Date};a(u=>[...u,m]),c(!1)},1200)};return e.jsx("div",{style:{width:"420px"},children:e.jsx(x,{messages:i,onSendMessage:l,isLoading:o,assistantName:"Assistente de Saúde",maxHeight:450})})}};var B,H,O;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    onSendMessage: content => console.log('Send:', content)
  }
}`,...(O=(H=v.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var W,_,Q;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    messages: [],
    onSendMessage: content => console.log('Send:', content),
    welcomeMessage: 'Olá! Sou seu assistente virtual. Como posso ajudar você hoje?',
    assistantName: 'SmartSenior'
  }
}`,...(Q=(_=S.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var F,z,K;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    messages: [],
    onSendMessage: content => console.log('Send:', content),
    welcomeMessage: 'Olá! Sou seu assistente de saúde. Como posso ajudar?',
    suggestedPrompts: ['Agendar consulta', 'Ver medicamentos', 'Falar com médico', 'Dúvidas frequentes']
  }
}`,...(K=(z=w.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var U,$,Z;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    messages: [{
      id: '1',
      role: 'user',
      content: 'Qual é o horário de funcionamento da clínica?',
      timestamp: new Date()
    }],
    onSendMessage: content => console.log('Send:', content),
    isLoading: true
  }
}`,...(Z=($=y.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};var G,J,X;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    messages: [{
      id: '1',
      role: 'user',
      content: 'Agendar consulta para amanhã',
      timestamp: new Date(),
      status: 'error'
    }],
    onSendMessage: content => console.log('Send:', content),
    onRetry: id => console.log('Retry:', id)
  }
}`,...(X=(J=j.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,ee,se;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    onSendMessage: content => console.log('Send:', content),
    showTimestamp: false
  }
}`,...(se=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,te,ne;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    onSendMessage: content => console.log('Send:', content),
    showAvatar: false
  }
}`,...(ne=(te=M.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,oe,ie;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    onSendMessage: content => console.log('Send:', content),
    assistantName: 'Dr. SmartSenior',
    userName: 'Paciente'
  }
}`,...(ie=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var de,ce,le;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    onSendMessage: content => console.log('Send:', content),
    disabled: true
  }
}`,...(le=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,ue,ge;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    onSendMessage: content => console.log('Send:', content),
    maxHeight: 600
  },
  decorators: [Story => <div style={{
    width: '450px'
  }}>
        <Story />
      </div>]
}`,...(ge=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var pe,fe,he;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: function InteractiveChat() {
    const [messages, setMessages] = React.useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const handleSend = async (content: string) => {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content,
        timestamp: new Date(),
        status: 'sent'
      };
      setMessages(prev => [...prev, userMessage]);
      setIsLoading(true);

      // Simulate AI response
      setTimeout(() => {
        const responses = ['Entendi sua solicitação. Deixe-me verificar...', 'Claro! Posso ajudar com isso.', 'Essa é uma ótima pergunta! Vou buscar as informações.', 'Obrigado por entrar em contato. Vou processar seu pedido.'];
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1500);
    };
    return <AIChat messages={messages} onSendMessage={handleSend} isLoading={isLoading} welcomeMessage="Olá! Sou o assistente virtual SmartSenior. Como posso ajudar você hoje?" assistantName="SmartSenior" suggestedPrompts={['Agendar consulta', 'Meus medicamentos', 'Falar com atendente']} />;
  }
}`,...(he=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var xe,ve,Se;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: function HealthAssistant() {
    const [messages, setMessages] = React.useState<ChatMessage[]>([{
      id: '1',
      role: 'assistant',
      content: 'Bom dia! Sou a assistente de saúde SmartSenior. Vi que você tem uma consulta agendada para amanhã às 14h com Dr. Carlos (Cardiologista). Posso ajudar com algo?',
      timestamp: new Date()
    }]);
    const [isLoading, setIsLoading] = React.useState(false);
    const handleSend = (content: string) => {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      setIsLoading(true);
      setTimeout(() => {
        let response = 'Entendi. Vou verificar isso para você.';
        if (content.toLowerCase().includes('remarcar')) {
          response = 'Claro! Encontrei os seguintes horários disponíveis com Dr. Carlos:\\n\\n• Quinta-feira, 10h\\n• Sexta-feira, 15h30\\n• Segunda-feira, 9h\\n\\nQual horário prefere?';
        } else if (content.toLowerCase().includes('cancelar')) {
          response = 'Você tem certeza que deseja cancelar a consulta de amanhã com Dr. Carlos? Esta ação pode gerar taxa de cancelamento.';
        } else if (content.toLowerCase().includes('medicamento')) {
          response = 'Seus medicamentos atuais:\\n\\n💊 Losartana 50mg - 1x ao dia (manhã)\\n💊 AAS 100mg - 1x ao dia (almoço)\\n💊 Sinvastatina 20mg - 1x ao dia (noite)\\n\\nLembre-se de não interromper o uso sem orientação médica.';
        }
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1200);
    };
    return <div style={{
      width: '420px'
    }}>
        <AIChat messages={messages} onSendMessage={handleSend} isLoading={isLoading} assistantName="Assistente de Saúde" maxHeight={450} />
      </div>;
  }
}`,...(Se=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};const Ee=["Default","Empty","WithSuggestedPrompts","Loading","WithError","NoTimestamps","NoAvatars","CustomNames","Disabled","TallChat","Interactive","HealthAssistant"];export{C as CustomNames,v as Default,N as Disabled,S as Empty,L as HealthAssistant,T as Interactive,y as Loading,M as NoAvatars,b as NoTimestamps,D as TallChat,j as WithError,w as WithSuggestedPrompts,Ee as __namedExportsOrder,Re as default};
