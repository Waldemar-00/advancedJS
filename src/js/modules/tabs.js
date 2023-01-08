const tabs = () => {
    function startTabs(perentSelector, childrenSelector, contentSelector, activeClass) {
        const container = document.querySelector(perentSelector);
        const tabs = document.querySelectorAll(childrenSelector);
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
        container.addEventListener('click', (e) => {
            const eT = e.target; 
            if( eT && (eT.classList.contains(childrenSelector.replace(/\./, '')) || 
                eT.parentNode.classList.contains(childrenSelector.replace(/\./, ''))) ) {
                    tabs.forEach( ( item, index ) => {
                        if(eT === item || eT.parentNode === item) {
                            hide();
                            show(index);     
                        }
                    });
                }
        });
    }
    startTabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    startTabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click');
};
export default tabs;