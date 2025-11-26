# File: ./www.opendental.com/manual232/hl7ecw.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eClinicalWorks HL7</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('hl7ecw','hl7genericmsg','+menusetupAdvanced','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/hl7ecw.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/hl7ecw.html" >v24.2</option><option value="https://www.opendental.com/manual241/hl7ecw.html" >v24.1</option><option value="https://www.opendental.com/manual233/hl7ecw.html" >v23.3</option><option value="https://www.opendental.com/manual232/hl7ecw.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/hl7ecw.html" >v23.1</option><option value="https://www.opendental.com/manual224/hl7ecw.html" >v22.4</option><option value="https://www.opendental.com/manual223/hl7ecw.html" >v22.3</option><option value="https://www.opendental.com/manual222/hl7ecw.html" >v22.2</option><option value="https://www.opendental.com/manual221/hl7ecw.html" >v22.1</option><option value="https://www.opendental.com/manual214/hl7ecw.html" >v21.4</option><option value="https://www.opendental.com/manual213/hl7ecw.html" >v21.3</option><option value="https://www.opendental.com/manual212/hl7ecw.html" >v21.2</option><option value="https://www.opendental.com/manual211/hl7ecw.html" >v21.1</option><option value="https://www.opendental.com/manual205/hl7ecw.html" >v20.5</option><option value="https://www.opendental.com/manual204/hl7ecw.html" >v20.4</option><option value="https://www.opendental.com/manual203/hl7ecw.html" >v20.3</option><option value="https://www.opendental.com/manual202/hl7ecw.html" >v20.2</option><option value="https://www.opendental.com/manual201/hl7ecw.html" >v20.1</option><option value="https://www.opendental.com/manual194/hl7ecw.html" >v19.4</option><option value="https://www.opendental.com/manual193/hl7ecw.html" >v19.3</option><option value="https://www.opendental.com/manual192/hl7ecw.html" >v19.2</option><option value="https://www.opendental.com/manual191/hl7ecw.html" >v19.1</option><option value="https://www.opendental.com/manual184/hl7ecw.html" >v18.4</option><option value="https://www.opendental.com/manual183/hl7ecw.html" >v18.3</option><option value="https://www.opendental.com/manual182/hl7ecw.html" >v18.2</option><option value="https://www.opendental.com/manual181/hl7ecw.html" >v18.1</option><option value="https://www.opendental.com/manual174/hl7ecw.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eClinicalWorks HL7</p></div>
<div class="GeneralPageContent">
<p>HL7 is the name of the file format Open Dental uses to synch data with <a href="bridgeeclinicalworks.html">eClinicalWorks</a> (eCW). <a href="hl7genericmsg.html">HL7 Messages</a> pass information between Open Dental and eCW.</p>
<ul>
<li>There are three pre-set <a href="hl7ecwmsg.html">eCW HL7 Message Structure</a> definitions that exactly match the HL7 message structure for each of the three bridge modes: Full, Standalone, and Tight.</li>
<li>The Open Dental server can exchange files with eClincialWorks using either two shared HL7 folders or via TCP/IP.</li>
<li>A service (program without a user interface) called OpenDentalHL7 needs to be installed on the server. It will handle the interaction between the HL7 messages and Open Dental database.</li>
</ul>
<br/><p>For generic HL7 setup, see <a href="hl7.html">Generic HL7</a> instead.</p>
<h2>Updating Open Dental Versions</h2>
<p>We recommend contacting Open Dental Support for assistance with an update.</p>
<h2>Setup Steps</h2>
<p>The setup steps below are usually completed by Open Dental support technicians.</p>
<ol>
<li>Make sure the client Open Dental program is installed on the server the same as it would be on any other workstation.</li>
<li>Setup eClinicalWorks (Setup, Program Links, eClinicalWorks).  <ol>
<li>Enable eCW.</li>
<li>Select the bridging mode.</li>
<li>Set up the HL7 Synch Folders (incoming and outgoing). Offices will most likely set up the folders from the server, so the paths will be relative to the machine the user is on. However, be aware the setup window is viewable from other computers, so from other computers the paths will be invalid.</li>
</ol>
</li>
<li>Connect to the Database: The information for connecting to the database is in the FreeDentalConfig.xml file in the application folder. This is the same file that the main Open Dental program uses to connect to the database. The information in the file must be accurate before starting the OpenDentalHL7 service. One way to ensure the accuracy is to start the Open Dental client program:  <ol>
<li>On the <a href="choosedatabase.html">Choose Database</a> window, set the database connection information. Only simple direct database connections are supported. Uncheck <b>Do not show this window on startup</b> so this window will show the next time a users launches Open Dental from the workstation, then close the window. If Open Dental is run as an administrator (right-click, <i>Run as Administrator</i> when launching Open Dental), connection information will auto-save to the FreeDentalConfig.xml file.</li>
<li>Verify that the information saved correctly by re-launching Open Dental. If the information is correct, users can be sure that OpenDentalHL7 will connect to the correct database when the service is started.</li>
</ol>
</li>
<li>Create a service to send and receive HL7 messages in the Open Dental <a href="servicemanager.html">Service Manager</a>. If there are multiple databases for multiple customers hosted on one server, then multiple HL7 services, each with a unique name, must be setup. Then, each database must be set up to match with a differently named HL7 service. <p class="MarginBottomZero">Errors: If the service does not start as expected: </p>
<ul>
<li>Verify that the database and HL7 folders are correct (steps 2 and 3).</li>
<li>The service will not start if the version is not exactly the same as the version of the main Open Dental program.</li>
<li>If it still won't start, use the Computer Management tool: My Computer, right-click, Manage. Expand System Tools, Event Viewer, Windows Logs. Click on Application. The error and information entries will help determine the reason why the OpenDentalHL7 will not start.</li>
</ul>
<p class="MarginBottomGap"><br/><img src="images/computermanagement.gif" width="385" height="459" class="ImageInParagraph"/></p>
</li>
</ol>
<h2>Troubleshooting</h2>
<p><b>Simple Troubleshooting</b>: If the messages are not being passed to Open Dental and processed as expected, follow the steps below.</p>
<ol>
<li>Stop the OpenDentalHL7 service.</li>
<li>Edit the FreeDentalConfig.xml file by adding a line for<b>&lt;HL7verbose&gt;True&lt;/HL7verbose&gt;.</b> Example: <img src="images/hl7CodeBlock.gif" width="377" height="191"/></li>
<li>Start the service.</li>
<li>Trigger eCW to create an outgoing message in one of two ways: <ul>
<li>Edit patient information.</li>
<li>Create a new appointment.</li>
</ul>
</li>
<li>Wait about 10 seconds for the message to be processed.</li>
<li>Look in the Windows Log as described above, refreshing as needed. Verify that the information was processed by Open Dental. Both kinds of messages should result in an insert or update to the patient table. If the trigger message was for a new appointment, the message should also result in an insert or update of the appointment table.</li>
<li>After troubleshooting, remove the <span class="codeblock">&lt;HL7verbose&gt;True&lt;/HL7verbose&gt;</span> line from the xml file. The line may be removed automatically when users click <b>OK</b> on the Choose Database window.</li>
</ol>
<br/><p><b>Complex Troubleshooting</b>: Perform Simple Troubleshooting steps first. If that does not solve the problem, follow the steps below.</p>
<div class="Note">Note: These steps do not apply if using TCP/IP. Instead use Windows logs or Message History.</div>
<br/><br/><ol>
<li>Turn off the OpenDentalHL7 service.</li>
<li>Locate the incoming and outgoing HL7 folder paths as set on the eClinicalWorks Setup window (or HL7 Def Edit window).</li>
<li>In Windows, open the outgoing folder.</li>
<li>Trigger eCW to create an outgoing message in one of two ways: <ul>
<li>Edit patient information.</li>
<li>Create a new appointment.</li>
</ul>
</li>
<li>Look for the message in the outgoing folder. You may need to wait up to 60 seconds for the message to appear. <ul>
<li>If it does not appear, then the HL7 service is not set up properly in eCW to create files.</li>
<li>If it does appear, make a copy of the message for later analysis.</li>
</ul>
</li>
<li>Start OpenDentalHL7. <ul>
<li>If the original message does not disappear, there is a problem with OpenDentalHL7. Look in the Windows Log for errors with the message processing.</li>
<li>If the message still does not seem to have been processed, it will need to be debugged. A copy of the message, and possibly the database itself, should be sent to Open Dental programmers for testing.</li>
</ul>
</li>
</ol>
<br/><p><b>AptNum doesn't exist in PV1 segment when saving a proposed treatment plan</b>: Open Dental sends an AptNum in the PV1 segment of the outbound DFT messages. This AptNum corresponds to the appointment number eCW sends us in the command line parameters. However, the appointment has to also exist in Open Dental or we won't send it back in the DFT message.</p>
<p class="MarginBottomZero">If you are saving a proposed treatment plan, that AptNum may not exist in the PV1 segment due to two situations.  </p>
<ol>
<li>You launched OD in a manner other than <i>View Dental Chart from an existing appointment in eCW</i> OR</li>
<li>The appointment in eCW doesn't exist in OD. This is probably due to an interface down situation that needs to be resolved.</li>
</ol>
<p class="MarginBottomGap">In either case, the DFT message with the saved treatment plan will be rejected by eCW, sent to an error spool or something, and the PDF will not be added to the patient's chart in eCW.</p>
<h2>HL7 Field Documentation</h2>
<p>As of version 11.0.31.</p>
<p><b>MSH - Message Header</b></p>
<p>Every incoming and outgoing message must have a MSH segment, which is usually the first segment. MSH.8 is required to be the message type field and is composed of two components. Component 1 is the message type (ADT, SIU, DFT, etc.) and component 2 is the event type with the designated component separator between them. A typical MSH.8 field would look like this: SIU^S12 or ADT^A04.</p>
<p><b>ADT - Demographics Message</b></p>
<p>PID.2 (eCW internal patient number) is used to determine patient. If using tight integration, this is stored in the PatNum field in OD. If using standalone integration, this is stored in the ChartNumber field in OD. If a match is not found, then a new patient is created in OD.</p>
<p>PID imports LName, FName, MiddleI, Birthdate, Gender, Race, Address, City, State, Zip, HmPhone, WkPhone, Position(marital), and SSN. If this is a new patient, PriProv is set to practice default.</p>
<p>PID.4 (eCW account number) is saved to the ChartNumber field when using tight integration, but not saved at all when using standalone integration.</p>
<p>PID.22 is parsed for the fee schedule, creating a new one if needed.</p>
<p>GT1 is processed to create a guarantor if needed. The processing is nearly identical as for the PID segment.</p>
<p><b>SIU - Scheduling Message</b></p>
<p>PID.2 (eCW internal patient number) is used as PatNum to determine patient. If match is not found, a new patient is created with that PatNum.</p>
<p>PID is processed to extract 16 various patient demographic fields.</p>
<p>PID.4 (eCW account number) is saved to the ChartNumber field when in tight integration mode.</p>
<p>PV1 If PV1 segment is missing, AIG is processed instead.</p>
<p>SCH.2 (eCW visit number) is used as AptNum to find or create an appointment. If a found appointment does not match PatNum, error message is shown.</p>
<p>SCH.7 stored in appointment.Note</p>
<p>SCH.11.3 is stored in appointment.AptDateTime</p>
<p>SCH.11.4 (stop time) is used to calculate appointment.Pattern, the length of the appointment.</p>
<p>If AIG segment is present, it is processed for appointment.ProvNum and patient.ProvNum. A provider is created if needed, based on the eCW alphanumeric provider id.</p>
<p>If AIG segment is missing, PV1 is processed instead.</p>
<p><b>DFT - Charge Specification</b></p>
<p>PID.2 (eCW account Number)</p>
<p>PID.3 (eCW internal patient number)</p>
<p>PID includes an additional 14 patient demographic fields</p>
<p>PV1 includes provider information</p>
<p>PV1.19 (eCW visit number) The AptNum that was originally passed in by eCW.</p>
<p>FT1 A series of segments for all the procedures.</p>
<p>ZX1.5 If this DFT is being used to send a treatment plan, then this is a pdf file, encoded as base64 string. Otherwise, blank.</p>
 Also see <a href="hl7tests.html">HL7 Unit Tests</a>. </div>
</div>
</body>
</html>```
