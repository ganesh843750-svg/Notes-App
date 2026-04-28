let form = document.getElementById('crtform');
let resp = document.getElementById('resp');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let formdata = new FormData(form);
    console.log(formdata)
    const response = await fetch('/createnote',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(Object.fromEntries(formdata))
    })
    resp.textContent = await response.text();
})