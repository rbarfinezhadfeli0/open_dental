# File: ./www.opendental.com/manual243/reportsnewpatient.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - New Patients Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportsnewpatient','+reportlists','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportsnewpatient.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportsnewpatient.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportsnewpatient.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportsnewpatient.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportsnewpatient.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportsnewpatient.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportsnewpatient.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportsnewpatient.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportsnewpatient.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportsnewpatient.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportsnewpatient.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportsnewpatient.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportsnewpatient.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportsnewpatient.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportsnewpatient.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportsnewpatient.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportsnewpatient.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportsnewpatient.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportsnewpatient.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportsnewpatient.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportsnewpatient.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportsnewpatient.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportsnewpatient.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportsnewpatient.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportsnewpatient.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportsnewpatient.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportsnewpatient.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportsnewpatient.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>New Patients Report</p></div>
<div class="GeneralPageContent">
<p>Find patients who had their first procedure completed in a date range by running the New Patients report.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Lists section, click <b>New Patients</b>.</p>
<img src="images/reportNewPatientwindow.gif" width="661" height="399"/><p>This report lists all new patients whose first completed procedure falls within a specific date range and their total gross production for all time. This is not related to the patient's date of first visit. The report can optionally be filtered by primary provider. To report by treating provider instead, see Query by Treating Provider below.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Report Filters</h2>
<p>Set the report filters before running the report.</p>
<p class="MarginBottomZero"><b>Providers</b>: Select the providers to include. Ctrl + click to select multiple providers. Select <b>All</b> to include all providers, including those marked <i>Hidden on Reports</i>. Filters by patient's primary provider.
<ul class="MarginBottomGap">
	<li>To exclude hidden providers from the report, manually select visible providers from the list.</li>
</ul></p>
<p><b>Today's Date</b>: Read only. Automatically populated with today's date for reference.</p>
<p class="MarginBottomZero"><b>Date Range</b>: Set the date range to filter the report. Type in a date range in the <b>From</b>/<b>To</b> boxes or use the buttons to set the date range. Filters by date of patients' first completed procedure.  </p>
<ul class="MarginBottomGap">
<li><b>Left Arrow</b>: Click to set the date range one month prior to the currently entered date range.</li>
<li><b>The Month</b>: Click the set the date range the the current calendar month.</li>
<li><b>Right Arrow:</b>Click to set the date range one month forward from the currently entered date range.</li>
</ul>
<p><b>Include address information</b>: Check to include additional fields in the report and generate in landscape orientation. See below for information on additional fields.</p>
<p><b>Exclude patients with no production</b>: Check to exclude patients who had no completed procedures or had treatment that resulted in no cost.</p>
<h2>Report Preview</h2>
<p>After setting the report criteria, click <b>OK</b> to generate a print preview the report. Below is an example of the report and description of the report columns.</p>
<p> For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportNewPatient.gif" width="915" height="479"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>#</b>: Row number. Each result in the report is assigned a number in ascending order.</li>
<li><b>Date</b>: Date of first completed procedure.</li>
<li><b>Last Name</b>: Patient last name.</li>
<li><b>First Name</b>: Patient first name.</li>
<li><b>Referral</b>: <i><a href="referrals.html">Referral</a> From</i> in Family Module. If the patient has multiple <i>Referrals From</i>, only the first ordered in the Referrals for Patient will be displayed on the report.</li>
<li><b>Production Fee</b>: Patient's total gross production for all time. This is not production for the first visit or the reporting period. This is totaled for all patients in bold on the final page of the report at the end of the grid.</li>
<li>The following columns only appear on the report when <i>Include address information</i> is checked:</li>
<ul>
<li><b>Pref'd</b>: Patient preferred name.</li>
<li><b>Address</b>: Address line from <a href="patientedit.html">Edit Patient Information</a>.</li>
<li><b>Add2</b>: Address2 line from Edit Patient Information.</li>
<li><b>City</b>, <b>ST</b>, <b>Zip</b>: Patient's city, state, zip code address information. </li>
</ul>
</ul>
<h2>Query by Treating Provider</h2>
<p>To report by treating provider, see Query 1215 in <a href="https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx">Query Examples</a>. This query will list, by treating provider, all new patients whose first completed procedure date falls within the date range. Since a patient can see more than one provider on their first visit, the sum of the new patient counts may be equal to, or greater than, the standard New Patient Report result. For example, a patient seen by two providers on their initial visit will be counted twice (once for each provider).</p>
</div>
</div>
</body>
</html>```
