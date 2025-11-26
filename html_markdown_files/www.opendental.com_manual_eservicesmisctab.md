# File: ./www.opendental.com/manual/eservicesmisctab.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eServices Misc</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eservicesmisctab','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eservicesmisctab.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eservicesmisctab.html" >v24.2</option><option value="https://www.opendental.com/manual241/eservicesmisctab.html" >v24.1</option><option value="https://www.opendental.com/manual233/eservicesmisctab.html" >v23.3</option><option value="https://www.opendental.com/manual232/eservicesmisctab.html" >v23.2</option><option value="https://www.opendental.com/manual231/eservicesmisctab.html" >v23.1</option><option value="https://www.opendental.com/manual224/eservicesmisctab.html" >v22.4</option><option value="https://www.opendental.com/manual223/eservicesmisctab.html" >v22.3</option><option value="https://www.opendental.com/manual222/eservicesmisctab.html" >v22.2</option><option value="https://www.opendental.com/manual221/eservicesmisctab.html" >v22.1</option><option value="https://www.opendental.com/manual214/eservicesmisctab.html" >v21.4</option><option value="https://www.opendental.com/manual213/eservicesmisctab.html" >v21.3</option><option value="https://www.opendental.com/manual212/eservicesmisctab.html" >v21.2</option><option value="https://www.opendental.com/manual211/eservicesmisctab.html" >v21.1</option><option value="https://www.opendental.com/manual205/eservicesmisctab.html" >v20.5</option><option value="https://www.opendental.com/manual204/eservicesmisctab.html" >v20.4</option><option value="https://www.opendental.com/manual203/eservicesmisctab.html" >v20.3</option><option value="https://www.opendental.com/manual202/eservicesmisctab.html" >v20.2</option><option value="https://www.opendental.com/manual201/eservicesmisctab.html" >v20.1</option><option value="https://www.opendental.com/manual194/eservicesmisctab.html" >v19.4</option><option value="https://www.opendental.com/manual193/eservicesmisctab.html" >v19.3</option><option value="https://www.opendental.com/manual192/eservicesmisctab.html" >v19.2</option><option value="https://www.opendental.com/manual191/eservicesmisctab.html" >v19.1</option><option value="https://www.opendental.com/manual184/eservicesmisctab.html" >v18.4</option><option value="https://www.opendental.com/manual183/eservicesmisctab.html" >v18.3</option><option value="https://www.opendental.com/manual182/eservicesmisctab.html" >v18.2</option><option value="https://www.opendental.com/manual181/eservicesmisctab.html" >v18.1</option><option value="https://www.opendental.com/manual174/eservicesmisctab.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eServices Misc</p></div>
<div class="GeneralPageContent">
<p>eService Miscellaneous settings set the time window for texts and emails sent via Automated Messaging or Web Sched Recall.</p>
<p>In <a href="eservicessetup.html">eServices Setup</a>, click <b>Miscellaneous</b>.</p>
<img src="images/eservicesMisc.png" width="878" height="389"/><h2>Automated eServices Schedule</h2>
<p class="MarginBottomZero">The automated eServices schedule determines the time window during which <a href="automatedmessaging.html">Automated Messaging</a> or <a href="webschedrecallsetup.html">Web Sched Recall</a> reminders (including those manually sent from the <a href="recalllist.html">Recall List</a>) can be sent.  </p>
<ul class="MarginBottomGap">
<li><b>Start Time</b>: The earliest a due message can be sent.</li>
<li><b>End Time</b>: The latest a due message can be sent.</li>
</ul>
<p>A limited Start Time/End Time (e.g., 7 AM - 8 AM) forces the eConnector to queue up the messages that would be sent later in the day and instead send within the last few minutes of the run time.</p>
<p>The <a href="econnector.html">eConnector</a> must also be running during the time window. Messages due after the End time each day are sent at the End time. Same day eReminders that are due within one hour of the Start time (or before) are sent one hour before the appointment, regardless of Start time.</p>
<p class="MarginBottomZero">Hints: </p>
<ul class="MarginBottomGap">
<li>To send messages at all hours of the day, regardless of time, set the Start and End time to the exact same time.</li>
<li>eReminders sent out same day follow the rule set (e.g., 3 hour reminder), unless it breaks the Start Time. In these cases, it only sends out 1 hour prior to the Start Time (e.g., If the appointments and Start Time are at 8 AM, the 3 hour reminder sends out at 7 AM.)</li>
<li>To preview 24 hour run times, change the workstation clock settings to 24 HR.</li>
</ul>
<h2>Same-Day Reminder Exception</h2>
<p>Normally, eReminders follow the Automated eServices Schedule, and are not sent outside of this window. The exception to this rule applies to Same Day eReminder rules, when the appointment begins before the Automated eServices Schedule, in which case the eReminder can send up to one hour before the appointment. </p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Example 1: The Automated eServices Schedule is 8:00 AM to 8:00 PM. A 2-hour same-day eReminder is set. If a patient has an appointment at 7:00 AM, they receive their eReminder at 6:00 AM.</li>
<li>Example 2: The Automated eServices Schedule is 8:00 AM to 8:00 PM. A 1-hour same-day eReminder is set. If a patient has an appointment at 8:00 AM, they receive their eReminder at 7:00 AM.</li>
</ul>
<h2>Date Format</h2>
<p>Select the date format to apply in email and text messages (eReminders, eConfirmations, manual confirmations, Web Sched ASAP messages, ASAP List text messages, Web Sched Recall reminders, Web Sched Notify messages, Patient Portal Invites, and email templates that contain appointment date tags).</p>
<p class="MarginBottomZero">If using a Custom date format, use the following information as a guide: </p>
<ul class="MarginBottomGap">
<li>M = month number without a leading zero</li>
<li>MM = month number with a leading zero</li>
<li>MMM = abbreviated month name</li>
<li>MMMM = full month name</li>
<li>d = day of month number without a leading zero</li>
<li>dd = day of month number with a leading zero</li>
<li>ddd = abbreviated day of week</li>
<li>dddd = full day of week</li>
<li>yy = two digit year</li>
<li>yyyy = four digit year</li>
</ul>
</div>
</div>
</body>
</html>```
