# File: ./www.opendental.com/manual/laboratories.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Laboratories</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('laboratories','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/laboratories.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/laboratories.html" >v24.2</option><option value="https://www.opendental.com/manual241/laboratories.html" >v24.1</option><option value="https://www.opendental.com/manual233/laboratories.html" >v23.3</option><option value="https://www.opendental.com/manual232/laboratories.html" >v23.2</option><option value="https://www.opendental.com/manual231/laboratories.html" >v23.1</option><option value="https://www.opendental.com/manual224/laboratories.html" >v22.4</option><option value="https://www.opendental.com/manual223/laboratories.html" >v22.3</option><option value="https://www.opendental.com/manual222/laboratories.html" >v22.2</option><option value="https://www.opendental.com/manual221/laboratories.html" >v22.1</option><option value="https://www.opendental.com/manual214/laboratories.html" >v21.4</option><option value="https://www.opendental.com/manual213/laboratories.html" >v21.3</option><option value="https://www.opendental.com/manual212/laboratories.html" >v21.2</option><option value="https://www.opendental.com/manual211/laboratories.html" >v21.1</option><option value="https://www.opendental.com/manual205/laboratories.html" >v20.5</option><option value="https://www.opendental.com/manual204/laboratories.html" >v20.4</option><option value="https://www.opendental.com/manual203/laboratories.html" >v20.3</option><option value="https://www.opendental.com/manual202/laboratories.html" >v20.2</option><option value="https://www.opendental.com/manual201/laboratories.html" >v20.1</option><option value="https://www.opendental.com/manual194/laboratories.html" >v19.4</option><option value="https://www.opendental.com/manual193/laboratories.html" >v19.3</option><option value="https://www.opendental.com/manual192/laboratories.html" >v19.2</option><option value="https://www.opendental.com/manual191/laboratories.html" >v19.1</option><option value="https://www.opendental.com/manual184/laboratories.html" >v18.4</option><option value="https://www.opendental.com/manual183/laboratories.html" >v18.3</option><option value="https://www.opendental.com/manual182/laboratories.html" >v18.2</option><option value="https://www.opendental.com/manual181/laboratories.html" >v18.1</option><option value="https://www.opendental.com/manual174/laboratories.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Laboratories</p></div>
<div class="GeneralPageContent">
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Laboratories.</p>
<img src="images/laboratories.png" width="729" height="338"/><p>The Laboratory list contains details about the laboratories an office sends <a href="labcaseedit.html">Lab Cases</a> to.</p>
<p>Click <b>Add</b> to create a new lab or double-click on an existing lab to edit.</p>
<img src="images/labEdit.gif" width="696" height="503"/><p class="MarginBottomZero">Enter lab details: </p>
<ul class="MarginBottomGap">
<li>Description: Name of laboratory.</li>
<li>Phone: Contact phone number.</li>
<li>Wireless Phone: Additional contact phone number.</li>
<li>Address: Laboratory address.</li>
<li>City / State / Zip: City, state, and zip code of laboratory.</li>
<li>Email: Email address for laboratory.</li>
<li>Notes: Any related notes for the laboratory.</li>
</ul>
<p><b>Is Hidden</b>: Check to hide laboratories no longer in use.</p>
<p><b>Lab Slip:</b> Select the default lab slip sheet template to use for this lab. See <a href="sheetslabslips.html">Lab Slip Layout</a> to customize a lab slip.</p>
<p><b>Turnaround Times:</b> Enter turnaround times for services provided by the lab. Adding, editing, and deleting turnaround times affects due date calculations for future lab cases, not existing ones. </p>
<p>Click <b>Add</b>, or double-click a service to edit.</p>
<img src="images/labTurnaround.gif" width="463" height="225"/><p class="MarginBottomZero">Enter the turnaround information:  </p>
<ul class="MarginBottomGap">
<li><b>Service Description: </b> The service offered by the lab. </li>
<li><b>Days Published: </b>The turnaround time published by the lab.</li>
<li><b>Actual Days:</b> Might be one or two days longer to account for travel time or padding time.</li>
</ul>
</div>
</div>
</body>
</html>```
