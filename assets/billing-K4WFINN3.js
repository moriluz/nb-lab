import{a as i,c as a,d as o}from"./chunk-E3IS6AUI.js";async function u(e){let{data:n}=await a.from("invoices").select("id, amount, status, created_at").eq("user_id",e.id);document.getElementById("panel").innerHTML=(n??[]).map(t=>`<li>${t.amount} \u2014 ${t.status}</li>`).join("")}var s=i(()=>{o()});s();export{u as showBilling};
//# sourceMappingURL=billing-K4WFINN3.js.map
