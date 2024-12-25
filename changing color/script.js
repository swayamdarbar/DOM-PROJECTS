var btn =document.querySelectorAll('button')
var body = document.querySelector('body')
// console.log(btn)
btn.forEach(function(elem){
   elem.addEventListener('click', function(){
       console.log(elem.innerHTML)
       body.style.backgroundColor = elem.innerHTML
   })
})