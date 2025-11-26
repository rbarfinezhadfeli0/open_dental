# File: ./www.opendental.com/manual232/shutdown.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Shutdown Workstations</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('shutdown','+misc','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/shutdown.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/shutdown.html" >v24.2</option><option value="https://www.opendental.com/manual241/shutdown.html" >v24.1</option><option value="https://www.opendental.com/manual233/shutdown.html" >v23.3</option><option value="https://www.opendental.com/manual232/shutdown.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/shutdown.html" >v23.1</option><option value="https://www.opendental.com/manual224/shutdown.html" >v22.4</option><option value="https://www.opendental.com/manual223/shutdown.html" >v22.3</option><option value="https://www.opendental.com/manual222/shutdown.html" >v22.2</option><option value="https://www.opendental.com/manual221/shutdown.html" >v22.1</option><option value="https://www.opendental.com/manual214/shutdown.html" >v21.4</option><option value="https://www.opendental.com/manual213/shutdown.html" >v21.3</option><option value="https://www.opendental.com/manual212/shutdown.html" >v21.2</option><option value="https://www.opendental.com/manual211/shutdown.html" >v21.1</option><option value="https://www.opendental.com/manual205/shutdown.html" >v20.5</option><option value="https://www.opendental.com/manual204/shutdown.html" >v20.4</option><option value="https://www.opendental.com/manual203/shutdown.html" >v20.3</option><option value="https://www.opendental.com/manual202/shutdown.html" >v20.2</option><option value="https://www.opendental.com/manual201/shutdown.html" >v20.1</option><option value="https://www.opendental.com/manual194/shutdown.html" >v19.4</option><option value="https://www.opendental.com/manual193/shutdown.html" >v19.3</option><option value="https://www.opendental.com/manual192/shutdown.html" >v19.2</option><option value="https://www.opendental.com/manual191/shutdown.html" >v19.1</option><option value="https://www.opendental.com/manual184/shutdown.html" >v18.4</option><option value="https://www.opendental.com/manual183/shutdown.html" >v18.3</option><option value="https://www.opendental.com/manual182/shutdown.html" >v18.2</option><option value="https://www.opendental.com/manual181/shutdown.html" >v18.1</option><option value="https://www.opendental.com/manual174/shutdown.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Shutdown Workstations</p></div>
<div class="GeneralPageContent">
<p>Use this tool to shut down the Open Dental program from any workstation that might be running.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Misc Tools, Shutdown All Workstations.</p>
<img src="images/shutdownWorkstations.gif" width="658" height="316"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Shutdown Selected</b>: Highlight one or more workstations, then click to shut them down.</li>
<li><b>Shutdown All</b>: Shutdown all workstations.</li>
<li><b>Cancel</b>: Close without making changes. </li>
</ul>
<p>Once an option is selected, the following prompt will appear. This will give users on the selected workstations 15 seconds to save any changes before the program closes.</p>
<img src="images/shutdownWarning.gif" width="412" height="146"/><p>Click OK to continue.</p>
</div>
</div>
</body>
</html>```
