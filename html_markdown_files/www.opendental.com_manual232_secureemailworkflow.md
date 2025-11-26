# File: ./www.opendental.com/manual232/secureemailworkflow.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Secure Email: Workflow</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('secureemailworkflow','secureemailsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/secureemailworkflow.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/secureemailworkflow.html" >v24.2</option><option value="https://www.opendental.com/manual241/secureemailworkflow.html" >v24.1</option><option value="https://www.opendental.com/manual233/secureemailworkflow.html" >v23.3</option><option value="https://www.opendental.com/manual232/secureemailworkflow.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/secureemailworkflow.html" >v23.1</option><option value="https://www.opendental.com/manual224/secureemailworkflow.html" >v22.4</option><option value="https://www.opendental.com/manual223/secureemailworkflow.html" >v22.3</option><option value="https://www.opendental.com/manual222/secureemailworkflow.html" >v22.2</option><option value="https://www.opendental.com/manual221/secureemailworkflow.html" >v22.1</option><option value="https://www.opendental.com/manual214/secureemailworkflow.html" >v21.4</option><option value="https://www.opendental.com/manual213/secureemailworkflow.html" >v21.3</option><option value="https://www.opendental.com/manual212/secureemailworkflow.html" >v21.2</option><option value="https://www.opendental.com/manual211/secureemailworkflow.html" >v21.1</option><option value="https://www.opendental.com/manual205/secureemailworkflow.html" >v20.5</option><option value="https://www.opendental.com/manual204/secureemailworkflow.html" >v20.4</option><option value="https://www.opendental.com/manual203/secureemailworkflow.html" >v20.3</option><option value="https://www.opendental.com/manual202/secureemailworkflow.html" >v20.2</option><option value="https://www.opendental.com/manual201/secureemailworkflow.html" >v20.1</option><option value="https://www.opendental.com/manual194/secureemailworkflow.html" >v19.4</option><option value="https://www.opendental.com/manual193/secureemailworkflow.html" >v19.3</option><option value="https://www.opendental.com/manual192/secureemailworkflow.html" >v19.2</option><option value="https://www.opendental.com/manual191/secureemailworkflow.html" >v19.1</option><option value="https://www.opendental.com/manual184/secureemailworkflow.html" >v18.4</option><option value="https://www.opendental.com/manual183/secureemailworkflow.html" >v18.3</option><option value="https://www.opendental.com/manual182/secureemailworkflow.html" >v18.2</option><option value="https://www.opendental.com/manual181/secureemailworkflow.html" >v18.1</option><option value="https://www.opendental.com/manual174/secureemailworkflow.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Secure Email: Workflow</p></div>
<div class="GeneralPageContent">
<p>See <a href="secureemailsetup.html">Secure Email Setup</a>.</p>
<p>Secure email messages can be sent to patients, and patient replies are also secure. </p>
<p> First, enable Secure Email in <a href="eservicessignup.html">eServices Signup</a>.</p>
<h2>Sending Secure Email</h2>
<p class="MarginBottomZero">To send a secure email message: </p>
<ol class="MarginBottomGap">
<li>In Open Dental, select the patient to email.  <ul>
<li>If emailing another provider or office, add them as a patient. Set the patient status for these accounts to <i>NonPatient</i>.</li>
</ul>
</li>
<li>Click <b>Email</b>.</li>
<li>Enter the email subject and body. Both fields are required to include text. Attach any files if needed.</li>
<li>Click <b>Send Secure</b>. <ul>
<li> See <a href="emailmessage.html">Email Message Edit</a> for details.</li>
<li>Emails can only be sent directly to the patient. CC or BCC addresses are not allowed.</li>
</ul>
</li>
</ol>
<h2>Patient Process</h2>
<p class="MarginBottomZero">When a patient receives a secure email message, they will do the following to view the message: </p>
<ol class="MarginBottomGap">
<li>In their email client, they will receive a notice that a secure email is available.<br/><img src="images/secureEmailWorkflowPat1.png" width="915" height="460" class="ImageInParagraph"/></li>
<li>The patient clicks <b>View Secure Email</b>. They will be prompted to enter a one-time passcode. If the email is past the Expiration date/time, the patient receives a warning and they cannot view the email. The office must send a new email instead.<br/><img src="images/secureEmailWorkflowPat2.png" width="915" height="409" class="ImageInParagraph"/></li>
<li>The passcode will be emailed to the same email address for the patient.<br/><img src="images/secureEmailWorkflowPat3.png" width="915" height="464" class="ImageInParagraph"/></li>
<li>The patient will copy and paste the code, then clicks <b>Verify</b>.<br/><img src="images/secureEmailWorkflowPat4.png" width="629" height="302" class="ImageInParagraph"/></li>
<li>The patient will then be able to view the secure message.<br/><img src="images/secureEmailWorkflowPat5.png" width="915" height="318" class="ImageInParagraph"/><br/> Tabs:  <ul>
<li>Inbox: The patient can view other received secure email messages. </li>
<li>Sent: The patient can view replies they sent back to the office.</li>
<li>Files: The patient can view any files attached to secure email messages.</li>
</ul>
</li>
<br/><li>If the patient wishes to reply, they will click<b> Reply All</b>.<br/>  Attachments can be included in replies (bmp, cur, docx, gif, ico, jfif, jpeg, jpg, log, pdf, pjp, pjpeg, png, svg, tif, tiff, txt). Maximum file size is 20MB. <br/><img src="images/secureEmailWorkflowPat6.png" width="915" height="417" class="ImageInParagraph"/></li>
<li>When the patient is done reviewing messages, they can <b>Sign Out</b>.</li>
</ol>
<h2>Receiving Patient Replies</h2>
<p>An <a href="alerts.html">Alert</a> will appear in the Main Menu when a patient has sent a new secure email reply. To view replies to Secure Emails, see <a href="emailinbox.html">Email Client</a>. </p>
<img src="images/secureEmailReceive.png" width="915" height="464"/><p><div class="Note">Note: <ul>
<li>If testing Secure Email, use a different <i>To</i> Address than the <i>From </i>Address. Using the same email address for <i>To</i> and<i> From</i> will not allow a notification to be sent.</li>
<li>Attachments sent from the patient are available in the patient's chart.</li>
</ul>
</div>
</p>
</div>
</div>
</body>
</html>```
