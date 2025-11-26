# File: ./www.opendental.com/manual/hl7labcorp.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - LabCorp HL7</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('hl7labcorp','hl7','hl7genericmsg','+menusetupAdvanced','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/hl7labcorp.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/hl7labcorp.html" >v24.2</option><option value="https://www.opendental.com/manual241/hl7labcorp.html" >v24.1</option><option value="https://www.opendental.com/manual233/hl7labcorp.html" >v23.3</option><option value="https://www.opendental.com/manual232/hl7labcorp.html" >v23.2</option><option value="https://www.opendental.com/manual231/hl7labcorp.html" >v23.1</option><option value="https://www.opendental.com/manual224/hl7labcorp.html" >v22.4</option><option value="https://www.opendental.com/manual223/hl7labcorp.html" >v22.3</option><option value="https://www.opendental.com/manual222/hl7labcorp.html" >v22.2</option><option value="https://www.opendental.com/manual221/hl7labcorp.html" >v22.1</option><option value="https://www.opendental.com/manual214/hl7labcorp.html" >v21.4</option><option value="https://www.opendental.com/manual213/hl7labcorp.html" >v21.3</option><option value="https://www.opendental.com/manual212/hl7labcorp.html" >v21.2</option><option value="https://www.opendental.com/manual211/hl7labcorp.html" >v21.1</option><option value="https://www.opendental.com/manual205/hl7labcorp.html" >v20.5</option><option value="https://www.opendental.com/manual204/hl7labcorp.html" >v20.4</option><option value="https://www.opendental.com/manual203/hl7labcorp.html" >v20.3</option><option value="https://www.opendental.com/manual202/hl7labcorp.html" >v20.2</option><option value="https://www.opendental.com/manual201/hl7labcorp.html" >v20.1</option><option value="https://www.opendental.com/manual194/hl7labcorp.html" >v19.4</option><option value="https://www.opendental.com/manual193/hl7labcorp.html" >v19.3</option><option value="https://www.opendental.com/manual192/hl7labcorp.html" >v19.2</option><option value="https://www.opendental.com/manual191/hl7labcorp.html" >v19.1</option><option value="https://www.opendental.com/manual184/hl7labcorp.html" >v18.4</option><option value="https://www.opendental.com/manual183/hl7labcorp.html" >v18.3</option><option value="https://www.opendental.com/manual182/hl7labcorp.html" >v18.2</option><option value="https://www.opendental.com/manual181/hl7labcorp.html" >v18.1</option><option value="https://www.opendental.com/manual174/hl7labcorp.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>LabCorp HL7</p></div>
<div class="GeneralPageContent">
<p><a href="hl7.html">HL7</a> is the name of the file format that Open Dental uses to receive data from Laboratory Corporation of America (LabCorp).</p>
<p>Open Dental uses HL7 messages to receive lab results and embedded PDFs from LabCorp. We connect to a SFTP (Secure File Transfer Protocol) site maintained by LabCorp and retrieve the files (HL7 messaging text). A service (program without a user interface) called OpenDentalHL7 needs to be installed on the server. It will handle the interaction between the HL7 messages and Open Dental database.</p>
<h2>Updating Open Dental Versions</h2>
<p>We recommend contacting Open Dental Support for assistance with an update.</p>
<h2>Setup Steps</h2>
<ol>
<li>Make sure the client Open Dental program is installed on the server the same as it would be on any other workstation.</li>
<li>Enable and set up the <a href="hl7labcorpmsg.html">LabCorp HL7 Definition</a>.</li>
<li>Connect to the Database: The information for connecting to the database is in the FreeDentalConfig.xml file in the application folder. This is the same file that the main Open Dental program uses to connect to the database. The information in the file must be accurate before starting the OpenDentalHL7 service. One way to ensure the accuracy is to start the Open Dental client program:  <ol>
<li>On the <a href="choosedatabase.html">Choose Database</a> window, set the database connection information. Only simple direct database connections are supported. Uncheck <b>Do not show this window on startup</b> so this window will show the next time a users launches Open Dental from the workstation, then close the window. If Open Dental is run as an administrator (right-click, <i>Run as Administrator</i> when launching Open Dental), connection information will auto-save to the FreeDentalConfig.xml file.</li>
<li>Verify that the information saved correctly by re-launching Open Dental. If the information is correct, users can be sure that OpenDentalHL7 will connect to the correct database when the service is started.</li>
</ol>
</li>
<li>Create a service (OpenDentalHL7 service) to receive HL7 messages in the Open Dental <a href="servicemanager.html">Service Manager</a>. If there are multiple database for multiple customers hosted on one server, then multiple HL7 services, each with unique names, must be setup. Then, each database must be set up to match with a differently named HL7 service. If already using HL7, users may only need to restart the OpenDentalHL7 service. <p class="MarginBottomZero">Errors: If the service does not start as expected:  </p>
<ul class="MarginBottomGap">
<li>Verify that LabCorp message definition settings are correct.</li>
<li>The service will not start if the version is not exactly the same as the version of the main Open Dental program.</li>
<li>If it still won't start, use the Computer Management tool: In the Start Menu navigate to Computer, right-click, Manage. Expand System Tools, Event Viewer, Windows Logs. Click on Application. The error and information entries will help determine the reason why the OpenDentalHL7 will not start.</li>
</ul>
</li>
</ol>
<img src="images/computermanagement.gif" width="385" height="459"/><h2>Troubleshooting</h2>
<p>Simple Troubleshooting: If the messages are not being passed to OD and processed as expected, follow the steps below.</p>
<ol>
<li>Stop the OpenDentalHL7 service.</li>
<li>Edit the FreeDentalConfig.xml file by adding a line for <b>&lt;HL7verbose&gt;True&lt;/HL7verbose&gt;</b>. Example: <br/><img src="images/hl7CodeBlock.gif" width="377" height="191" class="ImageInParagraph"/></li>
<li>Start the service, then monitor the error log.</li>
<li>After troubleshooting, remove the &lt;HL7verbose&gt;True&lt;/HL7verbose&gt; line from the xml file. The line will usually be removed automatically when a user clicks <b>OK</b> from the Choose Database window.</li>
</ol>
</div>
</div>
</body>
</html>```
