# File: ./www.opendental.com/manual/portalhostedbyod.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Patient Portal</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('portalhostedbyod','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/portalhostedbyod.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/portalhostedbyod.html" >v24.2</option><option value="https://www.opendental.com/manual241/portalhostedbyod.html" >v24.1</option><option value="https://www.opendental.com/manual233/portalhostedbyod.html" >v23.3</option><option value="https://www.opendental.com/manual232/portalhostedbyod.html" >v23.2</option><option value="https://www.opendental.com/manual231/portalhostedbyod.html" >v23.1</option><option value="https://www.opendental.com/manual224/portalhostedbyod.html" >v22.4</option><option value="https://www.opendental.com/manual223/portalhostedbyod.html" >v22.3</option><option value="https://www.opendental.com/manual222/portalhostedbyod.html" >v22.2</option><option value="https://www.opendental.com/manual221/portalhostedbyod.html" >v22.1</option><option value="https://www.opendental.com/manual214/portalhostedbyod.html" >v21.4</option><option value="https://www.opendental.com/manual213/portalhostedbyod.html" >v21.3</option><option value="https://www.opendental.com/manual212/portalhostedbyod.html" >v21.2</option><option value="https://www.opendental.com/manual211/portalhostedbyod.html" >v21.1</option><option value="https://www.opendental.com/manual205/portalhostedbyod.html" >v20.5</option><option value="https://www.opendental.com/manual204/portalhostedbyod.html" >v20.4</option><option value="https://www.opendental.com/manual203/portalhostedbyod.html" >v20.3</option><option value="https://www.opendental.com/manual202/portalhostedbyod.html" >v20.2</option><option value="https://www.opendental.com/manual201/portalhostedbyod.html" >v20.1</option><option value="https://www.opendental.com/manual194/portalhostedbyod.html" >v19.4</option><option value="https://www.opendental.com/manual193/portalhostedbyod.html" >v19.3</option><option value="https://www.opendental.com/manual192/portalhostedbyod.html" >v19.2</option><option value="https://www.opendental.com/manual191/portalhostedbyod.html" >v19.1</option><option value="https://www.opendental.com/manual184/portalhostedbyod.html" >v18.4</option><option value="https://www.opendental.com/manual183/portalhostedbyod.html" >v18.3</option><option value="https://www.opendental.com/manual182/portalhostedbyod.html" >v18.2</option><option value="https://www.opendental.com/manual181/portalhostedbyod.html" >v18.1</option><option value="https://www.opendental.com/manual174/portalhostedbyod.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Patient Portal</p></div>
<div class="GeneralPageContent">
<p>Construct the Patient Portal URL and customize the Patient Portal Notification Email.</p>
<p>In <a href="eservicessetup.html">eServices Setup</a>, click <b>Patient Portal</b>.</p>
<img src="images/patientPortalSetup.png" width="564" height="645"/><p class="MarginBottomZero">Patient Portal is hosted by Open Dental and available to all customers on support. </p>
<ul class="MarginBottomGap">
<li><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our Webinar: <a href="https://youtu.be/IxfWruEwwyY">Patient Portal</a>.</li>
<li>Customize which tabs are enabled for patients in <a href="portalsettings.html">Patient Portal Settings</a>.</li>
<li>Set up and customize Patient Portal Invites in the <a href="editrule.html">Edit Rule</a> window.</li>
<li>For a patient-facing view of Patient Portal, see <a href="portalpatientsees.html">Patient Portal: What Patient Sees</a>.</li>
<li>To view an interactive demonstration of Patient Portal, see our <a href="https://www.patientviewer.com/patientportal/22_3_4/gwt/PatientPortal/PatientPortal.html">Demo</a>. Enter a username of <i>demo</i> to access it.</li>
</ul>
<h2>Patient Facing URL</h2>
<p>The patient facing URL is the web address given to patients to access the portal. It can be the hosted URL, or, can be a page on the office website that redirects the patient to the hosted URL. This URL shows on the printout generated when granting access.</p>
<img src="images/patPortalPatURL.png" width="546" height="121"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Customize URL</b>: Click to enter a custom URL that shows on printouts. Typically, this URL is a redirect back to the Patient Portal.<br/><img src="images/patientPortalCustomizeURL.png" width="465" height="152" class="ImageInParagraph"/></li>
<li><b>Use Hosted</b>: Click to use the the Patient Portal URL generated by Open Dental. If a custom URL was entered, this resets it back to the default Hosted URL.</li>
</ul>
<h2>Construct Hosted URL</h2>
<p>The hosted URL is a unique URL linked to the practice's database.</p>
<img src="images/patPortalConstructURL.png" width="552" height="184"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Navigate to URL</b>: Click to open the URL in a browser.</li>
<li><b>Copy to Clipboard</b>: Click to copy the URL to the clipboard.</li>
<li><b>Clinic</b>: Affects the clinic name listed in the header on the Hosted URL destination. Click the dropdown menu or [...] to select the clinic.</li>
</ul>
<h2>Notification Email for Secure WebMail</h2>
<p>The notification email subject and message are used to create unsecure email notifications that alert a patient when a new Secure <a href="securewebmailsend.html">WebMail</a> message is available in the Patient Portal.</p>
<img src="images/patPortalEmail.png" width="547" height="262"/><p>The email address set as <i>WebMailNotify</i> in <a href="emailsetup.html">Email Setup</a> is used to send WebMail notifications.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Subject</b>: The subject of the email.</li>
<li><b>Body</b>: The email message itself. Make sure to include the tag [URL]. This allows patients to quickly access the Patient Portal login page to view the secure message. </li>
<li><b>Edit</b>: Click to edit HTML of email message. See <a href="emailhtml.html">HTML Email</a> for details on use. </li>
</ul>
<p>Additionally, Secure Email messages can be viewed in Patient Portal. </p>
</div>
</div>
</body>
</html>```
