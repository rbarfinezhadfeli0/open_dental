# File: ./www.opendental.com/manual232/newcropdruginteraction.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - NewCrop eRx Drug-Drug, Drug-Allergy Interaction Checks</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('newcropdruginteraction','newcrop','+eRx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/newcropdruginteraction.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/newcropdruginteraction.html" >v24.2</option><option value="https://www.opendental.com/manual241/newcropdruginteraction.html" >v24.1</option><option value="https://www.opendental.com/manual233/newcropdruginteraction.html" >v23.3</option><option value="https://www.opendental.com/manual232/newcropdruginteraction.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/newcropdruginteraction.html" >v23.1</option><option value="https://www.opendental.com/manual224/newcropdruginteraction.html" >v22.4</option><option value="https://www.opendental.com/manual223/newcropdruginteraction.html" >v22.3</option><option value="https://www.opendental.com/manual222/newcropdruginteraction.html" >v22.2</option><option value="https://www.opendental.com/manual221/newcropdruginteraction.html" >v22.1</option><option value="https://www.opendental.com/manual214/newcropdruginteraction.html" >v21.4</option><option value="https://www.opendental.com/manual213/newcropdruginteraction.html" >v21.3</option><option value="https://www.opendental.com/manual212/newcropdruginteraction.html" >v21.2</option><option value="https://www.opendental.com/manual211/newcropdruginteraction.html" >v21.1</option><option value="https://www.opendental.com/manual205/newcropdruginteraction.html" >v20.5</option><option value="https://www.opendental.com/manual204/newcropdruginteraction.html" >v20.4</option><option value="https://www.opendental.com/manual203/newcropdruginteraction.html" >v20.3</option><option value="https://www.opendental.com/manual202/newcropdruginteraction.html" >v20.2</option><option value="https://www.opendental.com/manual201/newcropdruginteraction.html" >v20.1</option><option value="https://www.opendental.com/manual194/newcropdruginteraction.html" >v19.4</option><option value="https://www.opendental.com/manual193/newcropdruginteraction.html" >v19.3</option><option value="https://www.opendental.com/manual192/newcropdruginteraction.html" >v19.2</option><option value="https://www.opendental.com/manual191/newcropdruginteraction.html" >v19.1</option><option value="https://www.opendental.com/manual184/newcropdruginteraction.html" >v18.4</option><option value="https://www.opendental.com/manual183/newcropdruginteraction.html" >v18.3</option><option value="https://www.opendental.com/manual182/newcropdruginteraction.html" >v18.2</option><option value="https://www.opendental.com/manual181/newcropdruginteraction.html" >v18.1</option><option value="https://www.opendental.com/manual174/newcropdruginteraction.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>NewCrop eRx Drug-Drug, Drug-Allergy Interaction Checks</p></div>
<div class="GeneralPageContent">
<p>In the <a href="newcrop.html">NewCrop eRx / Prescription</a> interface, comprehensive version, drug-drug and drug-allergy interaction checks are automated. </p>
<p>Offices must contact Open Dental Support to turn on this feature.</p>
<ul>
<li>Drug-Drug: Prescriptions are checked against current and pending medications listed on the Compose Rx page.</li>
<li>Drug-Allergy: Prescriptions are compared to patient allergies listed on the Compose Rx page.</li>
</ul>
<br/><p class="MarginBottomZero">If the NewCrop eRx preference <i>Only Show Severe/Contraindicated Warnings</i> is checked, warnings for mild and moderate interactions will be suppressed. To enable or disable this preference:  </p>
<ol class="MarginBottomGap">
<li>Click on the NewCrop eRx <b>Admin</b> tab.</li>
<li>Click <b>Account/Prescriber Settings</b> in the <i>Account Configuration</i> area.</li>
<li>Check or uncheck <i>Only Show Severe/Contraindicated Warnings</i>. <ul>
<li>Checked: Only severe/contraindicated interaction alerts will appear.</li>
<li>Unchecked: All interaction alerts will appear.</li>
<li>The box can only be checked or unchecked if the prescriber is logged on.</li>
</ul>
</li>
</ol>
<p>At this time, the patient's allergy and medication list in Open Dental is not passed to NewCrop eRx. If an allergy or medication is not listed, see <a href="newcropallergies.html">NewCrop eRx Allergies</a> or <a href="newcropmedications.html">NewCrop eRx Medications</a>.</p>
<h2>Drug-Allergy Interactions</h2>
<p>When prescribing or adding drugs in NewCrop eRx, the system automatically checks for allergies. If a drug allergy exists, the following alert will appear.</p>
<img src="images/eRxDrugAllergyAlert.png" width="501" height="228"/><p>To cancel the prescription or adding the medication click <b>Cancel</b>. </p>
<p>To proceed with prescribing or adding the medication, click <b>Continue</b>.</p>
<h2>Drug-Drug Interactions</h2>
<p>When prescribing a medication, drug-drug interaction warnings will appear in the Transmit Rx window.</p>
<img src="images/erxModInteraction.png" width="752" height="611"/></div>
</div>
</body>
</html>```
