// Cached Element References
const $deleteBtn = $('#delete-btn');
const $modal = $('#modal');

$deleteBtn.on('click', function(){
    $modal.modal({
        fadeDuration: 500
    });
})