(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});n(53);var r=n(6),a=n.n(r),o=n(0),i=n.n(o),l=n(11),c=n.n(l),m=n(166),s=n(163),p=n.n(s),u=n(158),d=n(159),g=n.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.pathContext,t=e.posts,n=e.tagName,r=t?t.length:0,a=r+" post"+(1===r?"":"s")+' tagged with "'+n+'"';return i.a.createElement(m.e,null,i.a.createElement(p.a,{title:"Tags | "+u.a.siteTitle}),i.a.createElement(m.d,null,i.a.createElement(c.a,{to:"/"},u.a.siteTitle),i.a.createElement(m.i,null,"Tag – ",n),i.a.createElement(m.j,{sectionTitle:!0,light:!0},a," (See ",i.a.createElement(c.a,{to:"/tags"},"all tags"),")")),i.a.createElement(m.l,null,i.a.createElement(m.c,null,t?t.map(function(e,t){return i.a.createElement(m.a,{title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt,slug:g()(e.frontmatter.title),timeToRead:e.timeToRead,category:e.frontmatter.category,key:t})}):null)))},t}(i.a.PureComponent)},157:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},158:function(e,t,n){"use strict";t.a={pathPrefix:"/",siteTitle:"Typescript Power Blog",siteTitleAlt:"Typescript Power Blog - Gatsby Starter",siteUrl:"https://samualle.github.io",siteLanguage:"en",siteBanner:"/assets/banner.jpg",defaultBg:"/assets/bg.png",favicon:"src/favicon.png",siteDescription:"Typescript Power Blog with big typography",author:"Samuel Wong",siteLogo:"/assets/logo.png",siteFBAppID:"",userTwitter:"",ogSiteName:"",ogLanguage:"en_US",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px",Google_Tag_Manager_ID:"GTM-MVP42QK",POST_PER_PAGE:4}},164:function(e){e.exports={data:{site:{buildTime:"2018.12.15"}}}},165:function(e,t,n){},166:function(e,t,n){"use strict";var r=n(6),a=n.n(r),o=n(0),i=n.n(o),l=n(156),c=n(38),m=n(159),s=n.n(m),p=(n(167),n(160)),u=n.n(p),d=l.c.div.withConfig({displayName:"Subline",componentId:"sc-1don4fe-0"})(["font-size:",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.light&&"color: "+u()(e.theme.colors.white,.7)},function(e){return e.sectionTitle&&"text-align: center"}),g=l.c.article.withConfig({displayName:"Article__Post",componentId:"r54n8f-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),f=l.c.h2.withConfig({displayName:"Article__Title",componentId:"r54n8f-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),h=l.c.span.withConfig({displayName:"Article__Initiale",componentId:"r54n8f-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),b=l.c.p.withConfig({displayName:"Article__Excerpt",componentId:"r54n8f-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,r=e.excerpt,a=e.slug,o=e.timeToRead,l=e.category,m=t.charAt(0);return i.a.createElement(g,null,i.a.createElement(f,null,i.a.createElement(h,null,m),i.a.createElement(c.Link,{to:"/blog/"+a},t)),i.a.createElement(d,null,n," — ",o," Min Read — In",i.a.createElement(c.Link,{to:"/categories/"+s()(l)}," ",l)),i.a.createElement(b,null,r))},t}(i.a.PureComponent),x=(n(162),n(161)),E=n.n(x),w=l.c.button.withConfig({displayName:"Button",componentId:"fho9be-0"})(["background:",";border:none;display:inline-flex;align-items:center;margin:0 0.5rem;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return E()(.3,e.theme.colors.primary)}),v=n(173),k=n(157),P=n(158),_=l.c.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1pk7kz9-0"})(["position:relative;background:linear-gradient( -185deg,",","," ),url(",") no-repeat;background-size:cover;padding:8rem 2rem 10rem;text-align:center;::after{background:transparent url(/assets/mask.svg) no-repeat bottom left;background-size:101%;bottom:-2px;content:'';display:block;height:100%;left:0;position:absolute;width:100%;}@media ","{padding:4rem 2rem 6rem;}@media ","{padding:1rem 0.5rem 2rem;}"],function(e){return u()(Object(v.a)(.1,e.theme.colors.primary),.6)},function(e){return u()(Object(v.b)(.1,e.theme.colors.grey.dark),.8)},function(e){return e.banner},k.a.tablet,k.a.phone),N=l.c.div.withConfig({displayName:"Header__Content",componentId:"sc-1pk7kz9-1"})(["position:relative;z-index:999;a{color:white;&:hover{opacity:0.85;color:white;}}"]),T=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement(_,{banner:this.props.banner||P.a.defaultBg},i.a.createElement(N,null,this.props.children))},t}(i.a.PureComponent),C=n(168),I=n.n(C),S=n(164),z={colors:{primary:"#72cc96",bg:"#fff",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"2.9rem"}},A=n(169),L=n.n(A);n(165);function B(){var e=I()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return B=function(){return e},e}var O=Object(l.b)(B(),z.colors.bg,z.colors.primary,z.colors.bg,z.colors.grey.default,k.a.phone,z.colors.grey.dark,z.transitions.normal,z.colors.primary,z.colors.grey.dark,z.colors.primary,z.colors.grey.dark),W=l.c.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-1dswc3f-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),j=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(c.StaticQuery,{query:"3370886529",render:function(t){return i.a.createElement(l.a,{theme:z},i.a.createElement(i.a.Fragment,null,i.a.createElement(O,null),e,i.a.createElement(W,null,"© ",L()(t.site.buildTime,".")[2]," by Samuel Wong. All rights reserved. ",i.a.createElement("br",null),i.a.createElement("a",{href:"https://github.com/samualle/samualle.github.io"},"GitHub Repository")," ",i.a.createElement("br",null),i.a.createElement("span",null,"Last build: ",t.site.buildTime))))},data:S})},t}(i.a.PureComponent),F=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-1ndbygb-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),D=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-1ndbygb-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),R=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-1ndbygb-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),U=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return i.a.createElement(F,null,t&&i.a.createElement(D,null,i.a.createElement("span",null,"上一篇"),i.a.createElement(c.Link,{to:"/blog/"+s()(t.frontmatter.path||t.frontmatter.title)},t.frontmatter.title)),n&&i.a.createElement(R,null,i.a.createElement("span",null,"下一篇"),i.a.createElement(c.Link,{to:"/blog/"+s()(n.frontmatter.path||n.frontmatter.title)},n.frontmatter.title)))},t}(i.a.PureComponent),G=l.c.div.withConfig({displayName:"SectionTitle",componentId:"sc-6i07is-0"})(["font-size:",";text-transform:",";text-align:center;color:",";position:relative;padding:2rem 0 0;margin-bottom:2rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.big},function(e){return e.uppercase?"uppercase":"normal"},function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),M=n(163),q=n.n(M),H=function(e){var t,n,r,a,o=e.postNode,l=e.postPath,c=e.postSEO,m="/"===P.a.pathPrefix?"":P.a.pathPrefix;c?(t=o.frontmatter.title,n=o.excerpt,r=P.a.siteBanner,a=P.a.siteUrl+m+l):(t=P.a.siteTitle,n=P.a.siteDescription,r=P.a.siteBanner);r=P.a.siteUrl+m+r;var s=P.a.siteUrl+P.a.pathPrefix,p=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:P.a.siteTitleAlt?P.a.siteTitleAlt:""}];return c&&(p=[{"@context":"http://schema.org","@type":"BlogPosting","@id":a,url:a,name:t,alternateName:P.a.siteTitleAlt?P.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:P.a.siteDescription,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:P.a.author},publisher:{"@type":"Organization",name:P.a.author,logo:{"@type":"ImageObject",url:P.a.siteUrl+m+P.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),i.a.createElement(q.a,null,i.a.createElement("html",{lang:P.a.siteLanguage}),i.a.createElement("title",null,P.a.siteTitle),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("meta",{name:"image",content:r}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),i.a.createElement("meta",{property:"og:locale",content:P.a.ogLanguage}),i.a.createElement("meta",{property:"og:site_name",content:P.a.ogSiteName?P.a.ogSiteName:""}),i.a.createElement("meta",{property:"og:url",content:c?a:s}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:n}),i.a.createElement("meta",{property:"og:image",content:r}),i.a.createElement("meta",{property:"fb:app_id",content:P.a.siteFBAppID?P.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:P.a.userTwitter?P.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:t}),i.a.createElement("meta",{name:"twitter:url",content:P.a.siteUrl}),i.a.createElement("meta",{name:"twitter:description",content:n}),i.a.createElement("meta",{name:"twitter:image",content:r}))},J=l.c.div.withConfig({displayName:"Wrapper",componentId:"eqkv0y-0"})(["display:flex;flex-direction:column;margin:0 auto;max-width:",";padding:",";@media ","{padding:",";}@media ","{padding:",";}"],function(e){return e.fullWidth?"100%":"100rem"},function(e){return e.fullWidth?"0":"0 6rem"},k.a.tablet,function(e){return e.fullWidth?"0":"0 3rem"},k.a.phone,function(e){return e.fullWidth?"0":"0 1rem"}),Q=l.c.div.withConfig({displayName:"Content",componentId:"b9laau-0"})(["box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 4rem;background-color:",";z-index:9000;margin-top:-4rem;form{p{label,input{display:block;}input{min-width:275px;}textarea{resize:vertical;min-height:150px;width:100%;}}}@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],function(e){return e.theme.colors.bg},k.a.tablet,k.a.phone),K=l.c.h3.withConfig({displayName:"Title",componentId:"sc-1f755z2-0"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),V=(n(79),n(170),n(171),n(172),l.c.div.withConfig({displayName:"Pagination__PaginationContainer",componentId:"osdkn4-0"})(["text-align:center;margin:2rem;}"])),Y=l.c.div.withConfig({displayName:"Pagination__PaginationContent",componentId:"osdkn4-1"})(["display:inline-block;padding:0 2.5rem;border-radius:3.5rem;background-color:#eee;@media ","{padding:0 1rem;}.page-numbers{display:block;float:left;transition:400ms ease;color:",";letter-spacing:0.1em;padding:1rem;&:hover,&.current{background-color:",";color:",";}&.prev{margin-left:-1.5rem;}&.next{margin-right:-1.5rem;}&.prev:hover,&.next:hover{background-color:transparent;color:",";}@media ","{padding:0 1.4rem;display:none;&:nth-of-type(2){position:relative;padding-right:5rem;&::after{content:'...';position:absolute;top:0;left:4.5rem;}}&:nth-child(-n + 3),&:nth-last-child(-n + 3){display:block;}&:nth-last-child(-n + 4){padding-right:1.4rem;&::after{content:none;}}}"],k.a.phone,z.colors.grey.light,E()(.2,z.colors.primary),z.colors.white,E()(.2,z.colors.primary),k.a.tablet),X=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,r=e.url,a=1===t,o=t===n,l=t-1==1?"/"+r+"/":"/"+r+"/"+(t-1).toString(),m="/"+r+"/"+(t+1).toString();return n>1?i.a.createElement(V,null,i.a.createElement(Y,null,!a&&i.a.createElement(c.Link,{className:"prev page-numbers",to:l,rel:"prev"},"← 上一页"),Array.from({length:n},function(e,n){return i.a.createElement(c.Link,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+r+"/"+(0===n?"":n+1)},n+1)}),!o&&i.a.createElement(c.Link,{className:"next page-numbers",to:m,rel:"next"},"下一页 →"))):null},t}(i.a.PureComponent);n.d(t,"a",function(){return y}),n.d(t,"b",function(){return w}),n.d(t,"d",function(){return T}),n.d(t,"e",function(){return j}),n.d(t,"g",function(){return U}),n.d(t,"i",function(){return G}),n.d(t,"h",function(){return H}),n.d(t,"j",function(){return d}),n.d(t,"l",function(){return J}),n.d(t,"c",function(){return Q}),n.d(t,"k",function(){return K}),n.d(t,"f",function(){return X})}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-cf2bed38f2a3a250f6ce.js.map