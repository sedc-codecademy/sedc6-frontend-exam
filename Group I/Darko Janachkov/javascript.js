
let books =[];
let sort;
let currentpage = 0;
let myBands;
if(localStorage["myBands"])
{
    myBooks = JSON.parse(localStorage["myBands"]);
}

if(myBands){
    filterTable(myBands);
}

function GetData(){
$.ajax({
    method: "GET",
    url: "http://www.json-generator.com/api/json/get/cfuvzeRiiG?indent=2",
    success:function(data){
        bands = data;
        for(let i = 0; i  < bands.length; i++){
            bands[i].id = (i+1);
        }
        localStorage["myBands"] = JSON.stringify(bands);
        myBands = JSON.parse(localStorage["myBands"]);
      
        filterTable(myBands);
    },
    error: function(error){
        console.log(error);
    }
})

}


$("#make_table").click(function () {
    filterTable(myBands);
});

$("#Get_Data").click(function () {
    sort = "";
    GetData()
})


function makeMyTable(bands) 
  {
   
    for(let index = 0; index < bands.length; index++){
      $("#myTable").append(
          "<tr>"+
                "<td class='td-id'>"+ bands[index].id + "</td>" +
                "<td class='td-name'>"+ bands[index].name +"</td>"+
                "<td class='td-year'>"+ bands[index].year +"</td>"+
                "<td class='td-active'>"+ bands[index].active +"</td>"+
                "<td class='td-tags'>"+ bands[index].tags +"</td>"+
                "<td class='td-members' >"+ bands[index].members  + "</td>"+
                "<td class='td-albums' >"+ bands[index].albums + "</td>"+
         "</tr>");
            }}
    
 function filterTable(data) {
$("#tBody").html("");

    if(sort)
  {
     if(sort == "bands_by_name")
       {
            data = data.filter(n => n.kind === "bands_by_name");
        }
        else if (sort == "active_bands")
       {
          data = data.filter(n => n.kind === "active_bands");
      }
    }

   maxsize = data.length;
   makeMyTable(data);
}

$("#bands_by_name").click(function(){
    page = 0;
    sort = "bands_by_name";
    filterTable(myBands);
});

$("#active_bands").click(function(){
    page = 0;
    sort = "active_bands";
filterTable(myBands);
});

$("#next").click(function(){
    if(maxsize > parseInt(page+10))
    {
    page +=10;
    filterTable(myBands);
    }
}); 

$("#prev").click(function(){
    if(page != 0)
     {
        page -=10;
        filterTable(myBands);
    }

});