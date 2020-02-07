function hideAll(){
    $("#landing-page").hide()
    $("#formSignIn").hide()
    $("#formSignUp").hide()
    $("#menu").hide()
    $("#homeRestaurants").hide()
    
}

function findby (params){
    console.log(params)
    $.ajax(`http://localhost:3000/menu/${params}`,{
        method : "get"
    })
        .done(data => {
            console.log(data)
        })
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


function restaurant(dish){
    hideAll()
        console.log(dish)
        
        $.ajax(`http://localhost:3000/restaurant/${dish}`, {
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
                    console.log(information.restaurant)
                    $("#tbody").append(
                        `<tr>
                        <td >${counter}</td>
                        <td>${information.restaurant.name}</td>
                        <td><img src=${information.restaurant.featured_image} alt="restaurant" class="img-thumbnail" width="200px" height="200px"></td>
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
                $.ajax(`http://localhost:3000/list-menu`, {
                    method : `get`
                })
                    .done( data => {
                        $("#tbodymenu").empty()
                        $.each(data.data.meals,(index,value) => {
                            $("#tbodymenu").append(
                            `<tr>
                                <td >${value.strCategory}</td>
                                <td><a onclick="findby('${value.strCategory}')" value="${value.strCategory}"> choose me </a></td>
                            </tr>`
                            )
                        })
                    })
                // console.log(user)
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
                console.log(user)
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
        let value = $('#listMenu').val()
        console.log(value)
        
        $.ajax(`http://localhost:3000/menu/${value}`, {
            method : `get`
        })
            .done( user => {
                hideAll()
                const dishes = user.data.meals
                console.log(dishes)
                // console.log(restaurants[1].restaurant)
                // console.log($("#listRestaurants"))
                let counter = 0
                dishes.forEach( dish => {
                    counter++
                    $("#tbodymenu").append(
                        `
                            <tr>
                                <td>${counter}</td>
                                <td>${dish.strMeal}</td>
                                <td><button>Cook</button> | <button onclick="restaurant('${dish.strMeal}')" value="${dish.strMeal}">Go to the Restaurant</button> </td>
                            </tr>
                        `
                    )
                    })

                    $("#menu").show()
            })
            .fail( err => {
                console.log(err)
            })
            .always( result => {
                console.log(`success`)
            })
    })



    //GET RESTAURANT
    // $("#restaurant").on("click", (e) => {
    //     e.preventDefault()
    //     hideAll()
    //     let value = $('#restaurant').val()
    //     console.log(value)
        
    //     $.ajax(`http://localhost:3000/restaurant/${value}`, {
    //         method : `get`
    //     })
    //         .done( user => {
    //             hideAll()
    //             const restaurants = user.data.restaurants
    //             // console.log(restaurants[1].restaurant)
    //             // console.log($("#listRestaurants"))
    //             let counter = 0
    //             restaurants.forEach( information => {
    //                 counter++
    //                 console.log(information.restaurant)
    //                 $("#tbody").append(
    //                     `<tr>
    //                     <td >${counter}</td>
    //                     <td>${information.restaurant.name}</td>
    //                     <td><img src=${information.restaurant.featured_image} alt="restaurant" class="img-thumbnail" width="200px" height="200px"></td>
    //                     <td>${information.restaurant.location.address}</td>
    //                     <td>${information.restaurant.user_rating.aggregate_rating}</td>
    //                 </tr>`
    //                 )});
                        
    //                 $("#homeRestaurants").show()
    //         })
    //         .fail( err => {
    //             console.log(err)
    //         })
    //         .always( result => {
    //             console.log(`success`)
    //         })
                
    // })



})