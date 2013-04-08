$(function() {

  $('form').submit(function() {
    var url = $(this).find('input').val();
    var cacheBust = new Date().getTime();
    url = url + '?_=' + cacheBust;

    chrome.tabs.executeScript({
      code: 'var js = document.createElement("script"); js.async=true; js.src="' + url + '"; document.body.appendChild(js);'
    });

    window.close();
    return false;
  });

});

