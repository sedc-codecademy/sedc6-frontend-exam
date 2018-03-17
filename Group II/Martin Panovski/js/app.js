$(document).ready(function () {


    // ---------------------------------CREATING BAND LIST CONSTRUCTOR FUNCTION--------------------------------
    function BandList(list) {
        this.listOfBands = list;
        this.tbody = $('#myTable');
        this.searchInputValue = "";
        this.sortingFunction = null;
        this.reverse = false;
        this.selectedTagValue = "";

        this.populateTable = function () {

            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction).reverse();
                } else {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction);
                }
            }

            let id = 1;
            this.tbody.html("");
            this.listOfBands.forEach(band => {
                this.tbody.append(`
                <tr>
                <td>${id++}</td>
                <td>${band.name}</td>
                <td>${band.active ? "Yes" : "No"}</td>
                <td>${band.tags}</td>
                <td>${band.members.filter(member => member.former === false || member.former === undefined).map(member => member.name)}</td>
                <td>${band.albums.length}</td>
            </tr>
                `)
            });

        }

        this.populateTags = function () {
            value = 0
            this.listOfBands.forEach(band => {
                $('#tagsSelect').append(`
                    <option value = ${value++}>${band.tags}</option>
                `)
            });
        }

        this.checkActiveBands = function () {
            let id = 1;

            $('#checkActiveBands').on('change', () => {
                this.tbody.html("");
                this.listOfBands.filter(band => band.active === true).forEach(band => {

                    this.tbody.append(`
                <tr>
                <td>${id++}</td>
                <td>${band.name}</td>
                <td>${band.active ? "Yes" : "No"}</td>
                <td>${band.tags}</td>
                <td>${band.members.filter(member => member.former === false || member.former === undefined).map(member => member.name)}</td>
                <td>${band.albums.length}</td>
            </tr>
                `)
                })
            })

        }

        this.searchMusicBands = function () {
            let id = 1;
            this.tbody.html("");
            this.listOfBands.filter(band => band.name.toLowerCase().includes(this.searchInputValue.toLowerCase())).forEach(band => {
                this.tbody.append(`
                <tr>
                <td>${id++}</td>
                <td>${band.name}</td>
                <td>${band.active ? "Yes" : "No"}</td>
                <td>${band.tags}</td>
                <td>${band.members.filter(member => member.former === false || member.former === undefined).map(member => member.name)}</td>
                <td>${band.albums.length}</td>
            </tr>
                `)
            })
        }

        this.findByTags = function () {
            let id = 1;
            this.tbody.html("");
            this.listOfBands.filter(band => band.tags === this.selectedTagValue).forEach(band => {
                this.tbody.append(`
                <tr>
                <td>${id++}</td>
                <td>${band.name}</td>
                <td>${band.active ? "Yes" : "No"}</td>
                <td>${band.tags}</td>
                <td>${band.members.filter(member => member.former === false || member.former === undefined).map(member => member.name)}</td>
                <td>${band.albums.length}</td>
            </tr>
                `)
            });
        }
    }


    // ---------------------------------MAKING AN INSTANCE OF CONSTURCTOR FUNCTION AND AJAX CALL--------------------------------

    let bandTable = new BandList([]);

    function getData() {

        $.ajax({
            method: 'GET',
            url: 'https://api.jsonbin.io/b/5aad3366864b2d611e0a30b3',
            success: function (data) {

                bandTable.listOfBands = data;
                bandTable.populateTable();
                bandTable.populateTags();

            },
            error: function (error) {
                console.log(error);
            }
        })
    }

    getData();

    // ---------------------------------CLICK EVENTS FOR SORTING--------------------------------------------------
    bandTable.checkActiveBands();

    $('#bandNameTh').on('click', () => {

        $('#bandNameTh').toggleClass('click');
        let sortingFunction = null;
        if (bandTable.reverse === true) {
            sortingFunction = (band1, band2) => {
                bandTable.reverse = false;
                return band1.name.localeCompare(band2.name);
            }
        } else if (bandTable.reverse === false) {
            sortingFunction = (band1, band2) => {
                bandTable.reverse = true;
                return band1.name.localeCompare(band2.name);
            }
        }
        bandTable.sortingFunction = sortingFunction;
        bandTable.populateTable();
    })

    $('#bandNumAlbumsTh').on('click', () => {

        $('#bandNumAlbumsTh').toggleClass('click');
        let sortingFunction = null;
        if (bandTable.reverse === true) {
            sortingFunction = (band1, band2) => {
                bandTable.reverse = false;
                return parseInt(band1.albums.length) - parseInt(band2.albums.length);
            }
        } else if (bandTable.reverse === false) {
            sortingFunction = (band1, band2) => {
                bandTable.reverse = true;
                return parseInt(band1.albums.length) - parseInt(band2.albums.length);
            }
        }

        bandTable.sortingFunction = sortingFunction;
        bandTable.populateTable();
    })


    // ---------------------------------CLICK EVENTS FOR SEARCH FUNCTION--------------------------------------------------

    $('#btnSearch').on('click', () => {
        bandTable.searchInputValue = $('#searchInputValue').val();
        bandTable.searchMusicBands();
    })

    $('#refresh').on('click', () => {
        getData();
    })

    $('#tagsSelect').on('change', (e) => {
        bandTable.selectedTagValue = e.target.value;
        bandTable.findByTags();

    })




})