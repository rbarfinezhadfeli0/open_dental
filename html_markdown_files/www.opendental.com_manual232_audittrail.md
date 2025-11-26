# File: ./www.opendental.com/manual232/audittrail.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Audit Trail</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('audittrail','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/audittrail.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/audittrail.html" >v24.2</option><option value="https://www.opendental.com/manual241/audittrail.html" >v24.1</option><option value="https://www.opendental.com/manual233/audittrail.html" >v23.3</option><option value="https://www.opendental.com/manual232/audittrail.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/audittrail.html" >v23.1</option><option value="https://www.opendental.com/manual224/audittrail.html" >v22.4</option><option value="https://www.opendental.com/manual223/audittrail.html" >v22.3</option><option value="https://www.opendental.com/manual222/audittrail.html" >v22.2</option><option value="https://www.opendental.com/manual221/audittrail.html" >v22.1</option><option value="https://www.opendental.com/manual214/audittrail.html" >v21.4</option><option value="https://www.opendental.com/manual213/audittrail.html" >v21.3</option><option value="https://www.opendental.com/manual212/audittrail.html" >v21.2</option><option value="https://www.opendental.com/manual211/audittrail.html" >v21.1</option><option value="https://www.opendental.com/manual205/audittrail.html" >v20.5</option><option value="https://www.opendental.com/manual204/audittrail.html" >v20.4</option><option value="https://www.opendental.com/manual203/audittrail.html" >v20.3</option><option value="https://www.opendental.com/manual202/audittrail.html" >v20.2</option><option value="https://www.opendental.com/manual201/audittrail.html" >v20.1</option><option value="https://www.opendental.com/manual194/audittrail.html" >v19.4</option><option value="https://www.opendental.com/manual193/audittrail.html" >v19.3</option><option value="https://www.opendental.com/manual192/audittrail.html" >v19.2</option><option value="https://www.opendental.com/manual191/audittrail.html" >v19.1</option><option value="https://www.opendental.com/manual184/audittrail.html" >v18.4</option><option value="https://www.opendental.com/manual183/audittrail.html" >v18.3</option><option value="https://www.opendental.com/manual182/audittrail.html" >v18.2</option><option value="https://www.opendental.com/manual181/audittrail.html" >v18.1</option><option value="https://www.opendental.com/manual174/audittrail.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Audit Trail</p></div>
<div class="GeneralPageContent">
<p>The audit trail is a log of actions taken by users. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Audit Trail.</p>
<img src="images/audittrail.png" width="915" height="405"/><p>For the Audit Trail to contain complete information, <a href="securityusers.html">Users</a> must be setup and security <a href="permissions.html">Permissions</a> assigned to <a href="securityusergroups.html">User Groups</a>.</p>
<p class="MarginBottomZero">Filtering Options: </p>
<ul class="MarginBottomGap">
<li><b>From/To date</b>: Show logs for a a specific date range. </li>
<li><b>Permission</b>: Show logs for a specific permission. See <a href="audittrailpermissions.html">Audit Trail Permissions</a>.</li>
<li><b>User</b>: Show logs made by a specific logged-on user.</li>
<li><b>LogSource</b>: Show logs by a specific automated process (e.g., eServices, HL7, etc).</li>
<li><b>Patient</b>: Only show entries for a single patient.  <ul>
<li><b>Current</b>: Show entries for the currently selected patient (the patient that was selected before Audit Trail was opened).</li>
<li><b>Find</b>: <a href="patientselect.html">Select a Patient</a>.</li>
<li><b>All</b>: Eliminate patient as a filter so that all entries show.</li>
</ul>
</li>
<li><b>Limit Rows</b>: By default, up to 500 log entries are listed at a time. Manually change the number or change the default in <a href="miscsetup.html">Miscellaneous Setup</a>.</li>
<li><b>Previous From Date / To Date</b>: Search by the date a permission was last edited. If blank, all edits will show.</li>
</ul>
<p>Click <b>Refresh</b> to update results after altering filters.</p>
<p>Click <b>Print</b> to print the Audit Trail to the default printer.</p>
<p class="MarginBottomZero">Only users with the <i>Audit Trail</i> permission can view the main audit trail. There are also several smaller audit trails that don't require the permission: </p>
<ul class="MarginBottomGap">
<li>Appointment Audit Trail (a log of when an appointment was created, moved, edited). See <a href="aptedit.html">Edit Appointment</a>.</li>
<li>Chart Audit Trail (a log of changes made in a patient's Chart). See <a href="showtabchart.html">Show Chart Views</a>.</li>
<li>Insurance Audit Trail (a log of changes to the insurance plan). See <a href="insplan.html">Insurance Plan</a>.</li>
<li>Task level Audit Trail (a log of changes made to a task, if using the Task system). See <a href="taskswindow.html">Task Window</a>.</li>
</ul>
<p>If using a <a href="reportserver.html">Report Server</a>, the Audit Trail can be set to run on the report server rather than the local machine. See <i>Audit Trail uses Reporting Server</i> in <a href="miscsetup.html">Miscellaneous Setup</a>.</p>
<h2>Audit Trail Results</h2>
<p>Actions are listed by date/time, with the most recent change at the end of the list. Some actions may result in two log entries, one with details, and one with the last date edited. </p>
<p class="MarginBottomZero">Log Result Colums: </p>
<ul class="MarginBottomGap">
<li>Date/Time: When the action occurred (date and time).</li>
<li>Patient: The patient who was accessed or affected, if any.</li>
<li>User: The logged in user when the action was performed, if any. If this shows as an unknown user, then it is typically triggered by an automated service from within the program. For example, automated eConfirmations change the confirmation status of an appointment and an unknown user is logged.</li>
<li>Permission: The name of the tracked security permission. Not all permissions are tracked.</li>
<li>Computer: The workstation where the action was taken, if any. For some Remote Desktop Protocol (RDP) users both the computer being remote connected from and the computer being remote connected to may be recorded. </li>
<li>Log Text: Additional information about the action taken, if any.</li>
<li>Log Source: Automated process that triggered the creation of the Audit Trail entry if any. </li>
<li>Last Edit: Date and time of last edit if any. If this is blank, there is no data to display. This can happen when the item doesn't track dates or when an item is new and has no previous modifications.</li>
</ul>
<h2>Audit Trail Integrity</h2>
<p class="MarginBottomZero">Open Dental checks to verify the integrity of the audit trail data.  </p>
<ul class="MarginBottomGap">
<li>Black log entries indicate trusted entries; meaning Open Dental has checked and no changes have been made to the log entry since it was created.</li>
<li>Red log entries indicate non-trusted entries, meaning this log entry failed the check to prove the entry is unchanged. This means the entry was changed outside of Open Dental to something different than the original entry. Some red entries are made by an Open Dental conversion. Other red entries are not made by Open Dental, and it is possible they are malicious or not legitimate.</li>
</ul>
<p>Audit Trail entries are never changed within Open Dental and should never be changed outside of Open Dental.</p>
</div>
</div>
</body>
</html>```
