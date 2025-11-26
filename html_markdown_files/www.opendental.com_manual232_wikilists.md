# File: ./www.opendental.com/manual232/wikilists.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Wiki List</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
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
						}"><option value="https://www.opendental.com/manual243/wikilists.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/wikilists.html" >v24.2</option><option value="https://www.opendental.com/manual241/wikilists.html" >v24.1</option><option value="https://www.opendental.com/manual233/wikilists.html" >v23.3</option><option value="https://www.opendental.com/manual232/wikilists.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/wikilists.html" >v23.1</option><option value="https://www.opendental.com/manual224/wikilists.html" >v22.4</option><option value="https://www.opendental.com/manual223/wikilists.html" >v22.3</option><option value="https://www.opendental.com/manual222/wikilists.html" >v22.2</option><option value="https://www.opendental.com/manual221/wikilists.html" >v22.1</option><option value="https://www.opendental.com/manual214/wikilists.html" >v21.4</option><option value="https://www.opendental.com/manual213/wikilists.html" >v21.3</option><option value="https://www.opendental.com/manual212/wikilists.html" >v21.2</option><option value="https://www.opendental.com/manual211/wikilists.html" >v21.1</option><option value="https://www.opendental.com/manual205/wikilists.html" >v20.5</option><option value="https://www.opendental.com/manual204/wikilists.html" >v20.4</option><option value="https://www.opendental.com/manual203/wikilists.html" >v20.3</option><option value="https://www.opendental.com/manual202/wikilists.html" >v20.2</option><option value="https://www.opendental.com/manual201/wikilists.html" >v20.1</option><option value="https://www.opendental.com/manual194/wikilists.html" >v19.4</option><option value="https://www.opendental.com/manual193/wikilists.html" >v19.3</option><option value="https://www.opendental.com/manual192/wikilists.html" >v19.2</option><option value="https://www.opendental.com/manual191/wikilists.html" >v19.1</option><option value="https://www.opendental.com/manual184/wikilists.html" >v18.4</option><option value="https://www.opendental.com/manual183/wikilists.html" >v18.3</option><option value="https://www.opendental.com/manual182/wikilists.html" >v18.2</option><option value="https://www.opendental.com/manual181/wikilists.html" >v18.1</option><option value="https://www.opendental.com/manual174/wikilists.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Wiki List</p></div>
<div class="GeneralPageContent">
<p>Wiki Lists are a way to store non-clinical data in a convenient table format.</p>
<p>In the <a href="wiki.html">Wiki</a>, click <b>Lists</b>.</p>
<img src="images/wikiLists.png" width="312" height="289"/><p> Wiki lists are stored as tables in the database, so they are both searchable and reportable.</p>
<p>Click <b>Add </b>to create a new list, or double-click an existing list to view or edit.</p>
<h2>View or Edit a Wiki List</h2>
<img src="images/wikiEditList.png" width="915" height="393"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Search</b>: Begin typing to search the wiki list.  <ul>
<li>If <b>Highlight</b> is selected, matching entries will highlight yellow and the list will automatically scroll to the first match.</li>
<li>If <b>Filter</b> is selected, only the matching entries will display as unmatching entries are filtered out.</li>
</ul>
</li>
<li><b>Adv Search</b>: Click to launch the Advanced Search window.<br/><img src="images/wikiEditAdvSearch.gif" width="344" height="243" class="ImageInParagraph"/><ol>
<li>Select a column or columns to limit the search to only those columns.</li>
<li>Click OK. Search will change to Advanced Search in the Edit Wiki List window.</li>
<li>Click Clear to return to the normal search.</li>
</ol>
</li>
<li><b>Include Hidden Columns</b>: Check to include any columns marked as hidden. </li>
</ul>
<p class="MarginBottomZero">List:  </p>
<ul class="MarginBottomGap">
<li><b>Rename</b>: Click to rename the currently selected wiki list.</li>
<li><b>History</b>: Click to view a history of edits made to the selected list. <br/><img src="images/wikilisthistory.png" width="904" height="281" class="ImageInParagraph"/><ul>
<li>Click an item in the Wiki List History column to view the Old and New Revisions.</li>
<li><b>Revert</b>: Click to revert the wiki list to the version selected in the Wiki List History column. </li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">Columns: </p>
<ul class="MarginBottomGap">
<li><b>L / R</b>: Select a column, then click to move the column to the left or right.</li>
<li><b>Edit</b>: Click to edit. The Edit Wiki List Headers window will open. See below for details. <br/></li>
<li><b>Add</b>: Click to add a new column.</li>
<li><b>Delete</b>: Select a column, then click to delete.</li>
</ul>
<p class="MarginBottomZero">Rows:  </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Click to add a new row. The Edit Wiki List Item window will open. See below for details. </li>
<li>Similarly, double-click on an existing row to make edits.</li>
</ul>
<h2>Edit Wiki List Headers</h2>
<img src="images/wikilistheaderedit.png" width="774" height="337"/><p class="MarginBottomZero">Each column can be entered as a free text field, or a pick list item. </p>
<ul class="MarginBottomGap">
<li>For free text, highlight the column, then leave the Pick List Options section blank. </li>
<li>For a Pick List, highlight the column, then click <b>Add</b> to add pick list options.</li>
<li>To remove a pick list option, highlight the item then click <b>Remove</b>. </li>
</ul>
<p><b>Hide Column</b>: Highlight a column, then click to mark it as hidden. Hidden columns retain information and can be viewed as needed in the wiki list.</p>
<p>Click OK to save changes. </p>
<p><div class="Note">Note: When you first create a list, there will be a static column on the left named "tablename" Num. This is the primary key column and cannot be moved or renamed. It can be changed in width or hidden.</div>
</p>
<h2>Edit Wiki List Item</h2>
<img src="images/wikiListItem.png" width="655" height="371"/><p>Click into a value field to enter data. Type to enter free text, or use the dropdown to select from the pick list.</p>
<p>Click OK to save changes. Click <b>Delete</b> to delete the row.</p>
<h2>Generate a Query</h2>
<p>Each wiki list represents a table in the database named using the follow format: wikilist_listname. You can generate a query from a wiki list using <a href="queryoverview.html">User Query</a>. Example: <span class="codeblock">"SELECT * FROM wikilist_employeename"</span></p>
</div>
</div>
</body>
</html>```
