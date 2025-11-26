# File: ./www.opendental.com/manual232/bridgepandaperio.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - PANDA Perio Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgepandaperio','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/bridgepandaperio.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/bridgepandaperio.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgepandaperio.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgepandaperio.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgepandaperio.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/bridgepandaperio.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgepandaperio.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgepandaperio.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgepandaperio.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgepandaperio.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgepandaperio.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgepandaperio.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgepandaperio.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgepandaperio.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgepandaperio.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgepandaperio.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgepandaperio.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgepandaperio.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgepandaperio.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgepandaperio.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgepandaperio.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgepandaperio.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgepandaperio.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgepandaperio.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgepandaperio.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgepandaperio.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgepandaperio.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgepandaperio.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>PANDA Perio Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>, PandaPerio.</p>
<img src="images/bridgePandaPerio.png" width="778" height="598"/><p><div class="Note">Note: In order to successfully bridge to PandaPerio, PandaLauncher is required.</div>
</p>
<p>PANDA Perio is periodontal charting software. Website: <a href="https://www.pandaperio.com/" target="_blank">https://www.pandaperio.com/</a>.</p>
<p class="MarginBottomZero">To enable the bridge: </p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li>Double-click on <b>Additional Properties</b> to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.</li>
<li>Set up a clickable bridge button.  <ol>
<li>Under <b>Add a button to these toolbars</b>, highlight where to display the button.</li>
<li>Enter the <b>Text on button</b>.</li>
<li>(Optional) Import an image to show on the button (22 x 22 pixels).</li>
</ol>
</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click OK.</li>
</ol>
<h2>Technical Details</h2>
<p>This bridge passes the patient's Patient ID, First Name, Last Name, Birthdate, SSN, Home Phone Number, and Work Phone Number. If there is a referral attached and that referral is flagged as <i>Is Doctor</i> then we will also pass the Referring Providers referralnum, First Name, Last Name, Address, and Phone Number</p>
<p>If the patient is a patient clone, the bridge will transfer the non-clone patient information.</p>
<p>If users wish to write to an ini file, use the <a href="bridgepandaperioadvanced.html">PANDA Perio (advanced) Bridge </a> instead. </p>
</div>
</div>
</body>
</html>```
