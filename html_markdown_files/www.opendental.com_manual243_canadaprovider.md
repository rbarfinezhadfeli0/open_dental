# File: ./www.opendental.com/manual243/canadaprovider.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Canada Provider Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('canadaprovider','canada','countries','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/canadaprovider.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/canadaprovider.html" >v24.2</option><option value="https://www.opendental.com/manual241/canadaprovider.html" >v24.1</option><option value="https://www.opendental.com/manual233/canadaprovider.html" >v23.3</option><option value="https://www.opendental.com/manual232/canadaprovider.html" >v23.2</option><option value="https://www.opendental.com/manual231/canadaprovider.html" >v23.1</option><option value="https://www.opendental.com/manual224/canadaprovider.html" >v22.4</option><option value="https://www.opendental.com/manual223/canadaprovider.html" >v22.3</option><option value="https://www.opendental.com/manual222/canadaprovider.html" >v22.2</option><option value="https://www.opendental.com/manual221/canadaprovider.html" >v22.1</option><option value="https://www.opendental.com/manual214/canadaprovider.html" >v21.4</option><option value="https://www.opendental.com/manual213/canadaprovider.html" >v21.3</option><option value="https://www.opendental.com/manual212/canadaprovider.html" >v21.2</option><option value="https://www.opendental.com/manual211/canadaprovider.html" >v21.1</option><option value="https://www.opendental.com/manual205/canadaprovider.html" >v20.5</option><option value="https://www.opendental.com/manual204/canadaprovider.html" >v20.4</option><option value="https://www.opendental.com/manual203/canadaprovider.html" >v20.3</option><option value="https://www.opendental.com/manual202/canadaprovider.html" >v20.2</option><option value="https://www.opendental.com/manual201/canadaprovider.html" >v20.1</option><option value="https://www.opendental.com/manual194/canadaprovider.html" >v19.4</option><option value="https://www.opendental.com/manual193/canadaprovider.html" >v19.3</option><option value="https://www.opendental.com/manual192/canadaprovider.html" >v19.2</option><option value="https://www.opendental.com/manual191/canadaprovider.html" >v19.1</option><option value="https://www.opendental.com/manual184/canadaprovider.html" >v18.4</option><option value="https://www.opendental.com/manual183/canadaprovider.html" >v18.3</option><option value="https://www.opendental.com/manual182/canadaprovider.html" >v18.2</option><option value="https://www.opendental.com/manual181/canadaprovider.html" >v18.1</option><option value="https://www.opendental.com/manual174/canadaprovider.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Canada Provider Setup</p></div>
<div class="GeneralPageContent">
<p>For <a href="canada.html">Canada</a> users, in <a href="providers.html">Providers</a> List, click <b>Add</b>, or double-click an existing provider to edit.</p>
<img src="images/canadaProvider.png" width="897" height="692"/><p>For a description of fields, see <a href="providerseditwindow.html">Provider</a>. Some fields are specific to Canada. They are described below.</p>
<p><b>CDA Number</b>: The nine-digit provider identification number. Also known as the Unique ID Number (UIN).</p>
<p><b>Office Number</b>: The four-character office identifier. May contain numbers and letters.</p>
<p><b>Is CDAnet Member</b>: Must be checked to send electronic claims. Includes CDA, CDHA, ACDQ, and DAC members.</p>
<h2>Additional Information</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Taxonomy Code is not sent on Canadian claims.</li>
<li>Supplemental Provider Identifiers are not used in Canada.</li>
<li>Hygienists in a Hygiene-Only office should not check <i>Secondary Provider</i>.</li>
<li>Hygienists in an office with a dentist provider should check <i>Secondary Provider</i>.</li>
<li>Any provider used on claims must have a correct CDA Number and Office Number entered, as well as active membership to their respective organizations. See <a href="canadasetup.html">Register Canadian Providers for E-Claims</a> for more information.</li>
</ul>
</div>
</div>
</body>
</html>```
