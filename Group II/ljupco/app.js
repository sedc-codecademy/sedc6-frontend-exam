let myReq = new XMLHttpRequest();

myReq.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json");
myReq.onload = function () {
    let myData = myReq.responseText;
    myData = JSON.parse(myData);
    console.log(myData[0].name);

    bandNames(myData);

}
myReq.send();


function getTags(band) {
    let tagsList = [];
    band.tags.forEach(tag => {
        tagsList.push(tag);
    });
    return tagsList;
}


function getMembers(band) {
    let livingMembers = [];
    for (let i = 0; i < band.length; i++) {
        if (!band[i].former) {
            livingMembers.push(band[i])
        }
    }
    return livingMembers.map(member => `<div>${member.name}</div>`)
}

function numAlbums(zAlbums) {
    let counter = zAlbums.length;
    return counter;
}








$("#name").click(() => {
    let nameArr = [];
    nameArr.push($(".tdNames").value());    
    nameArr.sort()
})






function bandNames(dataNames) {
    let rowNum = 1
    dataNames.forEach(e => {
        $('#tbody').append(`
        <tr>
            <td>${rowNum++}</td>
            <td class = "tdNames">${e.name}</td>
            <td>${ (e.active ? "yes" : "nope")}</td>                   
            <td>${ getTags(e)}</td>
            <td> ${ getMembers(e.members)} </td>
            <td> ${numAlbums(e.albums)} </td>             
        </tr>
        `)
    });

}