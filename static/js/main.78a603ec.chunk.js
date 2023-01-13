(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{75:function(e,t,s){},76:function(e,t,s){"use strict";s.r(t);var r=s(14),a=s(15),c=s(0),i=s(10),n=s(3),d=s(40);const l=new class{constructor(){this.type="",this.minTemperature="",this.maxTemperature="",this.isFiltered=!1,this.selectedDayId="",this.filteredDays=Object(d.a)((e=>e.filter((e=>{const t=!this.type||this.type===e.type,s=!this.minTemperature||this.minTemperature<=String(e.temperature),r=!this.maxTemperature||this.maxTemperature>=String(e.temperature);return t&&s&&r})))),Object(c.w)(this,{rootStore:!1},{autoBind:!0})}setType(e){this.type=e}setMinTemperature(e){this.minTemperature=e}setMaxTemperature(e){this.maxTemperature=e}applyFilter(e){e.type&&(this.type=e.type),e.minTemperature&&(this.minTemperature=e.minTemperature),e.maxTemperature&&(this.maxTemperature=e.maxTemperature),this.isFiltered=!0}get isFormBlocked(){return""===this.type&&""===this.minTemperature&&""===this.maxTemperature}setSelectedDayId(e){this.selectedDayId=e}resetFilter(){this.maxTemperature="",this.minTemperature="",this.type="",this.isFiltered=!1}};var m=s(2);const u=Object(n.createContext)(l),j=e=>Object(m.jsx)(u.Provider,{value:l,children:e.children}),o=()=>Object(n.useContext)(u);var p=s(41),b=s.n(p);const h=Object.freeze({async getWeather(){const{data:e}=await b.a.get("https://lab.lectrum.io/rtx/api/forecast");return e.data}}),x=()=>{const e=Object(a.useQuery)("weather",h.getWeather),{data:t,isFetched:s}=e;return{data:t||[{}],isFetched:s}},O=()=>Object(m.jsx)("span",{style:{color:"#fff",fontSize:"25px"},children:"Loading..."}),y=Object(i.a)((()=>{const{selectedDayId:e}=o(),{data:t,isFetched:s}=x(),r=t.find((t=>t.id===e)),{temperature:a,humidity:c,rain_probability:i}=r||{};return Object(m.jsx)(m.Fragment,{children:e?Object(m.jsxs)("div",{className:"current-weather",children:[Object(m.jsx)("p",{className:"temperature",children:s?a:Object(m.jsx)(O,{})}),Object(m.jsxs)("p",{className:"meta",children:[Object(m.jsxs)("span",{className:"rainy",children:["%",i]}),Object(m.jsxs)("span",{className:"humidity",children:["%",c]})]})]}):""})})),f=Object(i.a)((()=>{const e=o(),{type:t,isFiltered:s,minTemperature:r,maxTemperature:a,isFormBlocked:c}=e;return Object(m.jsxs)("div",{className:"filter",children:[Object(m.jsx)("span",{onClick:()=>!s&&e.setType("cloudy"),className:`checkbox ${"cloudy"===t?"selected":""} ${s?"blocked":""}`,children:"Cloudy"}),Object(m.jsx)("span",{className:`checkbox ${"sunny"===t?"selected":""} ${s?"blocked":""}`,onClick:()=>!s&&e.setType("sunny"),children:"Sunny"}),Object(m.jsxs)("p",{className:"custom-input",children:[Object(m.jsx)("label",{htmlFor:"min-temperature",children:"minimum temperature"}),Object(m.jsx)("input",{value:r,id:"min-temperature",type:"number",disabled:s,onChange:t=>e.setMinTemperature(t.target.value)})]}),Object(m.jsxs)("p",{className:"custom-input",children:[Object(m.jsx)("label",{htmlFor:"max-temperature",children:"maximum temperature"}),Object(m.jsx)("input",{value:a,id:"max-temperature",type:"number",disabled:s,onChange:t=>e.setMaxTemperature(t.target.value)})]}),s?Object(m.jsx)("button",{type:"submit",onClick:()=>e.resetFilter(),children:"Reset"}):Object(m.jsx)("button",{type:"submit",disabled:c,onClick:()=>e.applyFilter({type:t,minTemperature:r,maxTemperature:a}),children:"Filter out"})]})}));var v=s(80);const T=Object(i.a)((e=>{const{selectedDayId:t,setSelectedDayId:s}=o();return Object(m.jsxs)("div",{onClick:()=>{s(e.id)},className:`day ${e.type} ${e.id===t?"selected":""}`,children:[Object(m.jsx)("p",{children:Object(v.a)(new Date(e.day),"EEEE")}),Object(m.jsx)("span",{children:e.temperature})]})})),F=Object(i.a)((()=>{const{data:e,isFetched:t}=x(),{setSelectedDayId:s,isFiltered:r,filteredDays:a,selectedDayId:c}=o(),[i,d]=Object(n.useState)([]);Object(n.useEffect)((()=>{if(t){var c;const t=r?a(e):e;d(t),s((null===(c=t[0])||void 0===c?void 0:c.id)||"")}}),[r,t]);const l=t&&i.slice(0,7).map((e=>Object(m.jsx)(T,{...e},e.id)));return Object(m.jsx)("div",{className:"forecast",children:l.length>0?l:Object(m.jsx)("p",{className:"message",children:" No days were found for this filter"})})})),g=Object(i.a)((()=>{const{selectedDayId:e}=o(),{data:t,isFetched:s}=x(),[r,a]=Object(n.useState)();return Object(n.useEffect)((()=>{if(e){const r=s&&t.find((t=>t.id===e));a(r)}}),[e]),Object(m.jsx)(m.Fragment,{children:e?Object(m.jsxs)("div",{className:"head",children:[Object(m.jsx)("div",{className:`icon ${null===r||void 0===r?void 0:r.type}`}),Object(m.jsxs)("div",{className:"current-date",children:[Object(m.jsx)("p",{children:r&&Object(v.a)(new Date(null===r||void 0===r?void 0:r.day),"eeee")}),Object(m.jsx)("span",{children:r&&Object(v.a)(new Date(null===r||void 0===r?void 0:r.day),"dd MMMM")})]})]}):""})})),N=()=>Object(m.jsxs)("main",{children:[Object(m.jsx)(f,{}),Object(m.jsx)(g,{}),Object(m.jsx)(y,{}),Object(m.jsx)(F,{})]}),w=()=>Object(m.jsx)(N,{});s(75);const k=new a.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});Object(c.j)({enforceActions:"always",computedRequiresReaction:!0,observableRequiresReaction:!0,reactionRequiresObservable:!0}),Object(r.render)(Object(m.jsx)(j,{children:Object(m.jsx)(a.QueryClientProvider,{client:k,children:Object(m.jsx)(w,{})})}),document.getElementById("root"),(()=>{console.log("%c \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e ","background: #00ff00; color: #000000; padding: 2.5px;")}))}},[[76,1,2]]]);
//# sourceMappingURL=main.78a603ec.chunk.js.map