function localstorage (ui) {
  let custValue = localstorage.getItem(ui)
  if (custValue) {
    $("#text{ui}").text(custValue)

}}

$( document ).ready(function(){
  $("#currentDay").text(moment().format("MMMM Do YYYY"))
  for (var i = 9; i < 18; i++) {
    
    const row = $<`div data-time=${i} id='${i}'
    class ="row>`}


})