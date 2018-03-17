let bands = [];
//GetData()
let rowNumber = 1;
let sort;
let maxsize = 0;

let page = 0;



function GetData() {
    $.ajax({
        method: "GET", //zemame data
        url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
        success: function (data) {
            bands = JSON.parse(data); //gi stavame vo bands varijabla json
            console.log(bands);
            filterTable(bands); //fcija so ja ispisuva tabelata
        },
        error: function (error) {
            console.log(error);
        }
    })

}

// ---------------------------------------------------------------------------------------------------------------------


$("#Get_Data").click(function () { //button for displaying the data
    GetData()
})


let makeMyTable = function (bands) {
    rowNumber += page
    
    for (let index = 0; index < bands.length; index++) {
        $("#myTable").append(
            "<tr>" +
            "<td class= 'td-rowNumber'>" + rowNumber + "</td>" +
            "<td class= 'td-name'>" + bands[index].name + "</td>" +
            "<td class= 'active'>"+CheckIfTrue()+"</td>" +
            "<td class= 'td-tags'>" + bands[index].tags + "</td>" +
            "<td class= 'td-members'>" + getMembers() + "</td>" +
            "<td class= 'td-albums'>" + bands[index].albums + "</td>" +
            "</tr>");

        function CheckIfTrue() {
            if (bands[index].active == true) {
                return '&#9989;'
            } else if (bands[index].active == false) {
                return '&#10008;'
            }
        }
        console.log(bands[index].members);
        var bandMembers = [];
      function getMembers(){  
            for(let i = 0 ; i < Object.keys(bands[index].members).length;i++)
            {
                return  Object.keys(bands[index].members[i]);
            }

            }
console.log( Object.keys(bands[index].members).length);
console.log(getMembers());

        rowNumber++;
    }
}


let filterTable = function (bands) {
    $("#tBody").html("");
    rowNumber = 1;


    maxsize = bands.length;
    bands = bands.slice((0 + page), (10 + page));

    makeMyTable(bands);
}



