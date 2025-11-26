# File: ./www.opendental.com/manual/mergebillingtypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Merge Billing Types</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mergebillingtypes','+misc','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mergebillingtypes.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mergebillingtypes.html" >v24.2</option><option value="https://www.opendental.com/manual241/mergebillingtypes.html" >v24.1</option><option value="https://www.opendental.com/manual233/mergebillingtypes.html" >v23.3</option><option value="https://www.opendental.com/manual232/mergebillingtypes.html" >v23.2</option><option value="https://www.opendental.com/manual231/mergebillingtypes.html" >v23.1</option><option value="https://www.opendental.com/manual224/mergebillingtypes.html" >v22.4</option><option value="https://www.opendental.com/manual223/mergebillingtypes.html" >v22.3</option><option value="https://www.opendental.com/manual222/mergebillingtypes.html" >v22.2</option><option value="https://www.opendental.com/manual221/mergebillingtypes.html" >v22.1</option><option value="https://www.opendental.com/manual214/mergebillingtypes.html" >v21.4</option><option value="https://www.opendental.com/manual213/mergebillingtypes.html" >v21.3</option><option value="https://www.opendental.com/manual212/mergebillingtypes.html" >v21.2</option><option value="https://www.opendental.com/manual211/mergebillingtypes.html" >v21.1</option><option value="https://www.opendental.com/manual205/mergebillingtypes.html" >v20.5</option><option value="https://www.opendental.com/manual204/mergebillingtypes.html" >v20.4</option><option value="https://www.opendental.com/manual203/mergebillingtypes.html" >v20.3</option><option value="https://www.opendental.com/manual202/mergebillingtypes.html" >v20.2</option><option value="https://www.opendental.com/manual201/mergebillingtypes.html" >v20.1</option><option value="https://www.opendental.com/manual194/mergebillingtypes.html" >v19.4</option><option value="https://www.opendental.com/manual193/mergebillingtypes.html" >v19.3</option><option value="https://www.opendental.com/manual192/mergebillingtypes.html" >v19.2</option><option value="https://www.opendental.com/manual191/mergebillingtypes.html" >v19.1</option><option value="https://www.opendental.com/manual184/mergebillingtypes.html" >v18.4</option><option value="https://www.opendental.com/manual183/mergebillingtypes.html" >v18.3</option><option value="https://www.opendental.com/manual182/mergebillingtypes.html" >v18.2</option><option value="https://www.opendental.com/manual181/mergebillingtypes.html" >v18.1</option><option value="https://www.opendental.com/manual174/mergebillingtypes.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Merge Billing Types</p></div>
<div class="GeneralPageContent">
<p>The Merge Billing Types tool can be used to merge duplicate billing types.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Misc Tools, Merge Billing Types.</p>
<img src="images/mergeBillingTypes.png" width="609" height="265"/><p>A <a href="definitionsbillingtypes.html">Billing Type</a> is assigned to each patient, but can optionally be assigned to procedures, clinics, insurance plans, and dunning messages. When merging billing types, the billing type that is kept is used in these places.</p>
<p class="MarginBottomZero">To merge billing types: </p>
<ol class="MarginBottomGap">
<li>Select the <i>Billing Type to merge into</i>. Use <b>[...] </b>to select the billing type to keep. The billing type entered in the next area merges into this one.</li>
<li>Select the <i>Billing Type to merge from</i>. Use<b> [...] </b>to select the billing type to remove.</li>
<li>Click <b>Merge</b> to combine billing types. A confirmation message appears warning the user this action cannot be undone.<br/><img src="images/mergeBillingTypesPrompt.png" width="376" height="133" class="ImageInParagraph"/></li>
<li>Click <b>Yes</b> to continue. A message dislays once the merge is successful. </li>
</ol>
<p>Once the merge is complete, anywhere the <i>Billing Type to merge from</i> (Step 2) is in use is replaced with the <i>Billing Type to merge into</i> (e.g., patients' billing types are reassigned, etc). The <i>Billing Type to merge from</i> is marked Hidden in <a href="definitionsbillingtypes.html">Definitions: Billing Types</a>. Billing types used in automation are not updated. <a href="automation.html">Automation</a> should be reviewed after merging types.</p>
</div>
</div>
</body>
</html>```
