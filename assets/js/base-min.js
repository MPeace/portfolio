$(document).ready((function(){$((function(){$(".accordion").accordion({active:!1,animate:200,header:"h3",collapsible:!0,heightStyle:"content",autoHeight:!1,clearStyle:!0,icons:!1})})),$("#nav-icon3").click((function(){$(this).toggleClass("open"),$("#menu").slideToggle("fast",(function(){}))})),$(".slider").bxSlider({mode:"horizontal",speed:250}),lightbox.option({resizeDuration:200,wrapAround:!0}),$("a.btn").on("click",(function(o){if(""!==this.hash){o.preventDefault();var n=this.hash;$("html, body").animate({scrollTop:$(n).offset().top},400,(function(){window.location.hash=n}))}}))}));