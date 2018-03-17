myBend = [];
let page = 0;
let maxsize = 0;
let searchTerm;
let active;

filterTable(myBend);

getData();

function getData(){
    $.ajax({
        method: "GET",
        url: "http://www.json-generator.com/api/json/get/bVLUMMJzkO?indent=2",
        success:function(data){
        for(let i = 0; i < data.length; i++)
        {
            data[i].id = (i+1);
        }
        
        myBend = data;
        
        console.log(myBend);
        filterTable(myBend);
        },
        error: function(error){
            console.log(error);
        }
    })
}


function makeMyTable(data){
    $("#bandstable").html("");
    let m = [];
    for(let i = 0; i < data.length; i += 1){
        let member = data[i].members;
        for(let j = 0; j< member.length; j++){
            if(member[j].former === true)
            {
               
            }
            else{
             m.push(`${member[j].name}`);
            }
        }
        
        $("#bandstable").append(`
            <tr>
                <td id="id${i}">${data[i].id}</td>
                <td id="bandName${i}">${data[i].name}</td>
                <td id="active${i}">${data[i].active}</td>
                <td id="tag${i}">${data[i].tags}</td>
                <td id="members${i}">${m}</td>                
                <td id="albums${i}">${data[i].albums.length}</td>                                                
            </tr>
        `);

        if(data[i].active === true){
            $(`#active${i}`).text("YES");
            $(`#active${i}`).css("background-color", "green");
       }else{
        $(`#active${i}`).text("NO");
       }
        m=[];
    }   
}


function filterTable(data){

    $("#topDiv").html("");
 
    let btnCount = Math.ceil(data.length / 10);
   
    for (let i = 0; i < btnCount; i++) {

        $("#topDiv").append(`<button id=myPage${(i+1)}>${(i+1)}</button>`);

        $(`#myPage${(i+1)}`).on("click", function () {
            page = (i * 10);
            filterTable(myBend);
        });
    }

    if(active)
    {          
        
        data = data.filter(n => n.active === true);
    }   

    
    maxsize = data.length;
    data = data.slice((0 + page), (10 + page));
   
    makeMyTable(data);
}





$('th').click(function(){
    let table = $(this).parents('table').eq(0)
    let rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
    // alert(($(this).index()));
    this.asc = !this.asc
    if (!this.asc){rows = rows.reverse()}
    for (let i = 0; i < rows.length; i++){table.append(rows[i])}
})
function comparer(index) {
    return function(a, b) {
        let valA = getCellValue(a, index), valB = getCellValue(b, index)
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
    }
}
function getCellValue(row, index){ return $(row).children('td').eq(index).text() } 