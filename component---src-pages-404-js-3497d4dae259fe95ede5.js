(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(197),o=a(194);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},162:function(e,t,a){var n;e.exports=(n=a(176))&&n.default||n},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Plan Finder"}}}}},176:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(61),d=a(2),s=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},177:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAaUlEQVQI1y3MsQpAUBTG8fsUJrvNYLFbDEoWgyixKZ7MZKAwKmVVZosX8ALn+qs7/M43fOccpbV20cOChwopMsSoEcBGiQQNQhSmj+CLiKMYo3nYocWLExsG7CZzXLi5OcgHE1bMWP6dDwCni2a9idAaAAAAAElFTkSuQmCC",width:300,height:33,src:"/taryn-delta/static/aa75283917291c36a4b01beba78b1e9e/85bb7/ddpaLogo.png",srcSet:"/taryn-delta/static/aa75283917291c36a4b01beba78b1e9e/85bb7/ddpaLogo.png 1x,\n/taryn-delta/static/aa75283917291c36a4b01beba78b1e9e/49b1b/ddpaLogo.png 1.5x,\n/taryn-delta/static/aa75283917291c36a4b01beba78b1e9e/e2e4b/ddpaLogo.png 2x,\n/taryn-delta/static/aa75283917291c36a4b01beba78b1e9e/c83c1/ddpaLogo.png 3x"}}}}}},194:function(e,t,a){"use strict";var n=a(195),r=a(0),i=a.n(r),o=a(250),c=a.n(o);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,d=e.title,s=n.data.site,l=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:d,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:d},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},t.a=d},195:function(e){e.exports={data:{site:{siteMetadata:{title:"Plan Finder",description:"Find the plan tailored to your need using our step by step tool.",author:"@xlozinguez"}}}}},197:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),o=a(4),c=a.n(o),d=(a(34),a(162),i.a.createContext({})),s=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};var l=a(155),u=a(163),p=(a(199),a(177)),m=a(200),g=a.n(m),b=function(){return i.a.createElement(s,{query:"1590759343",render:function(e){return i.a.createElement(g.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:p})},f=Object(l.withStyles)({root:{flexGrow:1,paddingBottom:"10px"},logo:{marginRight:"auto"}})(function(e){var t=e.classes;e.siteTitle;return i.a.createElement("div",{className:t.root},i.a.createElement(u.a,{position:"static"},i.a.createElement(u.x,null,i.a.createElement(b,{className:t.logo}))))}),A=(a(249),Object(l.createMuiTheme)({palette:{primary:{light:"#2d761c",main:"#41a928",dark:"#67ba53",contrastText:"#fff"},secondary:{light:"#a9a9a9",main:"#f2f2f2",dark:"#f4f4f4",contrastText:"#000"}}}));t.a=function(e){var t=e.children;return i.a.createElement(s,{query:"755544856",render:function(e){return i.a.createElement(l.MuiThemeProvider,{theme:A},i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:"90%",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-404-js-3497d4dae259fe95ede5.js.map