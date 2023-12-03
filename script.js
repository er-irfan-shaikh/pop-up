const cross = document.querySelector(".clos")
const container = document.querySelector(".container")
const form  = document.querySelector("form")
const input  = document.querySelector(".email")
const get  = document.querySelector(".get-news p")



// setTimeout(()=>{

    
//         container.classList.add("scalable")

    
// },1000)
get.addEventListener("click",()=>{
    get.parentElement.classList.add("get-news-display")
    container.classList.add("scalable")
})

cross.addEventListener("click",()=>{
    container.classList.remove("scalable")
    get.parentElement.classList.remove("get-news-display")
})
form.addEventListener("submit",(e)=>{
    console.log(e);
    // e.stopPropagation()
    // e.preventDefault();
   if(!input.value){
    return
   }
    container.classList.remove("scalable")
    get.parentElement.classList.remove("get-news-display")
})
