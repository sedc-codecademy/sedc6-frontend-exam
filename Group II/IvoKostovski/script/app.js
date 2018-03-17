$(function () {

    function TableData(list) {
        this.listOfBands = list;
        this.tableOrder = 1;
        this.searchedInput = "";
        this.selectedTag = "";
        this.selectedBand = "Metallica";
        this.tbody = $("#tbody");
        this.sortingFunction = null;
        this.reverse = false;
        this.populateTable = function () {
            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction).reverse();
                } else {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction);
                }
            }
            this.tbody.html("");

            this.listOfBands.forEach(band => {
                let row = $("<tr>");
                $("<td>").text(this.tableOrder).appendTo(row);
                $("<td>").text(band.name).appendTo(row);
                if (band.active === true) {
                    $("<td>").text("Yes").appendTo(row);
                } else if (band.active === false) {
                    $("<td>").text("No").appendTo(row);
                } else {
                    $("<td>").text("N/A").appendTo(row);
                }
                $("<td>").text(band.tags).appendTo(row);
                $("<td>").html(band.members.filter(member => member.former === false || member.former === undefined).map(member => `${member.name} <br>`)).appendTo(row);
                $("<td>").text(band.albums.length).appendTo(row);
                this.tbody.append(row);
                this.tableOrder++;
            });
        }
        this.activeBandsOnly = function() {
            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction).reverse();
                } else {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction);
                }
            }
            this.tbody.html("");

            this.listOfBands.filter(band => band.active === true).forEach(band => {
                let row = $("<tr>");
                $("<td>").text(this.tableOrder).appendTo(row);
                $("<td>").text(band.name).appendTo(row);
                if (band.active === true) {
                    $("<td>").text("Yes").appendTo(row);
                } else if (band.active === false) {
                    $("<td>").text("No").appendTo(row);
                } else {
                    $("<td>").text("N/A").appendTo(row);
                }
                $("<td>").text(band.tags).appendTo(row);
                $("<td>").html(band.members.filter(member => member.former === false || member.former === undefined).map(member => `${member.name} <br>`)).appendTo(row);
                $("<td>").text(band.albums.length).appendTo(row);
                this.tbody.append(row);
                this.tableOrder++;
            });
        }

        this.searchedBands = function() {
            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction).reverse();
                } else {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction);
                }
            }
            this.tbody.html("");

            this.listOfBands.filter(band => band.name.toLowerCase().includes(this.searchedInput.toLowerCase())).forEach(band => {
                let row = $("<tr>");
                $("<td>").text(this.tableOrder).appendTo(row);
                $("<td>").text(band.name).appendTo(row);
                if (band.active === true) {
                    $("<td>").text("Yes").appendTo(row);
                } else if (band.active === false) {
                    $("<td>").text("No").appendTo(row);
                } else {
                    $("<td>").text("N/A").appendTo(row);
                }
                $("<td>").text(band.tags).appendTo(row);
                $("<td>").html(band.members.filter(member => member.former === false || member.former === undefined).map(member => `${member.name} <br>`)).appendTo(row);
                $("<td>").text(band.albums.length).appendTo(row);
                this.tbody.append(row);
                this.tableOrder++;
            });
        }

        this.tagBands = function() {
            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction).reverse();
                } else {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction);
                }
            }
            this.tbody.html("");

            this.listOfBands.filter(band => band.tags.includes(this.selectedTag)).forEach(band => {
                let row = $("<tr>");
                $("<td>").text(this.tableOrder).appendTo(row);
                $("<td>").text(band.name).appendTo(row);
                if (band.active === true) {
                    $("<td>").text("Yes").appendTo(row);
                } else if (band.active === false) {
                    $("<td>").text("No").appendTo(row);
                } else {
                    $("<td>").text("N/A").appendTo(row);
                }
                $("<td>").text(band.tags).appendTo(row);
                $("<td>").html(band.members.filter(member => member.former === false || member.former === undefined).map(member => `${member.name} <br>`)).appendTo(row);
                $("<td>").text(band.albums.length).appendTo(row);
                this.tbody.append(row);
                this.tableOrder++;
            });
        }
        this.bandSelector = function() {
            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction).reverse();
                } else {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction);
                }
            }
            this.tbody.html("");

            this.listOfBands.filter(band => band.name.includes(this.selectedBand)).forEach(band => {
                let row = $("<tr>");
                $("<td>").text(this.tableOrder).appendTo(row);
                $("<td>").text(band.name).appendTo(row);
                $("<td>").html(band.members.filter(member => member.former === true).map(member => `${member.name} <br>`)).appendTo(row);
                $("<td>").html(`Studio: ${band.albums.filter(album => album.type === "studio").length} <br> Live: ${band.albums.filter(album => album.type === "live").length} <br> Cover: ${band.albums.filter(album => album.type === "cover").length} <br> Compilation: ${band.albums.filter(album => album.type === "compilation").length}`).appendTo(row);  
                $("<td>").text(band.albums.year).appendTo(row);  
                this.tbody.append(row);
                this.tableOrder++;
            });
        }
    };

    let table = new TableData([]);


    function getData() {
        $.ajax({
            method: "GET",
            url: "https://api.myjson.com/bins/15ei8z",
            success: function (data) {
                table.listOfBands = data;
                table.populateTable();
            },
            error: function (error) {
                console.log(error)
            }
        })
    }

    $("#pull").on("click", () => {
        getData();
    });

    $("#sort-name").on("click", () => {
        let sortingFunction = null;
        if (table.reverse === true) {
            sortingFunction = (band1, band2) => {
                table.reverse = false;
                return band1.name.localeCompare(band2.name);
            }
        } else if (table.reverse === false) {
            sortingFunction = (band1, band2) => {
                table.reverse = true;
                return band1.name.localeCompare(band2.name);
            }
        }
        table.sortingFunction = sortingFunction;
        table.populateTable();
    });

    $("#sort-albums").on("click", () => {
        let sortingFunction = null;
        if (table.reverse === true) {
            sortingFunction = (band1, band2) => {
                table.reverse = false;
                return parseInt(band1.albums.length) - parseInt(band2.albums.length);
        }
        } else if (table.reverse === false) {
            sortingFunction = (band1, band2) => {
                table.reverse = true;
                return parseInt(band1.albums.length) - parseInt(band2.albums.length);
        }}
        table.sortingFunction = sortingFunction;
        table.populateTable();
    });

    $("#active-bands").on("change", (e) => {
        e.preventDefault();
        table.activeBandsOnly();
    })

    $("#search-bands").on("click", (e) => {
        e.preventDefault();
        table.searchedInput = $('#search-input').val();
        table.searchedBands();
    })

    $("#tag-selec").on("change", (e) => {
        e.preventDefault();
        table.selectedTag = $("#tag-selec").find(":selected").text();
        table.tagBands();
    })

    $("#band-select").on("change", (e) => {
        e.preventDefault();
        table.selectedBand = $("#band-select").find(":selected").text();
        table.bandSelector();
    })


});