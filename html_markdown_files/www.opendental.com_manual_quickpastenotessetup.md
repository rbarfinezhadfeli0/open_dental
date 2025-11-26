# File: ./www.opendental.com/manual/quickpastenotessetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Quick Paste Notes Setup</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('quickpastenotessetup','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/quickpastenotessetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/quickpastenotessetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/quickpastenotessetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/quickpastenotessetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/quickpastenotessetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/quickpastenotessetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/quickpastenotessetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/quickpastenotessetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/quickpastenotessetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/quickpastenotessetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/quickpastenotessetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/quickpastenotessetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/quickpastenotessetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/quickpastenotessetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/quickpastenotessetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/quickpastenotessetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/quickpastenotessetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/quickpastenotessetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/quickpastenotessetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/quickpastenotessetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/quickpastenotessetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/quickpastenotessetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/quickpastenotessetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/quickpastenotessetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/quickpastenotessetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/quickpastenotessetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/quickpastenotessetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/quickpastenotessetup.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Quick Paste Notes Setup</p></div>
<div class="GeneralPageContent">
<p>Organize and create new Quick Paste Notes and categories from this window.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <b>Quick Paste Notes</b>.</p>
<img src="images/quickPasteNotes.png" width="915" height="508"/><p>Alternatively, right-click in a <a href="rightclicktextboxes.html">Text Box</a> that supports Quick Paste Notes and select <i>Insert Quick Paste Note</i>.</p>
<h2>Category</h2>
<p class="MarginBottomZero">Notes can be organized by category. The buttons below the list are specific to categories. Options are only enabled when opening from Setup for users with the <i>Auto/Quick Note Edit </i><a href="permissions.html">Permission</a>. </p>
<ul>
<li><b>Add</b>: Add a new category. See <a href="quickpastecategory.html">Quick Paste Category</a>.</li>
<li><b>Delete</b>: Delete the selected category, along with all Quick Paste Notes within the category.</li>
<li><b>Up / Down</b>: Organize the list by moving a category up or down the list.</li>
<li>Double-click a category to edit the name or default types. </li>
</ul>
<p class="MarginBottomGap">These changes are saved immediately.</p>
<h2>Note</h2>
<p>All Quick Paste Notes currently in a category are listed in the Notes grid.</p>
<p class="MarginBottomZero">Use the buttons at the bottom to make changes to Quick Paste Notes within the selected category. Options (unless otherwise noted) are only enabled when opening from Setup for users with the <i>Auto/Quick Note Edit</i> permission. </p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Add a new Quick Paste Note. See <a href="quickpastenoteedit.html">Quick Paste Note Edit</a>.</li>
<li><b>Edit</b>: Only appears when window is opened from Setup. Opens the Edit Quick Paste Note Edit the selected Quick Paste Note.</li>
<li><b>View</b>: Only appears when window is opened from a right-click in a text box or a user does not have the <i>Auto/Quick Note Edit</i> permission. Opens Edit Quick Paste Note. Information is read-only and cannot be edited when opening from View. </li>
<li><b>Up / Down</b>: Organize the Quick Paste Notes by moving them up or down the list. </li>
<li><b>Alphabetize</b>: Organize the Quick Paste notes in alphabetical order. Notes can be organized by Abbreviation or Note.</li>
</ul>
<p><b>Save / OK</b>: Changes depending on how the window was opened. Click Save to exit the window and keep any changes to Quick Paste Notes. Click OK to close the window and insert the selected Quick Paste Note into a text box. </p>
<h2>Using Quick Paste Notes</h2>
<p class="MarginBottomZero">To use Quick Paste Notes, follow the steps below: </p>
<ul class="MarginBottomGap">
<li>Create a Quick Paste Note. <ol>
<li> Click <b>Add</b> on the left to create a new category, or highlight an existing category. The selected category determines which areas the Quick Paste Note works.</li>
<li>Click <b>Add</b> at the bottom to create a new note, or highlight an existing note and click Edit. </li>
</ol>
</li>
<li>Enter the Quick Paste Note when entering text into a supported area (e.g., procedure notes, commlogs, etc.)  <ul>
<li>Enter ? followed by the abbreviation to enter the predetermined note. (e.g., Enter <i>?cancel</i> to enter the note <i>Patient cancelled upcoming appointment.</i>).</li>
<li>Alternatively, in supported areas right-click can be used to insert a Quick Paste Note. Right-click a supported text area, select <b>Insert Quick Paste Note</b>, choose a note to add from the list, and click <b>OK</b>. </li>
</ul>
</li>
</ul>
</div>
</div>
</body>
</html>```
