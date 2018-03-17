$(document).ready(() => {
    
        let bands = [];
        let tempBands=[];
        let Tags=[];
        let brandList1=[];
    
        
        function getData(){
            $.ajax({
                method:"GET",
                url: "https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json",
                dataType: "json",
                success: (data) => {
        
                    bands = data;
                    tempBands=data;
                    populateTable(bands);
                    createPagination(bands);
                   
                    console.log(data);
        
                },
                error: (err) => {
                    console.log(err);
                }
            })
        }
        getData();
   
    
    
        function populateTable(data) {
  
            $("#tbody").html("");
    
            let isTrue;
            let bandMemebers="";
            let counter=0;
            let sortTags=[];
            let otherTags=[];
            Tags=otherTags;

         
    
    
            for (let i = 0; i < data.length; i++) {
    
    
                if (data[i].active == true) {
                    isTrue = "Yes";
                } else {
                    isTrue = "No";
                }
    
                data[i].members.forEach(item => {
                  
                  if(item.former===true) {

                  } 
                  else{
                      bandMemebers+=item.name + "</br>";
                    }

                });

                data[i].albums.forEach(item=>{
                    counter++;
                })
                data[i].tags.forEach(item => {
                    sortTags.push(item);
                })
        
                $.each(sortTags, function(i, el){
                    if($.inArray(el, otherTags) === -1) otherTags.push(el);
                });
         
            
                $("#tbody").append(`
                    <tr class="my-group">
                        <td>${i + 1}</td>
                        <td>${data[i].name}</td>
                        <td>${isTrue}</td>
                        <td>${data[i].tags}</td>
                        <td>${bandMemebers}</td>
                        <td>${counter}</td>
                    </tr>
                `);

                bandMemebers = [];
                counter=0;
                
            }
            populateTags();
        }
   
        
    $('#name').on("click", SortTable);
        $('#albums').on("click", SortTable);
    
        function SortTable() {
            let table = $(this).parents('table').eq(0)
            let rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
            this.asc = !this.asc
            if (!this.asc) { rows = rows.reverse() }
            for (let i = 0; i < rows.length; i++) { table.append(rows[i]) }
        }
    
        function comparer(index) {
            return function (a, b) {
                let valA = getCellValue(a, index), valB = getCellValue(b, index)
                return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB)
            }
        }
    
        function getCellValue(row, index) { 
            return $(row).children('td').eq(index).text() 
        }
    
        $('#search').keyup(()=>{ 
            bands=tempBands;
            let inputVal=$('#search').val().toUpperCase(); 
           let List= bands.filter((item)=>{    
                 if((item.name).toUpperCase().indexOf(inputVal)>-1){
                
                        return true;
                    }
                    else{
                        return false;
                    }
            });
            bands=List;
           populateTable(bands);
           $('.pagination').html("");
           createPagination(bands);      
        });


    function  populateTags(){
            for (i=0;i<Tags.length;i++){
                debugger;
                $('#selected').append(`
                <option value="${Tags[i]}">${Tags[i]}</option>`);
            };
        };
    
    $('#selected').on('change',(e)=>{
        
            let inputChecked=e.target.value;
               debugger;
           let brandList= bands.filter((item)=>{
               for (var i=0;i<item.tags.length; i++){

                if((item.tags[i])===inputChecked){
                    
                            return true;
                        }
                  
               }
              
            });
       
      
    populateTable(brandList);
    $('.pagination').html("");
    createPagination(brandList);   
    })


    function   createPagination(data){
        debugger;
        let numberOfItems=data.length;
        let  limitPerPage=6;
        let listGroup=$('.my-group');
        $(".my-group:gt("+ (limitPerPage-1) +")").hide();
        let totalPages=Math.ceil(numberOfItems/limitPerPage);
        $('.pagination').append('<li id="prew-page"><a class="page-link" href="javascript:void(0)" aria-label="Previous"><span aria-hidden="true">&laquo;</span>  <span class="sr-only">Previous</span> </a> </li>')
        $('.pagination').append(`<li class="page-item active"><a class="page-link" href="javascript:void(0)">${1}</a></li>`);
            for (let i=2; i<=totalPages; i++){
                $('.pagination').append(`<li class="page-item"><a class="page-link" href="javascript:void(0)">${i}</a></li>`);

            }
                $('.pagination').append(`<li id="next-page"><a class="page-link  href="javascript:void(0)" aria-label="Next"> <span aria-hidden="true">&raquo;</span></a>`);
                $('.pagination .page-item').on('click',function(){
                    if( $(this).hasClass("active")){
                        return;
                    }
                    else{
                          let currentPage=$(this).index();
                          $('.pagination li').removeClass('active');
                          $(this).addClass("active");
                          $(' .my-group').hide();
                          let grandTotoal=limitPerPage*currentPage;
                          for (let i=grandTotoal-limitPerPage; i<grandTotoal; i++){
                            $(".my-group:eq("+ i +")").show();
                          }
                    }
                })     
                $('#next-page').on('click',function(){
                    let currentPage=$('.pagination li.active').index();
                    console.log(currentPage);
                    if(currentPage===totalPages){
                        return false;
                    }
                    else{
                        currentPage++;
                        $('.pagination li').removeClass('active');
                        $('.my-group').hide();
                        let grandTotoal=limitPerPage*currentPage;
                        for (let i=grandTotoal-limitPerPage; i<grandTotoal; i++){
                          $(".my-group:eq("+ i +")").show();
                        }
                        $(".pagination li.page-item:eq(" + ( currentPage-1) +")").addClass("active");
                    }
                })
                $('#prew-page').on('click',function(){
                    let currentPage=$('.pagination li.active').index();
                    if(currentPage==1){
                        return false;
                    }
                    else{
                        currentPage--;
                        $('.pagination li').removeClass('active');
                        $('.my-group').hide();
                        let grandTotoal=limitPerPage*currentPage;
                        for (let i=grandTotoal-limitPerPage; i<grandTotoal; i++){
                          $(".my-group:eq("+ i +")").show();
                        }
                        $(".pagination li.page-item:eq(" + ( currentPage-1) +")").addClass("active");
                    }
                
                })   
     }
     $('#subscribeNews').on('click',()=>{
        let input=$("#subscribeNews:checked").val();
        debugger;
        if(input=="newsletter"){
            let activeBrandList= bands.filter((item)=>{
              
 
                 if((item.active)==true){
                     
                             return true;
                         }
                         else{
                             return false;
                         }
                        
                   
        
               
             });
             populateTable(activeBrandList);
             $('.pagination').html("");
             createPagination(activeBrandList); 

        }
        else{
            populateTable(bands);
            $('.pagination').html("");
            createPagination(bands); 
        }
        
     })
    })