# File: ./www.opendental.com/manual/appointmentlists.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Appointment Lists</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('appointmentlists','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/appointmentlists.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/appointmentlists.html" >v24.2</option><option value="https://www.opendental.com/manual241/appointmentlists.html" >v24.1</option><option value="https://www.opendental.com/manual233/appointmentlists.html" >v23.3</option><option value="https://www.opendental.com/manual232/appointmentlists.html" >v23.2</option><option value="https://www.opendental.com/manual231/appointmentlists.html" >v23.1</option><option value="https://www.opendental.com/manual224/appointmentlists.html" >v22.4</option><option value="https://www.opendental.com/manual223/appointmentlists.html" >v22.3</option><option value="https://www.opendental.com/manual222/appointmentlists.html" >v22.2</option><option value="https://www.opendental.com/manual221/appointmentlists.html" >v22.1</option><option value="https://www.opendental.com/manual214/appointmentlists.html" >v21.4</option><option value="https://www.opendental.com/manual213/appointmentlists.html" >v21.3</option><option value="https://www.opendental.com/manual212/appointmentlists.html" >v21.2</option><option value="https://www.opendental.com/manual211/appointmentlists.html" >v21.1</option><option value="https://www.opendental.com/manual205/appointmentlists.html" >v20.5</option><option value="https://www.opendental.com/manual204/appointmentlists.html" >v20.4</option><option value="https://www.opendental.com/manual203/appointmentlists.html" >v20.3</option><option value="https://www.opendental.com/manual202/appointmentlists.html" >v20.2</option><option value="https://www.opendental.com/manual201/appointmentlists.html" >v20.1</option><option value="https://www.opendental.com/manual194/appointmentlists.html" >v19.4</option><option value="https://www.opendental.com/manual193/appointmentlists.html" >v19.3</option><option value="https://www.opendental.com/manual192/appointmentlists.html" >v19.2</option><option value="https://www.opendental.com/manual191/appointmentlists.html" >v19.1</option><option value="https://www.opendental.com/manual184/appointmentlists.html" >v18.4</option><option value="https://www.opendental.com/manual183/appointmentlists.html" >v18.3</option><option value="https://www.opendental.com/manual182/appointmentlists.html" >v18.2</option><option value="https://www.opendental.com/manual181/appointmentlists.html" >v18.1</option><option value="https://www.opendental.com/manual174/appointmentlists.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Appointment Lists</p></div>
<div class="GeneralPageContent">
<p>Appointment lists can be used to manage, schedule, and track appointments.</p>
<p>In the <a href="appointments.html">Appointments Module</a>, in the Toolbar, click <b>Lists</b>.</p>
<img src="images/appointmentLists.png" width="668" height="521"/><p><a href="recalllist.html">Recall List</a>: A list of patients who are due for a recall appointment that are not yet scheduled. Use the list to schedule appointments and send reminders.</p>
<p><a href="confirmationlist.html">Confirmation List</a>: A list of all patients who have upcoming appointments. Use the list to confirm appointments and track confirmation status.</p>
<p><a href="appttracker.html">Planned Appointment Tracker</a>: A list of all <a href="apptplanned.html">Planned Appointments</a> that have not been scheduled. Use the list to schedule planned appointments and track appointment status. Every appointment for treatment should be based on a Planned Appointment so that any rescheduling, broken, or deleted appointments are not lost. This list should be long and regularly reviewed. It should not include recall appointments.</p>
<p><a href="unscheduled.html">Unscheduled List</a>: A short list of patients who were no-shows or cancelled without rescheduling. Send appointments here as a quick reminder to contact the patient to reschedule. Appointments should not stay on this list long. The list should not include recall appointments.</p>
<p><a href="asaplist.html">ASAP List</a>: A list of patients who would like to come in as soon as an opening is available. Use the list to identify patients and notify them of openings. Scheduled appointments, Planned Appointments, and unscheduled recall appointments can all be marked as ASAP.</p>
<p><a href="ehrcpoeradapprove.html">EHR Radiology Order List</a>: For EHR only. A list of the logged-on provider's upcoming x-ray procedures that have not yet been approved (marked <i>is CPOE</i>). Use the list to quickly approve radiology orders. These procedures count towards the denominator of the CPOE Radiology Order measure and must be approved by the EHR provider to count in the numerator.</p>
<p><a href="insverifylist.html">Insurance Verification List</a>: A list of patients who have upcoming appointments and need their patient eligibility or insurance plan benefits verified. Use it to track and manage verification. Useful for offices that verify insurance prior to upcoming appointments.</p>
</div>
</div>
</body>
</html>```
