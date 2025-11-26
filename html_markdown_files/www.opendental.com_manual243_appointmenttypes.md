# File: ./www.opendental.com/manual243/appointmenttypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Appointment Types</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('appointmenttypes','+appointments','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/appointmenttypes.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/appointmenttypes.html" >v24.2</option><option value="https://www.opendental.com/manual241/appointmenttypes.html" >v24.1</option><option value="https://www.opendental.com/manual233/appointmenttypes.html" >v23.3</option><option value="https://www.opendental.com/manual232/appointmenttypes.html" >v23.2</option><option value="https://www.opendental.com/manual231/appointmenttypes.html" >v23.1</option><option value="https://www.opendental.com/manual224/appointmenttypes.html" >v22.4</option><option value="https://www.opendental.com/manual223/appointmenttypes.html" >v22.3</option><option value="https://www.opendental.com/manual222/appointmenttypes.html" >v22.2</option><option value="https://www.opendental.com/manual221/appointmenttypes.html" >v22.1</option><option value="https://www.opendental.com/manual214/appointmenttypes.html" >v21.4</option><option value="https://www.opendental.com/manual213/appointmenttypes.html" >v21.3</option><option value="https://www.opendental.com/manual212/appointmenttypes.html" >v21.2</option><option value="https://www.opendental.com/manual211/appointmenttypes.html" >v21.1</option><option value="https://www.opendental.com/manual205/appointmenttypes.html" >v20.5</option><option value="https://www.opendental.com/manual204/appointmenttypes.html" >v20.4</option><option value="https://www.opendental.com/manual203/appointmenttypes.html" >v20.3</option><option value="https://www.opendental.com/manual202/appointmenttypes.html" >v20.2</option><option value="https://www.opendental.com/manual201/appointmenttypes.html" >v20.1</option><option value="https://www.opendental.com/manual194/appointmenttypes.html" >v19.4</option><option value="https://www.opendental.com/manual193/appointmenttypes.html" >v19.3</option><option value="https://www.opendental.com/manual192/appointmenttypes.html" >v19.2</option><option value="https://www.opendental.com/manual191/appointmenttypes.html" >v19.1</option><option value="https://www.opendental.com/manual184/appointmenttypes.html" >v18.4</option><option value="https://www.opendental.com/manual183/appointmenttypes.html" >v18.3</option><option value="https://www.opendental.com/manual182/appointmenttypes.html" >v18.2</option><option value="https://www.opendental.com/manual181/appointmenttypes.html" >v18.1</option><option value="https://www.opendental.com/manual174/appointmenttypes.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Appointment Types</p></div>
<div class="GeneralPageContent">
<p>Use Appointment Types to customize appointment background colors, time patterns, and procedures.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Appointments, Appointment Types.</p>
<img src="images/appointmentTypes.png" width="436" height="322"/><p class="MarginBottomZero">To assign Appointment Types to appointments: </p>
<ul class="MarginBottomGap">
<li>On the <a href="aptedit.html">Edit Appointment</a> window, select the appointment type.</li>
<li>Enable the prompt to select an Appointment Type when creating new appointments. </li>
<li>For Web Sched New Patient, associate Appointment Types to <a href="definitionswebschednewpatappttypes.html">Definitions: Web Sched New Patient Appt Types</a>.</li>
</ul>
<p class="MarginBottomZero">The Setup Appointment Types window displays Appointment Type settings and the list of current Appointment Types.  </p>
<ul class="MarginBottomGap">
<li><b>New appointments prompt for Appointment Type</b>: Determines if an Appointment Type can be selected immediately when creating appointments.  <ul>
<li>Checked: When creating a new appointment, a prompt appears for the user to select the Appointment Type. </li>
<li>Unchecked: No prompt appears. Instead, Appointment Types must be selected from within the appointment as needed. </li>
</ul>
</li>
<li><b>Warn users before disassociating procedures from an appointment</b>: Set the default behavior when removing procedures from an appointment.  <ul>
<li>Checked: A warning appears when the user changes the Appointment Type of an existing appointment if the new type has different procedures than the current type.</li>
<li>Unchecked: The user can dissociate procedures from an appointment via Appointment Type with no warning.</li>
</ul>
</li>
<li><b>Add</b>: Click to create a new Appointment Type. See below for details. </li>
<li><b>Up / Down</b>: Reorder Appointment Types. </li>
</ul>
<h2>Add Appointment Types</h2>
<p>Click <b>Add</b> to create a new Appointment Type or double-click an existing type to edit.</p>
<img src="images/appointmentTypeEdit.png" width="719" height="612"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Description of the Appointment Type.</li>
<li><b>Color</b>: Associate a background color to the appointment type. Click the square to select a <a href="colorselection.html">Color</a>. Click <b>None</b> to clear the current color selection.  <ul>
<li>Appointment Type color overrides the provider color. </li>
<li>When a color is updated, users are prompted <i>Would you like to update all future appointments of this type to the new color?</i> Select <b>Yes</b> to update all existing future appointments. Select <b>No</b> to only use the updated color when creating new appointments.</li>
</ul>
</li>
<li><b>Hidden</b>: Hide this Appointment Type as a selection from <a href="aptedit.html">Edit Appointment</a> or Select Appointment Type list.</li>
<li><b>Time</b>: Indicates the time pattern of the Appointment Type. By default, it uses the time pattern of attached procedures. See Time Pattern Logic below for additional information.<br/><ul>
<li>To change the time pattern, use the slider bar on the left. Drag the slider up or down to increase or decrease appointment length. </li>
<li>Click each square to toggle between <i>X</i> (provider) and <i>/</i> (non-provider) time. Each square is one Time Increment. Time Increment length is determined in <a href="appointmentviewsetup.html">Appointment View Setup</a>.</li>
<li><b>Clear</b>: Click to remove the time pattern override. </li>
</ul>
</li>
<li><b>Procedures to Add to the Appointment</b>: List of procedures automatically treatment planned when using this Appointment Type.  <ul>
<li>Click <b>Add</b> to attach procedures to the Appointment Type. Procedures associated with an Appointment Type should not have treatment areas (e.g., fillings) as there is no prompt to enter treatment area. Instead, procedures should be general (e.g., sedation).</li>
<li>Select a procedure and click <b>Remove</b> to delete it from the Appointment Type.</li>
</ul>
</li>
<li><b>Required Procedures</b>: Click <b>Add</b> to attach procedures that are required when selecting this Appointment Type. Select a procedure and click <b>Remove</b> to delete from the required list.</li>
<ul>
<li><b>At Least One</b>: Select to require only one of the listed procedures be attached to the appointment when using this Appointment Type.</li>
<li><b>All</b>: Select to require all listed procedures to be attached to the appointment when using this Appointment Type.</li>
<li>Radio buttons are disabled if the <i>Required Procedures</i> list is empty.</li>
</ul>
<li><b>Allowed Blockout Types</b>: Restrict this Appointment Type to only be scheduled on the selected <a href="definitionsblockouts.html">Blockout Types</a> or areas where there is no Blockout.</li>
</ul>
<p>Click <b>Save</b> to finish adding a new Appointment Type or keep changes.</p>
<p></p>
<h2>Changing an Appointment Type</h2>
<p>When an Appointment Type is changed, existing appointments with that type remain unchanged. Double-click the appointment and select the Appointment Type to update.</p>
<p>Changing an Appointment Type on an existing appointment treatment plans the procedures for the new Appointment Type. The original procedures also remain treatment planned. Procedures that are not needed can be manually deleted from the <a href="treatmentplan.html">Treatment Plan Module</a>, Procedures grid.</p>
<p>Changing the Appointment Type from one with a custom time pattern or attached procedures to one with no time pattern does not change the time pattern of the appointment.</p>
<h2>Time Pattern Logic</h2>
<p>The appointment time is recalculated based on the following logic:</p>
<ul>
<li>If the Appointment Type has procedures attached and a custom time pattern, the custom time pattern is used.</li>
<li>If the Appointment Type has procedures attached but does not have a custom time pattern, the procedure time pattern is used.</li>
<li>If the Appointment Type has no procedures attached and no custom time pattern, the appointment does not have a time pattern.</li>
</ul>
<br/><div class="Note">Note: <b>Logic for MobileWeb Appointments</b><br/><ul>
<li>If an Appointment Type is selected, and the time duration entered matches the Appointment Type, the Appointment Time Pattern is retained.</li>
<li>If no Appointment Type is selected, or the time duration entered does not match the Appointment Type, the time pattern adds assistant time to meet the full-time duration.</li>
</ul>
</div>
</div>
</div>
</body>
</html>```
