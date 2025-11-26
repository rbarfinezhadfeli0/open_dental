# File: ./www.opendental.com/manual/definitionsappointmentcolors.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Definitions: Appointment Colors</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('definitionsappointmentcolors','definitions','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/definitionsappointmentcolors.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/definitionsappointmentcolors.html" >v24.2</option><option value="https://www.opendental.com/manual241/definitionsappointmentcolors.html" >v24.1</option><option value="https://www.opendental.com/manual233/definitionsappointmentcolors.html" >v23.3</option><option value="https://www.opendental.com/manual232/definitionsappointmentcolors.html" >v23.2</option><option value="https://www.opendental.com/manual231/definitionsappointmentcolors.html" >v23.1</option><option value="https://www.opendental.com/manual224/definitionsappointmentcolors.html" >v22.4</option><option value="https://www.opendental.com/manual223/definitionsappointmentcolors.html" >v22.3</option><option value="https://www.opendental.com/manual222/definitionsappointmentcolors.html" >v22.2</option><option value="https://www.opendental.com/manual221/definitionsappointmentcolors.html" >v22.1</option><option value="https://www.opendental.com/manual214/definitionsappointmentcolors.html" >v21.4</option><option value="https://www.opendental.com/manual213/definitionsappointmentcolors.html" >v21.3</option><option value="https://www.opendental.com/manual212/definitionsappointmentcolors.html" >v21.2</option><option value="https://www.opendental.com/manual211/definitionsappointmentcolors.html" >v21.1</option><option value="https://www.opendental.com/manual205/definitionsappointmentcolors.html" >v20.5</option><option value="https://www.opendental.com/manual204/definitionsappointmentcolors.html" >v20.4</option><option value="https://www.opendental.com/manual203/definitionsappointmentcolors.html" >v20.3</option><option value="https://www.opendental.com/manual202/definitionsappointmentcolors.html" >v20.2</option><option value="https://www.opendental.com/manual201/definitionsappointmentcolors.html" >v20.1</option><option value="https://www.opendental.com/manual194/definitionsappointmentcolors.html" >v19.4</option><option value="https://www.opendental.com/manual193/definitionsappointmentcolors.html" >v19.3</option><option value="https://www.opendental.com/manual192/definitionsappointmentcolors.html" >v19.2</option><option value="https://www.opendental.com/manual191/definitionsappointmentcolors.html" >v19.1</option><option value="https://www.opendental.com/manual184/definitionsappointmentcolors.html" >v18.4</option><option value="https://www.opendental.com/manual183/definitionsappointmentcolors.html" >v18.3</option><option value="https://www.opendental.com/manual182/definitionsappointmentcolors.html" >v18.2</option><option value="https://www.opendental.com/manual181/definitionsappointmentcolors.html" >v18.1</option><option value="https://www.opendental.com/manual174/definitionsappointmentcolors.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Definitions: Appointment Colors</p></div>
<div class="GeneralPageContent">
<p>Customize colors in the Appointments Module with Appointment Colors definitions.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="definitions.html">Definitions</a>, Appointment Colors.</p>
<img src="images/definitionsAppointmentColors.png" width="713" height="600"/><p>The Appointment Colors definition determines some of the colors in the <a href="appointments.html">Appointments Module</a>. Other colors are determined in <a href="preferences.html">Preferences</a>, by <a href="providers.html">Providers</a>, or <a href="aptedit.html">Appointment</a> color overrides. Blockout colors are set in <a href="definitionsblockouts.html">Definitions: Blockout Types</a>.</p>
<p class="MarginBottomZero">Definitions: </p>
<ul class="MarginBottomGap">
<li><b>Practice Open</b>: Background color of the appointment schedule when the practice is open. This is the color shown when a provider is scheduled for an operatory. </li>
<li><b>Practice Closed</b>: Background color of the appointment schedule when the practice is closed. This is the color shown when there is no scheduled provider for an operatory.</li>
<li><b>Appointment Complete - Background</b>: Background color of appointments with status of Complete.</li>
<li><b>Holiday</b>: Background color of the appointment schedule when the day is marked as a Holiday in <a href="schedule.html">Schedule Setup</a>.</li>
<li><b>Blockout Text</b>: Text color of <a href="blockouts.html">Blockouts</a>.</li>
<li><b>Patient Note Background</b>: Background color for patient notes not yet set complete (see <a href="notes.html">Notes</a>, Appointment Notes).</li>
<li><b>Completed Pt Note Background</b>: Background color of patient notes with a status of Complete.</li>
</ul>
<p>Double-click an item to edit. The Edit Definition window opens. </p>
<img src="images/definitionEditApptColor.png" width="425" height="200"/><p>Click the Color block to select a <a href="colorselection.html">Color</a> then click <b>Save</b> to exit the window and keep changes. The item name cannot be changed or and items cannot be hidden.</p>
</div>
</div>
</body>
</html>```
