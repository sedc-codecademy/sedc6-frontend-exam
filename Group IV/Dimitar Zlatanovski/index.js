$(() => {
    $.ajax({
        url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
        dataType: "json",
        success: function (data) {
            populateTableAndAddEvents(data);
        },
        error: function (err) {
            console.log(`Error ${err} happened.`);
        }
    });


    //Main function that holds all the logic and all subfunctions in it
    function populateTableAndAddEvents(data) {
        //setting some global variables that are needed for sorting the data and setting the event handlers for the search options
        let rows = [];
        let pagesA = [];        
        let counter = 1;
        let nameSort = false;
        let albumSort = false;
        let isActive = false;
        $("#searchBtn").on("click", searchClick);
        $("#tagSelect").on("change", tagSearchHandler);  
        
        //the function that is called to reset the table and put new event handlers on the elements whenever some sorting
        //event is triggered 
        function clearTable() {
            let tr =
                $(`<tr>
                <th scope="col" class="biggerFont">Row Number</th>
                <th scope="col" class="biggerFont">
                    <a href="#" id="bandName">Band Name</a>
                </th>
                <th scope="col" class="biggerFont">Active
                    <input type="checkbox" name="" id="isActive">
                </th>
                <th scope="col" class="biggerFont">Tags</th>
                <th scope="col" class="biggerFont">Band Members</th>
                <th scope="col" class="biggerFont">
                    <a href="#" id="bandAlbums">Number of Albums</a>
                </th>
            </tr>`);
            $('#bandsTable').html(tr);
            $("#bandName").on("click", bandNameClick);
            if(nameSort)
                document.getElementById("bandName").classList.add("activeSort");
            $("#bandAlbums").on("click", albumNumberClick);
            if(albumSort)
                document.getElementById("bandAlbums").classList.add("activeSort");
            $("#isActive").on("click", isActiveClick);
            if(isActive)
                $("#isActive").prop('checked', true);
        }
        
        //a function used for populating the table with the correct tags for each band
        function printTags(tagsArr) {
            tagsToStr = "";
            tagsArr.forEach(tag => {
                tagsToStr += `<p>${tag.toString()}</p>`
            });
            return tagsToStr;
        }
        //a function used for populating the table with the correct band members for each band
        function printMembers(members) {
            membersToStr = "";
            members.forEach(member => {
                membersToStr += `<p>${member.name.toString()}</p>`;
            });
            return membersToStr;
        }
        //the function that is responsible for re-populating the global rows array variable with new table rows from
        //the sorted data whenever a sorting event is triggered
        function populateRowsArray(data, rowsArray) {
            for (let i = 0; i < data.length; i++) {
                let row =
                    $(`<tr>
                    <th scope="row" data-id=${counter}>${counter}</th>
                    <td>${data[i].name}</td>
                    <td class="${data[i].active ? 'activeSort' : 'inactiveSort'}">${data[i].active}</td>
                    <td>${printTags(data[i].tags)}</td>
                    <td>${printMembers(data[i].members)}</td>
                    <td>${data[i].albums.length}</td>
                </tr>`);
                rowsArray.push(row);
                counter++;
            }
            counter = 1;
            return rowsArray;
        }

        rows = populateRowsArray(data, rows);

        //a function that re-populates the global pages array variable creates a page for every 10 items in the table
        //from the sorted data everytime a sorting event is triggered 
        function populatePagesArray(data) {
            pagesA = [];
            let existingPages = $(".blueA");
            if(existingPages.length !== 0){
                existingPages.remove();
            }
            let firstPageA = $(`<a href="#" class="blueA" id="1">1</a>`);
            pagesA.push(firstPageA);
            $(".mainContainer").append(firstPageA);

            for (let i = 0; i < data.length; i++) {
                if (i % 10 === 0 && i !== 0) {
                    let pageA = $(`<a href="#" class="blueA" id="${(i / 10) + 1}">${(i / 10) + 1}</a>`);
                    $(".mainContainer").append(pageA);
                    pagesA.push(pageA);
                }
            }
            counter = 1;
        }

        populatePagesArray(data);

        //the function responsible for adding an event that populates the pages from the pages array variable with
        //table rows created from sorted data
        function populatePages(rows,data) {
            clearTable();
            populatePagesArray(data);
            for(let i = 0; i < 10; i++){
                $("#bandsTable").append(rows[i]);
            }
            pagesA.forEach(page => {
                page.on('click', function () {
                    clearTable();
                    let maxIndexOfItems = parseInt(page.attr("id")) * 10;
                    if (maxIndexOfItems > rows.length) {
                        for (let i = maxIndexOfItems - 10; i < rows.length; i++) {
                            $('#bandsTable').append(rows[i]);
                        }
                    } else {
                        for (let i = maxIndexOfItems - 10; i < maxIndexOfItems; i++) {
                            $('#bandsTable').append(rows[i]);
                        }
                    }
                });
            });
        }

        populatePages(rows,data);

        //event handler function that sorts the data using the band names
        function bandNameClick() {
            let nameSortedData = data.sort((a, b) => {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            clearTable();
            albumSort = false;
            isActive = false;
            $("#searchInput").val('');
            $("#tagSelect").val('search');   
            let nameSortedRows = populateRowsArray(nameSortedData, []);
            if(nameSort){
                nameSortedRows.reverse();
                nameSort = false;
            } else{
                nameSort = true;
            }
            populatePages(nameSortedRows,nameSortedData);
            
        }
        //event handler function that sorts the data using the number of albums of the bands
        function albumNumberClick(){
            let albumSortedData = data.sort((a, b) => {
                return b.albums.length - a.albums.length;
            });
            clearTable();
            nameSort = false;
            isActive = false;
            $("#searchInput").val('');
            $("#tagSelect").val('search');   
            let albumSortedRows = populateRowsArray(albumSortedData, []);
            if(albumSort){
                albumSortedRows.reverse();
                albumSort = false;
            } else{
                albumSort = true;
            }
            populatePages(albumSortedRows,albumSortedData);
        }

        //event handler function that sorts the data according to their 'active' state
        function isActiveClick(){
            let activeSortedData = data.filter((item) => {
                if(item.active)
                    return true;
                else
                    return false;
            });
            nameSort = false;
            albumSort = false;
            $("#searchInput").val('');
            $("#tagSelect").val('search');                                    
            let activeSortedRows = populateRowsArray(activeSortedData, []);
            if(isActive){
                let rowsArray = populateRowsArray(data, []);
                isActive = false;
                clearTable();
                populatePages(rowsArray, data);
            } else{
                isActive = true;
                clearTable();                
                populatePages(activeSortedRows,activeSortedData);
            }
        }

        //event handler function that sorts the data according to the search term entered in the search input field
        function searchClick(){
            let searchTerm = $("#searchInput").val().toLowerCase();
            $("#searchInput").val('');
            $("#tagSelect").val('search');                        
            if(searchTerm === undefined)
                return;
            let searchSortedData = data.filter((item) => {
                if(item.name.toString().toLowerCase().includes(searchTerm))
                    return true;
                else
                    return false;
            });
            let searchSortedRows = populateRowsArray(searchSortedData,[]);
            nameSort = false;
            albumSort = false;
            isActive = false;
            clearTable();
            populatePages(searchSortedRows,searchSortedData);
        }

        //event handler function that sorts the data according to what tag is chosen from the tags select
        function tagSearchHandler(){
            let tag = $("#tagSelect").val().toLowerCase();
            $("#searchInput").val('');
            nameSort = false;
            albumSort = false;
            isActive = false;
            clearTable();
            if(tag === "search"){
                let rowsArray = populateRowsArray(data, []);
                isActive = false;
                populatePages(rowsArray, data);
                return;                
            }
            let tagSortedData = data.filter((item) => {
                if(item.tags.includes(tag))
                    return true;
                else
                    return false;
            });
            let tagSortedRows = populateRowsArray(tagSortedData, []);
            populatePages(tagSortedRows, tagSortedData);
        }
    }
});