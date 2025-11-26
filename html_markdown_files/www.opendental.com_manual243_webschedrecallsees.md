# File: ./www.opendental.com/manual243/webschedrecallsees.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Web Sched Recall: What Patient Sees</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('webschedrecallsees','webschedrecallsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/webschedrecallsees.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/webschedrecallsees.html" >v24.2</option><option value="https://www.opendental.com/manual241/webschedrecallsees.html" >v24.1</option><option value="https://www.opendental.com/manual233/webschedrecallsees.html" >v23.3</option><option value="https://www.opendental.com/manual232/webschedrecallsees.html" >v23.2</option><option value="https://www.opendental.com/manual231/webschedrecallsees.html" >v23.1</option><option value="https://www.opendental.com/manual224/webschedrecallsees.html" >v22.4</option><option value="https://www.opendental.com/manual223/webschedrecallsees.html" >v22.3</option><option value="https://www.opendental.com/manual222/webschedrecallsees.html" >v22.2</option><option value="https://www.opendental.com/manual221/webschedrecallsees.html" >v22.1</option><option value="https://www.opendental.com/manual214/webschedrecallsees.html" >v21.4</option><option value="https://www.opendental.com/manual213/webschedrecallsees.html" >v21.3</option><option value="https://www.opendental.com/manual212/webschedrecallsees.html" >v21.2</option><option value="https://www.opendental.com/manual211/webschedrecallsees.html" >v21.1</option><option value="https://www.opendental.com/manual205/webschedrecallsees.html" >v20.5</option><option value="https://www.opendental.com/manual204/webschedrecallsees.html" >v20.4</option><option value="https://www.opendental.com/manual203/webschedrecallsees.html" >v20.3</option><option value="https://www.opendental.com/manual202/webschedrecallsees.html" >v20.2</option><option value="https://www.opendental.com/manual201/webschedrecallsees.html" >v20.1</option><option value="https://www.opendental.com/manual194/webschedrecallsees.html" >v19.4</option><option value="https://www.opendental.com/manual193/webschedrecallsees.html" >v19.3</option><option value="https://www.opendental.com/manual192/webschedrecallsees.html" >v19.2</option><option value="https://www.opendental.com/manual191/webschedrecallsees.html" >v19.1</option><option value="https://www.opendental.com/manual184/webschedrecallsees.html" >v18.4</option><option value="https://www.opendental.com/manual183/webschedrecallsees.html" >v18.3</option><option value="https://www.opendental.com/manual182/webschedrecallsees.html" >v18.2</option><option value="https://www.opendental.com/manual181/webschedrecallsees.html" >v18.1</option><option value="https://www.opendental.com/manual174/webschedrecallsees.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Web Sched Recall: What Patient Sees</p></div>
<div class="GeneralPageContent">
<p>Below is a description of what the patient sees when they receive a <a href="webschedrecallsetup.html">Web Sched Recall</a> notification.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>The patient receives a notification to schedule their appointment. One notification for each recall appointment is sent to the patient's <a href="authrep.html">Authorized Representatives</a>. Each reminder contains a clickable link that is patient-specific based on patient number.<br/><img src="images/webSchedRecallNotification.png" width="268" height="114" class="ImageInParagraph"/></li>
<li>When the link is clicked, Web Sched Recall opens in a browser. <br/><img src="images/webschedRecallUI.png" width="906" height="765" class="ImageInParagraph"/><ul>
<li><b>Select a Provider</b>: If patients are allowed to select a provider, and more than one provider has available openings, the patient can select a provider from the dropdown.</li>
<li><b>Calendar</b>: By default, the first dates with available time slots show, based on criteria selected in <a href="webschedrecallsetup.html">Web Sched Recall</a>. Select a date and available appointment times show. Select the desired appointment time.</li>
<li><b>Notify me if an earlier appointment time becomes available</b>: (optional) Check to have the office notify patient about earlier appointments. This marks the appointment as ASAP and shows on the ASAP List.</li>
</ul>
</li>
<li>Click <b>Finalize Appt</b>.</li>
<li>A confirmation message shows. To confirm, click <b>Yes</b>. To return to the list of available dates, click <b>No</b>. <br/><img src="images/webschedConfirm.png" width="351" height="124" class="ImageInParagraph"/></li>
<li>If Yes, a confirmation of the now scheduled appointment shows. <br/><img src="images/webschedBooked.png" width="906" height="765" class="ImageInParagraph"/></li>
<li>Close the browser to end the session.</li>
</ol>
<h2>In Open Dental</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Scheduled appointments instantly show up in the <a href="appointments.html">Appointments Module</a>.</li>
<li><a href="alerts.html">Alerts</a> are created to notify staff a Web Sched Recall appointment has been scheduled.</li>
<li>Use the <a href="webschedapptreport.html">Web Sched Appointments Report</a> to view and track appointments scheduled using Web Sched.</li>
</ul>
<p><div class="Note">Note: Once an appointment is scheduled it cannot be changed in Web Sched Recall. If a patient reopens the email link, they are notified an appointment has already been booked.</div>
</p>
</div>
</div>
</body>
</html>```
