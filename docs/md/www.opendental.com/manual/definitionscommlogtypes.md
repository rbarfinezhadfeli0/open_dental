Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Definitions: Commlog Types

In the [Main Menu](mainmenu.html), click Setup, [Definitions](definitions.html), Commlog Types.

![](images/definitionsCommlogTypes.png)

The Commlog Types definition determines the options available in the [Commlog](commlog.html) type list.

This also assigns the default commlog type for some processes that automatically create commlogs in this definition (e.g., recall, texting, etc.). See [Commlog](commlog.html), Automated Commlogs. eServices use the first commlog type in the list.

Double-click an existing item or click **Add** to create a new item. The Edit Definition window opens.

![](images/definitionEditCommlogTypes.png)

Editing existing commlog types changes the type on current commlog entries.

* **Name**: Enter the commlog type.
* **Usage**: (Optional) Set the default commlog type when a commlog is automatically generated. Only assign one default per type. If no default is set, the first type in the list is used.
  + **APPT**: Enter APPT to set this as the default type when Comm is clicked on the [Edit Appointment](aptedit.html) window. Commlogs with this type are highlighted yellow in the Communications Log - Appointment Scheduling grid.
  + **FIN**: No longer used in the program.
  + **RECALL**: Enter RECALL to set this as the default type when a recall status is selected from the Set Status dropdown or Comm is clicked on the [Recall List](recalllist.html).
  + **MISC**: Enter MISC to set this as the default type when Commlog is clicked from the [Main Toolbar](toolbar.html).
  + **TEXT**: Enter TEXT to set this as the default type when a [Text Message](textmessages.html) is sent.
  + **REACT**: Enter REACT to set this as the default type when using the [Reactivation List](recalllistreactivation.html).
* **No Color**: Check to use no color. Commlog text displays in medium-gray.
* **Color**: Click to assign color to the text of the commlog.

**Hidden**: Check to hide a commlog type.