$(document).ready(function(){
    $("#delete_ad").click(function(e){
        e.preventDefault();
        if(confirm("Czy napewno chcesz usunąć?")){
            window.location.href = $(this).attr('href');
        }else{
            return false;
        }
    });
    $("#delete_user").click(function(e){
        e.preventDefault();
        if(confirm("Czy napewno chcesz usunąć?")){
            window.location.href = $(this).attr('href');
        }else{
            return false;
        }
    });
});