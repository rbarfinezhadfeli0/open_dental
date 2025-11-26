Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Wiki

Each office can have their own internal wiki, similar to wikipedia.

In the [Main Menu](mainmenu.html), click Tools, **Wiki**.

![](images/wikiHome.png)

Alternatively, on the keyboard, click CTRL + Shift + W.

The Wiki Home page opens. Multiple wiki pages can be open at once. A wiki can be useful for posting employee policies, sharing troubleshooting information, keeping lists, etc. Blue text indicates a link to another page, folder, file or outside URL.

Wiki pages are displayed in html in a browser control inside of Open Dental. Pages are not stored internally as html; they are only processed from [Wiki Markup](wikimarkup.html) to html as they are displayed. Users only edit the wiki markup and have no direct control over the actual html results. This results in consistent pages and fast editing. An instant preview lets users see changes as they are made.

Data is stored in the Open Dental database. Images are stored in the [A to Z Folder](atozfolder.html) in the *Wiki* subfolder.

## Toolbar

![](images/wikitoolbar.png)

* **Back / Fwd**: Move back or forward one page.
* **Setup**: Opens the Wiki Setup window. Customize the html master page and embedded stylesheet. Enable wiki link preferences.
  ![](images/wikiSetup.png)
  + **Detect wiki links in textboxes and grids**: Check to enable right-click options to open wiki links from textboxes and grids, e.g., from Tasks. To create a wiki link in a task, use double brackets around the page title: [[Example Wiki Link]].
  + **Allow new wiki pages from links**: Check to prompt users to create a wiki page when following a link for a wiki page that does not exist. If unchecked, when a link for a wiki page that does not exist a warning displays for the user instead.
* **Home**: Click to go to the wiki home page.
  + **Save as Home Page**: Use the dropdown, then click to set the selected wiki page as the home page for the currently logged-on user. Each user can have their own home page.
* **Edit**: Click to edit the current wiki page. See [Wiki Edit](wikiaddedit.html)
* **Print**: Click to print the current wiki page.
* **Rename**: Click to rename the current wiki page. Page names determine the text that displays in the search. All links to that page are automatically updated when the page is renamed.
* **Archive**: Click to archive the current wiki page, removing it from the Search. Archived files can still be accessed (and restored) via the Search by checking Archived Only.
* **History**: Click to view the [Wiki History](wikihistory.html). Review a complete dated archive of all previous versions of the current page.
* **Drafts**: Click to view a list of saved drafts for the current page.
* **In-Links**: Click view all incoming links (pages linked) to the current page.
* **Add**: Click to create a new wiki page.
* **Lists**: Click to view, create and edit [Wiki Lists](wikilists.html).
* **Search**: Click to search the wiki for specific text. See [Wiki Search](wikisearch.html).

## Troubleshooting

If an unhandled exception occurs when trying to access a Wiki page (e.g., no ending tag), try following these steps:

1. Search for the corrupt page.
2. On the error, click **Continue**.
3. Click **OK**.
4. On the error, click **Continue**.
5. Click **Edit** and manually fix the page, or click **History** and revert to a previous version of the page.

Also see: [Wiki Markup](wikimarkup.html)