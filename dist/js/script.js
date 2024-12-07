window.addEventListener("load",()=>{document.querySelectorAll("*").forEach(e=>{e.classList.add("visible")})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".text-bar"),i=[.7,.6,.9,.6,.8,.6];var a=()=>{e.forEach((e,a)=>{var t=e.getBoundingClientRect(),r=e.querySelector(".bar-on-bar"),e=e.querySelector(".bar");0<=t.top&&t.bottom<=window.innerHeight&&(e.style.transition="width 1s ease-in-out",e.style.width="167px",t=167*i[a],r.style.transition="width 1s ease-in-out",r.style.width=t+"px")})};window.addEventListener("scroll",a),a()}),document.addEventListener("DOMContentLoaded",()=>{var e=document.querySelectorAll(".diagram");let a=new IntersectionObserver(e=>{e.forEach(r=>{if(r.isIntersecting){{var i=r.target;let e=parseInt(i.getAttribute("data-percent"))/100*360,a=0,t=setInterval(()=>{(a+=3)>=e&&(clearInterval(t),a=e),i.style.background=`conic-gradient(#ff6d03 ${a}deg, lightgray 0)`},10)}a.unobserve(r.target)}})},{rootMargin:"0px",threshold:.5});e.forEach(e=>{a.observe(e)})});let headers=document.querySelectorAll(".toggle-header");headers.forEach(a=>{a.addEventListener("click",()=>{var e=a.nextElementSibling;"none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none"})}),document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{var e=await fetch("/data/data.json");if(!e.ok)throw new Error("Failed to load data");var t=await e.json();{var r=t.education;let a=document.getElementById("education-section");a.innerHTML="",r.forEach(e=>{a.innerHTML+=`
                <div class="education-item section-title-2 visible">
                    <p class="sub-paragraph visible" style="margin-top: 100px">${e.major}</p>
                    <div class="under-sub-par visible">
                        <p class="Name-paragraph visible">${e.university}</p>
                        <p class="time-paragraph visible">${e.years}</p>
                    </div>
                    <p class="par visible">${e.paragraph}</p>
                </div>`})}{var i=t.work;let a=document.getElementById("work-section");a.innerHTML="",i.forEach(e=>{a.innerHTML+=`
            <div class="section-title-2 visible">
                <div class="sub-paragraph visible" style="margin-top: 90px;">
                    <p class="sub-paragraph visible">${e.mayor}</p>
                    <p class="time2-paragraph visible">${e.year}</p>
                </div>
                <p class="Name-paragraph2 visible">${e["company-name"]}</p>
                <p class="par visible">${e.paragraph}</p>
            </div>`})}}catch(e){console.error("Error loading data:",e)}})()});