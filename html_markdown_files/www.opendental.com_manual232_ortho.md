# File: ./www.opendental.com/manual232/ortho.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Ortho</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ortho','+chartTabs','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/ortho.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/ortho.html" >v24.2</option><option value="https://www.opendental.com/manual241/ortho.html" >v24.1</option><option value="https://www.opendental.com/manual233/ortho.html" >v23.3</option><option value="https://www.opendental.com/manual232/ortho.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/ortho.html" >v23.1</option><option value="https://www.opendental.com/manual224/ortho.html" >v22.4</option><option value="https://www.opendental.com/manual223/ortho.html" >v22.3</option><option value="https://www.opendental.com/manual222/ortho.html" >v22.2</option><option value="https://www.opendental.com/manual221/ortho.html" >v22.1</option><option value="https://www.opendental.com/manual214/ortho.html" >v21.4</option><option value="https://www.opendental.com/manual213/ortho.html" >v21.3</option><option value="https://www.opendental.com/manual212/ortho.html" >v21.2</option><option value="https://www.opendental.com/manual211/ortho.html" >v21.1</option><option value="https://www.opendental.com/manual205/ortho.html" >v20.5</option><option value="https://www.opendental.com/manual204/ortho.html" >v20.4</option><option value="https://www.opendental.com/manual203/ortho.html" >v20.3</option><option value="https://www.opendental.com/manual202/ortho.html" >v20.2</option><option value="https://www.opendental.com/manual201/ortho.html" >v20.1</option><option value="https://www.opendental.com/manual194/ortho.html" >v19.4</option><option value="https://www.opendental.com/manual193/ortho.html" >v19.3</option><option value="https://www.opendental.com/manual192/ortho.html" >v19.2</option><option value="https://www.opendental.com/manual191/ortho.html" >v19.1</option><option value="https://www.opendental.com/manual184/ortho.html" >v18.4</option><option value="https://www.opendental.com/manual183/ortho.html" >v18.3</option><option value="https://www.opendental.com/manual182/ortho.html" >v18.2</option><option value="https://www.opendental.com/manual181/ortho.html" >v18.1</option><option value="https://www.opendental.com/manual174/ortho.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Ortho</p></div>
<div class="GeneralPageContent">
<p>Chart orthodontic hardware and track ortho treatment progress from the Ortho tab.</p>
<p>In the <a href="chart.html">Chart Module</a>, click the Ortho tab.</p>
<img src="images/orthoChartModule.png" width="915" height="536"/><p>Users can choose to see only information relating to the patient's orthodontic treatment and hide general chart notes and procedures. </p>
<p>In <a href="orthosetup.html">Ortho Setup</a>, enable <i>Show Ortho button and tab in Chart module</i> to use this feature.</p>
<h2>Filters</h2>
<img src="images/orthoTabFilters.png" width="199" height="121"/><p class="MarginBottomZero"><b>Tooth chart ortho mode</b>: Determines the view of the odontogram.  </p>
<ul class="MarginBottomGap">
<li>Checked: Enables tooth chart ortho mode in the Ortho tab only. The odontogram will display the facial view of the teeth only.</li>
<li>Unchecked: Disables tooth chart ortho mode in the Ortho tab.</li>
</ul>
<p class="MarginBottomZero"><b>Show Ortho grids</b>: Determine if the ortho grids or progress notes are shown.  </p>
<ul class="MarginBottomGap">
<li>Checked: Shows the Hardware and Ortho Chart Tabs. Progress Notes are hidden.</li>
<li>Unchecked: Shows Progress Notes. Hardware and Ortho Chart Tabs are hidden.</li>
</ul>
<p><div class="Note">Note: When <i>Automatically check and uncheck ortho mode and show grid checkboxes based on selection of Ortho tab</i>, is enabled in <a href="preferences.html">Preferences</a>, <i>Tooth Chart ortho mode</i> and <i> Show Ortho grids</i> are automatically checked when opening the Ortho tab and unchecked upon exiting the Ortho tab.</div>
</p>
<p class="MarginBottomZero"><b>Show Graphics</b>: Determine if ortho graphics (e.g., brackets) are shown on the <a href="graphicaltoothchart.html">Graphical Tooth Chart</a>. </p>
<ul class="MarginBottomGap">
<li>Checked: Ortho graphics are enabled in all tabs of the Chart Module.</li>
<li>Unchecked: Ortho graphics are disabled in all tabs of the Chart Module.</li>
</ul>
<p class="MarginBottomZero"><b>Show Hidden</b>: Determine if Ortho graphics marked hidden are displayed on the Graphical Tooth Chart when <i>Show Graphics</i> is checked. </p>
<ul class="MarginBottomGap">
<li>Checked: Hidden graphics are displayed.</li>
<li>Unchecked: Hidden graphics are not displayed.</li>
</ul>
<p><b>Show Exam Date</b>: The exam date corresponding to the hardware listed in the Hardware tab. Click to view a different exam date. Adding new hardware, prescriptions, or copying from an existing exam will create a new exam with today's date.</p>
<h2>Hardware</h2>
<img src="images/orthoTabHardware.png" width="217" height="189"/><p><b>Prescriptions</b>: Click to add new <a href="orthoprescriptionssetup.html">Ortho Prescriptions</a> to the patient. The Select Ortho Prescription window will open.</p>
<img src="images/orthoPrescriptionAdd.png" width="718" height="347"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Highlight prescriptions from the <i>Available</i> list. </li>
<li>Click <b>Select</b> to move to the <i>Selected</i> list. </li>
<li>Highlight items from the <i>Selected</i> list and click <b>Remove</b> to remove prescription(s) from the list. Multiple prescriptions can be added to the <i>Selected</i> list. </li>
<li>Click <b>OK</b> to add the selected Ortho Prescriptions to the patient's chart. </li>
<li>Click <b>Cancel</b> to close the window without adding any prescriptions to the chart.</li>
</ul>
<p><b>Add Single</b>: Select teeth and click to add <a href="orthohardwaresetup.html">Ortho Hardware</a>. The Add Ortho Hardware window will open.</p>
<img src="images/orthoAddHardware.png" width="630" height="281"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Select hardware to add. Multiple hardware types can be selected (Click and drag or Ctrl + click to select multiple). </li>
<li>Click <b>OK</b> to add. </li>
<li>Click <b> Cancel</b> to close the window without adding.</li>
</ul>
<p><b>Hide / Unhide</b>: Select hardware items from the grid and click <b>Hide</b> to remove graphics from the tooth chart. Select hardware items again and click <b>Unhide</b> to display hardware on the tooth chart again. </p>
<p><b>Delete</b>: Select hardware items from the grid and click to delete. Press Ctrl + click or click and drag to choose multiple items.</p>
<p><b>Copy</b>: Select an exam date and hardware items from the grid and click to copy to today's date. Press Ctrl + click to choose multiple items. If no items are selected, all items from the previous exam date will be copied to today's date.</p>
<h2>Hardware Tab</h2>
<img src="images/orthoTabHardwareTab.png" width="697" height="438"/><p>Displays all hardware information for the selected exam date.</p>
<p>Double-click a hardware item to edit information or delete hardware.</p>
<img src="images/orthoHardwareEdit.png" width="534" height="281"/><p>Right-click selected rows to delete hardware.</p>
<h2>Ortho Chart Tab</h2>
<p>Displays the <a href="orthochart.html">Ortho Chart</a>. </p>
<p>Double-click to launch the Ortho Chart window. From here, users can edit or add a new entry to the Ortho Chart. </p>
</div>
</div>
</body>
</html>```
