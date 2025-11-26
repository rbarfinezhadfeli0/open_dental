# File: ./www.opendental.com/manual232/scanners.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Scanners</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('scanners','computernetworksetup','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/scanners.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/scanners.html" >v24.2</option><option value="https://www.opendental.com/manual241/scanners.html" >v24.1</option><option value="https://www.opendental.com/manual233/scanners.html" >v23.3</option><option value="https://www.opendental.com/manual232/scanners.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/scanners.html" >v23.1</option><option value="https://www.opendental.com/manual224/scanners.html" >v22.4</option><option value="https://www.opendental.com/manual223/scanners.html" >v22.3</option><option value="https://www.opendental.com/manual222/scanners.html" >v22.2</option><option value="https://www.opendental.com/manual221/scanners.html" >v22.1</option><option value="https://www.opendental.com/manual214/scanners.html" >v21.4</option><option value="https://www.opendental.com/manual213/scanners.html" >v21.3</option><option value="https://www.opendental.com/manual212/scanners.html" >v21.2</option><option value="https://www.opendental.com/manual211/scanners.html" >v21.1</option><option value="https://www.opendental.com/manual205/scanners.html" >v20.5</option><option value="https://www.opendental.com/manual204/scanners.html" >v20.4</option><option value="https://www.opendental.com/manual203/scanners.html" >v20.3</option><option value="https://www.opendental.com/manual202/scanners.html" >v20.2</option><option value="https://www.opendental.com/manual201/scanners.html" >v20.1</option><option value="https://www.opendental.com/manual194/scanners.html" >v19.4</option><option value="https://www.opendental.com/manual193/scanners.html" >v19.3</option><option value="https://www.opendental.com/manual192/scanners.html" >v19.2</option><option value="https://www.opendental.com/manual191/scanners.html" >v19.1</option><option value="https://www.opendental.com/manual184/scanners.html" >v18.4</option><option value="https://www.opendental.com/manual183/scanners.html" >v18.3</option><option value="https://www.opendental.com/manual182/scanners.html" >v18.2</option><option value="https://www.opendental.com/manual181/scanners.html" >v18.1</option><option value="https://www.opendental.com/manual174/scanners.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Scanners</p></div>
<div class="GeneralPageContent">
<p>See <a href="computernetworksetup.html">Network and Computer Setup</a>.</p>
<p>For ordinary scanning that does not require transparencies, nearly any scanner with an installed TWAIN driver works with the <a href="images.html">Imaging Module</a>. This page discusses known successes and problems with various scanners. </p>
<h2>Successful Scanners</h2>
<p>The following scanners are known to work well with Open Dental.</p>
<p class="MarginBottomZero"><b>Known to work for duplex (multi-page) scanning</b>: </p>
<ul class="MarginBottomGap">
<li>Fi-8170 </li>
<li>Fi-8270 </li>
<li>Fi-8040</li>
<li>Epson DS-320</li>
<li>Epson Workforce DS-510</li>
</ul>
<h2>Unsuccessful Scanners</h2>
<p>The following scanners have reported problems when scanning in Open Dental.</p>
<p class="MarginBottomZero"><b>Known to have problems</b>: </p>
<ul class="MarginBottomGap">
<li>DocketPORT 488: Multi-page scanning doesn't work.</li>
<li>Fujitsu ScanSnap: Allows for fast scanning of documents using a document feeder. It does not have a flatbed for radiographs. It uses OCR (Optical Character Recognition) and advanced software to scan directly to PDF instead of JPG. </li>
</ul>
<h2>Transparency Scanners</h2>
<p>To use a transparency scanner, scan using the scanner software and then import the image into Open Dental.</p>
<h2>Troubleshooting Scanners</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Check to make sure the scanner can be used outside of Open Dental (e.g., Windows Fax and Scan). If the scanner doesn't work outside of Open Dental, it will not work inside of Open Dental.</li>
<li>Check to see if the scanner came with a TWAIN or WIA driver. If not, install a generic TWAIN driver.</li>
<li>Try to update the driver from the manufacturer's website. If driver update fails, try using Microsoft Update.</li>
<li>Sometimes, newer drivers are not well tested by the manufacturer and can cause unpredictable scanning results (Open Dental hanging after one scan, or Open Dental taking up 50% of the CPU waiting for the scanner, etc.). In this case, installing an older more stable driver can sometimes fix the issue. For example, the Epson GT-S50 issue was resolved by installing drivers from the CD.</li>
</ul>
</div>
</div>
</body>
</html>```
