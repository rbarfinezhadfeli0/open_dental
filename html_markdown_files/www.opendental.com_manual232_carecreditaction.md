# File: ./www.opendental.com/manual232/carecreditaction.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - CareCredit Action</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('carecreditaction','carecreditsetup','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/carecreditaction.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/carecreditaction.html" >v24.2</option><option value="https://www.opendental.com/manual241/carecreditaction.html" >v24.1</option><option value="https://www.opendental.com/manual233/carecreditaction.html" >v23.3</option><option value="https://www.opendental.com/manual232/carecreditaction.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/carecreditaction.html" >v23.1</option><option value="https://www.opendental.com/manual224/carecreditaction.html" >v22.4</option><option value="https://www.opendental.com/manual223/carecreditaction.html" >v22.3</option><option value="https://www.opendental.com/manual222/carecreditaction.html" >v22.2</option><option value="https://www.opendental.com/manual221/carecreditaction.html" >v22.1</option><option value="https://www.opendental.com/manual214/carecreditaction.html" >v21.4</option><option value="https://www.opendental.com/manual213/carecreditaction.html" >v21.3</option><option value="https://www.opendental.com/manual212/carecreditaction.html" >v21.2</option><option value="https://www.opendental.com/manual211/carecreditaction.html" >v21.1</option><option value="https://www.opendental.com/manual205/carecreditaction.html" >v20.5</option><option value="https://www.opendental.com/manual204/carecreditaction.html" >v20.4</option><option value="https://www.opendental.com/manual203/carecreditaction.html" >v20.3</option><option value="https://www.opendental.com/manual202/carecreditaction.html" >v20.2</option><option value="https://www.opendental.com/manual201/carecreditaction.html" >v20.1</option><option value="https://www.opendental.com/manual194/carecreditaction.html" >v19.4</option><option value="https://www.opendental.com/manual193/carecreditaction.html" >v19.3</option><option value="https://www.opendental.com/manual192/carecreditaction.html" >v19.2</option><option value="https://www.opendental.com/manual191/carecreditaction.html" >v19.1</option><option value="https://www.opendental.com/manual184/carecreditaction.html" >v18.4</option><option value="https://www.opendental.com/manual183/carecreditaction.html" >v18.3</option><option value="https://www.opendental.com/manual182/carecreditaction.html" >v18.2</option><option value="https://www.opendental.com/manual181/carecreditaction.html" >v18.1</option><option value="https://www.opendental.com/manual174/carecreditaction.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>CareCredit Action</p></div>
<div class="GeneralPageContent">
<p>See <a href="carecreditsetup.html">CareCredit Setup</a>.</p>
<p>In the <a href="treatmentplan.html">Treatment Plan Module</a>, click <b>CareCredit</b>.</p>
<img src="images/careCreditAction.png" width="443" height="328"/><p>Alternatively, in the <a href="account.html">Account Module</a>, click <b>CareCredit</b>.</p>
<p>Use the CareCredit Action window to navigate CareCredit options. This window only appears when CareCredit is enabled. When CareCredit is not enabled, the CareCredit website opens.</p>
<p>A patient must be selected as most of these buttons pertain to the selected patient. </p>
<p>Do not select another patient while the CareCredit interface is open. Changes made in CareCredit occur on the currently selected patient, not the patient selected when the interface was opened.</p>
<p class="MarginBottomZero">These dropdown menus only display when clinics is enabled and when <i>Merchant number by Provider</i> is checked in CareCredit Setup. </p>
<ul class="MarginBottomGap">
<li><b>Clinic</b>: The clinic associated with CareCredit.</li>
<li><b>Provider</b>: The provider associated with CareCredit.</li>
</ul>
<p><b>Apply</b>: Opens the CareCredit Apply portal. The selected patient information is sent, so the information is prefilled. </p>
<p class="MarginBottomZero"><b>Lookup</b>: Opens the CareCredit Lookup portal. Find transaction history for patient. The selected patient information is sent, so it is prefilled.  </p>
<ul class="MarginBottomGap">
<li>To find patient information for someone who has applied for and been approved by CareCredit, but does not have a transaction history, use the Lookup option from the Payment Window, CareCredit instead.</li>
</ul>
<p><div class="Note">Note: If <i>Mark online payments as processed</i> is enabled in <a href="preferences.html">Preferences</a>, payments made through Apply or Lookup are allocated automatically using <a href="allocationssetup.html">Allocation Settings</a> and automatically marked as processed. </div>
</p>
<p><b>Reports</b>: Opens the CareCredit Report portal. This is office wide information. No patient information needed or is sent. </p>
<p><b>Manage</b>: Opens the CareCredit Manage portal. Allows offices to set promotions. No patient information is sent.</p>
<p><b>Transactions</b>: Opens the <a href="carecredittransactions.html">CareCredit Transactions</a> window. </p>
</div>
</div>
</body>
</html>```
