$('.hide-authors,.hide-authors-mini').hide();

$('a').on('click', function (e) {
    e.preventDefault();
});


function moveLeft() {
    const currentImage = $('.mini-circle-photo.mini-circle-border');
    const currentImageIndex = currentImage.index();
    const prevImageIndex = currentImageIndex - 1;
    let prevImage = $('.mini-circle-photo').eq(prevImageIndex);
    const bigPeopleBlock = $('.authors-main-block');
    $(bigPeopleBlock).hide();

    if (currentImageIndex === ($('.mini-circle-photo:visible:first').index())) {
        $('.mini-circle-photo').eq(prevImageIndex).show();
        $('.mini-circle-photo').eq(currentImageIndex + 3).hide();
    }
    if ((currentImageIndex) === ($('.mini-circle-photo:first').index())) {
        $('.mini-circle-photo:hidden').show();
        prevImage = $('.mini-circle-photo:last');
        currentImage.hide();
    }

    currentImage.removeClass('mini-circle-border');
    prevImage.addClass('mini-circle-border');
    for (let input of bigPeopleBlock) {
        if ($(input).data('people') === $('.mini-circle-photo.mini-circle-border').data('people')) {
            $(input).fadeIn(700);
        }
    }
}

function moveRight() {
    const currentImage = $('.mini-circle-photo.mini-circle-border');
    const currentImageIndex = currentImage.index();
    let nextImageIndex = currentImageIndex + 1;
    let nextImage = $('.mini-circle-photo').eq(nextImageIndex);
    const bigPeopleBlock = $('.authors-main-block');

    $(bigPeopleBlock).hide();
    if (currentImageIndex === ($('.mini-circle-photo:visible:last').index())) {
        $('.mini-circle-photo').eq(nextImageIndex).show();
        $('.mini-circle-photo').eq(currentImageIndex - 3).hide();
    }
    if ((currentImageIndex) === ($('.mini-circle-photo:last').index())) {
        $('.mini-circle-photo:hidden').show();
        nextImage = $('.mini-circle-photo').eq(0);
        currentImage.hide();
    }

    currentImage.removeClass('mini-circle-border');
    nextImage.addClass('mini-circle-border');
    for (let input of bigPeopleBlock) {
        if ($(input).data('people') === $('.mini-circle-photo.mini-circle-border').data('people')) {
            $(input).fadeIn(700);
        }
    }
}

function showPeople() {
    const people = $(this).data('people');
    const bigPeopleBlock = $('.authors-main-block');
    $(bigPeopleBlock).hide();

    for (let input of bigPeopleBlock) {
        if ($(input).data('people') === people) {
            $(input).fadeIn(700);
        }
    }

    $('.mini-circle-photo').removeClass('mini-circle-border');
    $(this).addClass('mini-circle-border');
}

$('.left').on('click', moveLeft);
$('.right').on('click', moveRight);
$('.mini-circle-photo').on('click', showPeople);