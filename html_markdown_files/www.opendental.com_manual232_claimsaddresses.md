# File: ./www.opendental.com/manual232/claimsaddresses.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Claim Addresses</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimsaddresses','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/claimsaddresses.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/claimsaddresses.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimsaddresses.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimsaddresses.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimsaddresses.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/claimsaddresses.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimsaddresses.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimsaddresses.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimsaddresses.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimsaddresses.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimsaddresses.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimsaddresses.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimsaddresses.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimsaddresses.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimsaddresses.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimsaddresses.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimsaddresses.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimsaddresses.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimsaddresses.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimsaddresses.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimsaddresses.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimsaddresses.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimsaddresses.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimsaddresses.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimsaddresses.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimsaddresses.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimsaddresses.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimsaddresses.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Claim Addresses</p></div>
<div class="GeneralPageContent">
<p>Clinic addresses determine the address and phone information for the practice sent or printed on a <a href="claimedit.html">Claim</a>.</p>
<p>Enter Practice address and phone information in <a href="practice.html">Practice Setup</a> and Clinic addresses in <a href="clinicsetup.html">Clinic List</a>.</p>
<p>There are three address and phone number options for claims; Physical Treating, Billing, and Pay To. The <i>Billing</i> and <i>Pay To</i> address and phone numbers are only needed if different than the Physical Treating Address and main phone number. Below is the order in which the Practice Setup and Clinic addresses, and phone numbers are used on e-claims versus printed <a href="claimedit.html">Claims</a>.</p>
<p>A Site's <i>Place of Service</i> address may also be sent on e-claims (loop 2310C) and printed claims (box 54 and 56). See <a href="sites.html">Site List</a>, Technical Details.</p>
<h2>E-Claims in 5010 Format</h2>
<p>On e-claims there is an address and phone number for the billing provider (loop 2010AA, segments N3 and N4) and address for the pay-to provider (loop 2010AB, segments N3 and N4). Loop 2010AB is only included if the Practice Setup or Clinic, Pay To Address is entered. The address and phone number used from the Practice Setup and Clinic are determined based on the order below.</p>
<p><table class="simpletable">
<tr>
<th style="width:33%">Billing Provider Address<br/> (loop 2010AA, segments N3 and N4)</th>
<th style="width:33%">Billing Provider Phone Number</th>
<th style="width:33%">Pay-To Provider Address<br/> (loop 2010AB, segments N3 and N4)</th>
</tr>
<tr>
<td><p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Billing Address of Clinic if <i>Use on Claims</i> is checked</li>
<li>Billing Address of Practice if <i>Use on Claims</i> is checked</li>
<li>Physical Treating Address of Clinic</li>
<li>Physical Treating Address of Practice</li>
</ol>
</td>
<td><p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Billing Address Phone of Practice if <i>Use on Claims</i> is checked</li>
<li>Default Clinic Phone</li>
<li>Default Practice Phone</li>
<br/><br/></ol>
</td>
<td><p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Pay To Address of Clinic</li>
<li>Pay To Address of Practice</li>
<br/><br/><br/><br/></ol>
</td>
</tr>
</table>
</p>
<p><div class="Note">Note: <ul>
<li>If the Clinic selected on a claim is None, the Practice Setup information is used instead.</li>
<li>If using <a href="eclaimswebmd.html">Change Healthcare E-Claims</a> as a clearinghouse, if the Pay To address is sent on an e-claim to Change Healthcare, then Change Healthcare will refer to the Pay To address as the billing address on a claim detail printout (since it does not need to be a physical address). It will refer to what is normally considered the billing address as the rendering address since it must be a physical address sent on e-claims.</li>
</ul>
</div>
</p>
<h2>Printed Claims</h2>
<p>On printed claim forms there is an address and phone number for the billing and treating dentist. The treating dentist address (box 56) and treating dentist phone number (box 57) will always use the Physical Treating Address and default phone number of the Practice or Clinic. The address and phone number for the billing dentist (box 48 and 52) from the Practice Setup and Clinic are determined based on the order below.</p>
<p><table class="simpletable">
<tr>
<th style="width:33%">Billing Dentist Address (box 48)</th>
<th style="width:33%">Billing Dentist Phone Number (box 52)</th>
</tr>
<tr>
<td><p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Pay To Address of Clinic</li>
<li>Pay To Address of Practice</li>
<li>Billing Address of Clinic if <i>Use on Claims</i> is checked</li>
<li>Billing Address of Practice if <i>Use on Claims</i> is checked</li>
<li>Physical Treating Address of Clinic</li>
<li>Physical Treating Address of Practice</li>
</ol>
</td>
<td><p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Pay To Address Phone of Practice</li>
<li>Billing Address Phone of Practice if <i>Use on Claims</i> is checked</li>
<li>Default Clinic Phone</li>
<li>Default Practice Phone</li>
<br/><br/></ol>
</td>
</tr>
</table>
</p>
<p><div class="Note">Note: If the Clinic selected on a claim is None, the Practice Setup information is used instead.</div>
</p>
</div>
</div>
</body>
</html>```
