import{c as e}from"./mobile.70c3a3a4.js";import{a as s,s as i,x as t,r as l,o as n,c as o,f as a,t as c,q as m}from"./vendor.91b30fe3.js";import"./index.644dcea4.js";const{createDemo:u}=e("actionsheet");var h=u({props:{},setup(){const e=s({isVisible1:!1,isVisible2:!1,isVisible3:!1,isVisible4:!1,isVisible5:!1,val1:"",val2:"",val3:"",val4:"",desc:"这是一段描述信息",chooseTagValue:"着色选项"});return{state:e,menuItemsOne:[{name:"选项一222"},{name:"选项二"},{name:"选项三"}],menuItemsTwo:[{name:"选项一"},{name:"选项二"},{name:"选项三",subname:"描述信息"}],menuItemsThree:[{name:"着色选项"},{name:"禁用选项",disable:!0}],chooseItem:s=>{console.log(s,"itemParams"),e.val1=s.name},chooseItemTwo:function(s){e.val2=s.name},chooseItemThree:function(s){e.val3=s.name},switchActionSheet:s=>{e[s]=!e[s]}}}});const b=m("data-v-eeb35c72");i("data-v-eeb35c72");const v={class:"demo-list demo"},d=a("h2",null,"基本用法(选择类)",-1),r=a("span",null,[a("label",null,"基础用法")],-1),p={class:"selected-option"},I=a("span",null,[a("label",null,"展示取消按钮")],-1),V={class:"selected-option"},f=a("span",null,[a("label",null,"展示描述信息")],-1),w={class:"selected-option"},C=a("h2",null,"选项状态",-1),T=a("span",null,[a("label",null,"选项状态")],-1);t();const k=b(((e,s,i,t,m,u)=>{const h=l("nut-cell"),k=l("nut-actionsheet");return n(),o("div",v,[d,a(h,{showIcon:!0,isLink:!0,onClick:s[1]||(s[1]=s=>e.switchActionSheet("isVisible1"))},{default:b((()=>[r,a("div",p,c(e.state.val1),1)])),_:1}),a(h,{showIcon:!0,isLink:!0,onClick:s[2]||(s[2]=s=>e.switchActionSheet("isVisible2"))},{default:b((()=>[I,a("div",V,c(e.state.val2),1)])),_:1}),a(h,{isLink:!0,onClick:s[3]||(s[3]=s=>e.switchActionSheet("isVisible3"))},{default:b((()=>[f,a("div",w,c(e.state.val3),1)])),_:1}),C,a(h,{isLink:!0,onClick:s[4]||(s[4]=s=>e.switchActionSheet("isVisible4"))},{default:b((()=>[T])),_:1}),a(k,{"is-visible":e.state.isVisible1,"menu-items":e.menuItemsOne,onChoose:e.chooseItem},null,8,["is-visible","menu-items","onChoose"]),a(k,{"is-visible":e.state.isVisible2,"cancel-txt":"取消","menu-items":e.menuItemsOne,onChoose:e.chooseItemTwo},null,8,["is-visible","menu-items","onChoose"]),a(k,{"is-visible":e.state.isVisible3,description:e.state.desc,"menu-items":e.menuItemsTwo,onChoose:e.chooseItemThree,"cancel-txt":"取消"},null,8,["is-visible","description","menu-items","onChoose"]),a(k,{"is-visible":e.state.isVisible4,"cancel-txt":"取消","menu-items":e.menuItemsThree,"choose-tag-value":e.state.chooseTagValue},null,8,["is-visible","menu-items","choose-tag-value"])])}));h.render=k,h.__scopeId="data-v-eeb35c72";export default h;
