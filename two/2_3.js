$(document).ready(function(){
    // var html = $("#tab").html();
    // console.log(html);
    $("#go").on("click", function() {
      var toSearch = $("#search").val().toUpperCase();
      $("tbody tr").filter(function() {
        $(this).toggle ($(this).text().toUpperCase().indexOf(toSearch) != -1)
        // console.log(toSearch);
    
      });
    });
  });