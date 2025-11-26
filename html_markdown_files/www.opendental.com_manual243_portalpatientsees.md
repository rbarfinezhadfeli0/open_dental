# File: ./www.opendental.com/manual243/portalpatientsees.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Portal: What Patient Sees</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('portalpatientsees','portalhostedbyod','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/portalpatientsees.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/portalpatientsees.html" >v24.2</option><option value="https://www.opendental.com/manual241/portalpatientsees.html" >v24.1</option><option value="https://www.opendental.com/manual233/portalpatientsees.html" >v23.3</option><option value="https://www.opendental.com/manual232/portalpatientsees.html" >v23.2</option><option value="https://www.opendental.com/manual231/portalpatientsees.html" >v23.1</option><option value="https://www.opendental.com/manual224/portalpatientsees.html" >v22.4</option><option value="https://www.opendental.com/manual223/portalpatientsees.html" >v22.3</option><option value="https://www.opendental.com/manual222/portalpatientsees.html" >v22.2</option><option value="https://www.opendental.com/manual221/portalpatientsees.html" >v22.1</option><option value="https://www.opendental.com/manual214/portalpatientsees.html" >v21.4</option><option value="https://www.opendental.com/manual213/portalpatientsees.html" >v21.3</option><option value="https://www.opendental.com/manual212/portalpatientsees.html" >v21.2</option><option value="https://www.opendental.com/manual211/portalpatientsees.html" >v21.1</option><option value="https://www.opendental.com/manual205/portalpatientsees.html" >v20.5</option><option value="https://www.opendental.com/manual204/portalpatientsees.html" >v20.4</option><option value="https://www.opendental.com/manual203/portalpatientsees.html" >v20.3</option><option value="https://www.opendental.com/manual202/portalpatientsees.html" >v20.2</option><option value="https://www.opendental.com/manual201/portalpatientsees.html" >v20.1</option><option value="https://www.opendental.com/manual194/portalpatientsees.html" >v19.4</option><option value="https://www.opendental.com/manual193/portalpatientsees.html" >v19.3</option><option value="https://www.opendental.com/manual192/portalpatientsees.html" >v19.2</option><option value="https://www.opendental.com/manual191/portalpatientsees.html" >v19.1</option><option value="https://www.opendental.com/manual184/portalpatientsees.html" >v18.4</option><option value="https://www.opendental.com/manual183/portalpatientsees.html" >v18.3</option><option value="https://www.opendental.com/manual182/portalpatientsees.html" >v18.2</option><option value="https://www.opendental.com/manual181/portalpatientsees.html" >v18.1</option><option value="https://www.opendental.com/manual174/portalpatientsees.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Portal: What Patient Sees</p></div>
<div class="GeneralPageContent">
<p>In an internet browser, navigate to the <a href="portalhostedbyod.html">Patient Portal</a> Patient Facing URL.</p>
<img src="images/portalLogIn.gif" width="915" height="338"/><p>Patients can access the Patient Portal using most web browsers or mobile devices. Below is a summary of what the patient or <a href="authrep.html">Authorized Representatives</a> may see when they go to the Patient Portal.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Contact Us</b>: Click to view contact information for the office.</li>
<li><b>Make Payment</b>: Make a payment via the <a href="portalpaymentsbypatient.html">Payment Portal</a>.</li>
<li><b>User Name</b>: Patient user name. The initial username is generated by Open Dental in the Chart Module, but a prompt requests the patient to update their username after the first login.</li>
<li><b>Forgot password</b>: Click to reset a forgotten password. An email is sent to the patient's email address with a reset code. Patient enters the reset code in the Password Reset window to continue and create a new password.</li>
<li><b>Password</b>: Patient enters their password. The initial password is generated by Open Dental in the Chart Module, but can later be changed by the patient after login. Alternatively, office staff can generate a new password. See <a href="portalaccess.html">Patient Portal Access</a>.</li>
<li><b>Remember User Name</b>: Check to remember their user name for future login.</li>
<li><b>Sign In</b>: Click to enter Patient Portal.</li>
</ul>
<p>After login, the patient may be prompted to verify their personal information, as required by certain payment processors.<br/><img src="images/patientPortalVerify.png" width="248" height="225" class="ImageInParagraph"/></p>
<h2>Navigating Patient Portal</h2>
<p>Patients can navigate Patient Portal by clicking the tabs at the top. Tabs can be included or omitted depending on the settings selected by the office in <a href="portalsettings.html">Patient Portal Settings</a>.</p>
<img src="images/patientPortalMain.gif" width="915" height="113"/><p class="MarginBottomZero">Header options: </p>
<ul class="MarginBottomGap">
<li><b>Contact Us</b>: View contact information about the practice or clinic.</li>
<li><b>Patient Name</b>: The name of the currently logged on patient. Click the dropdown to select from two options: <ul>
<li><b>Change Password</b>: Change the logged-on user's password.</li>
<li><b>Manage Credit Cards</b>: Add or remove credit cards used in the portal.  <div class="Note">Note:  Patients whose office utilizes PayConnect as their payment processor are unable to add credit cards through the Manage Credit Cards window. Credit cards must be added during a transaction instead. </div>
</li>
</ul>
</li>
<li><b>Family</b>: View patient information for other family members.</li>
<li><b>Refresh</b>: Refresh information in the portal.</li>
<li><b>Sign Out</b>: Sign out of Patient Portal.</li>
</ul>
<p><div class="Note">Note: Date displays according to the language setting of the browser. For example, <i>English (Canada)</i> would display <i>dd/mm/yyyy</i>.</div>
</p>
<h2>Appointments</h2>
<p>In the Appointments tab, patients can view scheduled and completed appointments and view other action needed items, such as appointments that need confirmed and <a href="../site/websched.html">Web Sched Recall</a> notifications that are still unscheduled.</p>
<img src="images/patPortalAppointments.png" width="915" height="334"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Appointments</b>: View completed and scheduled appointments. </li>
<li><b>Action Needed</b>: View appointments where action is needed, such as confirming an appointment or scheduling a Web Sched Recall appointment. Actions can be taken from this tab.</li>
</ul>
<h2>Account</h2>
<p>In the Account area, patients can view statements and make payments.</p>
<img src="images/portalAccount.png" width="915" height="286"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Pay</b>: Make a payment via <a href="portalpaymentsbypatient.html">Payment Portal</a>. Patients can make an online payment if they have a statement and online payments are enabled for the payment processor.</li>
<li><b>Open</b>: Open the statement in a new tab.</li>
<li><b>Download (icon)</b>: Download the statement.</li>
<li><b>Arrow (icon)</b>: View a summary of the balance on the statement.</li>
</ul>
<p>The balance is reflective of the last generated statement, not the current balance of the account. If a patient does not have a statement on their account, this area is blank.</p>
<h2>Plan</h2>
<p>In the Plan tab, patients can view treatment planned procedures. This tab only displays treatment saved on a Saved Treatment Plan.</p>
<img src="images/portalTP.gif" width="915" height="333"/><h2>WebMail</h2>
<p>View and send private WebMail or Secure Email messages (between the provider and patient).</p>
<img src="images/portalWebMail.gif" width="915" height="352"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Compose</b>: Send a new webmail message. </li>
<li><b>Inbox</b>: Messages received from the provider.</li>
<li><b>Sent Items</b>: Messages sent by the patient.</li>
<li><b>Secure Email</b>: View Secure Email messages.</li>
</ul>
<p class="MarginBottomZero">Click on a message to preview it in the bottom of the screen.  </p>
<ul class="MarginBottomGap">
<li>Bold text indicates an unread message</li>
<li>If the message has an attachment (e.g., a clinical summary), a paperclip symbol shows to the left of the message. To open an attachment, click on the link. Patients can only view attachments; they cannot upload and send attachments.</li>
<li>The status of the message is indicated under Sent At.  <img src="images/portalUnread.gif" width="16" height="13"/> = Unread  <img src="images/portalSent.gif" width="16" height="12"/> = Sent  <img src="images/portalRead.gif" width="16" height="12"/> = Read</li>
</ul>
<p><div class="Note">Note: Authorized representatives can send messages on behalf of any family member. Click the Patient Name (next to Regarding Patient), then select the family member.</div>
</p>
<h2>Summary</h2>
<p>In the Summary tab, patients can view, download, or transmit <a href="ehrccd.html">Continuity of Care Document (CCD)</a>.</p>
<img src="images/portalCareSummary.gif" width="915" height="472"/><p>CCDs are automatically created and saved for patients if the office has downloaded SnoMed Codes and CVX Codes. See <a href="codesystemimport.html">Importing Code Systems</a>.</p>
<p>Highlight a patient name to view the associated care summary. Click a Table of Contents link to jump to specific information.</p>
<p class="MarginBottomZero">The patient can perform the following actions for each care summary: </p>
<ul class="MarginBottomGap">
<li><b>History</b>: View a detailed dated history of all actions, including any taken by an authorized representative on behalf of the patient (e.g. the guarantor).</li>
<li><img src="images/portalDownload.gif" width="20" height="20" style="margin-bottom: 0px"/>: Download the care summary as a zip file.</li>
<li><img src="images/portalTransmit.gif" width="22" height="19" style="margin-bottom: 0px"/>: Transmit the care summary to another provider the patient has been referred to. This icon is only visible if:  <ul>
<li>A referral has been entered in Open Dental.</li>
<li>Direct trust has been established with the referring provider (see <a href="direct.html">Email Direct Encryption</a>) and it has been denoted on the provider's <a href="referralsetup.html">Add Referral window</a> (Email Trust for Direct is checked).</li>
</ul>
</li>
</ul>
<h2>Images</h2>
<p>In the Images tab, patients can view PDFs and image files stored in <a href="images.html">Imaging Module</a> folders shared to the Patient Portal.</p>
<img src="images/portalImages.gif" width="915" height="338"/><p>Images display chronologically, oldest to newest. Click  <img src="images/portalDownload.gif" width="20" height="20" style="margin-bottom: 0px"/> to download the file.</p>
<p>Only patients with a status of <i>Patient</i>, <i>NonPatient</i>, or <i>Inactive</i> can download images.</p>
</div>
</div>
</body>
</html>```
