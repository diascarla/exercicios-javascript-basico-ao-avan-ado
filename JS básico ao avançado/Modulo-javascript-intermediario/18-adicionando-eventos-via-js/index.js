document.
    querySelector("select[name='estado']");
    addEventListener("change", function(event){
    alert('mudou o select')
    console.log(event.target.value)
});