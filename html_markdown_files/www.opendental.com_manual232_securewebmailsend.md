# File: ./www.opendental.com/manual232/securewebmailsend.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - WebMail</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('securewebmailsend','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/securewebmailsend.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/securewebmailsend.html" >v24.2</option><option value="https://www.opendental.com/manual241/securewebmailsend.html" >v24.1</option><option value="https://www.opendental.com/manual233/securewebmailsend.html" >v23.3</option><option value="https://www.opendental.com/manual232/securewebmailsend.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/securewebmailsend.html" >v23.1</option><option value="https://www.opendental.com/manual224/securewebmailsend.html" >v22.4</option><option value="https://www.opendental.com/manual223/securewebmailsend.html" >v22.3</option><option value="https://www.opendental.com/manual222/securewebmailsend.html" >v22.2</option><option value="https://www.opendental.com/manual221/securewebmailsend.html" >v22.1</option><option value="https://www.opendental.com/manual214/securewebmailsend.html" >v21.4</option><option value="https://www.opendental.com/manual213/securewebmailsend.html" >v21.3</option><option value="https://www.opendental.com/manual212/securewebmailsend.html" >v21.2</option><option value="https://www.opendental.com/manual211/securewebmailsend.html" >v21.1</option><option value="https://www.opendental.com/manual205/securewebmailsend.html" >v20.5</option><option value="https://www.opendental.com/manual204/securewebmailsend.html" >v20.4</option><option value="https://www.opendental.com/manual203/securewebmailsend.html" >v20.3</option><option value="https://www.opendental.com/manual202/securewebmailsend.html" >v20.2</option><option value="https://www.opendental.com/manual201/securewebmailsend.html" >v20.1</option><option value="https://www.opendental.com/manual194/securewebmailsend.html" >v19.4</option><option value="https://www.opendental.com/manual193/securewebmailsend.html" >v19.3</option><option value="https://www.opendental.com/manual192/securewebmailsend.html" >v19.2</option><option value="https://www.opendental.com/manual191/securewebmailsend.html" >v19.1</option><option value="https://www.opendental.com/manual184/securewebmailsend.html" >v18.4</option><option value="https://www.opendental.com/manual183/securewebmailsend.html" >v18.3</option><option value="https://www.opendental.com/manual182/securewebmailsend.html" >v18.2</option><option value="https://www.opendental.com/manual181/securewebmailsend.html" >v18.1</option><option value="https://www.opendental.com/manual174/securewebmailsend.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>WebMail</p></div>
<div class="GeneralPageContent">
<p>Providers can send a secure webmail message to patients or authorized representatives.</p>
<p>In the <a href="toolbar.html">Main Toolbar</a>, click <b>WebMail</b>. </p>
<img src="images/webMailEdit.gif" width="790" height="439"/><p>WebMail is a secure method of sending messages to a patient or <a href="authrep.html">Authorized Representatives</a>. Any user can compose a WebMail, but only a provider can send a WebMail.</p>
<p><b>Setup</b>: Click to open <a href="portalhostedbyod.html">Patient Portal</a> setup. Edit the default Notification Email template.</p>
<p><b>Regarding Patient</b>: Verify who the message is about. Click the dropdown to select a different family member. Patient must have an email address and primary provider entered to receive WebMail messages.</p>
<p><b>From</b>: Verify the From provider. By default it is the patient's primary provider. Click <b>[...]</b> to change.</p>
<p><b>Subject</b>: Enter the email subject line. </p>
<p><b>Message</b>: Enter the email message. </p>
<p><b>Attach</b>: Click to add an attachment. The file explorer will open.</p>
<p><b>Preview</b>:  <img src="images/webMailPreview.gif" width="43" height="15" style="margin-bottom: 0px"/> Click the Preview button to view the webmail message before sending. <br/><img src="images/secureWebMailText.gif" width="682" height="342" class="ImageInParagraph"/></p>
<p><b>Delete</b>: Click to delete the message. </p>
<p><b>Send</b>: Click to send the message. If the From provider is logged-on to Open Dental, the message will be sent. If another user is logged-on, the provider's password is required. Enter the password, then click OK.<br/><img src="images/secureWebMailPwd.gif" width="465" height="152" class="ImageInParagraph"/></p>
<p>Once sent, the secure message is sent to the patient portal and an email notification is sent to the patient.</p>
<h2>Receive WebMail</h2>
<p>Provider's can view WebMail responses in the <a href="emailinbox.html">Email Client</a>.<p class="codeblock"></p></p>
<p class="MarginBottomZero">Users will get an <a href="alerts.html">Alert</a> when they receive webmail from a patient. An alert only shows if: </p>
<ul>
<li>The logged-in user has a provider associated to them in the <a href="securityusers.html">User Edit</a> window. A provider can be associated with more than one user.</li>
<li>The patient's primary provider matches the provider associated to the user.</li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: Web Mail alerts specific to the logged-in user will display regardless of the user's alert subscriptions.</div>
</p>
</div>
</div>
</body>
</html>```
