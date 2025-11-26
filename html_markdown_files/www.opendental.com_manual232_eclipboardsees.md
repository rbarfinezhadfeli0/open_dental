# File: ./www.opendental.com/manual232/eclipboardsees.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eClipboard: What Patient Sees</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclipboardsees','eclipboardsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/eclipboardsees.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/eclipboardsees.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclipboardsees.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclipboardsees.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclipboardsees.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/eclipboardsees.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclipboardsees.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclipboardsees.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclipboardsees.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclipboardsees.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclipboardsees.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclipboardsees.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclipboardsees.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclipboardsees.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclipboardsees.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclipboardsees.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclipboardsees.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclipboardsees.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclipboardsees.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclipboardsees.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclipboardsees.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclipboardsees.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclipboardsees.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclipboardsees.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclipboardsees.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclipboardsees.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclipboardsees.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclipboardsees.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eClipboard: What Patient Sees</p></div>
<div class="GeneralPageContent">
<p>On a tablet device, launch the <a href="eclipboardsetup.html">eClipboard</a> app.</p>
<p>eClipboard features vary depending on which settings are enabled in <a href="eclipboardsetup.html">eClipboard Setup</a>. </p>
<h2>Patient Check-in</h2>
<p class="MarginBottomZero">If <i>Allow self check-in</i> is enabled, patients start by entering their first name, last name, and birthdate. Preferred names are taken into consideration if they are entered in the <a href="patientedit.html">Edit Patient Information</a> window. </p>
<ul class="MarginBottomGap">
<li>Alternatively, when <i>Display check-in questions individually</i> is checked, the first name, last name, and birthdate prompts each appear on their own screen.</li>
<li>To bypass entering first name, last name, and birthdate, right-click the patient's appointment in Open Dental and select <i>Show eClipboard QR</i>. Scan the QR code using the QR icon in the bottom right of the eClipboard device. This quickly accesses the patient's check-in checklist.</li>
</ul>
<img src="images/eClipboardCheckIn.png" width="675" height="397"/><p>Once entered, the patient is asked to confirm the time of their appointment and provider.</p>
<img src="images/eClipboardCheckInVerify.png" width="675" height="221"/><p><div class="Note">Note: <ul>
<li>The provider's preferred name is used if entered in the Edit Provider window.</li>
<li>A warning displays if the clinic assigned to the device differs from the clinic the patient is scheduled in.</li>
</ul>
</div>
</p>
<h2>Patient Authentication</h2>
<p>If <i>Require patients to complete authentication before showing sheets</i> is enabled, patients are prompted to enter a code to verify their identity.</p>
<img src="images/eclipboard2FA.png" width="675" height="236"/><p class="MarginBottomZero">The patient selects their preferred way to receive the authentication code: </p>
<ul class="MarginBottomGap">
<li>Email code to: Email the code to the email address on file for the patient.</li>
<li>Text code to: Text the code to the wireless phone number on file for the patient.</li>
</ul>
<p>Once the code is received, the patient is prompted to enter it. Enter the code, then click <b>Submit</b> to continue.</p>
<img src="images/eclipboardCode.png" width="675" height="215"/><h2>Check-in Checklist</h2>
<p>Once at the Check-in Checklist, the patient can begin completing items. As items are completed, a green checkmark displays.</p>
<img src="images/eClipboardFormsChecklist.png" width="675" height="440"/><p class="MarginBottomZero">The patient clicks on an item to complete it, then is prompted to click Next to move on to the next item. Checklist items can include:  </p>
<ul class="MarginBottomGap">
<li>Patient forms (<i>Allow patients to fill forms in mobile app</i>, <i>Add specified forms upon patient arrival</i>) <ul>
<li>Staff can also send or remove forms from the list from the <a href="kiosk.html">Kiosk Manager</a>. This can happen at any time in the eClipboard process as forms are uploaded to the device in real time.</li>
<li>If manually checking in a patient, enable <i>Show kiosk manager when staff changes patient status to arrive</i>. This prompts the Kiosk Manager to show and send the forms to a device.</li>
<li>Forms use the mobile layout of custom sheets. Some fields may pre-fill with patient information. These fields can be edited or updated as needed. Once filled, patients can sign digitally using the touch screen of the device.</li>
<li>First Name, Last Name, and birthdate cannot be edited.</li>
</ul>
</li>
<li>Patient picture (<i>Allow patients to take self-portrait in mobile app</i>) <ul>
<li>Even when enabled, patients may skip this step and submit forms anyway.</li>
</ul>
</li>
<li>Picture of their Photo ID (<i>Allow Image Captures</i>) <ul>
<li>Even when enabled, patients may skip this step and submit forms anyway.</li>
</ul>
</li>
<li>Picture of their Insurance Card (<i>Allow Image Captures</i>) <ul>
<li>Even when enabled, patients may skip this step and submit forms anyway.</li>
</ul>
</li>
</ul>
<h2>Mobile Forms</h2>
<p>If the patient has forms to fill out, they appear using the <a href="sheetsetupmobile.html">Mobile Sheet Layout</a>.</p>
<img src="images/eClipboardMobileForm.png" width="675" height="423"/><h2>Return Screen</h2>
<p>Once all items are submitted, a message displays requesting the patient return the device. The message can be customized in eClipboard setup, <i>Message to show patients after successful check-in</i>.</p>
<img src="images/eclipboardReturn.png" width="675" height="224"/><p>Click <b>Return</b> to return to the Check-In screen, or wait 20 seconds to refresh automatically.</p>
<h2>Signup Portal Login</h2>
<p>To associate eClipboard with your practice, enter the Signup Portal Credentials. These credentials are only needed the first time you login to eClipboard, or if you have manually logged out of eClipboard.</p>
<img src="images/eClipboardLogin.png" width="675" height="366"/><p>If using the same device between clinics, completely log out, then log in using the credentials for the needed clinic.</p>
<h2>Menu</h2>
<p>Click the menu icon in the upper left to open the menu. </p>
<img src="images/eclipoardMenu.png" width="675" height="362"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Check-in</b>: Opens the patient Check-in screen.</li>
<li><b>Treatment Plans</b>: Opens the camera to scan a Treatment Plan QR code. See <a href="eclipboardtreatmentplan.html">eClipboard: Treatment Plan</a>. </li>
<li><b>Payment Plans</b>: Opens the camera to scan a Payment Plan QR code. See <a href="eclipboardpaymentplans.html">eClipboard: Payment Plans</a>.</li>
<li><b>Patient Payments</b>: Opens the camera to scan a Patient Payment QR code. See <a href="eclipboardpayment.html">eClipboard: Payment</a>.</li>
<li><b>About</b>: Opens the About section. See below for details. </li>
<li><b>Logout</b>: Close eClipboard. Open Dental username and password is required. This prevents patients from accessing other areas of the device.</li>
</ul>
<h2>About</h2>
<p>Use the eClipboard Menu to view About information. An Open Dental username and password is required.</p>
<img src="images/eClipboardAbout.png" width="675" height="283"/><p><b>Device Name</b>: The default name can be customized as needed to differentiate devices.</p>
</div>
</div>
</body>
</html>```
