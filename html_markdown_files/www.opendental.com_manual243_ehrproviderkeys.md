# File: ./www.opendental.com/manual243/ehrproviderkeys.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Annual Provider Keys</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrproviderkeys','ehrsetupwindow','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrproviderkeys.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrproviderkeys.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrproviderkeys.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrproviderkeys.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrproviderkeys.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrproviderkeys.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrproviderkeys.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrproviderkeys.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrproviderkeys.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrproviderkeys.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrproviderkeys.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrproviderkeys.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrproviderkeys.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrproviderkeys.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrproviderkeys.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrproviderkeys.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrproviderkeys.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrproviderkeys.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrproviderkeys.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrproviderkeys.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrproviderkeys.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrproviderkeys.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrproviderkeys.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrproviderkeys.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrproviderkeys.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrproviderkeys.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrproviderkeys.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrproviderkeys.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Annual Provider Keys</p></div>
<div class="GeneralPageContent">
<p>An annual EHR Provider Key allows a provider to access <a href="ehrmeasures.html">EHR Measure Reports</a>. Provider keys are tied to the first and last name of the provider and to the reporting year. Provider keys are supplied by technical support once an EHR contract is signed for the current year. Annual keys replace quarterly keys.</p>
<div class="Note">Note: <ul>
<li>Annual EHR provider keys can be managed from a central location beginning in version 14.3. When you update to version 14.3, provider keys already entered in Open Dental will be transferred automatically.</li>
<li>See <a href="https://opendental.com/site/ehrlicense.html">Open Dental EHR</a> for the Medicaid Purchase Form and additional information.</li>
</ul>
</div>
<br/><br/><ol>
<li>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Chart, <a href="ehrsetupwindow.html">EHR</a>.</li>
<li>On the EHR Setup window click <b>Provider Keys</b>. <br/><img src="images/ehrProviderKeys143.gif" width="481" height="380" class="ImageInParagraph"/></li>
<li>Click Add to enter a new key, or double click to edit. <br/><img src="images/ehrProviderKeyEdit.gif" width="469" height="294" class="ImageInParagraph"/></li>
<li>Enter the information supplied to you from technical support. <ul>
<li><b>Last/First Name</b>: These names must exactly match the provider's name on the EHR contract, which should match the provider's name in the <a href="providers.html">Providers</a>.</li>
<li><b>Year</b>: Enter the last 2 digits of the reporting year.</li>
<li><b>EHR Key</b>: Copy and paste the key provided by technical support.</li>
</ul>
</li>
<li>Click OK to save.</li>
</ol>
</div>
</div>
</body>
</html>```
