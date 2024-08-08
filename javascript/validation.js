function uname(e){
    data=e.value;
    regx=/^[a-z0-9]{6}$/

    result=regx.test(data); 
    if(result){
        document.getElementById("msg").innerHTML=`<span class="smsg">Success</span>`;
    }
    else{
        document.getElementById("msg").innerHTML=`<span class="emsg">Error</span>`;
    }
}
function email(e){
    data=e.value;
    regx=/^[a-z][a-z0-9]{3,}@[a-z]{4,}.(com||in)$/

    result=regx.test(data); 
    if(result){
        document.getElementById("msg").innerHTML=`<span class="smsg">Success</span>`;
    }
    else{
        document.getElementById("msg").innerHTML=`<span class="emsg">Error</span>`;
    }
}
function pass(e){
    data=e.value;
    regx=/([a-z0-9A-Z.]){8,12}/

    result=regx.test(data); 
    if(result){
        document.getElementById("msg").innerHTML=`<span class="smsg">Strong password</span>`;
    }
    else{
        document.getElementById("msg").innerHTML=`<span class="emsg">Weak password</span>`;
    }
}
function credit(e){
    data=e.value;
    regx=/^\d{4}-\d{4}-\d{4}-\d{4}$/

    result=regx.test(data); 
    if(result){
        document.getElementById("msg").innerHTML=`<span class="smsg">Correct Entry</span>`;
    }
    else{
        document.getElementById("msg").innerHTML=`<span class="emsg">Incorrect Entry</span>`;
    }
}