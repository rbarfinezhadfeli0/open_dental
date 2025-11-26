# File: ./www.opendental.com/manual232/paths.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Paths</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paths','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/paths.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/paths.html" >v24.2</option><option value="https://www.opendental.com/manual241/paths.html" >v24.1</option><option value="https://www.opendental.com/manual233/paths.html" >v23.3</option><option value="https://www.opendental.com/manual232/paths.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/paths.html" >v23.1</option><option value="https://www.opendental.com/manual224/paths.html" >v22.4</option><option value="https://www.opendental.com/manual223/paths.html" >v22.3</option><option value="https://www.opendental.com/manual222/paths.html" >v22.2</option><option value="https://www.opendental.com/manual221/paths.html" >v22.1</option><option value="https://www.opendental.com/manual214/paths.html" >v21.4</option><option value="https://www.opendental.com/manual213/paths.html" >v21.3</option><option value="https://www.opendental.com/manual212/paths.html" >v21.2</option><option value="https://www.opendental.com/manual211/paths.html" >v21.1</option><option value="https://www.opendental.com/manual205/paths.html" >v20.5</option><option value="https://www.opendental.com/manual204/paths.html" >v20.4</option><option value="https://www.opendental.com/manual203/paths.html" >v20.3</option><option value="https://www.opendental.com/manual202/paths.html" >v20.2</option><option value="https://www.opendental.com/manual201/paths.html" >v20.1</option><option value="https://www.opendental.com/manual194/paths.html" >v19.4</option><option value="https://www.opendental.com/manual193/paths.html" >v19.3</option><option value="https://www.opendental.com/manual192/paths.html" >v19.2</option><option value="https://www.opendental.com/manual191/paths.html" >v19.1</option><option value="https://www.opendental.com/manual184/paths.html" >v18.4</option><option value="https://www.opendental.com/manual183/paths.html" >v18.3</option><option value="https://www.opendental.com/manual182/paths.html" >v18.2</option><option value="https://www.opendental.com/manual181/paths.html" >v18.1</option><option value="https://www.opendental.com/manual174/paths.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Paths</p></div>
<div class="GeneralPageContent">
<p>Edit Paths identifies where Open Dental should store scanned or imported images and documents, export files, and letter merge templates.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Data Paths.</p>
<img src="images/paths.png" width="691" height="603"/><p>Verify all paths are accurate before pointing other computers to the server.</p>
<h2>A to Z Images Folder</h2>
<p>Select where the <a href="atozfolder.html">A to Z Folder</a> is located. This folder is where Open Dental stores images and other documents.</p>
<img src="images/pathsAtoz.png" width="632" height="343"/><p class="MarginBottomZero"><b>Store images and documents on a local or network folder</b>: </p>
<ol class="MarginBottomGap">
<li>Enter the path to the folder: This path will be used by all computers using the database.  <ul>
<li>If multiple computers access this folder, the path should point to a folder on a shared network. <a href="atozshare.html">Share A to Z Folder</a></li>
<li>If a single computer accesses this folder, the path can be local (<b>C:\OpenDentImages</b>).</li>
<li>OpenDentImages is the default folder name that contains the A to Z folders, but any folder is valid as long as the A to Z folders are contained within it.</li>
</ul>
</li>
<li>Use multiple paths: Not recommended for most users. If this option is selected, multiple paths to the A to Z folders can be entered, separated by semicolon (no spaces). When Open Dental starts, the first valid path will be used. It can be used to run backups.</li>
<li>Path Override for this computer: If the path to the A to Z folders points to a shared folder on a network, and a path override is needed for this computer only, enter the override path.</li>
</ol>
<p><b>Store Images directly in database. No AtoZ Folder. (Some features unavailable)</b>: Only visible if this option is currently in use. See <a href="imagesstoreindb.html">Store Images in Database</a>. If selected, images will be stored in the database and it will become very large. There will be no A to Z folders. Once this option is disabled, it will no longer be available in the Paths list. Contact <a href="../contact.html">Open Dental Support</a> to re-enable this option. </p>
<p><b>Store images in Dropbox (an internet connection is required)</b>: Store images off-site on the cloud using Dropbox (<a href="http://www.dropbox.com">www.dropbox.com</a>). See: <a href="dropbox.html">Dropbox</a>.</p>
<p class="MarginBottomZero"><b>Store images on a server via SSH File Transfer Protocol (SFTP)</b>: Store images on a file transfer protocol (FTP) site using SFTP. An internet connection is required. Enter the following details: </p>
<ul class="MarginBottomGap">
<li><b>AtoZ Path</b>: The folder that will store the images and documents. The default is <b>AtoZ/</b>.</li>
<li><b>Hostname</b>: IP/ host name of the FTP server.</li>
<li><b>Username/Password</b>: FTP username and password.</li>
</ul>
<div class="Note">Note: Port 22 is always used.</div>
<br/><img src="images/pathsSFTP.png" width="526" height="162" class="ImageInParagraph"/><h2>Export Path</h2>
<p>Select the path to the folder where files exported from Open Dental (e.g., reports) are stored.</p>
<img src="images/pathsExport.png" width="604" height="73"/><p><b>Export Path</b>: This can be a local or network path. If the folder does not already exist, it will be created automatically when you export a report. The default folder is OpenDentalExports.</p>
<h2>Letter Merge Path</h2>
<p>Select the path to the folder where letter templates for <a href="lettermerge.html">Letter Merge</a> are stored. </p>
<img src="images/pathsLetterMerge.png" width="604" height="73"/><p><b>Letter Merge Path</b>: This can be a local or network path. When entering a network path, make sure the folder is shared so all computers can access it. This folder must be created manually. The default folder name is OpenDentalLetters.</p>
<h2>Troubleshooting</h2>
<p><p><b>Problem: When clicking OK the in Edit Paths, users are not able to continue.</b></p>
 Solution: If a valid path for the A to Z folders is not entered, user will not be allowed to continue. Verify the path for the A to Z folder before continuing.</p>
<p><p><b>Problem: Users are seeing Edit Paths when opening Open Dental when it was working properly before.</b></p>
</p>
<p>Solution: This is likely a Windows permission error. To resolve, leave Edit Paths open and, using Windows, browse to the shared Network folder listed in this window, (e.g., \\SERVER\OpenDentImages). When prompted, enter the Windows Network username and password. Once the credentials have been entered, return to this window and click <b>OK</b> without changing anything.</p>
<p><b>Problem: The Edit Paths window comes up repeatedly when you start Open Dental.</b></p>
<p>Solution: The path to the OpenDentImages (A to Z) folders is invalid. Enter a correct path that can be accessed by all computers all the time (e.g., a path that starts with <b>\\SERVER\</b> or similar).</p>
<p class="MarginBottomZero">A path to a mapped network drive (e.g., <b>Z:\OpenDentImages\</b> is not recommended. Mapped drives must be set up on each computer and sometimes computers fail to properly remap the drive on startup. For example: </p>
<ul class="MarginBottomGap">
<li>If server has a dynamic IP address, an issue would arise every time the IP address changes at restart.</li>
<li>DNS issues could cause problems linking the server name to the server IP address.</li>
<li>If a permission path is set for the path to the server and Remember my credentials is not checked, issue could occur on restart.</li>
</ul>
</div>
</div>
</body>
</html>```
