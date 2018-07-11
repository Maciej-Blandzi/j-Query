
$tbody2.addClass('qq')


$('.qq td').on('click',function(){
  $(this).toggleClass('black')
})


const intervalid2 = setInterval(function(){
  let $cell2 = $('.qq td:nth-child(4)')
  $cell2.toggleClass('black')
},300,setTimeout(function(){
  clearInterval(intervalid2)
},5000))