// eseménykezelő beállítása

//$("p").click(function(){
  //  $(this).hide();
//});

function fadeDone(){
  console.log(this);
}

$("p").click(function(){
    $(this).hide();
    $(this).fadeTo(5000, 1, fadeDone);
    });

// Esemény kiváltása
$("p").click();

//Kattintás megelőzése
$("nav a.nav-link").click( function(ev) {
  ev.preventDefault();
  console.log(ev);
});

//GAlériához
baguetteBox.run('.grid-gallery', { animation: 'slideIn'});



