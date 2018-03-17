$(function(){

}
)

function getData()
{
    $.ajax({
            data:"GET",
            url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
            success:function(data) {
                console.log(data);
            }   
        }
    )}
