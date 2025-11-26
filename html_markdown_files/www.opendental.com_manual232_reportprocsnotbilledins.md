# File: ./www.opendental.com/manual232/reportprocsnotbilledins.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Procedures Not Billed to Insurance Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportprocsnotbilledins','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportprocsnotbilledins.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportprocsnotbilledins.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportprocsnotbilledins.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportprocsnotbilledins.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportprocsnotbilledins.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportprocsnotbilledins.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportprocsnotbilledins.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportprocsnotbilledins.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportprocsnotbilledins.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportprocsnotbilledins.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportprocsnotbilledins.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportprocsnotbilledins.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportprocsnotbilledins.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportprocsnotbilledins.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportprocsnotbilledins.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportprocsnotbilledins.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportprocsnotbilledins.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportprocsnotbilledins.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportprocsnotbilledins.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportprocsnotbilledins.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportprocsnotbilledins.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportprocsnotbilledins.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportprocsnotbilledins.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportprocsnotbilledins.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportprocsnotbilledins.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportprocsnotbilledins.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportprocsnotbilledins.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportprocsnotbilledins.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Procedures Not Billed to Insurance Report</p></div>
<div class="GeneralPageContent">
<p>The Procedures Not Billed to Insurance report generates a list of procedures with an outstanding insurance estimate that haven't been attached to a claim.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Procedures Not Billed to Ins</b>.</p>
<img src="images/reportProcsNotBilledtoIns.png" width="915" height="314"/><p>Alternatively, in the <a href="claimsend.html">Send Claims</a> window, click <b>Procs Not Billed</b>.</p>
<p> All procedures on this list should either be billed to insurance or marked <i>Do Not Bill to Ins</i> in the <a href="procedureedit.html">Procedure Info window</a>. Procedures only appear if the procedure has a fee and the patient has an active insurance plan.</p>
<p>This report can remain open while working in other windows.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p>Select the report criteria, then click <b>Refresh</b> to update the list.</p>
<img src="images/procNotBilledFilters.png" width="915" height="109"/><p><b>Show Procedures Completed Before Insurance Added:</b> Check this box to include procedures that were completed before the patient's insurance was added. If unchecked, procedures set complete prior to insurance being added are excluded from the report.</p>
<p><b>From / To Dates:</b> Defaults to today's date. Type a date or click the dropdown to and select a date to from the calendar. Click the arrow again or <b>Refresh</b> to close the calendar.</p>
<p class="MarginBottomZero"><b>Clinics</b>: Select clinics to include in the report. Ctrl + click to select multiple clinics or check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by Clinic assigned to procedure.</li>
<li>If user is restricted to specific Clinics, only accessible Clinics are available in the list. When checking <b>All (includes hidden)</b>, results include all Clinics user has access to, including those marked hidden, and anything unassigned to a Clinic; results do not include Clinics user is restricted from.</li>
</ul>
<p class="MarginBottomZero"><b>Procedure Codes</b>: Type procedure codes and choose a checkbox to filter out specific procedures. </p>
<ul class="MarginBottomGap">
<li><b>Only</b>: Exclusively show the entered procedure codes.</li>
<li><b>Exclude</b>: Omit the entered procedure codes.</li>
</ul>
<p><b>Include Medical Procedures:</b> Check to include unsent procedures for patients who have medical insurance. If unchecked, unsent procedures for insurance plans marked <i>Medical </i> are excluded.</p>
<p><b>Automatically Group Procedures</b>: When checked, if selected procedures include same patient with different clinics or places of service, separate claims are created for each Clinic/place of service when clicking <b>New Claims</b>. When unchecked, users are blocked from creating claims when patient procedures have different clinic/place of service; users must select the procedures from the same clinic/place of service only to create claims.</p>
<p><b>Show Procedures in Progress</b>: Check to view procedures with a status of <i>Complete (In Process)</i>. These procedures must be <a href="procsmultipleappts.html">Grouped for Multiple Visits</a>.</p>
<p>Click <b>Refresh</b> to update report results after changing filter criteria.</p>
<h2>Procedure Not Billed Grid</h2>
<p>The report results list each procedure matching the filter criteria that is marked unsent. Descriptions of each column in the grid are below. Right-click a row and select <b>Go To Account</b> to open the selected patient's account.</p>
<img src="images/procsNotBilledReport.png" width="915" height="170"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Patient Name</b>: Last name and first name of patient associated to the unsent procedure. If <i>Show PatNum: Aging, OutstandingIns, ProcsNotBilled</i> is enabled in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a>, also includes Patient Number.</li>
<li><b>Stat</b>: Procedure status. <ul>
<li>C: Complete.</li>
<li>C/P: Complete (In Process).</li>
<li>Other procedure statuses (e.g., treatment planned) are not reflected in this list.</li>
</ul>
</li>
<li><b>Procedure Date</b>: Date completed. See: <a href="procedureedit.html">Edit Procedure</a></li>
<li><b>Procedure Description</b>: Description from <a href="procedurecodeedit.html">Edit Procedure Code</a>.</li>
<li><b>Clinic</b>: Clinic assigned to the procedure (i.e., treating clinic).</li>
<li><b>Amount</b>: Patient billed fee. This may differ from the UCR fee, depending on insurance plan setup.</li>
</ul>
<h2>Create Claims</h2>
<p class="MarginBottomZero">To create claims from the Procedures Not Billed to Insurance Report: </p>
<ol class="MarginBottomGap">
<li>Highlight the procedures to create a claim for. Ctrl + click to select multiple procedures or click <b>Select All</b> to highlight all procedures in the list.</li>
<li>Click <b>New Claims</b>. <br/><img src="images/claimcreatebatchMsg.gif" width="412" height="172" class="ImageInParagraph"/></li>
<li>A message indicates the number of claims that may be created. Click <b>OK</b> to proceed. </li>
<li>If there are any issues creating claims, an error appears. Click <b>OK</b> to proceed. Claims without errors are created.</li>
<img src="images/procsNotBilledError.png" width="619" height="147"/><li>Another message indicates the number of claims created. Click <b>OK</b> to close the message.</li>
<img src="images/claimCreateBatchMsg2.png" width="201" height="140"/></ol>
<p>Procedures that had claims created are now removed from the list and are <i>Waiting to Send</i>. Any unselected procedures or those with errors, remain in the list.</p>
<p>Send claims from patient accounts or the <a href="claimsend.html">Send Claims</a> window.</p>
<h2>Print Report</h2>
<p>Click <b>Print</b> to launch a print preview of the report results. For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>. The data columns on the print preview are the same as the report grid listed above.</p>
<img src="images/reportProcsNotBilledIns.png" width="697" height="404"/></div>
</div>
</body>
</html>```
