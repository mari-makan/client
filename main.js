localStorage.setItem('token', '123456')
// localStorage.clear()

function hideAll(){
    $("#landing-page").hide()
    $("#formSignIn").hide()
    $("#menu").hide()
}
$(document).ready(() => {
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
})