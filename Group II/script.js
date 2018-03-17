$(function () {


    function TableData(list) {
        this.listOfBands = list;
        this.tbody = $("#tbody");
        this.reverse = false;
        this.populateTable = function () {
            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction).reverse();
                    this.reverse = false;
                } else {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction);
                    this.reverse = true;
                }
            }
            this.tbody.html("");
            let rnumber = 0;
            this.listOfBands.forEach(band => {
                rnumber++;
                let row = $("<tr>");
                $("<td>").text(rnumber).appendTo(row);
                $("<td>").text(band.name).appendTo(row);
                $("<td>").text(ifActive(band.active)).appendTo(row);
                $("<td>").text(band.tags).appendTo(row);
                $("<td>").html(currentM(band.members)).appendTo(row);
                $("<td>").text(band.albums.length).appendTo(row);
                this.tbody.append(row);
            });
        }
    };

    let table;

    let bands = [];
    function getData() {
        $.ajax({
            method: "GET",
            url: "https://raw.githubusercontent.com/nikolovska23/sedc6-frontend-exam/master/band-data.json",
            success: function (data) {
                console.log(data);
                bands = JSON.parse(data);
                table = new TableData(bands);
                table.populateTable();
            },
            error: function (error) {
                console.log(error)
            }
        })
    }


    //Sorting 

    $("#name").click(() => {
        let sortingFunction = null;
        sortingFunction = (band1, band2) => {
            if (band1.name < band2.name)
            return -1
          if ( band1.name > band2.name)
            return 1
          return 0
        }
        table.sortingFunction = sortingFunction;
        table.populateTable();
    });

    $("#albums").click(() => {
        sortingFunction = null;
        sortingFunction = (band1, band2) => {
            return parseInt(band1.albums.length) - parseInt(band2.albums.length);
        }
        table.sortingFunction = sortingFunction;
        table.populateTable();
    });

    $("#pull").on("click", () => {
        getData();

    });



    //FILTER

    $("#search").on('keyup', function () {
        debugger
        var rows = $("#tbody").find("tr").hide();
        if (this.value.length) {
            var data = this.value.split(" ");
            $.each(data, function (i, v) {
                rows.filter(":contains('" + v + "')").show();
            });
        } else rows.show();
    });




    //If the band is active
    function ifActive(v) {
        if (v)
            return "yes";
        else return "no";
    }

    //Current members
    function currentM(members) {

        let membersC = members.map(member => {
            if (!member.former)
               return `<div> ${member.name} </div>`;
        });
        return membersC;
    }

    //List of active bands

    let activeBands = bands.map(band => {
        if (band.active)
           return band.name;
    });




    $("#activeBands").click((() => {
        if ($("#activeBands").is(":checked")) {
            debugger
            activeBands.forEach(band => {
                $("#bands_display").append(`<li>${band}</li>`);
            });
        }

    }));



    //Tags dropdown
    let tags = bands.forEach(band => {
        band.tags;

    });


    $.each(tags, function (i, t) {
        $("#tagsList").append($('<option></option>').html(t));
    });


    function containsTag(pickedTag) {
        let bandTags = bands.forEach(band => {
            band.tags.forEach(tag => {
                if (tag == pickedTag) {
                    band.name;
                }
            });
        });
    }


    $("#tagsList").change((e) => {
        let pickedTag = e.target.value;

        let bandsTag = containsTag(pickedTag);

        bandsTag.forEach(band => {
            $("#bandsT_display").append(`<li>${band}</li>`);
        });

    })



});