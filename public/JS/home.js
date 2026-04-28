let inst = document.getElementById('inst')
let hero = document.getElementById('hero')

inst.addEventListener('click', ()=>{
    window.location.href = '/form'
})


hero.addEventListener('click', async (e)=>{
    if(e.target.classList.contains('dle')){
        const id = e.target.getAttribute('data-id')
        console.log(id)

        const resp = await fetch(`/deletenote/${id}`,{
            method : 'DELETE'
        })
        const card = e.target.closest('.card')
        card.remove()
    }
      if(e.target.classList.contains('upd')){
        const id = e.target.getAttribute('data-id')
        console.log(id)
        window.location.href = `/getData/${id}`
    }
})

hero.addEventListener('click', (e)=>{
    if(e.target.classList.contains('card')){
        const id = e.target.getAttribute('data-id')
        console.log(id)
        window.location.href = `/display/${id}`
    }
})