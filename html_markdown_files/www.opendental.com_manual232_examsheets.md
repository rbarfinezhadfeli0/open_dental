# File: ./www.opendental.com/manual232/examsheets.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Exam Sheet</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('examsheets','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/examsheets.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/examsheets.html" >v24.2</option><option value="https://www.opendental.com/manual241/examsheets.html" >v24.1</option><option value="https://www.opendental.com/manual233/examsheets.html" >v23.3</option><option value="https://www.opendental.com/manual232/examsheets.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/examsheets.html" >v23.1</option><option value="https://www.opendental.com/manual224/examsheets.html" >v22.4</option><option value="https://www.opendental.com/manual223/examsheets.html" >v22.3</option><option value="https://www.opendental.com/manual222/examsheets.html" >v22.2</option><option value="https://www.opendental.com/manual221/examsheets.html" >v22.1</option><option value="https://www.opendental.com/manual214/examsheets.html" >v21.4</option><option value="https://www.opendental.com/manual213/examsheets.html" >v21.3</option><option value="https://www.opendental.com/manual212/examsheets.html" >v21.2</option><option value="https://www.opendental.com/manual211/examsheets.html" >v21.1</option><option value="https://www.opendental.com/manual205/examsheets.html" >v20.5</option><option value="https://www.opendental.com/manual204/examsheets.html" >v20.4</option><option value="https://www.opendental.com/manual203/examsheets.html" >v20.3</option><option value="https://www.opendental.com/manual202/examsheets.html" >v20.2</option><option value="https://www.opendental.com/manual201/examsheets.html" >v20.1</option><option value="https://www.opendental.com/manual194/examsheets.html" >v19.4</option><option value="https://www.opendental.com/manual193/examsheets.html" >v19.3</option><option value="https://www.opendental.com/manual192/examsheets.html" >v19.2</option><option value="https://www.opendental.com/manual191/examsheets.html" >v19.1</option><option value="https://www.opendental.com/manual184/examsheets.html" >v18.4</option><option value="https://www.opendental.com/manual183/examsheets.html" >v18.3</option><option value="https://www.opendental.com/manual182/examsheets.html" >v18.2</option><option value="https://www.opendental.com/manual181/examsheets.html" >v18.1</option><option value="https://www.opendental.com/manual174/examsheets.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Exam Sheet</p></div>
<div class="GeneralPageContent">
<p>Exam Sheets are used to track findings during exams. </p>
<p>In the <a href="chart.html">Chart Module</a> toolbar, click <b>Exam Sheet</b>.</p>
<img src="images/examSheets.png" width="902" height="620"/><p class="MarginBottomZero">Users can create multiple Exam Sheets and customize them with their own layout and content. </p>
<ul class="MarginBottomGap">
<li>To customize Exam Sheets see <a href="sheetsexamsheets.html">Exam Sheet Layout</a>.</li>
<li>Exam sheets support <a href="electronicsignatures.html">Electronic Signatures</a>.</li>
<li>Completed patient Exam Sheets can be viewed in the Chart Module, Progress Notes, and Account Module.</li>
</ul>
<p><b>Setup</b>: Click to quickly access <a href="sheets.html">Sheets</a> to add or customize Exam Sheets.</p>
<p><b>Show Types Filter</b>: Filter the grid by sheet type.</p>
<p><b>Exam Sheets Grid</b>: Displays a dated log of existing Exam Sheets for this patient. Highlight an Exam Sheet on the grid to see a read-only preview to the right. Double-click to edit the Exam Sheet.</p>
<p class="MarginBottomZero"><b>Add</b>: Click to create a new Exam Sheet. The Pick Sheet is opened. </p>
<ul>
<li>Sheets with a type of <i>Exam Sheet</i> are listed.</li>
<li>Double-click an Exam Sheet or highlight an Exam Sheet and click <b>OK</b> to open. The selected Exam Sheet is opened in the <a href="sheetsfillout.html">Fill Sheet</a> window.</li>
</ul>
<p class="MarginBottomGap"><img src="images/examsheetPick.png" width="382" height="238"/></p>
<p>Below is an example of the internal Exam Sheet. Pale yellow areas indicate data entry areas. </p>
<img src="images/examSheetFill.png" width="819" height="698"/><p>Exam Sheets can remain open while working in other windows. If changes are made to the Exam Sheet by another user while the sheet is open, the last user to click <b>OK</b> is prompted to overwrite the other user's changes or cancel the current changes.</p>
<p>Use the options at the bottom of the Fill Sheet window to print or email the Exam Sheet. Created Exam Sheets can be viewed in the patient's Chart Module and Account Module.</p>
</div>
</div>
</body>
</html>```
