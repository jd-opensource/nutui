import{c as s,T as t}from"./mobile.10343afc.js";import{r as o,o as i,c as a,f as e}from"./vendor.6c8f51ae.js";import"./index.fe40b7a4.js";const{createDemo:n}=s("toast"),l=n({setup:()=>({textToast:s=>{t.text(s)},successToast:s=>{t.success(s)},errorToast:s=>{t.fail(s)},warningToast:s=>{t.warn(s)},loadingToast:s=>{t.loading(s)}})}),r={class:"demo"},c=e("h2",null,"基本用法",-1);l.render=function(s,t,n,l,T,d){const k=o("nut-cell");return i(),a("div",r,[c,e(k,{title:"Text 文字提示","is-link":"",onClick:t[1]||(t[1]=t=>s.textToast("网络失败，请稍后再试~"))}),e(k,{title:"Success 成功提示","is-link":"",onClick:t[2]||(t[2]=t=>s.successToast("成功提示"))}),e(k,{title:"Error 失败提示","is-link":"",onClick:t[3]||(t[3]=t=>s.errorToast("失败提示"))}),e(k,{title:"Warning 警告提示","is-link":"",onClick:t[4]||(t[4]=t=>s.warningToast("警告提示"))}),e(k,{title:"Loading 加载提示","is-link":"",onClick:t[5]||(t[5]=t=>s.loadingToast("加载中"))})])};export default l;
