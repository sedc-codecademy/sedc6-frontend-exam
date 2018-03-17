let bands = [];
let row = 1;
let page = 0;
$(document).ready(() => {
    $.ajax({
        method: "GET",
        url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
        dataType: "text",
        success: (data) => {
            bands = JSON.parse(data);
            filterTable(bands);
        },
        error: (err) => {
            console.log(err);
        }
    });
    
});

function filterTable(data, sort){
    switch(sort){
        case "name": {
            data = data.filter(item => item.kind === "Name of Band");
        }
            break;
        case "tags": {
            data =  data.filter(item => item.kind === "tags");
        }
            break;
        default:
            break;
    }
    data = data.slice((0 + page), (10+page) );
    populateTable(data);
}

function populateTable(data){
    $("#myBody").html("");
    
    for(let i = 0; i < data.length; i += 1){
        
        $("#myBody").append(`
            <tr id="row${i}">
                <td id="row${i}">${row++}</td>
                <td id="name${i}">${data[i].name}</td>
                <td id="active${i}">${data[i].active}</td>
                <td id="tags${i}">${data[i].tags}</td>
            <td id="member${i}">${data[i].members[0].name}</td>
                <td id="albums${i}">${data[i].albums.length}</td>
            </tr>
        `);              
        
    }
}




$("#next").click(function(){
    page +=10;
    filterTable(bands);   
}); 

$("#prev").click(function(){ 
        page -=10;
        filterTable(bands);  
});


