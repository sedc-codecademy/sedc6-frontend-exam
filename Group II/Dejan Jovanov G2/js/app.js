$(document).ready(function () {

    function bandArr(list) {
        this.listOfBands = list;
        this.tbody = $('#tbody');
        this.reverse = false;
        this.sortingFunction = null;

        this.populateTable = function () {
            //console.log("function called")


            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction).reverse();
                } else {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction);
                };
            };

            //cistenje na tabelata
            this.tbody.html("");

            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            };

            //kreiranje nov red i polnenje
            this.listOfBands.forEach(band => {
                //count = 1;
                this.tbody.append(`
                <tr>
                <td>${getRandomInt(18)}</td>
                <td>${band.name}</td>
                <td>${band.active ? "Active" : "Not Active"}</td>
                <td>${band.tags}</td>
                <td>${band.members.filter(person => person.former === false || person.former === undefined)
                    .map(person => person.name)}</td>
                <td>${band.albums.length}</td>
            </tr>
                `)
            });
        };
    };

    let bandTable = new bandArr([]);

    //zemanje podatoci od ajax povik
    function getData() {
        //alert("function called");
        $.ajax({
                method: 'GET',
                url: 'https://api.myjson.com/bins/vgkg3',
                success: function (data) {
                    //console.log(data.length);
                    bandTable.listOfBands = data;
                    bandTable.populateTable();
                },
                error: function (error) {
                    console.log(error)
                }
            }

        );
    };

    //polnenje tabela
    $("#getDataBtn").on('click', () => {
        getData();
    });

    
    //sortiranje po ime
    $("#sort-name").on("click", () => {
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
    });
    
    //sortiranje po album
    $("#sort-albums").on("click", () => {
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
    });

    //ova trebase da gi prikaze samo onie so aktivni memberi
    $("#status").on('click', () => {
        let sortingFunction = null;
        sortingFunction = (person) => {
            bandTable.listOfBands.filter(person => person.active === true);
        }
        bandTable.sortingFunction = sortingFunction;
        bandTable.populateTable();
    });

    $("#searchBtn").on('click', () => {
        //za malce
    });
    

});