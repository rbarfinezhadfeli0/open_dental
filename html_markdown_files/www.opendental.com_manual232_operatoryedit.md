# File: ./www.opendental.com/manual232/operatoryedit.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Operatory Edit</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('operatoryedit','operatories','+appointments','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/operatoryedit.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/operatoryedit.html" >v24.2</option><option value="https://www.opendental.com/manual241/operatoryedit.html" >v24.1</option><option value="https://www.opendental.com/manual233/operatoryedit.html" >v23.3</option><option value="https://www.opendental.com/manual232/operatoryedit.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/operatoryedit.html" >v23.1</option><option value="https://www.opendental.com/manual224/operatoryedit.html" >v22.4</option><option value="https://www.opendental.com/manual223/operatoryedit.html" >v22.3</option><option value="https://www.opendental.com/manual222/operatoryedit.html" >v22.2</option><option value="https://www.opendental.com/manual221/operatoryedit.html" >v22.1</option><option value="https://www.opendental.com/manual214/operatoryedit.html" >v21.4</option><option value="https://www.opendental.com/manual213/operatoryedit.html" >v21.3</option><option value="https://www.opendental.com/manual212/operatoryedit.html" >v21.2</option><option value="https://www.opendental.com/manual211/operatoryedit.html" >v21.1</option><option value="https://www.opendental.com/manual205/operatoryedit.html" >v20.5</option><option value="https://www.opendental.com/manual204/operatoryedit.html" >v20.4</option><option value="https://www.opendental.com/manual203/operatoryedit.html" >v20.3</option><option value="https://www.opendental.com/manual202/operatoryedit.html" >v20.2</option><option value="https://www.opendental.com/manual201/operatoryedit.html" >v20.1</option><option value="https://www.opendental.com/manual194/operatoryedit.html" >v19.4</option><option value="https://www.opendental.com/manual193/operatoryedit.html" >v19.3</option><option value="https://www.opendental.com/manual192/operatoryedit.html" >v19.2</option><option value="https://www.opendental.com/manual191/operatoryedit.html" >v19.1</option><option value="https://www.opendental.com/manual184/operatoryedit.html" >v18.4</option><option value="https://www.opendental.com/manual183/operatoryedit.html" >v18.3</option><option value="https://www.opendental.com/manual182/operatoryedit.html" >v18.2</option><option value="https://www.opendental.com/manual181/operatoryedit.html" >v18.1</option><option value="https://www.opendental.com/manual174/operatoryedit.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Operatory Edit</p></div>
<div class="GeneralPageContent">
<p>Operatories can be added and edited to meet the needs of the practice.</p>
<p>In <a href="operatories.html">Operatories</a>, click <b>Add</b>, or double-click an existing operatory to edit.</p>
<img src="images/operatoriesEdit.png" width="599" height="532"/><p><b>Op Name</b>: Enter the label for the operatory in the <a href="appointments.html">Appointments Module</a>. We recommend keeping it short. Two line titles will wrap, but longer titles will be cut off.</p>
<p><b>Abbrev (max 5 char)</b>: Enter the abbreviation (up to 5 characters) to identify this operatory in various lists throughout the program.</p>
<p><b>Is Hidden</b>: Check to mark the operatory as hidden when it is no longer in use.</p>
<p><b>Clinic</b>: Select the clinic associated with this operatory. Defaults to the clinic selected on the Operatories window. When setting up Appointment Views, operatory clinic assignment affects which operatories can be assigned to the appointment view. For example only Clinic A operatories can be assigned to Clinic A appointment views.</p>
<p class="MarginBottomZero"><b>Provider</b>: Select the default provider assigned to appointments scheduled in the operatory. The provider determines the operatory's color in the Appointments Module (based on the provider's appointment color). </p>
<ul class="MarginBottomGap">
<li>If providers are restricted to clinics in <a href="securityusers.html">User Edit</a>, only providers available for the selected clinic are options. </li>
<li>If operatories are assigned to provider time blocks in <a href="schedule.html">Schedule Setup</a>, it overrides the operatory provider. </li>
</ul>
<p><b>Hygienist</b>: Select the default hygienist assigned to appointments scheduled in the operatory. </p>
<p><b>Is Hygiene</b>: Check to assign the hygienist as the default provider when appointments are scheduled in this operatory. <div class="Note">Note: For Provider Only operatories with Hygienist set to <i>None</i>:  <ul>
<li>If <i>Force op's hygiene provider as secondary provider</i> is disabled in <a href="preferences.html">Preferences</a> and the patient is assigned a Secondary Provider (i.e., hygienist) in <a href="patientedit.html">Edit Patient Information</a> the secondary provider is assigned to the appointment (and all hygiene procedures). To prevent this, assign the dentist as both the Provider and Hygienist in the Operatory.</li>
<li>If <i>Force op's hygiene provider as secondary provider</i> is enabled, the Hygienist on the appointment is set to <i>None</i> and the Provider is assigned to all hygiene procedures.</li>
</ul>
</div>
.</p>
<p><b>Set Prospective</b>: Mark the operatory for prospective patients only. Users will be prompted to change the status of any patient scheduled in this operatory to <i>Prospective</i> (<a href="patientedit.html">Edit Patient Information</a>). If the appointment is moved to a non-prospective operatory, users will be prompted to change the status to <i>Patient</i>. This is useful in large clinics that frequently set tentative appointments for patients that may not show up. <div class="Note">Note: If a patient has an active recall, it will be disabled when their status is changed to <i>Prospective</i>.</div>
</p>
<p class="MarginBottomZero"><b>Web Sched Settings</b>: These settings only affect Web Sched eServices. </p>
<ul class="MarginBottomGap">
<li><b>Is Recall</b>: Consider this operatory when determining available time slots for <a href="webschedrecallsetup.html">Web Sched Recall</a> appointments. </li>
<li><b>New Pat Appt Types</b>: Indicates <a href="webschednewpatsetup.html">Web Sched New Patient</a> Appointment Types associated with this operatory. Only these Appointment Types can be scheduled in this operatory, using Web Sched New Patient.  <ul>
<li>Click <b>[...]</b> to select appointment types.</li>
<li> Highlight the Appointment Type(s) then click <b>OK</b>. Add new types in <a href="definitionswebschednewpatappttypes.html">Definitions: Web Sched New Patient Appt Types</a>.</li>
</ul>
</li>
<li><b>Existing Pat Appt Types</b>: Indicates <a href="webschedexistingpatsetup.html">Web Sched Existing Patient</a> Appointment Types associated with this operatory. Only these Appointment Types can be scheduled in this operatory, using Web Sched Existing Patient.  <ul>
<li>Click <b>[...]</b> to select appointment types.</li>
<li> Highlight the Appointment Type(s) then click <b>OK</b>. Add new types in <a href="definitionswebschedexistingpatappttypes.html">Definitions: Web Sched Existing Appt Types</a>. </li>
</ul>
</li>
</ul>
<p><b>Update provs on future appts</b>: See <a href="updateprovsfutureappts.html">Update Provs on Future Appts</a> for details.</p>
<p><b>Op Type</b>: Informational only. Select the Operatory Type. Add types in <a href="definitionsoperatorytypes.html">Definitions: Operatory Types</a>. </p>
</div>
</div>
</body>
</html>```
