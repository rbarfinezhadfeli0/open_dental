# File: ./www.opendental.com/manual/dashboardsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dashboard Setup</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dashboardsetup','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/dashboardsetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/dashboardsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/dashboardsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/dashboardsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/dashboardsetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/dashboardsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/dashboardsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/dashboardsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/dashboardsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/dashboardsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/dashboardsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/dashboardsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/dashboardsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/dashboardsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/dashboardsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/dashboardsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/dashboardsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/dashboardsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/dashboardsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/dashboardsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/dashboardsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/dashboardsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/dashboardsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/dashboardsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/dashboardsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/dashboardsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/dashboardsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/dashboardsetup.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dashboard Setup</p></div>
<div class="GeneralPageContent">
<p>Patient Dashboards can be customized to display desired fields or information.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Patient Dashboards, Dashboard Setup.</p>
<img src="images/patientDashSetup.png" width="871" height="393"/><p>Alternatively, if a database has more than 28 dashboards, in the Main Menu, click Tools, Patient Dashboards, Setup.</p>
<p>To enable existing Patient Dashboards, see <a href="patientdashboard.html">Patient Dashboard</a>.</p>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video: <a href="https://www.youtube.com/watch?v=3_59HW7wDcw">QuickTip: Patient Dashboard</a>.</p>
<p><b>User Group</b>: To access the dashboard, a user must be assigned to a user group that has a dashboard marked as <i>Allowed</i>. The <i>SecurityAdmin</i> permission is required to allow user group access.</p>
<p><b>Set All</b>: Click to mark all custom dashboards as allowed for the selected user group.</p>
<p><b>Add</b>: Click to add a new blank dashboard layout to the Custom grid.</p>
<p><b>Internal</b>: The default Patient Dashboard layouts. These layouts cannot be edited, but can be copied.</p>
<p><b>Custom</b>: Patient Dashboard layouts that can be edited.</p>
<p><b>Allowed</b>: Indicates if a dashboard can be utilized by the selected User Group. Click in the column to change. Dashboards allowed for the User Group are marked with an <i>X</i>.</p>
<p><b>Copy</b>: Select an existing Interal layout and click to add a copy to the Custom grid. These copies can be customized.</p>
<p><b>Tools</b>: Click to open the <a href="sheettools.html">Sheet Tools Import / Export</a>. Useful for sharing saved layouts with other Open Dental databases.</p>
<p><b>Duplicate</b>: Select an existing layout from the Custom grid and click to to create a copy.</p>
<h2>Editing a Dashboard</h2>
<p>Double-click a dashboard in the Custom grid to edit it. </p>
<p>Dashboards are edited in the same style as <a href="sheets.html">Sheets</a>. For more information on editing sheets, see <a href="sheetsetup.html">Edit Sheet Def</a> and <a href="sheetsaddelements.html">Sheet Field Types</a>.</p>
<img src="images/patientDashEdit.png" width="721" height="776"/></div>
</div>
</body>
</html>```
