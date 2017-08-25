<script>
var quoteContentString = "";
var quoteAuthorString = "";

function getQuoteFromJSON() {
  $.ajax({
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data[0];
        
        $('.author-name').text(post.title);
        $('.quote-text').html(post.content);
        
        quoteContentString = $('.quote-text').find('p').text();
        quoteAuthorString = post.title;
        
        
        $('.btn-twitter').attr('href','https://twitter.com/home/?status=' + quoteContentString + ' - ' + quoteAuthorString);
      },
      cache: false
   });
}


$(document).ready(function() {
  getQuoteFromJSON();
  
  $(".btn-refresh-quote").on("click", function(event) { 
    event.preventDefault();
    getQuoteFromJSON();
  });
  
  $(".btn-twitter").on("click", function(event) {
    event.preventDefault();
    var tweetedLink = this.getAttribute( "href" );

    window.open( "https://twitter.com/intent/tweet?url=" + tweetedLink + "&text=" + quoteContentString + ' - ' + quoteAuthorString + "&via=jcsoriano18&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0" );
  });
});
</script>
