# File: ./www.opendental.com/manual/asaplist.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ASAP List</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('asaplist','appointmentlists','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/asaplist.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/asaplist.html" >v24.2</option><option value="https://www.opendental.com/manual241/asaplist.html" >v24.1</option><option value="https://www.opendental.com/manual233/asaplist.html" >v23.3</option><option value="https://www.opendental.com/manual232/asaplist.html" >v23.2</option><option value="https://www.opendental.com/manual231/asaplist.html" >v23.1</option><option value="https://www.opendental.com/manual224/asaplist.html" >v22.4</option><option value="https://www.opendental.com/manual223/asaplist.html" >v22.3</option><option value="https://www.opendental.com/manual222/asaplist.html" >v22.2</option><option value="https://www.opendental.com/manual221/asaplist.html" >v22.1</option><option value="https://www.opendental.com/manual214/asaplist.html" >v21.4</option><option value="https://www.opendental.com/manual213/asaplist.html" >v21.3</option><option value="https://www.opendental.com/manual212/asaplist.html" >v21.2</option><option value="https://www.opendental.com/manual211/asaplist.html" >v21.1</option><option value="https://www.opendental.com/manual205/asaplist.html" >v20.5</option><option value="https://www.opendental.com/manual204/asaplist.html" >v20.4</option><option value="https://www.opendental.com/manual203/asaplist.html" >v20.3</option><option value="https://www.opendental.com/manual202/asaplist.html" >v20.2</option><option value="https://www.opendental.com/manual201/asaplist.html" >v20.1</option><option value="https://www.opendental.com/manual194/asaplist.html" >v19.4</option><option value="https://www.opendental.com/manual193/asaplist.html" >v19.3</option><option value="https://www.opendental.com/manual192/asaplist.html" >v19.2</option><option value="https://www.opendental.com/manual191/asaplist.html" >v19.1</option><option value="https://www.opendental.com/manual184/asaplist.html" >v18.4</option><option value="https://www.opendental.com/manual183/asaplist.html" >v18.3</option><option value="https://www.opendental.com/manual182/asaplist.html" >v18.2</option><option value="https://www.opendental.com/manual181/asaplist.html" >v18.1</option><option value="https://www.opendental.com/manual174/asaplist.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ASAP List</p></div>
<div class="GeneralPageContent">
<p>The ASAP List shows patients who would like to be contacted when an earlier appointment becomes available. </p>
<p>In <a href="appointmentlists.html">Appointment Lists</a>, click <b>ASAP</b>.</p>
<img src="images/asapList.png" width="915" height="416"/><p>The ASAP List can remain open while other areas of Open Dental are open. Use the list to identify patients and quickly notify them about available openings. Appointments can also be scheduled from here.</p>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynClCgYyiViHUQRMECyrtKE6l">ASAP List</a>.</p>
<p><div class="Note">Note: Sign up for these eServices to easily send and manage ASAP notifications: <ul>
<li><a href="../site/websched.html">Web Sched ASAP</a>: Send ASAP messages about available openings and allow patients to reschedule online.</li>
<li><a href="../site/textintegrated.html">Integrated Texting Feature</a>: Send text messages about ASAP openings.</li>
</ul>
</div>
</p>
<p class="MarginBottomZero">Double-click an appointment to view appointment details. Right-click an appointment to view quick options: </p>
<ul class="MarginBottomGap">
<li>Select Patient: Open the patient's record with the current module active.</li>
<li>See Chart: Open the patient's record with the Chart Module active.</li>
<li>Send to Pinboard: Send the appointment to the Pinboard for scheduling.</li>
<li>Remove from ASAP: Remove the appointment's ASAP status, thus removing it from the ASAP List.</li>
</ul>
<p class="MarginBottomZero">There are four ways to place a patient on the ASAP List:  </p>
<ul class="MarginBottomGap">
<li>Mark a scheduled appointment as ASAP. See <a href="aptedit.html">Edit Appointment</a>.</li>
<li>Mark a Planned Appointment as ASAP. See <a href="apptplanned.html">Planned Appointments</a>.</li>
<li>Mark an Unscheduled Appointment as ASAP. In the <a href="unscheduled.html">Unscheduled List</a>, double-click the appointment to mark it as ASAP.</li>
<li>Mark Recall for a patient as ASAP. See <a href="recall.html">Recall</a> or <a href="recalllist.html">Recall List</a>.</li>
</ul>
<h2>Settings</h2>
<p class="MarginBottomZero">To narrow results on the Appointments or Unscheduled Recalls tab, select other filter criteria then click <b>Refresh</b> to update. </p>
<ul class="MarginBottomGap">
<li><b>Provider</b>: Only view appointments for a specific <a href="providers.html">Provider</a>.</li>
<li><b>Clinic</b>: Only view appointments for a specific <a href="clinics.html">Clinic</a>.</li>
<li><b>Site</b>: Only view appointments for a specific site. See <a href="sites.html">Site List</a>.</li>
<li><b>Code Range</b>: Only view appointments with specified procedure codes attached.</li>
</ul>
<p><b>Text</b>: Only available when Integrated Texting is enabled. See Send an ASAP Text Message below.</p>
<p class="MarginBottomZero"><b>Web Sched ASAP Sign up/ Send / History</b>: </p>
<ul class="MarginBottomGap">
<li><b>Sign up</b>: Sign up for <a href="../site/websched.html">Web Sched ASAP</a> and/or <a href="../site/textintegrated.html">Integrated Texting Feature</a>. See <a href="eservicessignup.html">eServices Signup</a>. Once Web Sched ASAP is turned on, Send/History buttons are displayed instead.</li>
<li><b>Send</b>: Send is only an option when the ASAP List is accessed by right-clicking on an available time slot in the Appointment schedule and selecting <i>Text ASAP List</i>. See <a href="webschedasap.html">Web Sched ASAP</a>.</li>
<li><b>History</b>: View <a href="webschedasaphistory.html">Web Sched ASAP History</a>.</li>
</ul>
<p><b>Print List</b>: Print the list of the open tab (Appointments or Unscheduled Recalls).</p>
<h2>Appointments Tab</h2>
<img src="images/asapListApptTab.png" width="915" height="229"/><p class="MarginBottomZero">By default, the Appointments tab opens. This lists scheduled, unscheduled, planned, and broken appointments that have been marked ASAP.  </p>
<ul class="MarginBottomGap">
<li><b>Appointment status</b>: Only view appointments with selected appointment status.</li>
<li><b>Show</b>: Filter the list by: <ul>
<li><b>All Appointments</b>: Display all appointments regardless of procedure or appointment type. </li>
<li><b>Non-Hygiene Appointments</b>: Display only appointments not marked <i>Is Hygiene</i>. See <a href="aptedit.html">Edit Appointment</a>. </li>
<li><b>Hygiene Appointments</b>: Display only appointments marked <i>Is Hygiene</i>.</li>
</ul>
</li>
</ul>
<h2>Unscheduled Recalls Tab</h2>
<img src="images/asapListRecallsTab.png" width="915" height="185"/><p class="MarginBottomZero">Click the Unscheduled Recalls tab to view patients with a recall marked <i>Schedule ASAP</i> on the <a href="recall.html">Edit Recall</a> window, even if they have received a recall reminder already.  </p>
<ul class="MarginBottomGap">
<li><b>Start / End Date</b>: Determines which appointments are listed based on recall due date. Defaults to the current week.</li>
<li><b>Group Families</b>: Group members within a family together. Defaults to the setting in <a href="recallsetup.html">Setup Recall</a>.</li>
<li><b>Show Reminders</b>: Only list patients with a specific number of recall reminders.</li>
</ul>
<h2>Send an ASAP Text Message</h2>
<p>To enable this option, sign up for Integrated Texting.</p>
<ol>
<li>(Optional) In the ASAP List, highlight the patient(s) to send a text message. <div class="Note">Note: If patients are selected before clicking Text, only the selected patients are texted. If patients are not selected first, all patients with a wireless number are auto-selected.</div>
</li>
<li>Click <b>Text</b>. <br/><img src="images/webSchedASAPManualText.png" width="236" height="184" class="ImageInParagraph"/></li>
<li>Enter the date and time available to schedule the appointment, then click <b>OK</b>. <br/><img src="images/webSchedASAPTextReview.png" width="379" height="435" class="ImageInParagraph"/></li>
<li>Review the text message and modify if needed. The default text message is the Text Manual message. See <a href="asapmsgs.html">ASAP Message Setup</a>.</li>
<li>Click <b>Send</b>. A commlog is added to each patient's account.</li>
</ol>
</div>
</div>
</body>
</html>```
