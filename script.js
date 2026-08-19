const s=[...document.querySelectorAll(".slide")],d=document.querySelector(".dots");let i=0,t;
if(s.length&&d){s.forEach((_,n)=>{let b=document.createElement("button");b.className="dot"+(!n?" active":"");b.onclick=()=>show(n);d.appendChild(b)});const ds=[...document.querySelectorAll(".dot")];function show(n){s[i].classList.remove("active");ds[i].classList.remove("active");i=(n+s.length)%s.length;s[i].classList.add("active");ds[i].classList.add("active");clearInterval(t);t=setInterval(()=>show(i+1),5000)}document.querySelector(".next").onclick=()=>show(i+1);document.querySelector(".prev").onclick=()=>show(i-1);show(0);}
const menu=document.querySelector("#menu");if(menu){menu.onclick=()=>document.querySelector("nav").classList.toggle("open");document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.querySelector("nav").classList.remove("open"));}

// Contact form validation and rating colours
const mobileInput=document.querySelector("#mobile");
if(mobileInput){
  mobileInput.addEventListener("input",()=>{mobileInput.value=mobileInput.value.replace(/\D/g,"").slice(0,10);});
}
const ratingSelect=document.querySelector("#rating");
if(ratingSelect){
  ratingSelect.addEventListener("change",()=>{
    ratingSelect.className="rating-select";
    const selected=ratingSelect.value.charAt(0);
    if(selected>=1&&selected<=5) ratingSelect.classList.add(`rating-${selected}-selected`);
  });
}

const form=document.querySelector("#form");if(form){form.addEventListener("submit",async e=>{e.preventDefault();const note=document.querySelector("#note"),submit=form.querySelector('button[type="submit"]'),name=document.querySelector("#name").value.trim().replace(/\s+/g," "),city=document.querySelector("#city").value.trim().replace(/\s+/g," ");document.querySelector("#email-subject").value=`WEBSITE_ENQUIRY_${name}_${city}`;const original=submit.textContent;submit.disabled=true;submit.textContent="SUBMITTING...";note.textContent="";try{const response=await fetch("https://formsubmit.co/ajax/palsonafoods@gmail.com",{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form)))});if(!response.ok)throw new Error("Unable to submit enquiry");const result=await response.json();if(result.success==="true"||result.success===true||response.ok){note.textContent="Thank you for contacting PALSONA FOODS. Your enquiry has been submitted successfully.";form.reset();}else throw new Error("Unable to submit enquiry");}catch(error){note.textContent="Sorry, your enquiry could not be submitted. Please try again later.";}finally{submit.disabled=false;submit.textContent=original;}});}

// Bhagar Pith product image slideshow
(()=>{const slides=[...document.querySelectorAll(".bhagar-slide")];const dotsWrap=document.querySelector(".bhagar-slider-dots");const prev=document.querySelector(".bhagar-prev");const next=document.querySelector(".bhagar-next");const current=document.querySelector(".bhagar-slide-count .current");if(!slides.length||!dotsWrap||!prev||!next)return;let index=0;const dots=slides.map((_,n)=>{const b=document.createElement("button");b.type="button";b.className="bhagar-slider-dot"+(n===0?" active":"");b.setAttribute("aria-label",`Show Bhagar Pith image ${n+1}`);b.addEventListener("click",()=>showBhagar(n));dotsWrap.appendChild(b);return b});function showBhagar(n){slides[index].classList.remove("active");dots[index].classList.remove("active");index=(n+slides.length)%slides.length;slides[index].classList.add("active");dots[index].classList.add("active");if(current)current.textContent=index+1}prev.addEventListener("click",()=>showBhagar(index-1));next.addEventListener("click",()=>showBhagar(index+1));})();
