# File: ./www.opendental.com/manual/autothankyousetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Automated Thank-Yous</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('autothankyousetup','automatedmessaging','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/autothankyousetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/autothankyousetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/autothankyousetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/autothankyousetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/autothankyousetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/autothankyousetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/autothankyousetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/autothankyousetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/autothankyousetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/autothankyousetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/autothankyousetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/autothankyousetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/autothankyousetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/autothankyousetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/autothankyousetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/autothankyousetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/autothankyousetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/autothankyousetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/autothankyousetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/autothankyousetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/autothankyousetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/autothankyousetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/autothankyousetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/autothankyousetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/autothankyousetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/autothankyousetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/autothankyousetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/autothankyousetup.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Automated Thank-Yous</p></div>
<div class="GeneralPageContent">
<p>Thank-You messages are an eServices that send an automated message response (email or text message) when a patient schedules an appointment. </p>
<p>In <a href="eservicessetup.html">eServices Setup</a>, click <a href="automatedmessaging.html">Automated Messaging</a>.</p>
<img src="images/eThankYouSetup.png" width="915" height="539"/><p class="MarginBottomZero">There are two separate Thank-You services:  </p>
<ul class="MarginBottomGap">
<li>Automated Thank-You messages: These can be sent via email at no additional cost. To send Automated Thank-You messages by text message, the <a href="../site/textintegrated.html">Integrated Texting</a> feature is required. When sending Thank-You messages via text, additional text <a href="textmsgfaq.html">Message Fees</a> apply.</li>
<li>New Patient Thank-You messages: Requires the <a href="../site/ereminders.html">eConfirmations</a> service.</li>
</ul>
<h2>Automated Thank-You Messages</h2>
<p>An automated Thank-You message is sent shortly after a patient schedules or reschedules their appointment. When using eConfirmations, it can include the [AddToCalendar] tag so patients can add the appointment to the calendar on their device. </p>
<h2>New Patient Thank-You Messages</h2>
<p>An automated New Patient Thank-You message is sent shortly after a new patient schedules their first appointment. A patient is considered new if their appointment has <i>New Patient</i> checked. If the patient has already been sent a New Patient Thank-You, they are not sent another message, even if they have rescheduled their appointment. </p>
<p>When using eConfirmations and Web Forms, this message must include the [NewPatWebFormURL] tag for patients to fill out forms online. When using the tag, set up the New Patient URL in <a href="automatedmessagingpreferences.html">Automated Messaging Preferences</a>. </p>
<p>This message goes out along with the Automated Thank-You Message, so the patient is sent two separate messages. </p>
<h2>Activate / Deactivate Auto Thank-Yous</h2>
<p>Automated Thank-You messages can be activated or deactivated as needed.</p>
<img src="images/autoThankYouActivate.png" width="353" height="228"/><p class="MarginBottomZero">Automated Thank-You Messages </p>
<ul class="MarginBottomGap">
<li>To enable Auto Thank-You message, click <b>Activate Auto Thank-You</b>. The Auto Thank-You row displays in green with a status of <i>Active</i>. </li>
<li>To disable Auto Thank-You messages, click <b>Deactivate Auto Thank-You</b>. The Auto Thank-You row displays in red with a status of <i>Inactive</i>.</li>
</ul>
<p class="MarginBottomZero">New Patient Thank-You Messages </p>
<ul class="MarginBottomGap">
<li>To enable New Patient Thank-You messages, click <b>Activate New Pat Thank-You</b>. The New Pat Thank-You row displays in green with a status of <i>Active</i>. </li>
<li>To disable New Patient Thank-You messages, click <b>Deactivate New Pat Thank-You</b>. The New Pat Thank-You row displays in red with a status of <i>Inactive</i>.</li>
</ul>
<h2>Auto Thank-You Rules</h2>
<p class="MarginBottomZero">After activating Auto Thank-You or New Patient Thank-You messages, set up rules in the <a href="editrule.html">Edit Rule</a> window. </p>
<ul class="MarginBottomGap">
<li>To add a rule, click <b>Add Auto Thank-You</b> or <b>Add New Patient Thank-You</b>. </li>
<li>To edit a rule, double-click the rule from the Automated Messaging Rules grid.</li>
</ul>
</div>
</div>
</body>
</html>```
