let myHeader = document.body.children[1]


let myH1 = document.querySelector("h1")

myH1.style.color = "purple"
myH1.style.fontSize = "50px"
myH1.style.textAlign = "center"

let unordererList = document.querySelector("ul")
let list1 = document.createElement('li')
let list2 = document.createElement('li')
list1.textContent = "red duck"
list2.textContent = "blue duck"
unordererList.append(list1)
unordererList.append(list2)



let duckButton = document.querySelector(".quack_button")
duckButton.addEventListener('click', function(){
    let textColor = myH1.style.color;
    if(textColor==="red"){
        myH1.style.color = "green";
    }else{
        myH1.style.color = "red";
    }
})

let secondButton = document.createElement('button')
secondButton.textContent = "click me"
document.body.append(secondButton)
secondButton.addEventListener('click', function(){
    secondButton.textContent = "I was clicked"
})

let thirdButton = document.createElement('button')
thirdButton.textContent = "click me"
document.body.append(thirdButton)
thirdButton.addEventListener("click",function(e){
    e.target.textContent = 'I was clicked!'
})
let formatButton = document.querySelector('button')
formatButton.style.textColor = "purple"