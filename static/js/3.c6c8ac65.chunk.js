(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{292:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2JV6W",mainPhoto:"ProfileInfo_mainPhoto__3qfen",contact:"ProfileInfo_contact__2H8JV"}},293:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3LXpu",posts:"MyPosts_posts__3tIun"}},294:function(e,t,a){e.exports={item:"Post_item__4onop"}},295:function(e,t,a){"use strict";a.r(t);var n=a(34),o=a(35),r=a(38),s=a(37),l=a(0),i=a.n(l),c=a(96),u=a(292),m=a.n(u),p=a(64),f=(i.a.Component,a(107)),d=a.n(f),b=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],r=Object(l.useState)(e.status),s=Object(c.a)(r,2),u=s[0],m=s[1];Object(l.useEffect)((function(){m(e.status)}),[e.status]);return i.a.createElement("div",null,n?i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},value:u})):i.a.createElement("div",null,"Status: ",i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"enter your status")))},h=a(129),v=a(32),E=a(47),P=a.n(E),k=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("button",null,"save"),n&&i.a.createElement("div",{className:P.a.formSummaryError},n),i.a.createElement("div",null,"Fullname : ",Object(v.c)("Full name","fullName",[],v.a)),i.a.createElement("div",null,"Looking for a job:",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),i.a.createElement("div",null,"Professional skills:",Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)),i.a.createElement("div",null,"About me:",Object(v.c)("About me","aboutMe",[],v.b)),i.a.createElement("div",null,"Contacts: ",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{key:e},e," : ",Object(v.c)(e,"contacts."+e,[],v.a))}))))})),g=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("button",{onClick:n},"edit"),i.a.createElement("div",null,"Fullname : ",t.fullName),i.a.createElement("div",null,"Looking for a job: ",t.lookingForAob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,"Professional skills: ",t.lookingForAJobDescription),i.a.createElement("div",null,"About me: ",t.aboutMe),i.a.createElement("div",null,"Contacts: ",Object.keys(t.contacts).map((function(e){return i.a.createElement(O,{contactTitle:e,key:e,contactValue:t.contacts[e]})}))))},O=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:m.a.contact},t,": ",a)},j=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,r=e.savePhoto,s=e.saveProfile,u=Object(l.useState)(!1),f=Object(c.a)(u,2),h=f[0],v=f[1];if(!t)return i.a.createElement(p.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:m.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||d.a,className:m.a.mainPhoto}),o&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),h?i.a.createElement(k,{initialValues:t,profile:t,onSubmit:function(e){s(e).then((function(){v(!1)}))}}):i.a.createElement(g,{profile:t,isOwner:o,goToEditMode:function(){return v(!0)}}),i.a.createElement(b,{status:a,updateStatus:n})))},S=a(95),y=a(16),_=a(40),w=a(293),A=a.n(w),C=a(294),I=a.n(C),F=function(e){return i.a.createElement("div",{className:I.a.item},i.a.createElement("img",{src:"https://blog.handtalk.me/wp-content/uploads/2018/07/053-imagem-post-alt.png",alt:""}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like")," ",e.likesCount))},N=a(88),M=a(85),T=Object(M.a)(10),x=Object(h.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(N.a,{name:"newPostText",component:v.b,validate:[M.b,T],placeholder:"Whats new?"})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),J=i.a.memo((function(e){var t=Object(_.a)(e.posts).reverse().map((function(e){return i.a.createElement(F,{message:e.message,key:e.id,likesCount:e.likesCount})}));i.a.createRef();return i.a.createElement("div",{className:A.a.postsBlock},i.a.createElement("div",null,i.a.createElement("h3",null,"My post"),i.a.createElement(x,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:A.a.posts},t)))})),B=Object(y.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){return e(Object(S.a)(t))}}}))(J),D=function(e){return i.a.createElement("div",null,i.a.createElement(j,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),i.a.createElement(B,null))},U=a(10),V=a(9),L=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(D,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})))}}]),a}(i.a.Component);t.default=Object(V.d)(Object(y.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),U.f)(L)}}]);
//# sourceMappingURL=3.c6c8ac65.chunk.js.map