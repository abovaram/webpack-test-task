import $ from 'jquery';
import { dataAPI } from '../data';

export const renderFilters = (target) => {
  const labels = dataAPI.getState().columns.map(({ label }) => label);

  labels.forEach((label, columnNumber) => {

    const input = $('<input type="text">');

    target.append($(`<label>${label}</label>`))
    .append($('</br>'))
    .append(input)
    .append($('</br>'));
  });

  const filterButton = $(`<button>find</button>`).on('click', dataAPI.filterHandler);
  const resetButton = $('<button>reset</button>').on('click', dataAPI.resetDisplay);
  
  target
  .append(resetButton)
  .append(filterButton);
};