$(document).ready(() => {


    var request = new XMLHttpRequest();
    request.open('GET', "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json");


    request.onload = function () {
        // console.log(ourRequest.responseText);
        data = JSON.parse(request.responseText);
        for (var i = 0; i < data.length; i++) {
            data[i].id = i + 1;
        }
        // console.log(data);

        populate(data);

    }
    request.send();

    let count = 10;
    let start = 0;
    let myData;
    let tempData = [];
    let newTempData = [];
    var uniqueTags = [];
    let data1 = [];

    bandsShow = (data) => {

        myData = data;
        let currentBandMembers = "";
        let tagovi = [];

        $("tbody").html("");
        // $("thead").html("");
        // $("thead").append(`

        // `)

        for (let i = start; i < count; i++) {

            myData[i].members.forEach(element => {


                if (element.former == true) {

                } else {
                    currentBandMembers += `${element.name} ` + "<br>";
                }
            });


            myData[i].tags.forEach(items => {
                tagovi.push(items);
            })

            $("tbody").append(
                `<tr>
                    <td>${myData[i].id}</td>
                    <td>${myData[i].name}</td>
                    <td>${myData[i].active}</td>
                    <td>${myData[i].tags}</td>
                    <td>${currentBandMembers} <br> </td>
                    <td>${myData[i].albums.length}</td>
                </tr>`
            )
            tempData.push(myData[i]);
            newTempData.push(myData[i]);
            currentBandMembers = "";



        }

        $.each(tagovi, function (i, el) {
            if ($.inArray(el, uniqueTags) === -1) uniqueTags.push(el);
        });
        let counter = 0

        $(".dropdown-content").html("");
        uniqueTags.forEach(element => {

            $(".dropdown-content").append(`
            <option value="${counter}" id="option${counter}">${element}</option>
        `);
            counter++;
        })



    }

    populate = (data) => {
        myData = data;
        newData = data;
        bandsShow(myData);



        $("#next").on("click", function () {
            if (count < 18) {
                count += 8;
                start += 10;
                bandsShow(myData);

            }
        });
        $("#previous").on("click", function () {
            if (count >= 18) {
                count -= 8;
                start -= 10;
                bandsShow(myData);
            }
        });


        $("#sortByName").on('click', function () {
            console.log(tempData);
            
            tempData.sort((a, b) => (a.name.localeCompare(b.name)));
            let current = "";
            $("tbody").html("");
            tempData.forEach(element => {

                element.members.forEach(item => {
                    if (item.former == true) {

                    } else {
                        current += `${item.name}` + "<br>";
                    }
                })

                $("tbody").append(
                    `<tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.active}</td>
                        <td>${element.tags}</td>
                        <td>${current}</td>
                        <td>${element.albums.length}</td>
                    </tr>`
                );
                current = "";

            });
            





        });






        window.onclick = function (event) {
            let value;
            let text;
            for (var i = 0; i < 15; i++) {
                if (event.target.matches(`#option${i}`)) {

                    value = $(`#option${i}`).val();
                    text = $(`#option${i}`).text()

                    console.log(text);
            let tempValue = parseInt(value);

            
                    // console.log(newData);
                    for (var i = 0; i < newData.length; i++) {
                        newData[i].tags.forEach(el => {
                            if (el == text) {
                                data1.push(newData[i]);
                            }
                        })
                    }
                    
                    $("tbody").html("");
                    for (var i = 0; i < data1.length; i++) {
                        $("tbody").append(
                            `<tr>
                        <td>${data1[i].id}</td>
                        <td>${data1[i].name}</td>
                        <td>${data1[i].active}</td>
                        <td>${data1[i].tags}</td>
                        <td>${1}</td>
                        <td>${data1[i].albums.length}</td>
                    </tr>`

                        );
                    }

                    console.log(data1);
                }
            }
            // console.log(value);

            
                           

        }

        $("#sortByAlbum").on("click", function () {

            console.log(newTempData);

            newTempData.sort((a, b) => (a.albums.length - b.albums.length));
            $("tbody").html("");
            let current = "";
            newTempData.forEach(element => {

                element.members.forEach(item => {
                    if (item.former == true) {

                    } else {
                        current += `${item.name} <br>`;
                    }
                })

                $("tbody").append(
                    `<tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.active}</td>
                        <td>${element.tags}</td>
                        <td>${current}</td>
                        <td>${element.albums.length}</td>
                    </tr>`
                );
                current = "";

            });






        })

        $("#searchInput").on("input", function () {
            let value = $("#searchInput").val().toUpperCase();
            $("tbody").html("");
            tempData.forEach(element => {
                if (element.name.toUpperCase().indexOf(value) != -1) {
                    $("tbody").append(
                        `<tr>
                            <td>${element.id}</td>
                            <td>${element.name}</td>
                            <td>${element.active}</td>
                            <td>${element.tags}</td>
                            <td>${1}</td>
                            <td>${element.albums.length}</td>
                        </tr>`
                    );
                }
            })
        })





    }



});