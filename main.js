const title = document.querySelectorAll("[data-name='accordeon-title']");

title.forEach(function (item) {

  item.addEventListener("click", function () {
    console.log(this);
    console.log(this.nextElementSibling);

    this.nextElementSibling.classList.toggle('content-hidden');

  })

});
