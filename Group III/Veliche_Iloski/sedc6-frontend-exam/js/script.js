$(function () {
    // class Band {
    //     constructor(name, active, tags, members, albums) {
    //         this.name = name;
    //         this.active = active;
    //         this.tags = tags;
    //         this.members = members;
    //         this.albums = albums;

    //     }
    // }
    // class Member {
    //     constructor(name, former) {
    //         this.name = name;
    //         this.former = former;
    //     }
    // }

    // class Album {
    //     constructor(name, year, type) {
    //         this.name = name;
    //         this.year = year;
    //         this.type = type;
    //     }
    // }

    function TableData() {
        this.list = [];
        this.tbody = $("#tbody");
        this.sortingFunction = null

        this.populateTable = function () {
            if (this.sortingFunction != null) {
                this.list = this.list.sort(this.sortingFunction);
            }

            let index = 1;
            this.tbody.html("");


            console.log(typeof (this.list));
            this.list.forEach(band => {

                let row = $(`<tr style='background: darksalmon'>`);
                $("<td>").text(`${index++}`).appendTo(row);
                $("<td>").text(band.name).appendTo(row);
                $("<td>").html(band.tags.map(tag => `${tag}, `)).appendTo(row);
                $("<td>").text("Members:").appendTo(row);
                $("<td>").text(band.albums.length).appendTo(row);
                if (band.active == true) {
                    $("<td>").html(`<span>${band.active}`).css("color", "#13ff00").appendTo(row);
                } else if (band.active == false) {
                    $("<td>").html(`<span>${band.active}`).css("color", "#fd1313").appendTo(row);
                }
                this.tbody.append(row);

                let i = 1;
                let activeMembers = band.members.filter(member => member.former != false);
                activeMembers.forEach(member => {
                    let row = $("<tr style='background: antiquewhite'>");
                    $("<td>").text("").appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("<td>").text(member.name).appendTo(row);
                    $("<td>").text("").appendTo(row);
                    $("<td>").text("").appendTo(row);
                    this.tbody.append(row);
                });
            });


        };

        this.setList = function (list) {
            this.list = list;
            // this.populateTable();
        }
        this.setSortingFunction = function (sortingFunction) {
            this.sortingFunction = sortingFunction;
            // this.populateTable();
        }


    }

    let table = new TableData();

    $("#pull").on("click", function () {
        $.ajax({
            method: "GET",
            url: "https://raw.githubusercontent.com/Veliche/sedc6-frontend-exam/master/band-data.json",
            success: function (data) {
                // console.log(data);
                let list = JSON.parse(data);
                table.setList(list);
                table.populateTable();
                tableActiveBands.setList(list);
            },
            error: function (error) {
                console.log(error);
            }
        })
    });

    let tableActiveBands = new TableData();

    $("#activeBands").on("change", (e) => {
        tableActiveBands.setList(table.list);
        let activeBandsList = null;
        if (e.target.checked) {
            activeBandsList = tableActiveBands.list.filter(band => (band.active) ? true : false);
        } else {
            activeBandsList = tableActiveBands.list.filter(band => (!band.active) ? true : false);
        }
        // console.log(activeBandsList);
        tableActiveBands.setList(activeBandsList);
        tableActiveBands.populateTable();
    });

    //sorting by Band Name
    let clickName = 1;
    $("#sortName").on("click", (e) => {

        var sortingFunction = null;
        if (clickName == 1) {
            sortingFunction = (a, b) => (a.name.localeCompare(b.name));
            $(e.target).html(`Band Name &uarr;`);
            clickName = 2;
        } else if (clickName == 2) {
            sortingFunction = (a, b) => (b.name.localeCompare(a.name));
            $(e.target).html(`Band Name &darr;`);
            clickName = 1;
        }
        tableActiveBands.setSortingFunction(sortingFunction);
        tableActiveBands.populateTable();
    });

    //sorting by number of Albums
    let clickAlbums = 1;
    $("#sortAlbums").on("click", (e) => {
        var sortingFunction = null;
        if (clickAlbums == 1) {
            sortingFunction = (a, b) => (b.albums.length - a.albums.length);
            $(e.target).html(`Albums &darr;`);
            clickAlbums = 2;
        } else if (clickAlbums == 2) {
            sortingFunction = (a, b) => (a.albums.length - b.albums.length);
            $(e.target).html(`Albums &uarr;`);
            clickAlbums = 1;
        }
        tableActiveBands.setSortingFunction(sortingFunction);
        tableActiveBands.populateTable();
    });

    $("#searchForm").on('submit', (e) => {
        e.preventDefault()
        let term = $("#inputBandName").val().toLowerCase();
        console.log(term);
        let tableSearch = new TableData();
        tableSearch.setList(tableActiveBands.list);
        let searchList = tableSearch.list.filter(band => (band.name.toLowerCase().indexOf(term) != -1) ? true : false);
        console.log(searchList);
        tableSearch.setList(searchList);
        tableSearch.populateTable();
    });


    $("#sort").on("change", function (event) {
        var pickedValue = $(event.target).val();
        let selectList = [];
        let table1 = new TableData();
        table1.setList(tableActiveBands.list);
        switch (pickedValue) {
            case '1': //sort by thrash metal
                selectList = table.list;
                tableActiveBands.setList(table.list);
                // if ($("#activeBands").checked) {
                //     $("#activeBands").checked = false;
                // }else {
                //     $("#activeBands").checked = true;
                // }
                break;
            case '2': //sort by thrash metal
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "thrash metal") {
                            res = true;
                        }
                    });
                    return res;
                });
                //2 nacin
                // table.list.forEach(band => {
                //     let res = band.tags.filter(tag => tag == "thrash metal")
                //     if(res[0] == "thrash metal"){
                //         selectList.push(band);
                //     }
                // });
                break;
            case '3': // sort by song metal
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "metal") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '4': // sort by heavy metal
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "heavy metal") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '5': // sort by hard rock
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "hard rock") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '6': // sort by rock
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "rock") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '7': // sort by speed metal
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "speed metal") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '8': // sort by nu metal
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "nu metal") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '9': // sort by alternative metal
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "alternative metal") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '10': // sort by german
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "german") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '11': // sort by alternative rock
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "alternative rock") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '12': // sort by political
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "political") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '13': // sort by rapcore
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "rapcore") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '14': // sort by hair metal
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "hair metal") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            case '15': // sort by grunge
                selectList = table1.list.filter(band => {
                    let res;
                    band.tags.forEach(tag => {
                        if (tag == "grunge") {
                            res = true;
                        }
                    });
                    return res;
                });
                break;
            default:
                break;
        }
        // console.log(selectList);
        table1.setList(selectList);
        table1.populateTable();
    });
});