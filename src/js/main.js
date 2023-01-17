import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calculate from './modules/calculate';
import timer from './modules/timer';
window.addEventListener('DOMContentLoaded', () => {
    const modalsData = {};
    const data = '2023-01-20 GMT+0300';
    modals();
    tabs();
    forms(modalsData);
    calculate(modalsData);
    timer(data);
});