/*Create a Checklist: Independent Practice
You'll add the ability to complete tasks in the list. Your program must complete the following rules:
- Through jQuery add a "complete task" link at the end of each to-do item.
- When clicked, the link will cross out the current task (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new task added by the user needs to also have the "complete task" link akt the end.
- Bonus: when user completes task, remove the task from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.
*/

//show date
$(function () {
  var today = new Date();
  var year = today.getUTCFullYear();
  var month = today.getUTCMonth() + 1;
  var date = today.getUTCDate();
  var now = 'Today is ' + month + '/' + date + '/' + year;

  $("#date").html(now);
});

//name the list 'function' by clicking on the list name (also want to be able to just press 'enter' and the cursor goes to the input item field)
var changeListName = function() {
    $(this).val('').val();
};

//add item field clear on click 'function'
var clearField = function() {
  $(this).val('');
};

//add items to the list function
var addNewItem = function(event) {
  event.preventDefault();
  var text = $("#newItem").val();

  if (text == '') {
    return false;
  } else {
    $("#todo-list").append('<li class="listItem"><input type="checkbox" class="done"/>' + ' ' + text + ' ' + '<button class="delete">x</button></li>');
    $("#newItem").val('');
    //I want to make the font color darker once the user is typing their new item
    //$("input#newItem").val().css('color', '#808080');
  };
};

//delete the list item function
var deleteItem = function() {
  $(this).parent().remove();
};

//line-through when checkbox is checked
var checkItem = function() {
  if ($(this).parent().css('textDecoration') == 'line-through') {
  	$(this).parent().css('textDecoration', 'none');
  } else {
  	$(this).parent().css('textDecoration','line-through');
  };
};


//all execution/event handler codes
$(function() {
  //name the list
  $("#name").on('click', changeListName);

  //add item field clear on click
  $("#newItem").on('click', clearField);//I want to add the function that fills in the value 'Add your list items' when the user doesn't put anything on the input

  //add items to the list
  $("#newItemButton").on('click', addNewItem);

  //delete the list item
  //$(".delete").on('click', deleteItem);
  $(document).on('click', '.delete', deleteItem);

  //line-through when checkbox is checked
  //$(".done").on ('click', checkItem);
  $(document).on('click', '.done', checkItem);
});


