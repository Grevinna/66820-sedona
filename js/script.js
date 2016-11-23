var link = document.querySelector(".form-link");
var popup = document.querySelector(".form");
var formBtn = document.querySelector(".form-btn");
var form = document.querySelector("form");
var arrivalDate = document.querySelector("[name=arrival-date]");
var dateOfDeparture = document.querySelector("[name=date-of-departure]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");


popup.classList.remove("form-show");
popup.classList.remove("form-error");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("form-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("form-show")) {
      popup.classList.remove("form-show");
      popup.classList.remove("form-error");
    }
  }
});

formBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var valid = true;

  if (!arrivalDate.value) {
    valid = false;
    addErrorDecoration(arrivalDate);
  }
  if (!dateOfDeparture.value) {
    valid = false;
    addErrorDecoration(dateOfDeparture);
  }
  if (!adults.value || typeof adults.value != 'number') {
    valid = false;
    addErrorDecoration(adults);
  }
  if (!children.value || typeof children.value != 'number') {
    valid = false;
    addErrorDecoration(children);
  }

  if (!valid) {
    popup.offsetWidth = popup.offsetWidth;
    if (!arrivalDate.value || !dateOfDeparture.value || !adults.value || !children.value) {
      event.preventDefault();
      popup.classList.remove("form-error");
      popup.offsetWidth = popup.offsetWidth;
      console.log("Нужно ввести значение");
      popup.classList.add("form-error");
    } else {
      form.submit();
    }

    function addErrorDecoration(item) {
      item.classList.add('input-error');
      item.addEventListener('click', function() {
        item.classList.remove('input-error');
      });
    }

  }
});
