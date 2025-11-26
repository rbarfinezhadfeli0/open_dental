# File: ./www.opendental.com/manual/hl7labcorpmsg.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - LabCorp HL7 Definition</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('hl7labcorpmsg','hl7labcorp','hl7','hl7genericmsg','+menusetupAdvanced','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/hl7labcorpmsg.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/hl7labcorpmsg.html" >v24.2</option><option value="https://www.opendental.com/manual241/hl7labcorpmsg.html" >v24.1</option><option value="https://www.opendental.com/manual233/hl7labcorpmsg.html" >v23.3</option><option value="https://www.opendental.com/manual232/hl7labcorpmsg.html" >v23.2</option><option value="https://www.opendental.com/manual231/hl7labcorpmsg.html" >v23.1</option><option value="https://www.opendental.com/manual224/hl7labcorpmsg.html" >v22.4</option><option value="https://www.opendental.com/manual223/hl7labcorpmsg.html" >v22.3</option><option value="https://www.opendental.com/manual222/hl7labcorpmsg.html" >v22.2</option><option value="https://www.opendental.com/manual221/hl7labcorpmsg.html" >v22.1</option><option value="https://www.opendental.com/manual214/hl7labcorpmsg.html" >v21.4</option><option value="https://www.opendental.com/manual213/hl7labcorpmsg.html" >v21.3</option><option value="https://www.opendental.com/manual212/hl7labcorpmsg.html" >v21.2</option><option value="https://www.opendental.com/manual211/hl7labcorpmsg.html" >v21.1</option><option value="https://www.opendental.com/manual205/hl7labcorpmsg.html" >v20.5</option><option value="https://www.opendental.com/manual204/hl7labcorpmsg.html" >v20.4</option><option value="https://www.opendental.com/manual203/hl7labcorpmsg.html" >v20.3</option><option value="https://www.opendental.com/manual202/hl7labcorpmsg.html" >v20.2</option><option value="https://www.opendental.com/manual201/hl7labcorpmsg.html" >v20.1</option><option value="https://www.opendental.com/manual194/hl7labcorpmsg.html" >v19.4</option><option value="https://www.opendental.com/manual193/hl7labcorpmsg.html" >v19.3</option><option value="https://www.opendental.com/manual192/hl7labcorpmsg.html" >v19.2</option><option value="https://www.opendental.com/manual191/hl7labcorpmsg.html" >v19.1</option><option value="https://www.opendental.com/manual184/hl7labcorpmsg.html" >v18.4</option><option value="https://www.opendental.com/manual183/hl7labcorpmsg.html" >v18.3</option><option value="https://www.opendental.com/manual182/hl7labcorpmsg.html" >v18.2</option><option value="https://www.opendental.com/manual181/hl7labcorpmsg.html" >v18.1</option><option value="https://www.opendental.com/manual174/hl7labcorpmsg.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>LabCorp HL7 Definition</p></div>
<div class="GeneralPageContent">
<p>In the <a href="hl7genericmsg.html">HL7</a> window, double-click the row for MedLab HL7 v2.3.</p>
<img src="images/hl7labcorpmsgdefedit.gif" width="833" height="644"/><p>There is one internal <a href="hl7labcorp.html">LabCorp HL7</a> definition that exactly matches the LabCorp HL7 message structure (MedLab HL7 v2.3). The transfer mode will always be SFTP. Messages and segments can be viewed but not edited.</p>
<p>To enter or edit SFTP and OpenDental HL7 Server settings:</p>
<p>Check Enabled to activate editable fields.</p>
<p class="MarginBottomZero">Enter the HL7 Communication Options:  </p>
<ul class="MarginBottomGap">
<li><b>Sftp Server Address Port</b>: The server address, colon, port. Example: b2bgateway-staging.labcorp.com:20022</li>
<li><b>Sftp Server Results Directory</b>: Where on the server root directory the lab results can be found for import (typically results).</li>
<li><b>Sftp Username</b>:</li>
<li><b>Sftp Password</b>:</li>
<li><b>Lab Result Image Category</b>: Click the dropdown to select the folder in the Images module where imported lab results and embedded PDFs will be saved.</li>
</ul>
<p>Enter the HL7 server name and service name.</p>
<p>See <a href="hl7servicemanager.html">HL7 Service</a> for information about installing and naming the OpenDentalHL7 service.</p>
</div>
</div>
</body>
</html>```
