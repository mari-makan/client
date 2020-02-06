// localStorage.setItem('token', '123456')
// localStorage.clear()

function hideAll(){
    $("#home").hide()
    $("#formSignIn").hide()
}

$(document).ready(() => {

    if(localStorage.token){
        hideAll()
        $("#home").show()
    } else {
        hideAll()
        $("#formSignIn").show()
    }

    // LOGIN
    $("#signIn").on("submit", () => {
        hideAll()
        // DUMMY TOKEN  ================================
        localStorage.setItem('token', '123456')
        $("#home").show()
    })
})