# File: ./www.opendental.com/manual/odtouchhome.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ODTouch: Home Screen</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('odtouchhome','odtouchsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/odtouchhome.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/odtouchhome.html" >v24.2</option><option value="https://www.opendental.com/manual241/odtouchhome.html" >v24.1</option><option value="https://www.opendental.com/manual233/odtouchhome.html" >v23.3</option><option value="https://www.opendental.com/manual232/odtouchhome.html" >v23.2</option><option value="https://www.opendental.com/manual231/odtouchhome.html" >v23.1</option><option value="https://www.opendental.com/manual224/odtouchhome.html" >v22.4</option><option value="https://www.opendental.com/manual223/odtouchhome.html" >v22.3</option><option value="https://www.opendental.com/manual222/odtouchhome.html" >v22.2</option><option value="https://www.opendental.com/manual221/odtouchhome.html" >v22.1</option><option value="https://www.opendental.com/manual214/odtouchhome.html" >v21.4</option><option value="https://www.opendental.com/manual213/odtouchhome.html" >v21.3</option><option value="https://www.opendental.com/manual212/odtouchhome.html" >v21.2</option><option value="https://www.opendental.com/manual211/odtouchhome.html" >v21.1</option><option value="https://www.opendental.com/manual205/odtouchhome.html" >v20.5</option><option value="https://www.opendental.com/manual204/odtouchhome.html" >v20.4</option><option value="https://www.opendental.com/manual203/odtouchhome.html" >v20.3</option><option value="https://www.opendental.com/manual202/odtouchhome.html" >v20.2</option><option value="https://www.opendental.com/manual201/odtouchhome.html" >v20.1</option><option value="https://www.opendental.com/manual194/odtouchhome.html" >v19.4</option><option value="https://www.opendental.com/manual193/odtouchhome.html" >v19.3</option><option value="https://www.opendental.com/manual192/odtouchhome.html" >v19.2</option><option value="https://www.opendental.com/manual191/odtouchhome.html" >v19.1</option><option value="https://www.opendental.com/manual184/odtouchhome.html" >v18.4</option><option value="https://www.opendental.com/manual183/odtouchhome.html" >v18.3</option><option value="https://www.opendental.com/manual182/odtouchhome.html" >v18.2</option><option value="https://www.opendental.com/manual181/odtouchhome.html" >v18.1</option><option value="https://www.opendental.com/manual174/odtouchhome.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ODTouch: Home Screen</p></div>
<div class="GeneralPageContent">
<p>To begin using ODTouch, see <a href="eservicessetup.html">eServices Setup</a>.</p>
<p>In ODTouch, the Home Screen opens upon login.</p>
<img src="images/odtouchHome.png" width="766" height="508"/><p>To begin using ODTouch, first sign up for the eService and set up the app. See <a href="odtouchsetup.html">ODTouch Setup</a> for instructions.</p>
<p>Use the Home Page to navigate the ODTouch application. The logged-in username displays in the upper left. The selected patient's name displays in the upper right. </p>
<h2>Daily Appointments Area</h2>
<p>Select a patient or view daily appointments on the left-hand side.</p>
<img src="images/odtouchHomeDailyAppts.png" width="184" height="222"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Select Patient</b>: Tap to open the Patient Screen to search for a specific patient.</li>
<li><b>Recent Patients</b>: Tap the recent patients icon to switch the current patient to a recently selected patient.</li>
<li><b>Today's Appointments</b>: Tap the provider name to select a different provider from the list. Appointments assigned to the provider list below. Tap the refresh icon or pull down on the appointments list to refresh the area. </li>
<li><b>Appointments List</b>: Tap an appointment to select the patient. Tap the three dots on an appointment to edit the appointment, begin eRouting, or delete the appointment. </li>
</ul>
<h2>Patient Information Area</h2>
<p>The center column of the Home Screen displays information and options specific to the selected patient. </p>
<img src="images/odtouchHomePatientInfo.png" width="375" height="298"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Patient Card</b>: The Patient Card displays information for the selected patient, including name, birthdate, gender, contact information, the patient picture, family aging, and more. This information is read-only and can only be edited from the <a href="patientedit.html">Edit Patient Information</a> window in Open Dental. Tap the patient picture to enlarge it.</li>
<li><b>Tx Plans</b>: Tap to open the <a href="odtouchtreatmentplans.html">ODTouch: Treatment Plan Home Screen</a>.</li>
<li><b>Perio</b>: Tap to open the <a href="odtouchperio.html">Perio Exams Home Screen</a>.</li>
<li><b>Pay Plans</b>: Tap to open the <a href="odtouchpayplan.html">Payment Plans Home Screen</a>.</li>
<li><b>Images</b>: Tap to open the <a href="odtouchimages.html">Images Home Screen</a>. </li>
<li><b>Exam Sheets</b>: Tap to open the <a href="odtouchexam.html">Exam Sheets Home Screen</a>.</li>
<li><b>eRouting</b>: Tap to begin <a href="odtoucherouting.html">eRouting</a>.</li>
<li><b>Medical</b>: Tap to open the <a href="odtouchmedical.html">Medical Home Screen</a>.</li>
<li><b>eRx</b>: Tap to open <a href="odtoucherx.html">eRx through DoseSpot</a>.</li>
<li><b>Chart</b>: Tap to open the <a href="odtouchchart.html">Chart Home Screen</a>.</li>
</ul>
<h2>Provider Goals</h2>
<p>A brief overview of today's provider goals displays in the upper right. Tap the graph to open <a href="odtouchprodgoal.html">Provider Production Goals</a>. This area only displays when logged in as a provider. </p>
<img src="images/odtouchHomeGoals.png" width="177" height="93"/><h2>Office Options Area</h2>
<p>The following options apply to office staff and are not specific to a patient.</p>
<img src="images/odtouchHomeOffice.png" width="175" height="292"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Appts</b>: Tap to open the <a href="odtouchappts.html">Appointments Home Screen</a>.</li>
<li><b>Reports</b>: Tap to open the <a href="odtouchreports.html">Reports Home Screen</a>.</li>
<li><b>Messages</b>: To to open <a href="odtouchmessages.html">ODTouch: Messages</a>. </li>
<li><b>Settings</b>: Tap to open <a href="odtouchsettings.html">ODTouch Settings</a>.</li>
<li><b>Change User</b>: Tap to change the logged-in user.</li>
<li><b>Logout</b>: Tap to log out of the application entirely.</li>
</ul>
<h2>Patient Menu Dropdown</h2>
<p>The selected patient displays in the upper right. Tap to open the Patient Menu. This menu is always accessible from every screen in ODTouch. Use it to navigate the app without returning to the Home Screen.</p>
<img src="images/odtouchHomePatientDropdown.png" width="109" height="35"/><p class="MarginBottomZero">The connection icon signifies the connectivity status. Typically, devices should connect to the database using the eServices Listener, as determined via the <a href="econnector.html">eConnector</a>. There are four possible connection statuses.  </p>
<ul class="MarginBottomGap">
<li>Globe with Question Mark symbol: Indicates an unknown status. </li>
<li>No Wifi symbol: Indicates the status is disconnected. </li>
<li>WiFi symbol: Indicates the status is connected via HQ Proxy. </li>
<li>LAN symbol: Indicates the status is connected via WAN or LAN connection.</li>
</ul>
<p>Also see <a href="odtouchconnectivity.html">ODTouch: Connectivity Statuses</a>.</p>
</div>
</div>
</body>
</html>```
