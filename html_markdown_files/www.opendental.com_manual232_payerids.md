# File: ./www.opendental.com/manual232/payerids.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Electronic Payer IDs</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('payerids','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/payerids.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/payerids.html" >v24.2</option><option value="https://www.opendental.com/manual241/payerids.html" >v24.1</option><option value="https://www.opendental.com/manual233/payerids.html" >v23.3</option><option value="https://www.opendental.com/manual232/payerids.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/payerids.html" >v23.1</option><option value="https://www.opendental.com/manual224/payerids.html" >v22.4</option><option value="https://www.opendental.com/manual223/payerids.html" >v22.3</option><option value="https://www.opendental.com/manual222/payerids.html" >v22.2</option><option value="https://www.opendental.com/manual221/payerids.html" >v22.1</option><option value="https://www.opendental.com/manual214/payerids.html" >v21.4</option><option value="https://www.opendental.com/manual213/payerids.html" >v21.3</option><option value="https://www.opendental.com/manual212/payerids.html" >v21.2</option><option value="https://www.opendental.com/manual211/payerids.html" >v21.1</option><option value="https://www.opendental.com/manual205/payerids.html" >v20.5</option><option value="https://www.opendental.com/manual204/payerids.html" >v20.4</option><option value="https://www.opendental.com/manual203/payerids.html" >v20.3</option><option value="https://www.opendental.com/manual202/payerids.html" >v20.2</option><option value="https://www.opendental.com/manual201/payerids.html" >v20.1</option><option value="https://www.opendental.com/manual194/payerids.html" >v19.4</option><option value="https://www.opendental.com/manual193/payerids.html" >v19.3</option><option value="https://www.opendental.com/manual192/payerids.html" >v19.2</option><option value="https://www.opendental.com/manual191/payerids.html" >v19.1</option><option value="https://www.opendental.com/manual184/payerids.html" >v18.4</option><option value="https://www.opendental.com/manual183/payerids.html" >v18.3</option><option value="https://www.opendental.com/manual182/payerids.html" >v18.2</option><option value="https://www.opendental.com/manual181/payerids.html" >v18.1</option><option value="https://www.opendental.com/manual174/payerids.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Electronic Payer IDs</p></div>
<div class="GeneralPageContent">
<p>Electronic Payer IDs are used to submit electronic claims to carriers.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Family/Insurance, Payer IDs.</p>
<img src="images/payerID.png" width="915" height="489"/><p>Alternatively, in an <a href="insplan.html">Insurance Plan</a>, click <b>Search IDs</b>.</p>
<p>Payer IDs are assigned to the insurance carrier. Adding an ID directly to a carrier from the Edit Insurance Plan window or <a href="carriers.html">Carriers</a> window does not add the ID to this list.</p>
<p>This list is provided as a courtesy but is not extensive. Some clearinghouses automatically update this list. See Automatically Update Payer IDs below.</p>
<p><b>CommBridge</b>: Defaults to the default clearinghouse. Displays Payer IDs updated or added by the clearinghouse. Select <i>All </i>to see all payer IDs regardless of how they were added.</p>
<h2>Add or Edit an ID</h2>
<p> IDs can be edited or added as needed. Always verify that the electronic payer ID for a carrier is correct. If the wrong ID is used, it may require claims to be resubmitted at an additional expense. </p>
<p>To add a new electronic payer ID, click <b>Add</b> or double-click an ID to edit.</p>
<img src="images/payerIDAdd.png" width="760" height="422"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Payer ID</b>: Enter the Payer ID. </li>
<li><b>Carrier Name</b>: Enter the carrier name.</li>
<li><b>Comments</b>: Optional. Enter any comments about this ID.</li>
<li><b>Is Medicaid</b>: Check this box for Medicaid carriers. </li>
<li><b>Payer Service</b>: If the carrier was added automatically by a clearinghouse, the clearinghouse name displays. Otherwise, displays <i>None</i>.</li>
<li><b>Attributes</b>: Information sent about the payer from the clearinghouse (e.g., does the payer send ERAs, does the payer default to electronic or paper, etc). Attributes cannot be added or edited.</li>
</ul>
<p>Click OK to save.</p>
<h2>Automatically Update Payer IDs</h2>
<p class="MarginBottomZero">Payer ID List is automatically updated weekly if using one of the following clearinghouses as default: </p>
<ul class="MarginBottomGap">
<li><a href="eclaimsclaimconnect.html">DentalXChange</a> (ClaimConnect)</li>
<li><a href="eclaimseds.html">Electronic Dental Services</a> (EDS)</li>
</ul>
<p>The <a href="opendentalservice.html">Open Dental Service</a> is required. There is no indication in Open Dental when the list is updated. A log file named <i>PayerList</i> is located in the Open Dental installation folder. It tracks the successes and failures of Payer ID updates. </p>
</div>
</div>
</body>
</html>```
