# File: ./www.opendental.com/manual232/webschedasaphistory.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Web Sched ASAP History</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('webschedasaphistory','webschedasap','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/webschedasaphistory.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/webschedasaphistory.html" >v24.2</option><option value="https://www.opendental.com/manual241/webschedasaphistory.html" >v24.1</option><option value="https://www.opendental.com/manual233/webschedasaphistory.html" >v23.3</option><option value="https://www.opendental.com/manual232/webschedasaphistory.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/webschedasaphistory.html" >v23.1</option><option value="https://www.opendental.com/manual224/webschedasaphistory.html" >v22.4</option><option value="https://www.opendental.com/manual223/webschedasaphistory.html" >v22.3</option><option value="https://www.opendental.com/manual222/webschedasaphistory.html" >v22.2</option><option value="https://www.opendental.com/manual221/webschedasaphistory.html" >v22.1</option><option value="https://www.opendental.com/manual214/webschedasaphistory.html" >v21.4</option><option value="https://www.opendental.com/manual213/webschedasaphistory.html" >v21.3</option><option value="https://www.opendental.com/manual212/webschedasaphistory.html" >v21.2</option><option value="https://www.opendental.com/manual211/webschedasaphistory.html" >v21.1</option><option value="https://www.opendental.com/manual205/webschedasaphistory.html" >v20.5</option><option value="https://www.opendental.com/manual204/webschedasaphistory.html" >v20.4</option><option value="https://www.opendental.com/manual203/webschedasaphistory.html" >v20.3</option><option value="https://www.opendental.com/manual202/webschedasaphistory.html" >v20.2</option><option value="https://www.opendental.com/manual201/webschedasaphistory.html" >v20.1</option><option value="https://www.opendental.com/manual194/webschedasaphistory.html" >v19.4</option><option value="https://www.opendental.com/manual193/webschedasaphistory.html" >v19.3</option><option value="https://www.opendental.com/manual192/webschedasaphistory.html" >v19.2</option><option value="https://www.opendental.com/manual191/webschedasaphistory.html" >v19.1</option><option value="https://www.opendental.com/manual184/webschedasaphistory.html" >v18.4</option><option value="https://www.opendental.com/manual183/webschedasaphistory.html" >v18.3</option><option value="https://www.opendental.com/manual182/webschedasaphistory.html" >v18.2</option><option value="https://www.opendental.com/manual181/webschedasaphistory.html" >v18.1</option><option value="https://www.opendental.com/manual174/webschedasaphistory.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Web Sched ASAP History</p></div>
<div class="GeneralPageContent">
<p>When using Web Sched ASAP, track messages that have been as well as actions taken by the patient.</p>
<p>On the <a href="asaplist.html">ASAP List</a>, click<b> History</b>.</p>
<img src="images/webSchedASAPHistory.gif" width="845" height="490"/><p><div class="Note">Note: The <b>History</b> button only displays when using <a href="webschedasap.html">Web Sched ASAP</a>.</div>
</p>
<p><b>From / To</b>: Select the date range of messages to view, based on the Date Entry. Click the down arrow to select a date from a calendar; click the arrow again to close the calendar.</p>
<p><b>Clinic</b>: Filter messages by clinic. </p>
<p class="MarginBottomZero"><b>Web Sched ASAP Messages</b>: A list of Web Sched ASAP messages that meet the filter criteria. For each message, the following details show. Use the horizontal scroll bar to view details not initially visible. </p>
<ul class="MarginBottomGap">
<li>Patient: Patient name.</li>
<li>Status: The status of the Web Sched ASAP notification.  <ul>
<li>Sent: Message was sent to the patient.</li>
<li>Failed: Message did not send.</li>
<li>Appointment made: Patient accepted the appointment opening / rescheduled online.</li>
<li>Chose different time: Patient did not accept the opening offered in the message, but did accept a different opening and rescheduled online.</li>
<li>Viewed but taken: Patient attempted to accept the opening but open time slot was claimed.</li>
<li>Declined time slot: Patient declined the appointment. </li>
<li>Viewed: Patient viewed message or the opening.</li>
</ul>
</li>
<li>SMS Send Time: Date and time the text message sent.</li>
<li>Email Send Time: Date and time the email message sent.</li>
<li>Clinic: Associated clinic.</li>
<li>Original Appt Time: Date and time of the originally scheduled appointment.</li>
<li>Slot Start: The start time of the available opening sent in the message.</li>
<li>Slot Stop: The end time of the available opening sent in the message.</li>
<li>Date Entry: The date and time a user clicked Send to send the Web Sched ASAP notification.</li>
<li>SMS Message Text: The text message sent.</li>
<li>Email Message Text: The email message sent.</li>
<li>Note: Additional information about the message, such as why a message didn't send.</li>
</ul>
<p><b>Appointment slots filled</b>: The number of available time slots that were filled by patients rescheduling online via Web Sched ASAP.</p>
<p><b>Texts sent</b>: The number of Web Sched ASAP text messages that were sent.</p>
</div>
</div>
</body>
</html>```
