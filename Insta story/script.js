
var users =[
    {
        story:"https://images.unsplash.com/photo-1652946619064-a12aec2d8456?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp:"https://plus.unsplash.com/premium_photo-1661517614893-3729e3b6fd74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        username:'devil boy'
    },
    {
        story:"https://images.unsplash.com/photo-1722932620084-8f308ab8ee9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        dp:"https://images.unsplash.com/photo-1640441853768-dab61406bdbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
        username: "fucking"
    },
    {
        story:"https://images.unsplash.com/photo-1721323960623-fdae1ec6c644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        dp:"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        story:"https://images.unsplash.com/photo-1695760832442-6e4f479f8786?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        dp:"https://images.unsplash.com/photo-1709884732297-4b3c1a3f725b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        story:"https://images.unsplash.com/photo-1703867736622-f5cad7e26355?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        dp:"https://plus.unsplash.com/premium_vector-1726351115603-e3bcd8c1d9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        story:"https://images.unsplash.com/photo-1723683323848-e25a105e198d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        dp:"https://plus.unsplash.com/premium_vector-1714646949344-34a055dd80b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        story:"https://images.unsplash.com/photo-1694426432470-08d8226772c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp:"https://images.unsplash.com/photo-1709884735646-897b57461d61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    },
]
var sum=""
var storiyan =document.querySelector(".storiyan")
users.forEach(function(elem,idx){
    sum =sum+ `<div class="story">
                    <img id="${idx}"src="${elem.dp}" alt="">
                </div>`
         
})

storiyan.innerHTML=sum

var fullUser = document.querySelector('.full h2')
var full =document.querySelector(".full")

storiyan.addEventListener('click',function(dets){

var grow = 0
var inter = setInterval(function(){
    grow++

    growth.style.width = grow+'%'
},30)


    var value = users[dets.target.id].story
    full.style.display= 'block'
    full.style.backgroundImage=`url(${value})`  
    fullUser.innerHTML= value.username  
    
    
    setTimeout(function(){
        full.style.display = 'none'
        clearInterval(inter)
    },3000)
 })


