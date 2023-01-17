import checkNum from "./numFromInputs";
const calculate = (modalData) => {
    const windowsTypes = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowsHeight = document.querySelectorAll('#height');
    const material = document.querySelectorAll('#view_type');
    const checkboxes = document.querySelectorAll('.checkbox');
    const reset = document.querySelector('.multiplication');
    reset.style.cursor = 'pointer';
    modalData.windowType = 0;
    modalData.material = 'tree';
    const addProperty = (event, elements, property) => {
        elements.forEach((element, index) => {
            element.addEventListener(event, () => {
                switch (element.nodeName) {
                    case 'SPAN':
                        modalData[property] = index;
                        break;
                    case 'INPUT':
                        if (element.getAttribute('type') === 'checkbox') {
                            index === 0 ? modalData[property] = 'cold' : modalData[property] = 'warm';
                            elements.forEach((check, j) => {
                                index === j ? check.checked = true : check.checked = false;
                            });
                        } else {
                            modalData[property] = element.value;
                        }
                        break;
                    case 'SELECT':
                        modalData[property] = element.value;
                        break;
                }
                console.log(modalData);
            });
        });
    };
    addProperty('click', windowsTypes, "windowType");
    addProperty('input', windowWidth, "width");
    addProperty('input', windowsHeight, "height");
    addProperty('change', material, "material");
    addProperty('click', checkboxes, "checkbox");
    checkNum('#width');
    checkNum('#height');
    reset.addEventListener('click', () => {
    windowWidth.forEach(input => input.value = '');
    modalData.width = '';
    windowsHeight.forEach(input => input.value = '');
    modalData.height = '';
        console.log(modalData);
    });
};
export default calculate;