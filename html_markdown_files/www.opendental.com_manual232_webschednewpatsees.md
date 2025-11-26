# File: ./www.opendental.com/manual232/webschednewpatsees.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Web Sched New Patient: What Patient Sees</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('webschednewpatsees','webschednewpatsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/webschednewpatsees.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/webschednewpatsees.html" >v24.2</option><option value="https://www.opendental.com/manual241/webschednewpatsees.html" >v24.1</option><option value="https://www.opendental.com/manual233/webschednewpatsees.html" >v23.3</option><option value="https://www.opendental.com/manual232/webschednewpatsees.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/webschednewpatsees.html" >v23.1</option><option value="https://www.opendental.com/manual224/webschednewpatsees.html" >v22.4</option><option value="https://www.opendental.com/manual223/webschednewpatsees.html" >v22.3</option><option value="https://www.opendental.com/manual222/webschednewpatsees.html" >v22.2</option><option value="https://www.opendental.com/manual221/webschednewpatsees.html" >v22.1</option><option value="https://www.opendental.com/manual214/webschednewpatsees.html" >v21.4</option><option value="https://www.opendental.com/manual213/webschednewpatsees.html" >v21.3</option><option value="https://www.opendental.com/manual212/webschednewpatsees.html" >v21.2</option><option value="https://www.opendental.com/manual211/webschednewpatsees.html" >v21.1</option><option value="https://www.opendental.com/manual205/webschednewpatsees.html" >v20.5</option><option value="https://www.opendental.com/manual204/webschednewpatsees.html" >v20.4</option><option value="https://www.opendental.com/manual203/webschednewpatsees.html" >v20.3</option><option value="https://www.opendental.com/manual202/webschednewpatsees.html" >v20.2</option><option value="https://www.opendental.com/manual201/webschednewpatsees.html" >v20.1</option><option value="https://www.opendental.com/manual194/webschednewpatsees.html" >v19.4</option><option value="https://www.opendental.com/manual193/webschednewpatsees.html" >v19.3</option><option value="https://www.opendental.com/manual192/webschednewpatsees.html" >v19.2</option><option value="https://www.opendental.com/manual191/webschednewpatsees.html" >v19.1</option><option value="https://www.opendental.com/manual184/webschednewpatsees.html" >v18.4</option><option value="https://www.opendental.com/manual183/webschednewpatsees.html" >v18.3</option><option value="https://www.opendental.com/manual182/webschednewpatsees.html" >v18.2</option><option value="https://www.opendental.com/manual181/webschednewpatsees.html" >v18.1</option><option value="https://www.opendental.com/manual174/webschednewpatsees.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Web Sched New Patient: What Patient Sees</p></div>
<div class="GeneralPageContent">
<p>When using <a href="webschednewpatsetup.html">Web Sched New Patient</a>, what a patient sees depends on the selected settings.</p>
<img src="images/webSchedNewPatientMain.png" width="822" height="565"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>To make changes to some interface options, see <a href="webschednewpatsetup.html">Web Sched New Patient</a> and <a href="webschedadvanced.html">Web Sched Advanced</a>.</li>
<li>For an example of Web Sched embedded in a website, see our <a href="http://patientviewer.com/demo/wsnp_embedded">Sample Website</a>.  <ul>
<li>This is only provided as an example of how the Patient Viewer can be embedded in a website to enhance its appearance. Open Dental is not able to embed or manage custom websites for your practice. Your IT and/or webmaster are your best resource if you wish to have Web Sched New Patient embedded in your site.</li>
</ul>
</li>
</ul>
<h2>Patient Prompts</h2>
<p>Questions and prompts that appear are determined by settings selected by the office and how the previous prompt was answered by the patient. </p>
<img src="images/webSchedNewPatPrompts.gif" width="755" height="348"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>If a patient has had an appointment with your office before, they will be directed to <a href="webschedexistingpatientsees.html">Web Sched Existing Patient: What Patient Sees</a> instead. </li>
<li>If <i>Allow Children</i> is enabled in <a href="webschedadvanced.html">Web Sched Advanced</a>, parents and guardians are able to schedule appointments for their children.</li>
<li>If <a href="webschedcarrierrule.html">Carrier Rules</a> are enabled, patients can enter carrier information.</li>
<li>Patients will be prompted to select a reason for their appointment. Options are determined by <a href="definitionswebschednewpatappttypes.html">Definitions: Web Sched New Patient Appt Types</a>.</li>
</ul>
<h2>View Openings</h2>
<p>After clicking <b>View Openings</b>, patients can select the date and time of their appointment.</p>
<img src="images/webschednewpatientCalendar.gif" width="732" height="404"/><h2>Patient Information</h2>
<p>Patients and Guardians will be prompted to enter contact information.</p>
<img src="images/webSchedNewPatInfo.png" width="745" height="499"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>All fields are required.</li>
<li>Guardian information only shows when the patient is under the age of 18.</li>
<li>By entering their phone number, the patient agrees to receiving text messages from the office. This will set <i>Text OK</i> and <i>Appt Texts</i> to Yes in the <a href="patientedit.html">Edit Patient Information</a> window.</li>
</ul>
<h2>Schedule Appointment</h2>
<p>Depending on selected settings, patients may be prompted to enter additional information. See below for details.</p>
<p>Once all information has been entered, the patient will click <b>Schedule Appointment</b>. A confirmation will display.</p>
<img src="images/webschedNewPatientBooked.gif" width="262" height="101"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>If <i>Launch WebForm on New Pat Complete</i> is enabled in Web Sched Advanced Setup, the selected web forms will launch instead.</li>
<li>If you have added a redirect URL to the code, the redirect URL will show instead.</li>
</ul>
<h2>Select Provider</h2>
<p>If<i> Allow patients to select provider</i> is enabled in <a href="webschednewpatsetup.html">Web Sched New Patient</a> setup, a provider selection will display above the calendar. </p>
<img src="images/webSchedNewPatProvider.gif" width="537" height="333"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Available providers will list in the dropdown. </li>
<li>Provider details and pictures can be added in the <a href="providerseditwindow.html">Provider</a> Edit window, Web Sched tab. When details have been added, a + will display to show information.</li>
</ul>
<h2>Patient Authentication</h2>
<p>If <i>Email</i> or <i>Text</i> is selected under <i>Web Sched New Patient Authentication</i> in Web Sched Advanced Setup, the patient will be prompted to verify their identity.</p>
<img src="images/webSchedVerify.gif" width="352" height="184"/><p>The patient will retrieve the code, then enter it in the Verification Code field. The code is not case-sensitive and is only valid as long as the Enter Verification Code window is open.</p>
<img src="images/webSchedVerifyEnter.gif" width="348" height="146"/><h2>Carrier Rules</h2>
<p>If <a href="webschedcarrierrule.html">Web Sched Carrier Rules</a> are enabled, the patient will be prompted to select an insurance carrier.</p>
<img src="images/webSchedNewPatCarrierRule.png" width="628" height="178"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>If a carrier rule includes a message, the message will display after the carrier is selected. </li>
<li>If a carrier rule is marked as <i>Blocked</i>, the patient cannot continue scheduling their appointment online.</li>
<li>If a carrier rule is marked as<i> Allow With Input </i>(i.e. Other), the patient is prompted to enter the Insurance Carrier name.</li>
</ul>
<p>After selecting their appointment date and time, the patient will be prompted to enter additional insurance infomation.</p>
<img src="images/webSchedNewPatientInsSubInfo.png" width="688" height="352"/><p>Carrier details will display as an appointment note on the scheduled appointment.</p>
<h2>In Open Dental</h2>
<p class="MarginBottomZero">After an appointment is scheduled via Web Sched New Patient: </p>
<ul class="MarginBottomGap">
<li>Scheduled appointments instantly show up in the <a href="appointments.html">Appointments Module</a>.</li>
<li><a href="alerts.html">Alerts</a> are created to notify staff a new patient appointment has been scheduled.</li>
</ul>
<p>Use the <a href="webschedapptreport.html">Web Sched Appointments Report</a> to view and track appointments scheduled using Web Sched.</p>
</div>
</div>
</body>
</html>```
