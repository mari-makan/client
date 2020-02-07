function hideAll(){
    $("#landing-page").hide()
    $("#formSignIn").hide()
    $("#formSignUp").hide()
    $("#menu").hide()
    $("#homeRestaurants").hide()
    
}

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token)
    $.ajax({
            method : 'post',
            url: 'http://localhost:3000/googleLogin',
            headers: {
                id_token: id_token
            }
        })
        .done(result => {
            localStorage.setItem("token", result.token)
            console.log(result)
            console.log(`masuk`)
            hideAll()
            $("#landing-page").show()

        })
        .fail( err => {
            console.log(err)
        })
}




$(document).ready(() => {

    if(localStorage.token){
        hideAll()
        $("#landing-page").show()
    } else {
        hideAll()
        $("#formSignIn").show()
    }

    // LOGIN ===================================

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

        $.ajax("http://localhost:3000/login", {
            method : `post`,
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
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Your email / password wrong!'
                  })
                console.log(`error data`)
            })
            .always( result => {
                console.log(`success`)
            })
    })


    // SIGN UP ===================================

    $("#showSignUp").on("click", (e) =>  {
        hideAll()
        $("#formSignUp").show()
    })

    $("#signUp").on("submit", (e) =>  {
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

    // SIGN OUT ===================================
    
    $("#showSignOut").on("click", (e) =>  {
        // localStorage.clear()
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.')
            localStorage.clear()
        });
        hideAll()
        $("#formSignIn").show()
    })


    //GET MENU LIST
    $("#listMenu").on("click", (e) => {
        e.preventDefault()
        hideAll()
        $("#menu").show()
    })



    //GET RESTAURANT
    $("#restaurant").on("click", (e) => {
        e.preventDefault()
        hideAll()
        let value = $('#restaurant').val()
        console.log(value)
        
        $.ajax(`http://localhost:3000/restaurant/${value}`, {
            method : `get`
        })
            .done( user => {
                hideAll()
                const restaurants = user.data.restaurants
                // console.log(restaurants[1].restaurant)
                // console.log($("#listRestaurants"))
                let counter = 0
                restaurants.forEach( information => {
                    counter++
                    // console.log(information)
                    $("#tbody").append(
                        `<tr>
                        <td >${counter}</td>
                        <td>${information.restaurant.name}</td>
                        <td>${information.restaurant.location.address}</td>
                        <td>${information.restaurant.user_rating.aggregate_rating}</td>
                    </tr>`
                    )});
                        
                    $("#homeRestaurants").show()
            })
            .fail( err => {
                console.log(err)
            })
            .always( result => {
                console.log(`success`)
            })
                
    })

{/* <tr>
    <th scope="row">${conter}</th>
    <td>${information.restaurant.name}</td>
    <td>${information.restaurant.location.address}</td>
    <td>${information.restaurant.user_rating.aggregate_rating}</td>
</tr> */}


})