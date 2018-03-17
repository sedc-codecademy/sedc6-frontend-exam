
 let bands =[];
 let sortingBands =[];



$(document).ready(() => {
    
    

      $.ajax({
        method: "GET",
        url:"https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json" ,
        success: (data) => {
            bands = JSON.parse(data);
            for (let i = 0; i < bands.length; i++) {
                bands[i].id = (i+1);                
            }
            
            filteringTable(bands);
            populateTable(bands);
            sortingBands = SortingTableBands(bands);
           
        },
        error: (err) => {
        console.log(err);
        }   


    
    }); 
    $("#getData").on("click", () => {
        populateTable(bands)
    });
    

    });
    // $("#getData").on("click", () => {
    //     populateTable(bands)
    // });

    $("#name").on("change", () => {
        let sort = $("#name").val();
        sortingBands = SortingTableBands(sortingBands, sort)
    });

    $("#next").on("click", () => {
        if(maxsize > parseInt(page+10))
        {
           page +=10; 
           if(sortingBands.length == 0) {sortingBands=bands;}
           filterTable(sortingTable);
        }
    }); 
    
    $("#prev").on("click", () => {
        if(page != 0)
         {
            page -=10;
            if(sortingBands.length == 0) {sortingBands=bands;}
            filterTable(sortingBands);
        }
    
    });
    
    
    function filteringTable(data, filter){

        switch (filter){
               case  "name":
                    data = data.filter(item => item.name === "name");
                    break;
                default:

              break;
            
        }

            populateTable(data);
            return data;
        }

        function populateTable(data){
  

            $("#myBody").html("");
            for(let i = 0; i < data.length; i += 1){
        
                let serial = "";
                if(data[i].series != null) { serial = `${data[i].seriesNumber} #${data[i].series}`};
                $("#myBody").append(`
                    <tr>
                       <td id="no${i}">${data[i].id}</td>
                       <td id="name${i}">${data[i].name}</td>
                        <td id="active${i}">${data[i].active}</td>
                        <td id="tags${i}">${data[i].tags.join(', ')}</td>
                        <td id="member${i}">${data[i].members.filter(member => member.former != true).map(e => e.name).join('<br/>')}</td>
                        <td id="albums${i}">${data[i].albums.length}</td>
                        
                        </tr>`
                )}
            };
        