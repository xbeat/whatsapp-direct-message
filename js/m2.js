$(document).ready(function () {
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    $("#open-button").click(function () {
        var mob_num = $('#mob-num').val();
        var country_code = $('#country-code').val();
        var url = "https://wa.me/" + country_code + mob_num + "?text="
        openInNewTab(url)
    });

});