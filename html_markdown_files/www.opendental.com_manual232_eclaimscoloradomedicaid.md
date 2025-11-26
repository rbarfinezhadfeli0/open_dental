# File: ./www.opendental.com/manual232/eclaimscoloradomedicaid.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Colorado Medicaid E-Claims</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclaimscoloradomedicaid','clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/eclaimscoloradomedicaid.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/eclaimscoloradomedicaid.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclaimscoloradomedicaid.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclaimscoloradomedicaid.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclaimscoloradomedicaid.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/eclaimscoloradomedicaid.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclaimscoloradomedicaid.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclaimscoloradomedicaid.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclaimscoloradomedicaid.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclaimscoloradomedicaid.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclaimscoloradomedicaid.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclaimscoloradomedicaid.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclaimscoloradomedicaid.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclaimscoloradomedicaid.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclaimscoloradomedicaid.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclaimscoloradomedicaid.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclaimscoloradomedicaid.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclaimscoloradomedicaid.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclaimscoloradomedicaid.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclaimscoloradomedicaid.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclaimscoloradomedicaid.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclaimscoloradomedicaid.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclaimscoloradomedicaid.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclaimscoloradomedicaid.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclaimscoloradomedicaid.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclaimscoloradomedicaid.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclaimscoloradomedicaid.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclaimscoloradomedicaid.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Colorado Medicaid E-Claims</p></div>
<div class="GeneralPageContent">
<p>In <a href="clearinghouses.html">Clearinghouses</a>, click <b>Add</b>.</p>
<img src="images/clearinghouseColoradoMedicaid.png" width="915" height="689"/><p>Colorado Medicaid is an e-claims direct carrier. It must be manually added to Open Dental. Website: <a href="https://www.colorado.gov/hcpf/provider-resources" target="_blank">https://www.colorado.gov/hcpf/provider-resources</a></p>
<h2>Setup</h2>
<p>Set up the clearinghouse using the above screenshot as a reference.</p>
<p><b>Tax ID Number:</b> Enter the Trading Partner ID in the Tax ID Number field. Colorado Medicaid assigns the provider a Trading Partner ID once the provider is enrolled in Colorado Medicaid EDI. This ID can be found in the Colorado Medicaid web portal.</p>
<h2>Insurance and Claims</h2>
<p>For all Colorado Medicaid insurance plans, set the Filing Code to <i>Medicaid</i> on the <a href="insplan.html">Insurance Plan</a>.</p>
<p>For all Colorado Medicaid claims that are submitted electronically, the carrier associated with the insurance plan must have a carrier name of <i>CO Medicaid</i>.</p>
<p>Once the claim is sent from Open Dental, a new file is generated in the clearinghouse export folder. The claim has not been sent to Colorado Medicaid at this point.</p>
<p>To finish sending, users must manually send the file over dial-up modem. The phone number to send to, as well as the login information for the dial-up session, can be found on the welcome letter sent to the provider from Colorado Medicaid.</p>
</div>
</div>
</body>
</html>```
