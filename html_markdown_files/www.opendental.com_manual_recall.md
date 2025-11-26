# File: ./www.opendental.com/manual/recall.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Recall</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('recall','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/recall.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/recall.html" >v24.2</option><option value="https://www.opendental.com/manual241/recall.html" >v24.1</option><option value="https://www.opendental.com/manual233/recall.html" >v23.3</option><option value="https://www.opendental.com/manual232/recall.html" >v23.2</option><option value="https://www.opendental.com/manual231/recall.html" >v23.1</option><option value="https://www.opendental.com/manual224/recall.html" >v22.4</option><option value="https://www.opendental.com/manual223/recall.html" >v22.3</option><option value="https://www.opendental.com/manual222/recall.html" >v22.2</option><option value="https://www.opendental.com/manual221/recall.html" >v22.1</option><option value="https://www.opendental.com/manual214/recall.html" >v21.4</option><option value="https://www.opendental.com/manual213/recall.html" >v21.3</option><option value="https://www.opendental.com/manual212/recall.html" >v21.2</option><option value="https://www.opendental.com/manual211/recall.html" >v21.1</option><option value="https://www.opendental.com/manual205/recall.html" >v20.5</option><option value="https://www.opendental.com/manual204/recall.html" >v20.4</option><option value="https://www.opendental.com/manual203/recall.html" >v20.3</option><option value="https://www.opendental.com/manual202/recall.html" >v20.2</option><option value="https://www.opendental.com/manual201/recall.html" >v20.1</option><option value="https://www.opendental.com/manual194/recall.html" >v19.4</option><option value="https://www.opendental.com/manual193/recall.html" >v19.3</option><option value="https://www.opendental.com/manual192/recall.html" >v19.2</option><option value="https://www.opendental.com/manual191/recall.html" >v19.1</option><option value="https://www.opendental.com/manual184/recall.html" >v18.4</option><option value="https://www.opendental.com/manual183/recall.html" >v18.3</option><option value="https://www.opendental.com/manual182/recall.html" >v18.2</option><option value="https://www.opendental.com/manual181/recall.html" >v18.1</option><option value="https://www.opendental.com/manual174/recall.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Recall</p></div>
<div class="GeneralPageContent">
<p>Customize a patient's recall interval, change the prophy recall to perio, delete/disable a patient's recall type, or add custom types from the Recall grid.</p>
<p>In the <a href="family.html">Family Module</a>, double-click the Recall grid.</p>
<img src="images/recallGrid.png" width="915" height="89"/><p>A patient's recall appointments are determined by their <a href="recalltypes.html">Recall Types</a>. Every patient is assigned a prophy recall but can be set to perio as needed and other custom types may be added. When a recall types' trigger procedures are set complete, the patient's next recall appointment due date is calculated. The recall due date, along with the scheduled date, recall status, and recall notes for each of a patient's recall type show in the Recall grid.</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> Also see our <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynClCJyAtQ7XvgefbFFPDBco8" target="_blank">Recall Videos Playlist</a></p>
<h2>Recalls for Patient</h2>
<p>Double-click the grid to edit recalls for the current patient.</p>
<img src="images/recallsForPatient.png" width="850" height="235"/><p><b>Recalls</b>: Lists the patient's recall types assigned to the patient along with date information. Every time a recall appointment is set complete, the dates, status, and notes reset. Double-click a type to view additional information or edit. Opens the Edit Recall window (see below).</p>
<p><b>Add</b>: Click to manually attach a recall to the patient. Opens the Edit Recall window (see below). This is rare as, recalls are generally added automatically when trigger procedures, set up in <a href="recalltypes.html">Recall Types</a>, are set complete.</p>
<p><b>Set Perio/Set Prophy</b>: The button changes depending on if the patient is currently assigned a prophy or perio recall type. If currently assigned a prophy recall type, click <b>Set Perio</b> to replace the prophy recall with the perio recall type. Due dates are updated to reflect the perio interval. To change back to prophy, click <b>Set Prophy</b>.</p>
<h2>Edit Recall</h2>
<p>Click <b>Add</b> to attach a new Recall Type or double-click an existing recall type to edit.</p>
<img src="images/recallEdit.png" width="725" height="516"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Type</b>: The currently selected recall type. This field is read-only on existing recalls. For new recalls, select the Recall Type to attach to the patient.</li>
<li><b>Recall Interval</b>: Automatically populates the default interval set for this recall type. To change for this patient only, enter a new value in one of the fields. To change for all patients, edit in <a href="recalltypes.html">Recall Types</a>.</li>
<li><b>Previous Date</b>: The date of the patient's last recall appointment for this recall type. This is based on the completed procedures that trigger the recall or the insurance history.</li>
<li><b>Calculated Due Date</b>: The recall due date based on the Previous Date plus the recall interval.</li>
<li><b>Actual Due Date</b>: Typically the same as the Calculated Due Date but may be changed. When the same, syncing recall types updates this date but if different, syncing does not update this date.</li>
<li><b>Schedule Date</b>: The date of the scheduled recall appointment (if scheduled). Appointment must contain a recall trigger procedure.</li>
<li><b>Time Pattern Override</b>: Create a custom time pattern when scheduling this patient for recall appointments. This pattern overrides the pattern defined in the Recall Type. Time Pattern Overrides display in the note box from the Family Module.</li>
<li><b>Status</b>: The current communication status of this recall with the patient. Updating the status should typically be done through the <a href="recalllist.html">Recall List</a> as manually setting the status from the Edit Recall window does not update the number of reminders sent. Use the dropdown to select a new status. The status is reset to <i>None</i> when the recall appointment is set complete. Status options are customized in <a href="definitionsrecallunschedstatus.html">Definitions: Recall / Unsched Status</a>.</li>
<li><b>Schedule ASAP</b>: Check to indicate the patient would like to be contacted as soon as an opening becomes available. The appointment is added to the <a href="asaplist.html">ASAP List</a>.</li>
<li><b>Administrative Note</b>: Add notes about this patient's recall. Notes may also be added through the recall list. When the recall appointment is set complete, the note is removed. <a href="rightclicktextboxes.html">Right-Click</a> the text box for additional options.</li>
</ul>
<h2>Disable Recall</h2>
<p class="MarginBottomZero">Disable a patient's recall from the Edit Recall window. The patient is removed from the Recall List. </p>
<ul class="MarginBottomGap">
<li><b>Always Disabled</b>: Check to disable recall for this patient until the box is unchecked. The recall dates, status, and note are saved but the due date is removed.</li>
<li><b>Until family Account balance is below</b>: Temporarily disables the recall type for the patient until the family balance is below the amount entered.</li>
<li><b>Until Date</b>: Temporarily disables the recall type for the patient until the date entered.</li>
</ul>
<p class="MarginBottomZero"><b>Delete</b>: Remove a recall, that is not Prophy or Perio and does not have a Previous Date. </p>
<ul class="MarginBottomGap">
<li> If the recall is Prophy or Perio or has a Previous Date the Status, Administrative Note, and Disable Recall parameters, regardless of patient status (i.e., Patient, Inactive, etc), are reset. Check <i>Always Disabled</i> instead.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>When the status in <a href="patientedit.html">Edit Patient Information</a> is anything other than <i>Patient</i>, recall is automatically disabled. If the status is changed back to <i>Patient</i>, recall is automatically re-enabled.</li>
<li>When <i>Allow disabled recalls</i> is enabled for <a href="webschedexistingpatsetup.html">Web Sched Existing Patient</a>, patients with disabled recalls can still be allowed to schedule a recall appointment via <a href="webschedexistingpatientsees.html">Web Sched</a>.</li>
</ul>
</div>
</p>
<p></p>
</div>
</div>
</body>
</html>```
