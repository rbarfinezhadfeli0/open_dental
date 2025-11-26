Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Wiki List

Wiki Lists are a way to store non-clinical data in a convenient table format.

In the [Wiki](wiki.html), click **Lists**.

![](images/wikiLists.png)

Wiki lists are stored as tables in the database, so they are both searchable and reportable.

Click **Add** to create a new list, or double-click an existing list to view or edit.

## View or Edit a Wiki List

![](images/wikiEditList.png)

* **Search**: Begin typing to search the wiki list.
  + If **Highlight** is selected, matching entries will highlight yellow and the list will automatically scroll to the first match.
  + If **Filter** is selected, only the matching entries will display as unmatching entries are filtered out.
* **Adv Search**: Click to launch the Advanced Search window.
  ![](images/wikiEditAdvSearch.gif)
  1. Select a column or columns to limit the search to only those columns.
  2. Click OK. Search will change to Advanced Search in the Edit Wiki List window.
  3. Click Clear to return to the normal search.
* **Include Hidden Columns**: Check to include any columns marked as hidden.

List:

* **Rename**: Click to rename the currently selected wiki list.
* **History**: Click to view a history of edits made to the selected list.
  ![](images/wikilisthistory.png)
  + Click an item in the Wiki List History column to view the Old and New Revisions.
  + **Revert**: Click to revert the wiki list to the version selected in the Wiki List History column.

Columns:

* **L / R**: Select a column, then click to move the column to the left or right.
* **Edit**: Click to edit. The Edit Wiki List Headers window will open. See below for details.
* **Add**: Click to add a new column.
* **Delete**: Select a column, then click to delete.

Rows:

* **Add**: Click to add a new row. The Edit Wiki List Item window will open. See below for details.
* Similarly, double-click on an existing row to make edits.

## Edit Wiki List Headers

![](images/wikilistheaderedit.png)

Each column can be entered as a free text field, or a pick list item.

* For free text, highlight the column, then leave the Pick List Options section blank.
* For a Pick List, highlight the column, then click **Add** to add pick list options.
* To remove a pick list option, highlight the item then click **Remove**.

**Hide Column**: Highlight a column, then click to mark it as hidden. Hidden columns retain information and can be viewed as needed in the wiki list.

Click OK to save changes.

Note: When you first create a list, there will be a static column on the left named "tablename" Num. This is the primary key column and cannot be moved or renamed. It can be changed in width or hidden.

## Edit Wiki List Item

![](images/wikiListItem.png)

Click into a value field to enter data. Type to enter free text, or use the dropdown to select from the pick list.

Click OK to save changes. Click **Delete** to delete the row.

## Generate a Query

Each wiki list represents a table in the database named using the follow format: wikilist\_listname. You can generate a query from a wiki list using [User Query](queryoverview.html). Example: "SELECT \* FROM wikilist\_employeename"