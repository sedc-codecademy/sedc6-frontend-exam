$(function(){


     function DataGrid(list){
        this.tBody = $("#tbody");
        this.listOfBands = list;
             
        this.Populate = function(){      
            
         $("#tbody").html("");
            for (let index = 0 ; index <= 10; index++) {     
               let row = $("<tr>");
               $("<td>").text(index + 1).appendTo(row);
               $("<td>").text(this.listOfBands[index].name).appendTo(row);
               $("<td>").text(this.listOfBands[index].active).appendTo(row);
               $("<td>").text(this.listOfBands[index].tags.map((element) => " " + element)).appendTo(row);
               $("<td>").text(this.listOfBands[index].members.map((element) =>  element.name + 
               `<present status: ${element.former}>`)).appendTo(row);
               $("<td>").text(this.listOfBands[index].albums.length).appendTo(row);   
               this.tBody.append(row);
              
           }  
        }

        this.ListOfData = function(dataList){
            this.listOfBands = dataList;
        }
    } 

    function GetData(){
        $.ajax({
           
            method: "GET",
            url:   "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
            success: function (data) {
                let parseData = JSON.parse(data);
                console.log(parseData); 
                table.ListOfData(parseData);
                table.Populate();
                          
            },
            error: function (error) {
                console.log(error);
            }
        })
    }

    let table = new DataGrid([]);
    $("#pull").on("click", GetData);
})