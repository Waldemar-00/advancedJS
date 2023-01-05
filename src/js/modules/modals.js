import { setTimeout } from "core-js";
import e from "cors";

const modals = () => {
    function bindModal(openSelector, modalSelector, closeSelector) {
        const open = document.querySelectorAll(openSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        open.forEach(elem => elem.addEventListener('click', (e) => {
                if(e.target)e.preventDefault();
                modal.style.display = 'block'; //! inline
                document.body.style.overflow = 'hidden';
                //? document.body.classList.add('modal-open'); // !bootstrap
        }));
        close.addEventListener('click', (e) => {
            modal.style.display = 'none';  //! inline
            document.body.style.overflow = '';
            //? document.body.classList.remove('modal-open'); // !bootstrap

        });
        modal.addEventListener('click', (e) => {
        if(e.target === modal) {
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
    bindModal('.phone_link','.popup', '.popup .popup_close');
};

export default modals;