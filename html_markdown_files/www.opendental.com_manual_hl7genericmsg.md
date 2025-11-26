# File: ./www.opendental.com/manual/hl7genericmsg.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Generic HL7 Message Structure</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('hl7genericmsg','+menusetupAdvanced','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/hl7genericmsg.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/hl7genericmsg.html" >v24.2</option><option value="https://www.opendental.com/manual241/hl7genericmsg.html" >v24.1</option><option value="https://www.opendental.com/manual233/hl7genericmsg.html" >v23.3</option><option value="https://www.opendental.com/manual232/hl7genericmsg.html" >v23.2</option><option value="https://www.opendental.com/manual231/hl7genericmsg.html" >v23.1</option><option value="https://www.opendental.com/manual224/hl7genericmsg.html" >v22.4</option><option value="https://www.opendental.com/manual223/hl7genericmsg.html" >v22.3</option><option value="https://www.opendental.com/manual222/hl7genericmsg.html" >v22.2</option><option value="https://www.opendental.com/manual221/hl7genericmsg.html" >v22.1</option><option value="https://www.opendental.com/manual214/hl7genericmsg.html" >v21.4</option><option value="https://www.opendental.com/manual213/hl7genericmsg.html" >v21.3</option><option value="https://www.opendental.com/manual212/hl7genericmsg.html" >v21.2</option><option value="https://www.opendental.com/manual211/hl7genericmsg.html" >v21.1</option><option value="https://www.opendental.com/manual205/hl7genericmsg.html" >v20.5</option><option value="https://www.opendental.com/manual204/hl7genericmsg.html" >v20.4</option><option value="https://www.opendental.com/manual203/hl7genericmsg.html" >v20.3</option><option value="https://www.opendental.com/manual202/hl7genericmsg.html" >v20.2</option><option value="https://www.opendental.com/manual201/hl7genericmsg.html" >v20.1</option><option value="https://www.opendental.com/manual194/hl7genericmsg.html" >v19.4</option><option value="https://www.opendental.com/manual193/hl7genericmsg.html" >v19.3</option><option value="https://www.opendental.com/manual192/hl7genericmsg.html" >v19.2</option><option value="https://www.opendental.com/manual191/hl7genericmsg.html" >v19.1</option><option value="https://www.opendental.com/manual184/hl7genericmsg.html" >v18.4</option><option value="https://www.opendental.com/manual183/hl7genericmsg.html" >v18.3</option><option value="https://www.opendental.com/manual182/hl7genericmsg.html" >v18.2</option><option value="https://www.opendental.com/manual181/hl7genericmsg.html" >v18.1</option><option value="https://www.opendental.com/manual174/hl7genericmsg.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Generic HL7 Message Structure</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Advanced Setup, <b>HL7</b>.</p>
<img src="images/hl7Defs.gif" width="915" height="255"/><p><a href="hl7.html">Generic HL7</a> message structure can be customized to meet the bridging requirements of other software.</p>
<p><div class="Note">Note: The HL7 menu item does not appear for Open Dental Cloud users.</div>
</p>
<p>There are several internal definitions. Some information can be edited in an internal definition, but messages and segments cannot.</p>
<ul>
<li><b>eCW Full, Standalone, Tight</b>: See <a href="hl7ecwmsg.html">eCW HL7 Message Structure</a>.</li>
<li><b>Centricity</b>: A message definition specifically for Centricity.</li>
<li><b>HL7 version 2.6</b>: A generic message definition that follows standard HL7 message structure.</li>
<li><b>MedLab HL7 v2.3</b>: See <a href="hl7labcorpmsg.html">LabCorp HL7 Definition</a> v2.3.</li>
</ul>
<br/><p class="MarginBottomZero">Custom definitions allow editing of all information, including messages and segments. To create a custom definition users have two options: </p>
<ul class="MarginBottomGap">
<li>Select the internal HL7 version 2.6 definition, then click <b>Copy</b>.</li>
<li>Select an existing custom definition, then click <b>Duplicate</b>.</li>
</ul>
<p><a href="http://opendental.com/resources/HL7MessagingInterfaceSpecs.pdf">Open Dental HL7 Interface Specifications</a> (PDF)</p>
<h2>Edit a Message Definition</h2>
<p>Double-click on the message definition.</p>
<img src="images/hl7DefEditGeneric.gif" width="833" height="711"/><p><b>Enabled</b>: Enable the definition and activate editable fields.</p>
<p><b>Mode Tx</b>: Select a transfer mode (Mode Tx) of File, TCP/IP, or Sftp.</p>
<p><b>Delimiters</b>: Select the separator characters.</p>
<p><b>Show Appts Module</b>: Give access to the Appointments module.</p>
<p><b>Show Account Module</b>: Give access to the Account module.</p>
<p><b>Send Quad as Tooth Num</b>: Usually quadrant information shows as surface information in a claim. However, some insurance carriers require that quadrant information show as tooth number and may reject claims if it doesn't. Check this box to send quadrant information as tooth number.</p>
<p><b>Warn if Procs not attached to Appt</b>: Show a message prior to sending procedures via HL7 if they are not attached to an appointment.</p>
<p><b>HL7 Communication Options</b>: Set up the inbound and outbound folder paths or ports. The options vary based on the ModeTx. See TCP/IP mode below for steps.</p>
<p><b>OpenDental HL7 server and service name</b>: See <a href="hl7servicemanager.html">HL7 Service</a> for information about installing and naming the OpenDentalHL7 service.</p>
<p><b>Show Demographics</b>: Typically patient demographic information is not entered in Open Dental because it may be overwritten every time an inbound HL7 message for the patient is processed. If users want to be able to change and add demographic information in Open Dental, select Change and Add Pts. Users will be prompted to enter a password which is hl7.</p>
<p><b>Messages/Segments</b>: Can only be edited in custom definitions. See Editing Messages/Segments below.</p>
<div class="Note">Note: If using TCP/IP mode, we recommend using version 14.1.8 or greater. The incoming and outgoing ports need not match, but the ports will have to be available for use by the OpenDentalHL7 service.</div>
<br/><br/><ol>
<li>For Mode TX, select TcpIp.</li>
<li>Enter an Incoming Port.</li>
<li>Enter an Outgoing IP: Port (outgoing IP address followed by a colon and a port number). It should match the IP address of the computer Open Dental will send HL7 messages to.</li>
</ol>
<br/><h2>Editing Messages/Segments</h2>
<p>For custom definitions, the incoming and outgoing message structure can be modified. To add a new message, click <b>Add</b>. To modify an existing message, double-click the message or one of its segments.</p>
<img src="images/hl7DefMessageEditGeneric.gif" width="735" height="301"/><p><b>Message Type</b>: For a description of all message types, see <a href="hl7msgs.html">HL7 Message Types</a>.</p>
<p><b>Event Type</b>: Incoming/Outgoing:</p>
<p><b>Item Order</b>: Determines the order the message will show in the Message / Segment grid.</p>
<p><b>Segments</b>: Double-click on a segment to modify, or click <b>Add</b> to create a new segment.</p>
<img src="images/hl7DefSegmentEditGeneric.gif" width="664" height="472"/><p><b>Segment Name</b>: Can be selected from a list of available segment names supported by Open Dental.</p>
<p><b>Item Order</b>: For outgoing messages, affects the message structure. For incoming messages, only determines the order the segment shows in the Message Edit window.</p>
<p><b>Can Repeat:</b></p>
<p><b>Is Optional</b>:</p>
<p><b>Fields</b>: Double-click a field to modify or click <b>Add</b> to create a new field.</p>
<img src="images/hl7DefFieldEditGeneric.gif" width="415" height="437"/><p><b>Data Type</b>: Linked to fields internally defined by Open Dental, so users will only have the option to select a data type for fixed text fields.</p>
<p><b>Table ID</b>: For informational purposes only and is not used by Open Dental or inserted into outgoing messages.</p>
<p><b>Item Order</b>:</p>
<p><b>Fixed Text</b>: Fixed text fields are ignored for incoming messages, and simply inserted in the proper item order for outgoing messages.</p>
<p><b>Field Name:</b> Lists only fields that Open Dental will process for incoming messages or fill in with data from the database when constructing outgoing messages.</p>
<h2>Message History</h2>
<p>To view a log history of HL7 messages, click <b>History</b> on the HL7 Defs window.</p>
<img src="images/hl7history.gif" width="915" height="208"/><p>Filtering options:</p>
<ul>
<li><b>Start/End Date</b>: View log entries for a specific date range. Click <b>Refresh</b> to update the list.</li>
<li><b>Patient</b>: Click <b>Find</b> to open Select Patient and view messages associated with a specific patient.. Click <b>All</b> to include messages for all patients.</li>
<li><b>HL7Status</b>: View log entries for messages with a specific status. Click <b>Refresh</b> to update the list.</li>
</ul>
</div>
</div>
</body>
</html>```
