# File: ./www.opendental.com/manual243/hl7servicemanager.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - HL7 Service</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('hl7servicemanager','hl7','hl7genericmsg','+menusetupAdvanced','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/hl7servicemanager.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/hl7servicemanager.html" >v24.2</option><option value="https://www.opendental.com/manual241/hl7servicemanager.html" >v24.1</option><option value="https://www.opendental.com/manual233/hl7servicemanager.html" >v23.3</option><option value="https://www.opendental.com/manual232/hl7servicemanager.html" >v23.2</option><option value="https://www.opendental.com/manual231/hl7servicemanager.html" >v23.1</option><option value="https://www.opendental.com/manual224/hl7servicemanager.html" >v22.4</option><option value="https://www.opendental.com/manual223/hl7servicemanager.html" >v22.3</option><option value="https://www.opendental.com/manual222/hl7servicemanager.html" >v22.2</option><option value="https://www.opendental.com/manual221/hl7servicemanager.html" >v22.1</option><option value="https://www.opendental.com/manual214/hl7servicemanager.html" >v21.4</option><option value="https://www.opendental.com/manual213/hl7servicemanager.html" >v21.3</option><option value="https://www.opendental.com/manual212/hl7servicemanager.html" >v21.2</option><option value="https://www.opendental.com/manual211/hl7servicemanager.html" >v21.1</option><option value="https://www.opendental.com/manual205/hl7servicemanager.html" >v20.5</option><option value="https://www.opendental.com/manual204/hl7servicemanager.html" >v20.4</option><option value="https://www.opendental.com/manual203/hl7servicemanager.html" >v20.3</option><option value="https://www.opendental.com/manual202/hl7servicemanager.html" >v20.2</option><option value="https://www.opendental.com/manual201/hl7servicemanager.html" >v20.1</option><option value="https://www.opendental.com/manual194/hl7servicemanager.html" >v19.4</option><option value="https://www.opendental.com/manual193/hl7servicemanager.html" >v19.3</option><option value="https://www.opendental.com/manual192/hl7servicemanager.html" >v19.2</option><option value="https://www.opendental.com/manual191/hl7servicemanager.html" >v19.1</option><option value="https://www.opendental.com/manual184/hl7servicemanager.html" >v18.4</option><option value="https://www.opendental.com/manual183/hl7servicemanager.html" >v18.3</option><option value="https://www.opendental.com/manual182/hl7servicemanager.html" >v18.2</option><option value="https://www.opendental.com/manual181/hl7servicemanager.html" >v18.1</option><option value="https://www.opendental.com/manual174/hl7servicemanager.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>HL7 Service</p></div>
<div class="GeneralPageContent">
<p>The HL7 Service is installed on a server to facilitate the interaction of HL7 messages with the Open Dental database as part of the <a href="hl7.html">Generic HL7</a> Setup.</p>
<img src="images/hl7ServiceManager.gif" width="357" height="502"/><p>The HL7 Service is also installed as part of <a href="hl7labcorp.html">LabCorp HL7</a> and <a href="hl7ecw.html">eClinicalWorks HL7</a> setup.</p>
<p>HL7 services can be managed and installed from the <a href="servicemanager.html">Service Manager</a>.</p>
<p>A list will be populated by all installed OpenDentalHL7 services. As of version 12.4, multiple OpenDentalHL7 services can run on the same server to allow one server to host multiple customer databases. In order for each service to process messages for the correct database, a copy of the Open Dental application folder will have to be made and uniquely named. In the example above, three such folders were created in the following locations.</p>
<p><b>C:\OpenDentalHL7_DatabaseA</b><br/><b>C:\OpenDentalHL7_DatabaseB</b><br/><b>C:\OpenDentalHL7_DatabaseC</b></p>
<p>Each of these folders have the exact contents of the Open Dental application folder with a unique FreeDentalConfig.xml file. The FreeDentalConfig.xml file is how each service will determine which database it is processing messages for. See the HL7 page for information about how a connection to the database is established using this configuration file.</p>
<p>To install a new OpenDentalHL7 service, simply hit the Add button. To modify an existing installed service, double-click on one.</p>
<img src="images/hl7ManageService.gif" width="721" height="198"/><p>Each service must have a unique service name, and the name must begin with <i>OpenDent</i>. In this example, OpenDentalHL7 was paired with the name of the corresponding database. Once a service name is chosen and the path to the correct OpenDentHL7.exe is entered, hit the Install button. If the install is successful the status will change from <i>Not installed</i> to <i>Installed, Stopped</i>. Hit the Start button and once started the status will change to <i>Installed, Running</i>.</p>
<p>If the service does not start as expected, see Errors on the <a href="hl7.html">HL7</a> page to troubleshoot.</p>
</div>
</div>
</body>
</html>```
