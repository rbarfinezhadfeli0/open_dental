# File: ./www.opendental.com/manual/emailsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Email Setup</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('emailsetup','+manage','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/emailsetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/emailsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/emailsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/emailsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/emailsetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/emailsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/emailsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/emailsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/emailsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/emailsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/emailsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/emailsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/emailsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/emailsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/emailsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/emailsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/emailsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/emailsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/emailsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/emailsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/emailsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/emailsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/emailsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/emailsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/emailsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/emailsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/emailsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/emailsetup.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Email Setup</p></div>
<div class="GeneralPageContent">
<p>To utilize email features in Open Dental, set up Email Addresses.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Manage, Email.</p>
<img src="images/emailsetup.png" width="912" height="321"/><p>Alternatively, in the <a href="emailinbox.html">Email Client</a>, in the top menu, click Setup.</p>
<p>Each clinic can be assigned one outgoing email address. Add the clinic email address here, then assign it in the <a href="cliniceditwindow.html">Clinic Edit</a> window. Clinic email addresses must be assigned in Clinic Edit if using eServices that utilize email.</p>
<p class="MarginBottomZero"><b>Email Addresses</b>: A list of email addresses that have been added for use in Open Dental can be used by all staff members (e.g. general practice, clinic, or group email addresses). </p>
<ul class="MarginBottomGap">
<li>User Name: The email address.</li>
<li>Sender Address: The <i>Email address of sender</i> as entered on the Edit Email Address window.</li>
<li>User: The user associated with the email address. Only the assigned user can utilize this address when sending emails.</li>
<li>Default: The address marked X is the default <i>From</i> address for outgoing emails.</li>
<li>Notify: The address marked X is the <i>From</i> email used to send secure WebMail notifications to patients. </li>
</ul>
<p>Double-click an existing address to edit.</p>
<p><b>Set Default</b>: Set the selected email address as the <i>From</i> email address for outgoing emails. If an email address is assigned to the <a href="cliniceditwindow.html">Clinic</a>, this is used instead. If the logged-in user is assigned an email address this is used instead of the default or Clinic email.</p>
<p><b>WebMail Notify</b>: Set the selected email address as the <i>From</i> email address for <a href="securewebmail.html">WebMail</a> notifications to patients.</p>
<div class="Note">Note: Default and WebMail Notify email addresses are required for <a href="eservicessignup.html">eServices</a> to function correctly.</div>
<br/><br/><p><b>Add</b>: Open <a href="emailaddressedit.html">Email Address Edit</a> to add a new email account. </p>
<p><b>Inbox Receive Interval</b>: Set the time, in minutes, to automatically check for and download new emails to the <a href="emailinbox.html">Email Inbox</a> using the <a href="opendentalservice.html">Open Dental Service</a>. Five minutes is the default.</p>
<p class="MarginBottomZero"><b>Include Opt-Out Statement</b>: Determines if an opt-out statement is included in all eService emails. The statement includes <a href="practice.html">Practice</a> or the patient's assigned <a href="clinicsetup.html">Clinic</a> address and instructions about how to unsubscribe from <a href="eservices.html">eService</a> emails (see example below). </p>
<ul class="MarginBottomGap">
<li>Checked: Include the opt-out statement at the bottom of all eServices emails. The opt-out statement cannot be edited.</li>
<li>Unchecked: Do not include the opt-out statement in eServices emails. When unchecked, there is a warning that the opt-out statement is required by US law. Click <b>OK</b> to continue. </li>
</ul>
<p>Example:<br/><i>This email has been sent to you from:<br/> North Clinic<br/> 123 Walrus Way<br/> Portland, OR 97338.<br/><br/> How to unsubscribe:<br/> If you no longer want to receive any email messages from us, simply reply to this email with the word "unsubscribe" in the subject line.</i></p>
<p><div class="Note">Note: <ul>
<li>When a patient emails a response to <i>unsubscribe</i>, they are not automatically removed from an eService email list. To stop sending them eServices emails, remove their email address on <a href="patientedit.html">Edit Patient Information</a>.</li>
<li>If a patient has unsubscribed from eServices emails, their email address must be manually entered for future non-eServices emails..</li>
</ul>
</div>
</p>
<p>See <a href="emailerrors.html">Email Errors</a> for detailed information on potential errors.</p>
</div>
</div>
</body>
</html>```
