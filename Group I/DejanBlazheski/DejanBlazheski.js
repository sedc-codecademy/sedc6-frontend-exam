let bands = [];
let tempBands = [];
let page = 1;
let maxElements = 10;
let sortBy = "";
let tagsArr = [];

$(document).ready(() => {
    $("#sortName").on("click", () => {
        if(sortBy === "nameAsc"){
            sortBy = "nameDes"
        }
        else{
            sortBy = "nameAsc"
        }
        proccessData(bands, page, maxElements);
    });
    $("#sortAlbums").on("click", () => {
        if(sortBy === "albumsAsc"){
            sortBy = "albumsDes"
        }
        else{
            sortBy = "albumsAsc"
        }
        proccessData(bands, page, maxElements);
    });
    $("#searchFilter, #isActive, #tags").on("change", () => {
        proccessData(bands, page, maxElements);
    });
    $("#prevBtn").on("click", () => {
        if(page > 1){
            page -= 1;
        }
        proccessData(bands, page, maxElements);
    });
    $("#nextBtn").on("click", () => {
        if(page < Math.ceil(tempBands.length / maxElements)){
            page += 1;
        }
        proccessData(bands, page, maxElements);
    });
});

$.ajax({
    method: "GET",
    url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
    success: (data) => {
        bands = JSON.parse(data);
        tempBands = bands;

        for(let i = 0; i < bands.length; i += 1){
            for(let j = 0; j < bands[i].tags.length; j += 1){
                tagsArr.push(bands[i].tags[j]);
            }
        }
        tagsArr = Array.from(new Set(tagsArr));
        for(let i = 0; i < tagsArr.length; i += 1){
            $("#tags").append(`
                <option value="${tagsArr[i]}">${tagsArr[i]}</option>
            `);
        }
        proccessData(bands, page, maxElements)
    },
    error: (err) => {
        console.log(err);
    }
});



function proccessData(data, page, maxElements){
    $("#myTable").html("");
    filterData(data);
    tempBands = sortData(tempBands);
    let maxPage = Math.ceil(tempBands.length / maxElements);
    let elementsCount = maxPage === page ? tempBands.length : maxElements;

    for(let i = (page - 1) * maxElements; i < elementsCount; i += 1){
        populateTable(tempBands[i], i + 1);
    }
}

function filterData(data){
    tempBands = data.filter(item => item.name.toLowerCase().includes($("#searchFilter").val().toLowerCase()));
    let selectedTag = $("#tags").find(":selected").text();
    console.log(selectedTag);
    tempBands = tempBands.filter(item => item.tags.includes(selectedTag));
    console.log(tempBands);
    if($("#isActive").is(":checked")){
        tempBands = tempBands.filter(item => item.active === true);
    }
}

function sortData(data){
    switch(sortBy){
        case "nameAsc":
            data.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "nameDes":
            data.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "albumsAsc":
            data.sort((a, b) => a.albums.length - b.albums.length);
            break;
        case "albumsDes":
            data.sort((a, b) => b.albums.length - a.albums.length);
            break;
        default:
            break;
    }
    return data;
}

function populateTable(data, id){
    let tags = "";
    let members = "";
    for(let i = 0; i < data.tags.length; i += 1){
        tags += `${data.tags[i]}, `;
    }
    for(let i = 0; i < data.members.length; i += 1){
        members += `${data.members[i].name}</br>`;
    }
    $("#myTable").append(`
        <tr>
            <td>${id}</td>
            <td>${data.name}</td>
            <td>${data.active}</td>
            <td>${tags}</td>
            <td>${members}</td>
            <td>${data.albums.length}</td>
        </tr>
    `);
}