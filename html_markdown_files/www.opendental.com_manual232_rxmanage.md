# File: ./www.opendental.com/manual232/rxmanage.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Rx Manage</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('rxmanage','rx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/rxmanage.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/rxmanage.html" >v24.2</option><option value="https://www.opendental.com/manual241/rxmanage.html" >v24.1</option><option value="https://www.opendental.com/manual233/rxmanage.html" >v23.3</option><option value="https://www.opendental.com/manual232/rxmanage.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/rxmanage.html" >v23.1</option><option value="https://www.opendental.com/manual224/rxmanage.html" >v22.4</option><option value="https://www.opendental.com/manual223/rxmanage.html" >v22.3</option><option value="https://www.opendental.com/manual222/rxmanage.html" >v22.2</option><option value="https://www.opendental.com/manual221/rxmanage.html" >v22.1</option><option value="https://www.opendental.com/manual214/rxmanage.html" >v21.4</option><option value="https://www.opendental.com/manual213/rxmanage.html" >v21.3</option><option value="https://www.opendental.com/manual212/rxmanage.html" >v21.2</option><option value="https://www.opendental.com/manual211/rxmanage.html" >v21.1</option><option value="https://www.opendental.com/manual205/rxmanage.html" >v20.5</option><option value="https://www.opendental.com/manual204/rxmanage.html" >v20.4</option><option value="https://www.opendental.com/manual203/rxmanage.html" >v20.3</option><option value="https://www.opendental.com/manual202/rxmanage.html" >v20.2</option><option value="https://www.opendental.com/manual201/rxmanage.html" >v20.1</option><option value="https://www.opendental.com/manual194/rxmanage.html" >v19.4</option><option value="https://www.opendental.com/manual193/rxmanage.html" >v19.3</option><option value="https://www.opendental.com/manual192/rxmanage.html" >v19.2</option><option value="https://www.opendental.com/manual191/rxmanage.html" >v19.1</option><option value="https://www.opendental.com/manual184/rxmanage.html" >v18.4</option><option value="https://www.opendental.com/manual183/rxmanage.html" >v18.3</option><option value="https://www.opendental.com/manual182/rxmanage.html" >v18.2</option><option value="https://www.opendental.com/manual181/rxmanage.html" >v18.1</option><option value="https://www.opendental.com/manual174/rxmanage.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Rx Manage</p></div>
<div class="GeneralPageContent">
<p>Use Rx Manage to prescribe and manage paper prescriptions for the selected patient.</p>
<p>In the <a href="chart.html">Chart Module</a> toolbar, click the <a href="rx.html">New Rx</a> drop down. Select <b>Rx Manage</b>.</p>
<img src="images/rxManage.gif" width="900" height="375"/><p>All of the patient's prescriptions that already exist will show. To edit a prescription, double-click the row.</p>
<p class="MarginBottomZero">Setup: </p>
<ul class="MarginBottomGap">
<li><a href="rxsetup.html">Rx / Prescriptions List</a>: Create templates for common prescriptions and set up drug interaction alerts based on allergies, medications, and/or problems.</li>
<li><a href="sheetsrxmulti.html">Rx Multiple Layout</a>: Customize the print layout when printing multiple prescriptions per page.</li>
</ul>
<p class="MarginBottomZero">Options:  </p>
<ul class="MarginBottomGap">
<li><b>New Rx</b>: Add a new prescription. See <a href="rx.html">Rx / Prescription</a>.</li>
<li><b>Print Selected</b>: Highlight the prescriptions, then click to print. The prescriptions will print to the default printer for RxMulti (see <a href="printersetup.html">Printer Setup</a>), using the custom RxMulti sheet listed first in Sheet Setup (or the internal sheet if no custom sheet exists). If there are any unused Rx Sheets (e.g., only three prescriptions on a four printout sheet), the unused sheets will be printed with <i>VOID</i> over the top to prevent any editing.</li>
</ul>
<p>Prescriptions are not previewed before printing, thus they cannot be digitally signed before printing.</p>
<p>Below is an example of the print layout for the internal RxMulti sheet.</p>
<img src="images/rxmulti.gif" width="906" height="702"/></div>
</div>
</body>
</html>```
