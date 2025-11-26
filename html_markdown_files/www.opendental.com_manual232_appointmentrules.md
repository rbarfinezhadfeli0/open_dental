# File: ./www.opendental.com/manual232/appointmentrules.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Appointment Rules</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('appointmentrules','+appointments','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/appointmentrules.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/appointmentrules.html" >v24.2</option><option value="https://www.opendental.com/manual241/appointmentrules.html" >v24.1</option><option value="https://www.opendental.com/manual233/appointmentrules.html" >v23.3</option><option value="https://www.opendental.com/manual232/appointmentrules.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/appointmentrules.html" >v23.1</option><option value="https://www.opendental.com/manual224/appointmentrules.html" >v22.4</option><option value="https://www.opendental.com/manual223/appointmentrules.html" >v22.3</option><option value="https://www.opendental.com/manual222/appointmentrules.html" >v22.2</option><option value="https://www.opendental.com/manual221/appointmentrules.html" >v22.1</option><option value="https://www.opendental.com/manual214/appointmentrules.html" >v21.4</option><option value="https://www.opendental.com/manual213/appointmentrules.html" >v21.3</option><option value="https://www.opendental.com/manual212/appointmentrules.html" >v21.2</option><option value="https://www.opendental.com/manual211/appointmentrules.html" >v21.1</option><option value="https://www.opendental.com/manual205/appointmentrules.html" >v20.5</option><option value="https://www.opendental.com/manual204/appointmentrules.html" >v20.4</option><option value="https://www.opendental.com/manual203/appointmentrules.html" >v20.3</option><option value="https://www.opendental.com/manual202/appointmentrules.html" >v20.2</option><option value="https://www.opendental.com/manual201/appointmentrules.html" >v20.1</option><option value="https://www.opendental.com/manual194/appointmentrules.html" >v19.4</option><option value="https://www.opendental.com/manual193/appointmentrules.html" >v19.3</option><option value="https://www.opendental.com/manual192/appointmentrules.html" >v19.2</option><option value="https://www.opendental.com/manual191/appointmentrules.html" >v19.1</option><option value="https://www.opendental.com/manual184/appointmentrules.html" >v18.4</option><option value="https://www.opendental.com/manual183/appointmentrules.html" >v18.3</option><option value="https://www.opendental.com/manual182/appointmentrules.html" >v18.2</option><option value="https://www.opendental.com/manual181/appointmentrules.html" >v18.1</option><option value="https://www.opendental.com/manual174/appointmentrules.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Appointment Rules</p></div>
<div class="GeneralPageContent">
<p>Appointment rules prevent double booking of a provider's time for certain procedures.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Appointments, Appointment Rules.</p>
<img src="images/appointmentRules.png" width="541" height="293"/><p>Rules can be created for a single procedure code or a range of procedures codes.</p>
<p>Click <b>Add</b> to create a new appointment rule, or double-click a rule to edit. </p>
<img src="images/appointmentRulesEdit.png" width="450" height="229"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Description</b>: Enter the identifying name.</li>
<li><b>Code Start/End</b>: Enter the procedure code(s) this rule applies to. For one procedure code, enter the same code in each field. For a range of procedure codes, enter the start and end procedure code.</li>
<li><b>Is Enabled</b>: Check to enforce the appointment rule. Uncheck to disable the rule.</li>
</ul>
<p><b>Delete</b>: Click to permanently remove a rule.</p>
<p>Click <b>OK</b> to save.</p>
<h2>Logic</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>When an Appointment Rule exists, any provider scheduled for an appointment with these procedures can only be scheduled for that appointment during the appointment time in the current <a href="appointmentviews.html">Appointment View</a>. Any other appointments overlapping their provider time on the appointment view are restricted . <ul>
<li>When attempting to schedule or reschedule an appointment from the <a href="apptpinboard.html">Pinboard</a> or move an existing appointment for the same provider that overlaps provider time and contains at least one code from the same Appointment Rule as an already scheduled appointment, users receive a warning: <i>Not allowed to double book</i><br/><img src="images/appointmentRulesWarn.png" width="217" height="133" class="ImageInParagraph"/></li>
</ul>
</li>
<li>Only provider appointment time is considered when blocking,. Non-provider time is allowed to overlap.</li>
<li>If double booking of procedures is allowed (i.e., no appointment rules for a procedure), conflicts show in the Provider <a href="timebars.html">Time Bars</a> on the appointment schedule. </li>
</ul>
<h2>WebSched Double Booking </h2>
<p>To allow double booking of providers through Web Sched, disable the setting <i> Prevent double booking</i> in <a href="webschednewpatsetup.html">Web Sched New Patient</a> and <a href="webschedrecallsetup.html">Web Sched Recall</a>. When disabled double booking is allowed, unless otherwise prevented by Appointment Rules. </p>
<p>To prevent double booking for certain Web Sched Appointment Types, create an Appointment Rule that contains procedure(s) corresponding to the Web Sched Appointment Type. </p>
</div>
</div>
</body>
</html>```
