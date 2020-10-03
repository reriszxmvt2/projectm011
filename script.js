var login = function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (email === 'bob' && password === 'secret') {
      ons.notification.alert('Congratulations!');
    } else {
      ons.notification.alert('Incorrect email or password.');
    }
  };
