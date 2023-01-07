const tabs = () => {
    function startTabs(perentSelector, childrenSelectors, contentSelector, activeClass) {
        const container = document.querySelector(perentSelector);
        const tabs = document.querySelectorAll(childrenSelectors);
        const content = document.querySelectorAll(contentSelector);

        const hide = () => {
            content.forEach(item => item.style.display = 'none');
            tabs.forEach(item => item.classList.remove(activeClass));
        };
        const show = (index = 0) => {
            content[index].style.display = 'block';
            tabs[index].classList.add(activeClass);
        };
        hide();
        show();
    }
    // startTabs();
};
export default tabs;