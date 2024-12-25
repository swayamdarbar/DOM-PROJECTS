var btn = document.querySelector('button')
var bulb = document.querySelector("#bulb")

var flag = 0

btn.addEventListener('click', function(){
    if(flag == 0){
        bulb.style.backgroundColor = 'yellow'
        btn.innerHTML = 'off'
        flag = 1
    }else{
        bulb.style.backgroundColor = "transparent"
        btn.innerHTML = 'on'
        flag = 0
    }
})