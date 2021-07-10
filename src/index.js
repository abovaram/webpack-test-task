import _ from 'lodash';
import $ from 'jquery';
import './styles/main.css';
import { dataAPI } from './data';

import { renderFilters } from './filter-widget';
import { renderContent } from './content-widget';

$(window).on('load', function() {

  renderFilters($('#filter'));
  renderContent($('#content'))(dataAPI.getState().data);

  dataAPI.subscribe(renderContent($('#content')));
});