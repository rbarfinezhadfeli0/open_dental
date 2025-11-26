# File: ./www.opendental.com/manual/schedulesetupexamples.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Schedule Setup Examples</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('schedulesetupexamples','schedule','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/schedulesetupexamples.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/schedulesetupexamples.html" >v24.2</option><option value="https://www.opendental.com/manual241/schedulesetupexamples.html" >v24.1</option><option value="https://www.opendental.com/manual233/schedulesetupexamples.html" >v23.3</option><option value="https://www.opendental.com/manual232/schedulesetupexamples.html" >v23.2</option><option value="https://www.opendental.com/manual231/schedulesetupexamples.html" >v23.1</option><option value="https://www.opendental.com/manual224/schedulesetupexamples.html" >v22.4</option><option value="https://www.opendental.com/manual223/schedulesetupexamples.html" >v22.3</option><option value="https://www.opendental.com/manual222/schedulesetupexamples.html" >v22.2</option><option value="https://www.opendental.com/manual221/schedulesetupexamples.html" >v22.1</option><option value="https://www.opendental.com/manual214/schedulesetupexamples.html" >v21.4</option><option value="https://www.opendental.com/manual213/schedulesetupexamples.html" >v21.3</option><option value="https://www.opendental.com/manual212/schedulesetupexamples.html" >v21.2</option><option value="https://www.opendental.com/manual211/schedulesetupexamples.html" >v21.1</option><option value="https://www.opendental.com/manual205/schedulesetupexamples.html" >v20.5</option><option value="https://www.opendental.com/manual204/schedulesetupexamples.html" >v20.4</option><option value="https://www.opendental.com/manual203/schedulesetupexamples.html" >v20.3</option><option value="https://www.opendental.com/manual202/schedulesetupexamples.html" >v20.2</option><option value="https://www.opendental.com/manual201/schedulesetupexamples.html" >v20.1</option><option value="https://www.opendental.com/manual194/schedulesetupexamples.html" >v19.4</option><option value="https://www.opendental.com/manual193/schedulesetupexamples.html" >v19.3</option><option value="https://www.opendental.com/manual192/schedulesetupexamples.html" >v19.2</option><option value="https://www.opendental.com/manual191/schedulesetupexamples.html" >v19.1</option><option value="https://www.opendental.com/manual184/schedulesetupexamples.html" >v18.4</option><option value="https://www.opendental.com/manual183/schedulesetupexamples.html" >v18.3</option><option value="https://www.opendental.com/manual182/schedulesetupexamples.html" >v18.2</option><option value="https://www.opendental.com/manual181/schedulesetupexamples.html" >v18.1</option><option value="https://www.opendental.com/manual174/schedulesetupexamples.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Schedule Setup Examples</p></div>
<div class="GeneralPageContent">
<p>Performing <a href="schedule.html">Schedule Setup</a> varies on the office workflow.</p>
<p class="MarginBottomZero">There are two recommended options for setting up schedules. </p>
<ul class="MarginBottomGap">
<li>Each Provider is Assigned Their Own Operatory</li>
<li>Providers Move Between Operatories</li>
</ul>
<p>See below for details on each option and how they affect the <a href="appointments.html">Appointments Module</a> and <a href="apptpinboard.html">Pinboard</a>, Appointment Search.</p>
<h2>Each Provider is Assigned Their Own Operatory</h2>
<p>When each provider remains in their operatory, perform the setup as follows.</p>
<p><b>Schedule</b>: Do not assign providers to operatories. Instead, set the provider's available time and select <i>not specified. </i><br/><img src="images/scheduleExample1.png" width="915" height="267" class="ImageInParagraph"/></p>
<p><b>Operatories</b>: Assign each provider to their corresponding operatory. <br/><img src="images/scheduleOperatoryExample1.png" width="865" height="341" class="ImageInParagraph"/></p>
<p class="MarginBottomZero"><b>Appointments Module</b>: The Appointments Module displays the provider in each operatory with their corresponding provider color.  </p>
<ul class="MarginBottomGap">
<li>To view provider time bars on the left, select each provider under <i>View Provider Bars</i> in the <a href="appointmentvieweditwindow.html">Appointment View Edit</a>.</li>
</ul>
<img src="images/scheduleApptExample1.png" width="765" height="284"/><p class="MarginBottomZero"><b>Appointment Search</b>:  </p>
<ul class="MarginBottomGap">
<li>When the <i>Search Behavior</i> preference is set to <i>Provider Time</i>, the Appointment Search only considers available blocks of time for the provider (i.e., colored blocks). In the example below, three blocks of provider time are open on the schedule, so the appointment can be scheduled in when <i>Appointments allow overlap</i> is enabled.</li>
<img src="images/scheduleSearchExampleProvTime1.png" width="915" height="412"/><li>When the <i>Search Behavior</i> preference is set to <i>Provider Time Operatory</i>, the Appointment Search considers both available provider time and available operatory time. In the example below, the provider is set as the primary provider on the Hygiene operatory and there are three blocks of time available for the appointment to be scheduled.</li>
<img src="images/scheduleSearchExampleOpTime2.png" width="915" height="411"/></ul>
<h2>Providers Move Between Operatories</h2>
<p>When providers share operatories during the day, or alternate operatories by day, perform the setup as follows.</p>
<p><b>Schedule</b>: Assign providers to operatories for specified times. <br/><img src="images/scheduleExample2.png" width="915" height="281" class="ImageInParagraph"/></p>
<p><b>Operatories</b>: Do not assign providers to operatories. Leave each provider as<i> None</i>.</p>
<img src="images/scheduleOperatoryExample2.png" width="872" height="306"/><p class="MarginBottomZero"><b>Appointments Module</b>: The Appointments Module displays the operatory headers in gray. Each operatory includes the provider time for the provider scheduled.  </p>
<ul class="MarginBottomGap">
<li>To view provider time bars on the left, select each provider under <i>View Provider Bars</i> in the <a href="appointmentvieweditwindow.html">Appointment View Edit</a>.</li>
</ul>
<img src="images/scheduleApptExample2.png" width="751" height="283"/><p class="MarginBottomZero"><b>Appointment Search</b>:  </p>
<ul class="MarginBottomGap">
<li>When the <i>Search Behavior</i> preference is set to <i>Provider Time</i>, the Appointment Search only considers available blocks of time for the provider (i.e., colored blocks). In the example below, three blocks of provider time are open on the schedule, so the appointment can be scheduled in when <i>Appointments allow overlap</i> is enabled.<br/><img src="images/scheduleSearchExampleProvTime2.png" width="915" height="412" class="ImageInParagraph"/></li>
<li>When the <i>Search Behavior</i> preference is set to <i>Provider Time Operatory</i>, the Appointment Search considers available operatory for the scheduled provider only. It ignores provider time bars, as displayed in the example below.</li>
<img src="images/scheduleSearchExampleOpTime3.png" width="915" height="475"/></ul>
<h2>Notes or Overflow Operatories</h2>
<p>Some practices keep an additional operatory on the schedule for note keeping or overflow appointments. Do not assign or schedule a provider to these operatories. This ensures the Appointment Search excludes these additional operatories from displaying as available time.</p>
</div>
</div>
</body>
</html>```
