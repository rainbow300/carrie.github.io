$(function() {
    $(window).on("resize", function() {
        var clientX = $(window).width()
        var isBigImg = clientX >= 800;
        var allitems = $("#lk_carousel .item")

        allitems.each(function(index, item) {
            var src = isBigImg ? $(item).data("lg-img") : $(item).data("sm-img")
            var imgurl = 'url("' + src + '")'
            $(item).css({
                backgroundImage: imgurl
            })
            if (!isBigImg) {
                var img = '<img src="' + src + '">'
                $(item).empty().append(img)
            } else {
                $(item).empty()
            }
        })
    })
    $(window).trigger("resize")
})