$(function(){
    function Table(list){
        this.listOfBands = list;
        this.tbody = $("#tbody");

        this.populateTable = function(sortingFunction){
            if(sortingFunction != undefined){
                this.listOfBands = this.listOfBands.sort(sortingFunction);
            }

            this.tbody.html("");
            this.listOfBands.forEach(band => {
                let row = $("<tr>");
                $("<td>").text(band.rowNumber).appendTo(row);
                $("<td>").text(band.bandName).appendTo(row);
                $("<td>").text(band.tags).appendTo(row);
                $("<td>").text(band.active).appendTo(row);
                $("<td>").text(band.members).appendTo(row);
                $("<td>").text(band.numberOfAlbums).appendTo(row);
                this.tbody.append(row);
            });
        }

        this.setlistOfBands = function(bands){
            this.listOfBands = bands;
        }
    }
    $("#pull").click(getData());

    function getData(){
        
        $.ajax({
            method:"GET",
            url:"../file/file.json",
            success:function(data){
                console.log(data);
                $.parseJSON(data);
                table.setListOfBands(data);
                table.populateTable();
            },
            error:function(error){
                console.log(error);
            }
        });

    }

    function sortData (e){
        let pickedValue = e.target.value;
        let sortingFunction;
        switch(pickedValue){
            case 1:
                sortingFunction = (a,b) => {
                    return a.bandName.localeCompare(b.bandName);
                }
            case 2:
                sortingFunction = (a,b) => {
                    return  parseInt(a.numberOfAlbums) - parseInt(b.numberOfAlbums);
                }
        }
        table.populateTable(sortingFunction);
    }

    function searchData () {
        
    }
});