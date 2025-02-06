/* jQuery Animate*/

// $(function(){
//     $('#btn').click(function(){
//         $('#demo').show(1000 , function(){
//             alert("Show Function")
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('#demo').animate({
//             left:"500px",
//             fontSize:"30px"
//         } , 5000 , function(){
//             $('#demo').css("background-color", "black")
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('#demo').animate({height:"400px"} ,2000)
//         $('#demo').animate({width:"400px"} ,2000)
//         $('#demo').animate({height:"100px"} ,2000)
//         $('#demo').animate({width:"100px"} ,2000)
//     })
// })


// ------------------------------------------------------------------------
// $(function(){
//     $('#demo').click(function(){
//         $('#panel').stop()
//     })
// })

// $(function(){
//     $('#demo').click(function(){
//         $('#panel').slideDown(2000)
//         $('#panel').slideUp(2000)
//         $('#panel').fadeIn()
//         $('#panel').fadeOut()
//     })
// })

// ------------------------------------------------------------------------
console.log(document.getElementById('panel').innerHTML);
console.log(document.getElementById('panel').textContent);
console.log(document.getElementById('panel').innerText);

// $(function(){
//     $('#btn').click(function(){
//         alert($('#panel').html())
//     })
// })


// $(function(){
//     $('#btn').click(function(){
//         alert($('#user').val())
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('#panel').text("Hello World")
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('#panel').html("<span>This is Span Tag</span>")
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('#user').val("Hello JQuery")
//     })
// })

// $(function(){
//     $("#btn").click(function(){
//         $("#panel").append("Hello jQuery") //back add
//     })
// })

// $(function(){
//     $("#btn").click(function(){
//         $("#panel").prepend("Hello jQuery") // front add
//     })
// })

// $(function(){
//     $("#btn").click(function(){
//         $("#panel").after("Hello jQuery") // befor add tag 
//     })
// })

$(function(){
    $("#btn").click(function(){
        $("#panel").before("Hello jQuery") // after add tag 
    })
})

// $(function(){
//     $("#btn").click(function(){
//         $("#panel").remove() 
//     })
// })

// $(function(){
//     $("#btn").click(function(){
//         $("#panel").empty("Hello jQuery")
//     })
// })