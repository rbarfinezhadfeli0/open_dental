# File: ./www.opendental.com/manual/sheetsstaticimage.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sheet Static Image</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsstaticimage','sheetsetup','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/sheetsstaticimage.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/sheetsstaticimage.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsstaticimage.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsstaticimage.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsstaticimage.html" >v23.2</option><option value="https://www.opendental.com/manual231/sheetsstaticimage.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsstaticimage.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsstaticimage.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsstaticimage.html" >v22.2</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sheet Static Image</p></div>
<div class="GeneralPageContent">
<p>Static images allow users to add background images, logos and more to sheet layouts.</p>
<p>In <a href="sheetsetup.html">Edit Sheet Def</a>, click <b>Static Image</b>.</p>
<img src="images/sheetImage.png" width="603" height="516"/><p>Static images are large or small images (<a href="sheetsaddelements.html">Sheet Field Types</a>) that can be imported into sheets. Images can be used for an entire background based on a scanned form or as smaller graphics (e.g., logos).</p>
<div class="Note">Note: <ul>
<li>Supported image types are jpg, gif, png, tif, bmp. <br/> Word and PDF files must be converted to a supported image type before they can be imported. (Open Dental support cannot assist in converting file types. There are many resources available, such as the Snipping Tool in Windows, online PDF converters, and more.)</li>
<li>Static Images will not display in Mobile Layout.</li>
<li>Image sizes should not exceed the size of the sheet minus the margins (e.g., 850 x1000). White space (for example, the bottom of a scanned image) should be cropped out. Smaller file sizes are less likely to have any loading issues.</li>
<li>To add images that are patient specific, see <a href="sheetspatimage.html">Sheet Patient Image</a>.</li>
<li>Small images may make lines and rectangles not show. To fix, add a larger background image as well.</li>
<li>Images are not tied to signatures. Changes to an image do not clear or invalidate a signature. Place information that should invalidate a signature in a text field instead.</li>
<li>Images should not be overlayed because there is no way to determine which image shows on top/bottom. </li>
<li>Images with transparency are not supported. When viewing a sheet as a Web Form, transparency may be displayed as black.</li>
</ul>
</div>
<br/><br/><p><b>File Name</b>: Click the dropdown arrow to select an image from the <b>OpenDentImages/SheetImages</b> folder. Or click <b>Import</b> to select another image file. A preview of the image will show in the middle of the window.</p>
<p><b>X/Y Pos</b>: Determines the position of the upper left corner of the image on the sheet in relation to the x and y axis. X = horizontal. Y = vertical.</p>
<p><b>Width/Height</b>: The size of the image in pixels. To quickly resize an image to the largest size that will fit in the window, click <b>Shrink to Fit</b>. The <i>File Size</i> indicates the image's original size.</p>
<p><b>Maintain Ratio</b>: Check this box to maintain the same height to width ratio when resizing an image.</p>
<h2>Clinic Specific Images</h2>
<p>If using clinics, images can change depending on which clinic the sheet is generated from. For example, if the office logo changes from one clinic to another, users can set up the sheet to use the clinic-specific logo.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>First customize the sheet and import a default image (e.g., Logo1.jpg).</li>
<li>In <a href="atozfolder.html">OpenDentImages</a>, locate the <b>SheetImages</b> folder. This is where images for sheets are stored.</li>
<li>Create a sub folder for each clinic using the Clinic ID.  <ul>
<li>The Clinic ID can be found in the <a href="cliniceditwindow.html">Edit Clinic</a> window.</li>
<li>Each sub folder should be named with the Clinic ID. For example, if the Clinic ID is 42, the folder would be <b>\\SERVER\OpenDentImages\SheetImages\42</b>.</li>
</ul>
</li>
<li>Place the new images into their respective clinic's folder. Ensure the image name is the same as the default (e.g. Logo1.jpg).</li>
</ol>
<p>In Open Dental, select the clinic from the dropdown, then generate the sheet. If a clinic-level image exists, that image will be used on the sheet. If no clinic-level image exists, the default image will be used. </p>
<p><div class="Note">Note: Clinic-level images are not currently supported for <a href="../site/webforms.html">Web Forms Feature</a> or <a href="sheetspatimage.html">Sheet Patient Image</a>.</div>
</p>
</div>
</div>
</body>
</html>```
