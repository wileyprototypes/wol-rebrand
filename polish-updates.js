/* Fix case of LATEST ISSUE link */
$(".cover-image__link").text("Latest issue");

/* Fix case of Submit an aritcle link */
$("#SubmitanArticle a").text("Submit an article");
$("#SubmitanArticle a").prepend('<i aria-hidden="true" class="icon-submit_article"></i>');

/* Fix More articles link */
$(".more-widget-link").text("More articles");

/* Remove extra column from WOL homepage */
$(".homepage-search-container .col-md-12 .col-md-2").remove();



$(function () {
    $('body').find('.small-heading').filter(function () {
        return this.innerHTML == 'SUBJECT';
    }).text("Subject");
})


$(".copyright-container .copyright").removeClass("pull-left").addClass("pull-right");
$(".copyright-container .footer-logo").removeClass("pull-right").addClass("pull-left");