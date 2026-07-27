document.getElementById("year").textContent=new Date().getFullYear();
const m=document.querySelector(".menu"),n=document.querySelector("nav");
m.onclick=()=>n.classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>n.classList.remove("open"));
function demo(e){e.preventDefault();document.getElementById("msg").textContent="Enquiry form layout is ready. We can connect this to your WhatsApp or email before publishing.";}