# File: ./www.opendental.com/manual243/mountinfo.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Mount Info</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mountinfo','images','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mountinfo.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mountinfo.html" >v24.2</option><option value="https://www.opendental.com/manual241/mountinfo.html" >v24.1</option><option value="https://www.opendental.com/manual233/mountinfo.html" >v23.3</option><option value="https://www.opendental.com/manual232/mountinfo.html" >v23.2</option><option value="https://www.opendental.com/manual231/mountinfo.html" >v23.1</option><option value="https://www.opendental.com/manual224/mountinfo.html" >v22.4</option><option value="https://www.opendental.com/manual223/mountinfo.html" >v22.3</option><option value="https://www.opendental.com/manual222/mountinfo.html" >v22.2</option><option value="https://www.opendental.com/manual221/mountinfo.html" >v22.1</option><option value="https://www.opendental.com/manual214/mountinfo.html" >v21.4</option><option value="https://www.opendental.com/manual213/mountinfo.html" >v21.3</option><option value="https://www.opendental.com/manual212/mountinfo.html" >v21.2</option><option value="https://www.opendental.com/manual211/mountinfo.html" >v21.1</option><option value="https://www.opendental.com/manual205/mountinfo.html" >v20.5</option><option value="https://www.opendental.com/manual204/mountinfo.html" >v20.4</option><option value="https://www.opendental.com/manual203/mountinfo.html" >v20.3</option><option value="https://www.opendental.com/manual202/mountinfo.html" >v20.2</option><option value="https://www.opendental.com/manual201/mountinfo.html" >v20.1</option><option value="https://www.opendental.com/manual194/mountinfo.html" >v19.4</option><option value="https://www.opendental.com/manual193/mountinfo.html" >v19.3</option><option value="https://www.opendental.com/manual192/mountinfo.html" >v19.2</option><option value="https://www.opendental.com/manual191/mountinfo.html" >v19.1</option><option value="https://www.opendental.com/manual184/mountinfo.html" >v18.4</option><option value="https://www.opendental.com/manual183/mountinfo.html" >v18.3</option><option value="https://www.opendental.com/manual182/mountinfo.html" >v18.2</option><option value="https://www.opendental.com/manual181/mountinfo.html" >v18.1</option><option value="https://www.opendental.com/manual174/mountinfo.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Mount Info</p></div>
<div class="GeneralPageContent">
<p>Mount information displays additional details about a mount.</p>
<p>In the <a href="images.html">Imaging Module</a>, right-click a mount. In the menu, select <b>Info</b>.</p>
<img src="images/mountInformation.png" width="619" height="460"/><br/><p class="MarginBottomZero">Edit the information for the selected mount. </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Date mount was created.</li>
<li><b>Time</b>: Time mount was created.</li>
<li><b>Provider</b>: The provider associated with the mount. Select a provider from the dropdown menu.</li>
<li><b>Description</b>: The name of the mount. Can be edited.</li>
<li><b>Note</b>: Any notes regarding the mount.</li>
<li><b>Edit Layout</b>: Click to edit the selected mount only. Opens the Edit Mount Layout window (see below) where the mount can be edited and items can be added or removed. </li>
<li><b>Background Color</b>: The background color for the selected mount. </li>
<li><b>Text and Line Color</b>: The default color for text or lines for the mount.</li>
<li><b>Text Background Color</b>: The background used on text for the mount.</li>
<li><b>Text BackG Transparent</b>: Check to disable Text Background Color.</li>
</ul>
<p class="MarginBottomZero">The following fields are informational only. These boxes can be checked or unchecked, but will not affect the images or mount:  </p>
<ul class="MarginBottomGap">
<li><b>Flip on Acquire</b>: Checked box indicates if the images in the mount were flipped when they were acquired.  <ul>
<li>Checking or unchecking this box will not flip images in the mount. Instead, users can select an image in the mount and use the <b>FlipH</b> button in the Imaging toolbar.</li>
</ul>
</li>
<li><b>Adj Mode After Series</b>: Checked box indicates Adjust Mode was enabled after mount was acquired.</li>
<ul>
<li>Checking or unchecking this box will not change the Pan/Adjust mode. Users must use the buttons in the Imaging toolbar to switch modes after the mount has been acquired. </li>
</ul>
</ul>
<p>Click <b>OK</b> to save changes.</p>
<h2>Edit Mount Layout</h2>
<p>Click <b>Edit Layout</b> to make changes to the mount layout. </p>
<img src="images/editMountLayout.png" width="915" height="536"/><p>Click and drag a mount item to move. For additional details on editing a mount, see <a href="mountdefinitions.html">Mount Definitions</a>, Edit Mount Def. Not all mount def options are available when an existing mount layout.</p>
</div>
</div>
</body>
</html>```
