
let validate = () => {

    let Name = document.querySelector('#name').value.trim()
    let Email = document.querySelector('#email').value.trim()
    let Num = document.querySelector('#num').value.trim()
    let Pass = document.querySelector('#pass').value.trim()
    let Cpass = document.querySelector('#cpass').value.trim()

    // let error = document.querySelector('form p');  
    // error.cssText = "color: red; ";  

    let errname = document.querySelector('#errname')
    let erremail = document.querySelector('#erremail')
    let errnum = document.querySelector('#errnum')
    let errpass = document.querySelector('#errpass')
    let errcpass = document.querySelector('#errcpass'); 

    errname.innerHTML = ""; 
    erremail.innerHTML = ""; 
    errnum.innerHTML = ""; 
    errpass.innerHTML = ""; 
    errname.innerHTML = "";  

    if (Name == "") {
        errname.innerHTML = "please enter Name";
        // errname.style.color = "red";
        return false;
    }
    else if (Email == "") {
        erremail.innerHTML = "please enter Email";
        errname.innerHTML=""; 
        return false;
    }
    else if (!(Email.includes("@") && Email.includes(".com"))) {
        erremail.innerHTML = "please enter valid email only"; 
        return false; 
    } 
    else if (Num.length != 10) {
        errnum.innerHTML = "please enter valid Number";
        return false;
    }
    else if (isNaN(Num)) {
        errnum.innerHTML = "Please enter Number only";
        return false;
    } 
    else if (Pass != Cpass) { 
        errpass.innerHTML = "Please enter same password"; 
        Cpass = ""; 
        document.querySelector('#cpass').focus() 
        return false; 
    }
    else if (!( Pass.match( /[1234567890]/ ) && 
                Pass.match( /[!@#$%^&*()]/ ) && 
                Pass.match( /[a-z]/ ) && 
                Pass.match( /[A-Z]/ )
    )) 
    { 
        errcpass.innerHTML = "please include special char to password";  
        return false; 
    } 
}






 