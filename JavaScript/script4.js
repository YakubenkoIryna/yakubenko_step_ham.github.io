$('.loader,.show,.items-image').hide();

$('a').on('click', function (e) {
    e.preventDefault();
});

$(document).ready(loadMoreAmazingStart);

$(document).ready(function () {
    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: '.gutter-sizer'
    });
});

function loadMoreAmazingStart() {
    const j = 12;
    for (let i = 0; i < j; i++) {
        $('.items-image').eq(i).show();
    }
}

function showOurAmazingWork() {
    $('.load-more-amazing').show();
    $('.amazing-items').removeClass('margin-bottom');

    const liListAmazing = $('.li-amazing');
    for (let input of liListAmazing) {
        if ($(input).hasClass('active-amazing')) {
            $(input).removeClass('active-amazing');
        }
    }
    $(this).addClass('active-amazing');

    const dataItems = $(this).data('amazingItems');
    const itemsImage = Array.from($('.items-image'));
    const showItems = 12;
    const dataItemsImage = itemsImage.filter((value) => {
        return value.getAttribute('data-amazing-items') === dataItems;
    });
    $(itemsImage).hide();
    const hideButtonAddClass = () => {
        $('.load-more-amazing').hide();
        $('.amazing-items').addClass('margin-bottom');
    };

    if (dataItemsImage.length > showItems) {
        for (let i = 0; i < showItems; i++) {
            $(dataItemsImage).eq(i).fadeIn(700);
        }
        $('.load-more-amazing').show();
    } else if (dataItems === 'all') {
        $(itemsImage).fadeIn(700);
        hideButtonAddClass();
    } else {
        $(dataItemsImage).fadeIn(700);
        hideButtonAddClass();
    }
}
function loadMoreAmazing() {
    let lastVisIndex = $('.items-image:visible:last').index();
    const allItemsImage = $('.items-image:last').index();
    const hiddenElem = $('.items-image:hidden');
    const dataAmazingItems = $('.active-amazing').data('amazingItems');
    console.log(dataAmazingItems);
    const allElemDataItems = Array.from($('.items-image').filter(function () {
        return $(this).data('amazingItems') === dataAmazingItems;
    }));
    const showItems = 12;

    $('.loader-image').show();
    $('.load-more-amazing').hide();

    setTimeout(function () {
        $('.loader-image').hide();
        $('.load-more-amazing').show();

        if (dataAmazingItems === 'all') {
            for (let i = 0; i < showItems; i++) {
                $(hiddenElem).eq(i).fadeIn(700);
            }
        } else {
            for (let i = showItems; i <= allElemDataItems.length - 1; i++) {
                $(allElemDataItems).eq(i).fadeIn(700);
            }
            $('.load-more-amazing').hide();
            $('.amazing-items').addClass('margin-bottom');
        }
        lastVisIndex = $('.items-image:visible:last').index();
        if (allItemsImage === lastVisIndex) {
            $('.load-more-amazing').hide();
            $('.amazing-items').addClass('margin-bottom');
        }
    }, 2000);
}

$('.li-amazing').on('click', showOurAmazingWork);
$('.load-more-amazing').on('click', loadMoreAmazing);




