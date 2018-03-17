let myBands = [];
let page = 0;
let maxsize = 0;
let searchTerm;
let sort;




localStorage.removeItem(["mybooks"]);

if(localStorage["myBands"])
{
    myBands=JSON.parse(localStorage["myBands"]);  
    filterTable(myBands);
}

else{
    getData();
}

dropBox(AllOfMyTags(myBands));



function getData(){
    $.ajax({
        method: "GET",
        url: "http://www.json-generator.com/api/json/get/cfzakJRdrC?indent=2",
        success:function(data){
        for(let i = 0; i < data.length; i++)
        {
            data[i].id = (i+1);
        }
        
        localStorage["myBands"] = JSON.stringify(data);
        myBands = JSON.parse(localStorage["myBands"]);
    
       filterTable(myBands);
        },
        error: function(error){
            console.log(error);
        }
    })
}

function someFunc(data) {

    for (var i = 0; i < data.length; i++) {
        data.filter(n => n.tags[i].includes($("#sortingMyTable").val()))
        
    }
    return data;
}
function filterTable(data) {
    $("#tBody").html("");
    $("#pageButtonDiv").html("");

    // if($("#sortingMyTable").val()){
    // //     let theSort = $("#sortingMyTable").val();
    // //    let  mySearchTerm = theSort.toLowerCase();
    // //     data = data.filter(n => n.tags.toLowerCase().includes(mySearchTerm));
    //     data = someFunc(data);
    // }


    if(sort)
    {
        if(sort == "active")
        {
            data = data.filter(n => n.active === true);
        }
        
    }



    if(searchTerm){
        searchTerm = searchTerm.toLowerCase();
        data = data.filter(n => n.name.toLowerCase().includes(searchTerm));
     
     }// end of search :)


    let btnCount = Math.ceil(data.length / 10);
     for (let i = 0; i < btnCount; i++) {
         $("#pageButtonDiv").append(`<button id=myPage${(i+1)}>${(i+1)}</button>`);
         $(`#myPage${(i+1)}`).on("click", function () {
             page = (i * 10);
             filterTable(myBands);
         });
     }

    maxsize = data.length;
   
    data = data.slice((0 + page), (10 + page));
    makeTable(data)
} 


function AllOfMyTags(data) {
    let moo = [];
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].tags.length; j++) {
            moo.push(data[i].tags[j]);
            
        }
       
    }
   
    return haha(moo);
}

function haha(original) {
    var compressed = [];
    var copy = original.slice(0);
   
    for (var i = 0; i < original.length; i++) {
 
        var myCount = 0;	
        for (var w = 0; w < copy.length; w++) {
            if (original[i] == copy[w]) {
                myCount++;
                delete copy[w];
            }
        }
        if (myCount > 0) {
            compressed.push(original[i]);
        }
 
       
    }
  
    return compressed;
   
}


function dropBox(data) {
for (var i = 0; i < data.length; i++) {

    $('#sortingMyTable').append(`<option value=${data[i]}>${data[i]}</option>`)
}
}


function makeTable(data) {
    
    for(let i = 0; i < data.length;  i++ ){
    $('#tBody').append(`<tr>
                        <td>${data[i].id}<td>
                        <td>${data[i].name}<td>
                        <td>${(data[i].active ? `Active` : `Not`)}<td>
                        <td>${data[i].tags}<td>
                       
                        <td>${(members(data[i].members))}<td>
                        
                        <td>${data[i].albums.length}<td>
                        <td><input class="radio_css" type="radio" name="radio_btn${i}" id="r${i}">False
                        <input class="radio_css" type="radio" name="radio_btn${i}" id="r${(i+1)}">True<td>
                        </tr>`)

                        $(`input[name="radio_btn${i}"`).on('change',function(event){
                            if($(`#r${i}`).is(':checked')){
                        
                                data[i].active = false;
                            }
                            else{
                                data[i].active = true;
                            }
                        
                        });


                    }
                   
}

$("#sortingMyTable").on("change", function(){
    myTags = $("#sortingMyTable").val();
    filterTable(myBands);
});

$("#regularSearchBtn").on("click", function(){
    searchTerm = $("#regularSearch").val();
    filterTable(myBands);
});

function members(data) {
    let array = [];
    for (var i = 0; i < data.length; i++) {
        array.push(data[i].name + "<br />");
    }
    return array;
}

$("#active").click(function(){
    page = 0;
    sort = "active";
    filterTable(myBands);
});

$("#all").click(function(){
    page = 0;
    sort = "";
    filterTable(myBands);
});


$("#next").click(function(){
    if(maxsize > parseInt(page+10))
    {
    page +=10;
    filterTable(myBands);
    }
}); 


$("#prev").click(function(){
    if(page != 0)
     {
        page -=10;
        filterTable(myBands);
    }

});



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


$("input[name='radio_btn']").on('change',function(event){
    if($('#r1').is(':checked')){

        $('#test_div').css("background-color", "red");
    }
    else{
        $('#test_div').css("background-color", "green");
    }

});