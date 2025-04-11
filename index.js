const loginButton =
document.getElementById('loginButton')
const errorMsg =
document.getElementById('errorMsg')
let attempt = 0;
const maxAttempts = 3;

loginButton.addEventListener('click',()=>{
    const username =
    document.getElementById('username').Value.trim();
    const password =
    document.getElementById('password').value.trim();
    if(username==='username'&&password==='password'){
        alert('Login sucessful');
        errorMsg.textContent='';
        attemptCount = 0;
    }
    else{
        attemptCount++;
        const remaining = maxAttempts-attemptCount;
        if(remaining>0){
            errorMsg.textContent= 'Incorrect details'
        }
        else{
            errorMsg.textContent='Maximum attempts reached. Login disabled.';
        }
    }
});