$(function() {

    // TABS

    $('.single-product-tabs__top-link').on('click', function(e) {
        e.preventDefault();

        $('.single-product-tabs__top-link').removeClass('single-product-tabs__top-link--active');
        $(e.target).addClass('single-product-tabs__top-link--active');

        $('.single-product-tabs__content-item').removeClass('single-product-tabs__content-item--active');
        $($(e.target).attr('href')).addClass('single-product-tabs__content-item--active');
    });

    //

    $('.shop-content__view-filter-btn').on('click', function() {
        if (!$(this).hasClass('shop-content__view-filter-btn--active')) {
            $('.shop-content__view-filter-btn').toggleClass('shop-content__view-filter-btn--active')
        }
    });

    $('.list-btn').on('click', function() {
        $('.product-item').addClass('product-item--list');
    });
    $('.grid-btn').on('click', function() {
        $('.product-item').removeClass('product-item--list');
    });


    // STYLER 

    $('.stylized-select, .single-product__number').styler();


    // ionRangeSlider

    $('.price-filter__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function(data) {
            $('.price-filter__from').text(data.from);
            $('.price-filter__to').text(data.to);
        },
        onChange: function(data) {
            $('.price-filter__from').text(data.from);
            $('.price-filter__to').text(data.to);
        }
    });


    // SLICK

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.single-product__thumbnail').slick({
        asNavFor: '.single-product__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
        arrows: false
    });
    $('.single-product__big').slick({
        asNavFor: '.single-product__thumbnail',
        draggable: false,
        arrows: false,
        fade: true

    });

    $('.post-slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7pt" height="14pt" viewBox="0 0 7 14" ><path  d="M 0.867188 6.535156 L 4.585938 2.816406 C 4.84375 2.558594 5.257812 2.558594 5.511719 2.816406 L 6.128906 3.433594 C 6.386719 3.691406 6.386719 4.105469 6.128906 4.359375 L 3.496094 7 L 6.132812 9.636719 C 6.390625 9.894531 6.390625 10.308594 6.132812 10.5625 L 5.515625 11.183594 C 5.257812 11.441406 4.84375 11.441406 4.589844 11.183594 L 0.871094 7.464844 C 0.609375 7.207031 0.609375 6.792969 0.867188 6.535156 Z M 0.867188 6.535156 "/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7pt" height="14pt" viewBox="0 0 7 14" ><path d="M 6.132812 7.464844 L 2.414062 11.183594 C 2.15625 11.441406 1.742188 11.441406 1.488281 11.183594 L 0.871094 10.566406 C 0.613281 10.308594 0.613281 9.894531 0.871094 9.640625 L 3.503906 7.003906 L 0.871094 4.367188 C 0.613281 4.109375 0.613281 3.695312 0.871094 3.441406 L 1.484375 2.816406 C 1.742188 2.558594 2.15625 2.558594 2.410156 2.816406 L 6.128906 6.535156 C 6.390625 6.792969 6.390625 7.207031 6.132812 7.464844 Z M 6.132812 7.464844 "/></svg></button>',
        infinite: false
    });

    // RateYO

    $(".stars").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true,
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" <g> <path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
    });


    // TIMER

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = $('#timer').attr('data-time');
    initializeClock('timer', deadline);

});