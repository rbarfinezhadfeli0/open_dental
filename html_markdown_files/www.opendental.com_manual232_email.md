# File: ./www.opendental.com/manual232/email.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Email</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('email','emailmessage','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/email.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/email.html" >v24.2</option><option value="https://www.opendental.com/manual241/email.html" >v24.1</option><option value="https://www.opendental.com/manual233/email.html" >v23.3</option><option value="https://www.opendental.com/manual232/email.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/email.html" >v23.1</option><option value="https://www.opendental.com/manual224/email.html" >v22.4</option><option value="https://www.opendental.com/manual223/email.html" >v22.3</option><option value="https://www.opendental.com/manual222/email.html" >v22.2</option><option value="https://www.opendental.com/manual221/email.html" >v22.1</option><option value="https://www.opendental.com/manual214/email.html" >v21.4</option><option value="https://www.opendental.com/manual213/email.html" >v21.3</option><option value="https://www.opendental.com/manual212/email.html" >v21.2</option><option value="https://www.opendental.com/manual211/email.html" >v21.1</option><option value="https://www.opendental.com/manual205/email.html" >v20.5</option><option value="https://www.opendental.com/manual204/email.html" >v20.4</option><option value="https://www.opendental.com/manual203/email.html" >v20.3</option><option value="https://www.opendental.com/manual202/email.html" >v20.2</option><option value="https://www.opendental.com/manual201/email.html" >v20.1</option><option value="https://www.opendental.com/manual194/email.html" >v19.4</option><option value="https://www.opendental.com/manual193/email.html" >v19.3</option><option value="https://www.opendental.com/manual192/email.html" >v19.2</option><option value="https://www.opendental.com/manual191/email.html" >v19.1</option><option value="https://www.opendental.com/manual184/email.html" >v18.4</option><option value="https://www.opendental.com/manual183/email.html" >v18.3</option><option value="https://www.opendental.com/manual182/email.html" >v18.2</option><option value="https://www.opendental.com/manual181/email.html" >v18.1</option><option value="https://www.opendental.com/manual174/email.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Email</p></div>
<div class="GeneralPageContent">
<p>There are several ways <a href="emailmessage.html">Email Messages</a> can be sent and received using Open Dental accessed from the <a href="toolbar.html">Main Toolbar</a>.</p>
<h2>Regular email</h2>
<p class="MarginBottomZero">Send unsecure email messages to anyone entered as a patient in Open Dental.  </p>
<ul class="MarginBottomGap">
<li>Set up email <a href="emailsetup.html">Email Setup</a>.</li>
<li>Send emails by clicking Email in the toolbar. Regular emails support <a href="emailhtml.html">HTML Email</a> Formatting. </li>
<li>Receive emails in the <a href="emailinbox.html">Email Client</a> (optional).</li>
<li>This method does not violate <a href="../site/hipaa.html">HIPAA</a> as long as you don't send protected health information (PHI). </li>
</ul>
<h2>Secure Email</h2>
<p class="MarginBottomZero">Send and receive secure email messages. </p>
<ul class="MarginBottomGap">
<li>Enable Secure Email in <a href="secureemailsetup.html">Secure Email Setup</a>.</li>
<li>See <a href="secureemailworkflow.html">Secure Email: Workflow</a> for sending and receiving secure email messages. </li>
<li>Secure Email supports HTML formatting.</li>
<li>Secure Email incurs an additional fee, see <a href="fees.html">Fees for Support and Services</a>.</li>
</ul>
<h2>Web Mail</h2>
<p class="MarginBottomZero">Send and receive secure Web Mail messages to and from patients using the Patient Portal </p>
<ul class="MarginBottomGap">
<li>To send a Web Mail message, see <a href="securewebmailsend.html">Web Mail. </a></li>
<li>Patients can view Web Mail messages in <a href="portalhostedbyod.html">Patient Portal</a>. Also see <a href="portalpatientsees.html">Patient Portal: What Patient Sees</a>.</li>
</ul>
<h2>Other Information</h2>
<p><b>10/04/2021</b>:Google began restricting less secure app access to G Suite Accounts in 2020. Open Dental has completed the OAuth Integration with Google, which allows us to continue to use Gmail accounts within the program. The OAuth Integration is available in versions 22.3.10, 22.2.41, and 22.1.61 and greater. </p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> For instructions, see our video: <a href="https://youtu.be/wvu6ZNhSYSc">Google Authorization for Gmail</a></p>
<p><b>Reminder</b>: If you are using an email client (such as Microsoft Outlook) to email multiple patients (e.g. mass email), be sure to use a <i>Bcc</i> field rather than <i>To</i> or <i>Cc</i> to avoid exposing your patient email addresses to other patients.</p>
</div>
</div>
</body>
</html>```
