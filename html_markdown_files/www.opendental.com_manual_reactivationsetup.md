# File: ./www.opendental.com/manual/reactivationsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Setup Reactivation</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reactivationsetup','+appointments','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reactivationsetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reactivationsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/reactivationsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/reactivationsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/reactivationsetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/reactivationsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/reactivationsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/reactivationsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/reactivationsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/reactivationsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/reactivationsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/reactivationsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/reactivationsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/reactivationsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/reactivationsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/reactivationsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/reactivationsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/reactivationsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/reactivationsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/reactivationsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/reactivationsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/reactivationsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/reactivationsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/reactivationsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/reactivationsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/reactivationsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/reactivationsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/reactivationsetup.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Setup Reactivation</p></div>
<div class="GeneralPageContent">
<p>Use the reactivation setup window to determine your preferred settings for the Reactivation List.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Appointments, Reactivation.</p>
<img src="images/reactivationSetup.png" width="867" height="421"/><p>See <a href="recalllistreactivation.html">Reactivation List</a>. </p>
<p>Reactivation must be enabled in <a href="showfeatures.html">Show Features</a> for this window to be available.</p>
<h2>Reactivation Messages</h2>
<p>The Messages grid lists the email subject and body and postcard message for reactivation messages sent from the Reactivation List.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Mode</b>: The method of delivery (email or postcard).</li>
<li><b>Second Column</b>: General guidance about the message and its use.</li>
<li><b>Message</b>: The message text. Blank by default.<br/></li>
</ul>
<p>The bracketed text are variables which pull information directly from the database.</p>
<p>Available variables:<br/> [NameFL]: Patient first and last name.<br/> [NameF]: Patient first name only.<br/> [FamilyList]: List first name and recall due date of all family members (if Group Families is selected).<br/> [ClinicName]: <a href="cliniceditwindow.html">Clinic</a> name (patient's default clinic). If Clinics is not enabled, uses the Practice Name in Practice Setup instead.<br/> [ClinicPhone]: Clinic phone number. If Clinics is not enabled, uses the Practice Phone in Practice Setup instead.<br/> [PracticeName]: <a href="practice.html">Practice</a> name.<br/> [PracticePhone]: Practice phone.<br/> [OfficePhone]: Uses clinic phone number if available, otherwise inserts practice phone.</p>
<h2>Reactivation Status Options</h2>
<p>The status options determine which recall status is automatically applied when a reactivation message is sent. <br/> Customize options in <a href="definitionsrecallunschedstatus.html">Definitions: Recall / Unsched Status</a>.</p>
<p><b>Status for mailed Reactivation</b>: The status applied when a recall postcard is printed.<br/><b>Status for e-mailed Reactivation</b>: The status applied when a recall reminder is emailed.<br/></p>
<h2>Reactivation List Default View</h2>
<p>The following options affect what shows in the Reactivation List by default.</p>
<p class="MarginBottomZero"><b>Group Families</b>: Determines default setting for grouping families. </p>
<ul class="MarginBottomGap">
<li>Checked: Families will group together.</li>
<li>Unchecked: Families will not group together.</li>
</ul>
<p><b>Days Past</b>: Determines the default Start Date.</p>
<h2>Contact Rules</h2>
<p>Determines the rules for contacting patients on the Reactivation List.</p>
<p><b>Contact Interval (days)</b>: Number of days between contact for a patient.<br/><b>Max # Reminders (e.g., 4)</b>: Maximum attempts allowed to contact a patient.</p>
</div>
</div>
</body>
</html>```
