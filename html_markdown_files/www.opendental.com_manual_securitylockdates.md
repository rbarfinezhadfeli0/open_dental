# File: ./www.opendental.com/manual/securitylockdates.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Security Lock Dates</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('securitylockdates','security','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/securitylockdates.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/securitylockdates.html" >v24.2</option><option value="https://www.opendental.com/manual241/securitylockdates.html" >v24.1</option><option value="https://www.opendental.com/manual233/securitylockdates.html" >v23.3</option><option value="https://www.opendental.com/manual232/securitylockdates.html" >v23.2</option><option value="https://www.opendental.com/manual231/securitylockdates.html" >v23.1</option><option value="https://www.opendental.com/manual224/securitylockdates.html" >v22.4</option><option value="https://www.opendental.com/manual223/securitylockdates.html" >v22.3</option><option value="https://www.opendental.com/manual222/securitylockdates.html" >v22.2</option><option value="https://www.opendental.com/manual221/securitylockdates.html" >v22.1</option><option value="https://www.opendental.com/manual214/securitylockdates.html" >v21.4</option><option value="https://www.opendental.com/manual213/securitylockdates.html" >v21.3</option><option value="https://www.opendental.com/manual212/securitylockdates.html" >v21.2</option><option value="https://www.opendental.com/manual211/securitylockdates.html" >v21.1</option><option value="https://www.opendental.com/manual205/securitylockdates.html" >v20.5</option><option value="https://www.opendental.com/manual204/securitylockdates.html" >v20.4</option><option value="https://www.opendental.com/manual203/securitylockdates.html" >v20.3</option><option value="https://www.opendental.com/manual202/securitylockdates.html" >v20.2</option><option value="https://www.opendental.com/manual201/securitylockdates.html" >v20.1</option><option value="https://www.opendental.com/manual194/securitylockdates.html" >v19.4</option><option value="https://www.opendental.com/manual193/securitylockdates.html" >v19.3</option><option value="https://www.opendental.com/manual192/securitylockdates.html" >v19.2</option><option value="https://www.opendental.com/manual191/securitylockdates.html" >v19.1</option><option value="https://www.opendental.com/manual184/securitylockdates.html" >v18.4</option><option value="https://www.opendental.com/manual183/securitylockdates.html" >v18.3</option><option value="https://www.opendental.com/manual182/securitylockdates.html" >v18.2</option><option value="https://www.opendental.com/manual181/securitylockdates.html" >v18.1</option><option value="https://www.opendental.com/manual174/securitylockdates.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Security Lock Dates</p></div>
<div class="GeneralPageContent">
<p>Global lock dates prevent editing of old items and are, additionally, the only way to prevent backdating of new items. </p>
<p>In the <a href="securitysettings.html">Global Security Settings</a> window, near the bottom, is the Global Lock section.</p>
<img src="images/securityGlobalLock.png" width="272" height="101"/><p>See the full list of <a href="permissions.html">Permissions</a> to identify which permissions are affected by global lock dates.</p>
<p>Click <b>Change</b> to open the Lock Date window shown below.</p>
<img src="images/securityLockDate.png" width="472" height="326"/><p><b>Date</b>: Enter a specific date (e.g., 12/31/2021) to lock this date and all prior dates. This is frequently used to close out each year.</p>
<p><b>Days</b>: Enter a number to lock items after a set number of days. Changes are only be allowed before the set amount of days. Entering 1 allows changes for the current day only. </p>
<p><b>Lock includes administrators</b>: Check to apply the limitation to users with the <a href="permissionssecurityadmin.html">"Security Admin" Permission</a>. Uncheck to allow users with the Security Admin permission to bypass the global lock date. </p>
<p><div class="Note">Note: <ul>
<li>If setting global lock dates, we recommend showing write-offs in reports using insurance payment date. See <a href="writeoffstoproduction.html">Show Insurance Write-offs</a>.</li>
<li><a href="procedurecodeedit.html">Procedure Codes</a> and <a href="sheetproperties.html">Sheets</a>, have the option to bypass this global lock. Check <i>Bypass Global Lock Date</i> for each sheet or procedure code. </li>
</ul>
</div>
</p>
<h2>User Group Lock Dates</h2>
<p>Date and day limitations can also be set on individual permissions per <a href="securityusergroups.html">User Group</a>. These limitations show in the main <a href="security.html">Security</a> window, at the right as<i> (if date/days newer than...)</i>.</p>
<p>The limitations for User Groups are based on the date the item was entered, not necessarily the date that shows in the patient account. This means that backdating is allowed because the entry date is tracked. Use global locks above to prevent backdating of new items.</p>
<p><div class="Note">Note: If both user group and global lock dates are set, the more restrictive lock date is applied. </div>
</p>
</div>
</div>
</body>
</html>```
