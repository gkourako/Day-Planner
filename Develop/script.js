function localstorage (ui) {
  var value = localstorage.getItem(ui)
  if (value) {
    $("#text{ui}").text(custValue)

}}

window.addEventListener("load", function(){
  console.log("hi")
  $("#currentDay").text(moment().format("MMMM Do YYYY"))
  $("#hour").text(moment().format("HH"))

  let button9 = document.getElementById("btn9")
  button9.addEventListener("click", function(){
    console.log(button9)
  })
})

