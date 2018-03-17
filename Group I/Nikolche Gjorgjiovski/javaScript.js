let bands = [];
let sortBands = [];
//let sortTags = [];

$(document).ready(() => {
    $.ajax({
        method: "GET",
        url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
        dataType: "text",
        success: (data) => {
            bands = JSON.parse(data);
            for (let i = 0; i < bands.length; i++) {
                bands[i].id = (i+1);                
            }
            populateTable(bands);
            filterTable(bands);
            sortBands = SortTableBands(bands);
            // sortTags = SortTableByTags(bands);
        },
        error: (err) => {
            console.log(err);
        }
    });

    $("#sortBy").on("change", () => {
        let sort = $("#sortBy").val();
        sortBands = SortTableBands(sortBands, sort)
    });

    // $("#listOfTags").on("change", () => {
    //     let choose = $("#listOfTags").val();
    //     sortTags = SortTableByTags(sortTags);
    // });
});

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
                <td id="albums${i}">${data}</td>
            </tr>  
        `)
    }
};

function SortTableBands(data, sort) {
    switch(sort){
        case '1': // Bands Name
        data = data.sort((a,b) => a.name.localeCompare(b.name))
        break;
        case '2': // Number Of Albums
        // listata so treba da ja naprajs!! data = data.sort((a,b) => (a.year - b.year));
        
    default:
        break;
    }
    populateTable(data);
    return(data);
}

// function SortTableByTags(data, filter){
//     switch (filter) {
//         case 1:
//             data = data.filter(item => item.tags === " ");
//             break;
    
//         default:
//             break;
//     }
//     populateTable(data);
//     return data;
// }

function filterTable(data, filter){
    switch(filter){
        case "name":
            data = data.filter(item => item.name === "name");
            break;
        default:
            break;
    }   
    return data; 
};