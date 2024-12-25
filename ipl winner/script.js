var teams=[
    { name: 'PBKS', logo: 'image/pbks.jpg' },
    { name: 'DC', logo: 'image/delhi.jpg' },
    { name: 'RCB', logo: 'image/rcb.jpg' },
    { name: 'CSK', logo: 'image/csk.png' },
    { name: 'MI', logo: 'image/mi.png' },
    { name: 'SRH', logo: 'image/srh.png' },
    { name: 'KKR', logo: 'image/kkr.png' },
    { name: 'RR', logo: 'image/rr.jpg' },


]

var btn=document.querySelector('button')
var h1=document.querySelector('h1')


btn.addEventListener('click', function(){
    var num=Math.floor(Math.random()*teams.length)
    var selectedTeam=teams[num]
      h1.style.backgroundImage = `url(${selectedTeam.logo})`;
      h1.style.backgroundSize = 'contain';
      h1.style.backgroundRepeat = 'no-repeat';
      h1.style.backgroundPosition = 'center'; 
      h1.innerHTML ="";
})