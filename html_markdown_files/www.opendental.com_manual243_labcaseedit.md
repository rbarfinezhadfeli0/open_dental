# File: ./www.opendental.com/manual243/labcaseedit.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Lab Case</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('labcaseedit','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/labcaseedit.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/labcaseedit.html" >v24.2</option><option value="https://www.opendental.com/manual241/labcaseedit.html" >v24.1</option><option value="https://www.opendental.com/manual233/labcaseedit.html" >v23.3</option><option value="https://www.opendental.com/manual232/labcaseedit.html" >v23.2</option><option value="https://www.opendental.com/manual231/labcaseedit.html" >v23.1</option><option value="https://www.opendental.com/manual224/labcaseedit.html" >v22.4</option><option value="https://www.opendental.com/manual223/labcaseedit.html" >v22.3</option><option value="https://www.opendental.com/manual222/labcaseedit.html" >v22.2</option><option value="https://www.opendental.com/manual221/labcaseedit.html" >v22.1</option><option value="https://www.opendental.com/manual214/labcaseedit.html" >v21.4</option><option value="https://www.opendental.com/manual213/labcaseedit.html" >v21.3</option><option value="https://www.opendental.com/manual212/labcaseedit.html" >v21.2</option><option value="https://www.opendental.com/manual211/labcaseedit.html" >v21.1</option><option value="https://www.opendental.com/manual205/labcaseedit.html" >v20.5</option><option value="https://www.opendental.com/manual204/labcaseedit.html" >v20.4</option><option value="https://www.opendental.com/manual203/labcaseedit.html" >v20.3</option><option value="https://www.opendental.com/manual202/labcaseedit.html" >v20.2</option><option value="https://www.opendental.com/manual201/labcaseedit.html" >v20.1</option><option value="https://www.opendental.com/manual194/labcaseedit.html" >v19.4</option><option value="https://www.opendental.com/manual193/labcaseedit.html" >v19.3</option><option value="https://www.opendental.com/manual192/labcaseedit.html" >v19.2</option><option value="https://www.opendental.com/manual191/labcaseedit.html" >v19.1</option><option value="https://www.opendental.com/manual184/labcaseedit.html" >v18.4</option><option value="https://www.opendental.com/manual183/labcaseedit.html" >v18.3</option><option value="https://www.opendental.com/manual182/labcaseedit.html" >v18.2</option><option value="https://www.opendental.com/manual181/labcaseedit.html" >v18.1</option><option value="https://www.opendental.com/manual174/labcaseedit.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Lab Case</p></div>
<div class="GeneralPageContent">
<p>Track and manage Lab Cases and create Lab Slips from the Edit Lab Case window.</p>
<p>In the <a href="chart.html">Chart Module</a> toolbar, click <b>LabCase</b>.</p>
<img src="images/labCaseEdit.png" width="880" height="514"/><p class="MarginBottomZero">Alternatively:  </p>
<ul class="MarginBottomGap">
<li>In the <a href="aptedit.html">Edit Appointment</a> or Edit Planned Appointment Window, click <b>Lab</b> in the left panel, then <b>New</b>. </li>
<li>In the <a href="treatmentplan.html">Treatment Plan Module</a> toolbar, click <b>LabCase</b>.</li>
</ul>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://youtu.be/OG6ThB2xlAw">Lab Cases</a>.</p>
<p>Before creating a Lab Case, set up dental <a href="laboratories.html">Laboratories</a>.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Patient</b>: Patient associated with Lab Case.</li>
<li><b>Appointment:</b> The scheduled appointment this Lab Case is attached to. Click <b>Detach</b> to remove the association with the appointment without deleting the Lab Case.</li>
<li><b>Planned Appt:</b> The <a href="apptplanned.html">Planned Appointment</a> this Lab Case is attached to. Click <b>Detach</b> to remove the association with the appointment without deleting the Lab Case.</li>
<li><b>Provider</b>: Provider associated to Lab Case. </li>
<li><b>Fee</b>: For tracking and informational purposes only. The fee is not used in any calculation. </li>
<li><b>Invoice Number</b>: Add an optional invoice number. For tracking and informational purposes only.</li>
<li><b>Lab</b>: A list of labs added in Laboratory Setup. Select a lab to see available services and turnaround times.</li>
<li><b>Set Due Date</b>: A list of services and turnaround times defined in Laboratory Setup for the selected lab. The turnaround time is used to calculate a <i>Date Time Due</i>.  <ul>
<li>Click on a service/turnaround time to automatically calculate a <i>Date Time Due</i>, skipping weekends and holidays (as set in Schedules). Items do not stay highlighted once clicked.</li>
<li>Provider schedule is not taken into account. </li>
<li>Selecting a service does not track the kind of Lab Case, it only generates the due date.</li>
</ul>
</li>
<li><b>Date Time Due</b>: Clicking a service/turnaround time listed under <i>Set Due Date</i>, automatically calculates a <i>Date Time Due</i> or can be entered manually. If left blank, the date time due of 01/01/0001 12:00 AM is automatically inserted when Lab Slips or sheets are generated.</li>
<li><b>Instructions</b>: Instructions to display on the generated <a href="labslips.html">Lab Slip</a>. Right-click to insert a <a href="quickpastenoteedit.html">Quick Paste Note</a> or <a href="autonotes.html">Auto Note</a>.</li>
<li><b>Tracking Dates:</b> Used to track the progress of the Lab Case. Click <b>Now</b> to insert the current date and time. This is useful for managing <a href="labcasemanage.html">Lab Cases</a>.</li>
<ul>
<li>Created: When the Lab Case was created.</li>
<li>Sent: When the case was finished being packaged and set out to be picked up. It may not actually be picked up until hours later.</li>
<li>Received: When the Lab Case was processed by the office staff as having come back from the lab. The box does not need to be opened.</li>
<li>Quality Checked: The box has been opened. The case appears to be ready to deliver to the patient. The staff has performed whatever quality checks are needed, including checking contacts, appearance, etc.</li>
</ul>
</ul>
<p class="MarginBottomZero"><b>New Slip / Edit Slip</b>: Generate a new <a href="labslips.html">Lab Slip</a> or edit/view the existing Lab Slip. Set default Lab Slips for each lab in Laboratory Setup. </p>
<ul class="MarginBottomGap">
<li>If an <a href="definitionsimagecat.html">Image Category</a> has been assigned to <i>LabCases</i>, a PDF copy of a Lab Slip is saved to the Imaging Module when printed, emailed, or created as a PDF. </li>
</ul>
<p class="MarginBottomZero"><b>Delete</b>: Click to delete the Lab Case.  </p>
<ul class="MarginBottomGap">
<li>To instead detach the Lab Case from the current appointment, see Appointment and Planned Appt above. </li>
<li>If a Lab Slip is attached to the Lab Case, the Lab Case cannot be deleted until the Lab Slip is deleted. Click <b>Edit Slip</b> to delete the attached Lab Slip.</li>
</ul>
<p>Once a Lab Case is created, an entry is added to the <a href="chart.html">Chart</a>, Progress Notes. If it was created within the Edit Appointment or Edit Planned Appointment window, the Lab Case is automatically already attached to the appointment and is ready to be scheduled. If created outside of an appointment, see Attaching a Lab Case to an Appointment below.</p>
<h2>Attaching a Lab Case to an Appointment</h2>
<p>Lab Cases should always be attached to an appointment. If an appointment is not yet scheduled, attach the Lab Case to a Planned Appointment. Generally, labs are attached to the delivery appointment (e.g., seat). If a Lab Case is not attached to a planned or scheduled appointment, it is listed as unattached in the Lab Cases list.</p>
<p>To attach the Lab Case to a Planned Appointment, double-click the appointment in the <i>Planned Appts</i> tab to open the <i>Edit Planned Appointment Window</i>.</p>
<p>To attach to an already scheduled appointment, double-click the appointment itself in the <a href="appointments.html">Appointments Module</a> to open the <i>Edit Appointment Window</i>.</p>
<p>Alternatively, from the Appointments Module, click <a href="apptspatient.html">Pat Appts</a>, and double-click a scheduled or Planned Appointment to open the <i>Edit Appointment</i> window.</p>
<img src="images/labCaseSelect.png" width="601" height="284"/><p>Click <b>Lab</b> in the left panel. A list of Lab Cases already created for this patient, but not attached to an appointment, are listed. Highlight the Lab Case(s) to attach to this appointment and click <b>OK</b>. </p>
<p>Alternatively, if the Lab Case has not yet been created, click <b>New</b> to create it and attach to the appointment.</p>
<p></p>
<p>The attached Lab Case information is shown in the Lab field.</p>
<img src="images/labcaseAttached.png" width="233" height="42"/><p>It is also shown in the appointment itself if the <i>Lab</i> field is added to the <a href="appointmentvieweditwindow.html">Appointment View</a>.</p>
<img src="images/labCaseAppt.png" width="221" height="72"/><p>Related Link: <a href="procsmultipleappts.html">Procedure over Multiple Appointments</a>.</p>
</div>
</div>
</body>
</html>```
