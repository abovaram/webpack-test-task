import $ from 'jquery';
import { dataAPI } from '../data';

export const renderContent = (target) => (data) => {
  target.html('');

  const table = $('<table></table>');
  const labels = dataAPI.getState().columns.map(({ label }) => label);
  const content = data;
  const header = $('<tr></tr>');

  labels.forEach(label => {
    header.append(`<th>${label}</th>`)
  });

  table.append(header);

  content.forEach((item) => {
    const tr = $('<tr></tr>');

    item.forEach((label, index, array) => {
      tr.append(`<td>${label}</td>`);
    });
    
    table.append(tr);
  });

  target.append(table);
};