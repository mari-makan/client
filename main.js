localStorage.setItem('token', '123456')
// localStorage.clear()

function hideAll(){
    $("#landing-page").hide()
    $("#formSignIn").hide()
<<<<<<< HEAD
    $("#menu").hide()
=======
    $("#formSignUp").hide()
>>>>>>> origin
}
$(document).ready(() => {
<<<<<<< HEAD
    // hideAll()
    // hideAll()
    // // $("#menu").hide()
    // if(localStorage.token){
    //     hideAll()
    //     $("#landing-page").show()
    // } else {
    //     hideAll()
    //     $("#formSignIn").show()
    // }

    // LOGIN
    // $("#signIn").on("submit", () => {
    //     hideAll()
    //     // DUMMY TOKEN  ================================
    //     localStorage.setItem('token', '123456')
    //     $("#landing-page").show()
    // })
=======

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

>>>>>>> origin
})