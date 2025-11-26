# File: ./www.opendental.com/manual243/databasemaintenancetools.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Database Maintenance Tools Tab</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('databasemaintenancetools','databasemaintenance','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/databasemaintenancetools.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/databasemaintenancetools.html" >v24.2</option><option value="https://www.opendental.com/manual241/databasemaintenancetools.html" >v24.1</option><option value="https://www.opendental.com/manual233/databasemaintenancetools.html" >v23.3</option><option value="https://www.opendental.com/manual232/databasemaintenancetools.html" >v23.2</option><option value="https://www.opendental.com/manual231/databasemaintenancetools.html" >v23.1</option><option value="https://www.opendental.com/manual224/databasemaintenancetools.html" >v22.4</option><option value="https://www.opendental.com/manual223/databasemaintenancetools.html" >v22.3</option><option value="https://www.opendental.com/manual222/databasemaintenancetools.html" >v22.2</option><option value="https://www.opendental.com/manual221/databasemaintenancetools.html" >v22.1</option><option value="https://www.opendental.com/manual214/databasemaintenancetools.html" >v21.4</option><option value="https://www.opendental.com/manual213/databasemaintenancetools.html" >v21.3</option><option value="https://www.opendental.com/manual212/databasemaintenancetools.html" >v21.2</option><option value="https://www.opendental.com/manual211/databasemaintenancetools.html" >v21.1</option><option value="https://www.opendental.com/manual205/databasemaintenancetools.html" >v20.5</option><option value="https://www.opendental.com/manual204/databasemaintenancetools.html" >v20.4</option><option value="https://www.opendental.com/manual203/databasemaintenancetools.html" >v20.3</option><option value="https://www.opendental.com/manual202/databasemaintenancetools.html" >v20.2</option><option value="https://www.opendental.com/manual201/databasemaintenancetools.html" >v20.1</option><option value="https://www.opendental.com/manual194/databasemaintenancetools.html" >v19.4</option><option value="https://www.opendental.com/manual193/databasemaintenancetools.html" >v19.3</option><option value="https://www.opendental.com/manual192/databasemaintenancetools.html" >v19.2</option><option value="https://www.opendental.com/manual191/databasemaintenancetools.html" >v19.1</option><option value="https://www.opendental.com/manual184/databasemaintenancetools.html" >v18.4</option><option value="https://www.opendental.com/manual183/databasemaintenancetools.html" >v18.3</option><option value="https://www.opendental.com/manual182/databasemaintenancetools.html" >v18.2</option><option value="https://www.opendental.com/manual181/databasemaintenancetools.html" >v18.1</option><option value="https://www.opendental.com/manual174/databasemaintenancetools.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Database Maintenance Tools Tab</p></div>
<div class="GeneralPageContent">
<p>Each database maintenance tool addresses a specific issue. </p>
<p>In the <a href="databasemaintenance.html">Database Maintenance</a> tool, click the Tools tab.</p>
<img src="images/databaseMaintenanceTools.png" width="836" height="719"/><p><b>Update in progress on computer</b>: Click <b>Clear</b> to manually clear the Update in Progress preference. This should be used when an update is complete but workstations are not able to log in due to the <i>Update in progress</i> error.</p>
<p><b>Active TP's</b>: Creates active treatments plans for patients that have treatment planned procedures but no active treatment plan.</p>
<p><b>Appt Procs</b>: Fixes procedure descriptions on appointments that are not correctly showing tooth numbers. Also updates procedure code text colors, and previous date information for existing appointments, if there are <a href="apptviewproccolors.html">Proc Appt Colors</a> for the appointment box.</p>
<p><b>Balance Families</b>: This tool is password protected and may only be run by the Open Dental <a href="conversions.html">Conversions Team</a>. It is used to allocate patient income to production via an <a href="incometransfermanager.html">Income Transfer</a> or by recreating patient payment splits. This tool is typically run as part of the final conversion process but may be run after the fact. Contact <a href="../contact.html">Support</a> if this is needed for a database. See <a href="convincometransfer.html">Conversions: Family Balancer</a>, Family Balancer Options.</p>
<p><b>Balance Family</b>: This tool is password protected and may only be run by the Open Dental Conversions Team. It offers the same income allocation options as Balance Families (see above) but instead of running for all patients, it runs only for the currently selected patient and their family members. See Conversions: Income Transfers, Family Balancer Options.</p>
<p><b>Clean Attachments</b>: Removes attachments that are not linked to an email message.</p>
<p><b>Email Attaches</b>: Renames and moves email attachments that are in the base EmailAttachments folder into the intended location in the In and Out subfolders. Resolves file not found errors when trying to view attachments.</p>
<p><b>Email Duplicates</b>: Removes duplicate emails from the database.</p>
<p><b>Etrans</b>: Clears etrans messages (electronic transactions) older than one year. An automatic backup is created first. It can only be run by users with the <i>Security Admin</i> permission.</p>
<p><b>InnoDb</b>: Converts all tables in the database to the selected storage engine (MyISAM or InnoDb). All users are initially set up as MyISAM. Users only switch to InnoDb if they have special needs, such as increased performance. Users must thoroughly research database methods before making change.<br/><div class="Note">Note: InnoDb is not an option for Open Dental Cloud users.</div>
</p>
<p><b>Ins Pay Fix</b>: Fixes insurance payments that have been received but not finalized (attached to insurance checks/payments). One check is created for each claim. The claim payment date is the date the claim was received.</p>
<p><b>Insurance Plan Type Category Percentage</b>: This tool only appears for users with the <a href="permissionssecurityadmin.html">"Security Admin" Permission</a>. Changes all PPO Percentage insurance plans to the Category Percentage plan type. This tool is password protected. Contact Open Dental Support for help with this tool. </p>
<p><b>Insurance Plan Type PPO Percentage</b>: This tool only appears for users with the Security Admin permission. Changes all Category Percentage insurance plans to the PPO Percentage plan type. This tool is password protected. Contact Open Dental Support for help with this tool. </p>
<p><b>Optimize</b>: Backup, optimize, and repair SQL commands on each individual table. Only use if corruption is suspected or for extremely large databases.</p>
<p><b>Ortho Duplicates</b>: Deletes duplicate cell entries within the <a href="orthochart.html">Ortho Chart</a>. Run this when there is a noticeable time delay when loading or saving a patient's Ortho Chart.</p>
<p><b>Patient Missing</b>: Used when database corruption has caused patients to go missing. When possible, missing patients can be re-added.</p>
<p><b>Pay Plan Payments</b>: Detaches patient payments that have been applied to <a href="paymentplanins.html">Insurance Payment Plans</a>, and insurance payments attached to <a href="paymentplanpatient.html">Old Payment Plans</a>.</p>
<p><b>Raw Emails</b>: Useful when using the Email Inbox and backup size has grown too large. Large size is often due to the <i>emailmessage</i> table. Run the tool to look through all inbound emails, safely remove raw message content that is no longer needed, then optimize the <i>emailmessage</i> table.</p>
<p><b>Recalc Estimates</b>: Identifies patients with at least one estimate that belongs to a dropped insurance plan. For each such patient, estimates are recalculated using their current plan information and deletes estimates associated with dropped plans.</p>
<p><b>Redundant Indexes</b>: Removes redundant and unnecessary indexes from all tables in the database. The tool requires a password. The password is <i>abracadabra</i>.</p>
<p><b>Remove Nulls</b>: Removes extra, hidden characters that may be causing errors or problems and replace with empty strings.</p>
<p><b>Repeat Charge</b>: Option only visible if the logged-on user has the <i>Repeating Charge Tool</i> permission. Updates the <a href="repeatingcharge.html">Repeating Charge</a> amount for all patients or, just patients within a <a href="superfamily.html">Super Family</a> at once. Only updates repeating charges with the same procedure code, current charge amount, and repeat charge status (enabled or disabled). Highlight the row and click Fix to open the Multi Repeat Charge tool.</p>
<img src="images/multiRepeatChargeEdit.png" width="647" height="332"/><p>Enter the information for the current repeating charges that need the charge amount updated.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Procedure Code</b>: Enter the procedure code of existing repeating charges to update.</li>
<li><b>Current Charge Amount</b>: Enter the charge amount of existing repeating charges to update.</li>
<li><b>New Charge Amount</b>: Enter the new charge amount to update to.</li>
<li><b>Super Family Head</b>: To only update repeating charges for a specific Super Family, enter the PatNum of the Super Family Head. Leave blank to update all patients.</li>
<li><b>Repeat Charge Status</b>: Select whether to update repeating charges with a status of Enabled, Disabled, or Both.</li>
<li><b>Start Date</b>: To only update repeating charges on and after a specific start date, enter the date. Leave blank to update all repeating charges regardless of the date.</li>
</ul>
<p>Click <b>Run</b> to update the repeating charges. When the tool finishes, a confirmation message displays, indicating the number of repeating charges that were updated. A log file is also saved to the desktop with more information.</p>
<p><div class="Note">Note: If the <a href="repeatingcharges.html">Repeating Charges</a> tool already ran for the day, running the tool again on the same day after the update does not post duplicate charges for the affected patients.</div>
</p>
<p><b>Spec Char</b>: Only use this tool if there is trouble syncing appointments with the Mobile Sync App or if an invalid character error is received while using the Middle Tier. It permanently removes unsupported Unicode characters from appointment notes, procedure descriptions, patient address notes, patient address fields, adjustment notes, payment notes, and definition names. This also removes characters from non-English languages. To continue, the password is <i>fix</i>.</p>
<p><b>Tokens</b>: Checks the database for any X-Charge tokens that are attached to the wrong credit card number. A second window displays listing all credit cards for the user to determine which ones to check.</p>
<p><b>Wiki Search</b>: Resolves wiki pages that don't display when their terms are searched for.</p>
</div>
</div>
</body>
</html>```
