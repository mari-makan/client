localStorage.setItem('token', '123456')
// localStorage.clear()

function hideAll(){
    $("#landing-page").hide()
    $("#formSignIn").hide()
<<<<<<< HEAD
    $("#menu").hide()
=======
    $("#formSignUp").hide()
<<<<<<< HEAD
    $("#carouselExampleCaptions").hide()
=======
>>>>>>> origin
>>>>>>> development
}
$(document).ready(() => {
<<<<<<< HEAD
    hideAll()
    $("#formSignIn").show()
    $("#formSignUp").hide()
    // if(localStorage.token !== undefined){
    //     // console.log(`masuk`)
    //     hideAll()
    //     $("#check").show()
=======
<<<<<<< HEAD
    // hideAll()
    // hideAll()
    // // $("#menu").hide()
    // if(localStorage.token){
    //     hideAll()
    //     $("#landing-page").show()
>>>>>>> development
    // } else {
    //     hideAll()
    //     $("#formSignIn").show()
    // }
<<<<<<< HEAD
=======

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
>>>>>>> development

    // LOGIN

    $('#showForm').on("click", (event) => {

    })

    $("#signIn").on("submit", (e) => {
        // e.preventDefault()
        hideAll()
        console.log(`masuk`)
        // DUMMY TOKEN  ================================
        localStorage.setItem('token', '123456')
        $("#landing-page").show()
    })

>>>>>>> origin
})