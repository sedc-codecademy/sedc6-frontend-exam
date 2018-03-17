$(function () {
    let dataURL = "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json";
    loadData();

    // sortOrder unfinished ran out of time
    function loadData(sortOrder) {
        sortOrder = sortOrder || 0;
        //sortOrder parameters
        //0 - by ID (Default)
        //1 - by Name
        //2 - by Number of Albums released
        // let dataObj;
        // let dataArray = [];
        // $.getJSON(dataURL, function (data) {
        //     (function(){
        //         let names = [];
        //         for (const key in data) {
        //             if (data.hasOwnProperty(key)) {
        //                 const element = data[key].name;
        //                 names.push(element);
        //             }  
        //         }
        //         names.sort();
        //         console.log(names);
        //     })();
                

            for (let i = 0; i < data.length; i++) {
                let divRow = $("<div></div>").appendTo(".data-table").addClass("data-table__row");
                let divColumn = $("<div></div>").appendTo(divRow).addClass("data-table__column");
                $("<span></span>").appendTo(divColumn).text(i);
                divColumn = $("<div></div>").appendTo(divRow).addClass("data-table__column");

                let name = $("<span></span>").appendTo(divColumn).text(`${data[i].name}`);
                if (data[i].active == true) {
                    $(name).addClass("active");
                } else {
                    $(name).addClass("inactive");
                }
                divColumn = $("<div></div>").appendTo(divRow).addClass("data-table__column");
                let members = "";
                for (const key in data[i].members) {
                    if (data[i].members.hasOwnProperty(key)) {
                        const element = data[i].members[key];
                        members += String(element.name) + "<br>";
                    }
                }
                $("<span></span>").appendTo(divColumn).html(members);
                divColumn = $("<div></div>").appendTo(divRow).addClass("data-table__column");
                let tags = [];
                for (const key in data[i].tags) {
                    if (data[i].tags.hasOwnProperty(key)) {
                        const element = data[i].tags[key];
                        tags.push(element);
                    }
                }
                let tagsString = tags.join(", ");
                $("<span></span>").appendTo(divColumn).html(tagsString);
                divColumn = $("<div></div>").appendTo(divRow).addClass("data-table__column");
                let numberOfAlbums = data[i].albums.length;
                $("<span></span>").appendTo(divColumn).html(numberOfAlbums);
            }
        });
    };


});