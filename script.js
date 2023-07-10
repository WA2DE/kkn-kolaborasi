// script.js

document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  var jumbotron = document.querySelector('.jumbotron');
  var projects = document.querySelector('#projects');

  // Atur tinggi minimum elemen body
  body.style.minHeight = '2000px';

  // Atur gaya untuk elemen jumbotron
  jumbotron.style.paddingTop = '2rem';
  jumbotron.style.backgroundColor = '#198754';

  // Atur warna latar belakang untuk bagian projects
  projects.style.backgroundColor = '#198754';
});
