window.addEventListener('load', function() {

    arraysOfOptions = document.querySelectorAll('select#fontfamily > option');
    console.log(arraysOfOptions);
    for (var i = 0; i < arraysOfOptions.length; i++) {
        arraysOfOptions[i].style.fontFamily = arraysOfOptions[i].value;
    }

    // make iframe designable
    editor = wysiwyg.document;
    editor.designMode = 'ON';

    // call bold button with its id
    boldChange = document.getElementById('bold');
    boldChange.addEventListener('click', function() {
            editor.execCommand("bold", false, null);
        })
        // call italic button with its id
    italicChange = document.getElementById('italic');
    italicChange.addEventListener('click', function() {
        editor.execCommand("italic", false, null);
    })

    // call strike button with its id
    strikeChange = document.getElementById('strike');
    strikeChange.addEventListener('click', function() {
            editor.execCommand("strikethrough", false, null);
        })
        // call left button with its id
    leftChange = document.getElementById('left');
    leftChange.addEventListener('click', function() {
        editor.execCommand("justifyLeft", false, null);
    })

    // call right button with its id
    rightChange = document.getElementById('right');
    rightChange.addEventListener('click', function() {
        editor.execCommand("justifyRight", false, null);
    })


    // call center button with its id
    centerChange = document.getElementById('center');
    centerChange.addEventListener('click', function() {
        editor.execCommand("justifyCenter", false, null);
    })

    // call superscript button with its id
    superscriptChange = document.getElementById('superscript');
    superscriptChange.addEventListener('click', function() {
        editor.execCommand("superscript", false, null);
    })



    // call subscript button with its id
    subscriptChange = document.getElementById('subscript');
    subscriptChange.addEventListener('click', function() {
        editor.execCommand("subscript", false, null);
    })


    // call subscript button with its id
    ulChange = document.getElementById('ul');
    ulChange.addEventListener('click', function() {
        editor.execCommand("insertUnorderedList", false, null);
    })


    // call subscript button with its id
    olChange = document.getElementById('ol');
    olChange.addEventListener('click', function() {
        editor.execCommand("insertOrderedList", false, null);
    })


    // call bgcolor button with its id
    bgcolorChange = document.getElementById('bgcolor');
    bgcolorChange.addEventListener('change', function(e) {

        editor.execCommand("backColor", false, e.target.value);
    })


    // call fontcolor button with its id
    fontcolorChange = document.getElementById('fontcolor');
    fontcolorChange.addEventListener('change', function(e) {

        editor.execCommand("foreColor", false, e.target.value);
    })

    // call fontfamily button with its id
    fontfamilyChange = document.getElementById('fontfamily');
    fontfamilyChange.addEventListener('click', function(e) {

        editor.execCommand("fontName", false, e.target.value);
    })

    // call fontsize button with its id
    fontsizeChange = document.getElementById('fontsize');
    fontsizeChange.addEventListener('click', function(e) {

        editor.execCommand("fontSize", false, e.target.value);
    })


    // call fontsize button with its id
    linkChange = document.getElementById('link');
    linkChange.addEventListener('click', function() {
        url = prompt('enter your URL', 'www.');
        editor.execCommand("createLink", false, url);
    })


    // call unlink button with its id
    unlinkChange = document.getElementById('unlink');
    unlinkChange.addEventListener('click', function() {

        editor.execCommand("unlink", false, null);
    })


    // call undo button with its id
    undoChange = document.getElementById('undo');
    undoChange.addEventListener('click', function() {

        editor.execCommand("undo", false, null);
    })


    // call undo button with its id
    redoChange = document.getElementById('redo');
    redoChange.addEventListener('click', function() {

        editor.execCommand("redo", false, null);
    })




});