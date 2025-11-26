# File: ./www.opendental.com/manual243/unscheduled.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Unscheduled List</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('unscheduled','appointmentlists','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/unscheduled.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/unscheduled.html" >v24.2</option><option value="https://www.opendental.com/manual241/unscheduled.html" >v24.1</option><option value="https://www.opendental.com/manual233/unscheduled.html" >v23.3</option><option value="https://www.opendental.com/manual232/unscheduled.html" >v23.2</option><option value="https://www.opendental.com/manual231/unscheduled.html" >v23.1</option><option value="https://www.opendental.com/manual224/unscheduled.html" >v22.4</option><option value="https://www.opendental.com/manual223/unscheduled.html" >v22.3</option><option value="https://www.opendental.com/manual222/unscheduled.html" >v22.2</option><option value="https://www.opendental.com/manual221/unscheduled.html" >v22.1</option><option value="https://www.opendental.com/manual214/unscheduled.html" >v21.4</option><option value="https://www.opendental.com/manual213/unscheduled.html" >v21.3</option><option value="https://www.opendental.com/manual212/unscheduled.html" >v21.2</option><option value="https://www.opendental.com/manual211/unscheduled.html" >v21.1</option><option value="https://www.opendental.com/manual205/unscheduled.html" >v20.5</option><option value="https://www.opendental.com/manual204/unscheduled.html" >v20.4</option><option value="https://www.opendental.com/manual203/unscheduled.html" >v20.3</option><option value="https://www.opendental.com/manual202/unscheduled.html" >v20.2</option><option value="https://www.opendental.com/manual201/unscheduled.html" >v20.1</option><option value="https://www.opendental.com/manual194/unscheduled.html" >v19.4</option><option value="https://www.opendental.com/manual193/unscheduled.html" >v19.3</option><option value="https://www.opendental.com/manual192/unscheduled.html" >v19.2</option><option value="https://www.opendental.com/manual191/unscheduled.html" >v19.1</option><option value="https://www.opendental.com/manual184/unscheduled.html" >v18.4</option><option value="https://www.opendental.com/manual183/unscheduled.html" >v18.3</option><option value="https://www.opendental.com/manual182/unscheduled.html" >v18.2</option><option value="https://www.opendental.com/manual181/unscheduled.html" >v18.1</option><option value="https://www.opendental.com/manual174/unscheduled.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Unscheduled List</p></div>
<div class="GeneralPageContent">
<p>The Unscheduled List is a place to temporarily store appointments that need follow-up (e.g., no-shows, broken appointments).</p>
<p>In <a href="appointmentlists.html">Appointment Lists</a>, click <b>Unscheduled</b>.</p>
<img src="images/unschedList.png" width="911" height="363"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://www.youtube.com/video/IQbk-gicJik">Managing the Unscheduled List Webinar</a>.</p>
<p>The Unscheduled List is non-modal so users can browse to other windows while it is open.</p>
<p class="MarginBottomZero">There are a few ways to send an scheduled appointment to the Unscheduled List.  </p>
<ul class="MarginBottomGap">
<li>In the <a href="appointments.html">Appointments Module</a>, right-click on the appointment, then select <b>Send to Unscheduled List</b>. </li>
<li>In the Appointments Module, single-click on the an appointment. In the Appointments Toolbar, click <b>Unsched</b>.</li>
<li>On <a href="aptedit.html">Edit Appointment</a>, select <i>UnschedList</i> as the Status.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>Do not send planned appointments to the Unscheduled List. Instead, delete the scheduled appointment, then use the <a href="appttracker.html">Planned Appointment Tracker</a> to track and reschedule.</li>
<li>The following <a href="preferences.html">Preferences</a> affect the Unscheduled List:  <ul>
<li><i>Do not allow recall appointments on the Unscheduled List</i>. When enabled, prevents recall appointments from being sent to the Unscheduled List.</li>
<li><i>Appointments Require Procedures</i>. When enabled, then unscheduled appointments are deleted automatically if the attached procedures are scheduled onto a new appointment.</li>
<li><i>Prevent changes to completed appointment with completed procedures</i>. When enabled, completed appointments with procedures attached cannot be sent to the Unscheduled List.</li>
</ul>
</li>
</ul>
</div>
</p>
<p class="MarginBottomZero">Narrow or sort the Unscheduled List by specific criteria. Click <b>Refresh</b> to update. </p>
<ul class="MarginBottomGap">
<li><b>Order by</b>: Sort the list alphabetically by appointment status, alphabetically by last name, first name, or by date the appointment was created.</li>
<li><b>Include Broken Appointments</b>: Include appointments that have been marked broken, but have not yet been sent to the Unscheduled List (not recommended).</li>
<li><b>Provider</b>: Only view appointments for a specific provider.</li>
<li><b>Site</b>: Only view appointments for a specific <a href="sites.html">Site</a>.</li>
<li><b>Clinic</b>: Only view appointments for a specific clinic. </li>
<li><b>Code Range</b>: Only view unscheduled appointments for specific procedures. Enter a single procedure code or range of codes.</li>
<li><b>From / To</b>: Click the down arrow to select a specific date range from a calendar. Click the down arrow again to close the calendar. To set a default date range, click Setup (see below).</li>
</ul>
<p class="MarginBottomZero">Results only include patients with a status of <i>Patient.</i></p>
<ul class="MarginBottomGap">
<li>To change the patient, right-click a patient, then click <i>Select Patient</i>.</li>
<li>To jump to a patient's chart, right-click on the patient, then select <i>See Chart</i>.</li>
</ul>
<p><b>Print List</b>: Print the list as it appears on-screen.</p>
<p class="MarginBottomZero"><b>Setup</b>: Click to change default report dates.<br/><img src="images/unschedsetup.png" width="288" height="207" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>Days Past</b>: Determines the default Start Date. Leave blank to show all.</li>
<li><b>Days Future</b>: Determines the default End Date. Leave blank to show all.</li>
</ul>
<h2>Reschedule an Appointment</h2>
<p>Option 1: Right-click on the appointment, then select <i>Send to Pinboard</i>. Drag the appointment to the schedule.</p>
<p>Option 2: Double-click on the appointment to open the Edit Appointment window. Make commlog notes as needed. Click <i>Pinboard</i> then drag it to the schedule.</p>
<p>Once rescheduled, the appointment no longer shows in the Unscheduled List.</p>
</div>
</div>
</body>
</html>```
