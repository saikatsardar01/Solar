// Init draggable

var planet = ".planet"; // Planet element
var holder = ".planet_holder"; // Holder element
var planets = 8;
var correct = 0;

$(planet).draggable({
  revert: true
});

// Init droppable

$(holder).droppable({
  hoverClass: "ui-state-hover",
  drop: function (event, ui) {
    var dropped = $(this).data("planet");
    if ($(ui.draggable).data("planet") == dropped) {
      setTimeout(function () {
        $(ui.draggable).append(
          '<div class="tick"><i class="icon ion-checkmark-round"></i></div>'
        );
      }, 500);
      $(ui.draggable).find("img").css("opacity", ".12");
      $(this).find(".planet_answer img").addClass("scale");
      $(this).find(".planet_answer").parent().css("border", "none");
      $(ui.draggable).next().addClass("answered");
      correct++;
    } else {
    }
    if (correct == planets) {
      show_modal("winner");
      clearTimeout(timer);
      $(".t").html(time);
    }
  }
});

var timer = 0;

function show_modal(modal) {
  $("." + modal).show();
  $(".overlay").show();
}

function hide_modal(modal) {
  $("." + modal).hide();
  $(".overlay").hide();
}

function start_timer() {
  var start = new Date();
  timer = setInterval(function () {
    time = Math.floor((new Date() - start) / 1000) + " seconds";
    $(".timer").html(time);
    console.log(time);
  }, 1000);
}

//Start of the timer

$('.st').click(function(){
  start_timer()
})
$(document).ready(function(){
  show_modal('intro');
})

$('.c_modal').click(function(){
  hide_modal('modal')
})

$('.ta').click(function(){
  hide_modal('modal');
  start_timer();
  correct = 0;
  $(planet).css('opacity','1')
  $('.planet_answer').hide()
  $('.answered').removeClass('answered')
  $('.planet_holder').css('border','2px dashed rgba(255, 255, 255, 0.22)')
})
