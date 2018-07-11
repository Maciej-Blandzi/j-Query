// ==================== js table    ==========

var space1= document.getElementById('tabb')

var table = document.createElement('table')
var tbody = document.createElement('tbody')
space1.appendChild(table)
table.appendChild(tbody)

var td, tr;

function createTable(width, height){
  for(i=0;i<height;i+=1) {
    var tr = document.createElement('tr')
    tbody.appendChild(tr)

    for(j=0;j<width;j+=1){
      var td=document.createElement('td')
      tr.appendChild(td)

    }
  }
}

createTable(1,5)

space1.addEventListener('click',function(event){
  if(event.target.matches('td')){
    event.target.classList.add('red')
  }
})


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
  $(this).css('backgroundColor','black')
})




