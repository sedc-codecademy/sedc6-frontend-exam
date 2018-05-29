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
                    this.tbody.append(row);
                });
            });


        };

        this.setList = function (list) {
            this.list = list;
            this.populateTable();
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
            },
            error: function (error) {
                console.log(error);
            }
        })
    });
    let click = 1;
    $("#sortName").on("click", (e) => {

        var sortingFunction = null;
        if (click == 1) {
            sortingFunction = (a, b) => (a.name.localeCompare(b.name));
            click = 2;
        } else if (click == 2) {
            sortingFunction = (a, b) => (b.name.localeCompare(a.name));
            click = 1;
        }
        table.setSortingFunction(sortingFunction);
        table.populateTable();
    });

    $("#sortAlbums").on("click", (e) => {
        var sortingFunction = (a, b) => (b.albums.length - a.albums.length);
        table.setSortingFunction(sortingFunction);
        table.populateTable();
    });

    $("#searchForm").on('submit', (e) => {
        e.preventDefault()
        let term = $("#inputBandName").val().toLowerCase();
        console.log(term);
        let searchList = table.list.filter(band => band.name.toLowerCase() == term);
        console.log(searchList);
        table.setList(searchList);
    });

    $("#sort").on("change", function (event) {
        var pickedValue = $(event.target).val();
        let selectList = null;
        switch (pickedValue) {
            case '1': //sort by thrash metal
            selectList = table.list.filter(band => (band.tags.filter(tag => tag == "thrash metal") == true));
                break;
            case '2': // sort by song metal
                
                break;
            case '3': // sort by heavy metal
                
                break;
            case '4': // sort by hard rock
                
                break;
            case '5': // sort by rock
                
                break;
            case '6': // sort by rock
                
                break;
            case '7': // sort by rock
                
                break;
            case '8': // sort by rock
                
                break;
            case '9': // sort by rock
                
                break;
            case '10': // sort by rock
                
                break;
            case '11': // sort by rock
                
                break;
            case '12': // sort by rock
                
                break;
            case '13': // sort by rock
                
                break;
            case '14': // sort by rock
                
                break;
            default:
                break;
        }
        console.log(selectList);
        table.setList(selectList);
    });
});