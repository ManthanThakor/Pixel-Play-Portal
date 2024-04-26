$(document).ready(function() {
    // Switch tabs
    $('.account-settings-links a').on('click', function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // File upload
    $('.btn-outline-primary').click(function() {
        $(this).siblings('input[type=file]').click();
    });

    // Update file name on file selection
    $('.btn-outline-primary input[type=file]').change(function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = $('<img>').attr('src', e.target.result).addClass('d-block ui-w-80');
            $('.uploaded-image').empty().append(img);
        };
        reader.readAsDataURL(file);
    });

    // Save changes button
    $('.btn-primary').click(function() {
        // Perform actions to save changes here
        alert('Changes saved successfully!');
        // Redirect to index.html after saving changes
        window.location.href = 'index.html';
    });

    // Cancel button
    $('.btn-default').click(function() {
        // Perform actions to cancel changes here
        alert('Changes cancelled!');
        // Redirect to index.html when cancelling changes
        window.location.href = 'index.html';
    });

    // Home button
    $('.btn-home').click(function() {
        window.location.href = 'index.html';
    });
});
