# File: ./www.opendental.com/manual232/wikiaddedit.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Wiki Edit</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('wikiaddedit','wiki','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/wikiaddedit.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/wikiaddedit.html" >v24.2</option><option value="https://www.opendental.com/manual241/wikiaddedit.html" >v24.1</option><option value="https://www.opendental.com/manual233/wikiaddedit.html" >v23.3</option><option value="https://www.opendental.com/manual232/wikiaddedit.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/wikiaddedit.html" >v23.1</option><option value="https://www.opendental.com/manual224/wikiaddedit.html" >v22.4</option><option value="https://www.opendental.com/manual223/wikiaddedit.html" >v22.3</option><option value="https://www.opendental.com/manual222/wikiaddedit.html" >v22.2</option><option value="https://www.opendental.com/manual221/wikiaddedit.html" >v22.1</option><option value="https://www.opendental.com/manual214/wikiaddedit.html" >v21.4</option><option value="https://www.opendental.com/manual213/wikiaddedit.html" >v21.3</option><option value="https://www.opendental.com/manual212/wikiaddedit.html" >v21.2</option><option value="https://www.opendental.com/manual211/wikiaddedit.html" >v21.1</option><option value="https://www.opendental.com/manual205/wikiaddedit.html" >v20.5</option><option value="https://www.opendental.com/manual204/wikiaddedit.html" >v20.4</option><option value="https://www.opendental.com/manual203/wikiaddedit.html" >v20.3</option><option value="https://www.opendental.com/manual202/wikiaddedit.html" >v20.2</option><option value="https://www.opendental.com/manual201/wikiaddedit.html" >v20.1</option><option value="https://www.opendental.com/manual194/wikiaddedit.html" >v19.4</option><option value="https://www.opendental.com/manual193/wikiaddedit.html" >v19.3</option><option value="https://www.opendental.com/manual192/wikiaddedit.html" >v19.2</option><option value="https://www.opendental.com/manual191/wikiaddedit.html" >v19.1</option><option value="https://www.opendental.com/manual184/wikiaddedit.html" >v18.4</option><option value="https://www.opendental.com/manual183/wikiaddedit.html" >v18.3</option><option value="https://www.opendental.com/manual182/wikiaddedit.html" >v18.2</option><option value="https://www.opendental.com/manual181/wikiaddedit.html" >v18.1</option><option value="https://www.opendental.com/manual174/wikiaddedit.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Wiki Edit</p></div>
<div class="GeneralPageContent">
<p>Add and edit wiki pages to meet the needs of the practice.</p>
<p>In the <a href="wiki.html">Wiki</a>, click <b>Edit</b>.</p>
<img src="images/wikiEdit.png" width="915" height="446"/><h2>Create a New Page</h2>
<p>There are several options to create a <a href="wiki.html">Wiki</a> page.</p>
<p class="MarginBottomZero">Option 1: Toolbar </p>
<ol class="MarginBottomGap">
<li>In the toolbar, click <b>+Add</b>.</li>
<li>Enter the Page Title and click OK. Text entered will determine the Page Name and the Page Title (heading 1).</li>
</ol>
<p class="MarginBottomZero">Option 2: Using Brackets </p>
<ul class="MarginBottomGap">
<li>On any existing page, click <b>Edit</b>.</li>
<li>Type [[Example Wiki Title]] where you would like the link to appear.</li>
<li>Click Save, then Yes to create the new Wiki page.</li>
</ul>
<p class="MarginBottomZero">Option 2: Existing Page </p>
<ol class="MarginBottomGap">
<li>On any existing page, click <b>Edit</b>.</li>
<li>Click Int Link. <br/><img src="images/wikAllPages.png" width="759" height="252" class="ImageInParagraph"/><br/><div class="Note">Note: To link to an archived wiki page, check <b>Include Archived Pages</b>. Archived pages are prepended with <i>(Archived)</i>.</div>
</li>
<li>Click Add. <br/><img src="images/wikiPageTitle.png" width="379" height="148" class="ImageInParagraph"/></li>
<li>Enter the page title and click OK to create a new wiki page and link to it in the existing page.</li>
</ol>
<p><div class="Note">Note: Page Name determines how the page is labeled in Search results. Both Page Name and page content factor in a search ranking.</div>
</p>
<h2>Edit a Wiki Page</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Open the page you want to edit.</li>
<li>Click Edit in the toolbar.</li>
<li>Enter the changes in the editing area on the left. Changes will show in real time as they will appear on the right.</li>
<li>Click Save or Save as Draft.</li>
</ol>
<h2>Wiki Toolbar</h2>
<p>This toolbar appears across the top of the page when you create or edit a page.</p>
<img src="images/wikiPageEdit.png" width="915" height="48"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Save</b>: Saves changes and closes the edit window.</li>
<li><b>Save as Draft</b>: Save a draft version of the page without altering the original. Wiki page edits are also automatically saved as drafts when Open Dental is force closed, such as during an update, as long as there are no code validation errors.</li>
<li><b>Cancel</b>: Close the window without saving changes.</li>
<li><b>Int Link</b>: Add a link to another wiki page.</li>
<li><b>Bookmark</b>: Add a bookmark to the top of a long wiki page to jump to a specified section of that page. <ol>
<li>Open the wiki page, click Edit.</li>
<li>Scroll to the section you want to bookmark.</li>
<li>Click Bookmark. Enter an ID and a Display Text. These do not have to match.</li>
<li>Click OK.</li>
<li>Cut the <span class="codeblock">&lt;a href="#displaytext"&gt;&lt;/a&gt;</span> code and paste it where you want the link to appear, typically at the top of the page.</li>
<li>The <span class="codeblock">&lt;div id="ID"&gt;</span>&lt;/div&gt; code marks where the bookmark will jump to.</li>
<li>Click Save.</li>
</ol>
</li>
<li><b>File</b>: Add a link to a file on the network.</li>
<li><b>Folder</b>: Add a link to a folder on the network.</li>
<li><b>Ext Link</b>: Add a link to an external website (enter the full URL path: <b>http://www.mysite.com</b>).</li>
<li><b>Heading 1, 2, 3</b>: Format text as Page Title (h1), Subtitle (h2) or smaller category (h3). Properties of all &lt;h&gt; tags can be customized in the embedded stylesheet.</li>
<li><b>Table</b>: (See below)</li>
<li><b>Image</b>: Click to add an image to the wiki page. Images must exist in the A to Z folders. (See below).</li>
<li><b>Lock</b>: Lock wiki page so that edits can only be made by users with <i>Wiki Admin</i> permission.</li>
<li><b>Undo</b>: Undo the previous action. Only able to undo one action.</li>
<li><b>Italic</b>: Italicize specific words or multiple lines at once.</li>
<li><b>Color</b>: Make the selected text red. Change the color by replacing the color name in the Markup, for example: color:blue. Not usable on links.</li>
<li><b>Font</b>: Change the font of the selected text. The default font family is courier. To change, edit the font name in the Markup (e.g. font:courier.) Other examples: times, serif, arial, etc.</li>
</ul>
<h2>Formatting &amp; Keywords</h2>
<p><b>Keywords</b>: Add keywords to a page using the following pattern:<span class="codeblock"> [[keywords: office, tasks, workflow, employee, end of day, closing tasks]]</span> Keywords can be inserted anywhere in the wiki.</p>
<p class="MarginBottomZero"><b>Bulleted Lists</b>: Use asterisks * without a space after them. A line without an asterisk ends the list. Sub-bullets are not supported. </p>
<ul class="MarginBottomGap">
<li>*first item </li>
<li>*second item</li>
<li>*last item</li>
</ul>
<p class="MarginBottomZero"><b>Numbered Lists</b>: Use hashes # without a space after them. A line without a hash ends the list. Sub-bullets are not supported. </p>
<ol class="MarginBottomGap">
<li>#first item in list</li>
<li>#second item</li>
<li>#last item</li>
</ol>
<p><b>Special Characters</b>: &lt; and &gt;. These characted must be prefixed with an ampersand (&amp;). Example: &amp;&gt; or &amp;&lt;</p>
<p class="MarginBottomZero"><b>Images</b>: To place an image in the Wiki, save it in the A-Z Folders in the Wiki subfolder. If an image doesn't exist, the page cannot be saved. </p>
<ol class="MarginBottomGap">
<li>To import a file to this list, click<b> Import</b> and select the file.</li>
<li>Double-click on the image name in the Wiki list.</li>
</ol>
<h2>Tables</h2>
<p>Table markup cannot be edited directly in the page. Instead users must use the Table interface. Borders are always 1, cellspacing 0, cellpadding 0. Carriage returns are allowed inside cells. There is no control over shading or colors.</p>
<div class="Note">Note: Tables are useful, but they do not support huge cells. As a single cell gets more than 10 or 20 lines tall, users may have trouble editing it because of lack of scrollbars. In that case, consider ordinary text with section headings instead of tables. <br/> If having difficulty editing a large cell, users may wish to select all cell text (Ctrl+A), copy (Ctrl+C), paste (Ctrl+V) and edit in another software and paste back into the cell.</div>
<p>Click <b>Table</b> to insert a table at cursor. Add or delete columns and rows on the right side of the screen.</p>
<img src="images/wikitableedit.gif" width="562" height="454"/><p><b>Man Edit:</b> Manually edit table Markup.</p>
<p class="MarginBottomZero">Column: Select buttons to edit columns. </p>
<ul class="MarginBottomGap">
<li><b>L</b>: Select a cell and click to move the cell to the left one column. </li>
<li><b>R</b>: Select a cell and click to move the cell to the right one column.</li>
<li><b>Headers</b>: Click to edit the column headers. Users can modify column header name and column size.</li>
<li><b>Add Column</b>: Click to create a new column to the right of the currently selected cell.</li>
<li><b>Delete</b>: Click to remove the currently selected column and any text in the contained cells.</li>
</ul>
<p class="MarginBottomZero">Row: Select buttons to edit rows. </p>
<ul class="MarginBottomGap">
<li><b>Up</b>: Select a cell and click to move the cell up one row.</li>
<li><b>Down</b>: Select a cell and click to move the cell down one row.</li>
<li><b>Add Row</b>: Click to add a new row below the currently selected row.</li>
</ul>
<p><b>Paste Cells</b>: Click to paste data from another table. To copy data from an external table to a wiki table, users must be running Google Chrome. If it is a complex table, users may need to copy/paste in pieces. First, copy the external table cells. Then click Table, make sure there are enough columns, then click Paste Cells.</p>
<p>To bold the text within a cell, edit the text outside of the Table window.</p>
</div>
</div>
</body>
</html>```
