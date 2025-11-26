# File: ./www.opendental.com/manual232/reportcomplex.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Complex Report System</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportcomplex','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportcomplex.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportcomplex.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportcomplex.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportcomplex.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportcomplex.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportcomplex.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportcomplex.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportcomplex.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportcomplex.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportcomplex.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportcomplex.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportcomplex.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportcomplex.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportcomplex.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportcomplex.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportcomplex.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportcomplex.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportcomplex.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportcomplex.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportcomplex.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportcomplex.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportcomplex.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportcomplex.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportcomplex.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportcomplex.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportcomplex.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportcomplex.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportcomplex.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Complex Report System</p></div>
<div class="GeneralPageContent">
<p>When generating <a href="reportsstandard.html">Standard Reports</a>, a menu bar appears at the top of the report preview to allow users to print, export, zoom and more.</p>
<img src="images/reportsComplex.gif" width="423" height="60"/><p><b>Print:</b> Print the report to the default printer. See <a href="printersetup.html">Printer Setup</a>.<br/><div class="Note">Note: If needing to print a page range, set your Printer Setup to prompt before printing. In the printer settings prompt, set the page range you wish to print.</div>
</p>
<p><b>Blue arrows:</b> Click the left arrow to move back one page; click the right arrow to move to the next page.</p>
<p><b>Page numbers:</b> Indicates the page currently showing and total pages in report. Type in a page number and press Enter to jump to that page.</p>
<p><b>Plus/minus magnifying glass:</b> Zoom in/out on the report.</p>
<p><b>100:</b> Return to 100% view.</p>
<p><b>Wrap Text:</b> Click to toggle text wrapping on/off in the selected report when printing long columns. Set the default in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a>.</p>
<p><b>Export:</b> Save the report information as a txt or xls file.</p>
</div>
</div>
</body>
</html>```
