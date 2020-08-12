


$("#09").children(".description").val(localStorage.getItem("09"))
$("#10").children(".description").val(localStorage.getItem("10"))
$("#11").children(".description").val(localStorage.getItem("11"))
$("#12").children(".description").val(localStorage.getItem("12"))
$("#13").children(".description").val(localStorage.getItem("13"))
$("#14").children(".description").val(localStorage.getItem("14"))
$("#15").children(".description").val(localStorage.getItem("15"))
$("#16").children(".description").val(localStorage.getItem("16"))
$("#17").children(".description").val(localStorage.getItem("17"))

window.addEventListener("load", function(){
  console.log("hi")
  $("#currentDay").text(moment().format("MMMM Do YYYY"))
  $("#hour").text(moment().format("HH"))

  $(".saveBtn").on("click", function(){
    var textDescription = $(this).siblings(".description").val()
    var key = $(this).parent().attr("id")
    localStorage.setItem(key, textDescription)
  })
})

function changeColor() {
  var currentTime = moment().format("HH")
  $(".hour-block").each(function(){
    var txtH = $(this).attr("id")
    if (txtH < currentTime){ 
      $(this).addClass("past")

    }else if(txtH > currentTime){
      $(this).addClass("future")

    }else{
      $(this).addClass("present")
    }

  })

}
changeColor()
