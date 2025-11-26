# File: ./www.opendental.com/manual/reporttreatfinder.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Treatment Finder Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reporttreatfinder','+reportlists','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reporttreatfinder.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reporttreatfinder.html" >v24.2</option><option value="https://www.opendental.com/manual241/reporttreatfinder.html" >v24.1</option><option value="https://www.opendental.com/manual233/reporttreatfinder.html" >v23.3</option><option value="https://www.opendental.com/manual232/reporttreatfinder.html" >v23.2</option><option value="https://www.opendental.com/manual231/reporttreatfinder.html" >v23.1</option><option value="https://www.opendental.com/manual224/reporttreatfinder.html" >v22.4</option><option value="https://www.opendental.com/manual223/reporttreatfinder.html" >v22.3</option><option value="https://www.opendental.com/manual222/reporttreatfinder.html" >v22.2</option><option value="https://www.opendental.com/manual221/reporttreatfinder.html" >v22.1</option><option value="https://www.opendental.com/manual214/reporttreatfinder.html" >v21.4</option><option value="https://www.opendental.com/manual213/reporttreatfinder.html" >v21.3</option><option value="https://www.opendental.com/manual212/reporttreatfinder.html" >v21.2</option><option value="https://www.opendental.com/manual211/reporttreatfinder.html" >v21.1</option><option value="https://www.opendental.com/manual205/reporttreatfinder.html" >v20.5</option><option value="https://www.opendental.com/manual204/reporttreatfinder.html" >v20.4</option><option value="https://www.opendental.com/manual203/reporttreatfinder.html" >v20.3</option><option value="https://www.opendental.com/manual202/reporttreatfinder.html" >v20.2</option><option value="https://www.opendental.com/manual201/reporttreatfinder.html" >v20.1</option><option value="https://www.opendental.com/manual194/reporttreatfinder.html" >v19.4</option><option value="https://www.opendental.com/manual193/reporttreatfinder.html" >v19.3</option><option value="https://www.opendental.com/manual192/reporttreatfinder.html" >v19.2</option><option value="https://www.opendental.com/manual191/reporttreatfinder.html" >v19.1</option><option value="https://www.opendental.com/manual184/reporttreatfinder.html" >v18.4</option><option value="https://www.opendental.com/manual183/reporttreatfinder.html" >v18.3</option><option value="https://www.opendental.com/manual182/reporttreatfinder.html" >v18.2</option><option value="https://www.opendental.com/manual181/reporttreatfinder.html" >v18.1</option><option value="https://www.opendental.com/manual174/reporttreatfinder.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Treatment Finder Report</p></div>
<div class="GeneralPageContent">
<p>Use the Treatment Finder report to identify active patients who have treatment planned procedures. </p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the <i>Lists</i> section, click <b>Treatment Finder</b>.</p>
<img src="images/reportTreatFinder.png" width="915" height="374"/><p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our Webinar: <a href="https://youtu.be/v78p-eywItc">Treatment Finder Report</a></p>
<p></p>
<p>The Treatment Finder report can stay open in the background while users work in other windows (e.g., Account Module, Appointment Module) of Open Dental.  <div class="Note">Note: To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</div>
</p>
<p class="MarginBottomZero">When first generated, the list includes patients who: </p>
<ul class="MarginBottomGap">
<li>Have treatment planned procedures (does not include procedures with a $0 fee).</li>
<li>Have no scheduled appointment.</li>
<li>Have insurance with a benefit year that follows the Calendar Year.</li>
</ul>
<h2>View</h2>
<p>Different settings affect the results of the report. Set the report criteria in the View section.</p>
<img src="images/treatFinderView.png" width="915" height="102"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Ins Month Start</b>: Filter the list by when a patient's insurance benefit year begins.  <ul>
<li>For cases where the insurance begins mid-year, we recommend running the report monthly. (For example, select November to find patients whose benefits expire on November 1st.) </li>
<li>If January is set as an insurance plan's start month, this is not the same as <i>Calendar Year</i>. To include those patients in the treatment finder report, users must select <i>January</i> as the <i>Ins Month Start</i>. </li>
</ul>
</li>
<li><b>Amount remaining over</b>: Enter an amount to filter the report to only include patients that have insurance benefits remaining over the specified amount. Results include patients whose <i>Amt Rem</i> plus <i>Amt Pend</i> is over the amount, and patients who have no annual max entered.</li>
<li><b>TP Date From</b>: Enter a date to filter the report to only include patients with procedures with treatment planned on or after this date. </li>
<li><b>TP Date To</b>: Enter a date to filter the report to only include patients with procedures with treatment planned on or before this date. Enter today's date to include treatment up to the current date. <br/><div class="Note">Note: Set both dates to show patients with at least one procedure treatment planned within a date range.</div>
</li>
<li><b>Clinics</b>: Select Clinics to include in the report. Ctrl + click to select multiple Clinics or select <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  <ul>
<li>Filters by patient's assigned Clinic.</li>
<li>If user is restricted to specific Clinics, only accessible Clinics are listed. When selecting <b>All (includes hidden)</b>, results include all Clinics user has access to, including those marked hidden, and anything unassigned to a Clinic; results do not include Clinics user is restricted from.</li>
<li>When connected via <a href="middletier.html">Middle Tier</a>, users will not be able to run the report for <b>All (includes hidden)</b> Clinics.</li>
</ul>
</li>
<li><b>Providers</b>: Select the providers to include. Ctrl + click to select multiple providers. Select <b>All</b> to include all providers, including those marked <i>Hidden on Reports</i>. Filters by patient's primary provider by default. See Use Treating Provider to filter by treating provider instead.
<ul class="MarginBottomGap">
	<li>To exclude hidden providers from the report, manually select visible providers from the list.</li>
</ul></li>
<li><b>Billing Type</b>: Select patients assigned specific <a href="definitionsbillingtypes.html">Billing Types</a> to include. Ctrl + click to select multiple billing types. Select <b>All</b> to include all listed billing types. <ul>
<li><b>Include Hidden Billing Types</b>: Check to include billing types marked as <i>hidden</i> in the Billing Type dropdown.</li>
</ul>
</li>
<li><b>Use Treating Provider</b>: Check to filter by provider assigned to procedure (i.e., treating provider).</li>
<li><b>Assume procedures are General</b>: Assume all procedures for a patient apply towards annual max. Set the default in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a>.</li>
<li><b>Include secondary insurance and no insurance</b>: Include patients with secondary insurance and no insurance. If checked, the<i> Ins Month Start</i> is ignored.</li>
<li><b>Include patients with upcoming appointments</b>: Check to include patients who have a scheduled appointment in the future. Planned appointments are not included; see <a href="appttracker.html">Planned Appointment Tracker</a> instead.</li>
<li><b>Code Range</b>: Enter a procedure code or code range to filter results to only include patients who have specific treatment planned procedures.</li>
</ul>
<h2>Treatment Finder Grid</h2>
<p>After setting report criteria, click <b>Refresh List</b> to update the results in the Treatment Finder grid. Click a column header to sort results in ascending or descending order.</p>
<p>The Treatment Finder grid displays results for the selected criteria. </p>
<img src="images/treatFinderGrid.png" width="915" height="171"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>LName / FName</b>: Last name and first name of the patient.</li>
<li><b>Contact</b>: Preferred Recall contact method from <a href="patientedit.html">Edit Patient Information</a>. If no Preferred Recall Method is set for a patient the Home Phone Number displays under Contact instead.</li>
<li><b>Annual Max</b>: View individual (I) or family (F) annual max insurance benefits. Patients with no annual max entered show a <i>Amt Rem</i> of $0.</li>
<li><b>Amt Used</b>: View amount of insurance used for completed procedures attached to received, supplemental, or adjustment insurance claims. Individual and family amounts show.</li>
<li><b>Amt Pend</b>: View pending insurance claims with attached completed procedures. Individual and family amounts show.</li>
<li><b>Amt Rem</b>: View remaining insurance benefits. Individual and family amounts show. Amount remaining includes completed procedures.</li>
<li><b>TreatPlan</b>: Total procedure fees for the individual patient's active treatment planned procedures.</li>
<li><b>Insurance Carrier</b>: Patient's primary insurance carrier.</li>
<li><b>Clinic</b>: Patient's assigned Clinic.</li>
</ul>
<p>Click a patient in the grid to open the Chart Module for the selected patient.</p>
<p class="MarginBottomZero">Right-click options:  </p>
<ul class="MarginBottomGap">
<li><b>See Family</b>: Click to open the Family Module for the selected patient.</li>
<li><b>See Account</b>: Click to open the Account Module for the selected patient.</li>
</ul>
<h2>Options</h2>
<p>At the bottom of the Treatment Finder window are additional options</p>
<img src="images/treatFinderButtons.png" width="883" height="58"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Letters Preview</b>: Select patients and click to generate a letter preview. Select the patient letter template to use then click OK. A PDF preview of all letters is generated. Patient letter templates are defined in <a href="sheets.html">Sheets</a>.</li>
<li><b>Export to File</b>: Export all results as a .txt or .xls file that can be merged or imported into another program. For all patients, PatNum, Last Name, First Name, Contact Method, Address, City, State, Zip, Annual Max, Amount Used, Amount Pending, Amount Remaining and Treatment Plan total is exported.</li>
<li><b>Single Labels</b>: Select patients and click to send directly to a label printer. Patients' names and addresses are printed on individual sheets.</li>
<li><b>Label Preview</b>: Select patients and click to generate a PDF preview of labels. Patients' names and addresses are printed multiple per sheet. Click Print from the preview window to send to the printer.</li>
<li><b>Print List</b>: Click to print all results in the Treatment Finder grid. See Print Preview below. </li>
<li><b>Go to Family</b>: Click to view Family Module for selected patient.</li>
<li><b>Go to Account</b>: Click to view Account Module for selected patient.</li>
</ul>
<h2>Print Preview</h2>
<p>Click <b>Print List </b>to print the results in the Treatment Finder grid. The information on the printout matches what appears on the Treatment Finder grid. An example is below.</p>
<img src="images/reportTreatFinderPrint.png" width="859" height="155"/></div>
</div>
</body>
</html>```
