# File: ./www.opendental.com/manual232/ereminderssetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eReminders</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ereminderssetup','automatedmessaging','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/ereminderssetup.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/ereminderssetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/ereminderssetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/ereminderssetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/ereminderssetup.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/ereminderssetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/ereminderssetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/ereminderssetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/ereminderssetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/ereminderssetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/ereminderssetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/ereminderssetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/ereminderssetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/ereminderssetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/ereminderssetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/ereminderssetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/ereminderssetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/ereminderssetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/ereminderssetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/ereminderssetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/ereminderssetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/ereminderssetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/ereminderssetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/ereminderssetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/ereminderssetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/ereminderssetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/ereminderssetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/ereminderssetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eReminders</p></div>
<div class="GeneralPageContent">
<p>In <a href="eservicessetup.html">eServices Setup</a>, click <a href="automatedmessaging.html">Automated Messaging</a>.</p>
<img src="images/eConfirmationsActivate.png" width="915" height="552"/><p>eReminders is an eService that sends automated text messages and/or email reminders about upcoming appointments. They are intended to be sent a short time before an appointment so patients are reminded of their appointment.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/>See our video: <a href="https://youtu.be/YuKNAHdNC9g?si=MBra72MmUurdvahW" target="_blank">eServices: Automated Messaging</a>.</li>
<li>Emailed eReminders can be sent at no additional cost. To send eReminders by text message, Integrated Text Messaging is required and a per text message fee applies. See <a href="eservicessignup.html">eServices Signup</a>.</li>
<li>Also see <a href="eremindertroubleshooting.html">eReminder and eConfirmation Troubleshooting</a>.</li>
</ul>
<h2>Activate / Deactivate eReminders</h2>
<p>eReminders can be activated or deactivated as needed.</p>
<img src="images/eReminderActivate.png" width="356" height="230"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>To enable eReminders, click <b>Activate eReminders</b>. The eReminder row displays in green with a status of <i>Active</i>.</li>
<li>To disable eReminders, click <b>Deactivate eReminders</b>. The eReminder row displays in red with a status of<i> Inactive</i>.</li>
</ul>
<p>After activating eReminders, set up eReminder Rules.</p>
<h2>eReminder Rules</h2>
<p>To edit an existing eReminder Rule, double-click a Reminder Rule from the Automated Messaging Rules grid. To add a new rule, click <b>Add eReminder</b>.</p>
<p>For information on adding and editing rules, see <a href="editrule.html">Edit Rule</a>.</p>
</div>
</div>
</body>
</html>```
