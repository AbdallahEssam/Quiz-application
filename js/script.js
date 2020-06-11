/*drag and drop functions*/
function allowDrop(letter_drop) {
  letter_drop.preventDefault();
}

function drag(letter_drop) {
  letter_drop.dataTransfer.setData("text", letter_drop.target.id);
}

function drop(letter_drop) {
  letter_drop.target.innerText = letter_drop.target.innerText +""+ event.dataTransfer.getData("Text");
}
/*end drag and drop functions*/




/*show_all_answers */
  function myFunction_1(){
    var x = document.getElementById("answer_a");
    if (x.innerHTML === "a") {
      x.innerHTML = "&nbsp;&nbsp;";
    } else {
      x.innerHTML = "a";
    }
    var x = document.getElementById("answer_a2");
    if (x.innerHTML === "a") {
      x.innerHTML = "&nbsp;&nbsp;";
    } else {
      x.innerHTML = "a";
    }
    var x = document.getElementById("answer_c");
    if (x.innerHTML === "c") {
      x.innerHTML = "&nbsp;&nbsp;";
    } else {
      x.innerHTML = "c";
    }
    var x = document.getElementById("answer_c2");
    if (x.innerHTML === "c") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp;";
    } else {
      x.innerHTML = "c";
    }
    var x = document.getElementById("answer_e");
    if (x.innerHTML === "e") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp;";
    } else {
      x.innerHTML = "e";
    }
    var x = document.getElementById("answer_i");
    if (x.innerHTML === "i") {
      x.innerHTML = "&nbsp;&nbsp;";
    } else {
      x.innerHTML = "i";
    }
    var x = document.getElementById("answer_i2");
    if (x.innerHTML === "i") {
      x.innerHTML = "&nbsp;&nbsp;";
    } else {
      x.innerHTML = "i";
    }
    var x = document.getElementById("answer_n");
    if (x.innerHTML === "n") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "n";
    }
    var x = document.getElementById("answer_n2");
    if (x.innerHTML === "n") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "n";
    }
    var x = document.getElementById("answer_n3");
    if (x.innerHTML === "n") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "n";
    }
    var x = document.getElementById("answer_o");
    if (x.innerHTML === "o") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "o";
    }
    var x = document.getElementById("answer_r");
    if (x.innerHTML === "r") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "r";
    }
    var x = document.getElementById("answer_r2");
    if (x.innerHTML === "r") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "r";
    }
    var x = document.getElementById("answer_t");
    if (x.innerHTML === "t") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "t";
    }
    var x = document.getElementById("answer_u");
    if (x.innerHTML === "u") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "u";
    }
    var x = document.getElementById("answer_u2");
    if (x.innerHTML === "u") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "u";
    }
    var x = document.getElementById("answer_w");
    if (x.innerHTML === "w") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "w";
    }
    var x = document.getElementById("answer_y");
    if (x.innerHTML === "y") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp; ";
    } else {
      x.innerHTML = "y";
    }
    var x = document.getElementById("answer_e2");
    if (x.innerHTML === "e") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp;";
    } else {
      x.innerHTML = "e";
    }
    var x = document.getElementById("answer_c3");
    if (x.innerHTML === "c") {
      x.innerHTML = "&nbsp;&nbsp;&nbsp;";
    } else {
      x.innerHTML = "c";
    }
    var x = document.getElementById("show_check").style.display='block';
    var x = document.getElementById("hide_check").style.visibility="hidden";
  
    /* show_correct_icon*/
    
    /* audio play*/
    var audio =document.getElementById("show_ans_audio")
      audio.play();
      var x = document.getElementById("showAll").disabled=true;
    }
  

     
/* select_letters*/

