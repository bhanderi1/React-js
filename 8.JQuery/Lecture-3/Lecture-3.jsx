//RemoveClass , AddClass , ToggleClass

// $(function(){
//     $('#btn1').click(function(){
//         $('#demo').removeClass("box")
//     })
// })


// $(function(){
//     $('#btn2').click(function(){
//         $('#demo').addClass("box-1")
//     })
// })

// $(function(){
//     $('#btn3').click(function(){
//         $('#demo').toggleClass("box-1")
//     })
// })

// $(function(){
//     $('#btn1').click(function(){
//         $("#demo").css({
//             "background-color":"green",
//             "height":"100px",
//             "border":'5px solid black'    
//            })
//     })
// })


// parent , parents , parentsUntils

// $(function(){
//     $('#btn').click(function(){
//         $(".bChild").parent().css({"background-color" : "red"})
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $(".bChild").parents().css({"background-color" : "red"})
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $(".bChild").parentsUntil(".divParent").css({"background-color" : "red"})
//     })
// })


//children , find

// $(function(){
//     $('#btn').click(function(){
//         $(".ulParent").children().css({"background-color" : "red"})
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $(".ulParent").find(".divParent").css({"background-color" : "red"})
//     })
// })

// sibling , next , nextAll ,  nextUntil  , prev , prevAll ,  prevUntil

// $(function(){
//     $('#btn').click(function(){
//         $('div').siblings().css({
//             "background-color":"red"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').next().css({
//             "background-color":"red"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').nextAll().css({
//             "background-color":"red"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').nextUntil('span').css({
//             "background-color":"red"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').prev().css({
//             "background-color":"red"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').prevAll().css({
//             "background-color":"red"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').prevUntil('p').css({
//             "background-color":"red"
//         })
//     })
// })

// Filtering  not , first , last , eq  , filter


// $(function(){
//     $('#btn').click(function(){
//         $('div').first().css({
//             'background-color' : 'green'
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').last().css({
//             'background-color' : 'green'
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').not('heading').css({
//             'background-color' : 'green'
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').eq(8).css({
//             'background-color' : 'green'
//         })
//     })
// })

$(function(){
    $('#btn').click(function(){
        $('div').filter('.heading').css({
            'background-color' : 'green'
        })
    })
})