# File: ./www.opendental.com/manual232/ecwbridgesetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eCW Installlation</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ecwbridgesetup','bridgeeclinicalworks','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/ecwbridgesetup.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/ecwbridgesetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/ecwbridgesetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/ecwbridgesetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/ecwbridgesetup.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/ecwbridgesetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/ecwbridgesetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/ecwbridgesetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/ecwbridgesetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/ecwbridgesetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/ecwbridgesetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/ecwbridgesetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/ecwbridgesetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/ecwbridgesetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/ecwbridgesetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/ecwbridgesetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/ecwbridgesetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/ecwbridgesetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/ecwbridgesetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/ecwbridgesetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/ecwbridgesetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/ecwbridgesetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/ecwbridgesetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/ecwbridgesetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/ecwbridgesetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/ecwbridgesetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/ecwbridgesetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/ecwbridgesetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eCW Installlation</p></div>
<div class="GeneralPageContent">
<p>Typically an Open Dental support technician installs Open Dental and sets up the <a href="bridgeeclinicalworks.html">eClinicalWorks</a> bridge for practices, following the steps below.</p>
<div class="Note">Note: If a user turns on the eCW bridge, the existing passwords for all users stop working. Before turning on the bridge, make sure the admin password in Open Dental is blank. After the bridge is turned on, then set the passwords.</div>
<br/><br/><h2>Installation Path</h2>
<p class="MarginBottomZero">If using Tight or Full integration, Open Dental must be installed to the same path on all computers in order for the bridge from eCW to work.  </p>
<ul class="MarginBottomGap">
<li>Current recommendation: <b>C:\Open Dental\</b></li>
<li>Also acceptable: <b>C:\Program Files (x86)\Open Dental\.</b><p>This path has to be typed in manually when installing to 32-bit computers. On those computers, the x86 path will not exist and is created during installation.</p>
</li>
</ul>
<p>The path <b>C:\Program Files\Open Dental\</b> is not a good choice. 64-bit versions of Windows will not allow this path to be used for a 32-bit program like Open Dental.</p>
<p>Also see <a href="ecwinstall.html">eCW Install Workstation</a>.</p>
<p>Assistance is also required from eCW installers to set this bridge path in eCW.</p>
<h2>Bridge Setup</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Program Links, then double click on eClinicalWorks. <br/><img src="images/bridgeEClinicalWorks.png" width="652" height="655" class="ImageInParagraph"/></li>
<li>Check the Enabled box to turn the bridge on.</li>
<li>Select the <a href="ecwbridgingmodes.html">eCW Bridge Modes</a> (Tight Integration, Standalone, Full).</li>
<li>Set the path(s) to the HL7 Sync Folders. The paths aree relative to the server computer, not the current workstation.</li>
<li>See <a href="hl7ecw.html">eClinicalWorks HL7</a> and follow the instructions to install the OpenDentalHL7 service on the server.</li>
</ol>
<p class="MarginBottomZero">Optional Setup </p>
<ul class="MarginBottomGap">
<li>Patient Fee Schedules (Tight mode only). In Tight Integration, users cannot edit patient fee schedules in Open Dental. Instead they are imported from incoming HL7 messages. To manually select fee schedules in Open Dental, check this box. This unhides the Family Module and shows a Fee Schedule picker. Fee Schedule automation still works, but the user is allowed to change the fee schedule after it is initially set.</li>
<li>Fee Schedule Changes (Full mode only). In Full mode, changes made to the fee schedules on the <a href="patientedit.html">Edit Patient Information</a> are not normally saved and the OK button is disabled. Typically demographic information is not saved in Open Dental because it is overwritten every time an HL7 message for the patient is processed. There is a workaround to enable the save of Fee Schedule changes only. Any other changes made to the Edit Patient Information window are overwritten.  <ol>
<li>In the main menu, click Setup, HL7. See <a href="hl7ecwmsg.html">eCW HL7 Message Structure</a>.</li>
<li>In the Internal grid, select eCW Full Mode, then click Copy to copy the definition to the Custom grid.</li>
<li>Double click on the custom definition to edit.</li>
<li>Enter the values exactly as entered in the eClinicalWorks Setup window: <p>In to eClinicalWorks = Outgoing Folder</p>
<p>Out from eClinicalWorks = Incoming Folder</p>
<p>OpenDental HL7 Server = OpenDental HL7 Server</p>
<p>HL7 Service Name = HL7 Service Name</p>
</li>
<li>Under Show Demographics (Address, etc), select Change. Note that warning that changes may be overwritten.</li>
<li>Click OK, then restart the OpenDentalHL7 service so the new definition is used for processing/sending HL7 messages. The program link remains enabled and the setting for manual or import from HL7 message is still in effect.</li>
</ol>
</li>
<li><b>Send Quadrant as Tooth Number</b>: Usually quadrant information shows as surface information in a claim. However, some insurance carriers require that quadrant information show as tooth number and may reject claims if it doesn't. Check this box to send quadrant information as tooth number. If an HL7 generic definition is enabled, this box does not show. Instead set the default for quadrant information on the HL7 Def Edit window.</li>
<li><b>Hide Chart Rx Buttons</b>: If unchecked, the Rx and eRx buttons show in the Chart Module toolbar. If checked, these buttons are hidden.</li>
<li><b>Require Signatures for Procedure Notes</b>: If checked, all procedure notes must be signed upon Finish and Send.</li>
<li><b>Don't Allow Incomplete Procedure Notes</b>: If checked, all procedure notes must be completed upon Finish and Send. If a note contains quotes "", then information must be filled in between the quotes, or the note is considered Incomplete.</li>
</ul>
<h2>Standalone Mode</h2>
<p class="MarginBottomZero">If using Standalone mode, follow these instructions to set up the bridge. </p>
<ol class="MarginBottomGap">
<li>Enable the eClinicalWorks bridge, selecting Standalone.</li>
<li>Follow the instructions for setting up the Open Dental eCW HL7 application.</li>
<li>Work with eClinicalWorks support to have eCW start sending HL7 messages to the folder. Only demographic messages are sent (ADT). If the patient does not seem to exist in Open Dental, or the demographic information for a patient is different, then trigger an ADT message from eCW, probably by resaving the patient information in eCW. Remember that the ChartNumber in Open Dental contains the PatientID from eCW.</li>
</ol>
</div>
</div>
</body>
</html>```
