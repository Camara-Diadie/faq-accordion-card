const question = document.querySelectorAll(".question-faq");
for (var i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {

    const reponse = this.nextElementSibling;
    if (reponse.style.display === "block") {
      
      reponse.style.display = "none";
    } else {
      reponse.style.display = "block";
      
    }
  });

}



