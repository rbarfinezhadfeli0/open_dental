# File: ./www.opendental.com/manual/bridgeerx.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eRx Setup</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgeerx','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgeerx.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgeerx.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgeerx.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgeerx.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgeerx.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgeerx.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgeerx.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgeerx.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgeerx.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgeerx.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgeerx.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgeerx.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgeerx.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgeerx.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgeerx.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgeerx.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgeerx.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgeerx.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgeerx.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgeerx.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgeerx.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgeerx.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgeerx.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgeerx.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgeerx.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgeerx.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgeerx.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgeerx.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eRx Setup</p></div>
<div class="GeneralPageContent">
<p>Enable eRx to utilize an eRx service for the practice or specific clinics.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>,<b> eRx</b>.</p>
<img src="images/eRxSetup.png" width="561" height="409"/><p>Enabling eRx incurs an additional fee. See <a href="fees.html">Fees for Support and Services</a> for details.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Enabled</b>: Check to enable eRx. Additional setup is required before sending electronic prescriptions is allowed. </li>
<li><b>eRx Solution</b>: Select the eRx solution the practice is using. Window options vary depending on the selected solution. </li>
<li><b>Delete</b>: Select a clinic from the Properties list and click to delete clinic properties. A warning will appear confirming to delete the selected row. Click OK to delete or Cancel to discard changes.</li>
</ul>
<h2>Ensora eRx (formerly NewCrop eRx)</h2>
<p>Select <b>Ensora</b> when using <a href="newcrop.html">Ensora eRx</a> as the service for the practice.</p>
<img src="images/bridgeeRxLegacy.png" width="561" height="409"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Account ID</b>: Automatically populates when Ensora is enabled.</li>
<li><b>Clear Account ID</b>: Used by Open Dental HQ only. Used to update accounts as needed.</li>
</ul>
<h2>DoseSpot / DoseSpot with Ensora</h2>
<p>Select <b>DoseSpot</b> when using <a href="dosespotuse.html">DoseSpot eRx</a> as the service for the practice. Select <b>DoseSpot with Ensora</b> when using a mix of both services for the practice. Both options display the same set of fields.</p>
<img src="images/bridgeeRxDoseSpot.png" width="561" height="409"/><p>See <a href="dosespotsetup.html">DoseSpot Setup</a> for full setup instructions.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Properties</b>: Enter the Clinic ID and Keys for each clinic utilizing eRx. </li>
</ul>
</div>
</div>
</body>
</html>```
