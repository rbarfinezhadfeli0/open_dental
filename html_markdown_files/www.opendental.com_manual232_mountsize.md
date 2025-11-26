# File: ./www.opendental.com/manual232/mountsize.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Mount Size</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mountsize','images','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/mountsize.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/mountsize.html" >v24.2</option><option value="https://www.opendental.com/manual241/mountsize.html" >v24.1</option><option value="https://www.opendental.com/manual233/mountsize.html" >v23.3</option><option value="https://www.opendental.com/manual232/mountsize.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/mountsize.html" >v23.1</option><option value="https://www.opendental.com/manual224/mountsize.html" >v22.4</option><option value="https://www.opendental.com/manual223/mountsize.html" >v22.3</option><option value="https://www.opendental.com/manual222/mountsize.html" >v22.2</option><option value="https://www.opendental.com/manual221/mountsize.html" >v22.1</option><option value="https://www.opendental.com/manual214/mountsize.html" >v21.4</option><option value="https://www.opendental.com/manual213/mountsize.html" >v21.3</option><option value="https://www.opendental.com/manual212/mountsize.html" >v21.2</option><option value="https://www.opendental.com/manual211/mountsize.html" >v21.1</option><option value="https://www.opendental.com/manual205/mountsize.html" >v20.5</option><option value="https://www.opendental.com/manual204/mountsize.html" >v20.4</option><option value="https://www.opendental.com/manual203/mountsize.html" >v20.3</option><option value="https://www.opendental.com/manual202/mountsize.html" >v20.2</option><option value="https://www.opendental.com/manual201/mountsize.html" >v20.1</option><option value="https://www.opendental.com/manual194/mountsize.html" >v19.4</option><option value="https://www.opendental.com/manual193/mountsize.html" >v19.3</option><option value="https://www.opendental.com/manual192/mountsize.html" >v19.2</option><option value="https://www.opendental.com/manual191/mountsize.html" >v19.1</option><option value="https://www.opendental.com/manual184/mountsize.html" >v18.4</option><option value="https://www.opendental.com/manual183/mountsize.html" >v18.3</option><option value="https://www.opendental.com/manual182/mountsize.html" >v18.2</option><option value="https://www.opendental.com/manual181/mountsize.html" >v18.1</option><option value="https://www.opendental.com/manual174/mountsize.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Mount Size</p></div>
<div class="GeneralPageContent">
<p>View image size details or rotate images from the Item Size window.</p>
<p>In the <a href="images.html">Imaging Module</a>, select an image or image within a mount. In the toolbar, click <b>Size/Rotation</b>.</p>
<img src="images/imagesItemSize.png" width="526" height="254"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Raw Image Size</b>: Displays the image size in pixels.</li>
<li><b>Is Flipped Horizontally</b>: Check to flip the image horizontally.</li>
<li><b>Degrees Rotated</b>: Rotate the image by any number of degrees.</li>
<br/><li><b>Crop Reset</b>: Only available if an image has been cropped. Click to remove a crop from the image.</li>
<li><b>Reset All</b>: Only available if an image has been edited. Click to reset an image to its original size and orientation.</li>
</ul>
<p>Click <b>OK </b>to save.</p>
<h2>Mount Size</h2>
<p>These settings only affect the selected item on a mount.</p>
<img src="images/imagesMountSize.png" width="459" height="277"/><ul>
<li><b>Raw Image Size</b>: Displays the raw image size in pixels.</li>
<li><b>Mount Item Size</b>: Displays the size of the mount item that this image is within. For radiographs, this is typically the same as the raw image size.</li>
<li><b>Is flipped Horizontally</b>: Check this box to flip the image horizontally. </li>
<li><b>Degrees Rotated</b>: Rotate the image by any number of degrees.</li>
<li><b>Zoom Fit</b>: Zoom level relative to a perfect fit in the mount.</li>
<li><b>Zoom Orig</b>: Cannot be changed. Shows zoom level relative to original image.</li>
<br/><li><b>100% Pix</b>: Click to set a zoom level that causes the image to be 100% pixel match.</li>
<li><b>Fit</b>: Click to set the default zoom level where the image fits within the mount with possible bands on the sides or top/bottom.</li>
<li><b>Expand Fill</b>: Click to set a zoom level that completely fills the mount and crops out any extra on the sides or top/bottom.</li>
</ul>
<p></p>
<p>Click <b>OK </b>to save.</p>
</div>
</div>
</body>
</html>```
