# File: ./www.opendental.com/manual243/electronicsignatures.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Electronic Signatures</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('electronicsignatures','procedureedit','entertreatment','+chartTabs','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/electronicsignatures.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/electronicsignatures.html" >v24.2</option><option value="https://www.opendental.com/manual241/electronicsignatures.html" >v24.1</option><option value="https://www.opendental.com/manual233/electronicsignatures.html" >v23.3</option><option value="https://www.opendental.com/manual232/electronicsignatures.html" >v23.2</option><option value="https://www.opendental.com/manual231/electronicsignatures.html" >v23.1</option><option value="https://www.opendental.com/manual224/electronicsignatures.html" >v22.4</option><option value="https://www.opendental.com/manual223/electronicsignatures.html" >v22.3</option><option value="https://www.opendental.com/manual222/electronicsignatures.html" >v22.2</option><option value="https://www.opendental.com/manual221/electronicsignatures.html" >v22.1</option><option value="https://www.opendental.com/manual214/electronicsignatures.html" >v21.4</option><option value="https://www.opendental.com/manual213/electronicsignatures.html" >v21.3</option><option value="https://www.opendental.com/manual212/electronicsignatures.html" >v21.2</option><option value="https://www.opendental.com/manual211/electronicsignatures.html" >v21.1</option><option value="https://www.opendental.com/manual205/electronicsignatures.html" >v20.5</option><option value="https://www.opendental.com/manual204/electronicsignatures.html" >v20.4</option><option value="https://www.opendental.com/manual203/electronicsignatures.html" >v20.3</option><option value="https://www.opendental.com/manual202/electronicsignatures.html" >v20.2</option><option value="https://www.opendental.com/manual201/electronicsignatures.html" >v20.1</option><option value="https://www.opendental.com/manual194/electronicsignatures.html" >v19.4</option><option value="https://www.opendental.com/manual193/electronicsignatures.html" >v19.3</option><option value="https://www.opendental.com/manual192/electronicsignatures.html" >v19.2</option><option value="https://www.opendental.com/manual191/electronicsignatures.html" >v19.1</option><option value="https://www.opendental.com/manual184/electronicsignatures.html" >v18.4</option><option value="https://www.opendental.com/manual183/electronicsignatures.html" >v18.3</option><option value="https://www.opendental.com/manual182/electronicsignatures.html" >v18.2</option><option value="https://www.opendental.com/manual181/electronicsignatures.html" >v18.1</option><option value="https://www.opendental.com/manual174/electronicsignatures.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Electronic Signatures</p></div>
<div class="GeneralPageContent">
<p>An electronic signature can be used much like a pen and paper signature. Each signature is electronically linked to the data it applies to and, if the data changes, the signature is invalidated or cleared.</p>
<p>In the <a href="procedureedit.html">Procedure</a> Edit window, on the right, is a signature box.</p>
<img src="images/signatureBox.png" width="372" height="89"/><p>Electronic signatures are also available in various parts of Open Dental where there is a signature field or when added to supported <a href="sheets.html">Sheets</a> . </p>
<h2>Options</h2>
<p class="MarginBottomZero">When electronic signatures are available, a signature box shows with available options: </p>
<ul class="MarginBottomGap">
<li><img src="images/digitalSignature.png" width="28" height="28" style="margin-bottom: 0px"/> Add a Digital Signature stamp for the logged-on user. Includes the text: <i>Digitally Signed by [logged-on user] Date Signed: [today's date and time]</i>.  <ul>
<li>Only visible for procedure notes if <i>Allow digital signatures</i> is turned on in <a href="preferences.html">Preferences</a>.</li>
<li>Only visible for Sheets if <i>Allow Electronic Signatures</i> is enabled for the Signature Box field.</li>
<li>If the logged-on user is attached to a provider, the provider name is shown. If the logged-on user is not attached to a provider, the username is shown.</li>
<li>Not available for Commlogs.</li>
</ul>
</li>
<li><img src="images/signatureTopaz.png" width="28" height="28" style="margin-bottom: 0px"/> Sign with a Topaz signature pad. We recommend using a Topaz signature pad for electronic signatures. See below for additional information.</li>
<li><img src="images/signatureX.png" width="28" height="28" style="margin-bottom: 0px"/> Clear a signature.</li>
<li>To sign without the Digital Signature stamp or Topaz pad, click into the signature box to sign using the mouse. </li>
<li>If using a tablet or touch screen PC, users can also sign using the touch screen or a stylus. When signing with a stylus, information about the plotted points is recorded.</li>
</ul>
<p>To only allow Procedure Note, Group Note, and Ortho Note signatures by <a href="providers.html">Providers</a> enable the preference, <i>Notes can only be signed by providers.</i></p>
<p>To only allow signatures by provider on a Sheet, enable <i>Restrict Signatures to Providers</i> in <a href="sheetssignature.html">Edit Signature Box Field</a> window in <a href="sheetsetup.html">Edit Sheet Def</a>.</p>
<h2>Technical Details</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>The electronic signature is cleared if a signed note is edited or the attached user is changed.</li>
<li>In some areas (e.g., Commlog) only the logged-on user is linked to the signature. In other areas (e.g., Procedure Notes), the logged-on user can be overridden before signing. </li>
<li>If electronically signing a <a href="patientform.html">Patient Forms</a>, the date and time of the signature is saved in the signature box.</li>
<li>If data tied to a signature is changed behind the scenes (e.g., MySQL query), signatures are marked invalid instead of being cleared.</li>
<li>Signatures created using a mouse or clicking the signature box are still valid electronic signatures, but with a mouse signature or click alone, it is not possible to verify the person signing.</li>
</ul>
<h2>Topaz Signature Pads</h2>
<p>Open Dental does not sell the Topaz signature devices. However to ensure compatibility, please make sure the model number ordered exactly matches a signature pad we recommend. We recommend purchasing new models only and verifying the warranty.</p>
<p>Topaz pads are not compatible with <a href="https://opendental.com/site/opendentalcloud.html">Open Dental Cloud</a>.</p>
<p>Purchase in the United States and Canada: <a href="https://www.topazsystems.com/wheretobuy-resellers.html" target="_blank">Topaz Website</a></p>
<p>Requirements: The pad purchased must be a 1 x 5 pad and it must have a model number ending in HSB or BSB. Those models are all USB types that use the human interface driver.</p>
<p>HSB model setup: See <a href="topazsetuphsb.html">Topaz HSB Model Setup</a>. This is our recommended signature pad model.</p>
<p>BSB model setup: See <a href="topazsetupbsb.html">Topaz BSB Model Setup</a> .</p>
<p>Topaz Pad Recommendations: At this time, we strongly recommend a wired pad as we have not found a wireless pad that is functional.</p>
<table class="simpletable">
<tr>
<th style="width:25%">Recommended Pads</th>
<th style="width:25%">Model #</th>
<th style="width:25%">URL</th>
<th style="width:25%">$</th>
</tr>
<tr>
<td>SigLite 1 x 5 This is a low cost pad that users sign blind, as it does not show ink on the screen as they sign. Because of this awkwardness, it is probably not suitable for patients, but it works fine for staff members who are signing procedure notes. The background is a dark blue rather than the medium blue pictured.</td>
<td>T-S460-HSB-R</td>
<td><img src="images/siglite.gif" width="307" height="177"/><a href="https://www.topazsystems.com/siglite1x5.html">Topaz SigLite</a></td>
<td>~ $100</td>
</tr>
<tr>
<td>SigLite LCD 1 x 5 This pad has an LCD screen, so users can see the signature as they sign, just like on paper. It works very well, but is more expensive. The screen background is actually gray rather than backlit.</td>
<td>T-L460-HSB-R</td>
<td><img src="images/siglitelcd.gif" width="310" height="236"/><a href="https://www.topazsystems.com/siglite1x5.html">Topaz SigLite LCD</a></td>
<td>~ $200</td>
</tr>
</table>
<br/><p>Other pads may have extra features, such as backlighting or more durable surfaces. These pads work as long as they meet the Requirements listed above.</p>
<table class="simpletable">
<tr>
<th style="width:50%">Other Compatible Pads</th>
<th style="width:50%">Model #</th>
</tr>
<tr>
<td><a href="http://www.topazsystems.com/products/siggem1x5.asp">SignatureGem 1x5</a></td>
<td>T-S261-HSB-R</td>
</tr>
<tr>
<td><a href="http://www.topazsystems.com/products/deskgem.asp">DeskGem1x5</a></td>
<td>T-S981-HSB-R</td>
</tr>
<tr>
<td><a href="http://www.topazsystems.com/products/siggemlcd1x5.asp">SignatureGem LCD 1x5</a></td>
<td>T-L462-HSB-R</td>
</tr>
<tr>
<td><a href="http://www.topazsystems.com/products/siggemlcd1x5.asp">SignatureGem Backlit LCD 1x5</a></td>
<td>T-LBK462-HSB-R</td>
</tr>
<tr>
<td><a href="http://www.topazsystems.com/products/siglitesl.asp">SigLite Slim 1x5</a></td>
<td>T-S461-HSB-R</td>
</tr>
<tr>
<td><a href="http://www.topazsystems.com/products/siglitelcd.asp">SigLite Backlit LCD 1x5</a></td>
<td>T-LBK460-HSB-R</td>
</tr>
<tr>
<td><a href="http://www.topazsystems.com/siglite1x5.html">SigLite 1x5</a></td>
<td>T-S460-BSB-R</td>
</tr>
<tr>
<td>Any of the IDGem series that are 1x5 and HSB.</td>
<td></td>
</tr>
</table>
<br/></div>
</div>
</body>
</html>```
