# File: ./www.opendental.com/manual232/preferences.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Preferences</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('preferences','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/preferences.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/preferences.html" >v24.2</option><option value="https://www.opendental.com/manual241/preferences.html" >v24.1</option><option value="https://www.opendental.com/manual233/preferences.html" >v23.3</option><option value="https://www.opendental.com/manual232/preferences.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/preferences.html" >v23.1</option><option value="https://www.opendental.com/manual224/preferences.html" >v22.4</option><option value="https://www.opendental.com/manual223/preferences.html" >v22.3</option><option value="https://www.opendental.com/manual222/preferences.html" >v22.2</option><option value="https://www.opendental.com/manual221/preferences.html" >v22.1</option><option value="https://www.opendental.com/manual214/preferences.html" >v21.4</option><option value="https://www.opendental.com/manual213/preferences.html" >v21.3</option><option value="https://www.opendental.com/manual212/preferences.html" >v21.2</option><option value="https://www.opendental.com/manual211/preferences.html" >v21.1</option><option value="https://www.opendental.com/manual205/preferences.html" >v20.5</option><option value="https://www.opendental.com/manual204/preferences.html" >v20.4</option><option value="https://www.opendental.com/manual203/preferences.html" >v20.3</option><option value="https://www.opendental.com/manual202/preferences.html" >v20.2</option><option value="https://www.opendental.com/manual201/preferences.html" >v20.1</option><option value="https://www.opendental.com/manual194/preferences.html" >v19.4</option><option value="https://www.opendental.com/manual193/preferences.html" >v19.3</option><option value="https://www.opendental.com/manual192/preferences.html" >v19.2</option><option value="https://www.opendental.com/manual191/preferences.html" >v19.1</option><option value="https://www.opendental.com/manual184/preferences.html" >v18.4</option><option value="https://www.opendental.com/manual183/preferences.html" >v18.3</option><option value="https://www.opendental.com/manual182/preferences.html" >v18.2</option><option value="https://www.opendental.com/manual181/preferences.html" >v18.1</option><option value="https://www.opendental.com/manual174/preferences.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Preferences</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Preferences.</p>
<img src="images/preferences.png" width="760" height="727"/><p>Preferences are sorted by category on the left. Click a category to view more preferences. </p>
<p><img src="images/prefMoreInfo.png" width="15" height="15"/> Some Preferences have additional details or examples. If the<i> i </i>icon appears when hovering over the preference, click to open a window with more information.</p>
<p><b>Search</b>: Enter a term to search Preferences. Any categories that contain a preference matching the exact term are highlighted in yellow. Click a category to view matching Preferences.</p>
<h2>Categories</h2>
<p>Each category is organized by module, then topic.</p>
<p><b>Appointment - General</b></p>
<img src="images/preferencesApptGeneral.png" width="714" height="463"/><p><b>Appointment - Appearance</b></p>
<img src="images/preferencesApptAppearance.png" width="716" height="548"/><p><b>Family - General</b></p>
<img src="images/preferencesFamilyGeneral.png" width="715" height="400"/><p><b>Family - Insurance</b></p>
<img src="images/preferencesFamilyInsurance.png" width="716" height="576"/><p><b>Account - General</b></p>
<img src="images/preferencesAccountGeneral.png" width="715" height="458"/><p><b>Account - Adjustments</b></p>
<img src="images/preferencesAccountAdjustments.png" width="716" height="430"/><p><b>Account - Insurance</b></p>
<img src="images/preferencesAccountInsurance.png" width="715" height="582"/><p><b>Account - Payments</b></p>
<img src="images/preferencesAccountPayments.png" width="713" height="515"/><p><b>Account - Recurring and Repeating Charges</b></p>
<img src="images/preferencesAccountRecRepCharges.png" width="715" height="432"/><p><b>Treat Plan - General</b></p>
<img src="images/preferencesTreatPlanGeneral.png" width="715" height="560"/><p><b>Treat Plan - Frequency Limitations</b></p>
<img src="images/preferencesTreatPlanFreqLimitations.png" width="714" height="630"/><p><b>Chart - General</b></p>
<img src="images/preferencesChartGeneral.png" width="714" height="537"/><p><b>Chart - Procedures</b></p>
<img src="images/preferencesChartProcedures.png" width="716" height="451"/><p><b>Imaging - General</b></p>
<img src="images/preferencesImagingGeneral.png" width="717" height="381"/><p><b>Manage - General</b></p>
<img src="images/preferencesManageGeneral.png" width="715" height="588"/><p><b>Manage - Billing Statements</b></p>
<img src="images/preferencesManageBilling.png" width="715" height="422"/><p><b>Server Connections - General</b></p>
<img src="images/preferencesServerConnectionsGeneral.png" width="714" height="356"/><p><b>Experimental</b></p>
<img src="images/preferencesExperimental.png" width="717" height="319"/></div>
</div>
</body>
</html>```
