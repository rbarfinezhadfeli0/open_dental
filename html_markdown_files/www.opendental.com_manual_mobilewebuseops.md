# File: ./www.opendental.com/manual/mobilewebuseops.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Mobile Web Operatories</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mobilewebuseops','mobilewebuse','mobilewebhostedbyod','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mobilewebuseops.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mobilewebuseops.html" >v24.2</option><option value="https://www.opendental.com/manual241/mobilewebuseops.html" >v24.1</option><option value="https://www.opendental.com/manual233/mobilewebuseops.html" >v23.3</option><option value="https://www.opendental.com/manual232/mobilewebuseops.html" >v23.2</option><option value="https://www.opendental.com/manual231/mobilewebuseops.html" >v23.1</option><option value="https://www.opendental.com/manual224/mobilewebuseops.html" >v22.4</option><option value="https://www.opendental.com/manual223/mobilewebuseops.html" >v22.3</option><option value="https://www.opendental.com/manual222/mobilewebuseops.html" >v22.2</option><option value="https://www.opendental.com/manual221/mobilewebuseops.html" >v22.1</option><option value="https://www.opendental.com/manual214/mobilewebuseops.html" >v21.4</option><option value="https://www.opendental.com/manual213/mobilewebuseops.html" >v21.3</option><option value="https://www.opendental.com/manual212/mobilewebuseops.html" >v21.2</option><option value="https://www.opendental.com/manual211/mobilewebuseops.html" >v21.1</option><option value="https://www.opendental.com/manual205/mobilewebuseops.html" >v20.5</option><option value="https://www.opendental.com/manual204/mobilewebuseops.html" >v20.4</option><option value="https://www.opendental.com/manual203/mobilewebuseops.html" >v20.3</option><option value="https://www.opendental.com/manual202/mobilewebuseops.html" >v20.2</option><option value="https://www.opendental.com/manual201/mobilewebuseops.html" >v20.1</option><option value="https://www.opendental.com/manual194/mobilewebuseops.html" >v19.4</option><option value="https://www.opendental.com/manual193/mobilewebuseops.html" >v19.3</option><option value="https://www.opendental.com/manual192/mobilewebuseops.html" >v19.2</option><option value="https://www.opendental.com/manual191/mobilewebuseops.html" >v19.1</option><option value="https://www.opendental.com/manual184/mobilewebuseops.html" >v18.4</option><option value="https://www.opendental.com/manual183/mobilewebuseops.html" >v18.3</option><option value="https://www.opendental.com/manual182/mobilewebuseops.html" >v18.2</option><option value="https://www.opendental.com/manual181/mobilewebuseops.html" >v18.1</option><option value="https://www.opendental.com/manual174/mobilewebuseops.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Mobile Web Operatories</p></div>
<div class="GeneralPageContent">
<p><div class="Note">Note: Mobile Web has been replaced by <a href="opendentalmobile.html">ODMobile</a>, an app that is installed right to your mobile device! Existing users, on Open Dental Version 22.4 or greater, can continue to use Open Dental Mobile Web, however new features will not be added.</div>
</p>
<p>In the <a href="mobilewebuse.html">Mobile Web Home</a> screen, press Operatories.</p>
<img src="images/mobileWebOperatory.png" width="402" height="821"/><p>The Operatories view displays appointments by operatory. You can also move, modify, delete, or create an appointment from here.</p>
<p class="MarginBottomZero">The current operatory showing is labeled at the top. To switch operatories, press the down arrow and select a new one, or swipe left or right on the schedule. </p>
<ul class="MarginBottomGap">
<li>If using clinics, select the clinic first. All operatories associated with that clinic will list.</li>
<li>Press the arrows to the left/right of the date to move back (&lt;) or forward (&gt;) one day. Press the down arrow to select a date from a calendar.</li>
<li>Each appointment displays the patient name, procedures, and <a href="confirmationstatus.html">Confirmation Status</a>.</li>
<li>Select an appointment to show Modify, Move, and Delete icons.</li>
<li><a href="blockouts.html">Blockouts</a> will display but cannot be edited from Mobile Web. Changes must be made from the full program.</li>
<li><a href="apptbreak.html">Broken Appointments</a> will display with a big X: </li>
</ul>
<h2>Create a New Appointment</h2>
<p>Press an available time slot in an operatory.<br/><div class="Note">Note: If selecting a time slot that overlaps with a Do Not Schedule blockout a warning will appear.</div>
</p>
<p>Select the appointment start time.</p>
<p class="MarginBottomZero">Enter the appointment details.  </p>
<ul class="MarginBottomGap">
<li>Press Select Patient to select from the list of active patients.</li>
<li>Press the down arrows to select appointment status, confirmed status, provider, hygienist and <a href="appointmenttypes.html">appointment type</a>.</li>
<li>Enter the appointment duration. <div class="Note">Note: <ul>
<li>If an appointment type is selected, and the time duration entered matches the appointment type, the Appointment Time Pattern is retained.</li>
<li>If no appointment type is selected, or the time duration entered does not match the appointment type, the time pattern will add assistant time to meet the full time duration.</li>
</ul>
</div>
</li>
<li>Press Add Note to add an appointment note.</li>
</ul>
<p>Press Save to create the appointment. It will immediately show in the new time slot.</p>
<h2>Modify Appointment Information</h2>
<p>Highlight the appointment.</p>
<p>Press the edit icon  <img src="images/mobileWebViewApptIcon.gif" width="25" height="26" style="margin-bottom: 0px"/> to open appointment details.</p>
<p class="MarginBottomZero">Appointment status, confirmation status, provider, hygienist, duration, appointment type, and appointment note can be modified.  </p>
<ul class="MarginBottomGap">
<li>Press a down arrow to select a new option.</li>
<li>Type the duration in minutes.</li>
<li>Press Add Note to add an appointment note.</li>
</ul>
<p>Press Save.</p>
<h2>Move an Appointment</h2>
<p>Highlight the appointment.</p>
<p>Press the Move icon  <img src="images/mobileWebMoveIcon.gif" width="64" height="61" style="margin-bottom: 0px"/>. <br/><img src="images/mobileWebMovePopup.gif" width="390" height="144" class="ImageInParagraph"/></p>
<p>Go to the new time slot in the correct operatory and press it. <br/><img src="images/mobileWebSelectStartTime.gif" width="390" height="417" class="ImageInParagraph"/></p>
<p>Select the Start Time.</p>
<br/><p class="MarginBottomZero">The appointment will immediately show in the new time slot. </p>
<ul class="MarginBottomGap">
<li>Appointments will automatically apply Time Asked To Arrive.</li>
<li>Provider/hygienist and appointment length will not change.</li>
<li>Appointments moved to or from a prospective operatory (see <a href="operatories.html">Operatories</a>) will automatically update the patient status accordingly.</li>
<li>The appointment's confirmation status is reset if moved to a different day.</li>
</ul>
<h2>Delete an Appointment</h2>
<p>Highlight the appointment.</p>
<p>Press the delete icon  <img src="images/mobileWebDeleteIcon.gif" width="25" height="26" style="margin-bottom: 0px"/>.</p>
<p>Press Yes to confirm or No to cancel.</p>
</div>
</div>
</body>
</html>```
