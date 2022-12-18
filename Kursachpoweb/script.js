var form = document.querySelector('.needs-validation')
var validateBtn = form.querySelector('.validateBtn')
var from = form.querySelector('.log')
var password = form.querySelector('.password')
var fields = form.querySelectorAll('.field')

var generateError = function (text) {
  var error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
      var error = generateError('Заполните поле')
      form[i].parentElement.insertBefore(error, fields[i])
    }
    else{
        form.submit();
    }
  }
}



form.addEventListener('submit', function (event) {
  event.preventDefault()

  removeValidation()

  checkFieldsPresence()
  
})
