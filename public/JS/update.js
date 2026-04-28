let updform = document.getElementById('updform')
let resp = document.getElementById('resp')
const id = window.location.pathname.split('/').pop()

updform.addEventListener('submit', async (e)=>{
    console.log(id)
    e.preventDefault()
    let formdata = new FormData(updform)

    const result = await fetch(`/updatenote/${id}`,{
        method: 'PUT',
        headers : {
            'Content-Type': "application/json"
        },
        body : JSON.stringify(Object.fromEntries(formdata))
    })
    resp.textContent = await result.text()
})