# File: ./www.opendental.com/manual243/opendentalreplicationservice.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Open Dental Replication Service</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('opendentalreplicationservice','servicemanager','+misc','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/opendentalreplicationservice.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/opendentalreplicationservice.html" >v24.2</option><option value="https://www.opendental.com/manual241/opendentalreplicationservice.html" >v24.1</option><option value="https://www.opendental.com/manual233/opendentalreplicationservice.html" >v23.3</option><option value="https://www.opendental.com/manual232/opendentalreplicationservice.html" >v23.2</option><option value="https://www.opendental.com/manual231/opendentalreplicationservice.html" >v23.1</option><option value="https://www.opendental.com/manual224/opendentalreplicationservice.html" >v22.4</option><option value="https://www.opendental.com/manual223/opendentalreplicationservice.html" >v22.3</option><option value="https://www.opendental.com/manual222/opendentalreplicationservice.html" >v22.2</option><option value="https://www.opendental.com/manual221/opendentalreplicationservice.html" >v22.1</option><option value="https://www.opendental.com/manual214/opendentalreplicationservice.html" >v21.4</option><option value="https://www.opendental.com/manual213/opendentalreplicationservice.html" >v21.3</option><option value="https://www.opendental.com/manual212/opendentalreplicationservice.html" >v21.2</option><option value="https://www.opendental.com/manual211/opendentalreplicationservice.html" >v21.1</option><option value="https://www.opendental.com/manual205/opendentalreplicationservice.html" >v20.5</option><option value="https://www.opendental.com/manual204/opendentalreplicationservice.html" >v20.4</option><option value="https://www.opendental.com/manual203/opendentalreplicationservice.html" >v20.3</option><option value="https://www.opendental.com/manual202/opendentalreplicationservice.html" >v20.2</option><option value="https://www.opendental.com/manual201/opendentalreplicationservice.html" >v20.1</option><option value="https://www.opendental.com/manual194/opendentalreplicationservice.html" >v19.4</option><option value="https://www.opendental.com/manual193/opendentalreplicationservice.html" >v19.3</option><option value="https://www.opendental.com/manual192/opendentalreplicationservice.html" >v19.2</option><option value="https://www.opendental.com/manual191/opendentalreplicationservice.html" >v19.1</option><option value="https://www.opendental.com/manual184/opendentalreplicationservice.html" >v18.4</option><option value="https://www.opendental.com/manual183/opendentalreplicationservice.html" >v18.3</option><option value="https://www.opendental.com/manual182/opendentalreplicationservice.html" >v18.2</option><option value="https://www.opendental.com/manual181/opendentalreplicationservice.html" >v18.1</option><option value="https://www.opendental.com/manual174/opendentalreplicationservice.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Open Dental Replication Service</p></div>
<div class="GeneralPageContent">
<p>The Open Dental Replication Service is used to monitor the replication Replica status.</p>
<img src="images/openDentalReplicationService.png" width="721" height="198"/><p>This service is required for <a href="replication.html">Replication</a> users. It will notify all users and IT staff if replication crashes via <a href="alerts.html">Alerts</a>.</p>
<p><div class="Note">Note: <ul>
<li>The OpenDentalReplicationService will only list in the Service Manager on the server computer.</li>
<li>The service should only be installed on the replication servers, since additional installations on workstations may cause conflicts.</li>
<li>If using One Way Replication, this service only needs to be installed on the Report Server. </li>
</ul>
</div>
</p>
<h2>Installing the OpenDentalReplicationService</h2>
<p>The OpenDentalReplicationService is installed on the server for each location running replication.</p>
<p class="MarginBottomZero">To install the OpenDentalReplicationService: </p>
<ol class="MarginBottomGap">
<li>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Misc Tools, Service Manager.</li>
<li>Click <b>Add</b>.</li>
<li>Name the service as <i>OpenDentalReplicationService</i>.</li>
<li>Click <b>Browse</b> and select the <i>OpenDentalReplicationService.exe</i>. This is typically located in <b>\Program Files (x86)\OpenDental\OpenDentalReplicationService\</b>. </li>
<li>Click <b>Install</b>. </li>
<li>Enter your configuration settings. <br/><img src="images/replicationServiceInstall.png" width="381" height="517" class="ImageInParagraph"/></li>
<li><ul>
<li>If using one way replication, check <b>Is one way replication</b> and enter Primary (Master) connection settings.</li>
</ul>
</li>
<li>Click <b>Start</b>. The status will update to <i>Installed, Running</i>.</li>
</ol>
</div>
</div>
</body>
</html>```
