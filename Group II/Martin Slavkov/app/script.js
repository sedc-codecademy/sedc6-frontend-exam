let band = [];
let activeBand = [];
let page = 1;
let maxElements = 10;
let sortingBy = "";
let tagsArr = [];


$.ajax({
    method: "GET",
    url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
    success: (data) => {
        band = JSON.parse(data);
        activeBand = band;

        for (let i = 0; i < band.length; i += 1) {
            for (let j = 0; j < band[i].tags.length; j += 1) {
                tagsArr.push(band[i].tags[j]);
            }
        }
        tagsArr = Array.from(new Set(tagsArr));
        for (let i = 0; i < tagsArr.length; i += 1) {
            $("#tags").append(`
                <option value="${tagsArr[i]}">${tagsArr[i]}</option>
            `);
        }
        proccessData(band, page, maxElements)
    },
    error: (err) => {
        console.log(err);
    }
});

$(document).ready(() => {
    $("#sortBand").on("click", () => {
        if (sortingBy === "nameAscending") {
            sortingBy = "nameDescending"
        } else {
            sortingBy = "nameAscending"
        }
        proccessData(band, page, maxElements);
    });
    $("#sortAlbums").on("click", () => {
        if (sortingBy === "albumsAscending") {
            sortingBy = "albumsDescending"
        } else {
            sortingBy = "albumsAscending"
        }
        proccessData(band, page, maxElements);
    });
    $("#searchingFilter, #stillActive, #tags").on("change", () => {
        proccessData(band, page, maxElements);
    });
    $("#prevBtn").on("click", () => {
        if (page > 1) {
            page -= 1;
        }
        proccessData(band, page, maxElements);
    });
    $("#nextBtn").on("click", () => {
        if (page < Math.ceil(activeBand.length / maxElements)) {
            page += 1;
        }
        proccessData(band, page, maxElements);
    });
});

function sortData(data) {
    switch (sortingBy) {
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
    }
    return data;
}



function proccessData(data, page, maxElements) {
    $("#tableCreate").html("");
    filterData(data);
    activeBand = sortData(activeBand);
    let maxPage = Math.ceil(activeBand.length / maxElements);
    let elementsCount = maxPage === page ? activeBand.length : maxElements;

    for (let i = (page - 1) * maxElements; i < elementsCount; i += 1) {
        populateTable(activeBand[i], i + 1);
    }
}

function filterData(data) {
    activeBand = data.filter(item => item.name.toLowerCase().includes($("#searchingFilter").val().toLowerCase()));
    let selectedTag = $("#tags").find(":selected").text();
    console.log(selectedTag);
    activeBand = activeBand.filter(item => item.tags.includes(selectedTag));
    console.log(activeBand);
}



function populateTable(data, id) {
    let tags = "";
    let members = "";
    for (let i = 0; i < data.tags.length; i += 1) {
        tags += `${data.tags[i]}, `;
    }
    for (let i = 0; i < data.members.length; i += 1) {
        members += `${data.members[i].name}</br>`;
    }
    $("#tableCreate").append(`
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