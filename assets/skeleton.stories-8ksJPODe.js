import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as re}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";function i(...r){return r.filter(Boolean).join(" ")}const t=re.forwardRef(({className:r,variant:s="default",width:n,height:l,animation:X="pulse",style:Y,...Z},$)=>{const ee={default:"rounded-md",circular:"rounded-full",rectangular:"rounded-none",text:"rounded-md h-4"},te={pulse:"animate-pulse",wave:"animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%]",none:""};return e.jsx("div",{ref:$,className:i("bg-[var(--background-muted)]",ee[s],te[X],r),style:{width:n,height:l,...Y},...Z})});t.displayName="Skeleton";const y=({lines:r=3,className:s})=>e.jsx("div",{className:i("space-y-2",s),children:Array.from({length:r}).map((n,l)=>e.jsx(t,{variant:"text",className:i("h-4",l===r-1&&"w-4/5")},l))});y.displayName="SkeletonText";const a=({size:r="md",className:s})=>{const n={sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16",xl:"w-24 h-24"};return e.jsx(t,{variant:"circular",className:i(n[r],s)})};a.displayName="SkeletonAvatar";const f=({className:r})=>e.jsxs("div",{className:i("rounded-lg border border-[var(--border)] p-6 space-y-4",r),children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"md"}),e.jsxs("div",{className:"space-y-2 flex-1",children:[e.jsx(t,{variant:"text",className:"h-4 w-1/3"}),e.jsx(t,{variant:"text",className:"h-3 w-1/2"})]})]}),e.jsx(y,{lines:3}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{className:"h-10 w-24"}),e.jsx(t,{className:"h-10 w-24"})]})]});f.displayName="SkeletonCard";t.__docgenInfo={description:`Skeleton component following SmartSenior Design System

Loading placeholder with animation`,methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'circular' | 'rectangular' | 'text'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'text'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | 'none'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'pulse'",computed:!1}}}};y.__docgenInfo={description:"",methods:[],displayName:"SkeletonText",props:{lines:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"SkeletonAvatar",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"SkeletonCard",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const le={title:"Components/Skeleton",component:t,tags:["autodocs"],parameters:{layout:"centered"}},d={args:{style:{width:"200px",height:"20px"}}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"var(--foreground-muted)",marginBottom:"0.5rem",display:"block"},children:"Default (rounded)"}),e.jsx(t,{style:{width:"200px",height:"40px"}})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"var(--foreground-muted)",marginBottom:"0.5rem",display:"block"},children:"Circular"}),e.jsx(t,{variant:"circular",style:{width:"60px",height:"60px"}})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"var(--foreground-muted)",marginBottom:"0.5rem",display:"block"},children:"Rectangular"}),e.jsx(t,{variant:"rectangular",style:{width:"200px",height:"100px"}})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"var(--foreground-muted)",marginBottom:"0.5rem",display:"block"},children:"Text"}),e.jsx(t,{variant:"text",style:{width:"150px"}})]})]})},m={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(y,{lines:4})})},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(a,{size:"sm"}),e.jsx(a,{size:"md"}),e.jsx(a,{size:"lg"}),e.jsx(a,{size:"xl"})]})},c={render:()=>e.jsx("div",{style:{width:"350px"},children:e.jsx(f,{})})},x={render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx(a,{size:"md"}),e.jsxs("div",{style:{flex:1},children:[e.jsx(t,{variant:"text",style:{width:"120px",marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",style:{width:"80px",height:"12px"}})]})]})},u={render:()=>e.jsxs("div",{style:{width:"280px",border:"1px solid var(--border)",borderRadius:"12px",overflow:"hidden"},children:[e.jsx(t,{variant:"rectangular",style:{width:"100%",height:"180px"}}),e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx(t,{variant:"text",style:{width:"60%",marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",style:{width:"80%",marginBottom:"1rem"}}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(t,{style:{width:"80px",height:"24px"}}),e.jsx(t,{style:{width:"100px",height:"40px"}})]})]})]})},h={render:()=>e.jsx("div",{style:{width:"500px"},children:[1,2,3].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",borderBottom:"1px solid var(--border)"},children:[e.jsx(a,{size:"sm"}),e.jsx(t,{variant:"text",style:{width:"120px"}}),e.jsx(t,{variant:"text",style:{width:"80px"}}),e.jsx(t,{variant:"text",style:{width:"100px"}}),e.jsx(t,{style:{width:"60px",height:"28px"}})]},r))})},v={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",width:"700px"},children:[1,2,3].map(r=>e.jsxs("div",{style:{padding:"1.5rem",border:"1px solid var(--border)",borderRadius:"12px"},children:[e.jsx(t,{variant:"text",style:{width:"60%",marginBottom:"1rem"}}),e.jsx(t,{style:{width:"80px",height:"32px",marginBottom:"0.5rem"}}),e.jsx(t,{variant:"text",style:{width:"40%",height:"12px"}})]},r))})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"200px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"var(--foreground-muted)",marginBottom:"0.5rem",display:"block"},children:"Pulse (default)"}),e.jsx(t,{animation:"pulse",style:{width:"100%",height:"40px"}})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"0.875rem",color:"var(--foreground-muted)",marginBottom:"0.5rem",display:"block"},children:"Sem animação"}),e.jsx(t,{animation:"none",style:{width:"100%",height:"40px"}})]})]})};var w,j,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    style: {
      width: '200px',
      height: '20px'
    }
  }
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var k,b,z;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      <div>
        <span style={{
        fontSize: '0.875rem',
        color: 'var(--foreground-muted)',
        marginBottom: '0.5rem',
        display: 'block'
      }}>
          Default (rounded)
        </span>
        <Skeleton style={{
        width: '200px',
        height: '40px'
      }} />
      </div>
      <div>
        <span style={{
        fontSize: '0.875rem',
        color: 'var(--foreground-muted)',
        marginBottom: '0.5rem',
        display: 'block'
      }}>
          Circular
        </span>
        <Skeleton variant="circular" style={{
        width: '60px',
        height: '60px'
      }} />
      </div>
      <div>
        <span style={{
        fontSize: '0.875rem',
        color: 'var(--foreground-muted)',
        marginBottom: '0.5rem',
        display: 'block'
      }}>
          Rectangular
        </span>
        <Skeleton variant="rectangular" style={{
        width: '200px',
        height: '100px'
      }} />
      </div>
      <div>
        <span style={{
        fontSize: '0.875rem',
        color: 'var(--foreground-muted)',
        marginBottom: '0.5rem',
        display: 'block'
      }}>
          Text
        </span>
        <Skeleton variant="text" style={{
        width: '150px'
      }} />
      </div>
    </div>
}`,...(z=(b=o.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var B,N,T;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <SkeletonText lines={4} />
    </div>
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var C,A,I;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" />
      <SkeletonAvatar size="xl" />
    </div>
}`,...(I=(A=p.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var _,D,R;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '350px'
  }}>
      <SkeletonCard />
    </div>
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var q,V,P;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }}>
      <SkeletonAvatar size="md" />
      <div style={{
      flex: 1
    }}>
        <Skeleton variant="text" style={{
        width: '120px',
        marginBottom: '0.5rem'
      }} />
        <Skeleton variant="text" style={{
        width: '80px',
        height: '12px'
      }} />
      </div>
    </div>
}`,...(P=(V=x.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var E,L,U;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    overflow: 'hidden'
  }}>
      <Skeleton variant="rectangular" style={{
      width: '100%',
      height: '180px'
    }} />
      <div style={{
      padding: '1rem'
    }}>
        <Skeleton variant="text" style={{
        width: '60%',
        marginBottom: '0.5rem'
      }} />
        <Skeleton variant="text" style={{
        width: '80%',
        marginBottom: '1rem'
      }} />
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <Skeleton style={{
          width: '80px',
          height: '24px'
        }} />
          <Skeleton style={{
          width: '100px',
          height: '40px'
        }} />
        </div>
      </div>
    </div>
}`,...(U=(L=u.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var O,F,G;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>
      {[1, 2, 3].map(row => <div key={row} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      borderBottom: '1px solid var(--border)'
    }}>
          <SkeletonAvatar size="sm" />
          <Skeleton variant="text" style={{
        width: '120px'
      }} />
          <Skeleton variant="text" style={{
        width: '80px'
      }} />
          <Skeleton variant="text" style={{
        width: '100px'
      }} />
          <Skeleton style={{
        width: '60px',
        height: '28px'
      }} />
        </div>)}
    </div>
}`,...(G=(F=h.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    width: '700px'
  }}>
      {[1, 2, 3].map(card => <div key={card} style={{
      padding: '1.5rem',
      border: '1px solid var(--border)',
      borderRadius: '12px'
    }}>
          <Skeleton variant="text" style={{
        width: '60%',
        marginBottom: '1rem'
      }} />
          <Skeleton style={{
        width: '80px',
        height: '32px',
        marginBottom: '0.5rem'
      }} />
          <Skeleton variant="text" style={{
        width: '40%',
        height: '12px'
      }} />
        </div>)}
    </div>
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '200px'
  }}>
      <div>
        <span style={{
        fontSize: '0.875rem',
        color: 'var(--foreground-muted)',
        marginBottom: '0.5rem',
        display: 'block'
      }}>
          Pulse (default)
        </span>
        <Skeleton animation="pulse" style={{
        width: '100%',
        height: '40px'
      }} />
      </div>
      <div>
        <span style={{
        fontSize: '0.875rem',
        color: 'var(--foreground-muted)',
        marginBottom: '0.5rem',
        display: 'block'
      }}>
          Sem animação
        </span>
        <Skeleton animation="none" style={{
        width: '100%',
        height: '40px'
      }} />
      </div>
    </div>
}`,...(W=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};const de=["Default","Variants","TextBlock","AvatarSizes","Card","UserListItem","ProductCard","TableRow","Dashboard","AnimationNone"];export{g as AnimationNone,p as AvatarSizes,c as Card,v as Dashboard,d as Default,u as ProductCard,h as TableRow,m as TextBlock,x as UserListItem,o as Variants,de as __namedExportsOrder,le as default};
