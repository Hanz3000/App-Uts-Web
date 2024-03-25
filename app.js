const form = document.getElementById('LoginPage');
const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

  const usernameValue = 'farhanabdillah501@gmail.com';
  const passwordValue = '233307076';

  if(inputUsername.value !== usernameValue) {
    document.getElementById("response").innerHTML="Username dan password salah. Coba lagi!";
  }
  else if (inputPassword.value !== passwordValue) {
    document.getElementById("response").innerHTML="Username dan password salah. Coba lagi!";
  } else {
    document.getElementById("response")
    alert ("Login Berhasil, Lanjut Untuk Ke Menu");
    window.location.href = 'order.html';
    }
  });