# File: ./www.opendental.com/manual232/waitingroom.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Waiting Room</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('waitingroom','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/waitingroom.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/waitingroom.html" >v24.2</option><option value="https://www.opendental.com/manual241/waitingroom.html" >v24.1</option><option value="https://www.opendental.com/manual233/waitingroom.html" >v23.3</option><option value="https://www.opendental.com/manual232/waitingroom.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/waitingroom.html" >v23.1</option><option value="https://www.opendental.com/manual224/waitingroom.html" >v22.4</option><option value="https://www.opendental.com/manual223/waitingroom.html" >v22.3</option><option value="https://www.opendental.com/manual222/waitingroom.html" >v22.2</option><option value="https://www.opendental.com/manual221/waitingroom.html" >v22.1</option><option value="https://www.opendental.com/manual214/waitingroom.html" >v21.4</option><option value="https://www.opendental.com/manual213/waitingroom.html" >v21.3</option><option value="https://www.opendental.com/manual212/waitingroom.html" >v21.2</option><option value="https://www.opendental.com/manual211/waitingroom.html" >v21.1</option><option value="https://www.opendental.com/manual205/waitingroom.html" >v20.5</option><option value="https://www.opendental.com/manual204/waitingroom.html" >v20.4</option><option value="https://www.opendental.com/manual203/waitingroom.html" >v20.3</option><option value="https://www.opendental.com/manual202/waitingroom.html" >v20.2</option><option value="https://www.opendental.com/manual201/waitingroom.html" >v20.1</option><option value="https://www.opendental.com/manual194/waitingroom.html" >v19.4</option><option value="https://www.opendental.com/manual193/waitingroom.html" >v19.3</option><option value="https://www.opendental.com/manual192/waitingroom.html" >v19.2</option><option value="https://www.opendental.com/manual191/waitingroom.html" >v19.1</option><option value="https://www.opendental.com/manual184/waitingroom.html" >v18.4</option><option value="https://www.opendental.com/manual183/waitingroom.html" >v18.3</option><option value="https://www.opendental.com/manual182/waitingroom.html" >v18.2</option><option value="https://www.opendental.com/manual181/waitingroom.html" >v18.1</option><option value="https://www.opendental.com/manual174/waitingroom.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Waiting Room</p></div>
<div class="GeneralPageContent">
<p>In the lower right corner of the <a href="appointments.html">Appointments Module</a> is the Waiting Room. It is used to track patients who have arrived for their appointment.</p>
<img src="images/waitingroom.gif" width="232" height="188"/><p>Patients who list in the waiting room have a <i>Time Arrived</i>, but not a <i>Time Seated</i> entry on the <a href="aptedit.html">Edit Appointment</a>.</p>
<p> Automated entries for Time Arrived and Time Seated are triggered by the <a href="confirmationstatus.html">Confirmation Status</a> on the appointment. Patients who self check-in using <a href="../site/eclipboard.html">eClipboard</a> will be automatically entered in the Waiting Room.</p>
<h2>Add Patient to Waiting room</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>When the patient arrives, click on their appointment. This will select the patient.</li>
<li>On the right, click the confirmation status abbreviation that triggers a Time Arrived entry (e.g., Arrived). <br/><img src="images/waitingroomStatus.gif" width="157" height="118" class="ImageInParagraph"/><br/> The patient will list in the waiting room.</li>
<li>When patient is seated, select the status that triggers Time Seated (e.g., <i>In Room</i>). The patient will no longer show in the waiting room.</li>
</ol>
<h2>Display Options</h2>
<p class="MarginBottomZero">There are multiple settings that affect the waiting room. </p>
<ul class="MarginBottomGap">
<li>In <a href="preferences.html">Preferences</a>: <ul>
<li>Set the <i>Time Arrived trigger</i>. The default is <i>Arrived</i>.</li>
<li>Set the <i>Time Seated trigger</i>. The default is <i>In Treatment Room</i>.</li>
<li><i>Waiting Room alert time in minutes</i>, <i>Waiting room alert color</i>: Use text color to flag patients whose wait time exceeds a certain value.</li>
<li><i>Filter the waiting room based on the selected appointment view</i>.</li>
<li><i>Refresh every 60 seconds. Keeps waiting room times refreshed</i>.</li>
</ul>
</li>
<li>Set the <i>Waiting Room Name Format</i> in <a href="appointmentvieweditwindow.html">Appointment View Edit</a>.</li>
</ul>
<p>When using <a href="clinics.html">clinics</a>, the patients that show in the waiting room are based on the clinic selected in the Main Menu. If Headquarters is the clinic, all patients waiting for all clinics will show.</p>
<p>If a patient is accidentally placed in the waiting room, double-click the appointment and remove the Time Seated value.</p>
<h2>Technical Details</h2>
<p>The Time Arrived trigger uses the server time. The time waited uses the local workstation time. If the server time and workstation time do not match, the patient may not display properly in the Waiting Room.</p>
</div>
</div>
</body>
</html>```
