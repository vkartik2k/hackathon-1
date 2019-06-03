$(function () {
    $("#login").click(function () {
        let password = $("#password").val()
        let email = $("#email").val()
        $.post('../route/ashevisdkedjiqac/',
        {
            password:password,
            email:email
        },
        function(data){
            console.log(data)
            if(data){
                window.open('dashboard.html')
            }
            else{
                alert("Incorrect!")
            }
        })
    })
})