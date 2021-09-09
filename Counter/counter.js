let count = 0

let buttons = document.querySelectorAll(".btn")
let count_value = document.querySelector("#value")

console.log(buttons)
buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        // console.log(e.currentTarget.classList)
        if(e.currentTarget.classList.contains("decreaseBtn")){
            count -= 1
        }else if(e.currentTarget.classList.contains("increaseBtn")){
            count += 1
        }else{
            count = 0
        }

        // change style
        if(count >= 1){
            count_value.style.color = "green"
        }
        else if(count < 0){
            count_value.style.color = "red"
        }
        else{
            count_value.style.color = "black"
        }
        count_value.textContent = count
    })
})