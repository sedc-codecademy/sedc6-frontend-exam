
$(function(){

  function Table(list){
      this.listOfBands = list;
      this.tbody = $("#tbody");

      this.populateTable = function(){
          

          this.tbody.html("");
          this.listOfBands.forEach(band => {
              let row = $("<tr>");
              $("<td>").text(i++).appendTo(row);
              $("<td>").text(band.name).appendTo(row);
              $("<td>").text(band.isActive).appendTo(row);
              $("<td>").text(band.tags).appendTo(row);
              $("<td>").text(band.members).appendTo(row);
              $("<td>").text(band.numOfAlbums).appendTo(row);
              this.tbody.append(row);
          });
      }

      this.setListOfBands = function(bands){
          this.listOfBands = bands;
      }
  }




  function getData(){
      
      $.ajax({
          method:"GET",
          url:"https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
          success:function(data){
            data = JSON.parse(data);
            var bands = data.map(el => {return new DataUnit(el)});
            table.setListOfBands(bands);
            table.populateTable();
          },
          error:function(error){
              console.log(error);
          }
      })

  }

  function DataUnit(object) {
    i = 1;
    this.name = object.name;
    this.isActive = object.active ? 'active' : 'inactive';
    this.tags = object.tags.reduce((acc, el) => {return acc += el + ', '}, '');
    this.numOfAlbums = object.albums.length;
    this.members = object.members.reduce((acc, el) => {
      if(el.former == undefined){
        acc += el.name + ", \n";
      }
      return acc;
    }, '')
  }


  let table = new Table([]);
  $("#pull").on("click", getData);

});