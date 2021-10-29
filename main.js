$(document).ready(function(){

$nav=$('.nav');
$toggleCollapse=$('.toggle-Collapse');


$toggleCollapse.click(function(){
 $nav.toggleClass('collapse');
});

$('.owl-carousel').owlCarousel();

});