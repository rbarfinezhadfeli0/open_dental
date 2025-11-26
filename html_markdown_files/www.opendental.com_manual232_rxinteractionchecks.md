# File: ./www.opendental.com/manual232/rxinteractionchecks.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Rx / Prescription Alert</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('rxinteractionchecks','rxsetup','+lists','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/rxinteractionchecks.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/rxinteractionchecks.html" >v24.2</option><option value="https://www.opendental.com/manual241/rxinteractionchecks.html" >v24.1</option><option value="https://www.opendental.com/manual233/rxinteractionchecks.html" >v23.3</option><option value="https://www.opendental.com/manual232/rxinteractionchecks.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/rxinteractionchecks.html" >v23.1</option><option value="https://www.opendental.com/manual224/rxinteractionchecks.html" >v22.4</option><option value="https://www.opendental.com/manual223/rxinteractionchecks.html" >v22.3</option><option value="https://www.opendental.com/manual222/rxinteractionchecks.html" >v22.2</option><option value="https://www.opendental.com/manual221/rxinteractionchecks.html" >v22.1</option><option value="https://www.opendental.com/manual214/rxinteractionchecks.html" >v21.4</option><option value="https://www.opendental.com/manual213/rxinteractionchecks.html" >v21.3</option><option value="https://www.opendental.com/manual212/rxinteractionchecks.html" >v21.2</option><option value="https://www.opendental.com/manual211/rxinteractionchecks.html" >v21.1</option><option value="https://www.opendental.com/manual205/rxinteractionchecks.html" >v20.5</option><option value="https://www.opendental.com/manual204/rxinteractionchecks.html" >v20.4</option><option value="https://www.opendental.com/manual203/rxinteractionchecks.html" >v20.3</option><option value="https://www.opendental.com/manual202/rxinteractionchecks.html" >v20.2</option><option value="https://www.opendental.com/manual201/rxinteractionchecks.html" >v20.1</option><option value="https://www.opendental.com/manual194/rxinteractionchecks.html" >v19.4</option><option value="https://www.opendental.com/manual193/rxinteractionchecks.html" >v19.3</option><option value="https://www.opendental.com/manual192/rxinteractionchecks.html" >v19.2</option><option value="https://www.opendental.com/manual191/rxinteractionchecks.html" >v19.1</option><option value="https://www.opendental.com/manual184/rxinteractionchecks.html" >v18.4</option><option value="https://www.opendental.com/manual183/rxinteractionchecks.html" >v18.3</option><option value="https://www.opendental.com/manual182/rxinteractionchecks.html" >v18.2</option><option value="https://www.opendental.com/manual181/rxinteractionchecks.html" >v18.1</option><option value="https://www.opendental.com/manual174/rxinteractionchecks.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Rx / Prescription Alert</p></div>
<div class="GeneralPageContent">
<p>Users can set interaction alerts when prescribing medication.</p>
<p>In the <a href="rxsetup.html">Rx / Prescriptions List</a>, add a Problem, Medication, or Allergy to the Alerts field.</p>
<img src="images/rxinteractionAlert.gif" width="300" height="115"/><p>Open Dental drug interaction alerts occur when you write new paper <a href="rx.html">Rx / Prescription</a> using a template that has interaction alerts set up. Interaction alerts can be based on a medication, allergy, and/or problem. They are always enabled and you cannot turn them off. Set the behavior of alerts by adding or removing alert rules in a prescription template.</p>
<h2>Set Up Alert Rules</h2>
<p>Alert rules are created in a prescription template. To ensure alerts work correctly, make sure the <a href="problemmaster.html">Problem List</a>, <a href="medicationmaster.html">Medications List</a>, and <a href="allergiesmaster.html">Allergy List</a> do not contain duplicates.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In the Prescription List, double-click a prescription or add a new one. </li>
<li>Click an alert type to add:  <ul>
<li>Add Problem</li>
<li>Add Medication</li>
<li>Add Allergy</li>
</ul>
</li>
<li>Double-click a row to add it to the Alert.</li>
</ol>
<p>Double-click on an alert to customize it. </p>
<img src="images/rxAlertEdit.gif" width="707" height="377"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Alternate custom message</b>: Enter a custom message to display when this alert is triggered. If none is entered, the default message will display.</li>
<li><b>Is High Significance</b>: High significance alerts are always triggered. To also show low significance alerts, uncheck <i>Only show high significance Rx alerts</i> in <a href="ehrsettings.html">EHR Settings</a>.</li>
</ul>
<h2>Trigger an Alert</h2>
<p>When alerts are set up for a prescription, and the patient has the alert type (e.g., medication, allergy, problem) entered in their Chart, the alert will display when the prescription is created.</p>
<img src="images/rxAlertEditMsg.gif" width="391" height="172"/><h2>EHR Users</h2>
<p>In <a href="ehrmeasures.html">EHR Measure Reports</a>, paper prescriptions for permissible drugs count towards the denominator, but not towards the numerator. Thus, only rely on paper prescriptions and its drug interaction checks if you qualify for the e-prescribing exclusion (write less than 100 prescriptions).</p>
</div>
</div>
</body>
</html>```
