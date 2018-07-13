
$tbody2.addClass('qq')


$('.qq td').on('click',function(){
  $(this).toggleClass('black')
})


const intervalid2 = setInterval(function(){
  let $cell2 = $('.qq td')
  let $random = Math.floor(Math.random()*$cell2.length);  //144

  $cell2.toggleClass('black')
},300,setTimeout(function(){
  clearInterval(intervalid2)
},5000))