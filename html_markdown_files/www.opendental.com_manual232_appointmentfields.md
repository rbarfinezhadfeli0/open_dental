# File: ./www.opendental.com/manual232/appointmentfields.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Appointment Field Defs</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('appointmentfields','+appointments','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/appointmentfields.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/appointmentfields.html" >v24.2</option><option value="https://www.opendental.com/manual241/appointmentfields.html" >v24.1</option><option value="https://www.opendental.com/manual233/appointmentfields.html" >v23.3</option><option value="https://www.opendental.com/manual232/appointmentfields.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/appointmentfields.html" >v23.1</option><option value="https://www.opendental.com/manual224/appointmentfields.html" >v22.4</option><option value="https://www.opendental.com/manual223/appointmentfields.html" >v22.3</option><option value="https://www.opendental.com/manual222/appointmentfields.html" >v22.2</option><option value="https://www.opendental.com/manual221/appointmentfields.html" >v22.1</option><option value="https://www.opendental.com/manual214/appointmentfields.html" >v21.4</option><option value="https://www.opendental.com/manual213/appointmentfields.html" >v21.3</option><option value="https://www.opendental.com/manual212/appointmentfields.html" >v21.2</option><option value="https://www.opendental.com/manual211/appointmentfields.html" >v21.1</option><option value="https://www.opendental.com/manual205/appointmentfields.html" >v20.5</option><option value="https://www.opendental.com/manual204/appointmentfields.html" >v20.4</option><option value="https://www.opendental.com/manual203/appointmentfields.html" >v20.3</option><option value="https://www.opendental.com/manual202/appointmentfields.html" >v20.2</option><option value="https://www.opendental.com/manual201/appointmentfields.html" >v20.1</option><option value="https://www.opendental.com/manual194/appointmentfields.html" >v19.4</option><option value="https://www.opendental.com/manual193/appointmentfields.html" >v19.3</option><option value="https://www.opendental.com/manual192/appointmentfields.html" >v19.2</option><option value="https://www.opendental.com/manual191/appointmentfields.html" >v19.1</option><option value="https://www.opendental.com/manual184/appointmentfields.html" >v18.4</option><option value="https://www.opendental.com/manual183/appointmentfields.html" >v18.3</option><option value="https://www.opendental.com/manual182/appointmentfields.html" >v18.2</option><option value="https://www.opendental.com/manual181/appointmentfields.html" >v18.1</option><option value="https://www.opendental.com/manual174/appointmentfields.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Appointment Field Defs</p></div>
<div class="GeneralPageContent">
<p>Appointment Field Defs allow users to organize notes specific to a patient appointment. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Appointments, Appointment Field Defs. </p>
<img src="images/appointmentFields.png" width="449" height="357"/><p>Existing Appointment Field Defs list. Definitions marked as hidden display with <i>(hidden)</i> next to the name.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Setup</b>: Click to open Field Display and choose which Appointment Field Defs show in <a href="aptedit.html">Edit Appointment</a>.</li>
<li><b>Add</b>: Click to create a new Appointment Field Def.</li>
<li><b>Up / Down</b>: Select a field, then click to reorder it in the list.</li>
</ul>
<h2>Setup / Field Display</h2>
<p>From Field Display, choose which Appointment Field Defs are visible or hidden in the Edit Appointment window.</p>
<img src="images/appointmentFieldSetup.png" width="640" height="414"/><p><b>Field Location</b>: Determine which fields to edit. By default, <i>AppointmentEdit</i> is selected. Other <a href="custompatientfields.html">Patient Fields</a> can be selected from the dropdown as well. </p>
<p class="MarginBottomZero">Use the left and right arrows to move fields to the <i>Visible</i> and <i>Hidden Fields</i> columns.  </p>
<ul>
<li><b>Visible Fields</b>: Lists all appointment fields currently showing on the Edit Appointment window.</li>
<li><b>Hidden Fields</b>: Lists appointment fields that have been marked hidden, and do not show on the Edit Appointment window.</li>
</ul>
<p class="MarginBottomGap"> Appointment Field Defs that are not in use or fields in use (i.e., a value has been entered into the field) but not added to an appointment view can be hidden. Fields in use and added to an appointment view cannot be hidden; a warning displays when attempting to hide these fields. </p>
<h2>Edit Appointment Field Def</h2>
<p>Click<b> Add</b> to create a new Appointment Field Def or double-click an existing field to edit. The Edit Appointment Field Def window opens.</p>
<img src="images/appointmentFieldsDef.png" width="351" height="356"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Field Name</b>: Enter the name of the field.</li>
<li><b>Field Type</b>: Select the type of field.  <ul>
<li>Text: Users can type any text.</li>
<li>PickList: Users select from a list of items. Enter one item on each line.</li>
</ul>
</li>
</ul>
<p><b>Delete</b>: If no data has been entered in custom appointment field for a patient, it can be deleted.</p>
<h2>Using Appt Fields:</h2>
<p>Appointment Fields display <i>Appt Fields</i> section of the <a href="aptedit.html">Edit Appointment</a> window.</p>
<img src="images/appointmentFieldsExample.png" width="260" height="99"/><p>To enter a value, double-click the field. If the field type is <i>Text</i>, users can type in a response. If the field type is <i>PickList</i>, users are prompted to choose a response from the preset list.</p>
<img src="images/appointmentFieldsEnter.png" width="377" height="206"/><p>Click <b>OK</b> to save. The text or selected response is now displayed on the appointment.</p>
<p>Information entered in the Appointment Field can also be displayed in an appointment box on the schedule (<a href="appointmentviews.html">Appointment Views</a>).</p>
</div>
</div>
</body>
</html>```
