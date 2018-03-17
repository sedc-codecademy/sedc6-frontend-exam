$(function(){
    var bands1;
    var number = 1
    // Getting Data
    function getData(){
        $.ajax({
            method:"GET",
            url:"band-data.json",
            success:function(data){
                table.setListOfBands(data);
                table.populateTable();
                bands1 = data;
                console.log(bands1);
            },
            error:function(error){

            }
        })
    }
    let table = new Table ([]);
    $(document).ready(getData);

    function Table (list){
        this.listOfBands = list;
        this.tbody = $('#tbody');

        this.populateTable = function(){
            
            this.tbody.html('');
            this.listOfBands.forEach(band => {
                let row = $('<tr>'); 
                let membersName = [];
                let albumsNum = [];
                let bandTags = [];
                $('<td>').text(number++).appendTo(row);
                $('<td>').text(band.name).appendTo(row);
                $('<td>').text(band.active).appendTo(row);
                for (var i = 0; i < band.tags.length; ++i){
                    bandTags.push('<p>-' + band.tags[i] + '</p>')
                 }
                $('<td>').html(bandTags).appendTo(row);
                for (var i = 0; i < band.members.length; ++i){
                    if (band.members[i].former == undefined) {
                        membersName.push('<p>-' + band.members[i].name + ' former member: ' + band.members[i].former + '</p>')
                    } else {
                        membersName.push('<p>-' + band.members[i].name + '</p>') 
                    }    
                }
                $('<td>').html(membersName).appendTo(row);
                for (var i = 0; i < band.albums.length; ++i){
                    albumsNum.push(i)
                }
                $('<td>').text(albumsNum.length).appendTo(row);
                this.tbody.append(row);
            });
        }

        this.setListOfBands = function(bands){
            this.listOfBands = bands;
            
        }
    }
    // SEARCH BUTTON
    let searchButton = $('#search-btn');
    //1. read value from input
    searchButton.on('click', function(){
        let searchedName = $('#search-inp').val();
    })
    // 2. show only searched name results
    let searchArr = [];
    console.log(bands1);
    // for (let i = 0; i < bands.lenght; i++){
    //     if (bands[i].name.val() === searchedName){
    //         searchArr.push(bands.name)
    //         console.log(searchArr);
    //     }
    // }

    //TAGS SELECT
    // 1. Go through all tags and select only unique

    // 2. Display unique in <option></option>

    // 3. Display only selected

    //Sorting

    //1. switch (case 1 : name) sort a-b ;(case 2 : albums) sort a-b .reverse

    //2.
})
