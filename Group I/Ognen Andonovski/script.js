$(document).ready(() => {

  let bands =[];
  let sortBands =[];
  $.ajax({
    method: "GET",
    url:"https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json" ,
    dataType: "text",
    success: (data) => {
        bands = JSON.parse(data);
        for (let i = 0; i < bands.length; i++) {
            bands[i].id = (i+1);                
        }
        
        filterTable(bands);
        populateTable(bands);
        sortBands = SortTableBands(bands);
       
    },
    error: (err) => {
        console.log(err);
    }

});
$("#name").on("change", () => {
    let sort = $("#name").val();
    sortBands = SortTableBands(sortBands, sort)
});



});

function filterTable(data, filter){
    switch(filter){
        case "name":
            data = data.filter(item => item.name === "name");
            break;
        default:
            break;
    }
 

    populateTable(data);
    return data;
}

function SortTableBands(data, sort) {
    switch(sort){
        case '1': 
        data = data.sort((a,b) => a.name.localeCompare(b.name))
        break;
        case '2':
    default:
        break;
    }
    populateTable(data);
    return(data);
}


function populateTable(data){
    $("#myBody").html("");
    for (let i = 0; i < data.length; i++) {
        let members = "";
        for(let j = 0; j < data[i].members.length; j ++){
            
            if(data[i].members[j].former === true){

            }
            else{
                members += `${data[i].members[j].name}</br>`;
            }
        }
        
        
        $("#myBody").append(`
            <tr>
                <td>${data[i].id}</td>
                <td id="$name${i}">${data[i].name}</td>
                <td id="active${i}">${data[i].active}</td>
                <td id="members${i}">${members}</td>
                <td id="albums${i}">${data[i].albums}</td>
            </tr>  
        `)
    }
};















