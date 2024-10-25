$(document).ready(function(){
    function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
          $("#random_quote").html("<span id='random_quote' class='lead text-center'>" +'"'+
            response.quoteText+'"' + "<br/>&dash; " + response.quoteAuthor + " &dash;</span>");
          $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + response.quoteText +
            ' (' + response.quoteAuthor + ')');
        }
    });
  }
  
  $(function() {
    randomQuote();
  });
  
  $("button").click(function(){
    randomQuote();
  });
    
  });