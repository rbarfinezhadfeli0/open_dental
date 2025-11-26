# File: ./www.opendental.com/manual243/videocapture.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Video Capture</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('videocapture','images','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/videocapture.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/videocapture.html" >v24.2</option><option value="https://www.opendental.com/manual241/videocapture.html" >v24.1</option><option value="https://www.opendental.com/manual233/videocapture.html" >v23.3</option><option value="https://www.opendental.com/manual232/videocapture.html" >v23.2</option><option value="https://www.opendental.com/manual231/videocapture.html" >v23.1</option><option value="https://www.opendental.com/manual224/videocapture.html" >v22.4</option><option value="https://www.opendental.com/manual223/videocapture.html" >v22.3</option><option value="https://www.opendental.com/manual222/videocapture.html" >v22.2</option><option value="https://www.opendental.com/manual221/videocapture.html" >v22.1</option><option value="https://www.opendental.com/manual214/videocapture.html" >v21.4</option><option value="https://www.opendental.com/manual213/videocapture.html" >v21.3</option><option value="https://www.opendental.com/manual212/videocapture.html" >v21.2</option><option value="https://www.opendental.com/manual211/videocapture.html" >v21.1</option><option value="https://www.opendental.com/manual205/videocapture.html" >v20.5</option><option value="https://www.opendental.com/manual204/videocapture.html" >v20.4</option><option value="https://www.opendental.com/manual203/videocapture.html" >v20.3</option><option value="https://www.opendental.com/manual202/videocapture.html" >v20.2</option><option value="https://www.opendental.com/manual201/videocapture.html" >v20.1</option><option value="https://www.opendental.com/manual194/videocapture.html" >v19.4</option><option value="https://www.opendental.com/manual193/videocapture.html" >v19.3</option><option value="https://www.opendental.com/manual192/videocapture.html" >v19.2</option><option value="https://www.opendental.com/manual191/videocapture.html" >v19.1</option><option value="https://www.opendental.com/manual184/videocapture.html" >v18.4</option><option value="https://www.opendental.com/manual183/videocapture.html" >v18.3</option><option value="https://www.opendental.com/manual182/videocapture.html" >v18.2</option><option value="https://www.opendental.com/manual181/videocapture.html" >v18.1</option><option value="https://www.opendental.com/manual174/videocapture.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Video Capture</p></div>
<div class="GeneralPageContent">
<p>Use a live feed to take images and intraoral photos.</p>
<p>In the <a href="images.html">Imaging Module</a>, click <b>Video</b>.</p>
<img src="images/imagingVideo.png" width="421" height="336"/><p>Any webcam or intraoral camera should be compatible with Open Dental. For additional details, see <a href="imagingcameracompatibility.html">Imaging Camera Compatibility</a></p>
<p><div class="Note">Note: An active registration key is required to use Video except in the Trial Version. Video Capture is not available for Open Dental Cloud.</div>
</p>
<p><b>Camera</b>: Select the camera to use. </p>
<p><b>Capture</b>: Click to capture the image or use the space bar.</p>
<p><b>Close</b>: Click to close the live feed.</p>
<p class="MarginBottomZero">Where an image is saved depends on the following: </p>
<ul class="MarginBottomGap">
<li>If an image is taken directly onto a mount, the image is saved to the mount.</li>
<li>If a default category is selected for <i>Default Image Category for video capture</i> in Preferences, the image is saved to the default category. </li>
<li>If no <i>Default Image Category for video capture</i> is set, the image is saved to <i>Default Image Category</i> in Preferences.</li>
<li>If no <i>Default Image Category for video capture</i> and no <i>Default Image Category</i> is set, the image is saved to the currently selected image category.</li>
<li>If no <i>Default Image Category</i> is set, no <i>Default Image Category for video capture</i> is set, and no image category is selected, the image is saved to the top-most image category. </li>
</ul>
</div>
</div>
</body>
</html>```
