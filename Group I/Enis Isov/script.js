let myBands = [];


localStorage.removeItem(["mybands"]);

if(localStorage["myBands"])
{
    myBooks=JSON.parse(localStorage["myBands"]);  
    console.log(myBooks);
    
}

else{
    getData();
}

makeTable(myBands);

function getData(){
    $.ajax({
        method: "GET",
        url: "http://www.json-generator.com/api/json/get/cgyDLqKpcO?indent=2",
        success:function(data){
        for(let i = 0; i < data.length; i++)
        {
            data[i].id = (i+1);
        }
        
        localStorage["myBands"] = JSON.stringify(data);
        myBands = JSON.parse(localStorage["myBands"]);
        console.log(myBands);
      

        },
        error: function(error){
            console.log(error);
        }
    })
}

function makeTable(data) {
   
    for(let i = 0; i < data.length;  i++ )
    $('#tBody').append(`<tr>
                        <td>${data[i].id}<td>
                        <td>${data[i].name}<td>
                        <td>${(data[i].active ? `Active` : `Not`)}<td>
                        <td>${data[i].id}<td>
                        </tr>`)
    
}