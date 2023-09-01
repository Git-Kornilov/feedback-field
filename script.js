'use strict';

const ratings = document.querySelectorAll('.rating');
const ratingContainer = document.querySelector('.rating-container');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');

let selectedRating = 'Satisfied';

// remove active class
const removeActive = function () {
  ratings.forEach(rating => rating.classList.remove('active'));
};

// click on smile and set active class
ratingContainer.addEventListener('click', e => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

// send button-feedback and show feedback window
sendBtn.addEventListener('click', e => {
  panel.innerHTML = `
	<i class="fa-solid fa-heart"></i>
	<strong>Thank You!</strong>
	<br>
	<strong>Feedback: ${selectedRating}</strong>
	<p>We'll use your feedback to improve our customer support</p>
	`;
});
