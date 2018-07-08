document.getElementById('tabb')

var table = document.createElement('table')
tabb.appendChild(table)

var td, tr;

function createTable(width, height){
  for(i=0;i<height;i+=1) {
    var tr = document.createElement('tr')
    table.appendChild(tr)

    for(j=0;j<width;j+=1){
      var td=document.createElement('td')
      tr.appendChild(td)

    }
  }
}

createTable(5,5)


 // function clicking(event){
 //  if(event.target.matches('td')){
 //    event.target.classList.add('red')
 //  }
 // }
 //
 // tabb.addEventListener('click', function(event){
 //   if(event.target.matches('td')){
 //     clicking(event.target)
 //   }
 // })

//========================   jQuery table   ===========================

const $table = $('<table>')
$('#tabb').after($table)

const createTable2 = (width, height) => {
  for(i=0;i<height;i+=1) {
    const $tr = $('<tr>')
    $table.append($tr)

        for(j=0;j<width;j+=1){
      const $td = $('<td>')
      $tr.append($td)
    }
}}

createTable2(7,7)

$('td').on('click', function(){
  $(this).css('background-color','red')
})