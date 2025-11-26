# File: ./www.opendental.com/manual232/sheetsrx.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Rx Layout</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsrx','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/sheetsrx.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/sheetsrx.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsrx.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsrx.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsrx.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/sheetsrx.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsrx.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsrx.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsrx.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetsrx.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetsrx.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetsrx.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetsrx.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetsrx.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetsrx.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetsrx.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetsrx.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetsrx.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetsrx.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetsrx.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetsrx.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetsrx.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetsrx.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetsrx.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetsrx.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetsrx.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetsrx.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetsrx.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Rx Layout</p></div>
<div class="GeneralPageContent">
<p>For offices using printed prescriptions, the print layout used for single prescriptions can be customized as needed.</p>
<p>In <a href="sheets.html">Sheets</a>, double-click on a custom sheet with the type of Rx.</p>
<img src="images/sheetsRx.png" width="865" height="663"/><p class="MarginBottomZero">Alternatively, in Sheets:  </p>
<ul class="MarginBottomGap">
<li>Click <b>New</b> and choose <i>Rx</i> as the Sheet Type to create a new Rx sheet from blank.</li>
<li>Select an existing Custom <i>Rx</i> sheet and click <b>Duplicate</b> to create a copy of an existing Rx sheet.</li>
<li>Select the existing Internal <i>Rx</i> sheet and click <b>Copy</b> to create a copy of the default Rx sheet that can be edited.</li>
</ul>
<p>Also see: <a href="sheetproperties.html">Sheet Def Properties</a> and <a href="sheetsaddelements.html">Sheet Field Types</a>.</p>
<p>To customize a Rx sheet type, see <a href="sheetsetup.html">Edit Sheet Def</a>.</p>
<p>See <a href="sheetdefaults.html">Sheet Def Defaults</a> to set the sheet to use when printing a single <a href="rx.html">Rx / Prescription</a>.</p>
<p class="MarginBottomZero">Users can edit the sheet as needed to handle any regulations imposed by their state. If additional assitance is needed, please contact <a href="../contact.html">Open Dental Support</a> and we will add any additional options that might be needed. The following changes can be made to printed Rx sheets: </p>
<ul class="MarginBottomGap">
<li>Remove various Lines, boxes, and wording so you can print to a preprinted Rx form.</li>
<li>Add a dentist license number (OutputText: prov.dEANum, prov.StateLicense, prov.NationalProvID).</li>
<li>Add an Image.</li>
<li>Change the orientation or size (Edit Properties).</li>
<li>Change the wording for generic substitution (Static Text).</li>
<li>Add a second signature line for generic substitution.</li>
<li>Add an RxStateID field (OutputText: prov.stateRxID).</li>
<li>Remove or move the X that is marked by default for Generic Substitution Permitted. The X is two diagonal lines (Line:50,368,W:12,H12 and Line:62,368,W:-12,H:12). To remove the lines, delete them. To move the lines, select them, then press the up arrow on your keyboard (e.g. move to the Dispense as Written checkbox instead).</li>
<li>Days of Supply and ProcCode show by default. To populate data, enable <i>Procedure code required on some prescriptions</i> preference in Lists, Prescriptions.</li>
<li>For other options, see <a href="sheetsaddelements.html">Sheet Field Types</a>.</li>
</ul>
<p>If the state requires two signature lines (e.g., use generic and as written), users can download the following sheet template: <a href="http://opendental.com/resources/rxtwosigs.xml" download>rxtwosigs.xml</a>. The template can be imported. See <a href="sheettools.html">Sheet Tools Import / Export</a>.</p>
<p>To customize a print layout for multiple prescriptions on one page, see <a href="sheetsrxmulti.html">Rx Multiple Layout</a>.</p>
</div>
</div>
</body>
</html>```
