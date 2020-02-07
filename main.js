// localStorage.setItem('token', '123456')
// localStorage.clear()

function hideAll(){
    $("#home").hide()
    $("#formSignIn").hide()
    $("#formSignUp").hide()
}

$(document).ready(() => {

    if(localStorage.token !== undefined){
        console.log(`masuk`)
        hideAll()
        $("#check").show()
    } else {
        hideAll()
        $("#formSignIn").show()
    }

    // LOGIN
    $("#signIn").on("submit", (e) => {
        // e.preventDefault()
        hideAll()
        console.log(`masuk`)
        // DUMMY TOKEN  ================================
        localStorage.setItem('token', '123456')
        $("#home").show()
    })

})