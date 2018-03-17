
let albums =[];

let id = 1;
let active;

let pageSize = 0;
let page = 0;

GetData();

function GetData(){
$.ajax({
    method: "GET",
    url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
    success:function(data){
        albums = data;
        console.log(data);
        filterTable(JSON.parse(data));
    },
    error: function(error){
        console.log(error);
    }
    
})

}



  let makeMyTable = function(albums)
  {
   

    for(let index = 0; index < albums.length; index++){ 
      $("#table").append(`
          <tr>
            <td>${id}</td> 
            <td>${albums[index].name}</td>
            <td>${albums[index].active}</td>
            <td>${albums[index].tags}</td>
            <td>${albums[index].members}</td>
            <td>${albums[index].albums}</td>
          </tr>`);
    id++
    }
}

  let filterTable = function(albums){
    $("#tBody").html("");
    id = 1;

    if(active)
    {
        if(active == true)
        {
            albums = albums.filter(n => n.active = true);
        }
        else if (active == false)
        {
            albums = albums.filter(n => n.active = false);
        }
    }
    albums = albums.slice((0 + page), (10 + page));
    pageSize = albums.length;
    makeMyTable(albums);
  }

  $("#act").click(function(){
      page = 0;
      active = true;
      filterTable(JSON.parse(albums)); 
     });

  $("#pas").click(function(){
      page = 0;
      active = false;
      filterTable(JSON.parse(albums));
});

$("#next").click(function(){
    if(pageSize > 9)
    {
    page +=10;
    filterTable(JSON.parse(albums));

    }
}); 

$("#prev").click(function(){
    if(page != 0)
     {
        page -=10;
        filterTable(JSON.parse(albums));
    }
});