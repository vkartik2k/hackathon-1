$(function () {
    $("#signUp").click(function () {

        let name = $("#username").val()
        let password = $("#password").val()
        let repassword = $("#repassword").val()
        let phoneno = $("#phoneno").val()
        let email = $("#email").val()
        let state = $("#state").val()

        let flag = true;
        let msg = "";

        if((phoneno.toString()).length != 10 ){
            msg +="*Invalid Contact no.";
            flag = false;

        }
        if(password!=repassword){
            flag = false;
            msg +="*Password does not match with Re-password";
        }
        if(password.length < 6){
            flag = false;
            msg +="*Password is too short";
        }
        
        let emailcheck1 =  email.split('@').length;
        let emailcheck2 = email.split('.');
        if(emailcheck2.length >= 2){
            if(emailcheck1!=2 || emailcheck2[emailcheck2.length-1].length <= 0 || emailcheck2[emailcheck2.length-2].length <= 0){
                flag = false;
                msg +="*Invalid Email";
            }
        }
        else{
            flag = false;
            msg +="*Invalid Email";

        }

        if(flag){
            $.post('../route/jhucdghnbyhfxpqm/',
        {
            name : name,
            password:password,
            phoneno:phoneno,
            email:email,
            address:address,
            state:state
        },
        function (data) {
            if(data){
                alert("Welcome to HEROS!")
            }
            else{
                alert("Already exist!")
            }
        })

        }
        else {
            alert(msg)
        }
        
        
    })
})