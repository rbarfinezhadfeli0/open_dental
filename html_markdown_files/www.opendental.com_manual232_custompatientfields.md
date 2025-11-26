# File: ./www.opendental.com/manual232/custompatientfields.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Fields</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('custompatientfields','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/custompatientfields.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/custompatientfields.html" >v24.2</option><option value="https://www.opendental.com/manual241/custompatientfields.html" >v24.1</option><option value="https://www.opendental.com/manual233/custompatientfields.html" >v23.3</option><option value="https://www.opendental.com/manual232/custompatientfields.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/custompatientfields.html" >v23.1</option><option value="https://www.opendental.com/manual224/custompatientfields.html" >v22.4</option><option value="https://www.opendental.com/manual223/custompatientfields.html" >v22.3</option><option value="https://www.opendental.com/manual222/custompatientfields.html" >v22.2</option><option value="https://www.opendental.com/manual221/custompatientfields.html" >v22.1</option><option value="https://www.opendental.com/manual214/custompatientfields.html" >v21.4</option><option value="https://www.opendental.com/manual213/custompatientfields.html" >v21.3</option><option value="https://www.opendental.com/manual212/custompatientfields.html" >v21.2</option><option value="https://www.opendental.com/manual211/custompatientfields.html" >v21.1</option><option value="https://www.opendental.com/manual205/custompatientfields.html" >v20.5</option><option value="https://www.opendental.com/manual204/custompatientfields.html" >v20.4</option><option value="https://www.opendental.com/manual203/custompatientfields.html" >v20.3</option><option value="https://www.opendental.com/manual202/custompatientfields.html" >v20.2</option><option value="https://www.opendental.com/manual201/custompatientfields.html" >v20.1</option><option value="https://www.opendental.com/manual194/custompatientfields.html" >v19.4</option><option value="https://www.opendental.com/manual193/custompatientfields.html" >v19.3</option><option value="https://www.opendental.com/manual192/custompatientfields.html" >v19.2</option><option value="https://www.opendental.com/manual191/custompatientfields.html" >v19.1</option><option value="https://www.opendental.com/manual184/custompatientfields.html" >v18.4</option><option value="https://www.opendental.com/manual183/custompatientfields.html" >v18.3</option><option value="https://www.opendental.com/manual182/custompatientfields.html" >v18.2</option><option value="https://www.opendental.com/manual181/custompatientfields.html" >v18.1</option><option value="https://www.opendental.com/manual174/custompatientfields.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Fields</p></div>
<div class="GeneralPageContent">
<p>Custom patient fields are fields that can be added to various areas of the program. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Family/Insurance, <b>Patient Field Defs</b>.</p>
<img src="images/patientFieldDefs.png" width="514" height="442"/><p class="MarginBottomZero">Custom Patient Fields can show in several areas including: </p>
<ul class="MarginBottomGap">
<li>Patient Information area of the <a href="family.html">Family Module</a>.</li>
<li>Patient information area of the <a href="account.html">Account Module</a>.</li>
<li>Patient Information area of the <a href="chart.html">Chart Module</a>.</li>
<li>Patient Fields area of <a href="orthochart.html">Ortho Chart</a>.</li>
<li><a href="appointmentviews.html">Appointment Views</a>.</li>
</ul>
<p>Use the <b>Up</b> and <b>Down</b> arrows to reorder Patient Field Defs. Click <b>Add</b> to create a new field.</p>
<p class="MarginBottomZero"><b>Display patient fields that have been renamed or hidden</b>: </p>
<ul class="MarginBottomGap">
<li>Checked: When a Field Def is in use by a patient, renaming or marking the field as hidden, causes the old field and any entered data to show in gray text at the bottom of the Patient Information area.</li>
<li>Unchecked: When a Field Def is in use by a patient, renaming or marking the field as hidden causes entered data to be hidden from the Patient Information area.</li>
</ul>
<h2>Add or Edit Patient Fields</h2>
<p>Click <b>Add</b> or double-click an existing field to edit.</p>
<img src="images/patientFieldDefEdit.png" width="351" height="353"/><p><b>Field Name</b>: Enter the field label. <br/><div class="Note">Note: Data entered in a patient field is tied to the field name. If editing a patient field name, any data already entered in the field is hidden, and essentially a new field is created. To view data tied to the original field name, revert to the original name, or create a new field with the same name.</div>
</p>
<p class="MarginBottomZero"><b>Field Type</b>: Select the type of field.  </p>
<ul class="MarginBottomGap">
<li>Text: Users can enter any freeform text.</li>
<li>PickList: Users select from a list of items. Enter one item on each line. Answers are attached to patients as plain text.</li>
<li>Date: Only allow users to enter dates. These dates are attached to patients as plain text rather than as a formal date.</li>
<li>Checkbox: Create a single checkbox that users can use to indicate yes or true.</li>
<li>Currency: Only numeric values are allowed. Values are converted to currency (e.g., 1 is converted to $1.00).</li>
<li>CareCreditStatus: This field is added by default. Users who do not have the CareCredit integration enabled can hide this field. For CareCredit users, this field updates automatically based on Quickscreen results. Once in use, this field cannot be renamed. The three available statuses are:  <ul>
<li>Pre-Approved</li>
<li>Unable to Pre-Approve - Refer Patient to Credit Application</li>
<li>Cardholder</li>
</ul>
</li>
</ul>
<p><b>Hidden</b>: Patient field defs in use cannot be deleted. Check to hide them instead.</p>
<h2>Location of the Patient Field</h2>
<p>Custom patient fields can be available to display in all patient information areas (Chart, Account, Family, Ortho Chart), or you can set patient fields to only be available for specific patient information areas.</p>
<p>To display patient fields in the Family, Account, and Chart Module patient information areas, add the PatFields to the corresponding <a href="displayfields.html">Display Fields</a> category.</p>
<p>On the Patient Field Defs window, click <b>Setup</b> to open the Field Display window.</p>
<img src="images/patientFieldDefSetupmenu.png" width="514" height="58"/><img src="images/patientFieldSetup.png" width="640" height="354"/><p class="MarginBottomZero"><b>Field Location</b>: Click the dropdown to select the location. Options include:  </p>
<ul class="MarginBottomGap">
<li>Account: Fields available for the Display Field category AccountPatientInformation.</li>
<li>AppointmentEdit: Fields available in the Edit Appointment window. Uses <a href="appointmentfields.html">Appointment Field Defs</a>.</li>
<li>Chart: Fields available for the Display Field category ChartPatientInformation.</li>
<li>Family: Fields available for the Display Field category PatientInformation.</li>
<li>OrthoChart: Fields that display in the Patient Fields area of the Ortho Chart.</li>
<li>GroupNote: Fields available in a Group Note. (Orion users only)</li>
</ul>
<p class="MarginBottomZero"><b>Visible</b> vs <b>Hidden Fields</b>: Determine which fields should be visible and which should be hidden. To move a field to a different grid, highlight it, then click the right/left arrow.  </p>
<ul>
<li>Visible Fields: Fields that show in the Ortho Chart, or when PatFields is added to the corresponding Display Field category.</li>
<li>Hidden Fields: Fields that do not show.</li>
</ul>
<p class="MarginBottomGap">Patient Field Defs that are not in use or fields in use (i.e., a value has been entered into the field) but not added to an appointment view can be hidden. Fields in use and added to an appointment view cannot be hidden; a warning displays when attempting to hide these fields. </p>
<h2>Using Patient Fields</h2>
<p>To enter data into a patient field, double-click the field.</p>
<img src="images/patientFieldsExample.png" width="240" height="48"/><p>Options vary depending on the Field Type and setup.</p>
<img src="images/patientFieldEdit.png" width="377" height="220"/><p><b>Auto Note</b>: This button is only available for <i>Text</i> Field Types in the Ortho Chart. Click to enter an <a href="autonotes.html">Auto Notes</a>.</p>
<p>Click <b>OK</b> after selecting or entering informating to save.</p>
</div>
</div>
</body>
</html>```
