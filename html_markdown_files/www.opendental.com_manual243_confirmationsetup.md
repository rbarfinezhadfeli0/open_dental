# File: ./www.opendental.com/manual243/confirmationsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Confirmation Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('confirmationsetup','+appointments','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/confirmationsetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/confirmationsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/confirmationsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/confirmationsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/confirmationsetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/confirmationsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/confirmationsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/confirmationsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/confirmationsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/confirmationsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/confirmationsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/confirmationsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/confirmationsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/confirmationsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/confirmationsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/confirmationsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/confirmationsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/confirmationsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/confirmationsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/confirmationsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/confirmationsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/confirmationsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/confirmationsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/confirmationsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/confirmationsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/confirmationsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/confirmationsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/confirmationsetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Confirmation Setup</p></div>
<div class="GeneralPageContent">
<p>Use Confirmation Setup to define the default messages (text messages, emails, and postcards) for confirmations sent from the Confirmation List and set the default appointment confirmation status to apply when a confirmation is emailed or texted.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Appointments, Confirmations.</p>
<img src="images/confirmationSetup.png" width="866" height="371"/><p>This window is specific to confirmations sent manually (i.e., from the <a href="confirmationlist.html">Confirmation List</a> or <a href="appointments.html">Appointments Module</a>).</p>
<p><div class="Note">Note: To set default options for printing postcards and email logic, see <a href="recallsetup.html">Setup Recall</a>.</div>
</p>
<p><b>Automated eConfirmation and eReminder Setup</b>: To change settings for automatic confirmations, click to open <a href="automatedmessaging.html">Automated Messaging</a>. </p>
<p class="MarginBottomZero">The Messages grid displays the message text used for postcard, email, and text message confirmations sent from the Confirmation List.  </p>
<ul class="MarginBottomGap">
<li><b>Mode</b>: The method of delivery (Postcard, Email, Text).</li>
<li><b>Second column</b>: General guidance about the message and what variables are available for use.</li>
<li><b>Message</b>: The message text. See Message Edit below to make changes.</li>
<li><b>Group Families</b>: Determines the default setting of the Group Families box in the Confirmation List.  <ul>
<li>Checked: Family members group together by default and receive one confirmation.</li>
<li>Unchecked: Each family member receives their own confirmation by default.</li>
</ul>
</li>
</ul>
<p><b>Status for emailed confirmation</b>: The confirmation status applied to the appointment when a confirmation is emailed from the Confirmation List.</p>
<p><b>Status for texted confirmation</b>: The confirmation status applied to the appointment when a confirmation is texted from the Confirmation List.</p>
<h2>Message Edit</h2>
<p>Double-click a row to edit the <i>Message</i> text. </p>
<img src="images/confirmationlistMsgEdit.png" width="405" height="144"/><p>Enter the subject or message text. Insert variables as needed. </p>
<p class="MarginBottomZero">Fields in brackets can be used to pull information from the database.  </p>
<ul class="MarginBottomGap">
<li>[NameF]: Patient first name.</li>
<li>[NameFL]: Patient first and last name.</li>
<li>[NamePreferredOrFirst]: Patient preferred name, if applicable, otherwise uses first name.</li>
<li>[date]: Appointment date.</li>
<li>[time]: Appointment time.</li>
<li>[FamilyApptList]: List first name, and appointment date and time of all family members. Required when using <i>Group Families</i>. </li>
<li>[ClinicName]: <a href="cliniceditwindow.html">Clinic</a> name.</li>
<li>[ClinicPhone]: Clinic phone number.</li>
<div class="Note">Note: Clinic information (i.e., ClinicPhone, ClinicName) is determined using the following logic: <ul>
<li>If a clinic is assigned to the appointment, the information for the assigned clinic is used.</li>
<li>If there is no clinic assigned to the appointment, the information for the patient's clinic (see <a href="patientedit.html">Edit Patient Information</a>) is used.</li>
<li>If there is no clinic assigned to the appointment or patient, the <a href="practice.html">Practice</a> information is used.</li>
</ul>
</div>
<li>[OfficePhone]: Office phone number. </li>
<li>[OfficeName]: Office name.</li>
<li>[PracticeName]: Practice name.</li>
<li>[PracticePhone]: Practice phone.</li>
<li>[ProvName]: Appointment provider's name.</li>
<li>[ProvAbbr]: Provider abbreviation.</li>
<li>[EmailDisclaimer]: Opt out email disclaimer.</li>
</ul>
<p><p class="MarginBottomZero">For text messages: </p>
<ul class="MarginBottomGap">
<li> A message segment is 160 characters. Each additional message segment results in additional charges. See <a href="textmsgfaq.html">Integrated Texting Q and A</a> for details.</li>
<li>A carriage return adds two characters.</li>
<li>The following characters are allowed. If other characters are used the message will fail. <p class="codeblock">a-z, A-Z, 0-9, . , : ; ! ? ( ) ~ = + - _ \ / @ $ # &amp; %</p></li>
</ul>
</p>
</div>
</div>
</body>
</html>```
