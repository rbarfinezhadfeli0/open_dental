# File: ./www.opendental.com/manual243/odtouchappts.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ODTouch: Appointments</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('odtouchappts','odtouchhome','odtouchsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/odtouchappts.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/odtouchappts.html" >v24.2</option><option value="https://www.opendental.com/manual241/odtouchappts.html" >v24.1</option><option value="https://www.opendental.com/manual233/odtouchappts.html" >v23.3</option><option value="https://www.opendental.com/manual232/odtouchappts.html" >v23.2</option><option value="https://www.opendental.com/manual231/odtouchappts.html" >v23.1</option><option value="https://www.opendental.com/manual224/odtouchappts.html" >v22.4</option><option value="https://www.opendental.com/manual223/odtouchappts.html" >v22.3</option><option value="https://www.opendental.com/manual222/odtouchappts.html" >v22.2</option><option value="https://www.opendental.com/manual221/odtouchappts.html" >v22.1</option><option value="https://www.opendental.com/manual214/odtouchappts.html" >v21.4</option><option value="https://www.opendental.com/manual213/odtouchappts.html" >v21.3</option><option value="https://www.opendental.com/manual212/odtouchappts.html" >v21.2</option><option value="https://www.opendental.com/manual211/odtouchappts.html" >v21.1</option><option value="https://www.opendental.com/manual205/odtouchappts.html" >v20.5</option><option value="https://www.opendental.com/manual204/odtouchappts.html" >v20.4</option><option value="https://www.opendental.com/manual203/odtouchappts.html" >v20.3</option><option value="https://www.opendental.com/manual202/odtouchappts.html" >v20.2</option><option value="https://www.opendental.com/manual201/odtouchappts.html" >v20.1</option><option value="https://www.opendental.com/manual194/odtouchappts.html" >v19.4</option><option value="https://www.opendental.com/manual193/odtouchappts.html" >v19.3</option><option value="https://www.opendental.com/manual192/odtouchappts.html" >v19.2</option><option value="https://www.opendental.com/manual191/odtouchappts.html" >v19.1</option><option value="https://www.opendental.com/manual184/odtouchappts.html" >v18.4</option><option value="https://www.opendental.com/manual183/odtouchappts.html" >v18.3</option><option value="https://www.opendental.com/manual182/odtouchappts.html" >v18.2</option><option value="https://www.opendental.com/manual181/odtouchappts.html" >v18.1</option><option value="https://www.opendental.com/manual174/odtouchappts.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ODTouch: Appointments</p></div>
<div class="GeneralPageContent">
<p>Manage the daily schedule by viewing, creating, and editing appointments.</p>
<p>From the <a href="odtouchhome.html">ODTouch: Home Screen</a>, tap Appts.</p>
<img src="images/odtouchAppts.png" width="769" height="501"/><h2>Appointment Views</h2>
<p>Tap the caret at the top to change the Appointment View or to view unscheduled time. Tap the calendar to change days. Tap <b>Now</b> to return to today's date.</p>
<p>The currently selected Appointment View displays at the top in parentheses.</p>
<p>Edit or create mobile views in <a href="appointmentvieweditwindow.html">Appointment View Edit</a>. </p>
<h2>Create an Appointment</h2>
<p class="MarginBottomZero">Option 1: </p>
<ol class="MarginBottomGap">
<li>Tap <b>+</b> on an available time slot. </li>
<li>Select the desired start time. </li>
<li>Edit the appointment as needed.</li>
<li>Tap <b>Save</b> to schedule the appointment. </li>
</ol>
<p class="MarginBottomZero">Option 2: </p>
<ol class="MarginBottomGap">
<li>Tap <b>New Appt</b>. </li>
<li>Add appointment details (patient, procedures, provider, etc.) </li>
<li>Tap <b>Save</b>. </li>
<li>The appointment is added to the Pinboard. See Move an Appointment below to schedule it. </li>
</ol>
<p><div class="Note">Note: When creating a new appointment, tap the Patient Name to change patient if needed. </div>
</p>
<h2>Move an Appointment</h2>
<p class="MarginBottomZero">To move an appointment to a new time: </p>
<ol class="MarginBottomGap">
<li>Tap the three dots on an appointment, then tap <b>Copy to Pinboard</b>. </li>
<li>Tap an open time slot on the calendar (<b>+</b>) or use the Appointment Search. </li>
<li>Verify appointment information in the Edit Appointment Screen then tap <b>Save</b>. The appointment will be moved to the new time slot.</li>
</ol>
<h2>Edit Appointment Screen</h2>
<p class="MarginBottomZero">To add or edit an appointment: </p>
<ul class="MarginBottomGap">
<li>From the Home Screen, tap the appointment on the left and select <b>Edit Appointment</b>. </li>
<li>From the Appointments Home Screen, tap an existing scheduled appointment.</li>
<li>From the Appointments Home Screen, tap <b>+ </b>on an open time slot. </li>
</ul>
<img src="images/odtouchApptsEdit.png" width="767" height="508"/><p>Settings in the Appointment Edit Screen match settings found in the <a href="aptedit.html">Edit Appointment</a> window in Open Dental. </p>
<h2>Search Available Appointment Times</h2>
<p class="MarginBottomZero">To find available appointment times in the future: </p>
<ol class="MarginBottomGap">
<li>Copy the appointment to the Pinboard. </li>
<li>Tap <b>Search</b>. Filters match the filters found in the <a href="apptpinboard.html">Pinboard</a>, Advanced Appointment Search in Open Dental.</li>
<li>Tap a result. </li>
<li>Tap an available time slot (<b>+</b>) to schedule the appointment. </li>
</ol>
<img src="images/odtouchApptSearch.png" width="769" height="501"/><h2>Add Procedures to an Appointment</h2>
<p class="MarginBottomZero">To add procedures to an appointment: </p>
<ol class="MarginBottomGap">
<li>In the Procedures on this Appointment area, tap <b>+</b>.</li>
<img src="images/odtouchApptAddProc.png" width="767" height="508"/><li>Existing charted procedures list. Tap the <b>Attach</b> checkbox to add the procedure to the appointment. </li>
<li>Tap <b>Chart</b> to chart new procedures. See <a href="odtouchchart.html">ODTouch: Chart</a> for details.</li>
<li>Tap <b>OK</b> when procedure selection is complete.</li>
</ol>
<p class="MarginBottomZero">Alternatively, </p>
<ul class="MarginBottomGap">
<li> from the Appointment Edit screen, tap <b>QUICK ADD PROCEDURES</b> on the right to add from the Appt Procs Quick Add list. </li>
<li>from the Appointment Edit screen, select an Appointment Type with procedures associated.</li>
</ul>
<h2>Complete an Appointment</h2>
<p>Tap the three dots on the appointment, then tap <b>Set Complete</b>.</p>
<h2>Delete an Appointment</h2>
<p>Tap the three dots on the appointment, then tap <b>Delete Appointment</b>.</p>
<h2>Select a Patient</h2>
<p>Tap the three dots on the appointment, then tap <b>Select Patient</b>.</p>
<h2>View Lab Cases</h2>
<p>Tap <b># LAB CASES ATTACHED</b> on the right to open lab cases. </p>
<img src="images/odtouchLabCases.png" width="767" height="508"/><p>Existing lab cases list on the left. Tap an existing lab case to view or edit. Tap <b>+</b> to create a new lab case. </p>
<p>Fields in this screen mimic the fields found in the Edit <a href="labcaseedit.html">Lab Case</a> window in Open Dental. </p>
</div>
</div>
</body>
</html>```
