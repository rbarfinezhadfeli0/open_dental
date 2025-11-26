# File: ./www.opendental.com/manual/eservicessetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eServices Setup</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eservicessetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eservicessetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/eservicessetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/eservicessetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/eservicessetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/eservicessetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/eservicessetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/eservicessetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/eservicessetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/eservicessetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/eservicessetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/eservicessetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/eservicessetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/eservicessetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/eservicessetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/eservicessetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/eservicessetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/eservicessetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/eservicessetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/eservicessetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/eservicessetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/eservicessetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/eservicessetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/eservicessetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/eservicessetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/eservicessetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/eservicessetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/eservicessetup.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eServices Setup</p></div>
<div class="GeneralPageContent">
<p>The eServices Setup window allows a user to enable and set up the various eService features. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click <b>eServices</b>.</p>
<img src="images/eservicesSetup.png" width="506" height="662"/><p class="MarginBottomZero"></p>
<p>Users must have the <i>EServicesSetup</i> permission to make changes in most eServices windows. </p>
<ul class="MarginBottomGap">
<li><b>Signup</b>: Sign up for eServices using the Signup Portal. <a href="eservicessignup.html">eServices Signup</a>.</li>
<li><b>eConnector Service</b>: Install and monitor the <a href="econnector.html">eConnector</a>. This service is used by, and required for, all eServices hosted by Open Dental.</li>
<li><b>Manage Devices</b>: Open the <a href="devicemanager.html">Device Manager</a> for use with ODTouch and eClipboard. </li>
<li><b>Mobile Web</b>: Set up options for <a href="mobilewebhostedbyod.html">Mobile Web</a>.</li>
<li><b>ODTouch</b>: Determine settings for <a href="odtouchsecurity.html">ODTouch Security</a>.</li>
<li><b>Patient Portal</b>: Set up options for <a href="portalhostedbyod.html">Patient Portal</a> (when hosted by Open Dental).</li>
<li><b>Payment Portal</b>: Copy the link used for <a href="paymentportalsetup.html">Payment Portal</a> and customize Message-to-Pay templates.</li>
<li><b>Texting Services</b>: View usage summaries for Integrated <a href="textintegratedusage.html">eServices Texting</a>. </li>
<li><b>Automated Messaging</b>: Set up options for <a href="automatedmessaging.html">Automated Messaging</a>.</li>
<li><b>eClipboard</b>: Set up options for <a href="eclipboardsetup.html">eClipboard</a>. </li>
<li><b>Miscellaneous</b>: Set <a href="eservicesmisctab.html">Miscellaneous</a> settings, such as the run time of automated emails and text messages for Web Sched Recall reminders, eReminders, and eConfirmations. </li>
<li><b>Secure Email</b>: Access <a href="secureemailsetup.html">Secure Email Setup</a>.</li>
<li><b>Mobile Settings</b>: Create <a href="mobilesettings.html">Mobile Settings</a> for eClipboard, ODMobile, and ODTouch. </li>
</ul>
<p class="MarginBottomZero">Web Scheduling: </p>
<ul class="MarginBottomGap">
<li><b>Recall</b>: Set up options for <a href="webschedrecallsetup.html">Web Sched Recall</a>.</li>
<li><b>New Patient</b>: Set up options for <a href="webschednewpatsetup.html">Web Sched New Patient</a>.</li>
<li><b>Existing Patient</b>: Set up options for <a href="webschedexistingpatsetup.html">Web Sched Existing Patient</a>. </li>
<li><b>Advanced</b>: Set up URL options for <a href="webschedadvanced.html">Web Sched Advanced</a>.</li>
</ul>
<p>Other eService setup includes <a href="opendentalmobile.html">ODMobile</a> and <a href="odtouchsetup.html">ODTouch Setup</a>.</p>
</div>
</div>
</body>
</html>```
