# File: ./www.opendental.com/manual232/dropbox.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Dropbox</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dropbox','paths','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/dropbox.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/dropbox.html" >v24.2</option><option value="https://www.opendental.com/manual241/dropbox.html" >v24.1</option><option value="https://www.opendental.com/manual233/dropbox.html" >v23.3</option><option value="https://www.opendental.com/manual232/dropbox.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/dropbox.html" >v23.1</option><option value="https://www.opendental.com/manual224/dropbox.html" >v22.4</option><option value="https://www.opendental.com/manual223/dropbox.html" >v22.3</option><option value="https://www.opendental.com/manual222/dropbox.html" >v22.2</option><option value="https://www.opendental.com/manual221/dropbox.html" >v22.1</option><option value="https://www.opendental.com/manual214/dropbox.html" >v21.4</option><option value="https://www.opendental.com/manual213/dropbox.html" >v21.3</option><option value="https://www.opendental.com/manual212/dropbox.html" >v21.2</option><option value="https://www.opendental.com/manual211/dropbox.html" >v21.1</option><option value="https://www.opendental.com/manual205/dropbox.html" >v20.5</option><option value="https://www.opendental.com/manual204/dropbox.html" >v20.4</option><option value="https://www.opendental.com/manual203/dropbox.html" >v20.3</option><option value="https://www.opendental.com/manual202/dropbox.html" >v20.2</option><option value="https://www.opendental.com/manual201/dropbox.html" >v20.1</option><option value="https://www.opendental.com/manual194/dropbox.html" >v19.4</option><option value="https://www.opendental.com/manual193/dropbox.html" >v19.3</option><option value="https://www.opendental.com/manual192/dropbox.html" >v19.2</option><option value="https://www.opendental.com/manual191/dropbox.html" >v19.1</option><option value="https://www.opendental.com/manual184/dropbox.html" >v18.4</option><option value="https://www.opendental.com/manual183/dropbox.html" >v18.3</option><option value="https://www.opendental.com/manual182/dropbox.html" >v18.2</option><option value="https://www.opendental.com/manual181/dropbox.html" >v18.1</option><option value="https://www.opendental.com/manual174/dropbox.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Dropbox</p></div>
<div class="GeneralPageContent">
<p>Use Dropbox to store images off-site on the cloud. </p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="paths.html">Data Paths</a>. Check <b>Store images in Dropbox</b>.</p>
<img src="images/pathsDropBox.png" width="677" height="564"/><p><a href="http://www.dropbox.com">Dropbox</a> is one alternative to storing images and documents in the <a href="atozfolder.html">A to Z Folder</a>. An internet connection is required. Be sure to address <a href="../site/hipaa.html">HIPAA</a>-compliance issues. </p>
<h2>Setup</h2>
<p>Follow these instructions to set up Dropbox.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Enter the folder in Dropbox that store the images and documents. The default is <b>/AtoZ</b>.</li>
<li>Click <b>Authorize Dropbox</b> to set up a Dropbox account or authorize Open Dental access. A Dropbox sign in page opens in the default web browser.</li>
<img src="images/dropboxAuthorize.png" width="850" height="618"/><ul>
<li>If a Dropbox account already exists, enter the email and password associated with the account and click Sign In.</li>
<li>If a Dropbox account does not already exist, click <b>New to Dropbox? Create an account</b> and follow the steps.</li>
</ul>
<li>Once signed into the account, Dropbox prompts to allow Open Dental to access its folder in Dropbox.</li>
<img src="images/dropboxAccess.png" width="626" height="300"/><ul>
<li>Click <b>Allow </b>to permit access.</li>
</ul>
<li>An access code shows on the screen. Enter it in the Enter Access Token box of the Authorize Dropbox window. Click OK to save.</li>
<img src="images/dropboxToken.png" width="526" height="136"/><li>Create a mirror copy of the A to Z folders in Dropbox, Apps, Open Dental. Refer to <a href="https://www.dropbox.com/help/desktop-web/add-files">Dropbox Help Center</a> for instructions.  <ul>
<li>If using the Dropbox desktop application, add the folders to the Dropbox folder on the desktop and the folders automatically sync.</li>
<li>If using the Web version, only folders with contents can be copied. Manually create empty folders if needed.</li>
</ul>
</li>
<img src="images/dropboxCopy.png" width="915" height="643"/><li>On the Edit Paths window, the Access Token displays.</li>
<img src="images/dropboxDataPaths.png" width="608" height="179"/><li>Click OK to save and close the window.</li>
</ol>
</div>
</div>
</body>
</html>```
