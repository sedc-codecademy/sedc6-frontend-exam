let Band = function(name, active, tags, albums, members) {
    this.name = name;
    this.active = active;
    this.tags = tags;
    this.members = members;
    this.albums = albums;
};

let Album = function(name, year, type) {
    this.name = name;
    this.year = year;
    this.type = type;
};

let Member = function(name, former) {
    this.name = name;
    this.former = former;
};

let Tags = [];
let Bands = [];

function getData() {
    getLocalData();

    if (Bands.length > 0) {
        populateTable();
        return;
    }

    $.ajax({
        method: "GET",
        url: "band-data.json",
        dataType: 'json',
        success: function(data) {
            parseData(data);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

function parseData(jsonData) {
    $(jsonData).each(function(index, band) {
        var albums = [];
        $(band.albums).each(function(index, a) {
            albums.push(new Album(a.name, a.year, a.type));
        });

        var members = [];
        $(band.members).each(function(index, m) {
            members.push(new Member(m.name, (typeof m.former != 'undefined' ? m.former : false)));
        });

        Bands.push(new Band(band.name, band.active, band.tags, albums, members));
    });

    populateTable();
}

function populateTable() {
    $('#bands').empty();

    $(Bands).each(function(index, band) {
        $(band.tags).each(function(index, tag) {
            Tags.push(tag);
        });
    });

    var bandsData = Bands;
    if (arguments.length > 0)
        bandsData = arguments[0];

    $(bandsData).each(function(index, band) {
        var tableRow = '<tr>' +
            '<td>' + index + '</td>' +
            '<td>' + band.name + '</td>' +
            '<td>' + (band.active ? 'Yes' : 'No') + '</td>' +
            '<td>' + band.tags.join(', ') + '</td>' +
            '<td>' + populateMembers(band.members) + '</td>' +
            '<td>' + band.albums.length + '</td>' +
            '</tr>';

        $('#bands').append(tableRow);
    });

    setLocalData(Bands);

    initSorting();
    initControls();
}

function populateMembers(members) {
    var membersList = '<ol>';
    $(members).each(function(index, member) {
        if (!member.former)
            membersList += '<li>' + member.name + '</li>';

    });
    membersList += '</ol>';
    return membersList;
}

function initSorting() {
    $('.sorting-header').each(function(index, header) {
        $(header).off('click').on('click', function(event) {
            doSort(this);
        });
    });
}

function initControls() {
    $('#search').off('keyup').on('keyup', function(event) {
        populateTable(Bands.filter(band => band.name.indexOf($(this).val()) > -1));
    });

    $('#active').off('change').on('change', function(event) {
        populateTable(Bands.filter(band => band.active == $(this).is(':checked')));
    });

    if ($('#tags > option').length == 0) {
        $('#tags').empty();
        $('#tags').append('<option value="all"> All tags </option>');
        $(Tags.unique()).each(function(index, tag) {
            $('#tags').append('<option value="' + tag + '">' + tag + '</option>');
        });
    }


    $('#tags').off('change').on('change', function(event) {
        filterByTag($(this).val());
    });
};

function filterByTag(tag) {
    if (tag == 'all')
        populateTable();
    else
        populateTable(Bands.filter(band => band.tags.indexOf(tag) > -1));
}

function doSort(oHeader) {
    var sortBy = $(oHeader).attr('data-sort');
    var sortDir = $(oHeader).attr('data-direction');
    var sortingFunction = null;

    switch (sortBy) {
        case "name": //sort by name
            sortingFunction = (band1, band2) => {
                return band1.name.localeCompare(band2.name);
            };
            break;
        case "albums": //sort by albums
            sortingFunction = (band1, band2) => {
                return band1.albums.length - band2.albums.length;
            }
            break;
        default:
            break;
    }
    $(oHeader).attr('data-direction', sortDir == 'asc' ? 'desc' : 'asc');

    if (sortDir == 'desc')
        Bands.sort(sortingFunction).reverse();
    else
        Bands.sort(sortingFunction);

    populateTable();
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

Array.prototype.unique = function() {
    return this.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}


$(function() {
    getData();

});