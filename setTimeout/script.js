var btn = document.querySelector("button")
var h5 = document.querySelector("h5")
var img = document.querySelector('img')
var body = document.querySelector("body")

var flag = 0

btn.addEventListener("click",function(){
    if(flag==0){
     setTimeout(() => {
        btn.innerHTML = 'sending...'
        h5.innerHTML='Adding...'
    },);
    setTimeout(() => {
        h5.innerHTML= "friends"
        h5.style.color = ' green'
        img.style.border = '2px solid green'
        btn.innerHTML= 'Remove friend'
        body.style.backgroundColor = 'lightgreen'
        
    },2000);
    flag = 1
}else{
    h5.innerHTML= "Send request"
    h5.style.color = ' red'
    img.style.border = '2px solid red'
    btn.innerHTML= 'Add friend'
    body.style.backgroundColor = 'black'
    flag = 0
}
    
})