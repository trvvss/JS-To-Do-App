//Problem: User interactiion doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

//Add a new task
  //When the button is pressed
  //Create new list item with the text from #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements, needs modified and appended
//Edit an existing task
  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //switch from .editMode
      //label text becomes the input's value
    //else
      //switch to .editMode
      //input value becomes the label's text

      //toggle .editMode on the parent

//Delete an existing task
  //When the delete button is pressed
    //remove the parent list item from th ul


//Mark a task as complete
  //when the checkbox is checked
    //append the task list item to the #completed-tasks

//Mark a task as incomplete
  //when the checkbox is unchecked
    //append the task list item to the #incomplete-tasks
