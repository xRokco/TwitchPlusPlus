// Saves options to chrome.storage
function save_options() {
	console.log("saving");
    var hideExtensions = document.getElementById('hideExtensions').checked
    var autoTheatre = document.getElementById('autoTheatre').checked
    var cursorMute = document.getElementById('cursorMute').checked

    chrome.storage.sync.set({
        hideExtensions: hideExtensions,
        autoTheatre: autoTheatre,
        cursorMute: cursorMute
    }, function() {
        // Update status to let user know options were saved.
        //var status = document.getElementById('status');
        //status.textContent = 'Options saved.';
        // setTimeout(function() {
        //     status.textContent = '';
        // }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        hideExtensions: false,
        autoTheatre: false,
        cursorMute: false
    }, function(items) {
        document.getElementById('hideExtensions').checked = items.hideExtensions;
        document.getElementById('autoTheatre').checked = items.autoTheatre;
        document.getElementById('cursorMute').checked = items.cursorMute;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);

$('.check').bind('click', function() {
  save_options();
});