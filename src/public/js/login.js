var usernameField = document.querySelector('.registor-username')
var passwordField = document.querySelector('.registor-password');
var confirmPasswordField = document.querySelector('.registor-confirm-password');
var btnRegistor = document.querySelector('.btn-registor');
var btnLogin = document.querySelector('.btn-login')
var loginHeading = document.querySelector('.login-heading')
var registorHeading = document.querySelector('.registor-heading');
// main
function Login() {
    changeHeader();
    registorHeading.addEventListener('click', function() {
        changeForm('registor')
    })
    loginHeading.addEventListener('click', function() {
        changeForm('login')
    })

    btnRegistor.addEventListener('click', ()=> {
        requireField(usernameField, 'username');
        requireField(passwordField, 'username');
        confirmPassword(confirmPasswordField, passwordField);
    })
    usernameField.addEventListener('blur', (e)=> {
        requireField(usernameField, 'username');
    })
    passwordField.addEventListener('blur', (e)=> {
        requireField(passwordField, 'password');
    })
    confirmPasswordField.addEventListener('blur', ()=> {
        requireField(confirmPasswordField, passwordField);
    })


    // event click on button registor
    btnRegistor.addEventListener('click', registor);
    modal();
    btnLogin.addEventListener('click', login)

}

function changeForm(form) {
    var loginForm = document.querySelector('.login-container');
    var registorForm = document.querySelector('.registor-container');
    var headingBg = document.querySelector('.heading-background');
    var loginHeadingText = document.querySelector('.login-heading');
    var registorHeadingText = document.querySelector('.registor-heading');
    if(form =="registor") {
        headingBg.style.left = "200px";
        loginForm.style.right = "130%";
        registorForm.style.left="0";
        registorHeadingText.style.color = "white"
        loginHeadingText.style.color = "black"
        
    } else {
        headingBg.style.left = "0";
        loginForm.style.right = "0";
        registorForm.style.left="130%";
        loginHeadingText.style.color = "white"
        registorHeadingText.style.color = "black"
    }
}

function changeHeader() {
    var url = window.location.href;
    var header = document.querySelector('.views_header');
    var footer = document.querySelector('.footer');
    if(url.includes("/login")) {
        header.style.display = "none";
        header.style.height = "0";
        footer.style.display = "none"
        footer.style.height = "0"
    }
}


function requireField(dom, text ="") {
    var value = dom.value
    if(value.length == 0 ) {
        dom.parentElement.nextElementSibling.innerText = "Không được bỏ trống trường này !";
        return false
    } else if(   !(/^[a-zA-Z0-9]+$/.test(value)))  {
        dom.parentElement.nextElementSibling.innerText = ` ${text} chứa ký tự đặc biệt!`;
        return false
    } else if(value.length < 6 || value.length > 15){
        dom.parentElement.nextElementSibling.innerText = `${text} phải có từ 6 - 15 ký tự!`;
        return false
    }else {
        dom.parentElement.nextElementSibling.innerText = "";
        return true;
    }

}

function confirmPassword(dom1, dom2) {

    if( !(/^[a-zA-Z0-9]+$/.test(dom1.value))) {
        dom1.parentElement.nextElementSibling.innerText = "Không được chứa ký tự đặc biệt"
        return false
    } else if(dom1.value != dom2.value) {
    dom1.parentElement.nextElementSibling.innerText = "Xác nhận mật khẩu không đúng, vui lòng kiểm tra lại!";
    return false
    } else {
        dom1.parentElement.nextElementSibling.innerText = "";
        return true
    }
}

function registor(e) {
    if(requireField(usernameField, 'username') && requireField(confirmPasswordField, passwordField) && requireField(passwordField, 'password')) {
        var data = {
            username : usernameField.value,
            password : passwordField.value
        }
        fetch('/login', {
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json',
                'type' : 'registor'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        })
        .then(response => response.json())
        .then(data => {
            if(data) {
                document.querySelector('.modal').style.display = "block"
            } else {
                document.querySelector('.message-registor-username').innerText = "Username này đã tồn tại!"
            }
        })
        .catch(err=> console.log(err))
    } 

}


function modal() {
    var formModal = document.querySelector('.modal')
    var btnClose = document.querySelector('.btn-close');
    btnClose.addEventListener('click', ()=> {
        formModal.style.display = "none";
    })

    var btnLoginNow = document.querySelector('.btn-login-now');
    btnLoginNow.addEventListener('click', ()=> {
        formModal.style.display = "none";
        changeForm('form')
    })
}


function login() {
    var usernameField = document.querySelector('.login-username');
    var passwordField = document.querySelector('.login-password')
    var data = {
        username : usernameField.value,
        password : passwordField.value
    }
   
    fetch('/login', {
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            'Content-Type': 'application/json',
            'type' : 'login'
        }
    })
    .then(res=>res.json())
    .then(data=>{ 
        if(data.message == true) {
            setCookie('token', data.token)
            window.location.href ="/"
        } else {
            document.querySelector('.login-error-message').innerText = "Vui lòng kiểm tra lại tài khỏan và mật khẩu";
        }
        console.log(data)
    })
    .catch(err=> {
        console.log(err)
    })

}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


export default Login

