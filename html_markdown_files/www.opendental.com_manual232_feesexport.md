# File: ./www.opendental.com/manual232/feesexport.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title>Open Dental Software - Fees Export</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('feesexport','feescheduletools','procedurecodes','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/feesexport.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/feesexport.html" >v24.2</option><option value="https://www.opendental.com/manual241/feesexport.html" >v24.1</option><option value="https://www.opendental.com/manual233/feesexport.html" >v23.3</option><option value="https://www.opendental.com/manual232/feesexport.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/feesexport.html" >v23.1</option><option value="https://www.opendental.com/manual224/feesexport.html" >v22.4</option><option value="https://www.opendental.com/manual223/feesexport.html" >v22.3</option><option value="https://www.opendental.com/manual222/feesexport.html" >v22.2</option><option value="https://www.opendental.com/manual221/feesexport.html" >v22.1</option><option value="https://www.opendental.com/manual214/feesexport.html" >v21.4</option><option value="https://www.opendental.com/manual213/feesexport.html" >v21.3</option><option value="https://www.opendental.com/manual212/feesexport.html" >v21.2</option><option value="https://www.opendental.com/manual211/feesexport.html" >v21.1</option><option value="https://www.opendental.com/manual205/feesexport.html" >v20.5</option><option value="https://www.opendental.com/manual204/feesexport.html" >v20.4</option><option value="https://www.opendental.com/manual203/feesexport.html" >v20.3</option><option value="https://www.opendental.com/manual202/feesexport.html" >v20.2</option><option value="https://www.opendental.com/manual201/feesexport.html" >v20.1</option><option value="https://www.opendental.com/manual194/feesexport.html" >v19.4</option><option value="https://www.opendental.com/manual193/feesexport.html" >v19.3</option><option value="https://www.opendental.com/manual192/feesexport.html" >v19.2</option><option value="https://www.opendental.com/manual191/feesexport.html" >v19.1</option><option value="https://www.opendental.com/manual184/feesexport.html" >v18.4</option><option value="https://www.opendental.com/manual183/feesexport.html" >v18.3</option><option value="https://www.opendental.com/manual182/feesexport.html" >v18.2</option><option value="https://www.opendental.com/manual181/feesexport.html" >v18.1</option><option value="https://www.opendental.com/manual174/feesexport.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Fees Export</p></div>
<div class="GeneralPageContent">
<p>Exporting fees may be useful to make minor changes to an existing Fee Schedule or to make a backup.</p>
<p>In <a href="feescheduletools.html">Fee Tools</a>, at the bottom-left, is an <b>Export</b> button.</p>
<img src="images/feeScheduleExport.png" width="222" height="89"/><p class="MarginBottomZero">To export an existing Fee Schedule: </p>
<ol class="MarginBottomGap">
<li>In the Fee Tools window, under the <b>Select Fees</b> section, select the Fee Schedule.</li>
<ul>
<li> Selecting only a Fee Schedule exports the default (i.e., global) Fee Schedule.</li>
<li> Select a Provider and/or Clinic to further narrow the export to <a href="procedurefeeoverrides.html">Clinic or Provider-Specific Fees</a>.</li>
<li>Provider or Clinic can only be selected for <a href="feeschedules.html">Fee Schedules</a> with <i>Use Global Fees</i> unchecked.</li>
</ul>
<li>Click <b>Export</b>. </li>
<li>Select the location and file name and click <b>Save</b>. By default it is saved as a txt file in the <i>OpenDentalExports</i> folder. </li>
</ol>
<img src="images/feesExportComp.png" width="915" height="452"/><p>Procedure code, fee, abbreviation, and description are exported. Below is an example: </p>
<img src="images/feesExportExample.png" width="606" height="388"/><p><div class="Note">Note: Some characters in the Code Description may not convert properly. For example, a dash ("-") may export as "â€".</div>
</p>
<p>To change fees, open the saved file, make the changes, then save the file. If making changes that will be imported back into Open Dental, only code and fee changes will be recognized. See <a href="feesimport.html">Fees Import</a> for instructions on importing any changes.</p>
<p>To export a Fee Schedule as an Excel file (.xls), use the <a href="reportprocedurecodes.html">Procedure Codes - Fee Schedules Report</a> instead.</p>
</div>
</div>
</body>
</html>```
