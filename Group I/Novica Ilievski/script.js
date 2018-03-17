$(document).ready(function(){
    $.getJSON('bands.json', function(data){
        $.each(data, function(i, band){
            let index = 1+i;

            $('tbody').append(`<tr>
            <td>${index}</td>
            <td>${band.name}</td>
            <td>${band.active}</td>
            <td>${band.tags}</td>
            <td>${band.members.name}</td>
            <td>${band.albums.name}</td>
        </tr>`)

            $('.dropdown-menu').append(`<a class="dropdown-item" href="#">${band.tags}</a>`)

        })
        
    })
})