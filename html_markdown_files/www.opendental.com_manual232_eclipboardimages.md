# File: ./www.opendental.com/manual232/eclipboardimages.html

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
						}"><option value="https://www.opendental.com/manual243/eclipboardimages.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/eclipboardimages.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclipboardimages.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclipboardimages.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclipboardimages.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/eclipboardimages.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclipboardimages.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclipboardimages.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclipboardimages.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclipboardimages.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclipboardimages.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclipboardimages.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclipboardimages.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclipboardimages.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclipboardimages.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclipboardimages.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclipboardimages.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclipboardimages.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclipboardimages.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclipboardimages.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclipboardimages.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclipboardimages.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclipboardimages.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclipboardimages.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclipboardimages.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclipboardimages.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclipboardimages.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclipboardimages.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eClipboard Images</p></div>
<div class="GeneralPageContent">
<p>Set up which images a patient is prompted to take when checking in via eClipboard.</p>
<p>In the <a href="eclipboardsetup.html">eClipboard Setup</a> window, next to Prompt for Image Capture, click <b>Edit</b>.</p>
<img src="images/eClipboardImageCapture.png" width="914" height="437"/><p class="MarginBottomZero"><b>Available eClipboard Images</b>: Lists Image Definitions available for use. Default definitions include: </p>
<ul class="MarginBottomGap">
<li>Photo ID Front: Prompt the patient to take a photo of the front of their Photo ID.</li>
<li>Photo ID Back: Prompt the patient to take a photo of the back of their Photo ID.</li>
<li>Insurance Card Front: Prompt the patient to take a photo of the front of their insurance card. </li>
<li>Insurance Card Back: Prompt the patient to take a photo of the back of their insurance card. </li>
<li>Self Portrait: Prompt the patient to take a <a href="patientpictures.html">Patient Picture</a>. This item is not available in Definitions.</li>
<li>To add or edit definitions, see <a href="definitionseclipboardimages.html">Definitions: eClipboard Images</a>.</li>
</ul>
<p><b>eClipboard Images in Use</b>: Lists Image Definitions in use. Patients are prompted to take pictures of these items upon check-in. Each option shows as a separate item in the eClipboard check-in checklist. Pictures are immediately imported into the <i>eClipboard</i> folder in the Imaging Module.</p>
<p>Highlight a definition, then use the left <b>Remove</b> and right <b>Select</b> arrows to move the item to or from the appropriate column.</p>
<h2>Images in Use</h2>
<p>Double-click an item in the eClipboard <i>Images in Use</i> column to edit the frequency. </p>
<img src="images/eClipboardImageFreq.png" width="500" height="170"/><p class="MarginBottomZero">Enter how often, in days, the patient should resubmit this image. </p>
<ul class="MarginBottomGap">
<li>Enter 0 for the patient to submit a new image at every check-in.</li>
<li>Enter an unusually high number (e.g., 1,000,000) if the image only needs submitted once.</li>
</ul>
</div>
</div>
</body>
</html>```
