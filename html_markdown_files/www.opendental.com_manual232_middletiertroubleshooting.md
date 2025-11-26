# File: ./www.opendental.com/manual232/middletiertroubleshooting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Middle Tier Troubleshooting</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('middletiertroubleshooting','middletier','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/middletiertroubleshooting.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/middletiertroubleshooting.html" >v24.2</option><option value="https://www.opendental.com/manual241/middletiertroubleshooting.html" >v24.1</option><option value="https://www.opendental.com/manual233/middletiertroubleshooting.html" >v23.3</option><option value="https://www.opendental.com/manual232/middletiertroubleshooting.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/middletiertroubleshooting.html" >v23.1</option><option value="https://www.opendental.com/manual224/middletiertroubleshooting.html" >v22.4</option><option value="https://www.opendental.com/manual223/middletiertroubleshooting.html" >v22.3</option><option value="https://www.opendental.com/manual222/middletiertroubleshooting.html" >v22.2</option><option value="https://www.opendental.com/manual221/middletiertroubleshooting.html" >v22.1</option><option value="https://www.opendental.com/manual214/middletiertroubleshooting.html" >v21.4</option><option value="https://www.opendental.com/manual213/middletiertroubleshooting.html" >v21.3</option><option value="https://www.opendental.com/manual212/middletiertroubleshooting.html" >v21.2</option><option value="https://www.opendental.com/manual211/middletiertroubleshooting.html" >v21.1</option><option value="https://www.opendental.com/manual205/middletiertroubleshooting.html" >v20.5</option><option value="https://www.opendental.com/manual204/middletiertroubleshooting.html" >v20.4</option><option value="https://www.opendental.com/manual203/middletiertroubleshooting.html" >v20.3</option><option value="https://www.opendental.com/manual202/middletiertroubleshooting.html" >v20.2</option><option value="https://www.opendental.com/manual201/middletiertroubleshooting.html" >v20.1</option><option value="https://www.opendental.com/manual194/middletiertroubleshooting.html" >v19.4</option><option value="https://www.opendental.com/manual193/middletiertroubleshooting.html" >v19.3</option><option value="https://www.opendental.com/manual192/middletiertroubleshooting.html" >v19.2</option><option value="https://www.opendental.com/manual191/middletiertroubleshooting.html" >v19.1</option><option value="https://www.opendental.com/manual184/middletiertroubleshooting.html" >v18.4</option><option value="https://www.opendental.com/manual183/middletiertroubleshooting.html" >v18.3</option><option value="https://www.opendental.com/manual182/middletiertroubleshooting.html" >v18.2</option><option value="https://www.opendental.com/manual181/middletiertroubleshooting.html" >v18.1</option><option value="https://www.opendental.com/manual174/middletiertroubleshooting.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Middle Tier Troubleshooting</p></div>
<div class="GeneralPageContent">
<p>See <a href="middletier.html">Middle Tier</a>.</p>
<p>Below are some common problems with the installation and maintenance of Middle Tier.</p>
<p><b>What is my URI?</b></p>
<p class="MarginBottomZero">The URI is composed of four parts:  </p>
<ul class="MarginBottomGap">
<li>Protocol: You will use <b>http://</b> if you're using a VPN or local network connection to secure your transmissions. If you're using Middle Tier across the internet, you will need to set up security certificates and your URI will begin with <b>https://</b>.</li>
<li>Server: The next section will be the name or IP address of the computer that is acting as your Middle Tier server.</li>
<li>Alias: After the computer name you will use the Alias you set for the service.</li>
<li>File: The last section does not change. It is ServiceMain.asmx. <p>For example: <b>http://MyMiddleTierServer/AliasName/ServiceMain.asmx</b>.</p>
</li>
</ul>
<p class="MarginBottomZero"><br/><p><b>Error Messages</b></p>
</p>
<ul class="MarginBottomGap">
<li>System.BadImageFormatException</li>
<li>Could not load file</li>
<li>Could not create type</li>
</ul>
<p>These errors are an indicator that Enable 32-Bit Applications is turned off. Refer to step 3e on <a href="middletierinstallation.html">Middle Tier Installation</a>.</p>
<p>Some issues can arise when using a Middle Tier server between different time zones. See <a href="timezones.html">Time Zones</a>.</p>
<br/></div>
</div>
</body>
</html>```
