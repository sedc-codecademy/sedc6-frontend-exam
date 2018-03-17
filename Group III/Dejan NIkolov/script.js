
var bands = [];

document.addEventListener("DOMContentLoaded", () => {

     var storedBands = localStorage.getItem("bands");
     if (storedBands != null)
         this.bands = JSON.parse(storedBands);
    else
     {
        this.bands =listofbands;
        localStorage.setItem("bands", JSON.stringify(this.bands));
     }

     });



function constructTable() {

    let table = document.getElementById("bands");

    table.innerHTML = "";
    table.classList = "table";
    table.style = "table-layout: fixed;"
    let tr = document.createElement("tr");
    tr.classList = "thead-dark";
    let th = document.createElement("th");
    th.innerHTML = "name";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "active";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "tags";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "members";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "albums";
    tr.appendChild(th);
    table.appendChild(tr);
    th = document.createElement("th");
}
