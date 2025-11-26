# File: ./www.opendental.com/manual243/laserlabels.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Laser Labels</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('laserlabels','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/laserlabels.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/laserlabels.html" >v24.2</option><option value="https://www.opendental.com/manual241/laserlabels.html" >v24.1</option><option value="https://www.opendental.com/manual233/laserlabels.html" >v23.3</option><option value="https://www.opendental.com/manual232/laserlabels.html" >v23.2</option><option value="https://www.opendental.com/manual231/laserlabels.html" >v23.1</option><option value="https://www.opendental.com/manual224/laserlabels.html" >v22.4</option><option value="https://www.opendental.com/manual223/laserlabels.html" >v22.3</option><option value="https://www.opendental.com/manual222/laserlabels.html" >v22.2</option><option value="https://www.opendental.com/manual221/laserlabels.html" >v22.1</option><option value="https://www.opendental.com/manual214/laserlabels.html" >v21.4</option><option value="https://www.opendental.com/manual213/laserlabels.html" >v21.3</option><option value="https://www.opendental.com/manual212/laserlabels.html" >v21.2</option><option value="https://www.opendental.com/manual211/laserlabels.html" >v21.1</option><option value="https://www.opendental.com/manual205/laserlabels.html" >v20.5</option><option value="https://www.opendental.com/manual204/laserlabels.html" >v20.4</option><option value="https://www.opendental.com/manual203/laserlabels.html" >v20.3</option><option value="https://www.opendental.com/manual202/laserlabels.html" >v20.2</option><option value="https://www.opendental.com/manual201/laserlabels.html" >v20.1</option><option value="https://www.opendental.com/manual194/laserlabels.html" >v19.4</option><option value="https://www.opendental.com/manual193/laserlabels.html" >v19.3</option><option value="https://www.opendental.com/manual192/laserlabels.html" >v19.2</option><option value="https://www.opendental.com/manual191/laserlabels.html" >v19.1</option><option value="https://www.opendental.com/manual184/laserlabels.html" >v18.4</option><option value="https://www.opendental.com/manual183/laserlabels.html" >v18.3</option><option value="https://www.opendental.com/manual182/laserlabels.html" >v18.2</option><option value="https://www.opendental.com/manual181/laserlabels.html" >v18.1</option><option value="https://www.opendental.com/manual174/laserlabels.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Laser Labels</p></div>
<div class="GeneralPageContent">
<p>In the <a href="reports.html">Reports</a> window, click <b>Laser Labels</b>.</p>
<img src="images/laserLabels.png" width="651" height="455"/><p>See <a href="labels.html">Labels</a> for instructions on printing individual labels.</p>
<p><div class="Note">Note: The Laser Labels feature was added entirely by Kapricorn Systems, Inc.</div>
</p>
<p>Labels are printed using a standard three-column label sheet. </p>
<h2>Patient Labels Tab</h2>
<p>Use the Patient Labels tab to print labels for the selected patient range. </p>
<img src="images/laserLabelsPatientTab.png" width="429" height="228"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Start / End Name</b>: Click [...] to select the patient range. The Select Patient window opens.</li>
<li><b>Group by Family</b>: Group labels by family using guarantor information. </li>
<li><b>Only Active Patients</b>: Check to only include patients with a status of Patient. Uncheck to display additional status options. </li>
<li><b>All Providers</b>: Check to print labels for patients with any provider. Uncheck to display provider list. Select a provider to limit labels to only patients with the selected primary provider.</li>
</ul>
<h2>Insurance Company Labels Tab</h2>
<p>Use the Insurance Company Labels tab to print labels for insurance companies.</p>
<img src="images/laserLabelsInsuranceTab.png" width="429" height="204"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Single Company</b>: Select the Single Company radio button to only print labels for the selected company. Click [...] to the Insurance Plans window and select a plan. When selected, the Label Count field shows. Select how many labels for the insurance plan to print.</li>
<li><b>Range of Companies</b>: Select the Range of Companies radio button to print a label for multiple insurance plans. When selected, a Start and End field displays. Click [...] to open the Insurance Plan window to select the plan range.</li>
</ul>
<h2>Custom Labels Tab</h2>
<p>Use the Custom Labels tab to enter information and create a custom label.</p>
<img src="images/laserLabelsCustomTab.png" width="429" height="351"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the recipient name. </li>
<li><b>Address 1 &amp; 2</b>: Enter the recipient address. </li>
<li><b>City / State / Zip</b>: Enter the city, state, and zip code for the recipient address. </li>
<li><b>Label Count</b>: Set how many of the custom label to print. Enter an amount before adding to the list. </li>
<li><b>Add</b>: Click to add the custom label. All labels added list.</li>
<li><b>Remove</b>: Highlight a name in the list to display the Remove button. Click to remove the patient from the list.</li>
</ul>
<h2>Birthday Labels Tab</h2>
<p>Use the Birthday Labels tab to create labels for patients with a birthday in the selected date range.</p>
<img src="images/laserLabelBirthdayTab.png" width="429" height="228"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Use the <b>Left</b>,<b> Right</b>, or <b>This Month</b> buttons to change the range range. </li>
<li><b>From / To</b>: Manually change the date range. </li>
<li><b>Active Patients Only</b>: Check to include patients with a status of<i> Patient</i>. Uncheck to display other statuses to choose from. </li>
</ul>
<h2>Choose Label Start Position</h2>
<p>If using a label sheet that has already been used, click the starting point of the label sheet. All labels previous to the start point display an X. </p>
<img src="images/laserLabelsStart.png" width="190" height="266"/></div>
</div>
</body>
</html>```
