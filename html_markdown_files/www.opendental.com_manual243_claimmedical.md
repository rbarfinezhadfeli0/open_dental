# File: ./www.opendental.com/manual243/claimmedical.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Edit Claim - Medical Tab</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimmedical','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimmedical.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimmedical.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimmedical.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimmedical.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimmedical.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimmedical.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimmedical.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimmedical.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimmedical.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimmedical.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimmedical.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimmedical.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimmedical.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimmedical.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimmedical.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimmedical.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimmedical.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimmedical.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimmedical.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimmedical.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimmedical.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimmedical.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimmedical.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimmedical.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimmedical.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimmedical.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimmedical.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimmedical.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Edit Claim - Medical Tab</p></div>
<div class="GeneralPageContent">
<p>Enter necessary information when billing to medical insurance in the Medical tab of a claim. </p>
<p>In a <a href="claimedit.html">Claim</a>, click the Medical tab.</p>
<img src="images/claimEditMedical.png" width="915" height="288"/><p>Only visible if <a href="medicalins.html">Medical Insurance</a> is turned on. Only enter information on this tab when sending a medical claim. </p>
<p class="MarginBottomZero"><b>Ordering Provider Override</b>: Set a general ordering provider override for procedures on this claim. This override is only assigned to procedures on the claim that do not have an override set on the procedure level (<a href="proceduremedical.html">Procedure - Medical Tab</a>). By default, there is no override and the treating provider is used. See <a href="eclaimscomplexities.html">E-Claims Complexities</a>, Ordering Provider, for the logic. </p>
<ul class="MarginBottomGap">
<li><b>Internal</b>: Select a provider from the <a href="providers.html">Providers</a> list.</li>
<li><b>Referral</b>: Select a provider from the <a href="referralsetup.html">Referral List</a>.</li>
<li><b>None</b>: Clear the override.</li>
</ul>
<p><b>UB04</b>: The UB04 is typically used for institutional claims (e.g., hospitals or outpatient facilities). The Claim Forms are printed; they are not sent in e-claims. Check with the insurance company to verify the values they accept for items in this section.</p>
<p>Information on codes used on a UB04 claim cannot be published by Open Dental and is owned by the <a href="https://www.aha.org/front">American Hospital Association</a>. </p>
<p><b>Printing</b>: It is helpful to have a background image for setup purposes. The background image should not be set to print as preprinted forms should be used. To see the background, save the file <a href="../resources/UB04.jpg">UB04.jpg</a> in the <a href="atozfolder.html">A to Z Folder</a> (i.e., OpenDentImages folder), then add it to the <a href="claimforms.html">Claim Form</a>.</p>
</div>
</div>
</body>
</html>```
