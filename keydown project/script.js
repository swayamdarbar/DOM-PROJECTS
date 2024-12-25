
let img = document.querySelector('img')
let movex = 0
let movey = 0

document.addEventListener('keydown', function(dets){
    if (dets.code == 'ArrowRight' && movex<85){
        movex++
        img.style.left = movex + "%"
    }else if(dets.code == 'ArrowLeft' && movex>0){
        movex--
        img.style.left = movex+"%"
    }else if(dets.code == 'ArrowDown' && movey<69){
        movey++
        img.style.top = movey+"%"
    }else if(dets.code == 'ArrowUp'  && movey>0){
        movey--
        img.style.top = movey+"%"
    }else{
        console.log('other  ')
    }
    
})
