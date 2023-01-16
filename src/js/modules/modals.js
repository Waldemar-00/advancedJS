import { setTimeout } from "core-js";
import e from "cors";

const modals = () => {
    function bindModal(openSelector, modalSelector, closeSelector, closeTrigger = true) {
        const open = document.querySelectorAll(openSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const popups = document.querySelectorAll('[data-closePopup]');

        open.forEach(elem => elem.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            popups.forEach(popup => popup.style.display = 'none');
                modal.style.display = 'block'; //! inline
                document.body.style.overflow = 'hidden';
                //? document.body.classList.add('modal-open'); // !bootstrap
        }));
        close.addEventListener('click', (e) => {
            popups.forEach(popup => popup.style.display = 'none');
            modal.style.display = 'none';  //! inline
            document.body.style.overflow = '';
            //? document.body.classList.remove('modal-open'); // !bootstrap

        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeTrigger) {
                popups.forEach(popup => popup.style.display = 'none');
                modal.style.display = 'none';  //! inline
                document.body.style.overflow = '';
                //?document.body.classList.remove('modal-open'); // !bootstrap
            }
        });
    }
    function showModalByTime(selector) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';

    }
    setTimeout(() => showModalByTime('.popup'), 60000);
    bindModal('.popup_engineer_btn','.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals;