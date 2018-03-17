$(document).ready(() => {


let bands = []; 
let tempBands = [];
let page = 1;
let maxsize = 10;
let sort = "";
let myTags = [];
    
    $.ajax({
        method: "GET",
        url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",

        success: (data) => {
            tempBands = bands;
            bands = JSON.parse(data);
            
            for(let i = 0; i < bands.length; i += 1){
                for(let j = 0; j < bands[i].tags.length; j += 1){
                    myTags.push(bands[i].tags[j]);
                }
            myTags = Array.from( new Set(myTags));
                
            for(let i =0; i < myTags.length; i += 1){
                $("#tags").append(`
                <oprion value="${myTags[i]}">${myTags[i]}</option>
            `);
            }
        }
            // for (let i = 0; i < bands.length; i++) {
            //     bands[i].id = (i + 1);

            // } 

            localStorage["bands"] = JSON.stringify(bands);
            bands = JSON.parse(localStorage["bands"]);
            //filterTable(bands);
            showData(bands, page, maxsize)
        },
        error: (err) => {
            console.log(err);
        }
    });
   
    
    $("#sortName").on("click", () => {
        if(sort === "name1"){
            sort = "name2"
        }
        else{
            sort = "name1"
        }
        showData(bands, page, maxsize);
    });
    $("#sortAlbums").on("click", () => {
        if(sort === "albums1"){
            sort = "albums2"
        }
        else{
            sort = "albums1"
        }
        showData(bands, page, maxsize);
    });
    $("#searchFilter, #active, #tags").on("change", () => {
        showData(bands, page, maxEsize);
    });
    $("#prev").on("click", () => {
        if(page > 1){
            page -= 1;
        }
        showData(bands, page, maxsize);
    });
    $("#next").on("click", () => {
        if(page < Math.ceil(tempBands.length / maxsize)){
            page += 1;
        }
        showData(bands, page, maxsize);
    });


    function populateTable(bands) {
        // console.log(data);
        console.log(bands);
        $("#myBody").html("");

        for (let i = 0; i < bands.length; i++) {

            let tags = "";

            for (let j = 0; j < bands[i].tags.length; j++) {
                tags += ` ${bands[i].tags[j]}, `
            }
            console.log(tags);
            let members = "";
            for (let j = 0; j < bands[i].members.length; j++) {
                if(bands.members[j].former === true){

                }
                members += `${bands[i].members[j].name}</br> `
            }



             $("#myBody").append(`
                            <tr>
                                <td id="id${i}">${id} </td>
                                <td id="name${i}">${bands[i].name}</td>
                                <td id="active${i}">${bands[i].active}</td>
                                <td id="tags${i}">${tags} </td>
                               <td id="${i}">${members}</td>
                                <td id="length${i}">${bands[i].albums.length}</td>
                            </tr>`);

             }
           
        }
    


        function showData(bands, page, maxsize){
            $("#myTable").html("");
            filterData(bands);
            tempBands = sortData(tempBands);
            let maxPage = Math.ceil(tempBands.length / maxsize);
            let count = maxPage === page ? tempBands.length : maxsize;
        
            for(let i = (page - 1) * maxsize; i < count; i += 1){
                populateTable(tempBands[i], i + 1);
            }
        }
        
        function filterData(data){
            tempBands = data.filter(n => n.name.toLowerCase().includes($("#searchFilter").val().toLowerCase()));
            let selectedTag = $("#tags").find(":selected").text();
            console.log(selectedTag);
            tempBands = tempBands.filter(n => n.tags.includes(selectedTag));
            console.log(tempBands);
            if($("#isActive").is(":checked")){
                tempBands = tempBands.filter(n => n.active === true);
            }
        }
        
        function sortData(bands){
            switch(sort){
                case "nameAsc":
                    bands.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case "nameDes":
                    bands.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case "albumsAsc":
                    bands.sort((a, b) => a.albums.length - b.albums.length);
                    break;
                case "albumsDes":
                    bands.sort((a, b) => b.albums.length - a.albums.length);
                    break;
                default:
                    break;
            }
            return bands;
        }

    });  