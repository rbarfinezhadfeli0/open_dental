# File: ./www.opendental.com/manual243/eclipboardimages.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eClipboard Images</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclipboardimages','eclipboardsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eclipboardimages.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eclipboardimages.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclipboardimages.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclipboardimages.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclipboardimages.html" >v23.2</option><option value="https://www.opendental.com/manual231/eclipboardimages.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclipboardimages.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclipboardimages.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclipboardimages.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclipboardimages.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclipboardimages.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclipboardimages.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclipboardimages.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclipboardimages.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclipboardimages.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclipboardimages.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclipboardimages.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclipboardimages.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclipboardimages.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclipboardimages.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclipboardimages.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclipboardimages.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclipboardimages.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclipboardimages.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclipboardimages.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclipboardimages.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclipboardimages.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclipboardimages.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
		<div class="TopBar2"><p>eClipboard Images</p></div>
		<div class="GeneralPageContent">
<p>Set up which images a patient is prompted to take when checking in via eClipboard.</p>
<p>In the <a href="eclipboardsetup.html">eClipboard Setup</a> window, under the Images grid, click <b>Add</b> or double-click an existing image definition to edit.</p>
<img src="images/eClipboardImageCapture.png" width="620" height="526"/><p><b>Definition</b>: Select the eClipboard image definition to include on the eClipboard Check-in Checklist. Instructions display along side the definition. Instructions can be edited in the eClipboard Defs window. </p>
<p><b>Is Self-Portrait</b>: Check to include a self-portrait of the patient to use for the patient picture. When checked, Definition information is hidden.</p>
<p class="MarginBottomZero"><b>Frequency</b>: Determine how often the patient should take these images.  </p>
<ul class="MarginBottomGap">
<li>Once: Only request the image once. </li>
<li>Each Visit: Request an updated image at each visit.</li>
<li>Time Span: Request an updated image at specific intervals in years, months, or days.</li>
</ul>
<p><b>OCR Capture Type</b>: This feature is not yet available.</p>
<p><p><b>Delete</b>: Delete this eClipboard image definition.</p>
</p>
<h2>eClipboard Image Definitions</h2><p>Click <b>Setup</b> to add or edit eClipboard image definitions.</p>
<img src="images/eclipboardImageDefs.png" width="477" height="319"/><p>Click <b>Add</b> to add a new definition, or double-click an existing definition to edit.</p>
<img src="images/eClipboardImageDefsEdit.png" width="469" height="202"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Enter the definition name.</li>
<li><b>Patient Instructions</b>: Enter the instructions. This information displays for the patient on the eClipboard device.</li>
</ul>
		</div>
	</div>
</body>
</html>```
