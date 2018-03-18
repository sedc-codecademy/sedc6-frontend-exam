extraTask = true;

function ExtraTaskOnReady(){
    $("#bands").on("change", () => {
        let selectedBand = $("#bands").find(":selected").val();
        populateTableExtra(bands.find((currentBand) => currentBand.name === selectedBand));
    });
}

function populateTableExtra(data){
    $("#myTableExtra").html("");

    let exBandMembers = "";
    let ProcSummary = {};
    let summary ="";
    let yearsAcive = "";
    let bandAlbums = "";

    data.members.forEach(member => {
        if(member.former){
            exBandMembers += `${member.name}</br>`;
        }
    });

    data.albums.sort((a, b) => a.year - b.year);
    data.albums.forEach(album => {
        if(ProcSummary.hasOwnProperty(album.type)){
            ProcSummary[`${album.type}`] += 1;
        }
        else{
            ProcSummary[`${album.type}`] = 1;
        }

        bandAlbums += `${album.name}</br>`;
    });

    for(key in ProcSummary){
        summary += `${key}: ${ProcSummary[key]}</br>`;
    }

    yearsAcive = `${data.albums[0].year} - ${data.active ? new Date().getFullYear() : data.albums[data.albums.length - 1].year}`;

    $("#myTableExtra").append(`
        <tr>
            <td>${exBandMembers}</td>
            <td>${summary}</td>
            <td>${yearsAcive}</td>
            <td>${bandAlbums}</td>
        </tr>
    `);
}

// $("#testP").o