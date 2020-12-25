$( document ).ready(function() {
    $(".nav-tabs .nav-link").on("click",function() {
        oldElem = $(".nav-tabs .nav-link.active").attr("data-target");
        $(oldElem).addClass("d-none").removeClass("d-block");
        $(".nav-tabs .nav-link").removeClass("active");
        $(this).addClass("active");
        dataId = $(this).attr("data-target");
        $(dataId).addClass("d-block").removeClass("d-none");
    });

    $("tr").on("click",function() {
        $('#content-table').removeClass("d-lg-block");
        $('#detail-section').addClass("d-block").removeClass("d-none");
    });

    $(".back-btn").on("click",function() {
        $('#detail-section').addClass("d-none").removeClass("d-block");
        $('#content-table').addClass("d-lg-block");
    })
})