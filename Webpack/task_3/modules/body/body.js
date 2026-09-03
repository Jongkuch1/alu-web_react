import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="clicker">Click here to get started</button>');
$('body').append('<p id="count"></p>');

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('#clicker').on('click', _.debounce(updateCounter, 500));