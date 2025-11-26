# File: ./www.opendental.com/manual/zoomartifacts.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Zoom Artifacts</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('zoomartifacts','zoom','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/zoomartifacts.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/zoomartifacts.html" >v24.2</option><option value="https://www.opendental.com/manual241/zoomartifacts.html" >v24.1</option><option value="https://www.opendental.com/manual233/zoomartifacts.html" >v23.3</option><option value="https://www.opendental.com/manual232/zoomartifacts.html" >v23.2</option><option value="https://www.opendental.com/manual231/zoomartifacts.html" >v23.1</option><option value="https://www.opendental.com/manual224/zoomartifacts.html" >v22.4</option><option value="https://www.opendental.com/manual223/zoomartifacts.html" >v22.3</option><option value="https://www.opendental.com/manual222/zoomartifacts.html" >v22.2</option><option value="https://www.opendental.com/manual221/zoomartifacts.html" >v22.1</option><option value="https://www.opendental.com/manual214/zoomartifacts.html" >v21.4</option><option value="https://www.opendental.com/manual213/zoomartifacts.html" >v21.3</option><option value="https://www.opendental.com/manual212/zoomartifacts.html" >v21.2</option><option value="https://www.opendental.com/manual211/zoomartifacts.html" >v21.1</option><option value="https://www.opendental.com/manual205/zoomartifacts.html" >v20.5</option><option value="https://www.opendental.com/manual204/zoomartifacts.html" >v20.4</option><option value="https://www.opendental.com/manual203/zoomartifacts.html" >v20.3</option><option value="https://www.opendental.com/manual202/zoomartifacts.html" >v20.2</option><option value="https://www.opendental.com/manual201/zoomartifacts.html" >v20.1</option><option value="https://www.opendental.com/manual194/zoomartifacts.html" >v19.4</option><option value="https://www.opendental.com/manual193/zoomartifacts.html" >v19.3</option><option value="https://www.opendental.com/manual192/zoomartifacts.html" >v19.2</option><option value="https://www.opendental.com/manual191/zoomartifacts.html" >v19.1</option><option value="https://www.opendental.com/manual184/zoomartifacts.html" >v18.4</option><option value="https://www.opendental.com/manual183/zoomartifacts.html" >v18.3</option><option value="https://www.opendental.com/manual182/zoomartifacts.html" >v18.2</option><option value="https://www.opendental.com/manual181/zoomartifacts.html" >v18.1</option><option value="https://www.opendental.com/manual174/zoomartifacts.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Zoom Artifacts</p></div>
<div class="GeneralPageContent">
<p>The zoom feature is not perfect, especially with high dpi monitors. Version 23.1 had some improvements, but there are still imperfections that might not even interfere with usage. Zoom Artifacts lists all known artifacts that we do not consider bugs:</p>
<p>The <a href="zoom.html">Zoom</a> feature is not perfect, especially with high dpi monitors and/or high levels of zoom. This version of Open Dental (v 23.1) is much better, but still has imperfections that might not even interfere with usage. Zoom Artifacts lists all known artifacts that we do not consider bugs. We consider them minor annoyances that should not be reported as bugs. We will continue to work on removing them, but not as part of the bugs process. But if text is signifiantly obscured or if it's not functioning properly, then it can be reported as a bug.</p>
<ul>
<li>Radiobuttons look pixelated on some computers, and are a different color on Windows11.</li>
<li>Appointment bubble "thumbnail not avail" is too big.</li>
<li>ListBox scrollbars get slightly wider after hovering over them the first time.</li>
<li>MessageBox dialogs, text is too small.</li>
<li>Numeric up/down controls don't scale well.</li>
<li>HQ internal map, right click, menu font sizes are too small.</li>
<li>Single click proc buttons are in a ListView where the bitmaps are not scaling with the font, both in setup and Chart.</li>
<li>Treeview images always show original size, too small.</li>
<li>SignatureBox buttons needs better icons that scale.</li>
<li>Module button corners are too sharp.</li>
<li>Sheet Def Edit, entire mobile panel has font too small.</li>
<li>TextBoxes throughout the entire program are slightly shorter than original at high dpi. This can cause minor alignment issues.</li>
<li>TextBoxes on Windows11 show with a different style of outline. Instead of a 4 sided box, it looks like an underline.</li>
<li>Most menu items are a pixel or two higher than they should be.</li>
<li>For multi monitor setups, maximizing Open Dental on a display directly underneath another display will cause an 8 pixel tall black bar as wide as Open Dental to appear on the bottom of the directly above screen.</li>
<li>Zoom ranges below 100% are allowed, but user is warned that some text can get cut off.</li>
<li>All monitors should always be at the same MS scale. If different monitors are at different scales, this will cause artifacts such as cut off text.</li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
</div>
</div>
</body>
</html>```
