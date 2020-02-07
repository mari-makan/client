// localStorage.setItem('token', '123456')
// localStorage.clear()

function hideAll(){
    $("#landing-page").hide()
    $("#formSignIn").hide()
    $("#formSignUp").hide()
    $("#menu").hide()
}

$(document).ready(() => {

    if(localStorage.token){
        hideAll()
        $("#landing-page").show()
    } else {
        hideAll()
        $("#formSignIn").show()
    }

    // LOGIN

    $("#showSignIn").on("click", (e) =>  {
        hideAll()
        $("#formSignIn").show()
    })

    $("#signIn").submit((e) => {
        e.preventDefault()
        let loginUser = {
            email : $("#emailSignIn").val(),
            password : $("#passwordSignIn").val()
        }
        console.log(loginUser)
        $.ajax("http://localhost:3000/login", {
            method : 'post',
            data : loginUser
        })
            .done( user => {
                console.log(user)
                hideAll()
                $("#landing-page").show()
                localStorage.setItem('token', user.token)
                console.log(`masuk`)
            })
            .fail( err => {
                console.log(err)
            })
            .always( result => {
                console.log(`success`)
            })
    })

    $("#showSignUp").on("click", (e) =>  {
        hideAll()
        $("#formSignUp").show()
    })
    $("#showSignUp2").on("click", (e) =>  {
        hideAll()
        $("#formSignUp").show()
    })

    $("#signUp").on("submit", (e) =>  {
        e.preventDefault()
        let registerUser = {
            email : $("#emailSignUp").val(),
            password : $("#passwordSignUp").val()
        }

        $.ajax("http://localhost:3000/register", {
            method : `post`,
            data : registerUser,
        })
            .done( user => {
                hideAll()
                $("#formSignIn").show()
            })
            .fail( err => {
                console.log(err)
            })
            .always( result => {
                console.log(`success`)
            })
    })


    $("#showSignOut").on("click", (e) =>  {
        localStorage.clear()
        hideAll()
        $("#formSignIn").show()
    })
})