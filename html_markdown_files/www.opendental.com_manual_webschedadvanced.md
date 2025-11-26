# File: ./www.opendental.com/manual/webschedadvanced.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Web Sched Advanced</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('webschedadvanced','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/webschedadvanced.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/webschedadvanced.html" >v24.2</option><option value="https://www.opendental.com/manual241/webschedadvanced.html" >v24.1</option><option value="https://www.opendental.com/manual233/webschedadvanced.html" >v23.3</option><option value="https://www.opendental.com/manual232/webschedadvanced.html" >v23.2</option><option value="https://www.opendental.com/manual231/webschedadvanced.html" >v23.1</option><option value="https://www.opendental.com/manual224/webschedadvanced.html" >v22.4</option><option value="https://www.opendental.com/manual223/webschedadvanced.html" >v22.3</option><option value="https://www.opendental.com/manual222/webschedadvanced.html" >v22.2</option><option value="https://www.opendental.com/manual221/webschedadvanced.html" >v22.1</option><option value="https://www.opendental.com/manual214/webschedadvanced.html" >v21.4</option><option value="https://www.opendental.com/manual213/webschedadvanced.html" >v21.3</option><option value="https://www.opendental.com/manual212/webschedadvanced.html" >v21.2</option><option value="https://www.opendental.com/manual211/webschedadvanced.html" >v21.1</option><option value="https://www.opendental.com/manual205/webschedadvanced.html" >v20.5</option><option value="https://www.opendental.com/manual204/webschedadvanced.html" >v20.4</option><option value="https://www.opendental.com/manual203/webschedadvanced.html" >v20.3</option><option value="https://www.opendental.com/manual202/webschedadvanced.html" >v20.2</option><option value="https://www.opendental.com/manual201/webschedadvanced.html" >v20.1</option><option value="https://www.opendental.com/manual194/webschedadvanced.html" >v19.4</option><option value="https://www.opendental.com/manual193/webschedadvanced.html" >v19.3</option><option value="https://www.opendental.com/manual192/webschedadvanced.html" >v19.2</option><option value="https://www.opendental.com/manual191/webschedadvanced.html" >v19.1</option><option value="https://www.opendental.com/manual184/webschedadvanced.html" >v18.4</option><option value="https://www.opendental.com/manual183/webschedadvanced.html" >v18.3</option><option value="https://www.opendental.com/manual182/webschedadvanced.html" >v18.2</option><option value="https://www.opendental.com/manual181/webschedadvanced.html" >v18.1</option><option value="https://www.opendental.com/manual174/webschedadvanced.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Web Sched Advanced</p></div>
<div class="GeneralPageContent">
<p>Web Sched Advanced allows the office to generate a URL for scheduling, as well as determine what options to include.</p>
<p>In <a href="eservicessetup.html">eServices Setup</a>, click <b>Advanced</b>.</p>
<img src="images/webSchedAdvanced.png" width="915" height="413"/><p class="MarginBottomZero">Also see:  </p>
<ul class="MarginBottomGap">
<li><a href="webschednewpatsetup.html">Web Sched New Patient</a></li>
<li><a href="webschedexistingpatsetup.html">Web Sched Existing Patient</a></li>
<li><a href="webformsupload.html">Web Form Setup</a></li>
</ul>
<h2>Clinics</h2>
<p>If Clinics is enabled, each clinic will list in the grid on the left. If Clinics is not enabled, only <i>Headquarters</i> will list.</p>
<img src="images/webSchedAdvancedClinics.png" width="295" height="109"/><p>Highlight a clinic from the list to determine settings and the copy the URL. </p>
<h2>Options</h2>
<p>Options determine what the patient sees when scheduling.</p>
<img src="images/webSchedAdvancedOption.png" width="251" height="156"/><p class="MarginBottomZero"><b>Allow Children</b>: Determine if the parent or legal guardian is able to schedule an appointment on behalf of a minor patient (17 years of age or younger). <br/></p>
<ul class="MarginBottomGap">
<li>If enabled: After the submitter indicates the patient is under 18 years of age, triggers an extra screening question asking if the submitter is the parent or legal guardian of the minor patient.  <ul>
<li>If the submitter answers yes, they can proceed to scheduling calendar. </li>
<li>If the submitter answers no, they cannot schedule online.</li>
<li>If the submitter is the minor patient, the patient will be instructed to submit guardian and minor information.</li>
</ul>
</li>
<li>If disabled: After the submitter indicates the patient is under 18 years of age, the submitter cannot proceed with scheduling an appointment.</li>
</ul>
<p class="MarginBottomZero"><b>Web Sched New Patient Authentication</b>: Determine how new patients can verify their identity when scheduling an appointment. When used, the authentication code must be entered correctly before the patient can proceed scheduling the appointment. Select one, both, or none. </p>
<ul class="MarginBottomGap">
<li><b>Email</b>: Send an authentication to the patient's email. </li>
<li><b>Text</b>: Send an authentication to the patient's wireless phone. </li>
</ul>
<p class="MarginBottomZero"><b>Web Sched Existing Patient Authentication</b>: Determine how existing patients can verify their identity when scheduling an appointment. When used, the authentication code must be entered correctly before the patient can proceed scheduling the appointment. It is required to select one or both. </p>
<ul class="MarginBottomGap">
<li><b>Email</b>: Send an authentication to the patient's email. </li>
<li><b>Text</b>: Send an authentication to the patient's wireless phone. </li>
</ul>
<p><div class="Note">Note: If a guarantor is scheduling the appointment, the code will be sent to the guarantor's email/wireless number as provided in the interface. If both Verify Email and Verify Text are both on, the same code is sent to both email and text.</div>
</p>
<h2>URLs</h2>
<p>Generate URLs for scheduling and web forms.</p>
<img src="images/webschedAdvancedURLs.png" width="915" height="152"/><p><b>Web Form to Launch after scheduling New Pat</b>: Click Edit to select one or more web forms to launch once a patient finishes scheduling their New Patient appointment online. The full URL of the web form(s) will display in the box. Right click to browse to the URL or copy it. Also see <a href="webformsupload.html">Web Form Setup</a>. Click red X button to clear field.</p>
<p><b>Web Form to Launch after scheduling Existing Pat</b>: Click Edit to select one or more web forms to launch once a patient finishes scheduling their Existing Patient appointment online. The full URL of the web form(s) will display in the box. Right click to browse to the URL or copy it. Also see <a href="webformsupload.html">Web Form Setup</a>. Click red X button to clear field.</p>
<p><b>Scheduling URL:</b> The full URL of the location's Web Sched interface. Send patients here to schedule. Right-click to browse to the URL or copy it.</p>
<p class="MarginBottomZero">There are two possible methods of providing access to the Hosted URL. </p>
<ol class="MarginBottomGap">
<li>Add a link to the URL on the practice website. Then patients simply visit the website and click the link to schedule a new appointment.<p class="codeblock">&lt;a href ="https://www.patientviewer.com/?RSID=34343338&amp;CID=30&amp;C=1251"&gt;Schedule Appt&lt;/a&gt;</p></li>
<li>Embed the URL in an iframe on the practice website. This will give the appearance of having Web Sched New Patient on the webpage instead of going to a different link. To see a demo: <a href="http://patientviewer.com/demo/wsnp_embedded/">http://patientviewer.com/demo/wsnp_embedded/</a><p class="codeblock">&lt;iframe class="frame" src="https://www.patientviewer.com/?RSID=34343338&amp;CID=30&amp;C=1251"&gt;&lt;/iframe&gt;</p></li>
</ol>
<h2>Other URL Options</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Change the interface color. <p>By default, the Web Sched New Patient and Web Sched Existing Patient interface is blue. To change the color simply add this code to the end of the hosted URL: <span class="codeblock">&amp;TCP=color</span>. Replace <i>color</i> with the color name or hex value. If using a hex value, replace the hash (#) with a period (.)</p>
<p>Available colors are listed here: <a href="https://htmlcolorcodes.com/color-names/" target="_blank">https://htmlcolorcodes.com/color-names/</a>. If using a dark color, text will automatically display in white. If using a light color, text will automatically display in black. </p>
<p><p class="codeblock">&lt;a href ="https://www.patientviewer.com/?RSID=34343338&amp;CID=30&amp;C=1251&amp;TCP=green"&gt;Schedule Appt&lt;/a&gt;</p><p class="codeblock">&lt;iframe class="frame" src="https://www.patientviewer.com/?RSID=34343338&amp;CID=30&amp;C=1251&amp;TCP=.507C77"&gt;&lt;/iframe&gt;</p></p>
</li>
<li>Redirect the patient to a specific URL after scheduling. <p>By default, a standard <i>Appointment Booked</i> message shows once an appointment is scheduled. To redirect the patient to a specific web page instead, simply add this code to the end of the hosted URL: <span class="codeblock">&amp;ReturnURL=http://www.site.com</span>. Replace www.site.com with the specific web page URL.</p>
<p class="codeblock">&lt;a href="https://www.patientviewer.com/?RSID=34343338&amp;CID=30&amp;C=1251&amp;ReturnURL=http://www.opendental.com"&gt;Schedule Appt&lt;/a&gt;</p></li>
<br/><li>Tracking Created Appointments<br/> If you are embedding Web Sched New/Existing Patient into your website you can track whether or not an appointment was made. To do this you need to add an Event Listener on your website and listen for an event of type "message". When an appointment has been scheduled, the event's data will be a boolean true. Always take proper precautions when listening for events (such as verifying the origin of the event and the event's data is what you expect) to make sure that you're not exposing yourself to potential cross-site scripting attacks.</li>
<br/><li>UTM Tracking<br/> The following parameters can be added. Enter a campaign, source, and medium as needed for each unique link. <ul>
<li><p class="codeblock">utm_campaign=</p></li>
<li><p class="codeblock">utm_source=</p></li>
<li><p class="codeblock">utm_medium=</p></li>
</ul>
</li>
<br/><p class="codeblock">&lt;a href ="https://www.patientviewer.com/?RSID=3235323630&amp;CID=31&amp;C=1347&amp;utm_source=test1&amp;utm_medium=test2&amp;utm_campaign=test3"&gt;</p><br/><p>As each unique parameter (link) is used, a new row is added to the database for tracking. Use Query #1724 on <a href="https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx">Query Examples</a> to track visits by parameter. </p>
</ul>
</div>
</div>
</body>
</html>```
