(this["webpackJsonpmy-cv"]=this["webpackJsonpmy-cv"]||[]).push([[0],{28:function(e,c,t){},30:function(e,c,t){},37:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(19),j=t.n(i),r=(t(27),t(28),t(15)),a=t.n(r),l=t(20),b=t(7),d=t.p+"static/media/Matt-Gravatar.6f816d88.png",x=(t(30),t(38)),O=t(39),h=t(40),o=t(17),m=t.n(o),u=t(0),f=function(e){var c=Object(s.useState)(null),t=Object(b.a)(c,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){var c=m()(e.basics.fullTimeExperienceStartDate),t=m()().diff(c,"years");i(t)}),[e.basics.fullTimeExperienceStartDate]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{children:Object(u.jsxs)("div",{className:"basic-info mb-sm-3",children:[Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:e.basics.jobTitle})}),Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:"".concat(n," years of experience")})}),Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:e.basics.location})})]})})})},v=t(11),p=t(12),N=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)("div",{className:"profiles",children:e.profiles.map((function(e,c){var t="github"===e.iconName?v.a:"linkedin"===e.iconName?v.b:"stack-overflow"===e.iconName?v.d:v.c;return Object(u.jsxs)("div",{children:[Object(u.jsx)(p.a,{icon:t,className:"me-2"}),Object(u.jsx)("a",{href:e.url,children:e.username})]},c)}))})})})})})},g=t(3),y=function(e){return Object(u.jsxs)("h3",{className:"my-3 mb-4",children:[e.icon&&Object(u.jsx)(p.a,{icon:e.icon,className:"me-2"}),e.title]})},w=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"personal-summary mb-3 text-start",children:[Object(u.jsx)(y,{title:"Personal Statement",icon:g.d}),e.personalSummary]})})})})})},D=t(22),F=t(18),k=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"skills mb-3",children:[Object(u.jsx)(y,{title:"Skills",icon:g.g}),Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:e.skills.map((function(e,c){return Object(u.jsx)(h.a,{xs:12,sm:6,md:4,lg:3,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h5",{children:e.name})}),Object(u.jsx)("div",{children:Object(u.jsx)(D.Rating,{ratingValue:20*e.rating,readonly:!0,allowHover:!1,fillColor:"currentColor",emptyIcon:Object(u.jsx)(F.a,{size:25}),fullIcon:Object(u.jsx)(F.a,{size:25})})}),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:[Object(u.jsx)("label",{children:e.level}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"".concat(e.yearsOfExperience," ").concat(1!==e.yearsOfExperience?"years":"year"," of experience")})]})})]})},c)}))})})]})})})})})},S=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"work-history mb-3",children:[Object(u.jsx)(y,{title:"Work History",icon:g.h}),e.jobHistory.map((function(e,c){return Object(u.jsxs)("div",{className:"mb-5",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h5",{children:e.isCurrentRole?"".concat(e.start," to Present"):"".concat(e.start," to ").concat(e.end)})}),Object(u.jsx)("div",{className:"fst-italic",children:e.position}),Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsx)("a",{href:e.website,children:e.company})}),Object(u.jsx)("div",{className:"mb-3",children:e.responsibilities.map((function(e,c){return Object(u.jsx)("p",{children:e},c)}))}),Object(u.jsx)("div",{className:"fw-bold",children:"Achievements"}),Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:e.highlights.map((function(e,c){return Object(u.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},c)}))})})]},c)}))]})})}),Object(u.jsx)("hr",{})]})})},P=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"values mb-3",children:[Object(u.jsx)(y,{title:"Value Proposition",icon:g.b}),e.valuePropositions.map((function(e,c){return Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsx)("label",{dangerouslySetInnerHTML:{__html:e.description}})},c)}))]})})})})})},T=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"tooling mb-3",children:[Object(u.jsx)(y,{title:"Tooling",icon:g.i}),e.tooling.map((function(e,c){var t=Object(u.jsx)("div",{children:" ".concat(e.current.join(", "))}),s=e.historical.length<=0?null:Object(u.jsx)("div",{children:" ".concat(e.historical.join(", "))});return Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h5",{children:e.name})}),Object(u.jsx)("div",{className:"fst-italic",children:"Current"}),Object(u.jsx)("div",{className:"mb-2",children:t}),e.historical.length>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"fst-italic",children:"Historical"}),Object(u.jsx)("div",{className:"mb-2",children:s})]})]},c)}))]})})})})})},C=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"open-source-development mb-3",children:[Object(u.jsx)(y,{title:"Open Source Contributions",icon:g.f}),e.projects.sort((function(e,c){return function(e,c){var t=e.displayName,s=c.displayName;return t<s?-1:t>s?1:0}(e,c)})).map((function(e,c){return Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("div",{className:"fw-bold",children:e.displayName}),Object(u.jsx)("div",{children:e.description}),Object(u.jsx)("div",{children:e.githubUrl&&Object(u.jsx)("a",{href:e.githubUrl,children:"Project homepage"})})]},c)}))]})})})})})},H=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"publications mb-3",children:[Object(u.jsx)(y,{title:"Publications",icon:g.c}),e.publications.map((function(e,c){return Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("div",{className:"fw-bold",children:e.fullReleaseDate.year}),Object(u.jsx)("div",{className:"fst-italic",children:e.name}),Object(u.jsx)("div",{children:Object(u.jsx)("label",{children:e.authors.join(", ")})}),Object(u.jsx)("div",{children:e.summary}),Object(u.jsx)("div",{children:e.url&&Object(u.jsx)("a",{href:e.url,children:"Link"})})]},c)}))]})})})})})},E=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"qualifications mb-3",children:[Object(u.jsx)(y,{title:"Qualifications",icon:g.e}),e.qualifications.map((function(e,c){return Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("div",{className:"fw-bold",children:"".concat(e.start.year,"-").concat(e.end.year)}),Object(u.jsx)("div",{className:"fst-italic",children:e.endorsement?"".concat(e.studyType," with ").concat(e.endorsement):"".concat(e.studyType)}),Object(u.jsx)("div",{children:e.area&&"Majoring in ".concat(e.area)}),Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:e.website,children:e.institution})})]},c)}))]})})})})})},I=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"references mb-3",children:[Object(u.jsx)(y,{title:"References",icon:g.j}),e.references.map((function(e,c){return Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h5",{children:e.role})}),Object(u.jsx)("div",{children:e.details})]},c)}))]})})})})})},L=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(P,{valuePropositions:e.resumeData.valuePropositions})})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(T,{tooling:e.resumeData.tooling})})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(C,{projects:e.resumeData.openSourceProjects})})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(H,{publications:e.resumeData.publications})})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(E,{qualifications:e.resumeData.qualifications})})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(I,{references:e.resumeData.references})})}),Object(u.jsx)("hr",{})]})})},A=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{className:"awards mb-3",children:[Object(u.jsx)(y,{title:"Awards",icon:g.a}),e.awards.filter((function(e){return e.display})).map((function(e,c){return Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("div",{className:"fw-bold",children:e.title}),Object(u.jsx)("div",{className:"fst-italic",children:"Awarded by ".concat(e.awarder," on ").concat(e.date)}),Object(u.jsx)("div",{children:e.summary}),Object(u.jsx)("div",{children:e.link&&Object(u.jsx)("a",{href:e.link,children:"Link"})})]},c)}))]})})}),Object(u.jsx)("hr",{})]})})},M=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)("img",{className:"mt-4",src:e.resumeData.basics.picture,alt:"avatar"})})})}),Object(u.jsx)(x.a,{children:Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)("h1",{className:"my-3",children:e.resumeData.basics.name})})})}),Object(u.jsxs)(x.a,{children:[Object(u.jsxs)(O.a,{children:[Object(u.jsx)(h.a,{xs:12,sm:{span:6},md:{span:4,offset:2},className:"text-center text-sm-end",children:Object(u.jsx)(f,{basics:e.resumeData.basics})}),Object(u.jsx)(h.a,{xs:12,sm:6,md:4,className:"text-center text-sm-start",children:Object(u.jsx)(N,{profiles:e.resumeData.basics.profiles})})]}),Object(u.jsx)("hr",{})]})]}),Object(u.jsx)("div",{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(w,{personalSummary:e.resumeData.basics.summary})})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(k,{skills:e.resumeData.skills})})}),Object(u.jsx)("hr",{})]})}),Object(u.jsx)("div",{className:"content text-start",children:Object(u.jsx)(x.a,{children:Object(u.jsxs)(O.a,{children:[Object(u.jsxs)(h.a,{xs:12,md:7,lg:7,children:[Object(u.jsx)(S,{jobHistory:e.resumeData.jobHistory}),Object(u.jsx)(A,{awards:e.resumeData.awards})]}),Object(u.jsx)(h.a,{xs:12,md:5,lg:5,children:Object(u.jsx)(L,{resumeData:e.resumeData})})]})})}),Object(u.jsx)("div",{className:"footer"})]})},q=function(){var e=Object(s.useState)(null),c=Object(b.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)(!1),j=Object(b.a)(i,2),r=j[0];j[1];return Object(s.useEffect)((function(){function e(){return(e=Object(l.a)(a.a.mark((function e(){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"resume.json",e.next=3,fetch("resume.json").then((function(e){return e.json()})).catch((function(e){}));case 3:c=e.sent,console.log(c),n(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsxs)("div",{className:"App",children:[r?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(u.jsx)("p",{children:"Under construction, check back soon."})]}):null,null===t||r?null:Object(u.jsx)(M,{resumeData:t})]})},R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(c){var t=c.getCLS,s=c.getFID,n=c.getFCP,i=c.getLCP,j=c.getTTFB;t(e),s(e),n(e),i(e),j(e)}))};j.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root")),R()}},[[37,1,2]]]);
//# sourceMappingURL=main.63e3fe87.chunk.js.map