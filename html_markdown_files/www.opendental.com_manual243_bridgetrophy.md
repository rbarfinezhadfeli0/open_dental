# File: ./www.opendental.com/manual243/bridgetrophy.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Trophy Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgetrophy','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgetrophy.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgetrophy.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgetrophy.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgetrophy.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgetrophy.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgetrophy.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgetrophy.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgetrophy.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgetrophy.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgetrophy.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgetrophy.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgetrophy.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgetrophy.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgetrophy.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgetrophy.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgetrophy.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgetrophy.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgetrophy.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgetrophy.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgetrophy.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgetrophy.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgetrophy.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgetrophy.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgetrophy.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgetrophy.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgetrophy.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgetrophy.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgetrophy.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Trophy Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click <b>Trophy</b>.</p>
<img src="images/bridgeTrophy.png" width="770" height="594"/><p>After version 5.0, this is known as Kodak Dental Imaging (KDI). Also use this bridge for some Carestream products.</p>
<p class="MarginBottomZero">There are two different Trophy bridges available: </p>
<ul class="MarginBottomGap">
<li><i>Trophy Simple</i>: Not recommended, however may be used for new installations of Trophy. It always uses the patient ID (PatNum) as the image folder name.</li>
<li><i><a href="bridgetrophyenhanced.html">Trophy Enhanced</a></i>: Recommended for new installations. Required for existing installations of Trophy. For existing installations, the user must type in the name of the folder in the Edit Patient Information window for each patient.</li>
</ul>
<p><div class="Note">Note: To change patients, close Kodak, switch patients in Open Dental, then reopen the bridge.</div>
</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Verify the <b>Path of file to open</b>.</li>
<li>Double-click on a row in <b>Additional Properties</b> to change settings.  <ol>
<li>In the first row, enter 0 to use the Patient Number or 1 to use Chart Number.</li>
<li>Storage Path: Enter the folder or network path location where images are stored.</li>
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
<p>Storage Path: The storage path might look similar to</p>
<p class="codeblock">\\SERVER\tw</p>or<p class="codeblock">F:\tw</p><br/><p>The storage path must be set to exactly the same value as the database location within Trophy. The location for the database can be edited within the Trophy program. Trophy uses this database path when searching for patients.</p>
<p><b>Simple Bridge</b><br/> If using the simple bridge, Open Dental always simply uses the Open Dental PatNum to name the Trophy folders. For example, for John Smith, PatNum=123, his images might be found in this folder:</p>
<p class="codeblock">\\SERVER\tw\123</p><br/><h2>Troubleshooting</h2>
<p>If the bridge is not working, troubleshoot it by creating a Windows shortcut. The location / target is the Trophy program itself. For example, <b>C:\Program Files\Trophy\TW.exe</b>. After creating the shortcut, right-click on it and select properties. Edit the target. Add a space after the original target and then -P, then no space, then the full path to a patient folder without any trailing \. Similar to this:</p>
<p class="codeblock">C:\Program Files\Trophy\TW.exe -PF:\tw\G.rvg\G0000001</p><br/><p>Close the properties window. Then, click the shortcut to test. This simulates exactly what Open Dental is doing. If this does not work, then Open Dental will not work either. If it does work, change the settings in Open Dental to match.</p>
</div>
</div>
</body>
</html>```
