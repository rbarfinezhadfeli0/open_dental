# File: ./www.opendental.com/manual/sheetsconsent.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Consent Form Layout</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsconsent','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/sheetsconsent.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/sheetsconsent.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsconsent.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsconsent.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsconsent.html" >v23.2</option><option value="https://www.opendental.com/manual231/sheetsconsent.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsconsent.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsconsent.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsconsent.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetsconsent.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetsconsent.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetsconsent.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetsconsent.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetsconsent.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetsconsent.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetsconsent.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetsconsent.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetsconsent.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetsconsent.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetsconsent.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetsconsent.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetsconsent.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetsconsent.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetsconsent.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetsconsent.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetsconsent.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetsconsent.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetsconsent.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Consent Form Layout</p></div>
<div class="GeneralPageContent">
<p>Consent form sheets can be customized to meet the needs of the practice.</p>
<p>In <a href="sheets.html">Sheets</a>, double-click on a custom sheet with the type of Consent.</p>
<img src="images/sheetsConsent.gif" width="887" height="729"/><p class="MarginBottomZero">Alternatively, in Sheets:  </p>
<ul class="MarginBottomGap">
<li>Click <b>New</b> and choose <i>Consent</i> as the Sheet Type to create a new consent form from blank.</li>
<li>Select an existing Custom <i>Consent</i> sheet and click <b>Duplicate</b> to create a copy of an existing consent form.</li>
<li>Select the existing Internal <i>Consent</i> sheet and click <b>Copy</b> to create a copy of the default consent form that can be edited.</li>
</ul>
<p class="MarginBottomZero">Additional information: </p>
<ul class="MarginBottomGap">
<li>Consent forms support <a href="electronicsignatures.html">Electronic Signatures</a>.</li>
<li>To create a consent form for a patient, see <a href="consentforms.html">Consent Form</a>.</li>
<li>Consent forms can be sent to the <a href="../site/eclipboard.html">eClipboard</a> when <a href="sheetsetupmobile.html">Mobile Layout</a> is enabled.</li>
</ul>
<p>Also see: <a href="sheetproperties.html">Sheet Def Properties</a> and <a href="sheetsaddelements.html">Sheet Field Types</a></p>
<p>To customize a Consent sheet type, see <a href="sheetsetup.html">Edit Sheet Def</a>.</p>
<p><div class="Note">Note: The Input Field for <i>ToothNum</i> is unique to Consent forms. Prior to having a consent signed, add the tooth number manually from the <a href="consentforms.html">Consent Form</a> Fill Sheet window. Once entered, the field cannot be altered in the eClipboard app or on the kiosk by the patient. </div>
</p>
</div>
</div>
</body>
</html>```
