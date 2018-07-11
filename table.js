// ==================== js table    ==========

var space1= document.getElementById('tabb')

var table = document.createElement('table')
var tbody = document.createElement('tbody')
space1.appendChild(table)
table.appendChild(tbody)

var td, tr;

function createTable(width, height){
  for(i=0;i<width;i+=1) {
    var tr = document.createElement('tr')
    tbody.appendChild(tr)

    for(j=0;j<height;j+=1){
      var td=document.createElement('td')
      tr.appendChild(td)
    }
  }
}
createTable(10,10)

// toggling td color
space1.addEventListener('click',function(event){
  event.target.matches('td') ? toggleColors(event.target) : null

})

//set interval
var intervalId = setInterval(function(){
  var cells = space1.querySelectorAll('td')
  cells.forEach(function(cell)  {
    toggleColors(cell)
  })
},300,setTimeout(function(){
  clearInterval(intervalId)
},3000))

// utility function
const toggleColors = (item) => {
  item.classList.contains('red')
    ? item.classList.remove('red')
    : item.classList.add('red')
}

//========================   jQuery table   ===========================
const $space2 = $('#tabb2')
const $table2 = $('<table>')
const $tbody2 = $('<tbody>')

$space2.append($table2)
$table2.append($tbody2)

const $createTable2= (h,w)=> {
  for(let i=0;i<h;i+=1){
    const $tr2 = $('<tr>')
    $tbody2.append($tr2)
    for(let j=0;j<w;j+=1){
      const $td2 = $('<td>')
      $tr2.append($td2)
    }
  }
}
$createTable2(3,4)

$tbody2.addClass('qq')

$('.qq td').on('click',function(){
  $(this).toggleClass('black')
})

const intervalid2 = setInterval(function(){
  let $cell2 = $('.qq td')
  $cell2.toggleClass('black')
},300,setTimeout(function(){
  clearInterval(intervalid2)
},5000))