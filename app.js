$(document).ready(function() {

  //add item from input text box:

  $('#js-shopping-list-form').submit(function(event) {
    var item = $('#shopping-list-entry').val();
    console.log(item);
    $('ul')
    .append('<li><span class="shopping-item">' + item + '</span>' +
              '<div class="shopping-item-controls">' +
                '<button class="shopping-item-toggle">' +
                  '<span class="button-label">check</span>' +
                '</button>' +
                '<button class="shopping-item-delete">' +
                  '<span class="button-label">delete</span>' +
                '</button>' +
              '</div>' +
            '</li>');
    $('#shopping-list-entry').val('');
    event.preventDefault();
  });

    //check/uncheck items on list
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
       console.log($(this).parents('li').find('.shopping-item'))
     $(this).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });



    //remove items from list
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
     $(this).closest('li').remove();
    });

  });


//use click event on delete to remove div from container