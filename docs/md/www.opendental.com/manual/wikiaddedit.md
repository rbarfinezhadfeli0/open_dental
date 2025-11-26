Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Wiki Edit

Add and edit wiki pages to meet the needs of the practice.

In the [Wiki](wiki.html), click **Edit**.

![](images/wikiEdit.png)

Wiki pages are displayed in html in a browser control inside of Open Dental. Pages are not stored internally as HTML; they are only processed from [Wiki Markup](wikimarkup.html) to HTML as they are displayed. Only the wiki markup can be edited. There is no direct control over the actual HTML results. This results in consistent pages and fast editing.

Data is stored in the Open Dental database. Images are stored in the [A to Z Folder](atozfolder.html) in the *Wiki* subfolder.

## Edit Toolbar

This toolbar is available when creating or editing a wiki page.

![](images/wikiPageEdit.png)

* **Save**: Saves changes and closes the edit window.
* **Save as Draft**: Save a draft version of the page without altering the original. Wiki page edits are also automatically saved as drafts when Open Dental is force closed, such as during an update, as long as there are no code validation errors.
* **Int Link**: Add a link to another wiki page. Opens the wiki search, highlight a page, and click **OK** to add the link.
* **Bookmark**: Add a bookmark to the top of a long wiki page to jump to a specified section of that page. See Creating Bookmarks section for details.
* **File**: Add a link to a file on the network. Type the file path or click [...] to search for the file. Click **OK** to add the link.
* **Folder**: Add a link to a folder on the network. Type the folder path or click [...] to search for the file. Click **OK** to add the link.
* **Ext Link**: Add a link to an external website. Enter the full URL path: **http://www.opendental.com**) and Display Text. Click **Save** to add the link.
* **Heading 1, 2, 3**: Highlight text and click to format text as Page Title (h1), Subtitle (h2), or smaller category (h3). Properties of all <h> tags can be customized in the embedded stylesheet (See [Wiki](wiki.html), Setup).
* **Table**: Create a table to display on the wiki. See Tables section for details.
* **Image**: Click to add an image to the wiki page. See Images section for details.
* **Lock**: Lock wiki page so that edits can only be made by users with *Wiki Admin* [Permission](permissions.html).
* **Undo**: Undo the previous action. Only able to undo one action.
* **Italic**: Highlight text and click to italicize.
* **Color**: Highlight text and click to override the text color. the default color override is red. Type a different color name in the formatting text from the Markup area (e.g., text:blue).
* **Font**: Highlight text and click to add a font override. The default font override is courier. Type a different font name in the formatting text from the Markup area (e.g., font:arial). Other examples include times, serif, etc.

Additionally, advanced users may want to change defaults in the Wiki Setup stylesheet.

## Wiki Markup and Page Preview

Make changes to a wiki using the interface below the toolbar.

![](images/wikiPageEditing.png)

The [Wiki Markup](wikimarkup.html) (i.e., raw wiki text) is displayed on the left. Type directly in the markup area and use the toolbar options to make changes. A live preview of the formatted wiki page is shown on the right.

Click **Save** in the toolbar to keep changes and publish to the wiki.

Click **Save as Draft** to keep changes without publishing. Drafts can be accessed from the wiki page toolbar.

## Create a New Page

There are several options to create a [Wiki](wiki.html) page.

Option 1: Toolbar

1. In the toolbar, click **+Add**.
2. Enter the Page Title and click **Save**. Text entered determines the Page Name and Page Title (heading 1).

Option 2: Using Brackets

* On any existing page, click **Edit**.
* Type [[Example Wiki Title]] to link to a wiki.
* Click **Save** in the toolbar.
* If a page does not exist for the linked wiki, there is a prompt to create a new page. Click **Yes** to create the new Wiki page.

Option 2: Existing Page

1. On any existing page, click **Edit**.
2. Click **Int Link**.
   ![](images/wikAllPages.png)

   Note: To link to an archived wiki page, check **Include Archived Pages**. Archived pages are prepended with *(Archived)*.
3. Click **Add**.
   ![](images/wikiPageTitle.png)
4. Enter the page title and click **Save** to create a new wiki page and link to it on the existing page.

Note: Page Name determines how the page is labeled in Search results. Both Page Name and page content factor in a search ranking.

## Creating Bookmarks

Add bookmarks to a wiki page to quickly move to another area of the page.

1. When editing a wiki, click the area of the wiki page to be bookmarked and click **Bookmark**.
2. Click Bookmark. Insert Internal Bookmark is opened.
![](images/wikiBookmark.png)3. Enter an ID and a Display Text. These do not have to match.
4. Click **Save**. Text is inserted into the Markup area where the text cursor is currently placed.
5. Cut the <a href="#displaytext"></a> code and paste it where the link should appear. Typically, at the top of the page.
6. The <div id="ID"></div> code marks where the bookmark moves to.

## Tables

In the Markup area, move the text cursor (click in the area) and click **Table** to insert a new table at the cursor. To edit an existing table, double-click the table text in the Markup area. Edit Wiki table is opened.

![](images/wikitableedit.png)

Tables cannot be edited directly in the Markup area. Instead, the Table interface must be used. Borders are always 1, cellspacing 0, cellpadding 0. Carriage returns are allowed inside cells. There is no control over shading or colors.

**Man Edit**: Open the raw table formatting text to make changes manually.

Column: Select buttons to edit columns.

* **L**: Select a cell and click to move the cell left one column.
* **R**: Select a cell and click to move the cell right one column.
* **Headers**: Click to edit the column headers. Column width and header names can be edited.
* **Add Column**: Click to create a new column to the right of the currently selected cell.
* **Delete**: Click to remove the currently selected column and any text in the contained cells.

Row: Select buttons to edit rows.

* **Up**: Select a cell and click to move the cell up one row.
* **Down**: Select a cell and click to move the cell down one row.
* **Add Row**: Click to add a new row below the currently selected row.

**Paste Cells**: Click to paste data from another table. To copy data from an external table to a wiki table, users must be running Google Chrome. If it is a complex table, it may need to be copied/pasted in pieces. First, copy the external table cells. Click **Table**, ensure there are enough columns, then click Paste Cells.

To bold or italicize the text within a cell, edit the text outside of the Table window or manually type the formatting.

## Images

Click **Image** when editing a wiki to insert an image.

![](images/wikiInsertImage.png)

* **Available Images**: Lists images added to the *Wiki* folder within the [A to Z Folder](atozfolder.html). A preview of the highlighted image is shown next to the list.
* **Import**: Click to add a new image to Available Images.

Highlight a file and click **OK** to add it to the wiki.

## Formatting & Keywords

**Keywords**: Add keywords to a page using the following pattern: [[keywords: office, tasks, workflow, employee, end of day, closing tasks]] Keywords can be inserted anywhere in the wiki. There is a 255-character limit.

**Bulleted Lists**: Begin a line with an asterisk (\*) to create a bulleted list. Do not add a space after the asterisk. A line without an asterisk ends the list. Sub-lists are not supported.

* \*first item
* \*second item
* \*last item

**Numbered Lists**: Begin a line with a hash (#) to create a numbered list. Do not add a space after the hash. A line without a hash ends the list. Sub-lists are not supported.

1. #first item in list
2. #second item
3. #last item

**Special Characters**: < and >. These characters must be prefixed with an ampersand (&). Example: &> or &<