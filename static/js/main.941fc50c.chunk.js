(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{25:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__33sDp",close:"Drawer_close__qtjVU"}},26:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__24knh",success:"FinishedQuiz_success__tWyTO",error:"FinishedQuiz_error__1EERt"}},28:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__2vewb",open:"MenuToggle_open__33337"}},32:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__fpuQE",QuizWrapper:"Quiz_QuizWrapper__ByeWI"}},33:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__1Geuu",Question:"ActiveQuiz_Question__QHlu8"}},34:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3ec_J",success:"AnswerItem_success__2D4sD",error:"AnswerItem_error__3MBAJ"}},35:function(e,t,n){e.exports={Button:"Button_Button__35PjG",error:"Button_error__EWlfU",success:"Button_success__3zrQR",primary:"Button_primary__24fVy"}},36:function(e,t,n){e.exports={center:"Loader_center__1Uqu4",Loader:"Loader_Loader__272gS","lds-ripple":"Loader_lds-ripple__38Je_"}},37:function(e,t,n){e.exports={Input:"Input_Input__8Q5CT",invalid:"Input_invalid__1fbkd"}},38:function(e,t,n){e.exports={Select:"Select_Select__HixJs"}},39:function(e,t,n){e.exports={Auth:"Auth_Auth__1E_MY",AuthForm:"Auth_AuthForm__fwgXW"}},50:function(e,t,n){e.exports={Layout:"Layout_Layout__1w3XB"}},51:function(e,t,n){e.exports={Backdrop:"BackDrop_Backdrop__2MDzi"}},54:function(e,t,n){e.exports={AnswerList:"AnswerList_AnswerList__1RypS"}},55:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__3fHq9"}},56:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__3ZOrt"}},59:function(e,t,n){e.exports=n(88)},64:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),u=(n(64),n(3)),s=n(4),c=n(7),l=n(5),p=n(8),m=n(50),d=n.n(m),h=n(28),f=n.n(h),v=function(e){var t=[f.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(f.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},E=n(25),_=n.n(E),b=n(51),g=n.n(b),z=function(e){return r.a.createElement("div",{className:g.a.Backdrop,onClick:e.onClick})},C=n(15),y=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderLinks",value:function(e){var t=this;return e.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(C.c,{to:e.to,exact:e.exact,activeClassName:_.a.active,onClick:t.props.onClose},e.label))}))}},{key:"render",value:function(){var e=[_.a.Drawer];this.props.isOpen||e.push(_.a.close);var t=[{to:"/",label:"List of Tests",exact:!0}];return this.props.isAutheticated?(t.push({to:"/quiz-creator",label:"Create a Test",exact:!0}),t.push({to:"/logout",label:"Logout",exact:!0})):t.push({to:"/auth",label:"Authentication",exact:!1}),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:e.join(" ")},r.a.createElement("ul",null,this.renderLinks(t))),this.props.isOpen?r.a.createElement(z,{onClick:this.props.onClose}):null)}}]),t}(r.a.Component),w=n(6),O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={menu:!1},n.toggelMenuHandler=function(){n.setState({menu:!n.state.menu})},n.MenuCloseHandler=function(){n.setState({menu:!1})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:d.a.Layout},r.a.createElement(y,{isOpen:this.state.menu,onClose:this.MenuCloseHandler,isAutheticated:this.props.isAutheticated}),r.a.createElement(v,{onToggle:this.toggelMenuHandler,isOpen:this.state.menu}),r.a.createElement("main",null,this.props.children))}}]),t}(r.a.Component);var Q=Object(w.b)((function(e){return{isAutheticated:!!e.auth.token}}),null)(O),q=n(11),j=n.n(q),k=n(32),S=n.n(k),I=n(33),A=n.n(I),T=n(54),x=n.n(T),U=n(34),F=n.n(U),H=function(e){var t=[F.a.AnswerItem];return e.state&&t.push(F.a[e.state]),r.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},N=function(e){return r.a.createElement("ul",{className:x.a.AnswerList},e.answers.map((function(t,n){return r.a.createElement(H,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},L=function(e){return r.a.createElement("div",{className:A.a.ActiveQuiz},r.a.createElement("h1",null,"Do you know?"),r.a.createElement("p",{className:A.a.Question},r.a.createElement("span",null,r.a.createElement("strong",null,"1."),"\xa0",e.question),r.a.createElement("small",null,e.answerNumber," of ",e.quizLength)),r.a.createElement(N,{answers:e.answers,onAnswerClick:e.onAnswerClick,state:e.state}))},D=n(26),M=n.n(D),R=n(35),Z=n.n(R),V=function(e){var t=[Z.a.Button,Z.a[e.type]];return r.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},B=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return r.a.createElement("div",{className:M.a.FinishedQuiz},r.a.createElement("h1",null,"Ok. That's all."),e.quiz.map((function(t,n){var a=["error"===e.results[t.id]?M.a.error:M.a.success];return r.a.createElement("ul",{key:n,className:a.join(" ")},n+1+". ",t.question)})),r.a.createElement("p",null,"Correct answers: ",t," from ",e.quiz.length),r.a.createElement("div",null,r.a.createElement(V,{onClick:e.onRetry,type:"primary"},"Retry"),r.a.createElement(C.b,{to:"/"},r.a.createElement(V,{type:"success"},"To Quiz List"))))},W=n(36),X=n.n(W),G=function(e){return r.a.createElement("div",{className:X.a.center},r.a.createElement("div",{className:X.a.Loader},r.a.createElement("div",null),r.a.createElement("div",null)))},J=n(21),P=n(24),Y=n.n(P),$=Y.a.create({baseURL:"https://reactquiz-ae327.firebaseio.com/"});function K(e){return{type:"FETCH_QUIZ_SUCCESS",quiz:e}}function ee(e){return{type:"FETCH_QUIZES_SUCCESS",quizes:e}}function te(e){return{type:"FETCH_QUIZES_ERROR",error:e}}function ne(e,t){return{type:"QUIZ_SET_STATE",answerState:e,results:t}}function ae(e){return function(t){var n=window.setTimeout((function(){!function(e){return e.activeQuestion+1===e.quiz.length}(e)?t({type:"QUIZ_NEXT_QUESTION",activeQuestionNumber:e.activeQuestion+1}):t({type:"FINISH_QUIZ"}),window.clearTimeout(n)}),500)}}var re=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){return j.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.fetchQuizById(this.props.match.params.id);case 1:case"end":return e.stop()}}),null,this)}},{key:"componentWillUnmount",value:function(){this.props.retryQuiz()}},{key:"render",value:function(){return r.a.createElement("div",{className:S.a.Quiz},r.a.createElement("div",{className:S.a.QuizWrapper},this.props.loading||!this.props.quiz?r.a.createElement(G,null):this.props.isFinished?r.a.createElement(B,{results:this.props.results,quiz:this.props.quiz,onRetry:this.props.retryQuiz}):r.a.createElement(L,{answers:this.props.quiz[this.props.activeQuestion].answers,question:this.props.quiz[this.props.activeQuestion].question,onAnswerClick:this.props.quizAnswerClick,quizLength:this.props.quiz.length,answerNumber:this.props.activeQuestion+1,state:this.props.answerState})))}}]),t}(r.a.Component),ie=Object(w.b)((function(e){return{loading:e.quiz.loading,results:e.quiz.results,isFinished:e.quiz.isFinished,activeQuestion:e.quiz.activeQuestion,answerState:e.quiz.answerState,quiz:e.quiz.quiz}}),(function(e){return{fetchQuizById:function(t){return e((n=t,function(e){var t,a;return j.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e({type:"FETCH_QUIZES_START"}),r.prev=1,r.next=4,j.a.awrap($.get("quizes/".concat(n,".json")));case 4:t=r.sent,a=t.data,e(K(a)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),e(te(r.t0));case 12:case"end":return r.stop()}}),null,null,[[1,9]])}));var n},quizAnswerClick:function(t){return e(function(e){return function(t,n){var a=n().quiz;if(a.answerState){var r=Object.keys(a.answerState)[0];if("success"===a.answerState[r])return}var i=a.quiz[a.activeQuestion],o=a.results;i.correctAnswerId===e?(o[i.id]||(o[i.id]="success"),t(ne(Object(J.a)({},e,"success"),o)),t(ae(a))):(o[i.id]="error",t(ne(Object(J.a)({},e,"error"),o)),t(ae(a)))}}(t))},retryQuiz:function(){return e({type:"RETRY_QUIZ"})}}}))(re),oe=n(19),ue=n(2),se=n(55),ce=n.n(se);function le(e,t){return Object(ue.a)({},e,{validation:t,valid:!t,touched:!1,value:""})}function pe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function me(e){var t=!0;return Object.keys(e).forEach((function(n){t=e[n].valid&&t})),t}var de=n(37),he=n.n(de),fe=function(e){function t(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var n=e.type||"text",a="".concat(n,"-").concat(Math.random()),i=[he.a.Input];return t(e)&&i.push(he.a.invalid),r.a.createElement("div",{className:i.join(" ")},r.a.createElement("label",{htmlFor:a},e.label),r.a.createElement("input",{type:n,id:a,value:e.value,autoComplete:"off",onChange:e.onChange}),t(e)?r.a.createElement("span",null,e.errorMessage||"Incorrect login or password"):null)},ve=n(38),Ee=n.n(ve),_e=function(e){var t="".concat(e.label,"-").concat(Math.random());return r.a.createElement("div",{className:Ee.a.Select},r.a.createElement("label",{htmlFor:t},e.label),r.a.createElement("select",{id:t,label:e.label,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return r.a.createElement("option",{value:e.value,key:e.value+t},e.text)}))))},be=function(e){var t="".concat(e.label,"-").concat(Math.random());return r.a.createElement("div",{className:Ee.a.Select},r.a.createElement("label",{htmlFor:t},e.label),r.a.createElement("select",{id:t,label:e.label,value:e.value},e.options.map((function(e,t){return r.a.createElement("option",{key:e.value+t},"1. ".concat(e.question))}))))};function ge(e){return le({label:"Answer ".concat(e),errorMessage:"Field is required",id:e},{required:!0})}function ze(){return{question:le({label:"Type a question",errorMessage:"Please type a question"},{required:!0}),option1:ge(1),option2:ge(2),option3:ge(3),option4:ge(4)}}var Ce=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={formControls:ze(),isFormValid:!1,correctAnswerId:1},n.submitHandler=function(e){e.preventDefault()},n.addQuestionHandler=function(e){e.preventDefault();var t=n.state.formControls,a=t.question,r=t.option1,i=t.option2,o=t.option3,u=t.option4,s={question:a.value,id:n.props.quiz.length+1,correctAnswerId:n.state.correctAnswerId,answers:[{text:r.value,id:r.id},{text:i.value,id:i.id},{text:o.value,id:o.id},{text:u.value,id:u.id}]};n.props.createQuizQuestion(s),n.setState({formControls:ze(),isFormValid:!1,correctAnswerId:1})},n.createQuizHandler=function(e){e.preventDefault(),n.setState({formControls:ze(),isFormValid:!1,correctAnswerId:1}),n.props.finishCreateQuiz()},n.onChangeHandler=function(e,t){var a=Object(ue.a)({},n.state.formControls),r=Object(ue.a)({},a[t]);r.value=e,r.touched=!0,r.valid=pe(r.value,r.validation),a[t]=r;var i=!0;Object.keys(a).forEach((function(e){i=a[e].valid&&i})),n.setState({formControls:a,isFormValid:me(a)})},n.selectChangeHandler=function(e){n.setState({correctAnswerId:+e.target.value})},n.onEraseHandler=function(e){e.preventDefault(),n.props.resetQuizCreation(),n.setState({formControls:ze(),isFormValid:!1,correctAnswerId:1})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(r.a.Fragment,{key:"Fragment".concat(n)},r.a.createElement(fe,{key:t+n,value:a.value,label:a.label,valid:a.valid,touched:a.touched,errorMessage:a.errorMessage,shouldValidate:!!a.validation,onChange:function(n){return e.onChangeHandler(n.target.value,t)}}),1===n?r.a.createElement("hr",null):null)}))}},{key:"questionButtonLabel",value:function(){return 0===this.props.quiz.length?"Create a Quiz":1===this.props.quiz.length?"Create a Quiz with 1 question":"Create a Quiz with ".concat(this.state.quiz.length," questions")}},{key:"render",value:function(){return r.a.createElement("div",{className:ce.a.QuizCreator},r.a.createElement("div",null,r.a.createElement("h1",null,"Quiz Creator"),r.a.createElement("form",{onSubmit:this.submitHandle},this.renderInputs(),r.a.createElement(_e,{label:"Choose a correct answer",value:this.state.correctAnswerId,onChange:this.selectChangeHandler,options:[{text:this.state.formControls.option1.value,value:1},{text:this.state.formControls.option2.value,value:2},{text:this.state.formControls.option3.value,value:3},{text:this.state.formControls.option4.value,value:4}]}),r.a.createElement(V,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid},"Add Question"),r.a.createElement(V,{type:"success",onClick:this.createQuizHandler,disabled:0===this.props.quiz.length},this.questionButtonLabel()),0===this.props.quiz.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement(be,{label:"List of questions",value:"text",options:this.props.quiz}),r.a.createElement(V,{type:"primary",onClick:this.onEraseHandler},"Erase questions")))))}}]),t}(r.a.Component),ye=Object(w.b)((function(e){return{quiz:e.quizCreator.quiz}}),(function(e){return{createQuizQuestion:function(t){return e(function(e){return{type:"CREATE_QUIZ_QUESTION",item:e}}(t))},finishCreateQuiz:function(){return e((function(e,t){return j.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.a.awrap($.post("quizes.json",t().quizCreator.quiz));case 2:e({type:"RESET_QUIZ_CREATION"});case 3:case"end":return n.stop()}}))}))},resetQuizCreation:function(){return e({type:"RESET_QUIZ_CREATION"})}}}))(Ce),we=n(56),Oe=n.n(we),Qe=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"renderQuizes",value:function(){return 0===this.props.quizes.length?r.a.createElement("h1",null,"No created quizes"):this.props.quizes.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(C.c,{to:"/quiz/"+e.id},e.name))}))}},{key:"componentDidMount",value:function(){this.props.fetchQuizes()}},{key:"render",value:function(){return r.a.createElement("div",{className:Oe.a.QuizList},r.a.createElement("div",null,r.a.createElement("h1",null,"Quiz List"),this.props.loading&&0!==this.props.quizes.length?r.a.createElement(G,null):r.a.createElement("ul",null,this.renderQuizes())))}}]),t}(r.a.Component);var qe=Object(w.b)((function(e){return{quizes:e.quiz.quizes,loading:e.quiz.loading}}),(function(e){return{fetchQuizes:function(){return e((function(e){var t,n;return j.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:"FETCH_QUIZES_START"}),a.prev=1,a.next=4,j.a.awrap($.get("quizes.json"));case 4:t=a.sent,n=[],Object.keys(t.data).forEach((function(e,t){n.push({id:e,name:"Quiz #".concat(t+1)})})),e(ee(n)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),e(te(a.t0));case 13:case"end":return a.stop()}}),null,null,[[1,10]])}))}}}))(Qe),je=n(39),ke=n.n(je);function Se(e){return{type:"AUTH_SUCCESS",token:e}}function Ie(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}}function Ae(e){return function(t){setTimeout((function(){t(Ie())}),1e3*e)}}var Te=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"Enter a valid email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"Password",errorMessage:"Enter a password",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},n.onChangeHandler=function(e,t){var a=Object(ue.a)({},n.state.formControls),r=Object(ue.a)({},a[t]);r.value=e.target.value,r.touched=!0,r.valid=n.validateControl(r.value,r.validation),a[t]=r;var i=!0;Object.keys(a).forEach((function(e){i=a[e].valid&&i})),n.setState({formControls:a,isFormValid:i})},n.loginHandler=function(){n.props.auth(n.state.formControls.email.value,n.state.formControls.password.value,!0)},n.registerHandler=function(){n.props.auth(n.state.formControls.email.value,n.state.formControls.password.value,!1)},n.submitHandler=function(e){e.preventDefault()},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(fe,{key:t+n,value:a.value,type:a.type,label:a.label,valid:a.valid,touched:a.touched,errorMessage:a.errorMessage,shouldValidate:!!a.validation,onChange:function(n){return e.onChangeHandler(n,t)}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:ke.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"Sign up"),r.a.createElement("form",{onSubmit:this.submitHandler,className:ke.a.AuthForm},this.renderInputs(),r.a.createElement(V,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"Sign in"),r.a.createElement(V,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid},"Registration"))))}}]),t}(r.a.Component),xe=Object(w.b)(null,(function(e){return{auth:function(t,n,a){return e(function(e,t,n){return function(a){var r,i,o,u,s;return j.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return r={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzf8ZCU3Z_WZrGAmz2Hc0793MjVlCsVWI",n&&(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzf8ZCU3Z_WZrGAmz2Hc0793MjVlCsVWI"),c.next=5,j.a.awrap(Y.a.post(i,r));case 5:o=c.sent,u=o.data,s=new Date((new Date).getTime()+1e3*u.expiresIn),localStorage.setItem("token",u.idToken),localStorage.setItem("userId",u.localId),localStorage.setItem("expirationDate",s),a(Se(u.idToken)),a(Ae(u.expiresIn));case 13:case"end":return c.stop()}}))}}(t,n,a))}}}))(Te),Ue=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return r.a.createElement(oe.a,{to:"/"})}}]),t}(r.a.Component);var Fe=Object(w.b)(null,(function(e){return{logout:function(){return e(Ie())}}}))(Ue),He=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=r.a.createElement(oe.d,null,r.a.createElement(oe.b,{path:"/auth",component:xe}),r.a.createElement(oe.b,{path:"/quiz/:id",component:ie}),r.a.createElement(oe.b,{path:"/",exact:!0,component:qe}),r.a.createElement(oe.a,{to:"/"}));return this.props.isAutheticated&&(e=r.a.createElement(oe.d,null,r.a.createElement(oe.b,{path:"/quiz-creator",component:ye}),r.a.createElement(oe.b,{path:"/quiz/:id",component:ie}),r.a.createElement(oe.b,{path:"/logout",component:Fe}),r.a.createElement(oe.b,{path:"/",exact:!0,component:qe}),r.a.createElement(oe.a,{to:"/"}))),r.a.createElement(Q,null,e)}}]),t}(r.a.Component);var Ne=Object(oe.g)(Object(w.b)((function(e){return{isAutheticated:!!e.auth.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(Ie()):(e(Se(t)),e(Ae((n.getTime()-(new Date).getTime)/1e3)))}else e(Ie())}))}}}))(He));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=n(18),De={quizes:[],loading:!1,error:null,results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:null};var Me=n(58),Re={quiz:[]};var Ze={token:null};var Ve=Object(Le.c)({quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUIZES_START":return Object(ue.a)({},e,{loading:!0});case"FETCH_QUIZES_SUCCESS":return Object(ue.a)({},e,{loading:!1,quizes:t.quizes});case"FETCH_QUIZES_ERROR":return Object(ue.a)({},e,{loading:!1,error:t.error});case"FETCH_QUIZ_SUCCESS":return Object(ue.a)({},e,{loading:!1,quiz:t.quiz});case"QUIZ_SET_STATE":return Object(ue.a)({},e,{answerState:t.answerState,results:t.results});case"FINISH_QUIZ":return Object(ue.a)({},e,{isFinished:!0});case"QUIZ_NEXT_QUESTION":return Object(ue.a)({},e,{activeQuestion:t.activeQuestionNumber,answerState:null});case"RETRY_QUIZ":return Object(ue.a)({},e,{activeQuestion:0,isFinished:!1,answerState:null,results:{}});default:return e}},quizCreator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_QUIZ_QUESTION":return Object(ue.a)({},e,{quiz:[].concat(Object(Me.a)(e.quiz),[t.item])});case"RESET_QUIZ_CREATION":return Object(ue.a)({},e,{quiz:[]});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return Object(ue.a)({},e,{token:t.token});case"AUTH_LOGOUT":return Object(ue.a)({},e,{token:null});default:return e}}}),Be=n(57),We="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Le.d,Xe=Object(Le.e)(Ve,We(Object(Le.a)(Be.a))),Ge=r.a.createElement(w.a,{store:Xe},r.a.createElement(C.a,null,r.a.createElement(Ne,null)));o.a.render(Ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.941fc50c.chunk.js.map