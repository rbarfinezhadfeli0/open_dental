# File: ./www.opendental.com/manual232/sheetdefaults.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sheet Def Defaults</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetdefaults','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/sheetdefaults.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/sheetdefaults.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetdefaults.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetdefaults.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetdefaults.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/sheetdefaults.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetdefaults.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetdefaults.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetdefaults.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetdefaults.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetdefaults.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetdefaults.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetdefaults.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetdefaults.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetdefaults.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetdefaults.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetdefaults.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetdefaults.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetdefaults.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetdefaults.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetdefaults.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetdefaults.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetdefaults.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetdefaults.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetdefaults.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetdefaults.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetdefaults.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetdefaults.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sheet Def Defaults</p></div>
<div class="GeneralPageContent">
<p>Use Sheet Defaults to set specific sheets to specific items.</p>
<p>In <a href="sheets.html">Sheets</a>, click <b>Defaults</b>.</p>
<img src="images/sheetsDefault.png" width="636" height="505"/><p>Sheets prefaced by <i>internal</i> refer to the internal version of the sheet created by Open Dental. </p>
<p><b>Label assigned to patient button</b>: Select a custom label to print when clicking the Label button in the <a href="toolbar.html">Main Toolbar</a>. Only available for labels with a sheet type of <i>LabelPatient</i>.</p>
<h2>Statements</h2>
<p>Set default sheets for different statement types. A custom sheet can be used for each type. These settings are the same for all clinics. </p>
<p><b>Default</b>: The default statement sheet for <a href="statement.html">Statements</a> and <a href="billing.html">Billing</a>.</p>
<p><b>Limited</b>: The default sheet for <a href="limited.html">Limited Statements</a>.</p>
<p><b>Invoice</b>: The default sheet for <a href="invoice.html">Invoices</a>.</p>
<p><b>Receipt</b>: The default sheet for <a href="receipt.html">Receipts</a>.</p>
<h2>Other defaults</h2>
<p>Set custom sheets as default for printing prescriptions or viewing the Chart Module. </p>
<p></p>
<p><b>Clinic</b>: If using Clinics, defaults can optionally be set for each clinic. Click the dropdown to select the clinic. Rx, Chart Layout, and Treatment Plan sheets can be set per clinic. </p>
<p><b>Rx</b>: Click the Rx dropdown to select the sheet to use when printing single prescriptions. </p>
<p><b>Chart Layout</b>: Choose a <a href="layout.html">Chart Layout</a> to be the default. Users must to log out of Open Dental to see any changes reflected.</p>
<p><b>Treatment Plan</b>: Choose a <a href="sheetstreatplan.html">Treatment Plan Layout</a> to be the default.</p>
</div>
</div>
</body>
</html>```
