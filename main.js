// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che
// prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function(){

  // event delegation
  $(".griglia").on('click','.quadrato',
    function() {
      // alert("click");
      var quadratoCliccato = this;
      // se il quadrato aveva già un numero, non rifare la chiamata. bloccarci subito.
      $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data,stato) {
          console.log("Data", data);
          console.log("stato", stato);

          var numeroRandom = data.response;
          console.log(numeroRandom);

          // alert(numeroRandom);
          // se il numero è <= 5 il quadrato sarà giallo
          if (numeroRandom<=5){
            $(quadratoCliccato).css({
              'background-color' : 'yellow',
              'font-size' : '50px'

            });
              // altrimenti verde
          } else {
            $(quadratoCliccato).css({
              'background-color' : 'green',
              'font-size' : '50px'

            });

          }
            // voglio levare il numero esistente  <div class'numero'>" + numeroRandom + "</div>
          // trovare l'elemento all'interno di this che vogliamo rimuovere
          $(quadratoCliccato).find('.numero').remove();
            $(quadratoCliccato).append("<div class='numero'>" + numeroRandom + "</div>");
            console.log($(quadratoCliccato).find('.numero'));
          // inserire quello successivo(numero che appare al secondo click)
        },
        error : function (richiesta,stato,errori) {

          alert("e' avvenuto un errore ." +errore);
        }
      });
    }

  );
  for (var i=0; i<9; i++) {
    $(".griglia").append("<div class='quadrato'></div>");
  }
});
