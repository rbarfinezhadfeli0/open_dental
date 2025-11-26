# File: ./www.opendental.com/manual/appttracker.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Planned Appointment Tracker</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('appttracker','appointmentlists','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/appttracker.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/appttracker.html" >v24.2</option><option value="https://www.opendental.com/manual241/appttracker.html" >v24.1</option><option value="https://www.opendental.com/manual233/appttracker.html" >v23.3</option><option value="https://www.opendental.com/manual232/appttracker.html" >v23.2</option><option value="https://www.opendental.com/manual231/appttracker.html" >v23.1</option><option value="https://www.opendental.com/manual224/appttracker.html" >v22.4</option><option value="https://www.opendental.com/manual223/appttracker.html" >v22.3</option><option value="https://www.opendental.com/manual222/appttracker.html" >v22.2</option><option value="https://www.opendental.com/manual221/appttracker.html" >v22.1</option><option value="https://www.opendental.com/manual214/appttracker.html" >v21.4</option><option value="https://www.opendental.com/manual213/appttracker.html" >v21.3</option><option value="https://www.opendental.com/manual212/appttracker.html" >v21.2</option><option value="https://www.opendental.com/manual211/appttracker.html" >v21.1</option><option value="https://www.opendental.com/manual205/appttracker.html" >v20.5</option><option value="https://www.opendental.com/manual204/appttracker.html" >v20.4</option><option value="https://www.opendental.com/manual203/appttracker.html" >v20.3</option><option value="https://www.opendental.com/manual202/appttracker.html" >v20.2</option><option value="https://www.opendental.com/manual201/appttracker.html" >v20.1</option><option value="https://www.opendental.com/manual194/appttracker.html" >v19.4</option><option value="https://www.opendental.com/manual193/appttracker.html" >v19.3</option><option value="https://www.opendental.com/manual192/appttracker.html" >v19.2</option><option value="https://www.opendental.com/manual191/appttracker.html" >v19.1</option><option value="https://www.opendental.com/manual184/appttracker.html" >v18.4</option><option value="https://www.opendental.com/manual183/appttracker.html" >v18.3</option><option value="https://www.opendental.com/manual182/appttracker.html" >v18.2</option><option value="https://www.opendental.com/manual181/appttracker.html" >v18.1</option><option value="https://www.opendental.com/manual174/appttracker.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Planned Appointment Tracker</p></div>
<div class="GeneralPageContent">
<p>The Planned Appointment Tracker lists Planned Appointments that have been created but not scheduled.</p>
<p>In <a href="appointmentlists.html">Appointment Lists</a>, click <b>Planned Tracker</b>.</p>
<img src="images/nextApptTracker.png" width="857" height="425"/><p>If a patient does not schedule a planned appointment, or if the scheduled appointment is deleted, this system tracks the appointment so they don't slip through the cracks. This tool is useful for keeping production levels as high as possible. Regularly review this list to fill the schedule with quality procedures.</p>
<p>To make this process work, every patient who needs treatment of any kind must have a <a href="apptplanned.html">Planned Appointment</a> created before they leave the office.</p>
<p><div class="Note">Note: This feature is not for scheduling recall appointments. Use the <a href="recalllist.html">Recall List</a> instead.</div>
</p>
<p class="MarginBottomZero"><b>Setup</b>: Click to define the default date range used to filter appointments.<br/><img src="images/plannedApptTrackerSetup.png" width="378" height="173" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>Days Past</b>: Number of days prior to the current date used to calculate the <i>From</i> date.</li>
<li><b>Days Future</b>: Number of days after the current date used to calculate the default <i>To</i> date.</li>
</ul>
<p class="MarginBottomZero">Filter or sort the list by specific criteria. Click <b>Refresh</b> after making changes to update the list. Only appointments for active patients (i.e., Status of <i>Patient</i>) are displayed in the grid. </p>
<ul class="MarginBottomGap">
<li><b>Order by</b>: Choose how to sort the appointments in the list.  <ul>
<li>Status: Groups the list by the appointment's Unscheduled Status then sorts by date.</li>
<li>Alphabetical: Sorts the list alphabetically and groups by patient name. If a patient has multiple planned appointments, they are sorted by date.</li>
<li>Date: Sorts and groups the list by the planned appointment date (i.e., the date the planned appointment was created). </li>
</ul>
</li>
<li><b>Provider</b>: Only view appointments for a specific <a href="providers.html">Provider</a>.</li>
<li><b>Clinic</b>: Only view appointments for a specific <a href="clinics.html">Clinic</a>.</li>
<li><b>Site</b>: Only view appointments for a specific <a href="sites.html">Site</a>.</li>
<li><b>Code Range</b>: Only view planned appointments for specific procedures. Enter a single procedure code or range of codes.</li>
<li><b>From / To</b>: Only planned appointments created within this date range are listed. To change the date range, type a date in the box or click the down arrow to choose dates from a calendar. Click the down arrow again to close the calendar. <ul>
<li>Click <b>All Dates</b> to clear the current date range. </li>
<li>Leaving the dates blank includes all planned appointments, regardless of date created.</li>
</ul>
</li>
</ul>
<p>Double-click a row to open the <a href="apptplanned.html">Planned Appointment</a> to view more information or make changes.</p>
<p class="MarginBottomZero">Right-click Options: </p>
<ul class="MarginBottomGap">
<li><i>Select Patient</i>: Select the patient the planned appointment is associated to.</li>
<li><i>See Chart</i>: Open the patient's Chart Module.</li>
<li><i>Send to Pinboard</i>: Schedule the planned appointment by sending it to the <a href="apptpinboard.html">Pinboard</a>. Alternatively, double-click the appointment to open it and send it to the Pinboard.</li>
</ul>
<p>Once scheduled, planned appointments are no longer listed in the tracker. They are still listed in the Chart Module, Planned Appts tab until they are marked done or deleted.</p>
</div>
</div>
</body>
</html>```
