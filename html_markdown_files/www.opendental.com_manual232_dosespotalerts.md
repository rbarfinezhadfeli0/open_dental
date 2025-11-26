# File: ./www.opendental.com/manual232/dosespotalerts.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - DoseSpot Alerts</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dosespotalerts','dosespotuse','+eRx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/dosespotalerts.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/dosespotalerts.html" >v24.2</option><option value="https://www.opendental.com/manual241/dosespotalerts.html" >v24.1</option><option value="https://www.opendental.com/manual233/dosespotalerts.html" >v23.3</option><option value="https://www.opendental.com/manual232/dosespotalerts.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/dosespotalerts.html" >v23.1</option><option value="https://www.opendental.com/manual224/dosespotalerts.html" >v22.4</option><option value="https://www.opendental.com/manual223/dosespotalerts.html" >v22.3</option><option value="https://www.opendental.com/manual222/dosespotalerts.html" >v22.2</option><option value="https://www.opendental.com/manual221/dosespotalerts.html" >v22.1</option><option value="https://www.opendental.com/manual214/dosespotalerts.html" >v21.4</option><option value="https://www.opendental.com/manual213/dosespotalerts.html" >v21.3</option><option value="https://www.opendental.com/manual212/dosespotalerts.html" >v21.2</option><option value="https://www.opendental.com/manual211/dosespotalerts.html" >v21.1</option><option value="https://www.opendental.com/manual205/dosespotalerts.html" >v20.5</option><option value="https://www.opendental.com/manual204/dosespotalerts.html" >v20.4</option><option value="https://www.opendental.com/manual203/dosespotalerts.html" >v20.3</option><option value="https://www.opendental.com/manual202/dosespotalerts.html" >v20.2</option><option value="https://www.opendental.com/manual201/dosespotalerts.html" >v20.1</option><option value="https://www.opendental.com/manual194/dosespotalerts.html" >v19.4</option><option value="https://www.opendental.com/manual193/dosespotalerts.html" >v19.3</option><option value="https://www.opendental.com/manual192/dosespotalerts.html" >v19.2</option><option value="https://www.opendental.com/manual191/dosespotalerts.html" >v19.1</option><option value="https://www.opendental.com/manual184/dosespotalerts.html" >v18.4</option><option value="https://www.opendental.com/manual183/dosespotalerts.html" >v18.3</option><option value="https://www.opendental.com/manual182/dosespotalerts.html" >v18.2</option><option value="https://www.opendental.com/manual181/dosespotalerts.html" >v18.1</option><option value="https://www.opendental.com/manual174/dosespotalerts.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>DoseSpot Alerts</p></div>
<div class="GeneralPageContent">
<p>Providers, non-doctors, and clinics subscribed to <a href="dosespotuse.html">DoseSpot</a> receive eRx alerts</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click <a href="alerts.html">Alerts</a>.</p>
<img src="images/dosespotAlertAssignID.PNG" width="778" height="300"/><p>Before alerts display, each provider/proxy clinician and clinic must be subscribed to <i>eRx Alerts</i>. See <a href="alertsubscribe.html">Alert Subscription</a>.</p>
<p>The eRx alert category includes the registered provider and registered clinic that are subscribed to the alert. </p>
<h2>Take Action on an Alert</h2>
<p>The alert, <i>Select user to assign ID</i>, appears when multiple users are assigned to one provider, or no user is assigned. This alert requires action.</p>
<ol>
<li>Click the alert, then click <i>Open</i>. <br/><img src="images/dosespotAlertAssignIdWindow.PNG" width="375" height="196" class="ImageInParagraph"/></li>
<li>Assign a user.</li>
<ul>
<li><b>DoseSpot User ID:</b> Displays the user ID that is assigned to the registered provider. This field cannot be edited.</li>
<li><b>User to Assign:</b> Pick a user from the list, or click the picker button to open the Pick User window and assign a user.</li>
</ul>
<li>Click OK to assign the selected user to the User ID shown.</li>
</ol>
</div>
</div>
</body>
</html>```
