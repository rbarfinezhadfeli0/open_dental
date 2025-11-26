# File: ./www.opendental.com/manual/byodworkflow.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - BYOD: Workflow</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('byodworkflow','eclipboardsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/byodworkflow.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/byodworkflow.html" >v24.2</option><option value="https://www.opendental.com/manual241/byodworkflow.html" >v24.1</option><option value="https://www.opendental.com/manual233/byodworkflow.html" >v23.3</option><option value="https://www.opendental.com/manual232/byodworkflow.html" >v23.2</option><option value="https://www.opendental.com/manual231/byodworkflow.html" >v23.1</option><option value="https://www.opendental.com/manual224/byodworkflow.html" >v22.4</option><option value="https://www.opendental.com/manual223/byodworkflow.html" >v22.3</option><option value="https://www.opendental.com/manual222/byodworkflow.html" >v22.2</option><option value="https://www.opendental.com/manual221/byodworkflow.html" >v22.1</option><option value="https://www.opendental.com/manual214/byodworkflow.html" >v21.4</option><option value="https://www.opendental.com/manual213/byodworkflow.html" >v21.3</option><option value="https://www.opendental.com/manual212/byodworkflow.html" >v21.2</option><option value="https://www.opendental.com/manual211/byodworkflow.html" >v21.1</option><option value="https://www.opendental.com/manual205/byodworkflow.html" >v20.5</option><option value="https://www.opendental.com/manual204/byodworkflow.html" >v20.4</option><option value="https://www.opendental.com/manual203/byodworkflow.html" >v20.3</option><option value="https://www.opendental.com/manual202/byodworkflow.html" >v20.2</option><option value="https://www.opendental.com/manual201/byodworkflow.html" >v20.1</option><option value="https://www.opendental.com/manual194/byodworkflow.html" >v19.4</option><option value="https://www.opendental.com/manual193/byodworkflow.html" >v19.3</option><option value="https://www.opendental.com/manual192/byodworkflow.html" >v19.2</option><option value="https://www.opendental.com/manual191/byodworkflow.html" >v19.1</option><option value="https://www.opendental.com/manual184/byodworkflow.html" >v18.4</option><option value="https://www.opendental.com/manual183/byodworkflow.html" >v18.3</option><option value="https://www.opendental.com/manual182/byodworkflow.html" >v18.2</option><option value="https://www.opendental.com/manual181/byodworkflow.html" >v18.1</option><option value="https://www.opendental.com/manual174/byodworkflow.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>BYOD: Workflow</p></div>
<div class="GeneralPageContent">
<p>Bring Your Own Device (BYOD) allows patients to check-in and fill out forms via the <a href="eclipboardsetup.html">eClipboard</a> app on their own mobile device.</p>
<p>
<div class="Note">Note: The BYOD feature will be removed from Open Dental starting with Version 25.1. Open Dental is currently working on a replacement for BYOD. In the interim, offices can use the <a href="https://www.opendental.com/manual/webforms.xml">Web Forms</a> feature to allow patients to fill out forms prior to their appointment.</div></p>
<img src="images/byodWorkflow.png" width="307" height="627"/><p>To use BYOD, an office must be signed up for eClipboard and at least one device in the office must be signed into eClipboard using the <a href="mobilesettings.html">Mobile Settings</a>. There are two ways to send BYOD to a patient.</p>
<p><div class="Note">Note: Patients must have eClipboard installed on their device to utilize BYOD. See <a href="byodsees.html">BYOD: What Patient Sees</a> for details.</div>
</p>
<h2>Option 1: Send BYOD Link automatically</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>The office must be signed up for:  <ul>
<li>eClipboard</li>
<li>eConfirmations</li>
</ul>
</li>
<li>In eClipboard Setup, enable the following settings:  <ul>
<li><i>Allow eClipboard BYOD via text messages</i>.</li>
<li><i>Append eClipboard BYOD to Automated Arrival text messages</i>.</li>
<li>Customize the appended message as desired. </li>
</ul>
</li>
<li>In Automated Messaging setup, enable <a href="arrivalssetup.html">Arrivals</a>.</li>
</ol>
<p>Using the Arrival rules, patients are sent an Arrival text message that includes a link to install eClipboard.</p>
<h2>Option 2: Send BYOD Link Manually</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>The office must be signed up for:  <ul>
<li>eClipboard</li>
<li>Integrated Text Messaging</li>
</ul>
</li>
<li>In eClipboard Setup, enable <i>Allow eClipboard BYOD via text messages</i>. <ul>
<li>Optionally, enable <i>Show kiosk manager when staff changes patient status to arrived</i>.</li>
</ul>
</li>
<li>Mark the patient's appointment as <i>Arrived</i>.</li>
<li>Send a BYOD message. <ul>
<li>If <i>Show kiosk manager when staff changes patient status to arrived</i> is enabled, the <a href="kiosk.html">Kiosk Manager</a> opens. Click <b>Send eClipboard BYOD Text</b>. </li>
<li>If <i>Show kiosk manager when staff changes patient status to arrived</i> is not enabled, right-click the appointment and select <b><b>Send eClipboard BYOD Text</b></b>. </li>
</ul>
</li>
<li>A text message window appears. Verify the message and send.</li>
</ol>
<p>The patient receives a message that includes a link to install eClipboard. </p>
</div>
</div>
</body>
</html>```
