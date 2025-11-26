# File: ./www.opendental.com/manual243/rxinteractionchecks.html

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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/rxinteractionchecks.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/rxinteractionchecks.html" >v24.2</option><option value="https://www.opendental.com/manual241/rxinteractionchecks.html" >v24.1</option><option value="https://www.opendental.com/manual233/rxinteractionchecks.html" >v23.3</option><option value="https://www.opendental.com/manual232/rxinteractionchecks.html" >v23.2</option><option value="https://www.opendental.com/manual231/rxinteractionchecks.html" >v23.1</option><option value="https://www.opendental.com/manual224/rxinteractionchecks.html" >v22.4</option><option value="https://www.opendental.com/manual223/rxinteractionchecks.html" >v22.3</option><option value="https://www.opendental.com/manual222/rxinteractionchecks.html" >v22.2</option><option value="https://www.opendental.com/manual221/rxinteractionchecks.html" >v22.1</option><option value="https://www.opendental.com/manual214/rxinteractionchecks.html" >v21.4</option><option value="https://www.opendental.com/manual213/rxinteractionchecks.html" >v21.3</option><option value="https://www.opendental.com/manual212/rxinteractionchecks.html" >v21.2</option><option value="https://www.opendental.com/manual211/rxinteractionchecks.html" >v21.1</option><option value="https://www.opendental.com/manual205/rxinteractionchecks.html" >v20.5</option><option value="https://www.opendental.com/manual204/rxinteractionchecks.html" >v20.4</option><option value="https://www.opendental.com/manual203/rxinteractionchecks.html" >v20.3</option><option value="https://www.opendental.com/manual202/rxinteractionchecks.html" >v20.2</option><option value="https://www.opendental.com/manual201/rxinteractionchecks.html" >v20.1</option><option value="https://www.opendental.com/manual194/rxinteractionchecks.html" >v19.4</option><option value="https://www.opendental.com/manual193/rxinteractionchecks.html" >v19.3</option><option value="https://www.opendental.com/manual192/rxinteractionchecks.html" >v19.2</option><option value="https://www.opendental.com/manual191/rxinteractionchecks.html" >v19.1</option><option value="https://www.opendental.com/manual184/rxinteractionchecks.html" >v18.4</option><option value="https://www.opendental.com/manual183/rxinteractionchecks.html" >v18.3</option><option value="https://www.opendental.com/manual182/rxinteractionchecks.html" >v18.2</option><option value="https://www.opendental.com/manual181/rxinteractionchecks.html" >v18.1</option><option value="https://www.opendental.com/manual174/rxinteractionchecks.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Rx / Prescription Alert</p></div>
<div class="GeneralPageContent">
<p>Users can set interaction alerts when prescribing medication.</p>
<p>In the <a href="rxsetup.html">Rx / Prescriptions List</a>, add a Problem, Medication, or Allergy to the Alerts field.</p>
<img src="images/rxinteractionAlert.png" width="282" height="103"/><p>Open Dental drug interaction alerts occur when creating a new <a href="rx.html">Rx / Prescription</a> using a Rx Template that has interaction alerts set up. Interaction alerts can be based on a medication, allergy, and/or problem. These warning alerts are always enabled.</p>
<p class="MarginBottomZero">Rx Alerts can be connected to problems, medications, or allergies. The alert is triggered when creating a prescription for a patient with the associated medical information. </p>
<ul class="MarginBottomGap">
<li><b>Add Problem</b>: Click to create an Rx alert triggered by a <a href="problempatient.html">Problem</a>. The <a href="problemmaster.html">Problem List</a> opens. Select a problem to continue.</li>
<li><b>Add Medication</b>: Click to create an Rx alert triggered by a <a href="medicationspatient.html">Medication</a>. The <a href="medicationmaster.html">Medications List</a> opens. Select a medication to continue.</li>
<li><b>Add Allergy</b>: Click to create and Rx alert triggered by an <a href="allergiespatient.html">Allergy</a>. The <a href="allergiesmaster.html">Allergy List</a> opens. Select an allergy to continue.</li>
</ul>
<p><div class="Note">Note: To ensure alerts work correctly, make sure the <a href="problemmaster.html">Problem List</a>, <a href="medicationmaster.html">Medications List</a>, and <a href="allergiesmaster.html">Allergy List</a> do not contain duplicates.</div>
</p>
<h2>Set Up Alert Rules</h2>
<p>Once the problem, medication, or allergy is selected from the master list, Rx Alert Edit opens. Alternatively, double-click an existing alert to edit.</p>
<img src="images/rxAlertEdit.png" width="699" height="373"/><p class="MarginBottomZero">Details about the interaction for the alert are read-only and displayed at the top. </p>
<ul class="MarginBottomGap">
<li><b>Alternate custom message</b>: Enter a custom message to display when this alert is triggered. If none is entered, a default message indicates the patient has the problem, allergy, or medication associated with the alert. </li>
<li><b>Is High Significance</b>: If EHR is enabled in <a href="showfeatures.html">Show Features</a> and <i>Only show high significance Rx alerts</i> is enabled in <a href="ehrsettings.html">EHR Settings</a>, determines if a warning is shown for this interaction. <ul>
<li>Checked: Alerts are shown for this interaction.</li>
<li>Unchecked: Alerts are not shown for this interaction.</li>
<li>If <i>Only show high significance Rx alerts</i> is disabled in EHR Settings or EHR is disabled in Show Features, alerts are always shown for this interaction, regardless of the checkbox setting.</li>
</ul>
</li>
</ul>
<h2>Trigger an Alert</h2>
<p>When alerts are set up for a prescription, and the patient has the alert type (e.g., medication, allergy, problem) entered in their <a href="medical.html">Medical</a> information in the Chart, the alert is displayed when the prescription is created.</p>
<img src="images/rxAlertEditMsg.png" width="359" height="159"/><h2>EHR Users</h2>
<p>In <a href="ehrmeasures.html">EHR Measure Reports</a>, paper prescriptions for permissible drugs count toward the denominator, but not towards the numerator. Only rely on paper prescriptions and its drug interaction checks if you qualify for the e-prescribing exclusion (write less than 100 prescriptions).</p>
</div>
</div>
</body>
</html>```
