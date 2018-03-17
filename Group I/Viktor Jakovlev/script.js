$(document).ready(() => {

    let bands = [];
    let searchBands = [];
    let tags = [];

    let start = 0;
    let count = 10;


    // ajax call
    $.ajax({
        method:"GET",
        url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
        dataType: "json",
        success: (data) => {

            bands = data;
            searchBands = data;
           
            console.log(data);

        },
        error: (err) => {
            console.log(err);
        }
    })

    $("#getData").on("click", () => {
        populateTable(bands);
    });


    function populateTable(data) {

        $("#tableBody").html("");

        let isBandActive;
        let bandMemebers = "";
        let albumCounter = 0;

        let allTags = [];
        let uniqueTags = [];
        tags = uniqueTags;

        for (let i = start; i < count; i++) {

            if (data[i].active == true) {
                isBandActive = "Yes";
            } else {
                isBandActive = "No";
            }

            data[i].members.forEach(item => {
                if (item.former === true) {

                } else {
                    bandMemebers += `${item.name} <br>`;
                }
            })

            data[i].albums.forEach(item => {
                albumCounter += 1;
            })


            data[i].tags.forEach(item => {
                allTags.push(item);
            })

            $.each(allTags, function(i, el){
                if($.inArray(el, uniqueTags) === -1) uniqueTags.push(el);
            });

            $("#tableBody").append(`
                <tr>
                    <td>${i + 1}</td>
                    <td>${data[i].name}</td>
                    <td>${isBandActive}</td>
                    <td>${data[i].tags}</td>
                    <td>${bandMemebers}</td>
                    <td>${albumCounter}</td>
                </tr>
            `);

            bandMemebers = [];
            albumCounter = 0;
        }
    }

    //search by name
    $('#searchBox').keyup(()=>{
        bands = searchBands;
        let inputVal = $('#searchBox').val().toUpperCase();

        let newList = bands.filter((item)=>{

            if((item.name).toUpperCase().indexOf(inputVal)>-1){
                return true
            } else {
                return false;
            }
        });
       
        bands = newList;
        populateTable(bands);
    })

    // search by tags
    $("#loadTags").on("click", () => {

        for (let i = 0; i < tags.length; i++) {
            $("#tags").append(`
                <option value="${tags[i]}">${tags[i]}</option>
            `);
        }
    })

    $('#tags').on('change',(e)=>{
        let inputChecked = e.target.value;
        let brandList = bands.filter((item)=>{
           for (var i=0; i < item.tags.length; i++){
                if ((item.tags[i]) === inputChecked){
                    return true;
                } 
           }
        });
    populateTable(brandList);
    })

    // show active or not active bands
    $("#active").on("click", (e) => {
        if (e.target.checked === true) {
            let activeBands = bands.filter((item) => {
                if ((item.active) === true) {
                    return true;
                } else {
                    return false;
                }
            })
            populateTable(activeBands);
        } else if (e.target.checked === false) {
            populateTable(bands);
        }
    })

    // pagination
    $("#next").on("click", () => {
        if (count < 18) {
            count += 10;
            start += 10;
            populateTable(bands);
        }
        
    })
    
    $("#previous").on("click", () => {
        if (count > 10) {
            count -= 10;
            start -= 10;
            populateTable(bands);
        }
    })
    
    // sorting
    $('#name').on("click", Sort);
    $('#total').on("click", Sort);

    function Sort() {
        let table = $(this).parents('table').eq(0)
        let rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc) { rows = rows.reverse() }
        for (let i = 0; i < rows.length; i++) { table.append(rows[i]) }
    }

    function comparer(index) {
        return function (a, b) {
            let valA = getCellValue(a, index), valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
        }
    }

    function getCellValue(row, index) { 
        return $(row).children('td').eq(index).text() 
    }
})