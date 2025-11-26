# File: ./www.opendental.com/manual232/eclaimseds.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Electronic Dental Services</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclaimseds','clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/eclaimseds.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/eclaimseds.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclaimseds.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclaimseds.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclaimseds.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/eclaimseds.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclaimseds.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclaimseds.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclaimseds.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclaimseds.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclaimseds.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclaimseds.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclaimseds.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclaimseds.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclaimseds.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclaimseds.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclaimseds.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclaimseds.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclaimseds.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclaimseds.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclaimseds.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclaimseds.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclaimseds.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclaimseds.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclaimseds.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclaimseds.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclaimseds.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclaimseds.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Electronic Dental Services</p></div>
<div class="GeneralPageContent">
<p>In <a href="clearinghouses.html">Clearinghouses</a>, double-click Electronic Dental Services.</p>
<img src="images/eclaimsEDS.png" width="915" height="687"/><p>Electronic Dental Services - Dental (EDS Dental) is an E-Claims clearinghouse. They offer claim processing, electronic billing, ERAs, and attachments. Visit their website at <a href="http://www.edsedi.com">www.edsedi.com</a>. EDS supplies the program and setup.</p>
<h2>Open Dental Setup</h2>
<p>To enable EDS as the default clearinghouse, set EDS as the Dental default in the Clearinghouses window.</p>
<p>In the Edit Clearinghouses window, set the following:</p>
<img src="images/eClaimsEDSsettings.png" width="720" height="100"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Comm Bridge</b>: When set to <i>EDS</i>, send claims directly to the EDS clearinghouse. When set to <i>None</i>, send claims to the Claim Export Path instead.</li>
<li><b>Use Claim Export Path:</b> Only available when EDS is set as the Comm Bridge. Check the box save 837 files sent with e-claims to the Claim Export Path. Uncheck to block saving the files.</li>
<li><b>ERA Options</b>: Select the preferred ERA download setting. <ul>
<li><b>Do Not Download ERAs:</b> Only available when EDS is set as the Comm Bridge. Do not automatically download <a href="claimsera835.html">ERAs</a>.</li>
<li><b>Download ERAs</b>: Only available when EDS is set as the Comm Bridge. Automatically download ERAs to the Report Path.</li>
</ul>
</li>
</ul>
<h2>Other Services</h2>
<p class="MarginBottomZero">To use EDS for: </p>
<ul class="MarginBottomGap">
<li>Electronic Billing, see <a href="billingdefaults.html">Billing Defaults</a>.</li>
<li>ERAs, see <a href="claimsera835.html">ERAs</a>.</li>
<li>Eligibility, see <a href="ebenefits.html">Electronic Eligibility and Benefits</a>.</li>
<li>Attachments, discuss with EDS. Attachments are not integrated within Open Dental and are done separately through EDS.</li>
</ul>
<h2>Payer IDs</h2>
<p>The <a href="payerids.html">Electronic Payer IDs</a> list is automatically updated when EDS is set as the default clearinghouse. The <a href="opendentalservice.html">Open Dental Service</a> is required. </p>
</div>
</div>
</body>
</html>```
