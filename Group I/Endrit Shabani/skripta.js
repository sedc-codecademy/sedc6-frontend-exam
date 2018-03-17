let bands = [];
let rowNumber = 1;
let sort;
let maxsize = 0;

let page = 0;



function GetData() {
    $.ajax({
        method: "GET", //zemame data
        url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
        success: function (data) {
            bands = JSON.parse(data); 
            console.log(bands);
            filterTable(bands); 
        },
        error: function (error) {
            console.log(error);
        }
    })

}


$("#getData").click(function () { 
    sort = "";
    GetData()
})


let makeMyTable = function (bands) {
    rowNumber += page
    for (let index = 0; index < bands.length; index++) {
        $("#bandsBody").append(
            "<tr>" +
            "<td class= 'td-rowNumber'>" + rowNumber + "</td>" +
            "<td class= 'td-name'>" + bands[index].name + "</td>" +
            "<td>"+CheckIfTrue()+"</td>" +
            "<td class= 'td-tags'>" + bands[index].tags + "</td>" +
            "<td class= 'td-members'>" + bands[index].members[0] + "</td>" +
            "<td class= 'td-albums'>" + bands[index].albums + "</td>" +

               
            "</tr>");

        function CheckIfTrue() {
            if (bands[index].active == true) {
                return 'Yes'
            } else if (bands[index].active == false) {
                return 'No'
            }
        }
        rowNumber++;
    }
}




let filterTable = function (bands) {
    $("#bandsBody").html("");
    rowNumber = 1;

     maxsize = bands.length;
    bands = bands.slice((0 + page), (10 + page));

    makeMyTable(bands);
}


