# File: ./www.opendental.com/manual243/reportoutins.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Outstanding Insurance Claims Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportoutins','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportoutins.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportoutins.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportoutins.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportoutins.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportoutins.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportoutins.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportoutins.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportoutins.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportoutins.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportoutins.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportoutins.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportoutins.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportoutins.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportoutins.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportoutins.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportoutins.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportoutins.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportoutins.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportoutins.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportoutins.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportoutins.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportoutins.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportoutins.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportoutins.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportoutins.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportoutins.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportoutins.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportoutins.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Outstanding Insurance Claims Report</p></div>
<div class="GeneralPageContent">
<p>Track outstanding insurance claims and preauthorizations and assign to users for follow-up using the Outstanding Insurance Claims Report. </p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Outstanding Insurance Claims</b>. </p>
<img src="images/reportOutIns.png" width="915" height="346"/><p>This report is useful for tracking claims that have been sent, but not received. From here users can also update tracking status for many claims at once or delegate staff to follow-up on claims.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p>Select filters to update the claims or preauthorizations listed in the grid. </p>
<img src="images/reportOutInsFilters.png" width="915" height="74"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Days Old (min/max):</b> Filter by claim age. The age of the claim depends on the date type selected in the <i>Date Range Applied to</i> filter. Leave both fields blank to show all claims.</li>
<li><b>Date Range (from/to)</b>: Filter by a date range. Use the <i>Date Range Applies to</i> filter to select which date type to use.</li>
<li><b>Date Range Applies to</b>: Select what date type to use when filtering the report. <ul>
<li>Date Sent: Date the claim was last sent.</li>
<li>Date Sent Orig: Date the claim was originally sent.</li>
<li>Date of Service: Date of service of procedures on claim.</li>
</ul>
</li>
<li><b>Preauth Options:</b> Select option for displaying <a href="preauth.html">Preauthorization</a>. <ul>
<li>Including Preauths: Include preauthorizations.</li>
<li>Excluding Preauths: Do not include preauthorizations.</li>
<li>Only Show Preauths: Only show preauthorizations.</li>
</ul>
</li>
<li><b>Ignore Custom Tracking:</b> Do not consider or show claim tracking status in report results (<a href="claimtabstatus.html">Edit Claim - Status History Tab</a>). If ignored, the <i>days suppressed</i> values as a result of the status are ignored. If custom tracking status does show on the report (this box unchecked), the report prints in landscape orientation.</li>
<li><b>Treat Provs:</b> Click the dropdown to select claim treating providers to include. Select <b>All</b> to include all listed providers.</li>
<li><b>Clinics</b>: Select clinics to include in the report. Check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  <ul>
<li>Filters by clinic assigned to claim.</li>
<li>If user is restricted to specific clinics, only accessible clinics are listed. When checking <b>All (includes hidden)</b>, results include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.</li>
</ul>
</li>
<li><b>For User</b>: Select specific users to filter claims assigned to the selected users. Use the dropdown or click <b>[...] </b>to select from a pick list of users. Select <b>All</b> to include claims assigned to all users and unassigned claims. <ul>
<li><b>Select All</b>: Select all users, including those marked hidden.</li>
<li><b>Select None</b>: Select no users. Claims filtered in the list are unassigned.</li>
<li><b>Mine</b>: View outstanding claims assigned to the logged-on user </li>
</ul>
</li>
<li><b>Last Claim Custom Tracking Status:</b> Filter by last recorded claim tracking status. Click the dropdown to select an option. Custom track statuses are attached to claims in the Edit Claim Window, Status Tab.</li>
<li><b>Carrier:</b>: Type an insurance carrier name to limit results. Any insurance carriers with matching text in the name are included in results (e.g., if <i>Health</i> is entered, results include <i>Health Partners</i> and <i>Oregon Health Plan</i>).</li>
<li><b>Last Error Definition:</b> Filter by claim error code. Error codes are attached to claims from <a href="claimtabstatus.html">Edit Claim - Status History Tab</a>.</li>
</ul>
<h2>Claims Grid</h2>
<p> Click <b>Refresh</b> after setting filter criteria to update the results in the Claims grid. </p>
<img src="images/reportOutInsClaims.png" width="915" height="196"/><p class="MarginBottomZero">Click a column title to sort results in ascending or descending order. To view a claim, double-click it. The following columns are displayed on the report by default: </p>
<ul class="MarginBottomGap">
<li><b>Carrier Name</b>: The insurance carrier.</li>
<li><b>Phone</b>: The insurance carrier's phone number.</li>
<li><b>Type</b>: The type of insurance (primary, secondary, etc).</li>
<li><b>User</b>: The user assigned to follow up on the claim.</li>
<li><b>PatName</b>: Last name and first name of patient associated with the claim. If <i>Show PatNum: Aging, OutstandingIns, ProcsNotBilled</i> is enabled in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a>, also includes Patient Number.</li>
<li><b>Clinic</b>: The clinic on the claim.</li>
<li><b>DateService</b>: Date of service on the claim. A date of 01/01/0001 indicates there is no date of service and indicates this is a preauthorization. </li>
<li><b>DateSent</b>: Last date the claim was sent. Differs from DateSentOrig if claim has been re-sent. If claim has been re-sent multiple times, this reflects the most recent date the claim was re-sent.</li>
<li><b>DateSentOrig</b>: Date the claim was originally sent. If the claim has never been re-sent, this is the same as DateSent.</li>
<li><b>TrackStat</b>: The last claim tracking status entered. </li>
<li><b>DateStat</b>: The date the track status was entered. </li>
<li><b>Error</b>: The Claim Error code, if one exists. This column won't populate results if <i>Ignore Custom Tracking</i> is checked.</li>
<li><b>Amount</b>: The total fee billed to each carrier. This is not the insurance estimate, so it should not be used to determine outstanding insurance payment amounts. This may also differ from the amount billed to the patient's account if the preference <i>Claims Show UCR, fee not billed fee</i> is enabled in the <a href="insplan.html">Other Ins Info tab</a> of an insurance plan. </li>
</ul>
<p class="MarginBottomZero">By default, the following fields are not displayed on the report. They can be added to the report in <a href="displayfields.html">Display Fields</a>.  </p>
<ul class="MarginBottomGap">
<li><b>GroupNum</b>: Insurance plan group number.</li>
<li><b>GroupName</b>: Insurance plan group name.</li>
<li><b>SubName</b>: Subscriber name.</li>
<li><b>SubDOB</b>: Subscriber date of birth.</li>
<li><b>SubID</b>: Subscriber ID.</li>
<li><b>PatDOB</b>: The date of birth of the patient on the outstanding claim.</li>
</ul>
<p><b>Total</b>: Shows the total fee billed to insurance (i.e., Amount) for all claims in the grid. </p>
<img src="images/reportOutInsTotal.png" width="117" height="28"/><p class="MarginBottomZero">Right-click options: Right-click on a claim row to select one of the following options:  </p>
<ul class="MarginBottomGap">
<li><b>Go to Account</b>: Jump to the patient's <a href="account.html">Account Module</a> without closing the report window.</li>
<li><b>Assign to Me</b>: Assign the claim to the logged-on user.</li>
<li><b>Assign to User</b>: Assign the claim to any user.</li>
</ul>
<h2>Buttons</h2>
<img src="images/reportOutstandingInsButtons.png" width="163" height="95"/><p><b>Assign User</b>: Select claims from the grid and click to assign to a specific user. To remove user assignment, click <b>Assign None </b>from the Pick User window.</p>
<p class="MarginBottomZero"><b>Zero Claims</b>: Select claims from the grid and click to automatically mark as received. If no items are selected, all claims in the grid are received. Requires the <a href="permissionssecurityadmin.html">"Security Admin" Permission</a>. </p>
<ul class="MarginBottomGap">
<li>A warning appears after clicking the button. Click OK to proceed. All selected claims are changed to <i>Received</i> and all associated <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> are marked received.</li>
<li>Claims are marked <i>No Payment</i> with $0 write-offs.</li>
<li>There is no prompt for secondary claims when using this button. Use the <a href="reportclaimsnotsent.html">Claims Not Sent Report</a> to find and send any outstanding secondary claims if needed. </li>
</ul>
<p><b>Export</b>: Click to export the list of claims and preauthorizations as a TXT or XLS file. </p>
<p><b>Print</b>: Click to send the report to the default printer. </p>
<h2>View Carrier/Plan and Patient/Subscriber Info</h2>
<p>Click a row in the Claims grid to view information for the selected row.</p>
<img src="images/reportOutInsInfo.png" width="656" height="115"/><br/><h2>Custom Tracking</h2>
<p>Use this tool to change the Track Status or Error Code of all claims currently in the grid. Only enabled for users with the <i>Update Custom Tracking</i> security permission. See <a href="definitionsclaimcustomtracking.html">Definitions: Claim Custom Tracking</a> for additional information.</p>
<img src="images/outstandingInsCustomTracking.png" width="288" height="115"/><p class="MarginBottomZero">To update Custom Tracking Status on all claims currently listed in the Claims grid (the total number of claims to be changed is noted in the bottom-right corner): </p>
<ol class="MarginBottomGap">
<li>Change report filter criteria as needed.</li>
<li>Click <b>Update Custom Tracking</b>. <br/><img src="images/claimEditCustomTrackStatusUpdate.png" width="363" height="406" class="ImageInParagraph"/></li>
<li>Click the dropdown to select a status.</li>
<li>Add a note if desired.</li>
<li>Click <b>Save</b>. The Custom Tracking Status details are added for all claims in the Claims grid. </li>
</ol>
</div>
</div>
</body>
</html>```
