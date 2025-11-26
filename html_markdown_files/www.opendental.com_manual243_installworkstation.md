# File: ./www.opendental.com/manual243/installworkstation.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Install on Workstation</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('installworkstation','installation','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/installworkstation.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/installworkstation.html" >v24.2</option><option value="https://www.opendental.com/manual241/installworkstation.html" >v24.1</option><option value="https://www.opendental.com/manual233/installworkstation.html" >v23.3</option><option value="https://www.opendental.com/manual232/installworkstation.html" >v23.2</option><option value="https://www.opendental.com/manual231/installworkstation.html" >v23.1</option><option value="https://www.opendental.com/manual224/installworkstation.html" >v22.4</option><option value="https://www.opendental.com/manual223/installworkstation.html" >v22.3</option><option value="https://www.opendental.com/manual222/installworkstation.html" >v22.2</option><option value="https://www.opendental.com/manual221/installworkstation.html" >v22.1</option><option value="https://www.opendental.com/manual214/installworkstation.html" >v21.4</option><option value="https://www.opendental.com/manual213/installworkstation.html" >v21.3</option><option value="https://www.opendental.com/manual212/installworkstation.html" >v21.2</option><option value="https://www.opendental.com/manual211/installworkstation.html" >v21.1</option><option value="https://www.opendental.com/manual205/installworkstation.html" >v20.5</option><option value="https://www.opendental.com/manual204/installworkstation.html" >v20.4</option><option value="https://www.opendental.com/manual203/installworkstation.html" >v20.3</option><option value="https://www.opendental.com/manual202/installworkstation.html" >v20.2</option><option value="https://www.opendental.com/manual201/installworkstation.html" >v20.1</option><option value="https://www.opendental.com/manual194/installworkstation.html" >v19.4</option><option value="https://www.opendental.com/manual193/installworkstation.html" >v19.3</option><option value="https://www.opendental.com/manual192/installworkstation.html" >v19.2</option><option value="https://www.opendental.com/manual191/installworkstation.html" >v19.1</option><option value="https://www.opendental.com/manual184/installworkstation.html" >v18.4</option><option value="https://www.opendental.com/manual183/installworkstation.html" >v18.3</option><option value="https://www.opendental.com/manual182/installworkstation.html" >v18.2</option><option value="https://www.opendental.com/manual181/installworkstation.html" >v18.1</option><option value="https://www.opendental.com/manual174/installworkstation.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Install on Workstation</p></div>
<div class="GeneralPageContent">
<p>See <a href="installation.html">Installation</a>.</p>
<p>These steps explain how to install Open Dental on a new workstation when there are multiple computers in the office. Workstation installations are different than server installations.</p>
<p><div class="Note">Note: <ul>
<li>Open Dental requires the .Net framework, which is usually installed with most modern operating systems.</li>
<li>Individual workstations do not need MySQL/MariaDB components, the OpenDentImages folder, or databases installed.</li>
<li>If installing in <a href="canada.html">Canada</a>, set the <a href="regionlanguagesettings.html">Region and Language Settings</a> on the workstation to Canada before installing. </li>
</ul>
</div>
</p>
<h2>Installation Steps</h2>
<p class="MarginBottomZero">In File Explorer:  </p>
<ol class="MarginBottomGap">
<li>From the workstation, browse to the <a href="atozfolder.html">OpenDentImages</a> folder on the server.</li>
<li>Locate the Setup.exe file.<br/><img src="images/installWorkstation.png" width="749" height="458" class="ImageInParagraph"/></li>
<li>Right-click on the Setup.exe file and select <i>Run as Administrator</i>.</li>
<li>Once the install is complete, the Open Dental icon appears on the desktop. Right-click the icon and select <i>Run as Administrator</i>.</li>
<li>In the <a href="choosedatabase.html">Choose Database</a> window, select the connection settings:  <ul>
<li>Enter the servername or IP address.</li>
<li>Select the database.</li>
<li>Enter the MySQL Username and Password.</li>
<li>(optional) Check <i>Do not show this window on startup</i> to hide this window the next time Open Dental is started. This is a typical setting on a workstation.</li>
</ul>
</li>
</ol>
</div>
</div>
</body>
</html>```
