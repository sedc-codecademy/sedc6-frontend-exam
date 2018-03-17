let Band = function(name, active, tags, albums, members) {
    this.name = name;
    this.active = active;
    this.tags = tags;
    this.albums = albums;
    this.members = members;
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

let limit = 10;
let offset = 0;
let has_paging = false;

function getData() {
    getLocalData();

    if (Bands.length > 0) {
        drawTable();
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
        let albums = [];
        $(band.albums).each(function(index, a) {
            albums.push(new Album(a.name, a.year, a.type));
        });

        let members = [];
        $(band.members).each(function(index, m) {
            members.push(new Member(m.name, (typeof m.former != 'undefined' ? m.former : false)));
        });

        Bands.push(new Band(band.name, band.active, band.tags, albums, members));
    });

    drawTable();
}

function drawTable() {
    $('#bands').empty();

    $(Bands).each(function(index, band) {
        $(band.tags).each(function(index, tag) {
            Tags.push(tag);
        });
    });

    let bandsData = Bands;
    if (arguments.length > 0)
        bandsData = arguments[0];

    for (let i = (offset * limit); i < (offset + 1) * limit; i++) {
        if (i > Bands.length && typeof bandsData[i] == 'undefined')
            break;

        $(bandsData[i]).each(function(index, band) {
            let tableRow = '<tr>' +
                '<td>' + (i + 1) + '</td>' +
                '<td>' + band.name + '</td>' +
                '<td>' + (band.active ? 'Yes' : 'No') + '</td>' +
                '<td>' + band.tags.join(', ') + '</td>' +
                '<td>' + drawMembers(band.members) + '</td>' +
                '<td>' + band.albums.length + '</td>' +
                '</tr>';

            $('#bands').append(tableRow);
        });
    }

    if (bandsData.length > 10 && !has_paging) {
        drawPagination(has_paging);
        has_paging = true;
    }

    setLocalData(Bands);

    initSorting();
    initControls();
}

function drawPagination(hasPaging) {
    if (!hasPaging) {
        $('#total_records').html(Bands.length);
        let page = ((offset + 1) * 10);
        $('#current_page').html((offset * 10) + ' - ' + page);
    }

    if (offset == 0)
        $('#prev').hide();

    $('#prev').off('click').on('click', function(event) {
        event.preventDefault();

        offset--;
        if (offset <= 0) {
            offset = 0;
            $(this).hide();
        } else {
            $(this).show();
        }
        $('#next').show();
        let page = ((offset + 1) * 10);
        $('#current_page').html((offset * 10) + ' - ' + page);
        drawTable();

        return false;
    });

    $('#next').off('click').on('click', function(event) {
        event.preventDefault();

        offset++;
        if (offset >= Math.floor(Bands.length / limit)) {
            offset = Math.floor(Bands.length / limit);
            $(this).hide();
        } else {
            $(this).show();
        }
        $('#prev').show();
        let page = ((offset + 1) * 10);
        $('#current_page').html((offset * 10) + ' - ' + page);
        drawTable();

        return false;
    });
}

function drawMembers(members) {
    let membersList = '<ul>';
    $(members).each(function(index, member) {
        if (!member.former)
            membersList += '<li>' + member.name + '</li>';

    });
    membersList += '</ul>';
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
    $('#search').off('keyup').on('keyup.', function(event) {
        drawTable(Bands.filter(band => band.name.indexOf($(this).val()) > -1));
    });

    $('#active').off('change').on('change', function(event) {
        drawTable(Bands.filter(band => band.active == $(this).is(':checked')));
    });

    if ($('#tags > option').length == 0) {
        $('#tags').empty();
        $('#tags').append('<option value="all">-- All --</option>');
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
        drawTable();
    else
        drawTable(Bands.filter(band => band.tags.indexOf(tag) > -1));
}

function doSort(oHeader) {
    let sortBy = $(oHeader).attr('data-sort');
    let sortDir = $(oHeader).attr('data-direction');
    let sortingFunction = null;

    switch (sortBy) {
        case "name":
            sortingFunction = (band1, band2) => {
                return band1.name.localeCompare(band2.name);
            };
            break;
        case "albums":
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

    drawTable();
}

function setLocalData(jsonData) {
    localStorage.setItem('bands', JSON.stringify(jsonData));
}

function getLocalData() {
    let data = localStorage.getItem('bands');

    if (data != null) {
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