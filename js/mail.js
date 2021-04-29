
    let selector = document.querySelectorAll("input[type='tel']");
    let im = new Inputmask("+7(999)999-99-99");

    im.mask(selector);

    let validateForms = function(selector, rules) {
      new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function(form) {
          let formData = new FormData(form);

          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                console.log('Отправлено');
              }
            }
          }

          xhr.open('POST', 'mail.php', true);
          xhr.send(formData);

          form.reset();
        }
      });
    }

    validateForms('.contacts__form-form', {tel: {required: true} });
