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
        $('#content-table-mobile').removeClass("d-block").addClass("d-none");
        $('#detail-section').addClass("d-lg-block").removeClass("d-none");
    });

    $(".back-btn").on("click",function() {
        $('#detail-section').addClass("d-none").removeClass("d-block");
        $('#content-table').addClass("d-lg-block");
        $('#content-table-mobile').removeClass("d-none").addClass("d-block");
    });

    $("#add-condition").on("click",function() {
        var templateStr = '<tr><td class="width-51"><div class="d-flex align-items-center"><div class="mr-2 d-none d-md-block"><b>Từ</b></div><input class="form-control col-sm-7" type="text" required></div></td><td class="width-51"><div class="d-flex align-items-center"><input class="form-control col-sm-7" type="text" required><div class="mx-2 currency-ico d-none d-md-block"><b>VND</b></div><div class="bg-secondary percent-ico"><b>%</b></div></div></td><td><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></td></tr>';
        $("#type-info table tbody").append(templateStr);
        $("#type-promotion table tbody").append(templateStr);
    });
})