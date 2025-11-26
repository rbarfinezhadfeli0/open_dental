# File: ./www.opendental.com/manual243/queryoverview.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - User Query</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('queryoverview','reports','mainmenu','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/queryoverview.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/queryoverview.html" >v24.2</option><option value="https://www.opendental.com/manual241/queryoverview.html" >v24.1</option><option value="https://www.opendental.com/manual233/queryoverview.html" >v23.3</option><option value="https://www.opendental.com/manual232/queryoverview.html" >v23.2</option><option value="https://www.opendental.com/manual231/queryoverview.html" >v23.1</option><option value="https://www.opendental.com/manual224/queryoverview.html" >v22.4</option><option value="https://www.opendental.com/manual223/queryoverview.html" >v22.3</option><option value="https://www.opendental.com/manual222/queryoverview.html" >v22.2</option><option value="https://www.opendental.com/manual221/queryoverview.html" >v22.1</option><option value="https://www.opendental.com/manual214/queryoverview.html" >v21.4</option><option value="https://www.opendental.com/manual213/queryoverview.html" >v21.3</option><option value="https://www.opendental.com/manual212/queryoverview.html" >v21.2</option><option value="https://www.opendental.com/manual211/queryoverview.html" >v21.1</option><option value="https://www.opendental.com/manual205/queryoverview.html" >v20.5</option><option value="https://www.opendental.com/manual204/queryoverview.html" >v20.4</option><option value="https://www.opendental.com/manual203/queryoverview.html" >v20.3</option><option value="https://www.opendental.com/manual202/queryoverview.html" >v20.2</option><option value="https://www.opendental.com/manual201/queryoverview.html" >v20.1</option><option value="https://www.opendental.com/manual194/queryoverview.html" >v19.4</option><option value="https://www.opendental.com/manual193/queryoverview.html" >v19.3</option><option value="https://www.opendental.com/manual192/queryoverview.html" >v19.2</option><option value="https://www.opendental.com/manual191/queryoverview.html" >v19.1</option><option value="https://www.opendental.com/manual184/queryoverview.html" >v18.4</option><option value="https://www.opendental.com/manual183/queryoverview.html" >v18.3</option><option value="https://www.opendental.com/manual182/queryoverview.html" >v18.2</option><option value="https://www.opendental.com/manual181/queryoverview.html" >v18.1</option><option value="https://www.opendental.com/manual174/queryoverview.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>User Query</p></div>
<div class="GeneralPageContent">
<p>Compose queries to retrieve information from the database that is not accessible through standard reports.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click <a href="reports.html">Reports</a>, User Query.</p>
<img src="images/queryrun.png" width="915" height="302"/><p>Alternatively, in <a href="reportsstandard.html">Standard Reports</a>, click User Query. </p>
<p>When opened from Main Menu, Report dropdown this window can remain open while navigating other areas of Open Dental. When opened from Standard Reports, this window must be closed to navigate to other areas of Open Dental.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our videos: <a href="https://youtu.be/FBk3yWwYC-c">QuickTip: Find and Run a Query in Open Dental</a> and <a href="https://youtu.be/MDkcFVKnzu4">Custom Query Process Overview</a>.</li>
<li><img src="images/infographicIcon.png" width="16" height="16" style="margin-bottom: 0px"/> See our infographic, <a href="https://opendental.com/resources/SearchingForQueryExamples.pdf">Searching for Query Examples</a>, for a step-by-step guide on finding and running queries.</li>
</ul>
<p>Users must have the <i>User Query</i> permission to run and change variables in released user queries.<br/> Users must have the <i>User Query Admin</i> permission to write, edit, run, save, and delete queries.</p>
<h2>Running a Query</h2>
<p class="MarginBottomZero"><b>Text Box:</b> Displays the query text. Users with the <i>User Query Admin</i> permission, can enter text directly in this box. For users without the permission, this box is read-only. </p>
<ul class="MarginBottomGap">
<li><b>Right-Click Options</b>: Right-click in the user query text box for additional options. <ul>
<li>Cut: Delete selected text.</li>
<li>Copy: Copy selected text to clipboard.</li>
<li>Paste: Paste clipboard text contents into text box. </li>
<li>Select All: Select all text in the text box.</li>
<li>Comment Selection: Designate selected text as a comment in the query. Selected text will not be run as part of the query. </li>
<li>Remove Comment from Selection: Removes comment designation from selected text. Selected text will now be run as part of the query.</li>
</ul>
</li>
</ul>
<p><b>Favorites:</b> Open <a href="queryfavorites.html">Query Favorites</a>.</p>
<p><b>Add to Favorites:</b> Add the query text currently in the text box to Query Favorites.</p>
<p><b>Copy:</b> Copy the query text in the text box to the clipboard.</p>
<p><b>Paste:</b> Paste any text currently on the clipboard into the text box.</p>
<p><b>Submit Query:</b> Run the query text currently in the text box. When long queries are running, the Submit button changes to <b>Stop Execution</b>. Click to cancel a large query that may take a long time to run.</p>
<h2>Format</h2>
<p>Change settings to determine how query results are displayed.</p>
<p class="MarginBottomZero"><b>Format:</b> Select how to view the results. The default is determined by the <i>Default to 'Raw' format in User Query window</i> setting in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a></p>
<ul class="MarginBottomGap">
<li><b>Human-readable:</b> This is an easy-to-read format. Some column names that are used in our tables may display as follows:  <ul>
<li>Dates may be converted to standard format.</li>
<li>Dollar amounts may receive the extra zeros and be right aligned.</li>
<li>Enumerations may convert (built-in lists like areas of the mouth, patient status, gender, etc.).</li>
<li>Definitions linked to the definition table get converted.</li>
<li>Provider numbers show the provider's abbreviation.</li>
<li>Patient numbers show patient name.</li>
<li>True/false: Boolean values show true/false.</li>
</ul>
</li>
<li><b>Raw:</b> In this format, the results are not as easy to read, for example there may be meaningless numbers or no extra zeros on dollar amounts. <br/></li>
</ul>
<img src="images/queryraw.gif" width="243" height="176"/><p><b>Column Alignment</b>: Choose the alignment of the displayed query results.</p>
<p class="MarginBottomZero"><b>Show Row Numbers</b>: Choose to number query rows. </p>
<ul class="MarginBottomGap">
<li>Checked: Each row of query results is numbered.</li>
<li>Unchecked: Query rows are not numbered.</li>
</ul>
<p><b></b></p>
<p class="MarginBottomZero"><b>Enable word wrap</b>: Choose to wrap long text that may otherwise be cut off. </p>
<ul class="MarginBottomGap">
<li>Checked: Query results exceeding column width are wrapped onto a new line making the row wider.</li>
<li>Unchecked: Query results exceeding column width are cut off.</li>
</ul>
<p><b>Print Orientation</b>: Choose whether to print the report in landscape or portrait.</p>
<h2>Query Results</h2>
<p><b>Title:</b> The title of the query in the text box, if one exists. When running a query from Query Favorites, this box is prefilled with the title saved to the favorite. Users can type into this box to label the query before printing.</p>
<p class="MarginBottomZero"><b>Query Results</b>: By default, the results are displayed in human-readable format. Columns vary based on the query being run. If a column header is prefaced with a $, the cells are always formatted as a dollar amount. </p>
<ul class="MarginBottomGap">
<li>Display options: <ul>
<li>Use the vertical and horizontal scrollbars to move up and down, left and right.</li>
<li>Click a column header to reorder the results in ascending or descending order.  <div class="Note">Note: Results are sorted alphabetically by strings or words. To sort another way, it must be specified in the query itself.</div>
</li>
<li>To change the width of a column, drag the splitter bar between the headers.</li>
</ul>
</li>
<li><b>Right-click options</b>: <ul>
<li>Copy Cell Text: Copy data from the selected cell only.</li>
<li>Copy Rows: Copy all data from selected rows in a tab-delimited format.<br/><div class="Note">Note: To select multiple rows of data, use <span class="codeblock">CTRL + Click </span>or <span class="codeblock">Shift + Click</span>.</div>
</li>
<li>Go To Patient: (Only available for queries with a column of PatNum) The patient of the selected row is selected in Open Dental.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">Once the table displays the way you want it, there are several options: </p>
<ul class="MarginBottomGap">
<li><b>Print Preview:</b> View the query like a printed report. Some columns may show a grand total at the bottom of the report while in preview mode. Zoom in or use the blue arrows to scroll through pages. Click Query View to return to regular query view.</li>
<li><b>Print:</b> Print the query to the default printer.<br/><div class="Note">Note: If needing to print a page range, set your Printer Setup to prompt before printing. In the printer settings prompt, set the page range you wish to print.</div>
</li>
<li><b>Export .txt</b>: Save the query as a tab-delimited text file. </li>
<li><b>Export .csv</b>: Save the query as a comma-delimited CSV file.</li>
<div class="Note">Note: Queries can be exported for use in another program (e.g., Microsoft Word or Excel). Typical uses include letter merge, spreadsheet analysis, or financial imports. Set the default folder for exported queries in <a href="paths.html">Data Paths Setup</a> (OpenDentalExports).</div>
</ul>
<p class="MarginBottomZero">Hints: </p>
<ul class="MarginBottomGap">
<li>To include a title/header on printed query results, save the query to your Query Favorites, and enter the title. Then, run the query again.</li>
<li>Advanced users can run queries directly on the database from outside programs using ODBC or other methods.</li>
</ul>
<div class="Note">Note: <ul>
<li>To also run command queries, user must also have the Command Query permission.</li>
<li>If using <a href="replicationprimarykeys.html">Random Primary Keys</a>, queries with <b>CREATE TABLE</b> or <b>DROP TABLE</b> syntax can only run on the computer named as the User Query Server on the Replication Setup window (<a href="replicationprimarykeys.html">Replication</a>).</li>
</ul>
</div>
<br/><br/><h2>Find a Query</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><a href="queryfavorites.html">Query Favorites</a>: Access a customizable list of queries that are used often in your practice. Designated users can only run released queries. User Query Admin permission is needed to add, edit, and delete query favorites, as well as control which queries can be run by others.</li>
<li><a href="https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx">Query Examples</a>: Search through more than 1000 queries that have been commissioned by our customers, then copy/paste into Query Favorites or the Query window.</li>
<li><a href="queryrequest.html">Custom Queries</a>: For a fee, Open Dental Support can create a custom query.</li>
<li>Write your own query, then run and/or save it to your favorites.</li>
</ul>
<p class="MarginBottomZero">Security: Access to queries is controlled by user <a href="permissions.html">Security Permissions</a>. </p>
<ul class="MarginBottomGap">
<li>User Query: User can only run released queries from the Reports, User Query submenu.</li>
<li>User Query Admin: User can run queries, and edit, add and delete query favorites.</li>
<li>Command Query: User can run SQL commands (non-select queries)</li>
</ul>
<p><a href="http://opendental.com/site/programmingresources.html">Programming Resources, Database Documentation</a> has a list of tables and columns in the Open Dental database.</p>
</div>
</div>
</body>
</html>```
