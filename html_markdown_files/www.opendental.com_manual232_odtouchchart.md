# File: ./www.opendental.com/manual232/odtouchchart.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ODTouch: Chart</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('odtouchchart','odtouchhome','odtouchsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/odtouchchart.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/odtouchchart.html" >v24.2</option><option value="https://www.opendental.com/manual241/odtouchchart.html" >v24.1</option><option value="https://www.opendental.com/manual233/odtouchchart.html" >v23.3</option><option value="https://www.opendental.com/manual232/odtouchchart.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/odtouchchart.html" >v23.1</option><option value="https://www.opendental.com/manual224/odtouchchart.html" >v22.4</option><option value="https://www.opendental.com/manual223/odtouchchart.html" >v22.3</option><option value="https://www.opendental.com/manual222/odtouchchart.html" >v22.2</option><option value="https://www.opendental.com/manual221/odtouchchart.html" >v22.1</option><option value="https://www.opendental.com/manual214/odtouchchart.html" >v21.4</option><option value="https://www.opendental.com/manual213/odtouchchart.html" >v21.3</option><option value="https://www.opendental.com/manual212/odtouchchart.html" >v21.2</option><option value="https://www.opendental.com/manual211/odtouchchart.html" >v21.1</option><option value="https://www.opendental.com/manual205/odtouchchart.html" >v20.5</option><option value="https://www.opendental.com/manual204/odtouchchart.html" >v20.4</option><option value="https://www.opendental.com/manual203/odtouchchart.html" >v20.3</option><option value="https://www.opendental.com/manual202/odtouchchart.html" >v20.2</option><option value="https://www.opendental.com/manual201/odtouchchart.html" >v20.1</option><option value="https://www.opendental.com/manual194/odtouchchart.html" >v19.4</option><option value="https://www.opendental.com/manual193/odtouchchart.html" >v19.3</option><option value="https://www.opendental.com/manual192/odtouchchart.html" >v19.2</option><option value="https://www.opendental.com/manual191/odtouchchart.html" >v19.1</option><option value="https://www.opendental.com/manual184/odtouchchart.html" >v18.4</option><option value="https://www.opendental.com/manual183/odtouchchart.html" >v18.3</option><option value="https://www.opendental.com/manual182/odtouchchart.html" >v18.2</option><option value="https://www.opendental.com/manual181/odtouchchart.html" >v18.1</option><option value="https://www.opendental.com/manual174/odtouchchart.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ODTouch: Chart</p></div>
<div class="GeneralPageContent">
<p>View and chart patient treatment as needed. </p>
<p>From the <a href="odtouchhome.html">ODTouch: Home Screen</a>, tap Chart.</p>
<img src="images/odtouchChart.png" width="767" height="508"/><p>The Chart Home screen mimics the <a href="chart.html">Chart Module</a> in Open Dental. This screen is not available when using a mobile phone device.</p>
<p><div class="Note">Note: Text entered in ODTouch can be entered via the on-screen keyboard, an attachable keyboard, or using a stylus pen (e.g., Apple Pencil or Samsung S Pen).</div>
</p>
<p><b>Notes</b>: Tap the edit icon to add or edit odontogram notes. </p>
<p><b>Patient Info</b>: View a read-only copy of patient information.</p>
<p><b>Progress Notes</b>: View a read-only copy of progress notes. Tap an item to view additional information. Tap the filter icon in the upper right to filter the progress notes. </p>
<h2>Edit Chart Information</h2>
<p>Tap the edit icon in the bottom right to edit patient chart information or chart procedures.</p>
<img src="images/odtouchChartEdit.png" width="767" height="508"/><p class="MarginBottomZero">Tip for entering treatment: </p>
<ul class="MarginBottomGap">
<li>Use the numbers on the left and right to quickly select teeth that need treatment. </li>
<li>Use Procedure Buttons to quickly chart a specific procedure or set of procedures. </li>
<li>Search procedure codes in the bottom right to find additional procedures. </li>
<li>Tap the caret to toggle between primary and permanent teeth. </li>
</ul>
<h2>Procedure Edit</h2>
<p>Tap an upcoming procedure to make edits. </p>
<img src="images/odtouchProcedureEdit.png" width="767" height="508"/><p>Alternatively, when editing an appointment, tap a procedure to make edits.</p>
<p>Information in this window mimics the information found in the <a href="procedureedit.html">Procedure</a> Info window in Open Dental.</p>
<p>Tap an item to make edits. Tap <b>Edit Note</b> to add or edit procedure notes. Tap <b>OK</b> to save changes.</p>
</div>
</div>
</body>
</html>```
