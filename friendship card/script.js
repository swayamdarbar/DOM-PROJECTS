var btn = document.querySelector('button')
var h5 = document.querySelector('h5')
var img = document.querySelector('img')



var flag = 0
btn.addEventListener('click', function(){
    if(flag == 0){
    h5.style.color = ' green'
    h5.innerHTML = 'Friends'
    img.style.border = "3px solid green"
    btn.innerHTML = ' Remove'
    flag = 1
    }else{
        h5.style.color = ' red'
        h5.innerHTML = 'Stranger'
        img.style.border = "3px solid red"
        btn.innerHTML = 'Add friend'
        flag = 0

    }
    
})