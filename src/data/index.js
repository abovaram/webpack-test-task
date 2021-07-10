import * as jsonData from './d.json';
import $ from 'jquery';
import moment from 'moment';

const makeDataAPI = (data) => {
  const formatedData = {
    ...data,
    data: data.data.map(item => {
      let temp;
      temp = [...item];
      temp[3] = moment(item[3] * 1000).calendar();

      return temp;
    }),
  }
  const state = formatedData;
  const listeners = [];
  let display = state.data;
  let allInputs = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    const unsubscribe = () => {
      listeners.filter(handler => listener !== handler)
    };

    return unsubscribe;
  };

  const trigger = (display) => { listeners.forEach(listener => listener(display))};

  const resetDisplay = () => {
    display = state.data;

    $('input').each(function() {
      $(this).val('');
    });

    trigger(display);
  };

  const filterHandler = () => {
    
    $('input').each(function() {
      allInputs.push($(this).val());
    })

    allInputs.forEach((value, index) => {
      display = display.filter(item => (
        `${item[index]}`.trim().toLocaleLowerCase()
        .includes(value.trim().toLocaleLowerCase())
      ));
    });

    trigger(display);
    
    allInputs = [];
    display = state.data;
  }

  return ({
    getState,
    subscribe,
    resetDisplay,
    filterHandler,
  });
};

export const dataAPI = makeDataAPI(jsonData);
