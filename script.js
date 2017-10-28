$('document').ready(function () {

    if ($('img').hasParent('a')) {
        $('img').height('40px');
    } else {
        console.log('Image not in nav bar');
    }


})