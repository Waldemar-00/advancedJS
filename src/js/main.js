import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calculate from './modules/calculate';
import timer from './modules/timer';
import show from './modules/showBigImg';
window.addEventListener('DOMContentLoaded', () => {
    if (navigator.userAgent.match('Firefox') ||
        (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor))) {
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'overlay';
    }
    console.log(navigator.userAgent.indexOf("Safari"));
    const modalsData = {};
    const data = '2023-03-21 GMT+0300';
    show();
    modals();
    tabs();
    forms(modalsData);
    calculate(modalsData);
    timer(data);
});