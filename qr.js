let form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let input=document.querySelector('input').value
    console.log(input)
    let qrUrl=`https://chart.googleapis.com/chart?cht=qr&chs=400x500&chl=${input}`
    let image=document.querySelector('img')
    image.src=qrUrl
    

})