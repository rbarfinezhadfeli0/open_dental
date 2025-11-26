Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Query Favorites

User queries can be saved to quickly access again later.

In [User Query](queryoverview.html), click Favorites.

![](images/queryRunReleased.png)

Alternatively,

* In the [Main Menu](mainmenu.html), click Reports, User Query Favorites.
* In [Advertising - Select Patients](advertisingselectpatients.html), check User Query. Click Favorites.

Query Favorites is a place to store frequently used queries, run queries, and control user access to queries. From here you can run, add, edit, and delete query favorites. Only queries a user has access to will display.

Security permissions control how much access a user has to queries.

* *User Query*: User can only view and run released queries from the Query Favorites list.
* *User Query Admin*: User can run all queries, as well as add, edit, or delete query favorites.

**Search**: Type a keyword in the search to narrow results.

**Show Text**: Click to view the query text for the selected query. The text will display on the right.

* **Hide Text**: Click to hide query text.
* **Wrap Text**: Check to wrap query text.

**Delete**: Click to delete the selected query from the list.

**Edit**: Click to edit the query. See Add or Edit a Query Favorite below for details.

**+ New**: Click to add a new query. See Add or Edit a Query Favorite below for details.

**Released**: The Released column determines which queries are available to users without the *User Query Admin* permission. Check or uncheck queries as needed.

## Add or Edit a Query Favorite

Click Add to add a new query favorite. Highlight a query and click Edit to edit query details. The Edit Favorite window will open.

![](images/queryfavedit.gif)

* **Title:** Enter the title of the query.
* **Released**: Determines who can run and edit this query.
  + Checked: This query can be run by users with the *User Query* permission.
  + Unchecked: This query can only be run and edited by users with the *User Query Admin* permission.
* **Prompt for SET statements**:
  + Checked: Prompt the user to define user variables (e.g. date range, providers, etc.).
  + Unchecked: Do not prompt the user to define user variables. Change variables in the Query Window instead.
* **Query Text:** Copy/paste or change the query text as needed. For a list of existing queries, see [Query Examples](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx).
* **Export File Name:** Optional. Enter the default file name to use when this query data is exported.

## Run a Favorite Query

Double-click a query from the list to run the report.

* If there are no SET statements, or *Prompt for SET statements* is unchecked, the [User Query](queryoverview.html) window will open.
* If *Prompt for SET statements* is checked and the query contains a SET statement, the Query Variables window will open.
  ![](images/queryVariables.gif)
   Enter values, then click OK to view the report.