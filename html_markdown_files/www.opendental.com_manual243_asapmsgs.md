# File: ./www.opendental.com/manual243/asapmsgs.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ASAP Message Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('asapmsgs','asaplist','appointmentlists','appointments','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/asapmsgs.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/asapmsgs.html" >v24.2</option><option value="https://www.opendental.com/manual241/asapmsgs.html" >v24.1</option><option value="https://www.opendental.com/manual233/asapmsgs.html" >v23.3</option><option value="https://www.opendental.com/manual232/asapmsgs.html" >v23.2</option><option value="https://www.opendental.com/manual231/asapmsgs.html" >v23.1</option><option value="https://www.opendental.com/manual224/asapmsgs.html" >v22.4</option><option value="https://www.opendental.com/manual223/asapmsgs.html" >v22.3</option><option value="https://www.opendental.com/manual222/asapmsgs.html" >v22.2</option><option value="https://www.opendental.com/manual221/asapmsgs.html" >v22.1</option><option value="https://www.opendental.com/manual214/asapmsgs.html" >v21.4</option><option value="https://www.opendental.com/manual213/asapmsgs.html" >v21.3</option><option value="https://www.opendental.com/manual212/asapmsgs.html" >v21.2</option><option value="https://www.opendental.com/manual211/asapmsgs.html" >v21.1</option><option value="https://www.opendental.com/manual205/asapmsgs.html" >v20.5</option><option value="https://www.opendental.com/manual204/asapmsgs.html" >v20.4</option><option value="https://www.opendental.com/manual203/asapmsgs.html" >v20.3</option><option value="https://www.opendental.com/manual202/asapmsgs.html" >v20.2</option><option value="https://www.opendental.com/manual201/asapmsgs.html" >v20.1</option><option value="https://www.opendental.com/manual194/asapmsgs.html" >v19.4</option><option value="https://www.opendental.com/manual193/asapmsgs.html" >v19.3</option><option value="https://www.opendental.com/manual192/asapmsgs.html" >v19.2</option><option value="https://www.opendental.com/manual191/asapmsgs.html" >v19.1</option><option value="https://www.opendental.com/manual184/asapmsgs.html" >v18.4</option><option value="https://www.opendental.com/manual183/asapmsgs.html" >v18.3</option><option value="https://www.opendental.com/manual182/asapmsgs.html" >v18.2</option><option value="https://www.opendental.com/manual181/asapmsgs.html" >v18.1</option><option value="https://www.opendental.com/manual174/asapmsgs.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ASAP Message Setup</p></div>
<div class="GeneralPageContent">
<p>On the ASAP List Setup window, customize the text and email messages sent to patients about available openings. </p>
<p>In the <a href="asaplist.html">ASAP List</a>, at the upper left, click <b>Settings</b>.</p>
<img src="images/webSchedASAPSetup.png" width="686" height="526"/><p>Alternatively, in the <a href="mainmenu.html">Main Menu</a>, click Setup, Appointments, ASAP List.</p>
<p class="MarginBottomZero"><b>Clinics</b>: Select the clinic the message is for. Customize messages for each clinic, or use the same message for all or some clinics.  </p>
<ul class="MarginBottomGap">
<li>Default messages: Select <i>Default</i> as the clinic, then customize the messages. To use the default rule for a clinic, select the clinic, then check <b>Use Defaults</b>.</li>
<li>Clinic-specific message: Select the clinic, uncheck <b>Use Defaults</b>, then customize the messages.</li>
</ul>
<p class="MarginBottomZero">Message Types:  </p>
<ul class="MarginBottomGap">
<li><b>Text Manual:</b> The default text message when <i>Text from the ASAP List</i> is selected.</li>
<li><b>Web Sched Text</b>: The default message when sending a <a href="webschedasap.html">Web Sched ASAP</a> text message.</li>
<li><b>Web Sched Email Body</b>: The default body text when sending a Web Sched ASAP email.</li>
<li><b>Web Sched Email Subject</b>: The default subject when sending a Web Sched ASAP email.</li>
</ul>
<p><b>Maximum number of texts to send to a patient in a day via Web Sched</b>: Limit the total number of Web Sched text messages that can be sent to a patient per day. Defaults to 2.</p>
<p class="MarginBottomZero"><b>Prompt user to send Web Sched message to patients on ASAP List when an appointment is broken</b>: Determines if users are prompted to message patients on the ASAP List about the opening. Regardless of the setting selected, the prompt does not appear if the appointment time starts within the next 20 minutes. </p>
<ul class="MarginBottomGap">
<li>Checked: Prompt the user to send a text when Web Sched ASAP is enabled and a patient is on the ASAP List. Displays patients whose appointments can fit within the available timeslot.</li>
<li>Unchecked: Do not prompt the user.</li>
</ul>
<h2>Message Edit</h2>
<p>Double-click a message to edit it. </p>
<img src="images/webSchedASAPMsgEdit.png" width="498" height="199"/><p class="MarginBottomZero">To insert data from the database into the message text, use Template Replacement Tags. </p>
<ul class="MarginBottomGap">
<li><b>[NameF]</b>: Patient's first name.</li>
<li><b>[Date]</b>: The date of the available appointment.</li>
<li><b>[Time]</b>: The start time of the available appointment.</li>
<li><b>[OfficeName]</b>: The name of the practice or clinic.</li>
<li><b>[OfficePhone]</b>: The phone number of the practice or clinic.</li>
<li><b>[ASAPURL]</b>: Add a URL link the patient can click to schedule the appointment (Web Sched ASAP messages only).</li>
</ul>
<p><div class="Note">Note: Message types that support HTML formatting open the <a href="emailhtml.html">HTML Email</a> editor. Raw HTML is not supported for Recall messages.</div>
</p>
<p> Once a patient successfully books an online Web Sched ASAP appointment, optionally send them an automated notification of appointment details. See <a href="webschedverify.html">Web Sched Notify Setup</a>.</p>
</div>
</div>
</body>
</html>```
