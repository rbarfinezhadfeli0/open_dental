# File: ./www.opendental.com/manual243/eclipboardsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eClipboard Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclipboardsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eclipboardsetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eclipboardsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclipboardsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclipboardsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclipboardsetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/eclipboardsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclipboardsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclipboardsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclipboardsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclipboardsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclipboardsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclipboardsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclipboardsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclipboardsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclipboardsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclipboardsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclipboardsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclipboardsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclipboardsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclipboardsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclipboardsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclipboardsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclipboardsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclipboardsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclipboardsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclipboardsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclipboardsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclipboardsetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
		<div class="TopBar2"><p>eClipboard Setup</p></div>
		<div class="GeneralPageContent">
<p>eClipboard users can determine which features to utilize for their practice. </p>
<p>In <a href="eservicessetup.html">eServices Setup</a>, click <b>eClipboard</b>.</p>
<img src="images/eClipboardSetup.png" width="915" height="586"/><p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our webinar: <a href="https://youtu.be/1vVclf1xgnU">eClipboard App</a>.</p>
<h2>Set Up eClipboard in Open Dental</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Sign up for eClipboard in the <a href="eservicessignup.html">eServices Signup</a>.</li>
<li>Set up <a href="mobilesettings.html">Mobile Settings</a> to use when logging into the app. This only needs to be done once and is used for all Open Dental apps.</li>
<li>Determine eClipboard rules and behavior (see below). </li>
</ol>
<h2>Install eClipboard on a Tablet Device</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Install eClipboard to each desired device. eClipboard is available for iOS and Android. <ul>
<li><a href="https://apps.apple.com/us/app/eclipboard/id1455419778" target="_blank">App Store</a></li>
<li><a href="https://play.google.com/store/apps/details?id=com.opendental.eClipboard" target="_blank">Google Play</a></li>
</ul>
</li>
<li>In the app, enter the Mobile Settings to connect the app with the database. </li>
<li>Enable the device in the <a href="devicemanager.html">Device Manager</a>.</li>
<li>(Optional) Lock eClipboard to prevent patients from accessing other areas of the device. <ul>
<li>On Android, enable Pin Windows.</li>
<li>On iOS, enable Guided Access.</li>
</ul>
</li>
</ol>
<h2>Clinic Setup</h2>
<p>If using clinics, determine if all clinics use the same features, or if features are unique to each clinic.</p>
<img src="images/eclipboardClinic.png" width="653" height="46"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Use Defaults for this Clinic</b>: Check to use default settings for the selected clinic. Uncheck to change settings for the selected clinic only.</li>
<li><b>Clinic:</b> Select clinic from the dropdown to create clinic specific settings.</li>
</ul>
<h2>Behavior Rules</h2>
<p>Determine the behavior for the eClipboard app.</p>
<img src="images/eclipboardBehavior.png" width="395" height="161"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Allow self check-in</b>: Allow patients to enter their name and birthdate, confirm their appointment time, and check-in. The patient's appointment status is updated to the <i>Time Arrived trigger</i>, set in <a href="preferences.html">Preferences</a>, and the patient is added to the <a href="waitingroom.html">Waiting Room</a>. Appointments must be scheduled for today to utilize eClipboard.</li>
<li><b>Allow patients to fill out forms in mobile app</b>: Allow eClipboard to function as a <a href="kioskpatient.html">Kiosk</a> where patients can fill out forms.</li>
<li><b>Allow payment when patient is checking in</b>: Allow patients to view statements and make a payment. Only available for <a href="xcharge.html">XCharge (OpenEdge)</a>, <a href="edgeexpress.html">Edge Express</a>, or <a href="payconnectpaymentwindow.html">PayConnect Window</a> users. See <a href="eclipboardpayment.html">eClipboard: Payment</a> for details.</li>
<li><b>Add specified forms upon patient arrival</b>: When checked, the forms defined below are added automatically upon arrival.</li>
<li><b>Show kiosk manager when staff changes patient status to arrived</b>: When checked, the <a href="kiosk.html">Kiosk Manager</a> opens in Open Dental when a user sets the patient's confirmation status as <i>Arrived</i>. The user can then send specific forms to eClipboard for the patient to fill out.</li>
<li><b>Require patients to complete authentication before showing sheets</b>: Require patients to verify their identity before filling forms. Patients can choose to have a 6-digit code sent to their phone number or email address, then they enter the code into eClipboard. </li>
<li><b>Display check-in questions individually</b>: Require patients to enter their First Name, Last Name, and Birthdate one prompt at a time, rather than all at once. Must log out of eClipboard and log back in on each device for setting to take affect.</li>
</ul>
<h2>Send eClipboard BYOD to patient phones</h2>
<p class="MarginBottomZero">BYOD (Bring Your Own Device) allows patients to fill out forms via eClipboard from their mobile device. The <a href="../site/textintegrated.html">Integrated Texting Feature</a> eService is required. </p>
<ul class="MarginBottomGap">
<li>For Office Flow, see <a href="byodworkflow.html">BYOD: Workflow</a>.</li>
<li>For Patient Flow, see <a href="byodsees.html">BYOD: What Patient Sees</a>.</li>
</ul>
<img src="images/eClipboardBYOD.png" width="467" height="96"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Confirmation Statuses</b>: Opens <a href="automatedmessagingadvanced.html">Automated Messaging Advanced Settings</a>.</li>
<li><b>Allow eClipboard BYOD via text messages</b>: Allow a link to be sent to patients to check in and fill out forms via eClipboard. Patients install eClipboard to their device, then use the link provided to log in.</li>
<li><b>Append eClipboard BYOD to Automated Arrival text messages</b>: When checked, and the office is using <a href="arrivalssetup.html">Arrivals</a>, the [eClipboardBYOD] tag is added to the end of the initial arrival text message. The tag adds a link for patients to follow to install eClipboard. Arrivals are only available for offices using <a href="econfirmationsetup.html">eConfirmations</a>.</li>
</ul>
<h2>Successful Check-in Message</h2>
<img src="images/eClipboardMessageToShow.png" width="472" height="96"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Message to show patients after successful check-in</b>: Create a personalized message to display on eClipboard after the patient has completed their check-in checklist.</li>
</ul>
<h2>Images</h2>
<p>View the list of images a patient may be requested to take upon check in. </p>
<img src="images/eClipboardImages.png" width="529" height="250"/><p>Click <b>Add</b> or double-click an existing image definition to edit. See <a href="eclipboardimages.html">eClipboard Images</a> for details. </p>
<h2>Forms</h2>
<p>When <i>Add specified forms upon patient arrival</i> is checked, specified forms are added to the eClipboard device automatically when the patient checks in.</p>
<img src="images/eclipboardAvailableForms.png" width="528" height="250"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Add Sheet</b>: Click to select from the sheets list to add a new form.</li>
<li><b>Up / Down</b>: Highlight a sheet, then use the buttons to move it up or down the list. </li>
</ul>
<p>Double-click a sheet from the list to edit the behavior, frequency, and age limitations. </p>
<img src="images/eClipboardSheetRules.png" width="601" height="434"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Sheet</b>: Displays the sheet name.</li>
<li><b>Behavior</b>: Select the sheet behavior. Options include: <ul>
<li>Pre-fill: The sheet displays every set number of days. <ul>
<li>If a revision has been triggered, and the set number of days has passed, the patient is given a new blank sheet to fill.</li>
<li>If no revision has occurred, and the set number of days has passed, the patient is given a pre-filled copy of the sheet to review. See Pre-Fill Logic on <a href="patientform.html">Patient Forms</a> for more details.</li>
<li>See the Sheet Revisions section on <a href="sheetsetup.html">Edit Sheet Def</a> for more details.</li>
</ul>
</li>
<li>New: Patient fills out a new sheet every set number of days.</li>
</ul>
</li>
<li><b>Frequency: </b> Determine the frequency the sheet must be filled. <ul>
<li>Once: Only needs filled once per patient. Once filled, patient is not automatically prompted to fill again, unless the sheet has been revised. </li>
<li>Each Visit: Prompt the patient to fill the sheet at each visit.</li>
<li>Time Span: Specify a custom frequency in years, months, or days. </li>
</ul>
</li>
<li><b>Minimum Age</b>: Enter a minimum age for the patient to fill out the form (e.g., Set 18 if minors do not need to fill the form.)</li>
<li><b>Maximum Age</b>: Enter the maximum age (e.g., Set 18 if the form is only for pediatric patients).</li>
<li><b>Sheets to Ignore</b>: Only displays when <i>Once</i> is selected. Click [...] to select from sheets with the same sheet type. When a patient fills out the selected sheet, they are not prompted to fill out any <i>Sheets to Ignore</i>, even if these are in the Forms list. </li>
</ul>
<h2>More Options</h2>
<p>At the bottom of the window, click <b>Branding Profile</b> to set up branding for eClipboard devices. See <a href="eclipboardbranding.html">eClipboard Branding Profile</a> for details.</p>
<p>Other eClipboard options include <a href="eclipboardtreatmentplan.html">eClipboard: Treatment Plan</a> and <a href="eclipboardpaymentplans.html">eClipboard: Payment Plans</a>.</p>
<p>Also see <a href="eclipboardtroubleshooting.html">eClipboard Troubleshooting</a> and <a href="eclipboardsees.html">eClipboard: What Patient Sees</a>. </p>
		</div>
	</div>
</body>
</html>```
