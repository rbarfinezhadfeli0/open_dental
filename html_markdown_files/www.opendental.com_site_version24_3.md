# File: ./www.opendental.com/site/version24_3.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Version 24.3</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('version24_3','versions','advancedtopics','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>Version 24.3</p></div>
		<div class="GeneralPageContent">
<p>See <a href="versions.html">Versions</a>.</p>
<p><a href="https://opendental.blog/software-update-stable-version-24-3-highlights/" target="_blank"><img src="images/versionHighlightsBlog.png" width="900" height="125"/></a></p>
<p>Version 24.3 was released as stable on 12/19/2024.</p>
<h2>Major Changes</h2><p class="MarginBottomZero">Added 2025 CDT Codes.  </p>
<ul class="MarginBottomGap">
<li>Also backported to 24.2.48.</li>
<li>New option to import treatment areas when updating procedure codes. </li>
</ul>
<p class="MarginBottomZero">Integration with <a href="pearl.html">Pearl AI</a>.  </p>
<ul class="MarginBottomGap">
<li>Send dental radiographs to Pearl to help detect potential conditions. </li>
</ul>
<h2>Changes by Category</h2><p class="MarginBottomZero"><b>Account Module</b></p>
<ul class="MarginBottomGap">
<li>New preference to block claim creation until missing data is fixed. </li>
<li>New preference to determine Payment Plan production date. (also backported to 24.2.51) </li>
<li>Changed verbiage for some payment plan fields. </li>
</ul>
<p class="MarginBottomZero"><b>Appointments Module</b></p>
<ul class="MarginBottomGap">
<li>New setting to prevent more than one appointment-type task from being attached to the same appointment.</li>
<li>New preference for Appointment provider change behavior. </li>
<li>New option to include all dates in the Planned Appointment Tracker. </li>
<li>Appointment View field to view patient's ward. </li>
</ul>
<p class="MarginBottomZero"><b>Chart Module</b></p>
<ul class="MarginBottomGap">
<li>New permission for <i>Perio Chart Copy</i>.</li>
<li>Added Fax as a commlog mode option. </li>
<li>New permission to edit Chart Views. </li>
</ul>
<p class="MarginBottomZero"><b>eServices</b></p>
<ul class="MarginBottomGap">
<li>Allow users to change the date format on web forms. </li>
<li>Deprecated Mobile Sync feature. </li>
<li>Billing List supports Message-to-Pay. </li>
<li>Message-to-Pay option to send statement for family or individual. </li>
<li>Integrate Payment Portal into eClipboard. </li>
<li>Added audit trail entry for <i>MobileNotification</i>. (Also backported to 24.2.55) </li>
<li>Enhanced eClipboard Setup window to be more intuitive. </li>
</ul>
<p class="MarginBottomZero"><b>Family Module</b></p>
<ul class="MarginBottomGap">
<li>Code Groups can be used when creating Other Benefits.</li>
<li>New permission for disbanding a Super Family.</li>
<li>Disbanding a Super Family is logged in the Audit Trail. </li>
</ul>
<p class="MarginBottomZero"><b>Imaging Module</b></p>
<ul class="MarginBottomGap">
<li>Right-click option to find the task an image is attached to. </li>
<li>Print all images in a folder. </li>
</ul>
<p class="MarginBottomZero"><b>Reports</b></p>
<ul class="MarginBottomGap">
<li>New report setting to default User Query to Raw formatting. </li>
<li>PayPlan Charges Due for Payment Plans added to Receivables Breakdown report. </li>
<li>Updated filter options in the Procedures Not Billed to Insurance report. </li>
</ul>
<p class="MarginBottomZero"><b>Miscellaneous</b></p>
<ul class="MarginBottomGap">
<li>New preference to disable indexes when making an automatic update.</li>
<li>New preference to add paging buttons to the Patient Select window. </li>
<li>Added Claim Form items for subscriber First and Last name. </li>
<li>New preference to treat blank entries as zero in Out of Network Fee Schedules.</li>
<li>Updated Batch Quickscreen send time. </li>
<li>New option to export Chart of Account as CSV file. </li>
<li>Program Link output parameter for [ClinicNumCur]. </li>
<li>Added claim validation for one or more $0 procedures on a claim. </li>
<li>Added Open Dental API end user license. (Also backported to 24.2.45) </li>
</ul>
<p class="MarginBottomZero"><b>API</b>: <a href="apispecification.html">API Specification</a><br></p>
<ul class="MarginBottomGap">
<li>EobAttaches POST UploadSftp.</li>
<li>Added ClaimPayments DELETE.</li>
<li>Added ProcessStatus to Payments PUT.</li>
<li>Added EmployerNum field to Patient resource.</li>
</ul>
		</div>
	</div>
</body>
</html>```
