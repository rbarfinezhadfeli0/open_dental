# File: ./www.opendental.com/manual243/wikiaddedit.html

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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/wikiaddedit.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/wikiaddedit.html" >v24.2</option><option value="https://www.opendental.com/manual241/wikiaddedit.html" >v24.1</option><option value="https://www.opendental.com/manual233/wikiaddedit.html" >v23.3</option><option value="https://www.opendental.com/manual232/wikiaddedit.html" >v23.2</option><option value="https://www.opendental.com/manual231/wikiaddedit.html" >v23.1</option><option value="https://www.opendental.com/manual224/wikiaddedit.html" >v22.4</option><option value="https://www.opendental.com/manual223/wikiaddedit.html" >v22.3</option><option value="https://www.opendental.com/manual222/wikiaddedit.html" >v22.2</option><option value="https://www.opendental.com/manual221/wikiaddedit.html" >v22.1</option><option value="https://www.opendental.com/manual214/wikiaddedit.html" >v21.4</option><option value="https://www.opendental.com/manual213/wikiaddedit.html" >v21.3</option><option value="https://www.opendental.com/manual212/wikiaddedit.html" >v21.2</option><option value="https://www.opendental.com/manual211/wikiaddedit.html" >v21.1</option><option value="https://www.opendental.com/manual205/wikiaddedit.html" >v20.5</option><option value="https://www.opendental.com/manual204/wikiaddedit.html" >v20.4</option><option value="https://www.opendental.com/manual203/wikiaddedit.html" >v20.3</option><option value="https://www.opendental.com/manual202/wikiaddedit.html" >v20.2</option><option value="https://www.opendental.com/manual201/wikiaddedit.html" >v20.1</option><option value="https://www.opendental.com/manual194/wikiaddedit.html" >v19.4</option><option value="https://www.opendental.com/manual193/wikiaddedit.html" >v19.3</option><option value="https://www.opendental.com/manual192/wikiaddedit.html" >v19.2</option><option value="https://www.opendental.com/manual191/wikiaddedit.html" >v19.1</option><option value="https://www.opendental.com/manual184/wikiaddedit.html" >v18.4</option><option value="https://www.opendental.com/manual183/wikiaddedit.html" >v18.3</option><option value="https://www.opendental.com/manual182/wikiaddedit.html" >v18.2</option><option value="https://www.opendental.com/manual181/wikiaddedit.html" >v18.1</option><option value="https://www.opendental.com/manual174/wikiaddedit.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Wiki Edit</p></div>
<div class="GeneralPageContent">
<p>Add and edit wiki pages to meet the needs of the practice.</p>
<p>In the <a href="wiki.html">Wiki</a>, click <b>Edit</b>.</p>
<img src="images/wikiEdit.png" width="915" height="416"/><p>Wiki pages are displayed in html in a browser control inside of Open Dental. Pages are not stored internally as HTML; they are only processed from <a href="wikimarkup.html">Wiki Markup</a> to HTML as they are displayed. Only the wiki markup can be edited. There is no direct control over the actual HTML results. This results in consistent pages and fast editing.</p>
<p>Data is stored in the Open Dental database. Images are stored in the <a href="atozfolder.html">A to Z Folder</a> in the <i>Wiki </i>subfolder.</p>
<h2>Edit Toolbar</h2>
<p>This toolbar is available when creating or editing a wiki page.</p>
<img src="images/wikiPageEdit.png" width="915" height="55"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Save</b>: Saves changes and closes the edit window.</li>
<li><b>Save as Draft</b>: Save a draft version of the page without altering the original. Wiki page edits are also automatically saved as drafts when Open Dental is force closed, such as during an update, as long as there are no code validation errors.</li>
<li><b>Int Link</b>: Add a link to another wiki page. Opens the wiki search, highlight a page, and click <b>OK</b> to add the link.</li>
<li><b>Bookmark</b>: Add a bookmark to the top of a long wiki page to jump to a specified section of that page. See Creating Bookmarks section for details.</li>
<li><b>File</b>: Add a link to a file on the network. Type the file path or click [...] to search for the file. Click <b>OK</b> to add the link. </li>
<li><b>Folder</b>: Add a link to a folder on the network. Type the folder path or click [...] to search for the file. Click <b>OK</b> to add the link. </li>
<li><b>Ext Link</b>: Add a link to an external website. Enter the full URL path: <b>http://www.opendental.com</b>) and Display Text. Click <b>Save</b> to add the link.</li>
<li><b>Heading 1, 2, 3</b>: Highlight text and click to format text as Page Title (h1), Subtitle (h2), or smaller category (h3). Properties of all <span class="codeblock">&lt;h&gt;</span> tags can be customized in the embedded stylesheet (See <a href="wiki.html">Wiki</a>, Setup).</li>
<li><b>Table</b>: Create a table to display on the wiki. See Tables section for details. </li>
<li><b>Image</b>: Click to add an image to the wiki page. See Images section for details.</li>
<li><b>Lock</b>: Lock wiki page so that edits can only be made by users with <i>Wiki Admin </i><a href="permissions.html">Permission</a>.</li>
<li><b>Undo</b>: Undo the previous action. Only able to undo one action.</li>
<li><b>Italic</b>: Highlight text and click to italicize.</li>
<li><b>Color</b>: Highlight text and click to override the text color. the default color override is red. Type a different color name in the formatting text from the Markup area (e.g.,<span class="codeblock"> text:blue</span>).</li>
<li><b>Font</b>: Highlight text and click to add a font override. The default font override is courier. Type a different font name in the formatting text from the Markup area (e.g.,<span class="codeblock"> font:arial</span>). Other examples include times, serif, etc. </li>
</ul>
<p>Additionally, advanced users may want to change defaults in the Wiki Setup stylesheet.</p>
<h2>Wiki Markup and Page Preview</h2>
<p>Make changes to a wiki using the interface below the toolbar.</p>
<img src="images/wikiPageEditing.png" width="915" height="423"/><p>The <a href="wikimarkup.html">Wiki Markup</a> (i.e., raw wiki text) is displayed on the left. Type directly in the markup area and use the toolbar options to make changes. A live preview of the formatted wiki page is shown on the right.</p>
<p>Click <b>Save</b> in the toolbar to keep changes and publish to the wiki.</p>
<p>Click <b>Save as Draft</b> to keep changes without publishing. Drafts can be accessed from the wiki page toolbar.</p>
<h2>Create a New Page</h2>
<p>There are several options to create a <a href="wiki.html">Wiki</a> page.</p>
<p class="MarginBottomZero">Option 1: Toolbar </p>
<ol class="MarginBottomGap">
<li>In the toolbar, click <b>+Add</b>.</li>
<li>Enter the Page Title and click <b>Save</b>. Text entered determines the Page Name and Page Title (heading 1).</li>
</ol>
<p class="MarginBottomZero">Option 2: Using Brackets </p>
<ul class="MarginBottomGap">
<li>On any existing page, click <b>Edit</b>.</li>
<li>Type [[Example Wiki Title]] to link to a wiki.</li>
<li>Click <b>Save</b> in the toolbar. </li>
<li>If a page does not exist for the linked wiki, there is a prompt to create a new page. Click <b>Yes</b> to create the new Wiki page.</li>
</ul>
<p class="MarginBottomZero">Option 2: Existing Page </p>
<ol class="MarginBottomGap">
<li>On any existing page, click <b>Edit</b>.</li>
<li>Click <b>Int Link</b>. <br/><img src="images/wikAllPages.png" width="759" height="252" class="ImageInParagraph"/><br/><div class="Note">Note: To link to an archived wiki page, check <b>Include Archived Pages</b>. Archived pages are prepended with <i>(Archived)</i>.</div>
</li>
<li>Click <b>Add</b>. <br/><img src="images/wikiPageTitle.png" width="379" height="148" class="ImageInParagraph"/></li>
<li>Enter the page title and click <b>Save</b> to create a new wiki page and link to it on the existing page.</li>
</ol>
<p><div class="Note">Note: Page Name determines how the page is labeled in Search results. Both Page Name and page content factor in a search ranking.</div>
</p>
<h2>Creating Bookmarks</h2>
<p>Add bookmarks to a wiki page to quickly move to another area of the page. </p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>When editing a wiki, click the area of the wiki page to be bookmarked and click <b>Bookmark</b>.</li>
<li>Click Bookmark. Insert Internal Bookmark is opened.</li>
<img src="images/wikiBookmark.png" width="483" height="159"/><li>Enter an ID and a Display Text. These do not have to match.</li>
<li>Click <b>Save</b>. Text is inserted into the Markup area where the text cursor is currently placed.</li>
<li>Cut the <span class="codeblock">&lt;a href="#displaytext"&gt;&lt;/a&gt;</span> code and paste it where the link should appear. Typically, at the top of the page.</li>
<li>The <span class="codeblock">&lt;div id="ID"&gt;&lt;/div&gt;</span> code marks where the bookmark moves to.</li>
</ol>
<h2>Tables</h2>
<p>In the Markup area, move the text cursor (click in the area) and click <b>Table</b> to insert a new table at the cursor. To edit an existing table, double-click the table text in the Markup area. Edit Wiki table is opened.</p>
<img src="images/wikitableedit.png" width="478" height="457"/><p>Tables cannot be edited directly in the Markup area. Instead, the Table interface must be used. Borders are always 1, cellspacing 0, cellpadding 0. Carriage returns are allowed inside cells. There is no control over shading or colors.</p>
<p><b>Man Edit</b>: Open the raw table formatting text to make changes manually.</p>
<p class="MarginBottomZero">Column: Select buttons to edit columns. </p>
<ul class="MarginBottomGap">
<li><b>L</b>: Select a cell and click to move the cell left one column. </li>
<li><b>R</b>: Select a cell and click to move the cell right one column.</li>
<li><b>Headers</b>: Click to edit the column headers. Column width and header names can be edited.</li>
<li><b>Add Column</b>: Click to create a new column to the right of the currently selected cell.</li>
<li><b>Delete</b>: Click to remove the currently selected column and any text in the contained cells.</li>
</ul>
<p class="MarginBottomZero">Row: Select buttons to edit rows. </p>
<ul class="MarginBottomGap">
<li><b>Up</b>: Select a cell and click to move the cell up one row.</li>
<li><b>Down</b>: Select a cell and click to move the cell down one row.</li>
<li><b>Add Row</b>: Click to add a new row below the currently selected row.</li>
</ul>
<p><b>Paste Cells</b>: Click to paste data from another table. To copy data from an external table to a wiki table, users must be running Google Chrome. If it is a complex table, it may need to be copied/pasted in pieces. First, copy the external table cells. Click <b>Table</b>, ensure there are enough columns, then click Paste Cells.</p>
<p>To bold or italicize the text within a cell, edit the text outside of the Table window or manually type the formatting.</p>
<h2>Images</h2>
<p>Click <b>Image</b> when editing a wiki to insert an image.</p>
<img src="images/wikiInsertImage.png" width="674" height="319"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Available Images</b>: Lists images added to the <i>Wiki</i> folder within the <a href="atozfolder.html">A to Z Folder</a>. A preview of the highlighted image is shown next to the list.</li>
<li><b>Import</b>: Click to add a new image to Available Images.</li>
</ul>
<p>Highlight a file and click <b>OK</b> to add it to the wiki.</p>
<h2>Formatting &amp; Keywords</h2>
<p><b>Keywords</b>: Add keywords to a page using the following pattern:<span class="codeblock"> [[keywords: office, tasks, workflow, employee, end of day, closing tasks]]</span> Keywords can be inserted anywhere in the wiki. There is a 255-character limit.</p>
<p class="MarginBottomZero"><b>Bulleted Lists</b>: Begin a line with an asterisk (*) to create a bulleted list. Do not add a space after the asterisk. A line without an asterisk ends the list. Sub-lists are not supported. </p>
<ul class="MarginBottomGap">
<li>*first item </li>
<li>*second item</li>
<li>*last item</li>
</ul>
<p class="MarginBottomZero"><b>Numbered Lists</b>: Begin a line with a hash (#) to create a numbered list. Do not add a space after the hash. A line without a hash ends the list. Sub-lists are not supported. </p>
<ol class="MarginBottomGap">
<li>#first item in list</li>
<li>#second item</li>
<li>#last item</li>
</ol>
<p><b>Special Characters</b>: &lt; and &gt;. These characters must be prefixed with an ampersand (&amp;). Example: &amp;&gt; or &amp;&lt;</p>
</div>
</div>
</body>
</html>```
