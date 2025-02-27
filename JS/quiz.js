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

// For USER Name

// function user_name() {
//   var userNameElement = document.getElementById('user_name');
//   var userNameValue = userNameElement.value;
//   console.log(userNameValue);
// }

//FOR generating certificate at the end

function certificate() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  const userNameValue = document.getElementById('user_name');
  // var downloadBtn = document.getElementById('download-btn');

  const image = new Image()
  image.src = './SLIDER/InnovationSkylineCertificate.png'
  image.onload = function () {
    drawImage()
  }

  function drawImage() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, canvas.width = 1000, canvas.height = 700)
    ctx.font = '50px system-UI'
    ctx.fillStyle = '#fff'
    ctx.fillText(userNameValue.value, 250, 310)

    let count = 0;
    let intervalId = setInterval(function () {
      count++;
      console.log("Count:", count);

      if (correct == planets) {
        clearInterval(intervalId);
      ctx.fillText(count, 510, 500)

      }
    }, 1000);

    
  }

  userNameValue.addEventListener('input', function () {
    drawImage()
  })


}

function dkload() {
  var link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'Innovation_Skyline_Certificate.png';
  // Trigger the download
  link.click();
}

//Start of the timer

$('.st').click(function () {
  start_timer()
  certificate()
   // For User name
})
$(document).ready(function () {
  show_modal('intro');
})

$('.c_modal').click(function () {
  hide_modal('modal')
})

$('.ta').click(function () {
  hide_modal('modal');
  start_timer();
  correct = 0;
  $(planet).css('opacity', '1')
  $('.planet_answer').hide()
  $('.answered').removeClass('answered')
  $('.planet_holder').css('border', '2px dashed rgba(255, 255, 255, 0.22)')
})


// Certificate

$('.dwnld').click(function () {
  dkload()
})