let tabTriggerBtns = document.querySelectorAll('.tabs li button');
tabTriggerBtns.forEach(function(tabTriggerBtn, index){
    tabTriggerBtn.addEventListener('click', function(){
        let currentTabData = document.querySelector('.tab-content[data-tab-content="' + this.dataset.tabTrigger + '"]');

        document.querySelector('.tab-content.is-open').classList.remove('is-open');
        document.querySelector('.tabs li button.is-active').classList.remove('is-active');

        currentTabData.classList.add('is-open');
        this.classList.add('is-active');
    });
});
