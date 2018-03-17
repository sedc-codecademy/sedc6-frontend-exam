let myBooks = [];
let maxsize = 0;
let page = 0;

let sort =0;

localStorage.removeItem(["mybooks"]);

if(localStorage["myBands"])
{
    myBooks=JSON.parse(localStorage["myBands"]);  
    console.log(myBooks);
    
}

else{
    getData();
}

makeTable(myBooks);
filterTable();

function getData(){
    $.ajax({
        method: "GET",
        url: "http://www.json-generator.com/api/json/get/cfzakJRdrC?indent=2",
        success:function(data){
        for(let i = 0; i < data.length; i++)
        {
            data[i].id = (i+1);
        }
        
        localStorage["myBands"] = JSON.stringify(data);
        myBooks = JSON.parse(localStorage["myBands"]);
        console.log(myBooks);
      

        },
        error: function(error){
            console.log(error);
        }
    })
}

function makeTable(data) {
    let m=[];
    for(let i = 0; i < data.length;  i+=1 )
    {
        let member = data[i].members;
        for(let j = 0;j <member.length;j++){
            m.push(`${member[j].name}`);
        }
    }
    for(let i = 0; i < data.length;  i++ )
    $('#myBody').append(`<tr>
                        <td>${data[i].id}<td>
                        <td>${data[i].name}<td>
                        <td id= active01>${(data[i].active ? `Active` : `Not`)}<td>
                        <td>${data[i].m}<td>
                        
                        <td>${data[i].albums.length}<td>
                        </tr>`)
    
}
function filterTable(data) {
    $("#tablediv1").html("");
    //let count = math.ceil(data.length/10);
    //for(let i=0;i <count;i++){
    //   $("tablediv1").append(`<button id = myBtn${(i+1)}>${(i+1)}</button`);
    //  $(`#myBtn${(i+1)}`).on("click",function(){
    //     page = (i*10);
    //    filterTable(myBooks);
    //});
    // }
    $("#check").click(function(){
        let active
        if(active)
        $(`#active01`).css("background-color","green")
    })
    
}

function Active(data){
    if(data[i].active == true)
    data = data.filter(n => n.kind === active);
    $("active01").css("background-color","green");
    $("").click(function(){
        page = 0;
        sort = active;
        filterTable(myBooks);
    });

}
