$(function() {

    // TABS

    $('.single-product-tabs__top-link').on('click', function(e) {
        e.preventDefault;
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


    // RateYO

    $(".stars").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true,
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