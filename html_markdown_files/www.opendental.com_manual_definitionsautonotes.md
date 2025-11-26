# File: ./www.opendental.com/manual/definitionsautonotes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Auto Note Categories</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionsautonotes','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/definitionsautonotes.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/definitionsautonotes.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionsautonotes.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionsautonotes.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionsautonotes.html" >v23.2</option><option value="https://www.opendental.com/manual231/definitionsautonotes.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionsautonotes.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionsautonotes.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionsautonotes.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionsautonotes.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionsautonotes.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionsautonotes.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionsautonotes.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionsautonotes.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionsautonotes.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionsautonotes.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionsautonotes.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionsautonotes.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionsautonotes.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionsautonotes.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionsautonotes.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionsautonotes.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionsautonotes.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionsautonotes.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionsautonotes.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionsautonotes.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionsautonotes.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionsautonotes.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Auto Note Categories</p></div>
<div class="GeneralPageContent">
<p>Organize Auto Notes using Auto Note Categories.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Auto Note Categories.</p>
<img src="images/definitionsAutoNotes.png" width="713" height="389"/><p>The Auto Note Categories definition determines which category folders are available to organize <a href="autonotes.html">Auto Notes</a>. This list is empty by default. Add categories as needed.</p>
<p>Categories can be nested within each other. If a category is nested in another category, the containing category is listed as the <i>Parent Category</i>. </p>
<img src="images/definitionsAutoNotesTreeView.png" width="175" height="133"/><p>To change the order of the categories as viewed in the auto note window, see <a href="autonotesetup.html">Auto Note Setup</a>. Changing the order in the Definitions window does not change the view in the Auto Notes window.</p>
<p class="MarginBottomZero">Double-click an existing item to edit or click<b> Add</b> to create a new item. The Edit Definition window opens.<br/><img src="images/definitionEditAutoNotes.png" width="425" height="207" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the category folder name.</li>
<li><b>Parent Category</b>: (Optional) Click <b>[...]</b> to open the Definition Picker (see below) and select a containing category to nest this category into. Click the red <b>X</b> to disassociate the Parent Category. Categories can also be nested from Setup, Auto Notes.</li>
<img src="images/definitionAutoNotePicker.png" width="520" height="402"/><li><b>Delete</b>: Permanently remove the Auto Note Category definition. Auto Notes sorted in the category are not deleted and will no longer be categorized in the Auto Notes list.</li>
</ul>
<p></p>
<p>Click <b>Save</b> to close the window and keep changes</p>
</div>
</div>
</body>
</html>```
