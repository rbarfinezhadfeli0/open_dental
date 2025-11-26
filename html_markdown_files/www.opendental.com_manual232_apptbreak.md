# File: ./www.opendental.com/manual232/apptbreak.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Break Appointment</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('apptbreak','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/apptbreak.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/apptbreak.html" >v24.2</option><option value="https://www.opendental.com/manual241/apptbreak.html" >v24.1</option><option value="https://www.opendental.com/manual233/apptbreak.html" >v23.3</option><option value="https://www.opendental.com/manual232/apptbreak.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/apptbreak.html" >v23.1</option><option value="https://www.opendental.com/manual224/apptbreak.html" >v22.4</option><option value="https://www.opendental.com/manual223/apptbreak.html" >v22.3</option><option value="https://www.opendental.com/manual222/apptbreak.html" >v22.2</option><option value="https://www.opendental.com/manual221/apptbreak.html" >v22.1</option><option value="https://www.opendental.com/manual214/apptbreak.html" >v21.4</option><option value="https://www.opendental.com/manual213/apptbreak.html" >v21.3</option><option value="https://www.opendental.com/manual212/apptbreak.html" >v21.2</option><option value="https://www.opendental.com/manual211/apptbreak.html" >v21.1</option><option value="https://www.opendental.com/manual205/apptbreak.html" >v20.5</option><option value="https://www.opendental.com/manual204/apptbreak.html" >v20.4</option><option value="https://www.opendental.com/manual203/apptbreak.html" >v20.3</option><option value="https://www.opendental.com/manual202/apptbreak.html" >v20.2</option><option value="https://www.opendental.com/manual201/apptbreak.html" >v20.1</option><option value="https://www.opendental.com/manual194/apptbreak.html" >v19.4</option><option value="https://www.opendental.com/manual193/apptbreak.html" >v19.3</option><option value="https://www.opendental.com/manual192/apptbreak.html" >v19.2</option><option value="https://www.opendental.com/manual191/apptbreak.html" >v19.1</option><option value="https://www.opendental.com/manual184/apptbreak.html" >v18.4</option><option value="https://www.opendental.com/manual183/apptbreak.html" >v18.3</option><option value="https://www.opendental.com/manual182/apptbreak.html" >v18.2</option><option value="https://www.opendental.com/manual181/apptbreak.html" >v18.1</option><option value="https://www.opendental.com/manual174/apptbreak.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Break Appointment</p></div>
<div class="GeneralPageContent">
<p>Track missed or cancelled appointments by breaking them.</p>
<p>In the <a href="appointments.html">Appointments Module</a>, select the appointment. In the toolbar, click <b>Break</b>.</p>
<img src="images/aptbreakicon.png" width="834" height="63"/><p class="MarginBottomZero">Alternatively: </p>
<ul class="MarginBottomGap">
<li>Right-click the appointment, then select <i>Break Appointment</i>.</li>
<li>In the <a href="aptedit.html">Edit Appointment</a> window, change the status to <i>Broken</i>.</li>
</ul>
<p>Broken appointments are crossed out.</p>
<img src="images/apptBroke.png" width="210" height="87"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Customize text color of broken appointment procedures in the Account Module in <a href="definitionsaccountcolors.html">Definitions: Account Colors</a>.</li>
<li>To add a broken appointment to the <a href="asaplist.html">ASAP List</a>, mark it as ASAP on the <a href="aptedit.html">Edit Appointment</a>.</li>
<li>To trigger other automated actions, see <a href="automation.html">Automation</a>.</li>
<li>To generate a report of broken appointments, see <a href="reportbrokenappt.html">Broken Appointments Report</a> or <a href="reportsgraphic.html">Graphic Reports</a>.</li>
</ul>
<h2>Broken Appointment Options</h2>
<p>If the <i>Broken appointment procedure type</i> in <a href="preferences.html">Preferences</a> is set to anything other than <i>None</i>, when breaking an appointment using the toolbar, or Edit Appointment dropdown, the Broken Appt Options window opens.</p>
<img src="images/apptbreakOptions.png" width="208" height="221"/><p class="MarginBottomZero"><b>Broken Procedure Type</b>: Select the type of procedure code to apply to the broken appointment. Enabled options are determined by the <i>Broken appointment procedure type </i> Preference. </p>
<ul class="MarginBottomGap">
<li><b>Missed</b>: Adds a procedure with code D9986 to the patient's chart. This is used when the patient simply did not show up for the appointment.</li>
<li><b>Cancelled</b>: Adds a procedure with code D9987 to the patient's chart. This is used when less than 24-hours notice was given, making it hard to fill the time slot.</li>
</ul>
<p><div class="Note">Note: To use broken appointment options, the missed (D9986) or cancelled (D9987) appointment procedures must already exist. Some users (e.g., foreign users) may not have them in the database by default and they must be added manually. See <a href="procedurecodenew.html">Add Procedure Code</a>.</div>
</p>
<p class="MarginBottomZero">After selecting a Broken Procedure Type, choose one of the buttons to finish breaking the appointment. </p>
<ul class="MarginBottomGap">
<li><b>Send to Unscheduled List</b>: Click to remove the appointment from the schedule and send it to <a href="unscheduled.html">Unscheduled List</a>.</li>
<li><b>Copy to Pinboard</b>: Click to copy the appointment to the <a href="apptpinboard.html">Pinboard</a> in order to reschedule to a different date or time. </li>
<li><b>Leave in Appt Module</b>: Click to leave the appointment at its currently scheduled date/time. The appointment is crossed out. </li>
</ul>
<p class="MarginBottomZero">If breaking an appointment by right-clicking, options vary depending on the selected<i> Broken appointment procedure type</i> Preference.  </p>
<ul class="MarginBottomGap">
<li>If the Preference is set to <i>None</i>, users only have the option to Break Appointment.</li>
<li>If the Preference is set to <i>Missed</i>, users have the option to Break Appointment with the following options: <ul>
<li>Missed - Delete Appointment / Missed - Send to Unscheduled List (depending if the preference <i>Do not allow recall appointments on the Unscheduled List</i> is enabled and if the appointment includes a special recall type procedure)</li>
<li>Missed - Copy to Pinboard</li>
<li>Missed - Leave on Appt Book</li>
</ul>
</li>
<li>If the Preference is set to <i>Cancelled</i>, users have the option to Break Appointment with the following options: <ul>
<li>Cancelled - Delete Appointment / Missed - Send to Unscheduled List (depending if the preference <i>Do not allow recall appointments on the Unscheduled List</i> is enabled and if the appointment includes a special recall type procedure)</li>
<li>Cancelled - Copy to Pinboard</li>
<li>Cancelled - Leave on Appt Book</li>
</ul>
</li>
<li>If the Preference is set to <i>Both</i>, users have the option to Break Appointment with all Missed and Cancelled options noted above.</li>
<li>These options work the same as the Broken Appt Options window. </li>
</ul>
<p>It is recommended to handle broken appointments before the end of day. Send them to the Unscheduled List, reschedule them, or delete them. Otherwise, incomplete appointments may get left in the Appointments Module.</p>
<p>If a <i>Broken appointment procedure type</i> is enabled in Preferences, the Broken Appointment Procedure window appears first. See below for additional information on Broken Appointment Procedures.</p>
<p>If the Preference, <i>Make broken appointment adjustment</i>, is enabled, the <a href="adjustments.html">Adjustment Edit</a> opens next.</p>
<p>If the Preference, <i>Make broken appointment commlog</i>, is enabled, the <a href="commlog.html">Commlog</a> window opens last.</p>
<h2>Rescheduling Broken Appointments</h2>
<p>If the preference,<i> Force users to break scheduled appointments before rescheduling</i>, is enabled, users are prompted to break the appointment. </p>
<img src="images/apptBreakResched.png" width="325" height="177"/><h2>Broken Appointment Procedures</h2>
<p>The Broken Appointment Procedure window appears after selecting a Broken Procedure Type.</p>
<img src="images/apptbreakProc.png" width="550" height="535"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Entry Date: Read-only. Date the Broken appointment procedure is created.</li>
<li>Procedure Date: Editable. Date procedure appears in the Account, Chart, reports, etc. </li>
<li>User: Read-only. Automatically assigned. User who created the Broken Appointment Procedure.</li>
<li>Procedure Notes: Displays as a Note in the <a href="procedureedit.html">Procedure Info</a> window. Automatically includes text of <i>Appt BROKEN for</i>, procedure abbreviations, and date/time of appointment. Edit as needed. Click <b>Auto Note</b> to insert <a href="autonotes.html">Auto Note</a> template.</li>
<li>Account Notes: Displays as a Billing Note in <a href="proceduremisc.html">Procedure Info - Misc Tab</a> . Edit as needed. Click <b>Auto Note</b> to insert Auto Note template.</li>
</ul>
<p>Use the <a href="reportbrokenappt.html">Broken Appointments Report</a> to view a list of broken appointments in a date range.</p>
<h2>Details</h2>
<p>If <i>TP prepayments are non-refundable</i> is enabled in <a href="allocationssetup.html">Allocations Setup</a>, prepayments attached to procedures of a broken appointment are transferred to the D9986 (missed) procedure. If the broken appointment procedure amount is changed and is less than the value of the procedure and associated prepayment, the remaining balance of the treatment planned prepayment is transferred from <a href="hiddensplits.html">Hidden Splits</a> to the patient account as <a href="unearnedprepayment.html">Unearned Income</a>.</p>
<p>Completed appointments cannot be broken if procedures are attached and the <i>Prevent changes to completed appointment with completed procedures</i> preference is enabled.</p>
<p></p>
</div>
</div>
</body>
</html>```
