# File: ./www.opendental.com/manual232/insfilingcodes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance Filing Codes</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('insfilingcodes','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/insfilingcodes.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/insfilingcodes.html" >v24.2</option><option value="https://www.opendental.com/manual241/insfilingcodes.html" >v24.1</option><option value="https://www.opendental.com/manual233/insfilingcodes.html" >v23.3</option><option value="https://www.opendental.com/manual232/insfilingcodes.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/insfilingcodes.html" >v23.1</option><option value="https://www.opendental.com/manual224/insfilingcodes.html" >v22.4</option><option value="https://www.opendental.com/manual223/insfilingcodes.html" >v22.3</option><option value="https://www.opendental.com/manual222/insfilingcodes.html" >v22.2</option><option value="https://www.opendental.com/manual221/insfilingcodes.html" >v22.1</option><option value="https://www.opendental.com/manual214/insfilingcodes.html" >v21.4</option><option value="https://www.opendental.com/manual213/insfilingcodes.html" >v21.3</option><option value="https://www.opendental.com/manual212/insfilingcodes.html" >v21.2</option><option value="https://www.opendental.com/manual211/insfilingcodes.html" >v21.1</option><option value="https://www.opendental.com/manual205/insfilingcodes.html" >v20.5</option><option value="https://www.opendental.com/manual204/insfilingcodes.html" >v20.4</option><option value="https://www.opendental.com/manual203/insfilingcodes.html" >v20.3</option><option value="https://www.opendental.com/manual202/insfilingcodes.html" >v20.2</option><option value="https://www.opendental.com/manual201/insfilingcodes.html" >v20.1</option><option value="https://www.opendental.com/manual194/insfilingcodes.html" >v19.4</option><option value="https://www.opendental.com/manual193/insfilingcodes.html" >v19.3</option><option value="https://www.opendental.com/manual192/insfilingcodes.html" >v19.2</option><option value="https://www.opendental.com/manual191/insfilingcodes.html" >v19.1</option><option value="https://www.opendental.com/manual184/insfilingcodes.html" >v18.4</option><option value="https://www.opendental.com/manual183/insfilingcodes.html" >v18.3</option><option value="https://www.opendental.com/manual182/insfilingcodes.html" >v18.2</option><option value="https://www.opendental.com/manual181/insfilingcodes.html" >v18.1</option><option value="https://www.opendental.com/manual174/insfilingcodes.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance Filing Codes</p></div>
<div class="GeneralPageContent">
<p>Insurance Filing Codes are used by Insurance Plans to identify a claim type and are most commonly used when sending electronic claims.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Family/Insurance, Insurance Filing Codes.</p>
<img src="images/insFilingCodes.png" width="628" height="464"/><p>Assign a <i>Filing Code</i> and <i>Filing Code Subtype</i> in the Other Ins Info tab of an <a href="insplan.html">Insurance Plan</a></p>
<p class="MarginBottomZero">Insurance Filing Codes are used:  </p>
<ul class="MarginBottomGap">
<li>To identify claim type on <a href="clearinghouses.html">Electronic Claims</a>.</li>
<li>In <a href="billing.html">Billing</a>, <i>Exclude Filing Codes</i> filter.</li>
<li>In <a href="insverifylistsetup.html">Insurance Verification Setup</a>, <i>Insurance filing code in</i> setting.</li>
</ul>
<p><b>Insurance Filing Codes</b>: The most commonly used filing codes appear in the list by default. Double-click a filing code to edit. Edit Claim Filing Code opens (see below).</p>
<p><b>Add</b>: Create a new Insurance Filing Code.</p>
<p><b>Up</b>/<b>Down</b>: Highlight a filing code in the list and click to reorder. </p>
<h2>Edit Claim Filing Code</h2>
<p>Click <b>Add</b> to create a new filing code or highlight an existing filing code and double-click to edit. Edit Claim Filing Code opens</p>
<img src="images/insFilingCodeAdd.png" width="606" height="423"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Description</b>: Name of the filing code.</li>
<li><b>Eclaim Code</b>: Code that is sent on electronic claim.</li>
<li><b>Group</b>: Groups are useful to query claim and carrier information. Select group from dropdown menu. Groups can be added or edited in <a href="definitionsinsfilingcodes.html">Definitions: Insurance Filing Code Group</a></li>
<li><b>Exclude 'Other Coverage' on Primary Claims</b>: Determine if other coverage information is included on primary claims <ul>
<li>Checked: If this filing code is used for an secondary insurance plan, other coverage information is not sent on a primary claim. </li>
<li>Unchecked: If this filing code is used for an secondary insurance plan, other coverage information is sent on a primary claim.</li>
</ul>
</li>
<li><b>Insurance Filing Code Subtypes</b>: Click Add to create a subtype for this Filing Code. Subtypes can be added to the Insurance Plan.</li>
</ul>
<p><b>Delete</b>: Remove a filing code that is not use by any insurance plans.</p>
<p>Click <b>OK</b> to save.</p>
</div>
</div>
</body>
</html>```
