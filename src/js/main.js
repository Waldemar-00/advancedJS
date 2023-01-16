import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calculate from './modules/calculate';
window.addEventListener('DOMContentLoaded', () => {
    const modalsData = {};
    modals();
    tabs();
    forms();
    calculate(modalsData);
});