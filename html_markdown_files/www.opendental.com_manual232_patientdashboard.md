# File: ./www.opendental.com/manual232/patientdashboard.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Dashboard</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('patientdashboard','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/patientdashboard.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/patientdashboard.html" >v24.2</option><option value="https://www.opendental.com/manual241/patientdashboard.html" >v24.1</option><option value="https://www.opendental.com/manual233/patientdashboard.html" >v23.3</option><option value="https://www.opendental.com/manual232/patientdashboard.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/patientdashboard.html" >v23.1</option><option value="https://www.opendental.com/manual224/patientdashboard.html" >v22.4</option><option value="https://www.opendental.com/manual223/patientdashboard.html" >v22.3</option><option value="https://www.opendental.com/manual222/patientdashboard.html" >v22.2</option><option value="https://www.opendental.com/manual221/patientdashboard.html" >v22.1</option><option value="https://www.opendental.com/manual214/patientdashboard.html" >v21.4</option><option value="https://www.opendental.com/manual213/patientdashboard.html" >v21.3</option><option value="https://www.opendental.com/manual212/patientdashboard.html" >v21.2</option><option value="https://www.opendental.com/manual211/patientdashboard.html" >v21.1</option><option value="https://www.opendental.com/manual205/patientdashboard.html" >v20.5</option><option value="https://www.opendental.com/manual204/patientdashboard.html" >v20.4</option><option value="https://www.opendental.com/manual203/patientdashboard.html" >v20.3</option><option value="https://www.opendental.com/manual202/patientdashboard.html" >v20.2</option><option value="https://www.opendental.com/manual201/patientdashboard.html" >v20.1</option><option value="https://www.opendental.com/manual194/patientdashboard.html" >v19.4</option><option value="https://www.opendental.com/manual193/patientdashboard.html" >v19.3</option><option value="https://www.opendental.com/manual192/patientdashboard.html" >v19.2</option><option value="https://www.opendental.com/manual191/patientdashboard.html" >v19.1</option><option value="https://www.opendental.com/manual184/patientdashboard.html" >v18.4</option><option value="https://www.opendental.com/manual183/patientdashboard.html" >v18.3</option><option value="https://www.opendental.com/manual182/patientdashboard.html" >v18.2</option><option value="https://www.opendental.com/manual181/patientdashboard.html" >v18.1</option><option value="https://www.opendental.com/manual174/patientdashboard.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Dashboard</p></div>
<div class="GeneralPageContent">
<p>The patient dashboard is a customizable view of basic patient information that will display on the right-hand side of Open Dental.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Patient Dashboards. Select your preferred dashboard from the available options.</p>
<img src="images/patientDash.png" width="395" height="751"/><p> Only dashboards marked as <i>Allowed</i> for a user's <a href="securityusergroups.html">User Group</a> will list in the tools menu. To create and edit dashboards, see <a href="dashboardsetup.html">Dashboard Setup</a>.</p>
<p>If a database has more than 28 dashboards, a new window will open. Double-click a dashboard from the list to enable it. </p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our <a href="https://youtu.be/3_59HW7wDcw">QuickTip: Patient Dashboard</a> video for a brief overview of setup and usage.</p>
<h2>Options</h2>
<p>To refresh a dashboard, refresh the module or right-click anywhere on the dashboard and select <b>Refresh</b>.</p>
<p>To close an open dashboard, right-click anywhere on the dashboard and select <b>Close</b>, or deselect the dashboard from the tools list.</p>
</div>
</div>
</body>
</html>```
