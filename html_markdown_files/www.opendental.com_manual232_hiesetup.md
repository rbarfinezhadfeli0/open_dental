# File: ./www.opendental.com/manual232/hiesetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - HIE Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('hiesetup','+menusetupAdvanced','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/hiesetup.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/hiesetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/hiesetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/hiesetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/hiesetup.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/hiesetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/hiesetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/hiesetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/hiesetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/hiesetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/hiesetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/hiesetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/hiesetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/hiesetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/hiesetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/hiesetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/hiesetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/hiesetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/hiesetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/hiesetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/hiesetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/hiesetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/hiesetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/hiesetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/hiesetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/hiesetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/hiesetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/hiesetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>HIE Setup</p></div>
<div class="GeneralPageContent">
<p>HIE (Health Information Exchange) Setup allows practices to determine the setting for generating and exporting Continuity of Care Documents (CCDs).</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Advanced Setup, HIE.</p>
<img src="images/HIESetup.png" width="606" height="305"/><p></p>
<p>Also see <a href="ehrccd.html">EHR Continuity of Care Document ( CCD )</a>.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Clinic</b>: Determines the HIE settings for the selected clinic.</li>
<li><b>Is Enabled</b>: Check to enable the automatic export of CCDs.</li>
<li><b>Is Medicaid Only</b>: Determines which insurance plans are eligible for CCDs. <ul>
<li>Checked: Only create CCDs for patients with Medicaid insurance plans. A Medicaid plan is defined as a plan with an <a href="payerids.html">Electronic Payer ID</a> marked as <i>Is Medicaid</i>.</li>
<li>Unchecked: Allow CCDs for any insurance plan.</li>
</ul>
</li>
<li><b>Export CCD Path</b>: Enter the path to export CCDs to. Click<b> [...] </b>to browse for a folder.</li>
<li><b>Export CCD Time of Day</b>: Enter the time of day to export CCDs. The <a href="opendentalservice.html">Open Dental Service</a> is required for CCDs to be created and exported. The Open Dental Service processes HIE queues every 5 minutes for 1 hour beginning at the time entered.<br/></li>
</ul>
<h2>HIE and CCD Logic</h2>
<p>Before a CCD is generated, the information is placed in the HIE Queue. The actions below trigger a new HIE Queue row.</p>
<p class="MarginBottomZero">In the Appointments Module, a hiequeue is created for the patient when: </p>
<ul class="MarginBottomGap">
<li>Appointment rescheduled: A scheduled appointment is moved from one time slot to another, a Planned or Unscheduled appointment is moved from the Pinboard to the Schedule.</li>
<li><a href="apptcomplete.html">Set Appointment Complete</a>: Use the Complete toolbar button or right-click menu to set an appointment complete.</li>
<li>Appointment deleted: Use the Delete toolbar button or right-click menu to delete an appointment.</li>
<li>Send to Unscheduled List: Use the Unsched toolbar button or right-click menu send an appointment to the Unscheduled List.</li>
<li><a href="apptbreak.html">Break Appointment</a>: Use the Break toolbar button or right-click menu to break an appointment</li>
</ul>
<p class="MarginBottomZero">When clicking OK from the <a href="aptedit.html">Edit Appointment</a> window a hiequeue is created for the patient if: </p>
<ul class="MarginBottomGap">
<li>The status of the appointment is set to Broken.</li>
<li>Clicking the Delete button.</li>
<li>A new appointment is created.</li>
<li>An existing appointment is edited.</li>
</ul>
<p class="MarginBottomZero">A hiequeue row is created when a patient is added: </p>
<ul class="MarginBottomGap">
<li>By entering patient demographic information in the <a href="patientedit.html">Edit Patient Information</a> window.</li>
<li>By adding patients from the <a href="familyadd.html">Add Family</a> window. One hiequeue row is created for each family member.</li>
<li>By <a href="webformsretrieve.html">Web Forms Retrieve</a>.</li>
</ul>
<p class="MarginBottomZero">CCDs are only created for a patient if they have information queued, and the following is true: </p>
<ul class="MarginBottomGap">
<li>The feature is enabled.</li>
<li>A valid export path is entered.</li>
<li>They meet the insurance criteria.  <ul>
<li>If <i>Is Medicaid Only</i> is checked, the patient has a medicaid insurance plan.</li>
</ul>
</li>
<li>The <i>Export CCD Time of Day</i> has passed. CCDs are only generated once a day at the run time.</li>
</ul>
<p><div class="Note">Note: Any errors that occur during the processing of outstanding HIE queues are logged. The name of the directory is <i>HieQueue</i> and is located in the logger directory of the Open Dental Service.</div>
</p>
</div>
</div>
</body>
</html>```
