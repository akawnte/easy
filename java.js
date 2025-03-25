let loid = document.getElementById("lo")
let loid1 = document.querySelector("lo")
let details_btn_id = document.getElementById("details_btn")
let xmarkid = document.getElementById("xmark")
let xmarkid1 = document.querySelector("xmark")
let office_id = document.getElementById("office")
let photoshop_id = document.getElementById("photoshop")
let filmora_id = document.getElementById("filmora")
let lang_btn_id = document.getElementById("lang_btn")
let menu_icon_id = document.getElementById("menu_icon")
let menu_ul_id = document.getElementById("menu_ul")
let times_id = document.getElementById("times")


details_btn_id.addEventListener("click",()=>{
    loid.style.display="block"
    loid.style.transition="1000"
})

xmarkid.addEventListener("click",()=>{
    loid.style.display="none"
})

setInterval(()=>{
    let x = document.getElementById("icon")
},3000)
setInterval(()=>{
    let x = document.querySelector(".fa-solid")
},3000)

lang_btn_id.addEventListener("click",()=>{
    office_id.style.display="none"
    photoshop_id.style.display="none"
    filmora_id.style.display="none"
})
menu_icon_id.addEventListener("click",()=>{
    menu_ul_id.style.display="block"
    
})
times_id.addEventListener("click",()=>{
    menu_ul_id.style.display="none"
    
})

