// localStorage.setItem('token', '123456')
// localStorage.clear()

function hideAll(){
    $("#landing-page").hide()
    $("#formSignIn").hide()
    $("#formSignUp").hide()
    $("#carouselExampleCaptions").hide()
}

$(document).ready(() => {
    hideAll()
    $("#formSignIn").show()
    $("#formSignUp").hide()
    // if(localStorage.token !== undefined){
    //     // console.log(`masuk`)
    //     hideAll()
    //     $("#check").show()
    // } else {
    //     hideAll()
    //     $("#formSignIn").show()
    // }

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

})