# File: ./www.opendental.com/manual243/sheetsrxmulti.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Rx Multiple Layout</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsrxmulti','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/sheetsrxmulti.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/sheetsrxmulti.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsrxmulti.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsrxmulti.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsrxmulti.html" >v23.2</option><option value="https://www.opendental.com/manual231/sheetsrxmulti.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsrxmulti.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsrxmulti.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsrxmulti.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetsrxmulti.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetsrxmulti.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetsrxmulti.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetsrxmulti.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetsrxmulti.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetsrxmulti.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetsrxmulti.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetsrxmulti.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetsrxmulti.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetsrxmulti.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetsrxmulti.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetsrxmulti.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetsrxmulti.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetsrxmulti.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetsrxmulti.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetsrxmulti.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetsrxmulti.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetsrxmulti.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetsrxmulti.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Rx Multiple Layout</p></div>
<div class="GeneralPageContent">
<p>The RxMulti Sheet is a sheet type that allows practices to print out multiple prescriptions for a patient on a single page.</p>
<p>In <a href="sheets.html">Sheets</a>, double-click on a custom sheet with the type of RxMulti.</p>
<img src="images/sheetRxMulti.png" width="915" height="583"/><p class="MarginBottomZero">Alternatively, in Sheets:  </p>
<ul class="MarginBottomGap">
<li>Click <b>New</b> and choose <i>RxMulti</i> as the Sheet Type to create a new RxMulti sheet from blank.</li>
<li>Select an existing Custom <i>RxMulti</i> sheet and click <b>Duplicate</b> to create a copy of an existing RxMulti sheet.</li>
<li>Select the existing Internal <i>RxMulti</i> sheet and click <b>Copy</b> to create a copy of the default RxMulti sheet that can be edited.</li>
</ul>
<p>Also see: <a href="sheetproperties.html">Sheet Def Properties</a> and <a href="sheetsaddelements.html">Sheet Field Types</a>.</p>
<p>To customize a RxMulti sheet type, see <a href="sheetsetup.html">Edit Sheet Def</a>.</p>
<p> When printing from multiple prescriptions from <a href="rxmanage.html">Rx Manage</a>, the RxMulti sheet type is used. If no custom sheet has been created, then the internal sheet is used. If multiple custom RxMulti sheets exist, the top-most (i.e., first alphabetically) sheet will be used when printing from Rx Manage.</p>
<p class="MarginBottomZero">Users can edit the sheet as needed to handle any regulations imposed by their state. If additional assistance is needed, please contact Open Dental Support and we will add any additional options that might be needed. The following changes can be made to printed Rx sheets: </p>
<ul class="MarginBottomGap">
<li>Remove various lines, boxes, and wording so you can print to a preprinted Rx form.</li>
<li>Add a dentist license number (OutputText: prov.dEANum, prov.StateLicense, prov.NationalProvID).</li>
<li>Add an image.</li>
<li>Change the orientation or size (Edit Properties).</li>
<li>Change the wording for generic substitution (Static Text).</li>
<li>Add a second signature line for generic substitution.</li>
<li>Add an RxStateID field (OutputText: prov.stateRxID).</li>
<li>Remove or move the X that is marked by default for Generic Substitution Permitted. The X is two diagonal lines (Line:50,368,W:12,H12 and Line:62,368,W:-12,H:12). To remove the lines, delete them. To move the lines, select them, then press the up arrow on your keyboard (e.g. move to the Dispense as Written checkbox instead).</li>
</ul>
<p>Each Rx template requires a corresponding Prov.NameFL, PatNameFL, PatBirthdate, and Drug output text field. If any of these fields are missing from the sheet layout for a prescription (e.g., there is no Prov.NameFL3 for Drug 3) <i>VOID</i> is printed across the prescription.</p>
<p>Each <a href="sheetsoutputtext.html">Output Text</a> field has a number to indicate its order on the page. For example, prov.nameFL is for prescription 1, prov.nameFL2, is for prescription 2, etc. Simply make sure the output text fields for each prescription match the order on the page. Prescription 4 should have output text fields that end in 4, prescription 5 should have output text fields that end in 5, etc.</p>
<p>The internal RxMulti sheet prints up to 4 prescriptions per page, but it can be customized to print up to 6. When printing multiple prescriptions, any unused Rx sheets will have <i>VOID</i> printed across them.</p>
</div>
</div>
</body>
</html>```
