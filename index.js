$("span.slider.round").click(function(event) {

var currclass=$("body").attr("class");
$("body").removeClass(currclass);
var addcls=complementaryClass(currclass);
$("body").addClass(addcls);
$(".card").removeClass("card-"+currclass);
$(".card").addClass("card-"+addcls);
$(".text").removeClass(currclass+"-text");
$(".text").addClass(addcls+"-text");
$(".shd").removeClass(currclass+"-shd");
$(".shd").addClass(addcls+"-shd");
$(".lower-heading").removeClass("lower-heading-"+currclass);
$(".lower-heading").addClass("lower-heading-"+addcls);

});
function complementaryClass( currclass)
{var x;
  if(currclass==="light-theme")
  x="dark-theme";
  else
  x="light-theme";
  return x;
}
