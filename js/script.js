// Created by: maliksalem1
// Created on: March 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {

  document.getElementById('add-math').innerHTML = '<p>2 + 2 = ' + (2 + 2) + '</p>'
  document.getElementById('subtract-math').innerHTML = '<p>4 - 3 =  ' + (4 - 3) + '</p>'
  document.getElementById('multiply-math').innerHTML = '<p>4 × 2 = ' + (4 * 2) + '</p>'
  document.getElementById('divide-math').innerHTML = '<p>4 ÷ 2 = ' + (4 / 2) + '</p>'
  document.getElementById('exponent-math').innerHTML = '<p>20 + 12 = ' + (20 + 12) + '</p>'
}