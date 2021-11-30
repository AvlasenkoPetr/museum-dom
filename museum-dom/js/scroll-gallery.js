const animItems = document.querySelectorAll('.gallery__img');

if (animItems.length > 0) {
    window.addEventListener('scroll', animScroll);
    function animScroll(params) {
        for (let i = 0; i < animItems.length; i++){
            const item = animItems[i];
            const itemHeight = item.offsetHeight;
            const itemOffset = offset(item).top;
            
            const itemStart = 4;
            let itemPoint = window.innerHeight - itemHeight / itemStart;

            if(pageYOffset > itemOffset - (window.innerHeight + itemHeight)){
                item.classList.add('_active')
            }

            if(pageYOffset + window.innerHeight < itemOffset - itemHeight){
                item.classList.remove('_active')
            }
        }

    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft =  window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}
