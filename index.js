document.addEventListener("DOMContentLoaded", ()=>{
   let x = 0 
  document.querySelector('#sec').onscroll = ()=>{
    document.querySelector('span').innerHTML = x +=1
  }
});

document.addEventListener("DOMContentLoaded", ()=>{
    let x = 0
    document.querySelector('#sec2').onscrollend =()=>{
        document.querySelector('#r').innerHTML = x +=1
    }
})

function showPage(page){

    document.querySelectorAll(".x").forEach(b =>{
        b.style.display = 'none';
    })
    document.querySelector(`#${page}`).style.display = 'block';      
  
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('button').forEach(button =>{
        button.onclick = ()=>{
            showPage(button.dataset.page)
        }
    })
})




