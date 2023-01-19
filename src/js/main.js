import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calculate from './modules/calculate';
import timer from './modules/timer';
import show from './modules/showBigImg';
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'overlay';
    const modalsData = {};
    const data = '2023-03-21 GMT+0300';
    show();
    modals();
    tabs();
    forms(modalsData);
    calculate(modalsData);
    timer(data);
});