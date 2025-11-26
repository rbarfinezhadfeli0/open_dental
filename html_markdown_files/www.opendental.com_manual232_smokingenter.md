# File: ./www.opendental.com/manual232/smokingenter.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Tobacco</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('smokingenter','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/smokingenter.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/smokingenter.html" >v24.2</option><option value="https://www.opendental.com/manual241/smokingenter.html" >v24.1</option><option value="https://www.opendental.com/manual233/smokingenter.html" >v23.3</option><option value="https://www.opendental.com/manual232/smokingenter.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/smokingenter.html" >v23.1</option><option value="https://www.opendental.com/manual224/smokingenter.html" >v22.4</option><option value="https://www.opendental.com/manual223/smokingenter.html" >v22.3</option><option value="https://www.opendental.com/manual222/smokingenter.html" >v22.2</option><option value="https://www.opendental.com/manual221/smokingenter.html" >v22.1</option><option value="https://www.opendental.com/manual214/smokingenter.html" >v21.4</option><option value="https://www.opendental.com/manual213/smokingenter.html" >v21.3</option><option value="https://www.opendental.com/manual212/smokingenter.html" >v21.2</option><option value="https://www.opendental.com/manual211/smokingenter.html" >v21.1</option><option value="https://www.opendental.com/manual205/smokingenter.html" >v20.5</option><option value="https://www.opendental.com/manual204/smokingenter.html" >v20.4</option><option value="https://www.opendental.com/manual203/smokingenter.html" >v20.3</option><option value="https://www.opendental.com/manual202/smokingenter.html" >v20.2</option><option value="https://www.opendental.com/manual201/smokingenter.html" >v20.1</option><option value="https://www.opendental.com/manual194/smokingenter.html" >v19.4</option><option value="https://www.opendental.com/manual193/smokingenter.html" >v19.3</option><option value="https://www.opendental.com/manual192/smokingenter.html" >v19.2</option><option value="https://www.opendental.com/manual191/smokingenter.html" >v19.1</option><option value="https://www.opendental.com/manual184/smokingenter.html" >v18.4</option><option value="https://www.opendental.com/manual183/smokingenter.html" >v18.3</option><option value="https://www.opendental.com/manual182/smokingenter.html" >v18.2</option><option value="https://www.opendental.com/manual181/smokingenter.html" >v18.1</option><option value="https://www.opendental.com/manual174/smokingenter.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Tobacco</p></div>
<div class="GeneralPageContent">
<p>In the <a href="ehrdashboard1.html">EHR Dashboard</a>, click the <b>Edit smoking status</b> row.</p>
<img src="images/ehrSmoking.gif" width="812" height="525"/><p class="MarginBottomZero">Alternatively,  </p>
<ul class="MarginBottomGap">
<li>In the <a href="medical.html">Medical</a> chart, click the Tobacco Use tab.</li>
<li>In the <a href="chart.html">Chart Module</a>, double-click the Tobacco Use row.</li>
</ul>
<p>EHR must be enabled in <a href="showfeatures.html">Show Features</a> for the Tobacco Use tab to display.</p>
<p>Smoking status, tobacco use, and documented interventions affect <a href="ehrcqm.html">EHR Clinical Quality Measures</a> in <a href="../site/ehrmodified2.html">EHR Modified Stage 2</a>.</p>
<p>Document information for CQM #138 (Preventive Care and Screening: Tobacco Use: Screening and Cessation Intervention). This CQM calculates how many patients 18 years and older are assessed as 'tobacco user' and also receive a cessation counseling intervention. See <a href="ehrcqmdef.html">EHR Clinical Quality Measure Descriptions</a>.</p>
<p><b>Current Smoking Status</b>: Click the dropdown to select the patient's current smoking status. The available options are based on SNOMED CT codes. If <i>none</i> is selected, the status will not be counted in the numerator. Only one status selection per day will be added to the Assessment History. This status affects the percentage calculation for EHR Smoking Status.</p>
<h2>Tobacco Use Assessment Tab</h2>
<p>Assess the patient's tobacco use.</p>
<img src="images/ehrSmokingAssesTab.gif" width="781" height="272"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date Assessed</b>: Defaults to today's date.</li>
<li><b>Assessment Type</b>: Select the Assessment Type option that best describes the question asked to the patient. There are three options:  <ul>
<li>History of tobacco use Narrative.</li>
<li>Have you used tobacco in the last 30 days SAMH.</li>
<li>Have you used smokeless tobacco product in the last 30 days SAMH.</li>
</ul>
</li>
<li><b>Filter Statuses By</b>: Select a Filter Statuses By option to filter the Tobacco Status list.  <ul>
<li>All = all statuses</li>
<li>User = status options for tobacco users</li>
<li>Non-User = status options for non-tobacco users</li>
<li>Frequent = status options used most often</li>
</ul>
</li>
<li><b>Tobacco Status</b>: Click the dropdown to select the patient's current tobacco status. The available options are based on SNOMED CT codes. To select a different code, select Choose from all SNOMED CT codes. If you use a code that is not recommended CQMs percentages may be affected.</li>
<li><b>Add Assessment</b>: Click to add the assessment. Multiple entries can be added for the same day.</li>
</ul>
<p>To add additional information to an assessment, double-click it from the Assessment History grid. </p>
<img src="images/ehrSmokingEdit.gif" width="574" height="292"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<ul>
<li><b>Date Time</b>: Edit the date and time of the assessment.</li>
<li><b>Patient</b>: Displays the patient name.</li>
<li><b>Event</b>: Displays the Assessment Type. </li>
<li><b>Result</b>: Displays the Tobacco Status entered. </li>
<li><b>More information about the event</b>: Enter any relevant notes.</li>
<li><b>Tobacco Use Start Date</b>: Enter the date when the patient started using tobacco (MM/DD/YY). Open Dental will automatically calculate the duration. Informational only.</li>
<li><b>Tobacco Use Desire to Quit</b>: Rate the patient's desire to quit using tobacco on a scale of 1 - 10. Informational only.</li>
</ul>
</ul>
<p>Click <b>Delete</b> to remove the assessment. Click <b>OK</b> to save changes. </p>
<h2>Cessation Intervention</h2>
<p>If patient is assessed as a tobacco user, document an <a href="ehrinterventions.html">Intervention</a>. </p>
<img src="images/ehrSmokingCessationTab.gif" width="781" height="354"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date Intervened</b>: Defaults to today's date.</li>
<li><b>Filter Codes by</b>: Select a Filter Codes by option to filter the Intervention Code list. <ul>
<li>All = all interventions</li>
<li>User = interventions for tobacco users</li>
<li>Non-User = interventions for non-tobacco users</li>
<li>Frequent = interventions used most often</li>
</ul>
</li>
<li><b>Intervention Code</b>: Click the dropdown to select the intervention.</li>
<li><b>Patient Declined</b>: Check to indicate a patient is declining the intervention (optional). This is informational only. Declined interventions still count in CQMs.</li>
<li><b>Add Intervention</b>: Click to add the intervention. If you select a medication, the Medication for Patient window will open so you can enter instructions and start date. The medication will be added to the <a href="medicationspatient.html">Medications</a> list.</li>
</ul>
<p>To add additional information to a smoking intervention, double-click it from the Intervention History. </p>
<img src="images/ehrSmokingIntervention.gif" width="662" height="465"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Edit the date of the intervention.</li>
<li><b>Code Set</b>: Defaults to <i>TobaccoCessation Counseling</i>. </li>
<li><b>Patient Declined</b>: Check to note the patient has declined intervention.</li>
<li><b>Intervention Codes</b>: Highlights the selected intervention code. Cannot be changed. </li>
<li><b>Notes</b>: Enter any relevant notes.</li>
</ul>
<p>Click <b>Delete</b> to remove the intervention. Click <b>OK</b> to save changes. </p>
</div>
</div>
</body>
</html>```
