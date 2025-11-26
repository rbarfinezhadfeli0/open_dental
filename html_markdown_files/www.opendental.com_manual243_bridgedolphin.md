# File: ./www.opendental.com/manual243/bridgedolphin.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dolphin Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgedolphin','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgedolphin.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgedolphin.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgedolphin.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgedolphin.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgedolphin.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgedolphin.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgedolphin.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgedolphin.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgedolphin.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgedolphin.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgedolphin.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgedolphin.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgedolphin.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgedolphin.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgedolphin.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgedolphin.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgedolphin.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgedolphin.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgedolphin.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgedolphin.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgedolphin.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgedolphin.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgedolphin.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgedolphin.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgedolphin.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgedolphin.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgedolphin.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgedolphin.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dolphin Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Dolphin from dolphinimaging.com</b>.</p>
<img src="images/bridgedolphin.png" width="770" height="594"/><p>Dolphin is imaging software. Website: <a href="https://www.dolphinimaging.com/" target="_blank">https://www.dolphinimaging.com/</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on a row in <b>Additional Properties</b> to change settings.  <ol>
<li>Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Verify the path for <b>Filename</b>.</li>
</ol>
</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click Save.</li>
</ol>
<h2>Technical Details</h2>
<p>The bridge uses two programs:</p>
<ul>
<li><b>C:\Dolphin\dolDb.exe</b> Passes information to Dolphin using the specified file. Text is written to a file, and then Dolphin imports it.</li>
<li><b>C:\Dolphin\dolCtrl.exe</b> Launches Dolphin using the specified patient id.</li>
</ul>
<p>Everything is based on patient IDs. All changes to patient data are made from within Open Dental, and then kept automatically synchronized based on patient ID. The only time that synchronization is performed is when using the bridge to launch a patient in Dolphin. Open Dental never deletes patients from Dolphin.</p>
</div>
</div>
</body>
</html>```
