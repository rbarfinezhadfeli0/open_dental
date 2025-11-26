# File: ./www.opendental.com/manual232/textintegratedusage.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Texting</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('textintegratedusage','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/textintegratedusage.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/textintegratedusage.html" >v24.2</option><option value="https://www.opendental.com/manual241/textintegratedusage.html" >v24.1</option><option value="https://www.opendental.com/manual233/textintegratedusage.html" >v23.3</option><option value="https://www.opendental.com/manual232/textintegratedusage.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/textintegratedusage.html" >v23.1</option><option value="https://www.opendental.com/manual224/textintegratedusage.html" >v22.4</option><option value="https://www.opendental.com/manual223/textintegratedusage.html" >v22.3</option><option value="https://www.opendental.com/manual222/textintegratedusage.html" >v22.2</option><option value="https://www.opendental.com/manual221/textintegratedusage.html" >v22.1</option><option value="https://www.opendental.com/manual214/textintegratedusage.html" >v21.4</option><option value="https://www.opendental.com/manual213/textintegratedusage.html" >v21.3</option><option value="https://www.opendental.com/manual212/textintegratedusage.html" >v21.2</option><option value="https://www.opendental.com/manual211/textintegratedusage.html" >v21.1</option><option value="https://www.opendental.com/manual205/textintegratedusage.html" >v20.5</option><option value="https://www.opendental.com/manual204/textintegratedusage.html" >v20.4</option><option value="https://www.opendental.com/manual203/textintegratedusage.html" >v20.3</option><option value="https://www.opendental.com/manual202/textintegratedusage.html" >v20.2</option><option value="https://www.opendental.com/manual201/textintegratedusage.html" >v20.1</option><option value="https://www.opendental.com/manual194/textintegratedusage.html" >v19.4</option><option value="https://www.opendental.com/manual193/textintegratedusage.html" >v19.3</option><option value="https://www.opendental.com/manual192/textintegratedusage.html" >v19.2</option><option value="https://www.opendental.com/manual191/textintegratedusage.html" >v19.1</option><option value="https://www.opendental.com/manual184/textintegratedusage.html" >v18.4</option><option value="https://www.opendental.com/manual183/textintegratedusage.html" >v18.3</option><option value="https://www.opendental.com/manual182/textintegratedusage.html" >v18.2</option><option value="https://www.opendental.com/manual181/textintegratedusage.html" >v18.1</option><option value="https://www.opendental.com/manual174/textintegratedusage.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Texting</p></div>
<div class="GeneralPageContent">
<p>View a summary of each location's text message history.</p>
<p>In <a href="eservicessetup.html">eServices Setup</a>, click <b>Texting Services</b>.</p>
<img src="images/eServicesTexting.gif" width="915" height="443"/><p class="MarginBottomZero">Also see:  </p>
<ul class="MarginBottomGap">
<li><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> Webinar: <a href="https://youtu.be/tk_1lSk1jIo">eServices: Integrated Texting</a></li>
<li><a href="textmessages.html">Text Message</a></li>
</ul>
<p><div class="Note">Note: The <a href="econnector.html">eConnector</a> must be running at all times to track monthly limits and overages. If it is not running, text messages can be sent, but tracking information will be inaccurate and customer replies will not be recorded.</div>
</p>
<p class="MarginBottomZero">By default, usage information for the current month shows. Use the arrows or calendar below the grid to change the month. </p>
<ul class="MarginBottomGap">
<li>Click the left or right arrows to move forward/back one month.</li>
<li>Click the calendar dropdown to select a month using the calendar.</li>
<li>Click <b>This Month</b> to quickly switch to the current month.</li>
</ul>
<p class="MarginBottomZero">Column definitions: </p>
<ul class="MarginBottomGap">
<li>Default: The default texting clinic is marked with an X. See Set the Default Texting Clinic below.</li>
<li>Location: The name of the clinic/practice.</li>
<li>Subscribed: Whether or not the location is signed up for integrated texting.</li>
<li>Primary Phone Number: The location's texting phone number. The number is based only on the office's country, so obtaining a number with your area code is not guaranteed. It is not possible to select a phone number from a list or alter this number.</li>
<li>Country Code: Where clinic/practice is located. This determines per message fee.</li>
<li>Limit: The total monthly limit, in USD, for all locations.</li>
<li>Sent for Month: The total number of outgoing text messages sent during the currently selected month.</li>
<li>Sent Charges: The total amount of charges for outgoing texts for the currently selected month.</li>
<li>Received for Month: The total number of incoming text messages received during the currently selected month.</li>
<li>Received Charges: The total amount of charges for incoming texts for the currently selected month.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>Open Dental HQ will attempt to send outstanding message receipts for outbound messages for up to 60 days. If after 60 days, the receipts could not be delivered, they are deleted. Receipts includes the charge associated with the message and the message's deliver status.</li>
<li>The eConnector must be running to receive receipts. If receipts cannot be delivered, the Sent Charges column may not be up-to-date. Charges displayed here may not match the amount billed on your Monthly Support statement. </li>
</ul>
</div>
</p>
<p class="MarginBottomZero">OptIn Preferences: </p>
<ul class="MarginBottomGap">
<li><b>Clinics</b>: Select the clinic which settings you want to view/change.</li>
<li><b>OptIn Office Title</b>: Enter the practice name to use when sending an OptIn text message. If left blank, the Practice Title set in <a href="practice.html">Practice Setup</a> is used. If both are blank, "Your Dentist" is used.</li>
<li><b>Prompt for OptIn</b>: Determines whether an OptIn/OptOut statement appears for the office.  <ul>
<li>Checked: When adding or updating wireless phone number for a patient whose <i>Text OK</i> status is set to "Yes" in <a href="patientedit.html">Edit Patient Information</a> or when changing <i>Text OK</i> status to "Yes", a prompt will appear to text the patient for approval. </li>
<li>Unchecked: Uncheck this box to disable the prompts. When disabled, each patient will be treated as a "Yes" when the appointment is set complete. The user must remember to obtain consent from the patient. </li>
</ul>
</li>
<li><b>Save</b>: Click to save Appt Text settings. If settings are unchanged, red text will display as a warning.</li>
</ul>
<h2>Set the Default Texting Clinic</h2>
<p class="MarginBottomZero">When using clinics, only patients assigned to a default clinic will receive text messages, or there must be a default texting clinic. To set a default texting clinic: </p>
<ol class="MarginBottomGap">
<li>Select the clinic.</li>
<li>Click <b>Set Default</b>. X will show in the Default column.</li>
</ol>
<p>This clinic will be used when patients are not assigned to default clinic.</p>
<p>To remove a default, click <b>Clear Default</b>, or select a different clinic default.</p>
</div>
</div>
</body>
</html>```
