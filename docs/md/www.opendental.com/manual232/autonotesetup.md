Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Auto Note Setup

In the [Main Menu](mainmenu.html), click Setup, Auto Notes.

![](images/autonoteSetup.png)

[Auto Notes](autonotes.html) are templates used to insert large complex notes that you enter frequently in various text boxes throughout Open Dental. In addition to static text, prompts can offer a selection of responses or the ability to enter text.

All existing Auto Notes are listed, organized in a tree view.

* Click + to expand a folder tree.
* Click - to collapse.
* Check or uncheck the **Collapse All** checkbox to quickly collapse or expand all folders.

To create or reorder folders, see [Definitions: Auto Note Categories](definitionsautonotes.html).

To move an Auto Note to a different folder, select the Auto Note then drag it to another folder.

**Add**: Add a new Auto Note. See Auto Note Edit below for details

**Export**: Click to open the Auto Note Export window. See Auto Note Export below for details.

**Import**: Click to select a *json* file of Auto Notes exported from another database to be imported. Imported Auto Notes do not retain folder organization. It may be required to re-add them to folders as desired.

## Auto Note Edit

On the Auto Notes window, click Add, or double-click on an existing Auto Note to edit. The Auto Note Edit window opens.

![](images/autonoteEdit.png)

The current text in the note is on the left. Prompts within the note are indicated by [Prompt:""].

* **Name**: Enter an identifying name for the Auto Note.
* **Text**: Enter the static text of the Auto Note.
* **Add**: Add new prompt options. See below for details.
* **Available Prompts**: All prompts currently setup list here. To insert a prompt, position the cursor in the Text field at the point of insertion, highlight the prompt, then click Insert. See Auto Note Prompt Edit below for details.

## Auto Note Prompt Edit

In the Auto Note Edit window, click Add to create a new prompt, or double-click an existing prompt to edit.

![](images/autonotePrompt.png)

* **Description**: Identifying name of the prompt.
* **Type**: There are three types of prompts:
  + OneResponse: User can select one option from a list of options.
  + MultiResponse: User can select many options from a list of options.
  + Text: User can enter free-form text.
* **Prompt text**: The text that indicates what information is requested. There is a 50 character limit. Prompts longer than 50 characters can be entered in the Text field of the Auto Note Edit window.
* **Possible responses**: For OneReponse or MultiResponse types only. Enter one response option per row.
* **Default Text**: For Text types only. The default text that is entered as the response. May leave blank. Users can edit as needed.
* **Auto Note Response**: For OneResponse only. Click to open Auto Note Response Picker.
  ![](images/autoNoteResponsePicker.png)
  + **ResponseText**: Enter the text for the response. This is in addition to any Auto Note text.
  + Select an Auto Note from the **Available Auto Notes** grid to assign to the response line.
  + Click **OK** to close the window and save changes.
* **Up/Down**: Quickly reorder the list. Click an item then click up or down.

## Auto Note Export

In the Auto Notes window, click **Export**. The Auto Note Export window displays.

![](images/autonoteExport.png)

* **Select All**: Check all Auto Notes to export.
* **Clear Selection**: Deselect Auto Notes to export.
* **Export Selected**: Export the selected Auto Notes. When the File Explorer opens, select where to export Auto Notes.