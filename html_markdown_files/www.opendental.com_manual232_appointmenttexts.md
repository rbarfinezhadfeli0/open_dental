# File: ./www.opendental.com/manual232/appointmenttexts.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Appointment Texts</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('appointmenttexts','textintegratedusage','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/appointmenttexts.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/appointmenttexts.html" >v24.2</option><option value="https://www.opendental.com/manual241/appointmenttexts.html" >v24.1</option><option value="https://www.opendental.com/manual233/appointmenttexts.html" >v23.3</option><option value="https://www.opendental.com/manual232/appointmenttexts.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/appointmenttexts.html" >v23.1</option><option value="https://www.opendental.com/manual224/appointmenttexts.html" >v22.4</option><option value="https://www.opendental.com/manual223/appointmenttexts.html" >v22.3</option><option value="https://www.opendental.com/manual222/appointmenttexts.html" >v22.2</option><option value="https://www.opendental.com/manual221/appointmenttexts.html" >v22.1</option><option value="https://www.opendental.com/manual214/appointmenttexts.html" >v21.4</option><option value="https://www.opendental.com/manual213/appointmenttexts.html" >v21.3</option><option value="https://www.opendental.com/manual212/appointmenttexts.html" >v21.2</option><option value="https://www.opendental.com/manual211/appointmenttexts.html" >v21.1</option><option value="https://www.opendental.com/manual205/appointmenttexts.html" >v20.5</option><option value="https://www.opendental.com/manual204/appointmenttexts.html" >v20.4</option><option value="https://www.opendental.com/manual203/appointmenttexts.html" >v20.3</option><option value="https://www.opendental.com/manual202/appointmenttexts.html" >v20.2</option><option value="https://www.opendental.com/manual201/appointmenttexts.html" >v20.1</option><option value="https://www.opendental.com/manual194/appointmenttexts.html" >v19.4</option><option value="https://www.opendental.com/manual193/appointmenttexts.html" >v19.3</option><option value="https://www.opendental.com/manual192/appointmenttexts.html" >v19.2</option><option value="https://www.opendental.com/manual191/appointmenttexts.html" >v19.1</option><option value="https://www.opendental.com/manual184/appointmenttexts.html" >v18.4</option><option value="https://www.opendental.com/manual183/appointmenttexts.html" >v18.3</option><option value="https://www.opendental.com/manual182/appointmenttexts.html" >v18.2</option><option value="https://www.opendental.com/manual181/appointmenttexts.html" >v18.1</option><option value="https://www.opendental.com/manual174/appointmenttexts.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Appointment Texts</p></div>
<div class="GeneralPageContent">
<p>See <a href="textintegratedusage.html">Texting</a>.</p>
<p>Appointment Texts are any text messages related to an appointment. They include eReminders, eConfirmations, eConfirmation Auto Replies, manually sent recall texts, Automated Thank You Messages, billing statements, General Messages, Web Sched Recall, Web Sched New Patient, and Web Sched Verify messages.</p>
<h2>Patient Replies</h2>
<p class="MarginBottomZero">Patients can reply with the following, and the office will receive the message:  </p>
<ul class="MarginBottomGap">
<li>eConfirmations (e.g., Reply C to confirm). </li>
<li>Arrivals (e.g., Reply A when the patient has arrived). </li>
<li>STOP/START keywords.</li>
<li>HELP keyword.</li>
</ul>
<p><div class="Note">Note: Only some appointment texts can be replied to.</div>
</p>
<p class="MarginBottomZero">Some text replies are required to allow patients to opt out of receiving text messages due to regulatory requirements. Patients can opt out of text messages by replying with one of the following messages. Patients can reply to any text messages sent by the office, not just Appointment Texts in order to opt out.  </p>
<ul class="MarginBottomGap">
<li>STOP</li>
<li>END</li>
<li>QUIT</li>
<li>UNSUBSCRIBE</li>
</ul>
<p>Opt out text messages are not case-sensitive, but must only contain the single opt out phrase. Receiving any of the replies above excludes the patient from all future text message correspondence. When a patient opts out, the <i>Text Ok</i> field in the <a href="patientedit.html">Patient Edit</a> window is automatically set to<i> No</i>. </p>
<p>Once a patient opts out, the office cannot opt them back in. To opt back in for text messages, the patient must text START or OPTIN to the office's Integrated Texting or Landline Texting phone number.</p>
</div>
</div>
</body>
</html>```
