# File: ./www.opendental.com/manual243/blockouts.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Blockouts</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('blockouts','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/blockouts.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/blockouts.html" >v24.2</option><option value="https://www.opendental.com/manual241/blockouts.html" >v24.1</option><option value="https://www.opendental.com/manual233/blockouts.html" >v23.3</option><option value="https://www.opendental.com/manual232/blockouts.html" >v23.2</option><option value="https://www.opendental.com/manual231/blockouts.html" >v23.1</option><option value="https://www.opendental.com/manual224/blockouts.html" >v22.4</option><option value="https://www.opendental.com/manual223/blockouts.html" >v22.3</option><option value="https://www.opendental.com/manual222/blockouts.html" >v22.2</option><option value="https://www.opendental.com/manual221/blockouts.html" >v22.1</option><option value="https://www.opendental.com/manual214/blockouts.html" >v21.4</option><option value="https://www.opendental.com/manual213/blockouts.html" >v21.3</option><option value="https://www.opendental.com/manual212/blockouts.html" >v21.2</option><option value="https://www.opendental.com/manual211/blockouts.html" >v21.1</option><option value="https://www.opendental.com/manual205/blockouts.html" >v20.5</option><option value="https://www.opendental.com/manual204/blockouts.html" >v20.4</option><option value="https://www.opendental.com/manual203/blockouts.html" >v20.3</option><option value="https://www.opendental.com/manual202/blockouts.html" >v20.2</option><option value="https://www.opendental.com/manual201/blockouts.html" >v20.1</option><option value="https://www.opendental.com/manual194/blockouts.html" >v19.4</option><option value="https://www.opendental.com/manual193/blockouts.html" >v19.3</option><option value="https://www.opendental.com/manual192/blockouts.html" >v19.2</option><option value="https://www.opendental.com/manual191/blockouts.html" >v19.1</option><option value="https://www.opendental.com/manual184/blockouts.html" >v18.4</option><option value="https://www.opendental.com/manual183/blockouts.html" >v18.3</option><option value="https://www.opendental.com/manual182/blockouts.html" >v18.2</option><option value="https://www.opendental.com/manual181/blockouts.html" >v18.1</option><option value="https://www.opendental.com/manual174/blockouts.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Blockouts</p></div>
<div class="GeneralPageContent">
<p>Blockouts are visual indicators on the schedule that can be used to indicate times for lunches, meetings, specific Appointment Types, etc. </p>
<p>In the <a href="appointments.html">Appointments Module</a>, Blockouts show as colored areas.</p>
<img src="images/blockouts.png" width="826" height="243"/><p>Blockouts can allow scheduling appointments over them or can block scheduling an appointment.</p>
<p>The <i>Blockouts</i> permission is required to add, edit, cut/copy/paste, and delete Blockouts that are not flagged as <i>Disable Cut/Copy/Paste (DC)</i> or <i>No appointment scheduling (NS)</i>. Users without the permission can only add, edit, and delete Blockouts flagged as <i>DC</i> and <i>NS</i>.</p>
<p>Blockouts cannot overlap. When adding a new Blockout that would overlap an existing Blockout, there is a warning that <i>Blockouts cannot be overlapped</i> or there is a prompt to remove the existing blockouts. This behavior is determined by <i>Allow 'Block appointment scheduling' Blockouts to replace conflicting Blockouts</i> in <a href="preferences.html">Preferences</a>. </p>
<p>Set up and customize Blockout Types in <a href="definitionsblockouts.html">Definitions: Blockout Types</a>. Define the font color in <a href="definitionsappointmentcolors.html">Definitions: Appointment Colors</a>. To use outlines instead of solid blocks of color, disable the <i>Use solid Blockouts instead of outlines on the Appointments Module</i> preference. </p>
<p class="MarginBottomZero">To view or select a Blockout option, right-click on the operatory in the schedule. </p>
<ul class="MarginBottomGap">
<li><b>Edit Blockout</b>: Change an existing Blockout. Opens Edit Blockout window (see below).</li>
<li><b>Cut Blockout</b>: Remove an existing Blockout from the schedule, but retain it in memory.</li>
<li><b>Copy Blockout</b>: Copy an existing Blockout to the clipboard.</li>
<li><b>Paste Blockout</b>: Insert a cut or copied Blockout in the time and operatory indicated by the mouse.</li>
<li><b>Delete Blockout</b>: Permanently remove a Blockout.</li>
<li><b>Add Blockout</b>: Create a new Blockout. Opens Edit Blockout window (see below).</li>
<li><b>Blockout Cut-Copy-Paste</b>: Quickly copy and paste Blockouts by day or week. See below.</li>
<li><b>Clear All Blockouts for Day</b>: Remove all Blockouts for the current day. There is a confirmation message before Blockouts are cleared. This option is not available when the Clinics feature is enabled.</li>
<li><b>Clear All Blockouts for Day, Op only</b>: Removes all Blockouts for the day in the selected operatory only. There is a confirmation message before Blockouts are cleared.</li>
<li><b>Clear All Blockouts for Day, Clinic only</b>: Removes all Blockouts for the day for the selected clinic only. There is a confirmation message before Blockouts are cleared.</li>
<li><b>Edit Blockout Types</b>: Quickly open Definitions: Blockout Types to customize Blockout Types.</li>
</ul>
<p><div class="Note">Note: Cut Blockout, Copy Blockout, and Paste Blockout items are grayed out if <i>Disable Cut/Copy/Paste</i> is checked for the Blockout Type in Definitions.</div>
</p>
<h2>Edit Blockout</h2>
<p>On the appointment schedule, right-click on a time block in an operatory, then click Edit Blockout or Add Blockout. Edit Blockout is only enabled when right-clicking on an existing Blockout.</p>
<img src="images/blockoutEdit.png" width="640" height="423"/><p><b>Start/Stop Time</b>: The time defaults to start where the mouse was when right-clicking and end one hour later. Manually change times or click the dropdown to select an option. 30-minute increments are not required when entering the time manually. If manually entering, use the format <i>00:00 AM</i>.</p>
<p><b>Note</b>: Optional text that shows under the Blockout label. This text box supports <a href="rightclicktextboxes.html">Right-Click Options</a>.</p>
<p><b>Blockout Type</b>: Determines the Blockout text, scheduling and cut-copy-paste options, and color. Customize options in Definitions, Blockout Types.</p>
<p><b>Operatories</b>: The operatories where the Blockout is added. To select multiple <a href="operatories.html">Operatories</a>, press Ctrl while clicking. If using <a href="clinics.html">Clinics</a>, only operatories assigned to the clinic selected in the Main Menu are options.</p>
<p>When Blockouts with the same type are added to multiple operatories at once, they become connected. Deleting or replacing a blockout in one operatory also deletes or replaces any Blockouts that are connected.</p>
<h2>Blockout Cut-Copy-Paste</h2>
<p>Use this tool to copy and paste Blockouts for a week or day. Changes only apply to the visible operatories for the current Appointment View. Blockout Types with <i>Disable Cut/Copy/Paste</i> checked in Definitions are not included.</p>
<ol>
<li>In the Appointments Module, move the schedule to the day to be edited.</li>
<li>Right-click the schedule area and select <i>Blockout Cut-Copy-Paste</i>. </li>
<img src="images/blockoutCutCopyPaste.png" width="292" height="410"/><li>Select an option. <b>Clear Day</b>: Remove all Blockouts on the selected day (daily or weekly view).<br/><div class="Note">Note: When Clinics is enabled <b>Clear Day</b> only clears the day of the selected clinic.</div>
<br/><br/><p class="MarginBottomZero"><b>Copy Day/Paste</b>: Once one day's Blockouts are set up, copy and paste it to other days. </p>
<ol class="MarginBottomGap">
<li>Click Copy Day. The window is closed.</li>
<li>In the schedule area, right-click on the day that the Blockouts are to be added and select<i> Blockout Cut-Copy-Paste</i> again. The copied date appears in <i>Clipboard Contents</i>.</li>
<li>Click <b>Paste</b>.</li>
</ol>
<p class="MarginBottomZero"><b>Copy Week/Paste</b>: Once an entire week's Blockouts are set up, copy and paste to other weeks. </p>
<ol class="MarginBottomGap">
<li>To include weekends in the copy, check <b>Include Weekends</b>.</li>
<li>Click Copy Week. The window is closed.</li>
<li>In the schedule area, right-click on the day that the Blockouts are to be added and select <i>Blockout Cut-Copy-Paste</i> again. The copied date range appears in <i>Clipboard Contents</i></li>
<li>Click <b>Paste</b>.</li>
</ol>
<p class="MarginBottomZero"><b>Copy/Repeat</b>: Copy and paste one day or one week repeatedly into the future.  </p>
<ol class="MarginBottomGap">
<li>Copy the day or week.</li>
<li>In the schedule area, right-click on the day that the Blockouts are to be added and select <i>Blockout Cut-Copy-Paste</i> again.</li>
<li>In the # box next to Repeat, enter the number of days/weeks in the future Blockouts are to be pasted (e.g., 365 days or 52 weeks).</li>
<li>Click Repeat.</li>
</ol>
<p><b>Replace Existing</b>: If checked, the day or week being pasted/repeated replaces any existing Blockouts. If unchecked, existing Blockouts are not replaced, and the paste process stops and goes no further than the first conflicting Blockout.</p>
</li>
</ol>
<p>Hint: To clear multiple days or weeks, create one blank day or week, make sure <i>Replace Existing</i> is checked, then Copy/Repeat.</p>
<h2>Block Scheduling</h2>
<p class="MarginBottomZero">Block Scheduling can be set up to be enforced by Appointment Types: </p>
<ol class="MarginBottomGap">
<li>Create Blockout Types in <a href="definitionsblockouts.html">Definitions: Blockout Types</a>.</li>
<li>Optional: in <a href="appointmenttypes.html">Appointment Types</a>, enable <i>New appointments prompt for appointment type</i>. This ensures users are prompted to select an Appointment Type when creating a new appointment.</li>
<li>Click add to create new Appointment Types and assign to Blockout Types or double-click existing Appointment Types to edit: <ul>
<li>In the <i>Appointments are allowed on these Blockout Types</i>, highlight the Blockout Types to allow the Appointment Type to be Scheduled.</li>
<li>To match the appointment color with the Blockout, assign a color to the Blockout Type.</li>
</ul>
</li>
<li>Add Blockouts to the Appointments Module schedule. <ul>
<li>After setting up Blockouts, use the Blockout Cut-Copy-Paste to quickly copy Blockouts to another day or week.</li>
</ul>
</li>
</ol>
<p>Once Blockouts are created and Appointment Types are set up, users can only place appointments on the Blockouts where the Appointment Type is allowed or on areas of the schedule where there is no Appointment Type. Appointments with no Appointment Type can be scheduled on any Blockouts that allow scheduling.</p>
</div>
</div>
</body>
</html>```
