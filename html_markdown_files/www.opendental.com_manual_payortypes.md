# File: ./www.opendental.com/manual/payortypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Payor Type / SOP Codes</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('payortypes','ehrcqm','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/payortypes.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/payortypes.html" >v24.2</option><option value="https://www.opendental.com/manual241/payortypes.html" >v24.1</option><option value="https://www.opendental.com/manual233/payortypes.html" >v23.3</option><option value="https://www.opendental.com/manual232/payortypes.html" >v23.2</option><option value="https://www.opendental.com/manual231/payortypes.html" >v23.1</option><option value="https://www.opendental.com/manual224/payortypes.html" >v22.4</option><option value="https://www.opendental.com/manual223/payortypes.html" >v22.3</option><option value="https://www.opendental.com/manual222/payortypes.html" >v22.2</option><option value="https://www.opendental.com/manual221/payortypes.html" >v22.1</option><option value="https://www.opendental.com/manual214/payortypes.html" >v21.4</option><option value="https://www.opendental.com/manual213/payortypes.html" >v21.3</option><option value="https://www.opendental.com/manual212/payortypes.html" >v21.2</option><option value="https://www.opendental.com/manual211/payortypes.html" >v21.1</option><option value="https://www.opendental.com/manual205/payortypes.html" >v20.5</option><option value="https://www.opendental.com/manual204/payortypes.html" >v20.4</option><option value="https://www.opendental.com/manual203/payortypes.html" >v20.3</option><option value="https://www.opendental.com/manual202/payortypes.html" >v20.2</option><option value="https://www.opendental.com/manual201/payortypes.html" >v20.1</option><option value="https://www.opendental.com/manual194/payortypes.html" >v19.4</option><option value="https://www.opendental.com/manual193/payortypes.html" >v19.3</option><option value="https://www.opendental.com/manual192/payortypes.html" >v19.2</option><option value="https://www.opendental.com/manual191/payortypes.html" >v19.1</option><option value="https://www.opendental.com/manual184/payortypes.html" >v18.4</option><option value="https://www.opendental.com/manual183/payortypes.html" >v18.3</option><option value="https://www.opendental.com/manual182/payortypes.html" >v18.2</option><option value="https://www.opendental.com/manual181/payortypes.html" >v18.1</option><option value="https://www.opendental.com/manual174/payortypes.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Payor Type / SOP Codes</p></div>
<div class="GeneralPageContent">
<p>Payor types refer to the system of payment (SOP code) that identifies a patient's payor status.</p>
<p>In the <a href="family.html">Family Module</a>, Patient Information area, double-click on the Payor Types row. </p>
<img src="images/payortype.gif" width="712" height="232"/><p>A historical log of the patient's payor types will show. Payor types are used in some <a href="ehrcqm.html">EHR Clinical Quality Measures</a> calculations. A patient's payor type selection may determine if a patient counts in a CQM denominator. </p>
<p><div class="Note">Note: If you do not see the Payor Types row, it may need to be added to Fields Showing in <a href="displayfields.html">Display Fields</a>, Patient Information.</div>
</p>
<p>Click Add to select a payor type, or double-click a row to edit.</p>
<img src="images/payortypeEdit.gif" width="634" height="275"/><p><li><b>Start Date</b>: Defaults to today's date. <ul>
<li>The <b>Date End</b> for the previous payor type entry (if it exists) will be the start date of the new entry. Otherwise, the Date End will be <i>Current</i>.</li>
</ul>
</li>
<li><b>Payor Type</b>: A list of all SOP codes. If the list is blank, SOP codes must be downloaded. See <a href="codesystemimport.html">Importing Code Systems</a>.</li>
<li><b>Note</b>: Enter any notes about this payor type for the patient.</li>
</p>
</div>
</div>
</body>
</html>```
