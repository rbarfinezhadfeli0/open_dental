# File: ./www.opendental.com/manual/recalltypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Recall Types</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('recalltypes','+appointments','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/recalltypes.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/recalltypes.html" >v24.2</option><option value="https://www.opendental.com/manual241/recalltypes.html" >v24.1</option><option value="https://www.opendental.com/manual233/recalltypes.html" >v23.3</option><option value="https://www.opendental.com/manual232/recalltypes.html" >v23.2</option><option value="https://www.opendental.com/manual231/recalltypes.html" >v23.1</option><option value="https://www.opendental.com/manual224/recalltypes.html" >v22.4</option><option value="https://www.opendental.com/manual223/recalltypes.html" >v22.3</option><option value="https://www.opendental.com/manual222/recalltypes.html" >v22.2</option><option value="https://www.opendental.com/manual221/recalltypes.html" >v22.1</option><option value="https://www.opendental.com/manual214/recalltypes.html" >v21.4</option><option value="https://www.opendental.com/manual213/recalltypes.html" >v21.3</option><option value="https://www.opendental.com/manual212/recalltypes.html" >v21.2</option><option value="https://www.opendental.com/manual211/recalltypes.html" >v21.1</option><option value="https://www.opendental.com/manual205/recalltypes.html" >v20.5</option><option value="https://www.opendental.com/manual204/recalltypes.html" >v20.4</option><option value="https://www.opendental.com/manual203/recalltypes.html" >v20.3</option><option value="https://www.opendental.com/manual202/recalltypes.html" >v20.2</option><option value="https://www.opendental.com/manual201/recalltypes.html" >v20.1</option><option value="https://www.opendental.com/manual194/recalltypes.html" >v19.4</option><option value="https://www.opendental.com/manual193/recalltypes.html" >v19.3</option><option value="https://www.opendental.com/manual192/recalltypes.html" >v19.2</option><option value="https://www.opendental.com/manual191/recalltypes.html" >v19.1</option><option value="https://www.opendental.com/manual184/recalltypes.html" >v18.4</option><option value="https://www.opendental.com/manual183/recalltypes.html" >v18.3</option><option value="https://www.opendental.com/manual182/recalltypes.html" >v18.2</option><option value="https://www.opendental.com/manual181/recalltypes.html" >v18.1</option><option value="https://www.opendental.com/manual174/recalltypes.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Recall Types</p></div>
<div class="GeneralPageContent">
<p>Set recall appointment length, due date, and procedures in Recall Types.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Appointments, Recall Types.</p>
<img src="images/recallTypes.png" width="779" height="290"/><p>Every patient is assigned an exam and prophy recall, but can be set to perio as needed. Other custom types may be added. Each type is given an appointment length, recall interval, and procedures to be scheduled. Assign procedures that trigger the recall appointment, so every time these procedures are set complete, the patient's next recall appointment due date is generated. The patient will then appear in the <a href="recalllist.html">Recall List</a> and when scheduled, the appointment will automatically treatment plan and attach the recall types' procedures.</p>
<div class="Note">Note: To reset all Recall Types back to default, use the Recall Types option in <a href="procedurecodetools.html">Procedure Code Tools</a>.</div>
<br/><br/><p>A patient's recall type(s), along with due dates, scheduled dates, and recall status shows in the upper right of the <a href="family.html">Family Module</a>, <a href="recall.html">Recall</a> grid. There, users may also customize the patient's recall interval, change the prophy recall to perio, delete/disable a patient's recall type, or add custom types from the Recall grid.</p>
<h2>Add / Edit Recall Types</h2>
<p>The default recall types are Prophy, Child Prophy, and Perio and these Special Types are required for recall to function. To add or edit recall types, from the Recall Types window, double-click an existing type to edit or click <b>Add</b> to create a new type. Update the information and settings in the Edit Recall Type window.</p>
<img src="images/recallTypeEdit.png" width="734" height="693"/><p><b>Description</b>: Enter the identifying name.</p>
<p class="MarginBottomZero"><b>Special Type</b>: Select whether this recall type is Prophy, Child Prophy, or Perio. Only one of each type may be assigned to a recall. For custom recall types select None. The web sched feature only sends notifications for recalls assigned a special type. </p>
<ul class="MarginBottomGap">
<li> Prophy and Perio: Primary recall types and are mutually exclusive. The triggers for Prophy and Perio cross over and act as triggers for both types.</li>
<li>Child Prophy: Only used to determine when, based on age, child procedures are attached to the recall appointment. Patients are still set to Prophy or Perio for recall but if the patient meets the age criteria, child recall procedures are attached.</li>
</ul>
<p><b>Age Limit</b>: (Special Type: ChildProphy only) Enter the age limit that determines child procedures versus adult procedures. For example, if 12 is the age limit, patients 11 and under will have the Child Prophy procedures attached to their appointment instead of the Prophy procedures.</p>
<img src="images/recallChildProphy.gif" width="456" height="150"/><p class="MarginBottomZero"><b>Append to Special</b>: Determines whether this recall type is automatically scheduled with special type recalls. </p>
<ul class="MarginBottomGap">
<li>Checked: Automatically include this recall type when scheduling a special type recall, if it is also due. For example, to automatically add 4BW to a Prophy recall that is due, check the box for the 4BW recall type.</li>
<li>Unchecked: Do not include this recall type with special type recalls when they are both due. For example, a recall type for a follow-up endo exam might have this box unchecked so it is not automatically added to a Prophy recall that is due.</li>
</ul>
<p><b>Procedures that trigger this recall type</b>: Click <b>Add</b> to select the procedures that trigger the recall. To delete a procedure, select a procedure and click <b>Remove</b>. When a patient has one of these procedures completed, the next recall appointment due date is triggered.</p>
<p><b>Default Interval</b>: Determines the length of time between each recall appointment and calculates the recall due date. A common prophy interval is 6 months plus 1 day so that six month recalls are not accidentally scheduled too early.</p>
<p><b>Time Pattern</b>: Create the time pattern for providers and assistants to determine the length of the appointment. Use slashes / for assistant time and X for provider time. Each character equals the time increment set in the Appointment module (see <a href="appointmentviewsetup.html">Appointment View Setup</a>). For example, if time increment is 10 minutes, //XX/ = 20 minutes of non-provider time, 20 minutes of provider time, 10 minutes non-provider time (50 minutes total appointment time).</p>
<div class="Note">Note: If no <b>Time Pattern</b> is set, a default appointment length of three time blocks will be applied when scheduling this recall type.</div>
<p><b>Procedures on Appointment</b>: Click <b>Add</b> to select procedures that will be attached to scheduled recall appointments. To delete a procedure, select a procedure and click <b>Remove</b>.</p>
<p><b>Restrict to Specific Blockouts</b>: Click <b>[...]</b> to restrict this Recall Type to specific blockouts when scheduling via <a href="webschedrecallsetup.html">Web Sched Recall</a>.</p>
<p>When finished, click <b>Sync</b> to apply the changes to patients with the recall type, or with a trigger procedure completed. For patients with manual edits to their recall interval, the Sync will not change the manual edits but their due date may be recalculated. If the updates are not synced, new or changed recall types will only affect new completed procedures.</p>
</div>
</div>
</body>
</html>```
