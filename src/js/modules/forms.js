import checkNum from "./numFromInputs";
const formsFn = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    checkNum('input[name="user_phone"]');
    const messege = {
        loading: "Laoding...",
        success: "We will call YOU soon!",
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
            postData(url, formData)
                .then(response => {
                console.log(response);
                messegeBox.textContent = messege.success;
            })
                .catch(() => messegeBox.textContent = messege.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => messegeBox.remove(), 5000);
                });
        });
    });
};
export default formsFn;