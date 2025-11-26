# File: ./www.opendental.com/manual232/apptplanned.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Planned Appointments</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('apptplanned','+chartTabs','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/apptplanned.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/apptplanned.html" >v24.2</option><option value="https://www.opendental.com/manual241/apptplanned.html" >v24.1</option><option value="https://www.opendental.com/manual233/apptplanned.html" >v23.3</option><option value="https://www.opendental.com/manual232/apptplanned.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/apptplanned.html" >v23.1</option><option value="https://www.opendental.com/manual224/apptplanned.html" >v22.4</option><option value="https://www.opendental.com/manual223/apptplanned.html" >v22.3</option><option value="https://www.opendental.com/manual222/apptplanned.html" >v22.2</option><option value="https://www.opendental.com/manual221/apptplanned.html" >v22.1</option><option value="https://www.opendental.com/manual214/apptplanned.html" >v21.4</option><option value="https://www.opendental.com/manual213/apptplanned.html" >v21.3</option><option value="https://www.opendental.com/manual212/apptplanned.html" >v21.2</option><option value="https://www.opendental.com/manual211/apptplanned.html" >v21.1</option><option value="https://www.opendental.com/manual205/apptplanned.html" >v20.5</option><option value="https://www.opendental.com/manual204/apptplanned.html" >v20.4</option><option value="https://www.opendental.com/manual203/apptplanned.html" >v20.3</option><option value="https://www.opendental.com/manual202/apptplanned.html" >v20.2</option><option value="https://www.opendental.com/manual201/apptplanned.html" >v20.1</option><option value="https://www.opendental.com/manual194/apptplanned.html" >v19.4</option><option value="https://www.opendental.com/manual193/apptplanned.html" >v19.3</option><option value="https://www.opendental.com/manual192/apptplanned.html" >v19.2</option><option value="https://www.opendental.com/manual191/apptplanned.html" >v19.1</option><option value="https://www.opendental.com/manual184/apptplanned.html" >v18.4</option><option value="https://www.opendental.com/manual183/apptplanned.html" >v18.3</option><option value="https://www.opendental.com/manual182/apptplanned.html" >v18.2</option><option value="https://www.opendental.com/manual181/apptplanned.html" >v18.1</option><option value="https://www.opendental.com/manual174/apptplanned.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Planned Appointments</p></div>
<div class="GeneralPageContent">
<p>Set up and track a patient's next appointment for treatment planned procedures (e.g., RCT, crowns, fillings) from the Chart Module using Planned Appointments.</p>
<p>In the <a href="chart.html">Chart Module</a>, click the <b>Planned Appts</b> tab.</p>
<img src="images/apptPlanned.png" width="528" height="263"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Create a new Planned Appointment. The <a href="aptedit.html">Edit Appointment</a> window opens.</li>
<li><b>Delete</b>: Delete the selected Planned Appointment(s). This does not affect scheduled appointments.</li>
<li><b>Pinboard</b>: Send the selected appointment(s) to the <a href="apptpinboard.html">Pinboard</a>. The <a href="appointments.html">Appointments Module</a> opens so users can schedule Planned Appointments.</li>
<li><b>Up/Down</b>: Move the selected Planned Appointment up or down in the list.</li>
<li><b>Done</b>: Check this box to delete all Planned Appointments. This should be done once all Planned Appointments have been completed.</li>
<li><b>Show Completed</b>: Check to show Planned Appointments attached to completed appointments. Resets to unchecked when Open Dental is restarted.</li>
</ul>
<p>Double-click an existing Planned Appointment to edit.</p>
<p class="MarginBottomZero"><b>Planned Appointments Grid</b>: Displays existing Planned Appointments.  </p>
<ul class="MarginBottomGap">
<li><b>#</b>: Order of the Planned Appointment in the list.</li>
<li><b>Procedures</b>: Procedures attached to the Planned Appointment.</li>
<li><b>Note</b>: Appointment note.</li>
<li><b>DateSched</b>: Date of the linked scheduled appointment. In order for a DateSched to populate, the Planned Appointment must be scheduled by copying to the pinboard. If procedures on a Planned Appointment are scheduled separately, the date does not populate.</li>
</ul>
<p>Background and text color of entries is determined by <a href="definitionsprognotecolors.html">Definitions: Prog Note Colors</a>.</p>
<h2>Creating a Planned Appointment</h2>
<p> To prompt users to create a Planned Appointment for procedures that are treatment planned today, enable the <i>Prompt for Planned Appointment</i> preference.</p>
<b>Create a Planned Appointment from the Chart Module:</b><p><img src="images/apptPlanned.png" width="528" height="263"/></p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li><a href="entertreatment.html">Enter Treatment</a> that will be attached to the Planned Appointment.</li>
<li>Click <b>+Add</b>. <a href="aptedit.html">Edit Appointment</a> is opened and the treatment planned procedures are listed under <i>Procedures on this Appointment</i>.</li>
<li>Select the procedures to attach to the Planned Appointment.</li>
<li>Optional: If <a href="labcasemanage.html">Lab Cases</a> need to be attached, click <b>Lab </b>in the right panel. Select the Lab Case or create it if needed. Attached Lab Cases are automatically attached to the appointment when scheduled.</li>
<li>Click <b>OK</b>.</li>
</ol>
<b>Create a Planned Appointment from Treatment Plan Module:</b><p><img src="images/planApptTreatPlan.png" width="794" height="394"/></p>
<ol>
<li>Select treatment planned procedures to be attached to the appointment.</li>
<li>Click <b>+Plan Appt</b>. Edit Appointment is opened and the previously selected treatment planned are attached the appointment under <i>Procedures on this Appointment</i>. Select additional procedures to attach to the appointment if necessary.</li>
<li>Optional: If Lab Cases need to be attached, click <b>Lab </b>in the right panel. Select the Lab Case or create it if needed. Attached Lab Cases are automatically attached to the appointment when scheduled.</li>
<li>Click <b>OK</b>.</li>
</ol>
<p><div class="Note">Note: To track Planned Appointments that were created but not yet scheduled, see <a href="appttracker.html">Planned Appointment Tracker</a>.</div>
</p>
<h2>Scheduling a Planned Appointment</h2>
<p class="MarginBottomZero"><b>Scheduling from Front Office:</b></p>
<ol class="MarginBottomGap">
<li>Usually, the chairside assistant or provider enters the Planned Appointment while charting treatment, then sends the patient to the front desk for scheduling.</li>
<li>In the Appointments Module, select the patient.</li>
<li>Click <b>+Make Appt </b>or <b>Pat Appts</b>. <a href="apptspatient.html">Appointments for Patient</a> opens. The Planned Appointment is in the appointment list just like any other appointment, except it has no date or time.<br/><img src="images/apptplanSched.png" width="915" height="568" class="ImageInParagraph"/><ul>
<li>This window lists the patient's planned, scheduled, broken, unscheduled, and completed appointments.</li>
<li><b>Show Completed Planned Appts</b>: Check to show Planned Appointments marked complete.</li>
<li><b>Planned Appt Done</b>: This box reflects the value of the Done box in the Chart Module, Planned Appt tab. When checked, this notifies scheduling that the next appointment will be a recall, not a restorative procedure. If unchecked, there may be a Planned Appointment.</li>
</ul>
</li>
<li>Select the Planned Appointment to schedule.</li>
<li>Click <b>Copy to Pinboard</b>.</li>
<li>Drag the appointment to the schedule.</li>
</ol>
<b>Scheduling from Back Office/Chairside:</b><ol>
<li>Select the Planned Appointment from the Planned Appts tab in the Chart Module.</li>
<li>Click <b>Pinboard</b>.</li>
<li>The Appointments Module is opened and the appointment is be copied to the pinboard.</li>
<li>Drag the appointment to the schedule.</li>
</ol>
<p><div class="Note">Note: <ul>
<li>The new scheduled appointment duplicates the procedures and length of the Planned Appointment. The Planned Appointment itself remains in the Appointments for Patient list until its scheduled appointment is marked complete, or until it is deleted from the Planned Appts tab in the Chart Module. In the Chart Module, Progress Notes, scheduled appointment and associated Planned Appointment always show next to each other regardless of date.</li>
<li>If a patient leaves the office without making an appointment, or if they cancel at a later date, use the Planned Appointment Tracker to track and schedule planned treatment.</li>
<li>Once a Planned Appointment has been scheduled, changes should be made on the scheduled appointment, not the Planned Appointment. Changes made to the Planned Appointment are not reflected on the scheduled appointment.</li>
</ul>
</div>
</p>
<h2>Typical Workflow</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>While the patient is in the chair, the assistant or provider enters the treatment planned procedures in the chart.</li>
<li>The assistant or provider creates a Planned Appointment for the next appointment, attaching the treatment planned procedures, notes, additional time.</li>
<li>The patient goes to the front desk to schedule. The front desk sees the Planned Appointment in the Appointments for Patient window, copies it to the Pinboard and schedules the next appointment.</li>
<li>The patient comes in for next appointment. The provider verifies that planned procedures match what is scheduled.</li>
<li>When the planned treatment is finished, the provider or assistant sets the appointment complete (this also designates the Planned Appointment as complete but does not delete it).</li>
<li>Determine if more work is needed. <ul>
<li>If more treatment is needed, enter another Planned Appointment.</li>
<li>If there is no additional planned treatment, mark Done. This deletes all Planned Appointments and indicates to the front desk that there is no Planned Appointment (Planned Appt Done is checked on the <a href="apptspatient.html">Patient Appointments</a> window).</li>
</ul>
</li>
</ol>
<p><div class="Note">Note: <ul>
<li>Creating more than one Planned Appointment is allowed, but because plans change, it is often more efficient to only enter Planned Appointments that are ready to be scheduled. If users do enter multiple Planned Appointments, it can be hard to accurately predict the procedures, and thus staff may need to frequently revise the Planned Appointments if procedures change. We recommend using Treatment Plans to outline a course of treatment while using Planned Appointments to communicate which appointments are ready to schedule.</li>
<li>Hygiene appointments (e.g., cleanings) should not be entered as Planned Appointments. Instead use <b>Schedule Recall </b>in the Patient Appointments window if ready to schedule. Use <a href="recalllist.html">Recall List</a> to track appointments that still need to be scheduled. </li>
<li>If there are no computers in the operatories, Planned Appointments can be ignored. Instead schedule the next appointment using the standard procedure as a guideline.</li>
</ul>
</div>
</p>
<h2>After the Planned Appointment</h2>
<p><b>When treatment is complete</b>: The Planned Appointment should exist until scheduled treatment is complete so that cancellations or no-shows can be tracked in the Planned Appointment Tracker. Once complete, planned appointments are also marked complete and won't show in the tracker. Deleting Planned Appointments is optional.</p>
<p><b>Deleting Planned Appointments </b>: Deleting Planned Appointments permanently removes them, but does not affect any scheduled or completed appointments. To delete all Planned Appointments, mark Done. This clears the list and also checks the Planned Appt Done box on the Appointments for Patient window. To delete selected Planned Appointments only, click Delete. This does not affect the Planned Appt Done box.</p>
</div>
</div>
</body>
</html>```
