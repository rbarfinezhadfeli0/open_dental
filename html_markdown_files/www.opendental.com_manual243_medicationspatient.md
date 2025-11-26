# File: ./www.opendental.com/manual243/medicationspatient.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Medications</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('medicationspatient','medical','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/medicationspatient.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/medicationspatient.html" >v24.2</option><option value="https://www.opendental.com/manual241/medicationspatient.html" >v24.1</option><option value="https://www.opendental.com/manual233/medicationspatient.html" >v23.3</option><option value="https://www.opendental.com/manual232/medicationspatient.html" >v23.2</option><option value="https://www.opendental.com/manual231/medicationspatient.html" >v23.1</option><option value="https://www.opendental.com/manual224/medicationspatient.html" >v22.4</option><option value="https://www.opendental.com/manual223/medicationspatient.html" >v22.3</option><option value="https://www.opendental.com/manual222/medicationspatient.html" >v22.2</option><option value="https://www.opendental.com/manual221/medicationspatient.html" >v22.1</option><option value="https://www.opendental.com/manual214/medicationspatient.html" >v21.4</option><option value="https://www.opendental.com/manual213/medicationspatient.html" >v21.3</option><option value="https://www.opendental.com/manual212/medicationspatient.html" >v21.2</option><option value="https://www.opendental.com/manual211/medicationspatient.html" >v21.1</option><option value="https://www.opendental.com/manual205/medicationspatient.html" >v20.5</option><option value="https://www.opendental.com/manual204/medicationspatient.html" >v20.4</option><option value="https://www.opendental.com/manual203/medicationspatient.html" >v20.3</option><option value="https://www.opendental.com/manual202/medicationspatient.html" >v20.2</option><option value="https://www.opendental.com/manual201/medicationspatient.html" >v20.1</option><option value="https://www.opendental.com/manual194/medicationspatient.html" >v19.4</option><option value="https://www.opendental.com/manual193/medicationspatient.html" >v19.3</option><option value="https://www.opendental.com/manual192/medicationspatient.html" >v19.2</option><option value="https://www.opendental.com/manual191/medicationspatient.html" >v19.1</option><option value="https://www.opendental.com/manual184/medicationspatient.html" >v18.4</option><option value="https://www.opendental.com/manual183/medicationspatient.html" >v18.3</option><option value="https://www.opendental.com/manual182/medicationspatient.html" >v18.2</option><option value="https://www.opendental.com/manual181/medicationspatient.html" >v18.1</option><option value="https://www.opendental.com/manual174/medicationspatient.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Medications</p></div>
<div class="GeneralPageContent">
<p>In the <a href="chart.html">Chart Module</a>, double-click the pink <a href="medical.html">Medical</a> area. Click the Medications tab.</p>
<img src="images/medicalMedications.png" width="804" height="264"/><p><b>Add Medication</b>: Add a medication from the <a href="medicationmaster.html">Medications List</a>. Double-click a medication from the Medications List to open the Medication for Patient window (see below) and enter medication details for the patient.</p>
<p><b>Show Discontinued Medications</b>: Check to display medications with a Stop Date prior to today's date.</p>
<p><b>Print Medications</b>: Print a list of the patient's medications.</p>
<p class="MarginBottomZero">Columns: </p>
<ul class="MarginBottomGap">
<li><b>Medication</b>: A list of the patient's entered medications. Double-click a medication to open edit details. Opens Medication for Patient window shown below. The <a href="ehrinfobutton.html">EHR InfoButton</a> may show if EHR is turned on.</li>
<li><b>Notes</b>: Medication specific notes.</li>
<li><b>Notes for Patient</b>: Medication notes specific to the patient.</li>
<li><b>Status</b>: Displays whether the status of a medication is active or inactive based on the Stop Date.</li>
<li><b>Source</b>: Displays DoseSpot or NewCrop if the medication was synced from an <a href="https://opendental.com/site/electronicrx.html">eRx integration</a>. A blank source indicates the medication was created in Open Dental.</li>
</ul>
<p>Active medications are also listed in the Chart Module, Medical area. Every time a patient medication is added, edited or removed an entry is made in the <a href="audittrail.html">Audit Trail</a>.</p>
<h2>Medication for Patient</h2>
<p>Double-click an existing medication from the Medications grid or click <b>Add Medication</b> and double-click a medication from the Medications List. The Medication for Patient window opens where details about the medication for the specific patient can be entered.</p>
<img src="images/medicationPatient.png" width="687" height="550"/><p>The Medication area lists the drug information as entered in the Medications List. Click <b>Edit</b> to make changes to the medication details in the <a href="medicationmaster.html">Medications List</a>. </p>
<p class="MarginBottomZero">The Medication Order area is specific to the selected patient. </p>
<ul class="MarginBottomGap">
<li><b>Provider</b>: Click the drop down to change the provider. Only used in EHR.</li>
<li><b>Notes for this Patient</b>: Enter patient-specific notes. <a href="rightclicktextboxes.html">Right-Click</a> the text box for additional options. <ul>
<li> If EHR is turned on, this area is labeled Count, Instructions, Refills. </li>
<li>If using DoseSpot, Medication Patient Notes are limited by e-Prescribing Standard from containing carriage returns. When the note is sent to DoseSpot, the note length may be automatically reduced. </li>
</ul>
</li>
<li><b>Date Start</b>: Enter the date the medication was started, if known. Click <b>Today</b> to insert the current date.</li>
<li><b>Date Stop</b>: Enter the date the medication was stopped, if known. Click <b>Today</b> to insert the current date.  <ul>
<li>If the Date Stop is blank, today's date, or a future date, the medication is still considered active. If the the Date Stop is prior to the current date, the medication is considered inactive/discontinued.</li>
<li>If using eRx, when a medication is marked discontinued in eRx, a Stop Date is automatically entered for the medication in Open Dental when the Chart Module is refreshed. </li>
<li>Automatically add a default Stop Date for new prescriptions by setting <i>Medication Order default days until stop date</i> in <a href="preferences.html">Preferences</a>, .</li>
</ul>
</li>
</ul>
<p><b>Remove</b>: Delete this medication from the patient's medication list.</p>
<p>Click <b>OK</b> to save changes.</p>
</div>
</div>
</body>
</html>```
