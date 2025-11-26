Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

User Query

Compose queries to retrieve information from the database that is not accessible through standard reports.

In the [Main Menu](mainmenu.html), click [Reports](reports.html), User Query.

![](images/queryrun.png)

Alternatively, in [Standard Reports](reportsstandard.html), click User Query.

When opened from Main Menu, Report dropdown this window can remain open while navigating other areas of Open Dental. When opened from Standard Reports, this window must be closed to navigate to other areas of Open Dental.

* ![](images/youtubeLogo.png) See our videos: [QuickTip: Find and Run a Query in Open Dental](https://youtu.be/FBk3yWwYC-c) and [Custom Query Process Overview](https://youtu.be/MDkcFVKnzu4).
* ![](images/infographicIcon.png) See our infographic, [Searching for Query Examples](https://opendental.com/resources/SearchingForQueryExamples.pdf), for a step-by-step guide on finding and running queries.

Users must have the *User Query* permission to run and change variables in released user queries.
 Users must have the *User Query Admin* permission to write, edit, run, save, and delete queries.

## Running a Query

**Text Box:** Displays the query text. Users with the *User Query Admin* permission, can enter text directly in this box. For users without the permission, this box is read-only.

* **Right-Click Options**: Right-click in the user query text box for additional options.
  + Cut: Delete selected text.
  + Copy: Copy selected text to clipboard.
  + Paste: Paste clipboard text contents into text box.
  + Select All: Select all text in the text box.
  + Comment Selection: Designate selected text as a comment in the query. Selected text will not be run as part of the query.
  + Remove Comment from Selection: Removes comment designation from selected text. Selected text will now be run as part of the query.

**Favorites:** Open [Query Favorites](queryfavorites.html).

**Add to Favorites:** Add the query text currently in the text box to Query Favorites.

**Copy:** Copy the query text in the text box to the clipboard.

**Paste:** Paste any text currently on the clipboard into the text box.

**Submit Query:** Run the query text currently in the text box. When long queries are running, the Submit button changes to **Stop Execution**. Click to cancel a large query that may take a long time to run.

## Format

Change settings to determine how query results are displayed.

**Format:** Select how to view the results. The default is determined by the *Default to 'Raw' format in User Query window* setting in [Report Setup: Misc Settings](reportmiscsettings.html)

* **Human-readable:** This is an easy-to-read format. Some column names that are used in our tables may display as follows:
  + Dates may be converted to standard format.
  + Dollar amounts may receive the extra zeros and be right aligned.
  + Enumerations may convert (built-in lists like areas of the mouth, patient status, gender, etc.).
  + Definitions linked to the definition table get converted.
  + Provider numbers show the provider's abbreviation.
  + Patient numbers show patient name.
  + True/false: Boolean values show true/false.
* **Raw:** In this format, the results are not as easy to read, for example there may be meaningless numbers or no extra zeros on dollar amounts.

![](images/queryraw.gif)

**Column Alignment**: Choose the alignment of the displayed query results.

**Show Row Numbers**: Choose to number query rows.

* Checked: Each row of query results is numbered.
* Unchecked: Query rows are not numbered.

**Enable word wrap**: Choose to wrap long text that may otherwise be cut off.

* Checked: Query results exceeding column width are wrapped onto a new line making the row wider.
* Unchecked: Query results exceeding column width are cut off.

**Print Orientation**: Choose whether to print the report in landscape or portrait.

## Query Results

**Title:** The title of the query in the text box, if one exists. When running a query from Query Favorites, this box is prefilled with the title saved to the favorite. Users can type into this box to label the query before printing.

**Query Results**: By default, the results are displayed in human-readable format. Columns vary based on the query being run. If a column header is prefaced with a $, the cells are always formatted as a dollar amount.

* Display options:
  + Use the vertical and horizontal scrollbars to move up and down, left and right.
  + Click a column header to reorder the results in ascending or descending order.

    Note: Results are sorted alphabetically by strings or words. To sort another way, it must be specified in the query itself.
  + To change the width of a column, drag the splitter bar between the headers.
* **Right-click options**:
  + Copy Cell Text: Copy data from the selected cell only.
  + Copy Rows: Copy all data from selected rows in a tab-delimited format.

    Note: To select multiple rows of data, use CTRL + Click or Shift + Click.
  + Go To Patient: (Only available for queries with a column of PatNum) The patient of the selected row is selected in Open Dental.

Once the table displays the way you want it, there are several options:

* **Print Preview:** View the query like a printed report. Some columns may show a grand total at the bottom of the report while in preview mode. Zoom in or use the blue arrows to scroll through pages. Click Query View to return to regular query view.
* **Print:** Print the query to the default printer.

  Note: If needing to print a page range, set your Printer Setup to prompt before printing. In the printer settings prompt, set the page range you wish to print.
* **Export .txt**: Save the query as a tab-delimited text file.
* **Export .csv**: Save the query as a comma-delimited CSV file.

Note: Queries can be exported for use in another program (e.g., Microsoft Word or Excel). Typical uses include letter merge, spreadsheet analysis, or financial imports. Set the default folder for exported queries in [Data Paths Setup](paths.html) (OpenDentalExports).

Hints:

* To include a title/header on printed query results, save the query to your Query Favorites, and enter the title. Then, run the query again.
* Advanced users can run queries directly on the database from outside programs using ODBC or other methods.

Note:

* To also run command queries, user must also have the Command Query permission.
* If using [Random Primary Keys](replicationprimarykeys.html), queries with **CREATE TABLE** or **DROP TABLE** syntax can only run on the computer named as the User Query Server on the Replication Setup window ([Replication](replicationprimarykeys.html)).

## Find a Query

* [Query Favorites](queryfavorites.html): Access a customizable list of queries that are used often in your practice. Designated users can only run released queries. User Query Admin permission is needed to add, edit, and delete query favorites, as well as control which queries can be run by others.
* [Query Examples](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx): Search through more than 1000 queries that have been commissioned by our customers, then copy/paste into Query Favorites or the Query window.
* [Custom Queries](queryrequest.html): For a fee, Open Dental Support can create a custom query.
* Write your own query, then run and/or save it to your favorites.

Security: Access to queries is controlled by user [Security Permissions](permissions.html).

* User Query: User can only run released queries from the Reports, User Query submenu.
* User Query Admin: User can run queries, and edit, add and delete query favorites.
* Command Query: User can run SQL commands (non-select queries)

[Programming Resources, Database Documentation](http://opendental.com/site/programmingresources.html) has a list of tables and columns in the Open Dental database.