const input=document.getElementById('input-mail');
const button=document.getElementById('btn-submit');
const message=document.getElementById('warning-msg');

const validEmail= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;


button.addEventListener('click',(e)=>{
    e.preventDefault();

    if(validEmail.test(input.value)){
        message.style.visibility="hidden";
        input.style.boxShadow="none";
        input.value=null;
    }else{
        message.style.visibility="visible";
        input.style.boxShadow="inset 0 0 1px 1px red";
        
    }
});