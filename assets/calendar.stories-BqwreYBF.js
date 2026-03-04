import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function v(...c){return c.filter(Boolean).join(" ")}const Ae=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],Oe=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],We=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],Pe=["January","February","March","April","May","June","July","August","September","October","November","December"],w=({value:c,defaultValue:a,onChange:i,onMonthChange:s,minDate:u,maxDate:m,disabledDates:x=[],highlightedDates:A=[],showOutsideDays:y=!0,weekStartsOn:l=0,locale:f="pt-BR",className:je})=>{const[P,V]=g.useState(c||a),[n,O]=g.useState(c||a||new Date),S=f.startsWith("pt"),_=S?Ae:Oe,Ce=S?We:Pe,Me=[..._.slice(l),..._.slice(0,l)];g.useEffect(()=>{c!==void 0&&(V(c),O(c))},[c]);const J=e=>new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),ke=e=>(new Date(e.getFullYear(),e.getMonth(),1).getDay()-l+7)%7,b=(e,d)=>e.getDate()===d.getDate()&&e.getMonth()===d.getMonth()&&e.getFullYear()===d.getFullYear(),Ee=e=>b(e,new Date),N=e=>u&&e<new Date(u.setHours(0,0,0,0))||m&&e>new Date(m.setHours(23,59,59,999))?!0:x.some(d=>b(d,e)),Re=e=>A.some(d=>b(d,e)),Te=e=>P?b(e,P):!1,Fe=()=>{const e=new Date(n.getFullYear(),n.getMonth()-1,1);O(e),s==null||s(e)},qe=()=>{const e=new Date(n.getFullYear(),n.getMonth()+1,1);O(e),s==null||s(e)},j=e=>{N(e)||(V(e),i==null||i(e))},W=(e,d)=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),j(d))},Le=()=>{const e=J(n),d=ke(n),Ye=J(new Date(n.getFullYear(),n.getMonth()-1,1)),D=[];for(let r=d-1;r>=0;r--){const o=Ye-r,p=new Date(n.getFullYear(),n.getMonth()-1,o);y?D.push(t.jsx("button",{type:"button",onClick:()=>j(p),onKeyDown:h=>W(h,p),disabled:N(p),className:v("h-11 w-11 rounded-lg text-sm font-medium transition-colors","text-[var(--foreground-muted)] opacity-50","hover:bg-[var(--background-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2","disabled:pointer-events-none disabled:opacity-30"),children:o},`prev-${o}`)):D.push(t.jsx("div",{className:"h-11 w-11"},`prev-${o}`))}for(let r=1;r<=e;r++){const o=new Date(n.getFullYear(),n.getMonth(),r),p=N(o),h=Te(o),C=Ee(o),I=Re(o);D.push(t.jsx("button",{type:"button",onClick:()=>j(o),onKeyDown:He=>W(He,o),disabled:p,"aria-selected":h,"aria-current":C?"date":void 0,className:v("h-11 w-11 rounded-lg text-sm font-medium transition-colors","focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2","disabled:pointer-events-none disabled:opacity-30",h&&"bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]",!h&&C&&"border-2 border-[var(--primary)] text-[var(--primary)]",!h&&!C&&I&&"bg-[var(--accent)] text-[var(--accent-foreground)]",!h&&!C&&!I&&"text-[var(--foreground)] hover:bg-[var(--background-muted)]"),children:r},r))}const Be=42-D.length;for(let r=1;r<=Be;r++){const o=new Date(n.getFullYear(),n.getMonth()+1,r);y?D.push(t.jsx("button",{type:"button",onClick:()=>j(o),onKeyDown:p=>W(p,o),disabled:N(o),className:v("h-11 w-11 rounded-lg text-sm font-medium transition-colors","text-[var(--foreground-muted)] opacity-50","hover:bg-[var(--background-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2","disabled:pointer-events-none disabled:opacity-30"),children:r},`next-${r}`)):D.push(t.jsx("div",{className:"h-11 w-11"},`next-${r}`))}return D};return t.jsxs("div",{className:v("p-4 bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-sm",je),role:"application","aria-label":"Calendar",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("button",{type:"button",onClick:Fe,className:v("h-10 w-10 rounded-lg flex items-center justify-center","text-[var(--foreground)] hover:bg-[var(--background-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2","transition-colors"),"aria-label":S?"Mês anterior":"Previous month",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"m15 18-6-6 6-6"})})}),t.jsxs("h2",{className:"text-lg font-semibold text-[var(--foreground)]",children:[Ce[n.getMonth()]," ",n.getFullYear()]}),t.jsx("button",{type:"button",onClick:qe,className:v("h-10 w-10 rounded-lg flex items-center justify-center","text-[var(--foreground)] hover:bg-[var(--background-muted)]","focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2","transition-colors"),"aria-label":S?"Próximo mês":"Next month",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"m9 18 6-6-6-6"})})})]}),t.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:Me.map(e=>t.jsx("div",{className:"h-10 w-11 flex items-center justify-center text-sm font-medium text-[var(--foreground-muted)]",children:e},e))}),t.jsx("div",{className:"grid grid-cols-7 gap-1",role:"grid",children:Le()})]})};w.displayName="Calendar";w.__docgenInfo={description:`Calendar component following SmartSenior Design System

Accessible calendar with navigation and date selection`,methods:[],displayName:"Calendar",props:{value:{required:!1,tsType:{name:"Date"},description:""},defaultValue:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},onMonthChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"",defaultValue:{value:"[]",computed:!1}},highlightedDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"",defaultValue:{value:"[]",computed:!1}},showOutsideDays:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},weekStartsOn:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"",defaultValue:{value:"0",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'pt-BR'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Ke={title:"Components/Calendar",component:w,parameters:{layout:"centered"},tags:["autodocs"]},M={args:{}},k={args:{defaultValue:new Date}},E={args:{minDate:new Date,maxDate:new Date(Date.now()+720*60*60*1e3)}},R={args:{disabledDates:[new Date(Date.now()+2880*60*1e3),new Date(Date.now()+7200*60*1e3),new Date(Date.now()+11520*60*1e3)]}},T={args:{highlightedDates:[new Date(Date.now()+4320*60*1e3),new Date(Date.now()+10080*60*1e3),new Date(Date.now()+336*60*60*1e3)]}},F={args:{weekStartsOn:1}},q={args:{locale:"en-US"}},L={args:{showOutsideDays:!1}},Y={render:function(){const[a,i]=g.useState(new Date);return t.jsxs("div",{className:"space-y-4",children:[t.jsx(w,{value:a,onChange:i}),t.jsxs("p",{className:"text-center text-sm text-[var(--foreground-muted)]",children:["Data selecionada: ",(a==null?void 0:a.toLocaleDateString("pt-BR"))||"Nenhuma"]})]})}},B={render:function(){const[a,i]=g.useState(),[s,u]=g.useState(),[m,x]=g.useState("start"),A=l=>{m==="start"?(i(l),u(void 0),x("end")):a&&l>=a?(u(l),x("start")):(i(l),u(void 0))},y=()=>{if(!a||!s)return a?[a]:[];const l=[],f=new Date(a);for(;f<=s;)l.push(new Date(f)),f.setDate(f.getDate()+1);return l};return t.jsxs("div",{className:"space-y-4",children:[t.jsx(w,{value:m==="start"?a:s,onChange:A,highlightedDates:y()}),t.jsxs("div",{className:"text-center text-sm text-[var(--foreground-muted)] space-y-1",children:[t.jsxs("p",{children:["Início: ",(a==null?void 0:a.toLocaleDateString("pt-BR"))||"Selecione"]}),t.jsxs("p",{children:["Fim: ",(s==null?void 0:s.toLocaleDateString("pt-BR"))||"Selecione"]})]})]})}},H={render:function(){const a=[{date:new Date(Date.now()+864e5),title:"Reunião de equipe"},{date:new Date(Date.now()+2592e5),title:"Consulta médica"},{date:new Date(Date.now()+6048e5),title:"Aniversário"},{date:new Date(Date.now()+864e6),title:"Dentista"}],[i,s]=g.useState(),u=i?a.find(m=>m.date.getDate()===i.getDate()&&m.date.getMonth()===i.getMonth()):void 0;return t.jsxs("div",{className:"space-y-4",children:[t.jsx(w,{value:i,onChange:s,highlightedDates:a.map(m=>m.date)}),u?t.jsxs("div",{className:"p-3 bg-[var(--accent)] rounded-lg text-center",children:[t.jsx("p",{className:"text-sm font-medium text-[var(--foreground)]",children:u.title}),t.jsx("p",{className:"text-xs text-[var(--foreground-muted)]",children:u.date.toLocaleDateString("pt-BR")})]}):t.jsx("p",{className:"text-center text-sm text-[var(--foreground-muted)]",children:"Selecione uma data com evento (destacada)"})]})}};var K,$,Q;M.parameters={...M.parameters,docs:{...(K=M.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {}
}`,...(Q=($=M.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var U,z,G;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date()
  }
}`,...(G=(z=k.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var X,Z,ee;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    minDate: new Date(),
    maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
  }
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    disabledDates: [new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), new Date(Date.now() + 8 * 24 * 60 * 60 * 1000)]
  }
}`,...(ne=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,se,oe;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    highlightedDates: [new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)]
  }
}`,...(oe=(se=T.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,de,ce;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    weekStartsOn: 1
  }
}`,...(ce=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var le,ue,me;q.parameters={...q.parameters,docs:{...(le=q.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    locale: 'en-US'
  }
}`,...(me=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,De,pe;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    showOutsideDays: false
  }
}`,...(pe=(De=L.parameters)==null?void 0:De.docs)==null?void 0:pe.source}}};var he,fe,ve;Y.parameters={...Y.parameters,docs:{...(he=Y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: function ControlledCalendar() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <div className="space-y-4">
        <Calendar value={date} onChange={setDate} />
        <p className="text-center text-sm text-[var(--foreground-muted)]">
          Data selecionada: {date?.toLocaleDateString('pt-BR') || 'Nenhuma'}
        </p>
      </div>;
  }
}`,...(ve=(fe=Y.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,xe,ye;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: function DateRange() {
    const [startDate, setStartDate] = React.useState<Date | undefined>();
    const [endDate, setEndDate] = React.useState<Date | undefined>();
    const [selecting, setSelecting] = React.useState<'start' | 'end'>('start');
    const handleDateChange = (date: Date) => {
      if (selecting === 'start') {
        setStartDate(date);
        setEndDate(undefined);
        setSelecting('end');
      } else {
        if (startDate && date >= startDate) {
          setEndDate(date);
          setSelecting('start');
        } else {
          setStartDate(date);
          setEndDate(undefined);
        }
      }
    };
    const getHighlightedDates = () => {
      if (!startDate || !endDate) return startDate ? [startDate] : [];
      const dates: Date[] = [];
      const current = new Date(startDate);
      while (current <= endDate) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
      }
      return dates;
    };
    return <div className="space-y-4">
        <Calendar value={selecting === 'start' ? startDate : endDate} onChange={handleDateChange} highlightedDates={getHighlightedDates()} />
        <div className="text-center text-sm text-[var(--foreground-muted)] space-y-1">
          <p>Início: {startDate?.toLocaleDateString('pt-BR') || 'Selecione'}</p>
          <p>Fim: {endDate?.toLocaleDateString('pt-BR') || 'Selecione'}</p>
        </div>
      </div>;
  }
}`,...(ye=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var Se,be,Ne;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: function EventCalendar() {
    const events = [{
      date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      title: 'Reunião de equipe'
    }, {
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      title: 'Consulta médica'
    }, {
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      title: 'Aniversário'
    }, {
      date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      title: 'Dentista'
    }];
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
    const selectedEvent = selectedDate ? events.find(e => e.date.getDate() === selectedDate.getDate() && e.date.getMonth() === selectedDate.getMonth()) : undefined;
    return <div className="space-y-4">
        <Calendar value={selectedDate} onChange={setSelectedDate} highlightedDates={events.map(e => e.date)} />
        {selectedEvent ? <div className="p-3 bg-[var(--accent)] rounded-lg text-center">
            <p className="text-sm font-medium text-[var(--foreground)]">
              {selectedEvent.title}
            </p>
            <p className="text-xs text-[var(--foreground-muted)]">
              {selectedEvent.date.toLocaleDateString('pt-BR')}
            </p>
          </div> : <p className="text-center text-sm text-[var(--foreground-muted)]">
            Selecione uma data com evento (destacada)
          </p>}
      </div>;
  }
}`,...(Ne=(be=H.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};const $e=["Default","WithSelectedDate","WithMinMaxDate","WithDisabledDates","WithHighlightedDates","MondayStart","EnglishLocale","HideOutsideDays","Controlled","DateRangePicker","EventCalendar"];export{Y as Controlled,B as DateRangePicker,M as Default,q as EnglishLocale,H as EventCalendar,L as HideOutsideDays,F as MondayStart,R as WithDisabledDates,T as WithHighlightedDates,E as WithMinMaxDate,k as WithSelectedDate,$e as __namedExportsOrder,Ke as default};
