# File: ./www.opendental.com/manual232/orthochartsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Ortho Chart Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('orthochartsetup','orthochart','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/orthochartsetup.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/orthochartsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/orthochartsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/orthochartsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/orthochartsetup.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/orthochartsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/orthochartsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/orthochartsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/orthochartsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/orthochartsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/orthochartsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/orthochartsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/orthochartsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/orthochartsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/orthochartsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/orthochartsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/orthochartsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/orthochartsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/orthochartsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/orthochartsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/orthochartsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/orthochartsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/orthochartsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/orthochartsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/orthochartsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/orthochartsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/orthochartsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/orthochartsetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Ortho Chart Setup</p></div>
<div class="GeneralPageContent">
<p>The Ortho Chart can have customized tabs and fields to meet the needs of an office.</p>
<p>In the <a href="orthochart.html">Ortho Chart</a>, click <b>Setup</b>.</p>
<img src="images/displayFieldsOrtho.png" width="640" height="528"/><p class="MarginBottomZero">Alternatively: </p>
<ul class="MarginBottomGap">
<li>In <a href="orthosetup.html">Ortho Setup</a>, click Edit next to Ortho Chart Display Fields.</li>
<li>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="displayfields.html">Display Fields</a>, Ortho Chart.</li>
</ul>
<p class="MarginBottomZero">Before entering information in the <a href="orthochart.html">Ortho Chart</a>, there are a few setup steps. The information defined during setup affects the tabs, columns, and info that shows in the Ortho Chart. </p>
<ul class="MarginBottomGap">
<li>Create <a href="custompatientfields.html">Patient Fields</a>. This information displays in the upper right of the Ortho Chart.</li>
<li>To show <a href="orthocase.html">Ortho Case</a>, check <i>Show ortho case information in the ortho chart</i> in <a href="orthosetup.html">Ortho Setup</a>.</li>
<li>Define Ortho Chart tabs. Tabs can be useful to organize information.</li>
<li>Define the columns of information that show in the Ortho Chart.</li>
</ul>
<p><div class="Note">Note: If the total width of all <i>Fields Showing</i> in an Ortho Chart Tab exceeds 915, when printing from <a href="orthochart.html">Ortho Chart</a>, some fields may be cut off.</div>
</p>
<h2>Add Tabs</h2>
<p>Tabs are a way to organize Ortho Chart information. By default, there is one tab labeled <i>Ortho Chart</i>, additional tabs can be added. Each tab can have the same or different columns showing.</p>
<p><div class="Note">Note: <ul>
<li>The name of the first tab determines the text on the Ortho Chart button in the Chart Module toolbar and the text of the <i>Go to Ortho Chart</i> right-click option when clicking on an appointment in the Appointments Module.</li>
<li>When there are multiple tabs, the Ortho Chart button in the toolbar includes a dropdown for each tab.</li>
</ul>
</div>
</p>
<p>In Setup Display Fields, click <b>Setup Tabs</b>.</p>
<img src="images/orthoChartTabSetup.png" width="370" height="351"/><p>Use the <b>Up</b> and <b>Down</b> buttons to reorder tabs.</p>
<p>Click <b>Add</b> to create a new tab or double-click an existing tab name to edit.</p>
<img src="images/orthoChartTabEdit.png" width="318" height="174"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Tab Name</b>: Enter the tab name, then click <b>Save</b>. </li>
<li><b>Is Hidden</b>: Check to hide this tab.</li>
</ul>
<h2>Add Columns to a Tab</h2>
<p>The columns that show on an Ortho Chart tab are also set in <a href="displayfields.html">Display Fields</a>. Columns can allow text entry, offer selection from a pick list, or show a signature box.</p>
<p>On the Setup Display Fields window, click the Tab dropdown and select the tab. </p>
<p>The fields listed under Fields Showing reflect the columns that show for the tab. The fields listed under Available Fields are options that are not currently showing.</p>
<p class="MarginBottomZero">Add or remove columns as needed.  </p>
<ul>
<li>To add a field option that already exists, highlight it under Available Fields then click the <b>left arrow</b>.</li>
<li>To add a field name that is not listed, enter the description in the New Field box then click the <b>left arrow</b>.</li>
<li>To remove a field, highlight it under <i>Fields Showing</i> then click the <b>right arrow</b>. If the field has been used by any patient (i.e., data has been entered into the field) the user is warned when attempting to remove the field. Click <b>OK</b> to continue removing the field. Click <b>Cancel</b> to keep the field instead.</li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: A field is hidden when it is moved into Available Fields for every tab.</div>
</p>
<p>To edit a column name, customize width, or create pick list options, double-click the field under Fields Showing.</p>
<img src="images/displayFieldsOrthoEdit.png" width="512" height="427"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Description Override</b>: When entered, the name of the column as it shows in the Ortho Chart. The override name does not show in Available Fields. </li>
<li><b>Description</b>: The name of the column as it shows in the Fields Showing list. Changing the description name on an existing field that contains data creates a new field with the new name which does not contain data. The original field moves into Available Fields and retains the original data.</li>
<li><b>Minimum Width</b>: A fixed minimum column width based on the length of the name(s).</li>
<li><b>Column Width</b>: Enter the actual width of the column. If the minimum width is more than the column width, adjust the column width to match for best visual results.</li>
<li><b>Type</b>: Select the type from the following: <ul>
<li><b>Text</b>: Enter custom text into the field. </li>
<li><b>Pick List</b>: Create a pick list to choose from. A text box appears to enter the pick list. When creating a pick list, the user clicks on a cell in this column to select from a dropdown. Enter one selection item per line. Use the up and down arrows to reorder items. </li>
<li><b>Signature</b>: Add a signature box to the Ortho Chart and this column indicates when an electronic signature is valid.</li>
<li><b>Provider</b>: Displays the provider associated with the row. </li>
</ul>
</li>
</ul>
</div>
</div>
</body>
</html>```
