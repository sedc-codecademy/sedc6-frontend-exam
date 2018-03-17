$(function(){

getData();

//KONSTRUKTOR F-JA//
     let counter = 1
    function TableOfBands(listOfBands){
        this.list = listOfBands;
        this.tbody = $("#containerOfBands");
        this.sorting = null;
        this.reverse = false
     this.populateTable = function(sortingFunction){
            if(sortingFunction != null){
                if(this.reverse) {
                this.list = this.list.sort(sortingFunction).reverse();
                }
                else {
                    this.list = this.list.sort(sortingFunction)
                }
            }
            this.tbody.html("");
            this.list.forEach(band => {
                let row = $("<tr>");
                $("<td>").text(counter++).appendTo(row);
                $("<td>").text(band.name).appendTo(row);
                $("<td>").text(isActive(band.active)).appendTo(row);
                $("<td>").text(band.tags).appendTo(row);
                $("<td>").text(getMembers(band.members)).appendTo(row);
                $("<td>").text(band.albums.length).appendTo(row);
                this.tbody.append(row);
            });
        }
    }

//FUNKCIJA ZA PECATENJE NA IMINJATA NA CLENOVITE NA BENDOT//
    function getMembers(arrayOfMembers) {
        
        let allMembers;
        for(let i = 0; i < arrayOfMembers.length; i++){
           
            allMembers += arrayOfMembers[i].name + `, `
    
        }
        return allMembers
    }

    //SORTIRANJA//
    $("#nameOfTheBand").on('click', function() {
         let sortingFunction = null;
         sortingFunction = (bandOne, bandTwo) =>{
             return bandOne.name.localeCompare(bandTwo.name)

         }
         counter = 1;
         bands.populateTable(sortingFunction)

    })

    $("#NoOfAlbums").on('click', function() {
        let sortingFunction = null;
        sortingFunction = (bandOne, bandTwo) =>{
            return parseInt(bandTwo.albums.length) - parseInt((bandOne.albums.length))

        }
        counter = 1;
        bands.populateTable(sortingFunction)

   })

   $("#nameOfTheBand").on('click', function() {

     if(bands.sorting) {
   
    sortingFunction = (bandOne, bandTwo) =>{
        return bandOne.name.localeCompare(bandTwo.name)
    }
    }
    counter = 1;
    bands.reverse = true;
    bands.populateTable(sortingFunction)

})

$("#NoOfAlbums").on('click', function() {
    
         if(bands.sorting) {
       
            sortingFunction = (bandOne, bandTwo) =>{
                return parseInt(bandTwo.albums.length) - parseInt((bandOne.albums.length))
    
            }
        }
        counter = 1;
        bands.reverse = true;
        bands.populateTable(sortingFunction)
    
    })

    //PREBARUVANJE PO IME NA BAND//

    $("#searchBandsByName").on('keyup', function() { 
         let searchBand = $("#searchBandsByName").val().toLowerCase();

        bands.list = bands.list.filter((band)=>{
             if(band.name.toLowerCase().indexOf(searchBand) > -1) {
                 return band
             }
        })

       bands.populateTable()
    })

    //PROVERKA DALI EDEN BAND E AKTIVEN//

    $("#checkForActiveBands").on('change', function() { 
        

       bands.list = bands.list.filter((band)=>{
           return band.active === true;
       })
      counter = 1;
      bands.populateTable()
   })

   // SORTIRANJE PO TAGOVI//

   $("#sortByGenre").on('change', function(e){
      let pickedValue = e.target.value
      sortingFunction = null;
      switch(pickedValue){
          case "thrash metal":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "metal":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "heavy metal":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "hard rock":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "rock":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "speed metal":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "german":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "nu metal":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "alternative metal":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "hard rock":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "alternative rock":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "political":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "rapcore":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "grunge":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          case "alternative":
          bands.list = bands.list.filter((band) => {
            for(let i = 0; i < band.tags.length; i++) {
                if(band.tags[i]  == pickedValue) {
                    return band;
                }
            }
          })
          
        
      }
      counter = 1;
      bands.populateTable()
   })


//FUNKCIJA ZA PRIKAZ ZA DALI GRUPATA E AKTIVNA//

    let isActive = (activity)=>{
        if (activity == true) {
            return "YES"
        }
        if (activity == false ) {
            return "NO"
        }
        
    }

    let bands = new TableOfBands([]);
   

    //AJAX POVIK//
    function getData(){

        $.ajax({
            method:"GET",
            url:"http://demo9066815.mockable.io/",
            success:function(data){
                console.log(data)
                bands.list = data;
                bands.populateTable();
            },
            error: function(error){
                console.log(error);
            }
        })
    }
})


    

    













































