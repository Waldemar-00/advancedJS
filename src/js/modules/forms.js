import checkNum from "./numFromInputs";
const formsFn = (modalsData) => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    checkNum('input[name="user_phone"]');
    const messege = {
        loading: "Laoding...",
        success: "Wait for our call!",
        failure: "Somesing's wrong!",
    };
    const clearInputs = () => {
        inputs.forEach(input => input.value = '');
    };
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const postData = async (url, data) => {
        const dataObject = {};
        data.forEach((value, key) => {
            dataObject[key] = value;
            console.log(key, value);
        });
        console.log(JSON.stringify(dataObject));
        document.querySelector('.status').textContent = messege.loading;
        const response = await fetch(url , {
            method: 'POST',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(dataObject),
        });
        return await response.json();
    };
    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const messegeBox = document.createElement('div');
            messegeBox.classList.add('status');
            form.appendChild(messegeBox);
            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === "submit") {
                for (let key in modalsData) {
                    formData.append(key, modalsData[key]);
                }
            }
            postData(url, formData)
                .then(response => {
                console.log(response);
                messegeBox.textContent = messege.success;
            })
                .catch(() => messegeBox.textContent = messege.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        messegeBox.remove();
                        const mainForms = document.querySelectorAll('.main_form');
                        mainForms.forEach(form => form.style.display = 'none');
                        const close = document.querySelectorAll('[data-closePopup]');
                        close.forEach(popup => popup.style.display = 'none');
                        document.body.style.overflow = 'visible';
                    }, 4000);

                });
        });
    });
};
export default formsFn;