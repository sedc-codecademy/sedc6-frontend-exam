$(() => {
    $.ajax({
        url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
        dataType: "json",
        success: function (data) {
            populateTable(data);
        },
        error: function (err) {
            console.log(`Error ${err} happened.`);
        }
    });


    function populateTable(data) {
        let rows = [];
        let counter = 1;
        let nameSort = false;
        let albumSort = false;
        let isActive = false;
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

        

        function printTags(tagsArr) {
            tagsToStr = "";
            tagsArr.forEach(tag => {
                tagsToStr += `<p>${tag.toString()}</p>`
            });
            return tagsToStr;
        }

        function printMembers(members) {
            membersToStr = "";
            members.forEach(member => {
                membersToStr += `<p>${member.name.toString()}</p>`;
            });
            return membersToStr;
        }

        function populateRowsArray(data, rowsArray) {
            for (let i = 0; i < data.length; i++) {
                let row =
                    $(`<tr>
                    <th scope="row" data-id=${counter}>${counter}</th>
                    <td>${data[i].name}</td>
                    <td class="${data[i].active ? 'active' : 'inactive'}">${data[i].active}</td>
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

        let pagesA = [];

        function populatePagesArray() {
            pagesA = [];
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

        populatePagesArray();


        function populatePages(rows) {
            clearTable();
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

        populatePages(rows);

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
            let nameSortedRows = populateRowsArray(nameSortedData, []);
            if(nameSort){
                nameSortedRows.reverse();
                nameSort = false;
                isActive = false;

            } else{
                nameSort = true;
            }
            populatePages(nameSortedRows);
            
        }

        function albumNumberClick(){
            let albumSortedData = data.sort((a, b) => {
                return b.albums.length - a.albums.length;
            });
            clearTable();
            nameSort = false;
            isActive = false;
            let albumSortedRows = populateRowsArray(albumSortedData, []);
            if(albumSort){
                albumSortedRows.reverse();
                albumSort = false;
            } else{
                albumSort = true;
            }
            populatePages(albumSortedRows);
        }


        //DEBUG ACTIVE!!!
        function isActiveClick(){
            let activeSortedData = data.filter((item) => {
                if(item.active)
                    return true;
                else
                    return false;
            });
            clearTable();
            nameSort = false;
            albumSort = false;
            let activeSortedRows = populateRowsArray(activeSortedData, []);
            if(isActive){
                isActive = false;
            } else{
                populatePages(activeSortedRows);
                isActive = true;
            }
        }
    }
});