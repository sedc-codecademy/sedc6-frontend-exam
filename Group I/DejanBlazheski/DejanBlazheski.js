let bands = [];
let tags = [];
let filteredBands = [];
let sortBy = "";

let page = 1;
let maxElements = 10;

$.ajax({
    method: "GET",
    url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
    success: (data) => {
        bands = JSON.parse(data);

        bands.forEach(band => {
            tags = [...tags, ...band.tags];
        });
        tags = Array.from(new Set(tags));

        for(let i = 0; i < tags.length; i += 1){
            $("#tags").append(`
                <option value="${tags[i]}">${tags[i]}</option>
            `);
        }

        proccessData(bands, page, maxElements)
    },
    error: (err) => {
        console.log(err);
    }
});

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
        if(sortBy === "albumsDes"){
            sortBy = "albumsAsc"
        }
        else{
            sortBy = "albumsDes"
        }
        proccessData(bands, page, maxElements);
    });

    $("#searchFilter, #tags, #onlyActive").on("change", () => {
        proccessData(bands, page, maxElements);
    });

    $("#prevBtn").on("click", () => {
        if(page > 1){
            page -= 1;
        }
        proccessData(bands, page, maxElements);
    });

    $("#nextBtn").on("click", () => {
        if(page < Math.ceil(filteredBands.length / maxElements)){
            page += 1;
        }
        proccessData(bands, page, maxElements);
    });
});



function proccessData(data, page, maxElements){
    $("#myTable").html("");

    filteredBands = filterData(data);
    filteredBands = sortData(filteredBands);

    let maxPage = Math.ceil(filteredBands.length / maxElements);
    let lastElementFromPage = page === maxPage ? filteredBands.length : maxElements * page;

    for(let i = maxElements * (page - 1); i < lastElementFromPage; i += 1){
        populateTable(filteredBands[i], i + 1);
    }
}

function filterData(data){
    let searchKey = $("#searchFilter").val().toLowerCase();
    data = data.filter(item => item.name.toLowerCase().includes(searchKey));

    let selectedTag = $("#tags").find(":selected").val();
    if(selectedTag !== "")
        data = data.filter(item => item.tags.includes(selectedTag));

    if($("#onlyActive").is(":checked")){
        data = data.filter(item => item.active);
    }
    return data;
}

function sortData(data){
    switch(sortBy){
        case "nameAsc":
            data.sort((a, b) => a.name.localeCompare(b.name));
            $("#sortInfo").text("Sorted by: Name; Type: Ascending");
            break;
        case "nameDes":
            data.sort((a, b) => b.name.localeCompare(a.name));
            $("#sortInfo").text("Sorted by: Name; Type: Descending");
            break;
        case "albumsAsc":
            data.sort((a, b) => a.albums.length - b.albums.length);
            $("#sortInfo").text("Sorted by: Albums; Type: Ascending");
            break;
        case "albumsDes":
            data.sort((a, b) => b.albums.length - a.albums.length);
            $("#sortInfo").text("Sorted by: Albums; Type: Descending");
            break;
        default:
            break;
    }
    return data;
}

function populateTable(band, id){
    let bandTags = "";
    let bandMembers = "";
    
    band.tags.forEach((tag) => {
        bandTags += `${tag}, `;
    });

    band.members.forEach((member) => {
        if(member.former){
            //nothing
        }
        else{
            bandMembers += `${member.name}</br>`;
        }
    });

    $("#myTable").append(`
        <tr>
            <td>${id}</td>
            <td>${band.name}</td>
            <td>${band.active}</td>
            <td>${bandTags}</td>
            <td>${bandMembers}</td>
            <td>${band.albums.length}</td>
        </tr>
    `);
}