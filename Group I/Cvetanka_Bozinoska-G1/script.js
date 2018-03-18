let bandList = [];
let tempbandList = [];
let page = 1;
let maxBends = 10;
let sort = "";
let tagList = [];

$(document).ready(() => {
   
$.ajax({
    method: "GET",
    url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
    success: (data) => {
        bandList = JSON.parse(data);
        tempbandList = bandList;

        for(let i = 0; i < bandList.length; i += 1){
            for(let j = 0; j < bandList[i].tags.length; j ++){
				let check = 0;
			    for(let k = 0; k < tagList.length; k ++) {
				    if(bandList[i].tags[j] == tagList[k]) {
						check = 1;
                    }						
				}
				if(check == 0) {
					tagList.push(bandList[i].tags[j]);
	                $("#tags").append(`
                    <option value="${tagList[i]}">${bandList[i].tags[j]}</option>
                    `);
				}
            }
        }
        showData(bandList, page, maxBends)
    },
    error: (err) => {
        console.log(err);
    }
});

 $("#sortName").on("click", () => {
        if(sort === "nameA"){
            sort = "nameZ"
        }
        else{
            sort = "nameA"
        }
        showData(bandList, page, maxBends);
    });
    $("#sortAlbums").on("click", () => {
        if(sort === "albums1"){
            sort = "albums2"
        }
        else{
            sort = "albums1"
        }
        showData(bandList, page, maxBends);
    });
    $("#srcFilter, #isActive, #tags").on("change", () => {
        showData(bandList, page, maxBends);
    });
    $("#prev").on("click", () => {
        if(page > 1){
            page -= 1;
        }
        showData(bandList, page, maxBends);
    });
    $("#next").on("click", () => {
        if(page < Math.ceil(tempbandList.length / maxBends)){
            page += 1;
        }
        showData(bandList, page, maxBends);
    });


function showData(data, page, maxBends){
    $("#myTable").html("");
    tempbandList = filterData(data);
    tempbandList = sortData(tempbandList);
    let maxPage = Math.ceil(tempbandList.length / maxBends);
    let count = maxPage === page ? tempbandList.length : maxBends;
    $('#currentPage').text(page);
    for(let i = (page - 1) * maxBends; i < count; i ++){
        populateTable(tempbandList[i], i + 1);
    }
}

function filterData(data){
    data = data.filter(item => item.name.toLowerCase().includes($("#srcFilter").val().toLowerCase()));
    let selectTag = $("#tags").find(":selected").text();
    
	if(selectTag != 'All') {
        data = data.filter(item => item.tags.includes(selectTag));
	}
    
    if($("#isActive").is(":checked")){
        data = data.filter(item => item.active === true);
    }
	return data;
}

function sortData(data){
    switch(sort){
        case "nameA":
            data.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "nameZ":
            data.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "albums1":
            data.sort((a, b) => a.albums.length - b.albums.length);
            break;
        case "albums2":
            data.sort((a, b) => b.albums.length - a.albums.length);
            break;
        default:
            break;
    }
    return data;
}

function populateTable(data, id){
    let tags = "";
    let members = "";
    for(let i = 0; i < data.tags.length; i ++){
		if(i+1 == data.tags.length) {
			tags += `${data.tags[i]}`;
		} else {
            tags += `${data.tags[i]}, `;
		}
    }
    for(let i = 0; i < data.members.length; i ++){
        members += `${data.members[i].name}</br>`;
    }
    $("#myTable").append(`
        <tr>
            <td>${id}</td>
            <td>${data.name}</td>
            <td>${data.active}</td>
            <td>${tags}</td>
            <td>${members}</td>
            <td>${data.albums.length}</td>
        </tr>
    `);
}

});
