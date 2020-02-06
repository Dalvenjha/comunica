/* This script supports IE9+ */
(function () {
  /* Opening modal window function */
  function openModal() {
    /* Get trigger element */
    var modalTrigger = document.getElementsByClassName('jsModalTrigger');

    /* Set onclick event handler for all trigger elements */
    for (var i = 0; i < modalTrigger.length; i++) {
      modalTrigger[i].onclick = function () {
        // var target = this.getAttribute('href').substr(1);
        var target = 'jsModal';
        var modalWindow = document.getElementById(target);

        modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
      }
    }
  }

  function closeModal() {
    /* Get close button */
    var closeButton = document.getElementsByClassName('close');
    var closeOverlay = document.getElementsByClassName('jsOverlay');

    /* Set onclick event handler for close buttons */
    for (var i = 0; i < closeButton.length; i++) {
      closeButton[i].onclick = function () {
        var modalWindow = this.parentNode.parentNode;

        modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }

    /* Set onclick event handler for modal overlay */
    for (var i = 0; i < closeOverlay.length; i++) {
      closeOverlay[i].onclick = function () {
        var modalWindow = this.parentNode;

        modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }

  }

  /* Handling domready event IE9+ */
  function ready(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* Triggering modal window function after dom ready */
  ready(openModal);
  ready(closeModal);
}());

$(document).ready(function () {

  let imageChanger = $('#changeImage');

  // for (let i = 1; i < 35; i++) {
  //   changers(i)
  // }

  // function changers(i) {
  //   window.setTimeout(imageChanger.attr('src', "img/hola/" + i + ".png"), 1000 + i * 1500);
  // }

  let images = ['img/hola/1.png', 'img/hola/2.png', 'img/hola/3.png', 'img/hola/4.png', 'img/hola/5.png', 'img/hola/6.png', 'img/hola/7.png', 'img/hola/8.png', 'img/hola/9.png', 'img/hola/10.png', 'img/hola/11.png', 'img/hola/12.png', 'img/hola/13.png', 'img/hola/14.png', 'img/hola/15.png', 'img/hola/16.png', 'img/hola/17.png', 'img/hola/18.png', 'img/hola/19.png', 'img/hola/20.png', 'img/hola/21.png', 'img/hola/22.png', 'img/hola/23.png', 'img/hola/24.png', 'img/hola/25.png', 'img/hola/26.png', 'img/hola/27.png', 'img/hola/28.png', 'img/hola/29.png', 'img/hola/30.png', 'img/hola/31.png', 'img/hola/32.png', 'img/hola/33.png', 'img/hola/34.png', 'img/hola/35.png',];
  let i = 0;
  let selected = ['img/hola/2.png'];

  function intervalers() {
    setInterval(function () {
      if (images.length == i) {
        i = 0;
      }
      else {
        imageChanger.attr('src', images[i]);
        i++;

      }
    }, 200);
  }

  $('#changeImage').click(
    console.log('changers'),
    function () {
      intervalers();
    });

  let elements = "";

  let arr = ['quiz5', 'quiz4', 'quiz3', 'quiz2', 'quiz1'];

  Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
  }

  function randoms() {
    let randomed = arr.random();
    if (elements == randomed) {
      randoms();
    } else {
      elements = randomed;
      $('#' + elements).addClass('items');
    }

  }

  function selects() {
    for (let i = 0; i <= 34; i++) {
      selecteds();
    }
  }

  function selecteds() {
    let randomized = images.random();
    let element = selected.indexOf(randomized);
    if(element == -1) {
      // console.log('no existe');
      // console.log(randomized);
      // console.log(element);
      selected.push(randomized);
      // console.log(selected);
    } else {
      // console.log('ya existe');
      // console.log(randomized);
      // console.log(element);
    }
  }

  function provee() {
    for(let i = 1; i <= 5; i++) {
      console.log(selected[i]);
      console.log($('#hola'+i));
      $('#hola'+i).attr('src',selected[i]);
    }
  }

  randoms();
  randoms();
  selects();
  // selecteds();
  provee();

  $('#slideshow').cycle();

  intervalers();

  $('#firstButton').click(function (event) {
    event.preventDefault();
    $('#slideshow').cycle('next');
  })

  $('li.item a').click(function (event) {
    event.preventDefault();
    $('#slideshow').cycle('next');
  })



});