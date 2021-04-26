const tegA = Array.from(document.getElementsByTagName('a'));
tegA.forEach((value) => value.addEventListener('click', (e) => e.preventDefault()));
const loader = document.getElementsByClassName('loader');
const show = document.getElementsByClassName('show');
const itemsImage = Array.from(document.getElementsByClassName('items-image'));
const liAmazing = Array.from(document.getElementsByClassName('li-amazing'));
const loadMoreAmazing = document.getElementsByClassName('load-more-amazing');



const applyHiddenClass = (cls, length = cls.length, count = 0) => {
    for (let i = count; i < length; i++) {
        cls[i].style.display = 'none';
    }
};

applyHiddenClass(loader);
applyHiddenClass(itemsImage, itemsImage.length, 12);
applyHiddenClass(show);

window.addEventListener('load', () => {
    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: '.gutter-sizer',
        horizontalOrder: true
    });
});

function showOurAmazingWork() {
    const liAmazing = Array.from(document.getElementsByClassName('li-amazing'));
    const buttonLoadMore = document.getElementsByClassName('load-more-amazing');
    buttonLoadMore[0].style.display = '';
    const amazingItems = Array.from(document.getElementsByClassName('amazing-items'));
    const showItems = 12;
    amazingItems.forEach((value) => value.classList.remove('margin-bottom'));

    liAmazing.forEach((value) => value.classList.remove('active-amazing'));
    this.classList.add('active-amazing');

    const dataAmazingItems = this.getAttribute('data-amazing-items');
    const itemsImage = Array.from(document.getElementsByClassName('items-image'));
    itemsImage.forEach((value) => value.style.display = 'none');
    const dataItemsImage = itemsImage.filter((items) => {
        return items.getAttribute('data-amazing-items') === dataAmazingItems;
    });
    const hideButtonAddClass = () => {
        buttonLoadMore[0].style.display = 'none';
        amazingItems[0].classList.add('margin-bottom');
    };
    if (dataItemsImage.length > showItems) {
        for (let i = 0; i < showItems; i++) {
            dataItemsImage[i].style.display = '';
        }
        buttonLoadMore[0].style.display = '';
    } else if (dataAmazingItems === 'all') {
        itemsImage.forEach((value) => value.style.display = '');
        hideButtonAddClass();
    } else {
        dataItemsImage.forEach((value) => value.style.display = '');
        hideButtonAddClass();
    }
}

const loadingMoreAmazing = () => {
    const itemsImage = Array.from(document.getElementsByClassName('items-image'));
    const buttonLoadMore = document.getElementsByClassName('load-more-amazing');
    const amazingItems = document.getElementsByClassName('amazing-items');
    const hiddenElem = itemsImage.filter((value) => {
        return value.style.display === 'none';
    });
    const loader = document.getElementsByClassName('loader-image');
    const showItems = 12;
    const dataAmazingItems = document.getElementsByClassName('active-amazing')[0].getAttribute('data-amazing-items');
    const allElemDataItems = itemsImage.filter((items) => {
        return items.getAttribute('data-amazing-items') === dataAmazingItems;
    });

    buttonLoadMore[0].style.display = 'none';
    loader[0].style.display = '';
    setTimeout(function () {
        buttonLoadMore[0].style.display = '';
        loader[0].style.display = 'none';
        if (hiddenElem.length === showItems) {
            buttonLoadMore[0].style.display = 'none';
            amazingItems[0].classList.add('margin-bottom');
        }
        if (dataAmazingItems === 'all') {
            for (let i = 0; i < showItems; i++) {
                hiddenElem[i].style.display = '';
            }
        } else {
            for (let i = showItems; i <= allElemDataItems.length - 1; i++) {
                allElemDataItems[i].style.display = '';
            }
            buttonLoadMore[0].style.display = 'none';
            amazingItems[0].classList.add('margin-bottom');
        }
    }, 200);
};



liAmazing.forEach((value) => value.addEventListener('click', showOurAmazingWork));
loadMoreAmazing[0].addEventListener('click', loadingMoreAmazing);
