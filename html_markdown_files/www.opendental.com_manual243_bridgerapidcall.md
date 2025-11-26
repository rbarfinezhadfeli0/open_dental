# File: ./www.opendental.com/manual243/bridgerapidcall.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - DentalTek Rapid Call Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgerapidcall','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgerapidcall.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgerapidcall.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgerapidcall.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgerapidcall.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgerapidcall.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgerapidcall.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgerapidcall.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgerapidcall.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgerapidcall.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgerapidcall.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgerapidcall.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgerapidcall.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgerapidcall.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgerapidcall.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgerapidcall.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgerapidcall.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgerapidcall.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgerapidcall.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgerapidcall.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgerapidcall.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgerapidcall.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgerapidcall.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgerapidcall.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgerapidcall.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgerapidcall.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgerapidcall.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgerapidcall.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgerapidcall.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>DentalTek Rapid Call Bridge</p></div>
<div class="GeneralPageContent">
<p>DentalTek offers a comprehensive suite of services including cloud hosting, VOIP phones integrated with Open Dental, discounts on supplies and labs, and patient communications.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Rapid Call</b>.</p>
<img src="images/bridgeRapidCall.png" width="778" height="598"/><p>Rapid Call is a DentalTek feature that automatically deploys a pre-recorded message when customer voicemail picks up. Staff can then move on to dial another call. Rapid Call is included when you sign up for DentalTek, but you can purchase Rapid Call on its own. </p>
<p class="MarginBottomZero">There a few steps to follow before Rapid Call can be used. </p>
<ol class="MarginBottomGap">
<li>Sign up for <a href="../manual/dentaltekinfo.html">DentalTek.</a></li>
<li>Set up the <a href="bridgedentaltek.html">DentalTekBridge</a>.</li>
<li>Enable the Rapid Call bridge: <ol>
<li>Do not enter Text on button or Add a button to these Toolbars. These features are non-functional for this bridge.</li>
<li>Check the <b>Enabled</b> box.</li>
<li>If using clinics, click <b>Hide Button for Clinics</b>. Select which clinics the button should display on.</li>
<li>Click OK.</li>
</ol>
</li>
</ol>
<p>When the steps are completed, begin using the Rapid Call feature. Click the Rapid Call button in the Appointments Module to launch the application.</p>
<p>To remove the Rapid Call button from the Appointments Module, uncheck <b>Enabled</b>, then check <b>Hide Unused Button</b>.</p>
</div>
</div>
</body>
</html>```
