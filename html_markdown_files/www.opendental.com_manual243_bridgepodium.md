# File: ./www.opendental.com/manual243/bridgepodium.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Podium Bridge</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('bridgepodium','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/bridgepodium.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/bridgepodium.html" >v24.2</option><option value="https://www.opendental.com/manual241/bridgepodium.html" >v24.1</option><option value="https://www.opendental.com/manual233/bridgepodium.html" >v23.3</option><option value="https://www.opendental.com/manual232/bridgepodium.html" >v23.2</option><option value="https://www.opendental.com/manual231/bridgepodium.html" >v23.1</option><option value="https://www.opendental.com/manual224/bridgepodium.html" >v22.4</option><option value="https://www.opendental.com/manual223/bridgepodium.html" >v22.3</option><option value="https://www.opendental.com/manual222/bridgepodium.html" >v22.2</option><option value="https://www.opendental.com/manual221/bridgepodium.html" >v22.1</option><option value="https://www.opendental.com/manual214/bridgepodium.html" >v21.4</option><option value="https://www.opendental.com/manual213/bridgepodium.html" >v21.3</option><option value="https://www.opendental.com/manual212/bridgepodium.html" >v21.2</option><option value="https://www.opendental.com/manual211/bridgepodium.html" >v21.1</option><option value="https://www.opendental.com/manual205/bridgepodium.html" >v20.5</option><option value="https://www.opendental.com/manual204/bridgepodium.html" >v20.4</option><option value="https://www.opendental.com/manual203/bridgepodium.html" >v20.3</option><option value="https://www.opendental.com/manual202/bridgepodium.html" >v20.2</option><option value="https://www.opendental.com/manual201/bridgepodium.html" >v20.1</option><option value="https://www.opendental.com/manual194/bridgepodium.html" >v19.4</option><option value="https://www.opendental.com/manual193/bridgepodium.html" >v19.3</option><option value="https://www.opendental.com/manual192/bridgepodium.html" >v19.2</option><option value="https://www.opendental.com/manual191/bridgepodium.html" >v19.1</option><option value="https://www.opendental.com/manual184/bridgepodium.html" >v18.4</option><option value="https://www.opendental.com/manual183/bridgepodium.html" >v18.3</option><option value="https://www.opendental.com/manual182/bridgepodium.html" >v18.2</option><option value="https://www.opendental.com/manual181/bridgepodium.html" >v18.1</option><option value="https://www.opendental.com/manual174/bridgepodium.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Podium Bridge</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>. Double-click on <b>Podium</b>.</p>
<img src="images/bridgePodium.png" width="633" height="426"/><p>Podium allows users to automatically send review invitations to new and recurring patients. Podium uses the appointment schedule to send review invitations by text message to existing patients at selected time increments. </p>
<p>To sign up for Podium and begin using their services, visit <a href="../resources/redirects/redirectpodiumod.html" target="_blank">podium.com</a>. Users must be signed up for Podium to use the bridge in Open Dental. Once set up, click the Podium button in <a href="reportsstandard.html">Standard Reports</a> to launch your account.</p>
<p><div class="Note">Note: Exceptions thrown by Podium can be found in <b>"PathToOpenDental"\Logger\Podium</b>.</div>
</p>
<p><b>Enabled</b>: Check to enable the bridge.</p>
<p><b>Hide button in Standard Reports</b>: Check if the bridge is unused. This hides the Podium button from the Standard Reports window.</p>
<p><b>Computer Name or IP (required)</b>: Enter the computer name used to send invitations. </p>
<p><b>API Token (required)</b>: Enter the API Token supplied by Podium.</p>
<p><b>Location ID (required)</b>: Enter the Location ID supplied by Podium. </p>
<p class="MarginBottomZero"><b>Use service to send invitations</b>: Determine the method used to send invitations. </p>
<ul class="MarginBottomGap">
<li>Checked: Use the <a href="opendentalservice.html">Open Dental Service</a> to send invitations. When checked, only the server must remain on.</li>
<li>Unchecked: Use a specific computer to send invitations. The computer that sends Podium review invitations must remain on and have Open Dental opened at all times. </li>
</ul>
<p class="MarginBottomZero"><b>Show commlogs in the chart and account</b>: Determine if Podium commlogs should display. </p>
<ul class="MarginBottomGap">
<li>Checked: Show Podium commlogs in the Chart Module and Account Module.</li>
<li>Unchecked: Hide Podium commlogs.</li>
</ul>
<p><b>Clinic</b>: Select the clinic associated with the invite. When using clinics, the Location ID is based off the clinic associated to the appointment.</p>
<p class="MarginBottomZero"><b>Existing Patient / New Patient Trigger</b>: Determine which action triggers an invitation. </p>
<ul class="MarginBottomGap">
<li><b>Set complete</b>: Send an invitation after an appointment is set complete.</li>
<li><b>Time Arrived</b>: Send an invitation after a patient is marked arrived.</li>
<li><b>Time Dismissed</b>: Send an invitation after a patient is marked dismissed.</li>
</ul>
<p><b>Trigger Rules</b>: Enter the amount of time after the selected trigger above the invitation should be sent. </p>
<p><div class="Note">Note: If a patient declines review invitations be sent via text message, set their <i>Text OK</i> status in the <a href="patientedit.html">Edit Patient Information</a> to <i>No</i>. Review invitations are still sent via email.</div>
</p>
</div>
</div>
</body>
</html>```
