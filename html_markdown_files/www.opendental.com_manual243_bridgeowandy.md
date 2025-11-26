# File: ./www.opendental.com/manual243/bridgeowandy.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Owandy Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgeowandy','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgeowandy.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgeowandy.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgeowandy.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgeowandy.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgeowandy.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgeowandy.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgeowandy.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgeowandy.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgeowandy.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgeowandy.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgeowandy.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgeowandy.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgeowandy.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgeowandy.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgeowandy.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgeowandy.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgeowandy.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgeowandy.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgeowandy.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgeowandy.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgeowandy.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgeowandy.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgeowandy.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgeowandy.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgeowandy.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgeowandy.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgeowandy.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgeowandy.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Owandy Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>QuickVision from owandy.com</b>.</p>
<img src="images/bridgeOwandy.png" width="770" height="594"/><p>Owandy is an imaging software. Website: <a href="http://www.owandy.com" target="_blank">www.owandy.com</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on <b>Additional Properties</b> to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>Click Save.</li>
</ol>
<h2>Technical Details</h2>
<p>This bridge launches Quick Vision using command line arguments, then passes some data to Quick Vision using Windows API calls. Open Dental passes the patient PatNum, last name, and first name to Quick Vision. Owandy must be opened in the background for the bridge to launch properly.</p>
</div>
</div>
</body>
</html>```
