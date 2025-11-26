# File: ./www.opendental.com/manual243/sheetscombobox.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sheet ComboBox</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetscombobox','sheetsetup','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/sheetscombobox.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/sheetscombobox.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetscombobox.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetscombobox.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetscombobox.html" >v23.2</option><option value="https://www.opendental.com/manual231/sheetscombobox.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetscombobox.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetscombobox.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetscombobox.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetscombobox.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetscombobox.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetscombobox.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetscombobox.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetscombobox.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetscombobox.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetscombobox.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetscombobox.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetscombobox.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetscombobox.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetscombobox.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetscombobox.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetscombobox.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetscombobox.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetscombobox.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetscombobox.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetscombobox.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetscombobox.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetscombobox.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sheet ComboBox</p></div>
<div class="GeneralPageContent">
<p>Combo boxes are Sheet Field Types that allow users to select a single option from a pick list. </p>
<p>In <a href="sheetsetup.html">Edit Sheet Def</a>, click <b>ComboBox</b>.</p>
<img src="images/sheetsComboBoxSetup.png" /><p>Alternatively, double-click an existing combo box from the Sheet Def Edit window to edit it.</p>
<img src="images/sheetsComboBox.gif" width="324" height="140"/><p>Users will click the combo box to view options, then click an option to select it.</p>
<p>The list on the right indicates the current options in the combo box.</p>
<p><b>X/Y Pos</b>: Determines the position of the upper left corner of the combo box in relation to the x and y axis. X = horizontal. Y = vertical.</p>
<p><b>Width/Height</b>: The size of the combo box.</p>
<p><b>Tab Order</b>: The order of the combo box when users press Tab on the generated form.</p>
<p><b>Reportable Name</b>: A unique name tied to the combo box. Used to report this data in custom queries.</p>
<p><b>Mobile Caption</b>: Caption to identify field in a Mobile Sheet.</p>
<p><b>Option</b>: Type in the box and and click <b>Add</b> to the list of available response for this combo box. See Add a Combo Box below.</p>
<p><b>Pre-set Options</b>: Choose to populate with default options. Options can be added to as needed. Click <i>Clear</i> to undo selection.</p>
<h2>Add a Combo Box</h2>
<p>There are two different types of combo boxes that can be added.</p>
<p class="MarginBottomZero"><b>Combo Box with custom options</b>: </p>
<ol class="MarginBottomGap">
<li>Click <b>ComboBox</b>.</li>
<li>Add options to the combo box. </li>
<ul>
<li>Type an option into the Option box.</li>
<li>Click <b>Add</b> to add an item to the list on the right.  <li>Use the <b>Remove</b> button to delete options. </li>
<li>Use the <b>Up</b>/<b>Down</b> arrows to reorder options.</li>
</li>
</ul>
<li>Change the width and height of the combo box so that it fits all text.</li>
<li>Click <b>OK</b> to add the combo box to the sheet.</li>
<li>Move the combo box to the correct location on the sheet.</li>
</ol>
<p class="MarginBottomZero"><b>Combo Box with preset options</b>:  </p>
<ol class="MarginBottomGap">
<li>Click <b>ComboBox</b>.</li>
<li>Select a <i>Pre-set option</i> (e.g., <i>Gender Identity</i>, <i>Sexual Orientation</i>, etc). </li>
<li>Change the width and height of the combo box so that it fits all text.</li>
<li>Click <b>OK</b>.</li>
<li>Add additional options to the combo box as needed. </li>
<ul>
<li>Type an option into the <i>Option</i> box.</li>
<li>Click <b>Add</b> to add an item to the list on the right. </li>
</ul>
<li>Click <b>OK</b> to add the combo box to the sheet.</li>
<li>Move the combo box to the correct location on the sheet.</li>
</ol>
<p>After the combo box is added to a sheet, users can double-click an existing combo box field to edit options. Changing the combo box type will clear out any existing options. </p>
</div>
</div>
</body>
</html>```
