
$(function () {

    function TableData(list) {
        this.listOfBands = list;
        this.tbody = $("#tbody");
        this.sortingFunction = null;
        this.reverse = false;
        this.showBands = function () {
            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction).reverse();
                } else {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction);
                }
            }
            this.tbody.html("");
            order=1;
            this.listOfBands.forEach(band => {
                $('#tbody').append(`
                <tr>
                <td>${order++}</td>
                <td>${band.name}</td>
                <td>${band.active ? "Yes" : "No"}</td>
                <td>${band.tags}</td>
                <td>${band.members.filter(member => member.former === false).map(member => member.name)}</td>
                <td>${band.albums.map(album => `${album.name},<br>` )}</td>
                
                
                </tr>`);
            });
        }
    };

    let table = new TableData([]);
    let bandData = [];
    
    function getBands() {
        $.ajax({
            method: "GET",
            url: "https://api.jsonbin.io/b/5aad2930aba566611f330e64",
            success: function (data) {
                console.log(data);
                table.listOfBands = data;
                table.showBands();
                bandData=data;
            
            },
            error: function (error) {
                console.log(error)
            }
        })
    }

    $("#getData").on("click", () => {
        getBands();
    });
    $('input[name=minmax]').on('change', (e) => {
        table.reverse = e.target.value === '1';
        table.showBands();
    });
    
    
    // searchButton

    $("#searchButton").on("click", () => {
        searched = $('#inputSearch').val()
       array.forEach(element => {
           
       });
    });


    $("#sort").on("change", (e) => {
        let choosenValue = e.target.value;
        let sortingFunction = null;
        switch (choosenValue) {
            case "1": 
            sortingFunction = (band1, band2) => {
                return band1.name.localeCompare(band2.name);
                
                };
                break;
            // case "2": 
            // sortingFunction = (band1, band2) => {
            //     return band1.active.localeCompare(band2.active);
            //     }
            //     break;
            
            //     case "3": 
            //     sortingFunction = (band1, band2) => {
            //         return band1.tags.localeCompare(band2.tags);
            //         }
            //         break;
            //         case "4":
            //     sortingFunction = (band1, band2) => {
            //         return band1.members.localeCompare(band2.members);
            //         }
            //         break;


            default:

                break;
        }
        table.sortingFunction = sortingFunction;
        table.showBands();
    });

    

});
















