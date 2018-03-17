let tbody = document.getElementById("tbody");

class Bands {
    constructor(name, active, tags, members, albums) {
        this.name = name;
        this.active = active;
        this.tags = tags;
        this.members = members;
        this.albums = albums;
    }
}

let rearangedBands = function (bands) {
    let arangedBands = [];
    let id = 0;
    bands.forEach(band => {
        arangedBands.push(new Bands(band.name, band.active, band.tags, band.members, band.albums));
        id++;
    });
    return arangedBands;
}

let bands = rearangedBands(bandsData);

let rowNo = 1;

for (let i = 0; i < bands.length; i++) {
    let tr = document.createElement("tr");

    let bandNo = document.createElement("td");
    bandNo.innerText = rowNo;

    let bandName = document.createElement("td");
    bandName.innerText = bands[i].name;
    let bandActive = document.createElement("td");


    if (bands[i].active === true) {
        bandActive.innerHTML = `<i class="fas fa-check-circle" style="color:green;"></i>`;
    } else {
        bandActive.innerHTML = `<i class="fas fa-times-circle" style="color:red;" font-size=20px;></i>`;
    }

    let bandTags = document.createElement("td");
    bandTags.innerText = bands[i].tags.join(", ");

    let searchTag = document.getElementById("search-tag");

    let addTag = document.createElement("option");
    addTag.innerText = bands[i].tags;
    searchTag.appendChild(addTag);

    // let geners = [];
    // for (let i = 0; i < bands.length; i++) {
    //     const band = bands[i];
    //     for (let j = 0; j < bands.tags.length; j++) {
    //         if (geners.indexOf(bands.tags[j] < 0)) {
    //             geners.push(band.tags[i]);
    //         }
    //     }

    // }

    // for (let i = 0; i < geners.length; i++) {
    //     let option = document.createElement("option");
    //     option.setAttribute("value", `${genders[i]}`);
    //     option.innerHTML = geners[i];
    //     selectGenere.appendChild(option);
    // }

    // searchTag.appendChild(option);


    let bandMembers = document.createElement("td");
    let members = [];
    let formerMembers = [];
    let memberString = "";
    for (let i = 0; i < bands[i].members.length; i++) {
        const element = bands[i].members[i];
        if (!element.former) {
            members.push(element.name);
        } else {
            formerMembers.push(element.name);
        }
    }

    memberString = members.join(`\n`);
    bandMembers.innerText = memberString;

    let bandAlbums = document.createElement("td");
    bandAlbums.innerText = bands[i].albums.length;
 

    tr.appendChild(bandNo);
    tr.appendChild(bandName);
    tr.appendChild(bandActive);
    tr.appendChild(bandTags);
    tr.appendChild(bandMembers);
    tr.appendChild(bandAlbums);
    tbody.appendChild(tr);

    rowNo++;
}



let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", function () {

});

function clearForm() {
    document.getElementById("search").reset()

};