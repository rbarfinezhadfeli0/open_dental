# File: ./www.opendental.com/manual243/mergeproviders.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Merge Providers</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mergeproviders','+misc','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mergeproviders.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mergeproviders.html" >v24.2</option><option value="https://www.opendental.com/manual241/mergeproviders.html" >v24.1</option><option value="https://www.opendental.com/manual233/mergeproviders.html" >v23.3</option><option value="https://www.opendental.com/manual232/mergeproviders.html" >v23.2</option><option value="https://www.opendental.com/manual231/mergeproviders.html" >v23.1</option><option value="https://www.opendental.com/manual224/mergeproviders.html" >v22.4</option><option value="https://www.opendental.com/manual223/mergeproviders.html" >v22.3</option><option value="https://www.opendental.com/manual222/mergeproviders.html" >v22.2</option><option value="https://www.opendental.com/manual221/mergeproviders.html" >v22.1</option><option value="https://www.opendental.com/manual214/mergeproviders.html" >v21.4</option><option value="https://www.opendental.com/manual213/mergeproviders.html" >v21.3</option><option value="https://www.opendental.com/manual212/mergeproviders.html" >v21.2</option><option value="https://www.opendental.com/manual211/mergeproviders.html" >v21.1</option><option value="https://www.opendental.com/manual205/mergeproviders.html" >v20.5</option><option value="https://www.opendental.com/manual204/mergeproviders.html" >v20.4</option><option value="https://www.opendental.com/manual203/mergeproviders.html" >v20.3</option><option value="https://www.opendental.com/manual202/mergeproviders.html" >v20.2</option><option value="https://www.opendental.com/manual201/mergeproviders.html" >v20.1</option><option value="https://www.opendental.com/manual194/mergeproviders.html" >v19.4</option><option value="https://www.opendental.com/manual193/mergeproviders.html" >v19.3</option><option value="https://www.opendental.com/manual192/mergeproviders.html" >v19.2</option><option value="https://www.opendental.com/manual191/mergeproviders.html" >v19.1</option><option value="https://www.opendental.com/manual184/mergeproviders.html" >v18.4</option><option value="https://www.opendental.com/manual183/mergeproviders.html" >v18.3</option><option value="https://www.opendental.com/manual182/mergeproviders.html" >v18.2</option><option value="https://www.opendental.com/manual181/mergeproviders.html" >v18.1</option><option value="https://www.opendental.com/manual174/mergeproviders.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Merge Providers</p></div>
<div class="GeneralPageContent">
<p>The Merge Provider tool can be used to merge duplicate providers. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Misc Tools, <b>Merge Providers</b>.</p>
<img src="images/providerMerge.png" width="691" height="272"/><p>Merging providers cannot be undone. Only merge providers when they are the same individual/entity and only when necessary (e.g., duplicates). The <i>Provider Merge </i><a href="permissions.html">Security Permission</a> is required to run this tool.</p>
<div class="Note">Note: To reassign patients from one provider to another, consider moving or reassigning providers instead. See Lists, <a href="providers.html">Providers</a> for details.</div>
<p class="MarginBottomZero">To merge duplicate providers: </p>
<ol class="MarginBottomGap">
<li>Select the <i>Provider to merge into</i>. Click <b>Change</b> to select a provider from the <a href="providers.html">Providers</a> list to keep.</li>
<li>Select the <i>Provider to merge from</i>. Click <b>Change</b> to select the provider that will merge into the provider selected above and be marked deleted from the Providers list. <ul>
<li>Check <b>Show Deleted</b> to see hidden or deleted providers when selecting.</li>
</ul>
</li>
<li>Click <b>Merge</b> to combine the providers.</li>
<li>There is a warning that the results are permanent and cannot be undone. Click <b>Yes</b> to proceed with the merge.</li>
<img src="images/medicationMergeConfirm.png" width="379" height="133"/><li>If provider full names or NPIs do not match, there is an additional warning. The warning indicates the type of mismatched information, and the number of claims and active patients connected to the <i>Provider to merge from</i>. Click <b>OK</b> to confirm the merge. Click <b>Cancel</b> to stop the merge. <ul>
<li>If provider full names and NPIs match, this warning is not shown and the merge is completed immediately upon clicking Yes from Step 4.</li>
</ul>
</li>
<img src="images/providerMergeNoMatch.png" width="407" height="185"/><li>Once the merge is complete, a <i>Done</i> message appears. </li>
</ol>
<p>After a successful merge, the <i>Provider to merge into</i> (Step 1) is reassigned wherever the <i> Provider to merge from</i> (Step 2) was assigned throughout the entire database (including, but not limited to adjustments, appointments, claims, patients, payments, procedures, etc.). The <i>Provider to merge from</i> is viewable from the Providers List when checking <i>Show Deleted</i>. </p>
<p>The <i>Provider to merge from</i> assignment is not replaced in <a href="publichealthscreenings.html">Public Health Screening</a> or <a href="hl7labcorp.html">LabCorp HL7</a> lab orders.</p>
</div>
</div>
</body>
</html>```
