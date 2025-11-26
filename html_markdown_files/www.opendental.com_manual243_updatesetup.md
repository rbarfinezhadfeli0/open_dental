# File: ./www.opendental.com/manual243/updatesetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Update Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('updatesetup','update','+help','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/updatesetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/updatesetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/updatesetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/updatesetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/updatesetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/updatesetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/updatesetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/updatesetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/updatesetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/updatesetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/updatesetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/updatesetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/updatesetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/updatesetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/updatesetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/updatesetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/updatesetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/updatesetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/updatesetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/updatesetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/updatesetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/updatesetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/updatesetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/updatesetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/updatesetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/updatesetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/updatesetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/updatesetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Update Setup</p></div>
<div class="GeneralPageContent">
<p>The Update Setup window contains settings for updating Open Dental. Most of these fields do not change. </p>
<p>In the <a href="update.html">Update</a> window, click <b>Setup</b>.</p>
<img src="images/updateSetup.png" width="738" height="420"/><p><b>Server Address for Updates / Website Path for Updates</b>: Do not change these fields; these are required to access Open Dental updates.</p>
<p><b>Web Proxy</b>: Open Dental HQ can provide a proxy address if the office has tight security. This option is rarely used. </p>
<p><b>Registration Key</b>: Click<b> Change</b> to open the Registration Key window to enter or update a valid registration key supplied by Open Dental. The registration key can be found in the Welcome email sent after signing up for support. View <a href="licenses.html">License Agreements</a> and enter the registration key.<br/><img src="images/UpdateSetupRegKey.png" width="767" height="427" class="ImageInParagraph"/><br/> If changing the registration key, check <b>I agree to the terms of all of the above license agreements in their entirety.</b></p>
<p class="MarginBottomZero"><b>Simultaneously update other databases</b>: Only for offices that always run multiple databases. For example, multiple dental offices are consolidated in one physical location with a common reception area. In these situations: </p>
<ol class="MarginBottomGap">
<li>Pick one <i>main</i> database from which updates are always performed.</li>
<li>In that database, open the Update Setup window, and enter the names of all the other databases.</li>
<li>Follow this sequence to perform an update: <ul>
<li>Use the <a href="shutdown.html">Shutdown</a> Tool on all databases other than the main database.</li>
<li>Update the main database. This locks users out of all databases at once.</li>
<li>Open up each of the other databases. Users are locked out until this is done.</li>
</ul>
</li>
</ol>
<p class="MarginBottomZero"><b>Show buttons for msi:</b> Check to see the <i>Download MSI</i> option in the Update window. Useful for enterprise or domain users that may want to use an OpenDental.msi instead of OpenDental.exe. Silent install is supported using the following Windows Installer command-line options: </p>
<ul class="MarginBottomGap">
<li><span class="codeblock">/quiet</span></li>
<li><span class="codeblock">/qn</span></li>
</ul>
<p class="MarginBottomZero"><b>Update Notification Time</b>: Start a countdown to an update that shows on all workstations. </p>
<ol class="MarginBottomGap">
<li>Click <b>Change</b>. <br/><img src="images/updateTime.png" width="257" height="199" class="ImageInParagraph"/></li>
<li>Select the date.</li>
<li>Select the estimated update time.</li>
<li>Click <b>OK</b>.</li>
</ol>
<p>The time remaining until the update shows in the title bar of all workstations and is updated every 5 seconds. <p class="codeblock">Update In: 6 hours, 43 minutes</p></p>
<p>During this time, install and download msi buttons are disabled. Once the date/time has passed, the countdown no longer shows and buttons are enabled again.</p>
<div class="Note">Note: The update does not automatically occur once the countdown ends. It must still be manually started.</div>
<br/><br/><p><b>Recopy</b>: Click to update the Update Files folder in the A to Z folder with files from the most currently installed version.</p>
</div>
</div>
</body>
</html>```
