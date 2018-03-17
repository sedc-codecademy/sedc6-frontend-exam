$(document).ready(function () {

    function BandList(list) {
        this.listOfBands = list;
        this.selectBand = $('#bandDropdown');
        this.searchInputValue = "";
        this.sortingFunction = null;
        this.reverse = false;
        this.selectedTagValue = "";

        this.populateBands = function () {

            if (this.sortingFunction != null) {
                if (this.reverse) {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction).reverse();
                } else {
                    this.listOfBands = this.listOfBands.sort(this.sortingFunction);
                }
            }

            this.listOfBands.forEach(band => {
                this.selectBand.append(`
                    <option>${band.name}</option>
                `)
            });

        }

        this.getBandInfo = function () {
           let albumsArr = this.listOfBands.map(band => band.albums);
           let albums = [];

           albumsArr.forEach(albumsOfBand => {
               albums = albums.concat(albumsOfBand.filter(album => album.type === "studio"));
          


           });
           alert(albums.length)
            
        }
    }





    let bandTable = new BandList([]);

    function getData() {

        $.ajax({
            method: 'GET',
            url: 'https://api.jsonbin.io/b/5aad3366864b2d611e0a30b3',
            success: function (data) {

                bandTable.listOfBands = data;
                bandTable.populateBands();

            },
            error: function (error) {
                console.log(error);
            }
        })
    }

    getData();


    $('#bandDropdown').on('change', (e) => {
        let selectedValue = e.target.value;
        bandTable.getBandInfo();
        
    })

})