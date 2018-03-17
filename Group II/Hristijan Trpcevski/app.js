

$(function () {


    $.ajax({
        method: "GET",
        url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
        dataType: "json",
        success: (data) => {

            bands = data;
            tempBands = data;

            console.log(data);

        },
        error: (err) => {
            console.log(err);
        }
    })
    $("#getdata").on("click", () => {
        allBands(bands);
    });

})

function allBands(data) {
    $("#tbody").html("");

    let activeBands;
    let membersOfBand = [];
    let counter = 0;

    
    for (let i = 0; i < data.length; i++) {
        if (data[i].active == true) {
            activeBands = "Yes";
        } else {
            activeBands = "No";
        }
        data[i].members.forEach(item => {

            if (item.former === true) {

            } else {
                membersOfBand.push(item.name);
            }

        });

        data[i].albums.forEach(item => {
            counter++;
        })



        $("#tbody").append(`
            <tr>
                <td>${i + 1}</td>
                <td>${data[i].name}</td>
                <td>${activeBands}</td>
                <td>${data[i].tags}</td>
                <td>${membersOfBand}</td>
                <td>${counter}</td>
            </tr>
        `);
        membersOfBand = [];
        counter = 0;

        

    }
    
}




function sortData(data){
    switch(sortBy){
        case "nameAscending":
            data.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "nameDescending":
            data.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "albumsAscending":
            data.sort((a, b) => a.albums.length - b.albums.length);
            break;
        case "albumsDescending":
            data.sort((a, b) => b.albums.length - a.albums.length);
            break;
        default:
            break;
    }
    return data;
};




$(document).ready(() => {
    $("#sortBand").on("change", () => {
        if (sortBy === "nameAscending") {
            sortBy = "nameDescending"
        } else {
            sortBy = "nameAscending"
        }
        proccessData(bands, page, maxElements);
    });
    $("#sortAlbums").on("click", () => {s
        if (sortBy === "albumsAscending") {
            sortBy = "albumsDescending"
        } else {
            sortBy = "albumsAscending"
        }
        proccessData(bands, page, maxElements);
    })
});
