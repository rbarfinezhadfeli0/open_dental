# File: ./www.opendental.com/manual232/wiki.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Wiki</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('wiki','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/wiki.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/wiki.html" >v24.2</option><option value="https://www.opendental.com/manual241/wiki.html" >v24.1</option><option value="https://www.opendental.com/manual233/wiki.html" >v23.3</option><option value="https://www.opendental.com/manual232/wiki.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/wiki.html" >v23.1</option><option value="https://www.opendental.com/manual224/wiki.html" >v22.4</option><option value="https://www.opendental.com/manual223/wiki.html" >v22.3</option><option value="https://www.opendental.com/manual222/wiki.html" >v22.2</option><option value="https://www.opendental.com/manual221/wiki.html" >v22.1</option><option value="https://www.opendental.com/manual214/wiki.html" >v21.4</option><option value="https://www.opendental.com/manual213/wiki.html" >v21.3</option><option value="https://www.opendental.com/manual212/wiki.html" >v21.2</option><option value="https://www.opendental.com/manual211/wiki.html" >v21.1</option><option value="https://www.opendental.com/manual205/wiki.html" >v20.5</option><option value="https://www.opendental.com/manual204/wiki.html" >v20.4</option><option value="https://www.opendental.com/manual203/wiki.html" >v20.3</option><option value="https://www.opendental.com/manual202/wiki.html" >v20.2</option><option value="https://www.opendental.com/manual201/wiki.html" >v20.1</option><option value="https://www.opendental.com/manual194/wiki.html" >v19.4</option><option value="https://www.opendental.com/manual193/wiki.html" >v19.3</option><option value="https://www.opendental.com/manual192/wiki.html" >v19.2</option><option value="https://www.opendental.com/manual191/wiki.html" >v19.1</option><option value="https://www.opendental.com/manual184/wiki.html" >v18.4</option><option value="https://www.opendental.com/manual183/wiki.html" >v18.3</option><option value="https://www.opendental.com/manual182/wiki.html" >v18.2</option><option value="https://www.opendental.com/manual181/wiki.html" >v18.1</option><option value="https://www.opendental.com/manual174/wiki.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Wiki</p></div>
<div class="GeneralPageContent">
<p>Each office can have their own internal wiki, similar to wikipedia.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, <b>Wiki</b>. </p>
<img src="images/wikiHome.png" width="889" height="736"/><p>Alternatively, on the keyboard, click <span class="codeblock">CTRL + Shift + W</span>. </p>
<p>The Wiki Home page opens. Multiple wiki pages can be open at once. A wiki can be useful for posting employee policies, sharing troubleshooting information, keeping lists, etc. Blue text indicates a link to another page, folder, file or outside URL.</p>
<p>Wiki pages are displayed in html in a browser control inside of Open Dental. Pages are not stored internally as html; they are only processed from <a href="wikimarkup.html">Wiki Markup</a> to html as they are displayed. Users only edit the wiki markup and have no direct control over the actual html results. This results in consistent pages and fast editing. An instant preview lets users see changes as they are made.</p>
<p>Data is stored in the Open Dental database. Images are stored in the <a href="atozfolder.html">A to Z Folder</a> in the <i>Wiki </i>subfolder.</p>
<h2>Toolbar</h2>
<img src="images/wikitoolbar.png" width="891" height="27"/><ul>
<li><b>Back / Fwd</b>: Move back or forward one page.</li>
<li><b>Setup</b>: Opens the Wiki Setup window. Customize the html master page and embedded stylesheet. Enable wiki link preferences. <br/><img src="images/wikiSetup.png" width="658" height="455" class="ImageInParagraph"/><ul>
<li><b>Detect wiki links in textboxes and grids</b>: Check to enable right-click options to open wiki links from textboxes and grids, e.g., from Tasks. To create a wiki link in a task, use double brackets around the page title: [[Example Wiki Link]].</li>
<li><b>Allow new wiki pages from links</b>: Check to prompt users to create a wiki page when following a link for a wiki page that does not exist. If unchecked, when a link for a wiki page that does not exist a warning displays for the user instead.</li>
</ul>
</li>
<li><b>Home</b>: Click to go to the wiki home page. <ul>
<li><b>Save as Home Page</b>: Use the dropdown, then click to set the selected wiki page as the home page for the currently logged-on user. Each user can have their own home page. </li>
</ul>
</li>
<li><b>Edit</b>: Click to edit the current wiki page. See <a href="wikiaddedit.html">Wiki Edit</a></li>
<li><b>Print</b>: Click to print the current wiki page.</li>
<li><b>Rename</b>: Click to rename the current wiki page. Page names determine the text that displays in the search. All links to that page are automatically updated when the page is renamed.</li>
<li><b>Archive</b>: Click to archive the current wiki page, removing it from the Search. Archived files can still be accessed (and restored) via the Search by checking Archived Only.</li>
<li><b>History</b>: Click to view the <a href="wikihistory.html">Wiki History</a>. Review a complete dated archive of all previous versions of the current page. </li>
<li><b>Drafts</b>: Click to view a list of saved drafts for the current page.</li>
<li><b>In-Links</b>: Click view all incoming links (pages linked) to the current page.</li>
<li><b>Add</b>: Click to create a new wiki page.</li>
<li><b>Lists</b>: Click to view, create and edit <a href="wikilists.html">Wiki Lists</a>.</li>
<li><b>Search</b>: Click to search the wiki for specific text. See <a href="wikisearch.html">Wiki Search</a>.</li>
</ul>
<br/><h2>Troubleshooting</h2>
<p>If an unhandled exception occurs when trying to access a Wiki page (e.g., no ending tag), try following these steps:</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Search for the corrupt page.</li>
<li>On the error, click <b>Continue</b>.</li>
<li>Click <b>OK</b>.</li>
<li>On the error, click <b>Continue</b>.</li>
<li>Click <b>Edit</b> and manually fix the page, or click <b>History</b> and revert to a previous version of the page.</li>
</ol>
<p>Also see: <a href="wikimarkup.html">Wiki Markup</a></p>
</div>
</div>
</body>
</html>```
