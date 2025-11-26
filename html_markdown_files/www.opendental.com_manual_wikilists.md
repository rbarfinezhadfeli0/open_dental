# File: ./www.opendental.com/manual/wikilists.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Wiki List</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('wikilists','wiki','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/wikilists.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/wikilists.html" >v24.2</option><option value="https://www.opendental.com/manual241/wikilists.html" >v24.1</option><option value="https://www.opendental.com/manual233/wikilists.html" >v23.3</option><option value="https://www.opendental.com/manual232/wikilists.html" >v23.2</option><option value="https://www.opendental.com/manual231/wikilists.html" >v23.1</option><option value="https://www.opendental.com/manual224/wikilists.html" >v22.4</option><option value="https://www.opendental.com/manual223/wikilists.html" >v22.3</option><option value="https://www.opendental.com/manual222/wikilists.html" >v22.2</option><option value="https://www.opendental.com/manual221/wikilists.html" >v22.1</option><option value="https://www.opendental.com/manual214/wikilists.html" >v21.4</option><option value="https://www.opendental.com/manual213/wikilists.html" >v21.3</option><option value="https://www.opendental.com/manual212/wikilists.html" >v21.2</option><option value="https://www.opendental.com/manual211/wikilists.html" >v21.1</option><option value="https://www.opendental.com/manual205/wikilists.html" >v20.5</option><option value="https://www.opendental.com/manual204/wikilists.html" >v20.4</option><option value="https://www.opendental.com/manual203/wikilists.html" >v20.3</option><option value="https://www.opendental.com/manual202/wikilists.html" >v20.2</option><option value="https://www.opendental.com/manual201/wikilists.html" >v20.1</option><option value="https://www.opendental.com/manual194/wikilists.html" >v19.4</option><option value="https://www.opendental.com/manual193/wikilists.html" >v19.3</option><option value="https://www.opendental.com/manual192/wikilists.html" >v19.2</option><option value="https://www.opendental.com/manual191/wikilists.html" >v19.1</option><option value="https://www.opendental.com/manual184/wikilists.html" >v18.4</option><option value="https://www.opendental.com/manual183/wikilists.html" >v18.3</option><option value="https://www.opendental.com/manual182/wikilists.html" >v18.2</option><option value="https://www.opendental.com/manual181/wikilists.html" >v18.1</option><option value="https://www.opendental.com/manual174/wikilists.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Wiki List</p></div>
<div class="GeneralPageContent">
<p>Wiki Lists are a way to store non-clinical data in a convenient table format.</p>
<p>In the <a href="wiki.html">Wiki</a>, click <b>Lists</b>.</p>
<img src="images/wikiLists.png" width="304" height="166"/><p> Wiki lists are stored as tables in the database, so they are both searchable and reportable.</p>
<h2>View or Edit a Wiki List</h2>
<p>Click <b>Add </b>to create a new list, or double-click an existing list open Edit Wiki List to view the list or make changes.</p>
<img src="images/wikiEditList.png" width="915" height="382"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Search</b>: Begin typing to search the wiki list.  <ul>
<li>If <b>Highlight</b> is selected, matching entries are highlighted yellow and the list automatically scrolls to the first match.</li>
<li>If <b>Filter</b> is selected, only the matching entries are displayed as unmatching entries are filtered out.</li>
</ul>
</li>
<li><b>Adv Search</b>: Click to launch the Advanced Search window.<br/><img src="images/wikiEditAdvSearch.png" width="337" height="241" class="ImageInParagraph"/><ol>
<li>Highlight column(s) to limit the search to only those columns.</li>
<li>Click <b>OK</b>. <i>Search</i> changes <i>Advanced Search</i> in Edit Wiki List.</li>
<li>Click <b>Clear</b> to return to the normal search.</li>
</ol>
</li>
<li><b>Include Hidden Columns</b>: Check to include any columns marked as hidden. </li>
</ul>
<p class="MarginBottomZero">List:  </p>
<ul class="MarginBottomGap">
<li><b>Rename</b>: Click to rename the currently selected wiki list.</li>
<li><b>History</b>: Click to view a history of edits made to the selected list. <br/><img src="images/wikilisthistory.png" width="915" height="219" class="ImageInParagraph"/><ul>
<li>Click an item in the Wiki List History column to view the Old and New Revisions.</li>
<li><b>Revert</b>: Click to revert the wiki list to the version selected in the Wiki List History column. </li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">Columns: </p>
<ul class="MarginBottomGap">
<li><b>L / R</b>: Select a column, then click to move the column to the left or right.</li>
<li><b>Edit</b>: Click to edit column details. See Wiki List Headers section for details. </li>
<li><b>Add</b>: Click to create a new column.</li>
<li><b>Delete</b>: Select a column, then click to remove it.</li>
</ul>
<p class="MarginBottomZero">Rows:  </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Click to add a create a new row. See Edit Wiki List Item section for details. </li>
<li>Similarly, double-click on an existing row to make edits.</li>
</ul>
<h2>Edit Wiki List Headers</h2>
<img src="images/wikilistheaderedit.png" width="766" height="433"/><p>Edit the column width, hide or delete columns, and set up pick list options from here. Additional columns must be added from Edit Wiki List.</p>
<p class="MarginBottomZero">Wiki List Headers: Lists all columns added to the table. Click a field to edit. </p>
<ul class="MarginBottomGap">
<li>Column Name: The header text for the column.</li>
<li>Width: Enter a number to change the column width in the table.</li>
<li>Is Hidden: X indicates this column is not shown in the table. Highlight a column and click <b>Hide Column</b> / <b>Show Column</b> to change the column visibility.</li>
<li>For free text, highlight the column, then leave the Pick List Options section blank. </li>
<li>For a Pick List, highlight the column, then click <b>Add</b> to add pick list options.</li>
<li>To remove a pick list option, highlight the item then click <b>Remove</b>. </li>
</ul>
<p class="MarginBottomZero">Pick List Options: Data can be entered by free typing or selecting a pick list item from a dropdown. If pick list options exist for a column, typing is disabled for the column when editing a wiki list item. Highlight a column to view or edit its pick list options. </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Create a pick list option for the selected column.</li>
<li><b>Delete</b>: Remove the selected pick list option.</li>
</ul>
<p><b>Hide Column</b>: Highlight a column, then click to mark it as hidden. Hidden columns retain information and can be viewed as needed in the wiki list.</p>
<p>Click <b>Save</b> to keep changes. </p>
<p><div class="Note">Note: When a list is created, there is a static column named<i> [tablename]Num</i>. This is the primary key column used in the database and cannot be moved or renamed. It can be changed in width or hidden.</div>
</p>
<h2>Edit Wiki List Item</h2>
<img src="images/wikiListItem.png" width="646" height="281"/><p>Click into a value field to enter data. If there are pick lists options, choose from the dropdown. If there are no pick list options, type text manually. </p>
<p><b>Delete</b>: Click to remove the row.</p>
<p>Click <b>Save</b> to keep changes.</p>
<h2>Generate a Query</h2>
<p>Each wiki list represents a table in the database named using the follow format: wikilist_listname. The wiki list can be used when generating a <a href="queryoverview.html">User Query</a>. Example: <span class="codeblock">SELECT * FROM wikilist_employeename</span></p>
</div>
</div>
</body>
</html>```
