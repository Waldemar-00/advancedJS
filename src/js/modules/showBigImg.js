import { showModalByTime, flag } from "./modals";
let flagBig = true;
const show = () => {
    const parentBlock = document.querySelector('.works');
    const imgPopup = document.createElement('div');
    imgPopup.classList.add('popup_big', 'faded');
    parentBlock.append(imgPopup);
    const bigImg = document.createElement('img');
    imgPopup.append(bigImg);
    imgPopup.style.cssText = `display: none; 
    justify-content: center; align-items: center;`;

    parentBlock.addEventListener('click', (e) => {
        e.preventDefault();
        const eT = e.target;
        if (eT && eT.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = eT.parentElement.getAttribute('href');
            bigImg.setAttribute('src', path);
            bigImg.style.width = '720px';
            bigImg.style.height = '680px';
            document.body.style.overflow = 'hidden';
            flagBig = false;
        }
        if (eT && eT.matches('div.popup_big')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = 'overlay';
            flagBig = true;
        }
    });
    setTimeout(() => {
        if (flag && flagBig) {
            showModalByTime('.popup');
        } else {
            return;
        }
    }, 60000);
};
export default show;