import { setTimeout } from "core-js";
import e from "cors";
let  flag = true;
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
                modal.classList.add('faded');
                document.body.style.overflow = 'hidden';
                flag = false;
                //? document.body.classList.add('modal-open'); // !bootstrap
        }));
        close.addEventListener('click', () => {
            popups.forEach(popup => popup.style.display = 'none');
            modal.style.display = 'none';  //! inline
            document.body.style.overflow = 'overlay';
            flag = true;
            //? document.body.classList.remove('modal-open'); // !bootstrap

        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeTrigger) {
                popups.forEach(popup => popup.style.display = 'none');
                modal.style.display = 'none';  //! inline
                document.body.style.overflow = 'overlay';
                flag = true;
                //?document.body.classList.remove('modal-open'); // !bootstrap
            }
        });
    }

    bindModal('.popup_engineer_btn','.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};
function showModalByTime(selector) {
    document.querySelector(selector).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

export { showModalByTime, flag } ;
export default modals;