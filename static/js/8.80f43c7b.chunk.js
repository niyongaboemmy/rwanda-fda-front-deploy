(this["webpackJsonprwanda-fda"]=this["webpackJsonprwanda-fda"]||[]).push([[8],{103:function(e,t,a){"use strict";var s=a(2),r=a.n(s),c=a(48),n=a(109),l=a(24),i=a(1),o=function(e){var t=e.fileData,a=e.fileName,s=e.btnName,r=void 0===s?"Excel":s,o=e.className,d=void 0===o?"flex items-center gap-1 px-2 py-1 pr-3 rounded text-green-700 bg-white border hover:text-white hover:bg-green-700 border-green-700 font-bold":o,x=e.showIcon,p=void 0===x||x;return Object(i.jsxs)("button",{onClick:function(e){return function(e,t){var a={Sheets:{data:n.a.json_to_sheet(e)},SheetNames:["data"]},s=n.b(a,{bookType:"xlsx",type:"array"}),r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});c.saveAs(r,t+".xlsx")}(t,a)},className:d,children:[p&&Object(i.jsx)("div",{children:Object(i.jsx)(l.b,{className:"text-xl"})}),r]})};t.a=r.a.memo(o)},104:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));var s,r,c,n=a(25),l=a(1);!function(e){e.default="default",e.primary="primary",e.secondary="secondary",e.danger="danger",e.success="success",e.warning="warning"}(s||(s={})),function(e){e.none="top-0",e.small="top-28",e.medium="top-1/3",e.large="top-1/2",e.extra="top-2/3"}(r||(r={})),function(e){e.small="max-w-sm",e.medium="max-w-screen-sm",e.large="max-w-screen-md",e.extraLarge="max-w-screen-lg",e.maxWidth="max-w-screen h-full"}(c||(c={}));t.c=function(e){var t,a=e.title,i=e.backDrop,o=e.theme,d=e.close,x=e.backDropClose,p=e.widthSizeClass,b=e.displayClose,m=e.padding,j=void 0===m?{title:!0,body:!0,footer:!0}:m;switch(o){case s.primary:t="blue-500";break;case s.secondary:t="gray-300";break;case s.danger:t="red-500";break;case s.success:t="primary-800";break;case s.warning:t="yellow-500";break;default:t="white"}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{onClick:function(){return x&&d()},className:"z-50 animate__animated animate__fadeIn animate__faster modal fixed bg-black bg-opacity-".concat(!0===i?"60":"0")}),Object(l.jsxs)("div",{className:"z-50 fixed items-center justify-items-center ".concat(void 0===e.marginTop?r.none:e.marginTop," left-0 right-0 bottom-0 bg-white rounded shadow-xl self-center ").concat(p," animate__animated ").concat(void 0!==e.marginTop&&e.marginTop!==r.none?"animate__fadeInUp":"animate__zoomIn"," animate__faster"),style:{width:"100%",maxHeight:"99vh",height:"".concat(p===c.maxWidth?void 0===e.marginTop?"100%":"unset":"fit-content"),overflowY:"auto",margin:"auto",zIndex:99999999},children:[Object(l.jsxs)("div",{className:"flex justify-between bg-".concat(t," ").concat(!0===j.title?"py-4 px-4":""," rounded-t text-").concat(o===s.default||o===s.secondary?"black":"white"),children:[a&&""!==a?Object(l.jsx)("h4",{className:"text-lg font-bold ",children:a}):Object(l.jsx)("div",{}),!1===b?"":Object(l.jsx)("div",{className:"hover:text-red-600 hover:bg-red-100 rounded-full p-1 h-8 w-8",children:Object(l.jsx)(n.f,{className:"cursor-pointer font-extrabold text-2xl",onClick:function(){return d()}})})]}),Object(l.jsx)("div",{className:"space-x-3 ".concat(!0===j.body?"py-4 px-4":""),children:Object(l.jsx)("div",{children:""!==e.children?e.children:""})}),void 0!==e.footer&&""!==e.footer?Object(l.jsx)("div",{className:"flex float-right ".concat(!0===j.footer?"py-4 px-4":""),children:e.footer}):""]})]})}},107:function(e,t,a){"use strict";a(2);var s=a(30),r=a(47),c=a(12),n=a(1);t.a=function(e){return Object(n.jsxs)("div",{className:"absolute bg-white border border-gray-300 rounded-md shadow-xl p-3 z-50 mt-2 animate__animated animate__slideInLeft animate__faster",style:{width:"auto",minWidth:"500px"},children:[Object(n.jsxs)("div",{className:"font-bold text-lg mb-3 flex flex-row items-center justify-between gap-2 w-full",children:[Object(n.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(n.jsx)("div",{onClick:function(){return e.onSelect(e.selected_data)},children:Object(n.jsx)(s.a,{className:"text-2xl cursor-pointer"})}),Object(n.jsx)("span",{children:e.title})]}),""!==e.selected_data&&Object(n.jsxs)("div",{onClick:function(){return e.onSelect("")},className:"flex flex-row items-center gap-2 justify-end rounded-md px-1 py-1 pr-3 text-xs font-bold bg-yellow-100 text-yellow-700 cursor-pointer hover:bg-yellow-200 animate__animated animate__zoomIn",children:[Object(n.jsx)("div",{children:Object(n.jsx)(r.f,{className:"text-xl"})}),Object(n.jsx)("span",{children:"Reset"})]})]}),0===e.data_list.length?Object(n.jsx)("div",{className:"rounded-md px-3 py-2 bg-gray-200 font-light",children:"No data found!"}):e.data_list.map((function(t,a){return Object(n.jsxs)("div",{className:"cursor-pointer ".concat(e.selected_data===t?"bg-primary-100 text-primary-900 font-bold":"bg-gray-200 hover:bg-primary-800 hover:text-white","  text-sm px-3 py-2 rounded-md mb-2 flex flex-row items-center justify-between group"),onClick:function(){return e.onSelect(t)},children:[Object(n.jsx)("span",{children:t}),Object(n.jsx)("div",{className:"group-hover:bg-primary-100 group-hover:text-primary-900 text-white bg-primary-800 border border-primary-800 rounded-full px-2 text-xs",children:Object(c.c)(e.getTotal(t))})]},a+1)}))]})}},119:function(e,t,a){"use strict";a.r(t),a.d(t,"Dashboard",(function(){return B}));var s=a(3),r=a(4),c=a(5),n=a(26),l=a(27),i=a(28),o=a(29),d=a(2),x=a(24),p=a(31),b=a(11),m=a(30),j=a(20),u=a(106),h=a(36),f=a(107),g=a(12),O=a(105),v=a(103),N=a(101),_=a(100),y=a(104),w=a(1),C=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).getStatuses=function(e){var t,a=[],s=Object(u.a)(e);try{var r=function(){var e=t.value;void 0===a.find((function(t){return t.toLocaleLowerCase()===e.registration_Status.toLocaleLowerCase()}))&&a.push(e.registration_Status)};for(s.s();!(t=s.n()).done;)r()}catch(c){s.e(c)}finally{s.f()}return a},s.ReturnFilteredData=function(){if(null===s.props.applications)return[];var e=s.props.applications;return""!==s.state.selected_status&&(e=e.filter((function(e){return e.registration_Status.toLocaleLowerCase()===s.state.selected_status.toLocaleLowerCase()}))),e=Object(g.e)(e,s.state.search_application)},s.state={loading:!1,selected_application:null,selected_status:"",search_application:"",view_statuses_filter:!1},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(w.jsxs)(d.Fragment,{children:[Object(w.jsx)("div",{children:Object(w.jsx)(_.a,{className:"mt-3 animate__animated animate__fadeIn ".concat(null!==this.props.applications?"min-h-screen":""),children:!0===this.state.loading?Object(w.jsxs)("div",{className:"mt-5",children:[Object(w.jsx)(N.a,{}),Object(w.jsx)("div",{className:"-mt-10 ml-4 font-light animate-pulse",children:"Loading, please wait..."})]}):null!==this.props.applications&&Object(w.jsxs)("div",{className:"w-full overflow-x-auto mt-4 min-h-screen",children:[Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"grid grid-cols-12 gap-2",children:[Object(w.jsxs)("div",{className:"col-span-6 flex flex-row items-center gap-2",children:[Object(w.jsxs)("div",{className:"relative w-full",children:[Object(w.jsxs)("div",{onClick:function(){return e.setState({view_statuses_filter:!e.state.view_statuses_filter})},className:"w-full border px-3 py-1 rounded-md border-gray-400 flex flex-row items-center justify-between gap-2 text-sm font-bold hover:border-primary-800 cursor-pointer",children:[Object(w.jsx)("div",{children:""===this.state.selected_status?Object(w.jsx)("span",{children:"Choose status"}):Object(w.jsx)("span",{className:" text-primary-900",children:this.state.selected_status})}),Object(w.jsx)("div",{children:!1===this.state.view_statuses_filter?Object(w.jsx)(m.b,{className:"text-2xl"}):Object(w.jsx)(h.b,{className:"text-2xl"})})]}),!0===this.state.view_statuses_filter&&Object(w.jsx)(f.a,{title:"Choose status",data_list:this.getStatuses(this.props.applications),selected_data:this.state.selected_status,onSelect:function(t){e.setState({selected_status:t,view_statuses_filter:!1})},getTotal:function(t){var a=0;return null!==e.props.applications&&(a=e.props.applications.filter((function(e){return e.registration_Status===t})).length),a}})]}),Object(w.jsx)("input",{type:"text",value:this.state.search_application,onChange:function(t){return e.setState({search_application:t.target.value})},disabled:this.state.loading,className:"px-3 py-2 rounded-md text-sm font-bold border border-gray-400 w-full",placeholder:"Search..."})]}),Object(w.jsxs)("div",{className:"col-span-6 flex flex-row items-center justify-end gap-2",children:[""!==this.state.selected_status&&Object(w.jsxs)("div",{className:"flex flex-col items-end justify-center text-right py-1 px-2 rounded-md hover:bg-primary-100 hover:text-primary-900 cursor-pointer",children:[Object(w.jsx)("div",{className:"text-xs font-light",children:this.state.selected_status}),Object(w.jsx)("div",{className:"text-xl font-extrabold -mt-1",children:Object(g.c)(this.ReturnFilteredData().length)})]}),Object(w.jsxs)("div",{className:"flex flex-col items-end justify-center text-right py-1 px-2 rounded-md hover:bg-primary-100 hover:text-primary-900 cursor-pointer",children:[Object(w.jsx)("div",{className:"text-xs font-light",children:"Total applications"}),Object(w.jsx)("div",{className:"text-xl font-extrabold -mt-1",children:Object(g.c)(this.props.applications.length)})]}),Object(w.jsx)(v.a,{fileData:this.ReturnFilteredData(),fileName:"Applications report",btnName:"Download EXCEL"})]})]})}),Object(w.jsxs)("table",{className:"w-full text-left",children:[Object(w.jsx)("thead",{className:"text-primary-900 text-xs",children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{className:"px-3 py-2 border-b border-primary-700",children:"#"}),Object(w.jsx)("th",{className:"px-3 py-2 border-b border-primary-700",children:"Reference No"}),Object(w.jsx)("th",{className:"px-3 py-2 border-b border-primary-700",children:"Brand name"}),Object(w.jsx)("th",{className:"px-3 py-2 border-b border-primary-700",children:"Applicant"}),Object(w.jsx)("th",{className:"px-3 py-2 border-b border-primary-700",children:"Product common name"}),Object(w.jsx)("th",{className:"px-3 py-2 border-b border-primary-700",children:"Registration status"})]})}),Object(w.jsx)("tbody",{className:"text-xs",children:0===this.ReturnFilteredData().length?Object(w.jsx)("tr",{children:Object(w.jsx)("td",{colSpan:6,className:"text-xl font-light text-center pt-4",children:Object(w.jsx)("div",{className:"w-full bg-gray-200 rounded-md p-3 text-center",children:"No result found!"})})}):this.ReturnFilteredData().map((function(t,a){return Object(w.jsxs)("tr",{className:"".concat(a%2!==0?"bg-gray-100":""," hover:bg-primary-100 hover:text-primary-900 cursor-pointer animate__animated animate__fadeIn"),onClick:function(){return e.setState({selected_application:t})},children:[Object(w.jsx)("td",{className:"px-3 py-1",children:a+1}),Object(w.jsx)("td",{className:"px-3 py-1",children:t.application_ref_number}),Object(w.jsx)("td",{className:"px-3 py-2",children:t.product_brand_name}),Object(w.jsx)("td",{className:"px-3 py-1",children:t.applicant_name}),Object(w.jsx)("td",{className:"px-3 py-2",children:t.product_common_name}),Object(w.jsx)("td",{className:"px-3 py-1",children:t.registration_Status})]},a+1)}))})]})]})})}),null!==this.state.selected_application&&Object(w.jsx)(y.c,{backDrop:!0,theme:y.b.default,close:function(){return e.setState({selected_application:null})},backDropClose:!0,widthSizeClass:y.a.maxWidth,displayClose:!1,padding:{title:void 0,body:!0,footer:void 0},children:Object(w.jsx)(O.a,{data:this.state.selected_application,modal:!0,onClose:function(){return e.setState({selected_application:null})},source:"list",onUpdate:function(t){e.setState({selected_application:null}),e.props.onUpdate(t)},FC_SetSuccess:this.props.FC_SetSuccess,FC_Error:this.props.FC_Error})})]})}}]),a}(d.Component),S=a(6),E=a.n(S),D=a(7),R=a(61),k=function(){return Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:"h-screen bg-white overflow-y-hidden pt-3",children:Object(w.jsx)("div",{className:"grid grid-cols-12 h-full ",children:Object(w.jsx)("div",{className:"col-span-12 p-2 h-full",children:Object(w.jsxs)("div",{className:"grid grid-cols-12 gap-3 h-full",children:[Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-3 bg-gray-200 rounded-md w-full h-20 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-6 bg-gray-200 rounded-md w-full h-60 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-6 bg-gray-200 rounded-md w-full h-60 animate-pulse"}),Object(w.jsx)("div",{className:"col-span-12 bg-white rounded w-full h-screen animate-pulse",children:Object(w.jsxs)("div",{className:"w-full flex flex-col items-center justify-center ga-5",children:[Object(w.jsx)("div",{}),Object(w.jsxs)("div",{className:"fixed top-0 bottom-0 text-center text-3xl font-extrabold text-gray-600 animate-pulse flex flex-row items-center gap-3",children:[Object(w.jsx)("div",{children:Object(w.jsx)(R.a,{className:"text-5xl animate-spin text-gray-700"})}),Object(w.jsx)("span",{children:"Loading dashboard, please wait..."})]})]})})]})})})})})},T=a(112),I=a.n(T),G=a(8),F=a(23),A=a(47),P=a(25),L=a(22),z=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).SearchData=function(e){return e.preventDefault(),""===l.state.start_date?l.setState({error:{target:"start_date",msg:"Please fill start date"}}):""===l.state.ending_date?l.setState({error:{target:"ending_date",msg:"Please fill ending date"}}):void l.setState({loading:!0})},l.FC_GetDashboardSummary=Object(c.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.setState({loading:!0}),Object(G.b)(),e.prev=2,e.next=5,E.a.get("".concat(D.a,"/application/count"));case 5:(t=e.sent)&&l.setState({loading:!1,dashboard:t.data,chart_value:{options:{chart:{id:"basic-bar"},plotOptions:{bar:{horizontal:!0}},xaxis:{categories:["NOT_SCREENED","PROGRESS_IN_SCREENING","SCREENING_COMPLETED","WITHDRAWN","ONGOING","NOT RECOMMENDED","RECOMMENDED","UNCOMPLETED","REJECTED","APPROVED","REGISTERED"]}},series:[{name:"Total applications",data:[t.data.NOT_SCREENED,t.data.PROGRESS_IN_SCREENING,t.data.SCREENING_COMPLETED,t.data.WITHDRAWN,t.data.OG,t.data.NR,t.data.R,t.data.UNCOMPLETED,t.data.REJECTED,t.data.APPROVED,t.data.REGISTERED]}]}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("Err: ",Object(r.a)({},e.t0)),l.setState({error:{target:"main",msg:Object(g.d)(e.t0)},loading:!1});case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),l.FC_GetDataTableByStatus=function(e){l.setState({loading:!0}),Object(b.g)(e,(function(e,t,a){l.setState({loading:e}),"success"===(null===t||void 0===t?void 0:t.type)&&null!==a&&l.setState({open_report:{title:"Response",data:a},success:t.msg}),"error"===(null===t||void 0===t?void 0:t.type)&&l.setState({error:{target:"main",msg:t.msg}})}))},l.componentDidMount=function(){null===l.state.dashboard&&l.FC_GetDashboardSummary()},l.state={loading:!1,success:"",error:null,start_date:"",ending_date:"",open_report:null,dashboard:null,chart_value:null},l}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return!0===this.state.loading||null===this.state.dashboard?Object(w.jsx)(k,{}):null!==this.state.open_report?Object(w.jsxs)("div",{className:"bg-white rounded-md mt-2 pt-2",children:[Object(w.jsxs)("div",{className:"flex flex-row items-center gap-3 px-2 -mb-3",children:[Object(w.jsxs)("div",{onClick:function(){return e.setState({open_report:null})},className:"bg-primary-100 text-black hover:bg-primary-800 hover:text-white cursor-pointer w-max text-sm font-bold flex flex-row items-center justify-center gap-2 px-3 py-2 rounded-md",children:[Object(w.jsx)("div",{children:Object(w.jsx)(m.a,{className:"text-2xl"})}),Object(w.jsx)("span",{children:"Go Back"})]}),Object(w.jsx)("div",{className:"font-extrabold text-xl",children:this.state.open_report.title})]}),Object(w.jsx)(C,{applications:this.state.open_report.data,FC_SetApplications:this.props.FC_SetApplications,FC_GetApplicationByReferenceNumber:this.props.FC_GetApplicationByReferenceNumber,onGoBack:function(){return e.setState({open_report:null})},FC_SetSuccess:this.props.FC_SetSuccess,FC_Error:this.props.FC_SetError,onUpdate:function(t){null!==e.state.open_report&&(e.FC_GetDashboardSummary(),e.setState({open_report:null}))}})]}):Object(w.jsxs)("div",{className:"mt-3",children:[null!==this.state.error&&Object(w.jsx)("div",{className:"w-full my-3",children:""!==this.state.error.msg&&Object(w.jsx)(j.b,{alertType:j.a.DANGER,title:"Error occurred!",description:this.state.error.msg,close:function(){e.setState({error:null})},className:"border-2 border-white"})}),Object(w.jsxs)("div",{className:"grid grid-cols-12 gap-3",children:[Object(w.jsxs)("div",{onClick:function(){return e.FC_GetDataTableByStatus(b.A.NOT_SCREENED)},className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-yellow-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(m.c,{className:"text-6xl text-gray-300 group-hover:text-yellow-700"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-yellow-700",children:[Object(w.jsx)("span",{className:"text-sm",children:"Not screened"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:Object(g.c)(this.state.dashboard.NOT_SCREENED)})]})]}),Object(w.jsxs)("div",{onClick:function(){return e.FC_GetDataTableByStatus(b.A.PROGRESS_IN_SCREENING)},className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-gray-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(x.d,{className:"text-6xl text-gray-300 animate-spin group-hover:text-black"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-black",children:[Object(w.jsx)("span",{className:"text-sm",children:"Under screening progress"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:Object(g.c)(this.state.dashboard.PROGRESS_IN_SCREENING)})]})]}),Object(w.jsxs)("div",{onClick:function(){return e.FC_GetDataTableByStatus(b.A.WITHDRAWN)},className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-primary-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(A.a,{className:"text-6xl text-gray-300 group-hover:text-black animate-pulse"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-black",children:[Object(w.jsx)("span",{className:"text-sm",children:"Withdrawn screening"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:Object(g.c)(this.state.dashboard.WITHDRAWN)})]})]}),Object(w.jsxs)("div",{onClick:function(){return e.FC_GetDataTableByStatus(b.A.SCREENING_COMPLETED)},className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-primary-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(A.d,{className:"text-6xl text-gray-300 group-hover:text-black animate-pulse"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-black",children:[Object(w.jsx)("span",{className:"text-sm group-hover:text-black",children:"Waiting for assessors"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:Object(g.c)(this.state.dashboard.SCREENING_COMPLETED)})]})]}),Object(w.jsxs)("div",{onClick:function(){return e.FC_GetDataTableByStatus(b.A.OG)},className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-primary-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(m.l,{className:"text-6xl text-gray-300 group-hover:text-black animate-pulse"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-black",children:[Object(w.jsx)("span",{className:"text-sm",children:"Under assessment progress"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:Object(g.c)(this.state.dashboard.OG)})]})]}),Object(w.jsxs)("div",{onClick:function(){return e.FC_GetDataTableByStatus(b.A.NR)},className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-primary-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(P.p,{className:"text-6xl text-gray-300 group-hover:text-black animate-pulse"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-black",children:[Object(w.jsx)("span",{className:"text-sm",children:"Not recommended"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:Object(g.c)(this.state.dashboard.NR)})]})]}),Object(w.jsxs)("div",{onClick:function(){return e.FC_GetDataTableByStatus(b.A.R)},className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-primary-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(A.e,{className:"text-6xl text-gray-300 group-hover:text-black"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-black",children:[Object(w.jsx)("span",{className:"text-sm",children:"Waiting for peer review"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:Object(g.c)(this.state.dashboard.NR)})]})]}),Object(w.jsxs)("div",{onClick:function(){return e.FC_GetDataTableByStatus(b.A.REJECTED)},className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-primary-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(P.n,{className:"text-6xl text-gray-300 group-hover:text-black animate-pulse"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-black",children:[Object(w.jsx)("span",{className:"text-sm",children:"Rejected Peer Review"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:Object(g.c)(this.state.dashboard.REJECTED)})]})]}),Object(w.jsxs)("div",{onClick:function(){return e.FC_GetDataTableByStatus(b.A.UNCOMPLETED)},className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-primary-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(L.h,{className:"text-6xl text-gray-300 group-hover:text-black animate-pulse"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-black",children:[Object(w.jsx)("span",{className:"text-sm",children:"Hold on Peer review"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:Object(g.c)(this.state.dashboard.UNCOMPLETED)})]})]}),Object(w.jsxs)("div",{onClick:function(){return e.FC_GetDataTableByStatus(b.A.APPROVED)},className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-primary-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(P.e,{className:"text-6xl text-gray-300 group-hover:text-black animate__animated animate__bounceIn animate__infinite"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-black",children:[Object(w.jsx)("span",{className:"text-sm",children:"Waiting for registration"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:Object(g.c)(this.state.dashboard.APPROVED)})]})]}),Object(w.jsxs)(F.b,{to:"/product-list",className:"col-span-3 rounded-lg bg-white p-3 flex flex-row items-center justify-between gap-3 cursor-pointer hover:bg-green-100 group animate__animated animate__zoomIn",children:[Object(w.jsx)("div",{children:Object(w.jsx)(m.e,{className:"text-6xl text-gray-300 group-hover:text-green-600"})}),Object(w.jsxs)("div",{className:"flex flex-col text-right text-green-600",children:[Object(w.jsx)("span",{className:"text-sm",children:"Registered products"}),Object(w.jsx)("span",{className:"font-extrabold text-3xl",children:this.state.dashboard.REGISTERED})]})]}),Object(w.jsxs)("div",{className:"col-span-12 grid grid-cols-12 gap-3",children:[Object(w.jsx)("div",{className:"col-span-6 bg-white rounded-md p-4",children:Object(w.jsx)("div",{className:"mt-3",children:null!==this.state.chart_value&&Object(w.jsx)(I.a,{options:this.state.chart_value.options,series:this.state.chart_value.series,type:"bar",width:"100%"})})}),Object(w.jsx)("div",{className:"col-span-6 bg-white rounded-md p-4",children:Object(w.jsx)("div",{className:"mt-3",children:null!==this.state.chart_value&&Object(w.jsx)(I.a,{options:{series:this.state.chart_value.series,labels:this.state.chart_value.options.xaxis.categories},series:this.state.chart_value.series[0].data,type:"pie",width:"100%"})})})]})]})]})}}]),a}(d.Component),B=Object(p.b)((function(e){return{auth:e.auth,system:e.system,instructionLetters:e.instructionLetters}}),{FC_SetApplications:b.o,FC_GetApplicationByReferenceNumber:b.f,FC_SetSuccess:b.q,FC_SetError:b.p})(z)}}]);
//# sourceMappingURL=8.80f43c7b.chunk.js.map