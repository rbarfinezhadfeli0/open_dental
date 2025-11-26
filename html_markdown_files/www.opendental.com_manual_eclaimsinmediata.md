# File: ./www.opendental.com/manual/eclaimsinmediata.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Inmediata E-Claims</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclaimsinmediata','clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eclaimsinmediata.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eclaimsinmediata.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclaimsinmediata.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclaimsinmediata.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclaimsinmediata.html" >v23.2</option><option value="https://www.opendental.com/manual231/eclaimsinmediata.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclaimsinmediata.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclaimsinmediata.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclaimsinmediata.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclaimsinmediata.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclaimsinmediata.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclaimsinmediata.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclaimsinmediata.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclaimsinmediata.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclaimsinmediata.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclaimsinmediata.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclaimsinmediata.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclaimsinmediata.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclaimsinmediata.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclaimsinmediata.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclaimsinmediata.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclaimsinmediata.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclaimsinmediata.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclaimsinmediata.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclaimsinmediata.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclaimsinmediata.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclaimsinmediata.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclaimsinmediata.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Inmediata E-Claims</p></div>
<div class="GeneralPageContent">
<p>Inmediata Health Group offers a clearinghouse as well as other services.</p>
<p>In <a href="clearinghouses.html">Clearinghouses</a>, double-click Inmediata Health Group Corp.</p>
<img src="images/eClaimsInmediata.png" width="915" height="689"/><p> Website: <a href="http://www.inmediata.com" target="_blank">www.inmediata.com</a>.</p>
<h2>Setup</h2>
<p>Default settings are preset in this window. Verify settings before sending claims.</p>
<h2>Technical Details</h2>
<p>Use the IMPlug software provided by Inmediata to securely upload the claim files created by Open Dental.</p>
<p>In the IMPlug software, find the Integration Settings tab. Create the Reports folder and the Claims folder in the process.</p>
<p>Do not put anything in the Outbound History box because Open Dental already keeps a history in Claims\Archive.</p>
<h2>Electronic EOBS (ERA 835)</h2>
<p>Import of <a href="claimsERA835.html">ERAs</a> is fairly automated. The Inmediata <i>Inbound</i> path should be set the same as the <i>Report Path</i> on the Edit Clearinghouse window. Then the 835s should import automatically each time a claim is sent, or manually when <i>Get Reports</i> is clicked on the Insurance Claims window.</p>
</div>
</div>
</body>
</html>```
