# File: ./www.opendental.com/manual243/vitalsignsenter.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Vital Signs</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('vitalsignsenter','medical','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/vitalsignsenter.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/vitalsignsenter.html" >v24.2</option><option value="https://www.opendental.com/manual241/vitalsignsenter.html" >v24.1</option><option value="https://www.opendental.com/manual233/vitalsignsenter.html" >v23.3</option><option value="https://www.opendental.com/manual232/vitalsignsenter.html" >v23.2</option><option value="https://www.opendental.com/manual231/vitalsignsenter.html" >v23.1</option><option value="https://www.opendental.com/manual224/vitalsignsenter.html" >v22.4</option><option value="https://www.opendental.com/manual223/vitalsignsenter.html" >v22.3</option><option value="https://www.opendental.com/manual222/vitalsignsenter.html" >v22.2</option><option value="https://www.opendental.com/manual221/vitalsignsenter.html" >v22.1</option><option value="https://www.opendental.com/manual214/vitalsignsenter.html" >v21.4</option><option value="https://www.opendental.com/manual213/vitalsignsenter.html" >v21.3</option><option value="https://www.opendental.com/manual212/vitalsignsenter.html" >v21.2</option><option value="https://www.opendental.com/manual211/vitalsignsenter.html" >v21.1</option><option value="https://www.opendental.com/manual205/vitalsignsenter.html" >v20.5</option><option value="https://www.opendental.com/manual204/vitalsignsenter.html" >v20.4</option><option value="https://www.opendental.com/manual203/vitalsignsenter.html" >v20.3</option><option value="https://www.opendental.com/manual202/vitalsignsenter.html" >v20.2</option><option value="https://www.opendental.com/manual201/vitalsignsenter.html" >v20.1</option><option value="https://www.opendental.com/manual194/vitalsignsenter.html" >v19.4</option><option value="https://www.opendental.com/manual193/vitalsignsenter.html" >v19.3</option><option value="https://www.opendental.com/manual192/vitalsignsenter.html" >v19.2</option><option value="https://www.opendental.com/manual191/vitalsignsenter.html" >v19.1</option><option value="https://www.opendental.com/manual184/vitalsignsenter.html" >v18.4</option><option value="https://www.opendental.com/manual183/vitalsignsenter.html" >v18.3</option><option value="https://www.opendental.com/manual182/vitalsignsenter.html" >v18.2</option><option value="https://www.opendental.com/manual181/vitalsignsenter.html" >v18.1</option><option value="https://www.opendental.com/manual174/vitalsignsenter.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Vital Signs</p></div>
<div class="GeneralPageContent">
<p>Document a patient's vital signs, including height, weight, blood pressure, and pulse.</p>
<p>In the <a href="medical.html">Medical</a> area, click the Vital Signs tab.</p>
<img src="images/medicalVitalSigns.gif" width="812" height="337"/><p><div class="Note">Note: To enter Vital Signs, the following must be set:  <ul>
<li>Enable EHR in <a href="showfeatures.html">Show Features</a>.</li>
<li>Download LOINC codes. See <a href="codesystemimport.html">Importing Code Systems</a>.</li>
</ul>
</div>
</p>
<p><b>Add Vital Sign</b>: Add vital sign entries.</p>
<p><b>Growth Chart</b>: For patients who are 0 - 20 years of age, view a plotted chart of vital sign changes. See <a href="vitalsignsgrowthchart.html">EHR Growth Chart</a>.</p>
<p><b>Vital Signs Grid</b>: A list of vital sign entries, sorted by date. The <i>Documentation for Followup or Ineligible</i> column will show no text. (This column is leftover from 2011 certification.)</p>
<p>Click Add Vital Sign, or double-click an entry to edit. The patient's age will determine which information shows in the window. </p>
<img src="images/ehrVitalSignEdit.gif" width="612" height="645"/><p class="MarginBottomZero">Enter the vital sign information. </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: The date of the entry.</li>
<li><b>Systolic/Diastolic BP</b>: Blood pressure measurements. Corresponding <a href="loinc.html">LOINC Codes</a> will show.</li>
<li><b>Height</b>: Patient's height in inches. Height Code is automatically selected when height is entered; you can select another option if desired. Required for minor patients when sending prescriptions through Ensora eRx (formerly NewCrop eRx) or DoseSpot eRx.</li>
<li><b>Weight</b>: Patient's weight in pounds (lbs). Weight Code is automatically selected when weight is entered; you can select another option if desired. Required for minor patients when sending prescriptions through Ensora eRx or DoseSpot eRx.</li>
<li><b>BMI</b>: Automatically calculated using height and weight. If BMI is flagged as underweight or overweight, and the patient is older than 18, an Intervention area will show at the bottom of the window. A corresponding LOINC code will show.</li>
<li><b>BMI Percentile</b>: Only visible for patients 3 to 16 years of age as of January 1. A corresponding LOINC code will show.</li>
<li><b>Pulse</b>: The patient's pulse in beats per minute.</li>
</ul>
<p>If applicable, enter CQM (Clinical Quality Measure) exclusion reasons or interventions.</p>
<p class="MarginBottomZero"><b>Exclusion from BMI Exam</b>: This information is included in <a href="ehrcqm.html">EHR Clinical Quality Measures</a> exclusions. If BMI height and weight are not recorded due to a patient's condition, select the checkbox that explains the reason. </p>
<ul class="MarginBottomGap">
<li><b>Pregnancy</b>: Check this box if patient is/was pregnant during measurement period. If you have set a default pregnancy code in <a href="ehrsettings.html">EHR Settings</a>, it will show as the Pregnancy Code and Description. If you have not set a default, the <a href="problemmaster.html">Problem List</a> will open so you can select one. To set a default, click Change Default. Once selected, a diagnosis of pregnancy, using this code, will also be added to the patient's list of problems with a start date equal to exam date, if an active diagnosis doesn't already exist. Pregnant patients will not count in the denominator of associated CQMs, though will show as an exclusion.</li>
<li><b>Other Reason</b>: Check this box if height/weight is not recorded for a reason other than pregnancy, then document the <a href="ehrnotperformed.html">Reason not Performed</a>. If a valid reason is documented, this patient will not be calculated in the denominator of associated CQMs.</li>
</ul>
<p class="MarginBottomZero"><b>Interventions and/or Medications</b>: This area only shows in the following circumstances: </p>
<ul class="MarginBottomGap">
<li>If a patient is 16 years of age or younger as of January 1 of the exam year, and a height and weight is entered.</li>
<li>If a patient is 18 or older, height and weight are entered, and the calculated BMI is flagged as underweight or overweight.</li>
</ul>
<p>Click <b>Add</b> to document an <a href="ehrinterventions.html">Intervention</a>.</p>
<img src="images/ehrVitalsInterventions.gif" width="662" height="579"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Enter the date. The default is today's date.</li>
<li>Click on an intervention. To filter the list by intervention type, click the <b>Code Set</b> dropdown.  <ul>
<li>Patients 16 or younger: Nutritional Counseling and Physical Activity Counseling interventions are listed.</li>
<li>Patients 18 or older: Above/Below Normal Weight referral, medication, or follow up interventions are listed.</li>
</ul>
</li>
<li>If patient declines the intervention, click <b>Patient Declined</b>.</li>
<li>Enter a <b>Note</b> (optional).</li>
</ul>
<p>Click OK. </p>
<p>If you select a medication, the Medication for Patient window will open so you can enter instructions and start date. See <a href="medicationspatient.html">Medications</a>. Click OK to save the vital sign entry.</p>
</div>
</div>
</body>
</html>```
