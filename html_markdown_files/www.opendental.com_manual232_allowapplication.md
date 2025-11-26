# File: ./www.opendental.com/manual232/allowapplication.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eConnector Firewall</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('allowapplication','econnector','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/allowapplication.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/allowapplication.html" >v24.2</option><option value="https://www.opendental.com/manual241/allowapplication.html" >v24.1</option><option value="https://www.opendental.com/manual233/allowapplication.html" >v23.3</option><option value="https://www.opendental.com/manual232/allowapplication.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/allowapplication.html" >v23.1</option><option value="https://www.opendental.com/manual224/allowapplication.html" >v22.4</option><option value="https://www.opendental.com/manual223/allowapplication.html" >v22.3</option><option value="https://www.opendental.com/manual222/allowapplication.html" >v22.2</option><option value="https://www.opendental.com/manual221/allowapplication.html" >v22.1</option><option value="https://www.opendental.com/manual214/allowapplication.html" >v21.4</option><option value="https://www.opendental.com/manual213/allowapplication.html" >v21.3</option><option value="https://www.opendental.com/manual212/allowapplication.html" >v21.2</option><option value="https://www.opendental.com/manual211/allowapplication.html" >v21.1</option><option value="https://www.opendental.com/manual205/allowapplication.html" >v20.5</option><option value="https://www.opendental.com/manual204/allowapplication.html" >v20.4</option><option value="https://www.opendental.com/manual203/allowapplication.html" >v20.3</option><option value="https://www.opendental.com/manual202/allowapplication.html" >v20.2</option><option value="https://www.opendental.com/manual201/allowapplication.html" >v20.1</option><option value="https://www.opendental.com/manual194/allowapplication.html" >v19.4</option><option value="https://www.opendental.com/manual193/allowapplication.html" >v19.3</option><option value="https://www.opendental.com/manual192/allowapplication.html" >v19.2</option><option value="https://www.opendental.com/manual191/allowapplication.html" >v19.1</option><option value="https://www.opendental.com/manual184/allowapplication.html" >v18.4</option><option value="https://www.opendental.com/manual183/allowapplication.html" >v18.3</option><option value="https://www.opendental.com/manual182/allowapplication.html" >v18.2</option><option value="https://www.opendental.com/manual181/allowapplication.html" >v18.1</option><option value="https://www.opendental.com/manual174/allowapplication.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eConnector Firewall</p></div>
<div class="GeneralPageContent">
<p>See <a href="econnector.html">eConnector</a>.</p>
<p>In some cases, the eConnector and eService Listener ports must be allowed through Windows Firewall. </p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Open Windows Defender Firewall with Advanced Security. </li>
<br/><li>On the left, select <i>Inbound Rules</i>.</li>
<img src="images/openPortInbound.png" width="894" height="596"/><li>On the right, click <b>New Rule</b>.</li>
<br/><li>Select the desired rule type, then click <b>Next</b>. <ul>
<li>If allowing the eConnector, select <i>Program</i>. </li>
<li>If allowing the eServices Listener ports, select <i>Port</i>.</li>
<img src="images/econnectorProgram.png" width="714" height="581"/></ul>
</li>
<li>Determine where the rule applies, then click <b>Next</b>.  <ul>
<li>If allowing the eConnector, select <i>This program path:</i>. Click <b>Browse</b> search for the eConnector location. <br/> The default location for the eConnector file is <b>C:\Program Files (x86)\Open Dental\OpenDentalEConnector\OpenDentalEConnector.exe.</b>. </li>
<img src="images/firewalleConnectorProgram.png" width="479" height="105"/><li>If allowing the eServices Listener ports, select <i>Specific local ports:</i>. Enter 30777 - 30787. </li>
<img src="images/firewallListenerPorts.png" width="476" height="113"/></ul>
</li>
<li>Select <b>Allow the connection</b>, then click <b>Next</b>.</li>
<img src="images/econnectorAllow.png" width="714" height="581"/><li>Select the profiles. Consult an IT professional for appropriate profile selections.</li>
<img src="images/econnectorProfiles.png" width="714" height="581"/><li>Enter a <i>Name</i> and a <i>Description</i>, then click <b>Finish</b>. <ul>
<li>If allowing the eConnector, enter Open Dental eConnector. </li>
<li>If allowing eServices Listener ports, enter eServices Listener.</li>
</ul>
</li>
<img src="images/econnectorName.png" width="714" height="581"/></ol>
</div>
</div>
</body>
</html>```
