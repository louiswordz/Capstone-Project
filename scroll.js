document.addEventListener('DOMContentLoaded', ()=>{
    let x = 0
    document.querySelectorAll('.yt').forEach(sec =>{
        sec.onscroll = ()=>{
            document.querySelectorAll('.sp').forEach(span =>{
                span.innerHTML = x++
            })       
        }
    })
})

document.addEventListener('DOMContentLoaded', ()=>{
    let x = 0
    document.querySelector('#secc2').onscrollend = ()=>{
        document.querySelector('#sp2').innerHTML = x+=2;
    }
})

function showPages(page){
    document.querySelectorAll('.rr').forEach(page =>{
        page.style.visibility = 'hidden'
    })
    document.querySelector(`#${page}`).style.visibility = 'visible'
}

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('button').forEach(button=>{
        button.onclick = ()=>{
            showPages(button.dataset.pages)
        }
    })
})