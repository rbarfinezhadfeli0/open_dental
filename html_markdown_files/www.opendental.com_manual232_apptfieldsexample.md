# File: ./www.opendental.com/manual232/apptfieldsexample.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Screening Patient Temperature</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('apptfieldsexample','appointmentfields','+appointments','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/apptfieldsexample.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/apptfieldsexample.html" >v24.2</option><option value="https://www.opendental.com/manual241/apptfieldsexample.html" >v24.1</option><option value="https://www.opendental.com/manual233/apptfieldsexample.html" >v23.3</option><option value="https://www.opendental.com/manual232/apptfieldsexample.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/apptfieldsexample.html" >v23.1</option><option value="https://www.opendental.com/manual224/apptfieldsexample.html" >v22.4</option><option value="https://www.opendental.com/manual223/apptfieldsexample.html" >v22.3</option><option value="https://www.opendental.com/manual222/apptfieldsexample.html" >v22.2</option><option value="https://www.opendental.com/manual221/apptfieldsexample.html" >v22.1</option><option value="https://www.opendental.com/manual214/apptfieldsexample.html" >v21.4</option><option value="https://www.opendental.com/manual213/apptfieldsexample.html" >v21.3</option><option value="https://www.opendental.com/manual212/apptfieldsexample.html" >v21.2</option><option value="https://www.opendental.com/manual211/apptfieldsexample.html" >v21.1</option><option value="https://www.opendental.com/manual205/apptfieldsexample.html" >v20.5</option><option value="https://www.opendental.com/manual204/apptfieldsexample.html" >v20.4</option><option value="https://www.opendental.com/manual203/apptfieldsexample.html" >v20.3</option><option value="https://www.opendental.com/manual202/apptfieldsexample.html" >v20.2</option><option value="https://www.opendental.com/manual201/apptfieldsexample.html" >v20.1</option><option value="https://www.opendental.com/manual194/apptfieldsexample.html" >v19.4</option><option value="https://www.opendental.com/manual193/apptfieldsexample.html" >v19.3</option><option value="https://www.opendental.com/manual192/apptfieldsexample.html" >v19.2</option><option value="https://www.opendental.com/manual191/apptfieldsexample.html" >v19.1</option><option value="https://www.opendental.com/manual184/apptfieldsexample.html" >v18.4</option><option value="https://www.opendental.com/manual183/apptfieldsexample.html" >v18.3</option><option value="https://www.opendental.com/manual182/apptfieldsexample.html" >v18.2</option><option value="https://www.opendental.com/manual181/apptfieldsexample.html" >v18.1</option><option value="https://www.opendental.com/manual174/apptfieldsexample.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Screening Patient Temperature</p></div>
<div class="GeneralPageContent">
<p>Patient temperatures can be tracked using an Appointment Field Def. </p>
<p>Create an <a href="appointmentfields.html">Appointment Field Def</a> to record and view patient temperatures. </p>
<img src="images/apptFieldDefTemperature.png" width="698" height="386"/><p>Tracking temperatures in an Appointment Field Def, allows staff to record the temperature before a patient is seen for treatment.</p>
<p>The temperature can be viewed within the Edit Appointment window, or can be added to the <a href="appointmentviews.html">Appointment View</a> to view from the <a href="appointments.html">Appointments Module</a> at a glance.</p>
<img src="images/apptFieldDefApptView.png" width="185" height="129"/><h2>Create the Appointment Field Def</h2>
<p>To create the appointment field, go to Setup, Appointments, Appointment Field Defs. Click <b>Add</b> to create the field.</p>
<p>There are two methods for tracking temperature: </p>
<p><b>Record Exact Temperature </b><br/> Set the <b>Field Type</b> to <i>Text</i>.<br/><img src="images/apptFieldDefTemperatureText.png" width="359" height="203" class="ImageInParagraph"/><br/> This allows the user to type in the temperature for each patient. </p>
<p><b>Select a Temperature Status</b><br/> Set the <b>Field Type</b> to <i>PickList</i>. Then enter options.<br/><img src="images/apptFieldDefTemperaturePickList.png" width="359" height="317" class="ImageInParagraph"/><br/> This allows the user to select the status from the pick list. Enter each status on its own line.</p>
<h2>Add the Temperature Field to the Appointment View</h2>
<p>To add the temperature to an Appointment View, go to Setup, Appointments, Appointment Views. Double-click on the Appointment View to open <a href="appointmentvieweditwindow.html">Appointment View Edit</a>.</p>
<p>The Temperature field is listed under <i>Appt Field Defs</i>. Select <i>Temperature</i>, then click the <b>Right</b> arrow to move the field to the <i>Main List</i>. </p>
<img src="images/apptViewAddTemperature.png" width="862" height="726"/><p>Use the <b>Up</b> and <b>Down</b> arrows to move the field up or down in the Main List. Double-click the field to move it to the upper-right or upper-left corner.</p>
<img src="images/apptViewAddTemperatureMove.png" width="405" height="421"/><p>When the temperature is entered for a patient, it will show on the appointment. </p>
</div>
</div>
</body>
</html>```
