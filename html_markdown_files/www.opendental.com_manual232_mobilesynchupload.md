# File: ./www.opendental.com/manual232/mobilesynchupload.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Mobile Synch Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mobilesynchupload','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/mobilesynchupload.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/mobilesynchupload.html" >v24.2</option><option value="https://www.opendental.com/manual241/mobilesynchupload.html" >v24.1</option><option value="https://www.opendental.com/manual233/mobilesynchupload.html" >v23.3</option><option value="https://www.opendental.com/manual232/mobilesynchupload.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/mobilesynchupload.html" >v23.1</option><option value="https://www.opendental.com/manual224/mobilesynchupload.html" >v22.4</option><option value="https://www.opendental.com/manual223/mobilesynchupload.html" >v22.3</option><option value="https://www.opendental.com/manual222/mobilesynchupload.html" >v22.2</option><option value="https://www.opendental.com/manual221/mobilesynchupload.html" >v22.1</option><option value="https://www.opendental.com/manual214/mobilesynchupload.html" >v21.4</option><option value="https://www.opendental.com/manual213/mobilesynchupload.html" >v21.3</option><option value="https://www.opendental.com/manual212/mobilesynchupload.html" >v21.2</option><option value="https://www.opendental.com/manual211/mobilesynchupload.html" >v21.1</option><option value="https://www.opendental.com/manual205/mobilesynchupload.html" >v20.5</option><option value="https://www.opendental.com/manual204/mobilesynchupload.html" >v20.4</option><option value="https://www.opendental.com/manual203/mobilesynchupload.html" >v20.3</option><option value="https://www.opendental.com/manual202/mobilesynchupload.html" >v20.2</option><option value="https://www.opendental.com/manual201/mobilesynchupload.html" >v20.1</option><option value="https://www.opendental.com/manual194/mobilesynchupload.html" >v19.4</option><option value="https://www.opendental.com/manual193/mobilesynchupload.html" >v19.3</option><option value="https://www.opendental.com/manual192/mobilesynchupload.html" >v19.2</option><option value="https://www.opendental.com/manual191/mobilesynchupload.html" >v19.1</option><option value="https://www.opendental.com/manual184/mobilesynchupload.html" >v18.4</option><option value="https://www.opendental.com/manual183/mobilesynchupload.html" >v18.3</option><option value="https://www.opendental.com/manual182/mobilesynchupload.html" >v18.2</option><option value="https://www.opendental.com/manual181/mobilesynchupload.html" >v18.1</option><option value="https://www.opendental.com/manual174/mobilesynchupload.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Mobile Synch Setup</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Mobile Synch, or click eServices, Mobile Sync.</p>
<p><div class="Note">Note: Mobile Synch has been replaced by <a href="opendentalmobile.html">ODMobile</a>, an app that is installed right to your mobile device! </div>
</p>
<img src="images/mobileSynch.gif" width="909" height="422"/><p>Alternatively, in the <a href="eservicesmisctab.html">eServices Misc</a>, click <i>Show Mobile Synch (old-style)</i>. </p>
<p>When using the Mobile Synch Feature application, data must be uploaded to Open Dental's server. It will then continue to synch with your database server to ensure content is up-to-date. The synch will start when you launch Open Dental, after the database is selected but before user login.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Host Server Address</b>: No need to change this. This is the Open Dental server where data will be sent during synchronization.</li>
<li><b>Minutes Between Synch</b>: The interval, in minutes, between automatic synchronization of Open Dental's server and your database. 10 minutes is a good setting to start with. If synching is too frequent, the workstation may lock momentarily while synching. A longer interval minimizes the problem.</li>
<li><b>Exclude Appointments Before</b>: Enter a date, or leave it blank to include all appointments. A date can reduce the amount of time it takes for the initial synch.</li>
<li><b>Workstation for Synching</b>: Identify the one workstation in the office that will synch with Open Dental's server.</li>
<li><b>User Name</b>: Must be at least 10 characters long and complicated (upper and lower case letters, at least one number, and one special character). For technical reasons, certain symbols do not work and will result in a failed login attempt on the mobile device. Specifically, we are aware that the &amp;, +, and sometimes the % symbols cannot be part of the username. You can choose to 'remember' the user name on your mobile device so you don't always have to reenter it.</li>
<li><b>Password</b>: Can be short and simple. It protects viewing of your data by anyone else on your mobile device.</li>
<li><b>Synch Troubleshooting Mode</b>: Mobile Synch runs much slower in this mode. When checked, data will synch one patient at a time instead of in a batch. This is designed so when a synch is failing, you may find the patient or record that is causing the failure and correct it.</li>
</ul>
<p><b>Delete All</b>: Deletes all data from the Open Dental server.</p>
<p><b>Full Synch</b>: Delete all data from the Open Dental server then upload fresh data. This should only need to be done once.</p>
<p><b>Synch</b>: A synch can be forced at any time in addition to the automatic timed synch.</p>
</div>
</div>
</body>
</html>```
