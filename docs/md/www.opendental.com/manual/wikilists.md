Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Wiki List

Wiki Lists are a way to store non-clinical data in a convenient table format.

In the [Wiki](wiki.html), click **Lists**.

![](images/wikiLists.png)

Wiki lists are stored as tables in the database, so they are both searchable and reportable.

## View or Edit a Wiki List

Click **Add** to create a new list, or double-click an existing list open Edit Wiki List to view the list or make changes.

![](images/wikiEditList.png)

* **Search**: Begin typing to search the wiki list.
  + If **Highlight** is selected, matching entries are highlighted yellow and the list automatically scrolls to the first match.
  + If **Filter** is selected, only the matching entries are displayed as unmatching entries are filtered out.
* **Adv Search**: Click to launch the Advanced Search window.
  ![](images/wikiEditAdvSearch.png)
  1. Highlight column(s) to limit the search to only those columns.
  2. Click **OK**. *Search* changes *Advanced Search* in Edit Wiki List.
  3. Click **Clear** to return to the normal search.
* **Include Hidden Columns**: Check to include any columns marked as hidden.

List:

* **Rename**: Click to rename the currently selected wiki list.
* **History**: Click to view a history of edits made to the selected list.
  ![](images/wikilisthistory.png)
  + Click an item in the Wiki List History column to view the Old and New Revisions.
  + **Revert**: Click to revert the wiki list to the version selected in the Wiki List History column.

Columns:

* **L / R**: Select a column, then click to move the column to the left or right.
* **Edit**: Click to edit column details. See Wiki List Headers section for details.
* **Add**: Click to create a new column.
* **Delete**: Select a column, then click to remove it.

Rows:

* **Add**: Click to add a create a new row. See Edit Wiki List Item section for details.
* Similarly, double-click on an existing row to make edits.

## Edit Wiki List Headers

![](images/wikilistheaderedit.png)

Edit the column width, hide or delete columns, and set up pick list options from here. Additional columns must be added from Edit Wiki List.

Wiki List Headers: Lists all columns added to the table. Click a field to edit.

* Column Name: The header text for the column.
* Width: Enter a number to change the column width in the table.
* Is Hidden: X indicates this column is not shown in the table. Highlight a column and click **Hide Column** / **Show Column** to change the column visibility.
* For free text, highlight the column, then leave the Pick List Options section blank.
* For a Pick List, highlight the column, then click **Add** to add pick list options.
* To remove a pick list option, highlight the item then click **Remove**.

Pick List Options: Data can be entered by free typing or selecting a pick list item from a dropdown. If pick list options exist for a column, typing is disabled for the column when editing a wiki list item. Highlight a column to view or edit its pick list options.

* **Add**: Create a pick list option for the selected column.
* **Delete**: Remove the selected pick list option.

**Hide Column**: Highlight a column, then click to mark it as hidden. Hidden columns retain information and can be viewed as needed in the wiki list.

Click **Save** to keep changes.

Note: When a list is created, there is a static column named *[tablename]Num*. This is the primary key column used in the database and cannot be moved or renamed. It can be changed in width or hidden.

## Edit Wiki List Item

![](images/wikiListItem.png)

Click into a value field to enter data. If there are pick lists options, choose from the dropdown. If there are no pick list options, type text manually.

**Delete**: Click to remove the row.

Click **Save** to keep changes.

## Generate a Query

Each wiki list represents a table in the database named using the follow format: wikilist\_listname. The wiki list can be used when generating a [User Query](queryoverview.html). Example: SELECT \* FROM wikilist\_employeename