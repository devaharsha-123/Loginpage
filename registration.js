function validate(){
    var password = document.GetElementById('pass');
    var password = document.GetElementById('upper');
    var password = document.GetElementById('lower');
    var password = document.GetElementById('number');
    var password = document.GetElementById('length');
    var password = document.GetElementById('sp_char');
if(pass.value.match(/[0-9]/)){
    num.style.color='green'
}
else{
    num.style.color='red'
}
if(upper.value.match(/[A-Z]/)){
    upper.style.color='green'
}
else{
    upper.style.color='red'
}
if(lower.value.match(/[a-z]/)){
    lower.style.color='green'
}
else{
    lower.style.color='red'
}
if(number.value.match(/[0-9]/)){
    number.style.color='green'
}
else{
    number.style.color='red'
}
if(length.value.match(/[pass value.length>7]/)){
    length.style.color='green'
}
else{
    length.style.color='red'
}
if(sp_char.value.match(/[@\!\#\$\%\^\&\*\?\:\;\.\?\,]/)){
    sp_char.style.color='green'
}
else{
    sp_char.style.color='red'
}


}

function confirm(){
    var pass=document.getElementById('pass');
    var cpass=document.gerElementById('cpass');
    if(pass.value=cpass.value){
        document.getElementById('pass').style.display='none';
        document.getElementById('upper').style.display='none';
        document.getElementById('lower').style.display='none';
        document.getElementById('number').style.display='none';
        document.getElementById('length').style.display='none';
        document.getElementById('sp_char').style.display='none'
        }
    else{
        document.getElementById('pass').style.display='block';
        document.getElementById('upper').style.display='block';
        document.getElementById('lower').style.display='block';            
        document.getElementById('number').style.display='block';
        document.getElementById('length').style.display='block';
        document.getElementById('sp_char').style.display='block';
        }
}