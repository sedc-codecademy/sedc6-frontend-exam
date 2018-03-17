let Info = function (name, active, tags, members, albums) {
    this.name = name;
    this.active = active;
    this.tags = tags;
    this.members = members;
    this.albums = albums;
};

let Bands = [];

function getData() {
    getLocalData();

    if (Bands.length > 0) {
        drawTable();
        return;
    }

    $.ajax({
        method: "GET",
        url: "https://raw.githubusercontent.com/AngelMirch/sedc6-frontend-exam/master/band-data.json",
        dataType: 'json',
        success: function (data) {
            parseData(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}


function parseData(jsonData) {
    $(jsonData).each(function (index, band) {
        Bands.push(new Info(band.name, band.active, band.tags, band.members, band.albums));
    });

    drawTable();
}

function drawTable() {
    $('#artists').empty();

    $(Bands).each(function (index, band) {
        var tableRow = '<tr>' +
            '<td>' + band.name + '</td>' +
            '<td>' + band.active + '</td>' +
            '<td>' + band.tags + '</td>' +
            '<td>' + band.members.name + '</td>' +
            '<td>' + band.albums.length + '</td>' +
            '</tr>';

        $('#artists').append(tableRow);
    });

    setLocalData(Bands);

    initSorting();
}

function initSorting() {
    $('.sorting-header').each(function (index, header) {
        $(header).off('click').on('click', function (event) {
            doSort(this);
        });
    });
}

function doSort(oHeader) {
    var sortBy = $(oHeader).attr('data-sort');
    var sortDir = $(oHeader).attr('data-direction');
    var sortingFunction = null;

    switch (sortBy) {
        case "name": //sort by rank
            sortingFunction = (name1, name2) => {
                return name1.name.localeCompare(name2.name);
            };
            break;
        case "albums":
            sortingFunction = (band1, band2) => {
                return parseInt(band1.albums.length) - parseInt(band2.albums.length);
			};
			
        default:
            break;
    }
    $(oHeader).attr('data-direction', sortDir == 'asc' ? 'desc' : 'asc');

    if (sortDir == 'desc')
        Bands.sort(sortingFunction).reverse();
    else
        Bands.sort(sortingFunction);

    drawTable();
}


function setLocalData(jsonData) {
    localStorage.setItem('bands', JSON.stringify(jsonData));
}

function getLocalData() {
    var data = localStorage.getItem('bands');

    //Check localstorage
    if (data != null) {
        //Set to runs
        Bands = JSON.parse(data);
    }
}

$(function () {
    getData();
});