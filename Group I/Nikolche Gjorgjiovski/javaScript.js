let bands = [];
let sortBands = [];
let tags = [];
let sort = "";
//let pages = 10;
//let start = 0;

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
            for (let j = 0; j < tags.length; j++) {
                $("#listOfTags").append(`
                    <option value="${tags[i]}">${tags[i]}</option>
                `);
            }
            populateTable(bands);
            sortBands = SortTableBands(bands);
            // sortTags = SortTableByTags(bands);
        },
        error: (err) => {
            console.log(err);
        }
    });
    // All Buttons First

    // Button For Sorting By Name Button
    $("#sortByName").on("click", () => {
        if(sort === "nameForward"){
            sort = "nameReverse"
        }
        else{
            sort = "nameForward"
        }
        sortBands = SortTableBands(sortBands, sort)
    });

    // Button For Sorting By Length Of Number Of Albums
    $("#sortByNumberOfAlbum").on("click", () => {
        if(sort === "albumsForward"){
            sort = "albumsReverse"
        }
        else{
            sort = "albumsForward"
        }
        sortBands = SortTableBands(sortBands, sort)
    });

    // Button Next
    // $("#next").on("click", () => {
    //     if (pages < 18) {
    //         pages += 10;
    //         start += 10;
    //         populateTable(bands);
    //     }
    // });

    // Button Previous
    // $("previews").on("click", () => {
    //     if (pages > 10) {
    //         pages -= 10;
    //         start -= 10;
    //         populateTable(bands);
    //     }
    // });

    // Button for Search Band By Name
    // $("#searchBox").on("change", () => {
    //     populateTable(bands);
    // });

    //
    // $("#listOfTags").on("change", () => {
    //     populateTable(bands);
    // });

});





// Populate Table and loops - Ways to iterate number of albums and name of member by bands
function populateTable(data){
    $("#myBody").html("");
    for (let i = 0; i < data.length; i++) {
        let members = [];
        let albums = [];

        for(let j = 0; j < data[i].members.length; j ++){
            
            if(data[i].members[j].former === true){

            }
            else{
                members += `${data[i].members[j].name}</br>`;
            }
        }

        for (let k = 0; k < data[i].albums.length; k++) {
            albums += `${data[i].albums[k].name}`;            
        }

    
        
        $("#myBody").append(`
            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].active}</td>
                <td>${data[i].tags}</td>
                <td>${members}</td>
                <td>${data[i].albums.length}</td>
            </tr>  
        `)
    }
};


// Sort function for Name And Length Of Number Of Albums
function SortTableBands(data, sort) {
    switch(sort){
        case 'nameForward': // Bands Name
        data.sort((a, b) => a.name.localeCompare(b.name));
            $("#sortInfo").text("Sorted by: Bands Name");
        break;
        
        case 'nameReverse': // Number Of Albums
        data.sort((a, b) => b.name.localeCompare(a.name));
        $("#sortInfo").text("Sorted by: Bands Name Reverse");
        break;
        
        case 'albumsForward':
            data.sort((a, b) => a.albums.length - b.albums.length);
            $("#sortInfo").text("Sorted By: Number Of Albums");
            break;
        
        case 'albumsReverse':
            data.sort((a, b) => b.albums.length - a.albums.length);
            $("#sortInfo").text("Sorted By: Number Of Albums Reverse");
            break;
            default:
        break;
    }
    populateTable(data);
    return(data);
};

// function filterData(data){
//      let searchKey = $("#searchBox").val().toLowerCase();
//      data = data.filter(item => item.name.toLowerCase().includes(searchKey));

//     let selectedTag = $("#listOfTags").find(":selected").val();
//     if(selectedTag !== "")
//         data = data.filter(item => item.tags.includes(selectedTag));

//     if($("#onlyActive").is(":checked")){
//          data = data.filter(item => item.active);
//     }
//     return data;
// };
