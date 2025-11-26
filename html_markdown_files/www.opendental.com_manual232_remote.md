# File: ./www.opendental.com/manual232/remote.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Remote Access</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('remote','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/remote.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/remote.html" >v24.2</option><option value="https://www.opendental.com/manual241/remote.html" >v24.1</option><option value="https://www.opendental.com/manual233/remote.html" >v23.3</option><option value="https://www.opendental.com/manual232/remote.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/remote.html" >v23.1</option><option value="https://www.opendental.com/manual224/remote.html" >v22.4</option><option value="https://www.opendental.com/manual223/remote.html" >v22.3</option><option value="https://www.opendental.com/manual222/remote.html" >v22.2</option><option value="https://www.opendental.com/manual221/remote.html" >v22.1</option><option value="https://www.opendental.com/manual214/remote.html" >v21.4</option><option value="https://www.opendental.com/manual213/remote.html" >v21.3</option><option value="https://www.opendental.com/manual212/remote.html" >v21.2</option><option value="https://www.opendental.com/manual211/remote.html" >v21.1</option><option value="https://www.opendental.com/manual205/remote.html" >v20.5</option><option value="https://www.opendental.com/manual204/remote.html" >v20.4</option><option value="https://www.opendental.com/manual203/remote.html" >v20.3</option><option value="https://www.opendental.com/manual202/remote.html" >v20.2</option><option value="https://www.opendental.com/manual201/remote.html" >v20.1</option><option value="https://www.opendental.com/manual194/remote.html" >v19.4</option><option value="https://www.opendental.com/manual193/remote.html" >v19.3</option><option value="https://www.opendental.com/manual192/remote.html" >v19.2</option><option value="https://www.opendental.com/manual191/remote.html" >v19.1</option><option value="https://www.opendental.com/manual184/remote.html" >v18.4</option><option value="https://www.opendental.com/manual183/remote.html" >v18.3</option><option value="https://www.opendental.com/manual182/remote.html" >v18.2</option><option value="https://www.opendental.com/manual181/remote.html" >v18.1</option><option value="https://www.opendental.com/manual174/remote.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Remote Access</p></div>
<div class="GeneralPageContent">
<p>See <a href="advancedtopics.html">Advanced Topics</a>.</p>
<p>If users want access to data from outside the office, there are a number of options, depending on the situation. </p>
<h2>Remote Desktop Software</h2>
<p>Remote Desktop Software allows users to log on to an office workstation from other computers. The data is sent encrypted so it is secure.</p>
<p class="MarginBottomZero">Some known options include: </p>
<ul class="MarginBottomGap">
<li><a href="https://get.gotomypc.com/" target="_blank">GoToMyPC</a></li>
<li><a href="https://www.logmein.com/" target="_blank">LogMeIn</a></li>
</ul>
<h2>Windows Remote Desktop</h2>
<p>Remote Desktop Protocol (RDP) is built into Windows and allows users to access the network remotely. The advantage over the remote options listed above is that there can be multiple connections operating at once. Instead of just connecting to a single computer, the server would handle all the connections.</p>
<p><div class="Note">Note: <ul>
<li>Remote sessions may have issues with time zones. See <a href="timezones.html">Time Zones</a> for troubleshooting.</li>
<li>When using RDP, the client name (the name of the computer remoting in to the server/other computer) will be used as the computer name in various places within the program (e.g. update in progress flag, audit trail entries, computer pref rows, etc.).</li>
</ul>
</div>
</p>
<h2>ODTouch / ODMobile</h2>
<p>Users who do not need full access to the program can access some information from optional Open Dental eServices. </p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><a href="opendentalmobile.html">ODMobile</a>: Allows access to appointments, basic patient information, messages, and ePrescribing through DoseSpot</li>
<li><a href="odtouchsetup.html">ODTouch</a>: Allows access to appointments, patient information (including medical information, perio charts, images, and the Chart Module), ePrescribing through DoseSpot, and more..</li>
</ul>
<h2>Laptop or Removable Hard Drive</h2>
<p class="MarginBottomZero">Users can back up the Open Dental database to a laptop or removable drive to take home with them.  </p>
<ul class="MarginBottomGap">
<li>Data should be backed up after all patients are done for the day and no other data is being entered into the live database. </li>
<li>Removable options include external drives, internal removable drives, external cases, full size, medium, and small drives, USB's, etc. </li>
<li>Data entered off-site does not sync with the Open Dental database at the office. If data is entered off-site, follow the instructions on <a href="backuptool.html">Backup Tool</a> to restore data once returning to the office.</li>
</ul>
</div>
</div>
</body>
</html>```
