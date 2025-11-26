# File: ./www.opendental.com/manual243/updatefullversion.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Update to Full Version</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('updatefullversion','installation','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/updatefullversion.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/updatefullversion.html" >v24.2</option><option value="https://www.opendental.com/manual241/updatefullversion.html" >v24.1</option><option value="https://www.opendental.com/manual233/updatefullversion.html" >v23.3</option><option value="https://www.opendental.com/manual232/updatefullversion.html" >v23.2</option><option value="https://www.opendental.com/manual231/updatefullversion.html" >v23.1</option><option value="https://www.opendental.com/manual224/updatefullversion.html" >v22.4</option><option value="https://www.opendental.com/manual223/updatefullversion.html" >v22.3</option><option value="https://www.opendental.com/manual222/updatefullversion.html" >v22.2</option><option value="https://www.opendental.com/manual221/updatefullversion.html" >v22.1</option><option value="https://www.opendental.com/manual214/updatefullversion.html" >v21.4</option><option value="https://www.opendental.com/manual213/updatefullversion.html" >v21.3</option><option value="https://www.opendental.com/manual212/updatefullversion.html" >v21.2</option><option value="https://www.opendental.com/manual211/updatefullversion.html" >v21.1</option><option value="https://www.opendental.com/manual205/updatefullversion.html" >v20.5</option><option value="https://www.opendental.com/manual204/updatefullversion.html" >v20.4</option><option value="https://www.opendental.com/manual203/updatefullversion.html" >v20.3</option><option value="https://www.opendental.com/manual202/updatefullversion.html" >v20.2</option><option value="https://www.opendental.com/manual201/updatefullversion.html" >v20.1</option><option value="https://www.opendental.com/manual194/updatefullversion.html" >v19.4</option><option value="https://www.opendental.com/manual193/updatefullversion.html" >v19.3</option><option value="https://www.opendental.com/manual192/updatefullversion.html" >v19.2</option><option value="https://www.opendental.com/manual191/updatefullversion.html" >v19.1</option><option value="https://www.opendental.com/manual184/updatefullversion.html" >v18.4</option><option value="https://www.opendental.com/manual183/updatefullversion.html" >v18.3</option><option value="https://www.opendental.com/manual182/updatefullversion.html" >v18.2</option><option value="https://www.opendental.com/manual181/updatefullversion.html" >v18.1</option><option value="https://www.opendental.com/manual174/updatefullversion.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Update to Full Version</p></div>
<div class="GeneralPageContent">
<p>See <a href="installation.html">Installation</a>.</p>
<p class="MarginBottomZero">When you order the full version of Open Dental, a support technician will often update the software on the main computer and perform some minor required setup. If you update on your own, refer to the following instructions. </p>
<ol class="MarginBottomGap">
<li>If not already installed, install the <a href="http://opendental.com/trial.html">Trial Version</a> on the server.</li>
<li>Update to the full version on the server following the instructions below.</li>
<li>Perform required setup on the server (see below).</li>
<li>If using Open Dental on several computers, see <a href="installworkstation.html">Install on Workstation</a>. These steps are different than server installations.</li>
</ol>
<p>These steps are used when updating from the Open Dental Trial Version to the Full Version. If the full version of Open Dental is already installed, use the steps on <a href="updateinstall.html">Install Update</a> instead.</p>
<h2>Update to the Full Version on the Server</h2>
<p class="MarginBottomZero">The Trial version should already be installed. </p>
<ol class="MarginBottomGap">
<li>On the computer desktop, right-click on the Open Dental icon, then click <b>Run as Administrator</b>.</li>
<li>In the <a href="mainmenu.html">Main Menu</a>, click Help, Update, then <b>Setup</b> in the upper left corner. <br/><img src="images/installUpdateSetup.gif" width="744" height="423" class="ImageInParagraph"/></li>
<li>Next to Registration Key, click <b>Change</b>.</li>
<li>Enter the registration key from the welcome email.</li>
<li>Review the CDT, Open Dental and SQL license agreements. Check the boxes to agree. See <a href="../resources/cdtcompliance.pdf">CDT Compliance</a>.</li>
<li>Click <b>OK</b> twice to return to the Update window.</li>
<li>Click <b>Check for Updates</b> to see a list of all available versions. <br/><img src="images/updatecheck.png" width="491" height="327" class="ImageInParagraph"/></li>
<li>Click <b>Install</b> next to the version to install. Only select one option. Normally, offices want to install the <i>New Stable</i> version. Do not install <i>Beta</i> unless users are comfortable with potential errors. Beta versions are not quite as stable and will require frequent updates.</li>
<li>Any announcements specific to the update will show. Click <b>OK</b> to proceed.</li>
<li>Open Dental must close on all workstations. A warning message will show. Click <b>Continue</b> to close Open Dental on the listed workstations and start the download. The listed workstations will receive a warning before Open Dental closes.</li>
<img src="images/updateShutdownWorkstations.png" width="658" height="273"/><li>Restart Open Dental. When it opens, the new files will be copied to the server. Installation to the main computer is complete.</li>
</ol>
<h2>Required Setup</h2>
<p class="MarginBottomZero">Complete these steps on the server (main computer) before proceeding. A support technician can assist the office. </p>
<ol class="MarginBottomGap">
<li>Run the <a href="procedurecodetools.html">Procedure Code Tools</a> to remove temporary codes used in the Trial version and automatically add CDT codes. <ol>
<li>In the main menu, click Lists, Procedure Codes.</li>
<li>At the lower left, click <b>Tools</b>.</li>
<li>Check all boxes.</li>
<li>Click <b>Run Now</b>.</li>
</ol>
</li>
<li>If using multiple computers, perform these on the server before installing on a workstation.  <ol>
<li>See <a href="atozshare.html">Share A to Z Folder</a>.</li>
<li>Set the path to the shared OpenDentImages folder. (In the main menu, click Setup, <a href="paths.html">Data Paths</a>).</li>
</ol>
</li>
</ol>
<p>If workstations have trouble connecting, it may be a firewall issue. If users cannot get past the Choose Database window, then it's a firewall issue. The office may need to create an exception to allow Port 3306. See <a href="firewalls.html">Firewall</a> for information on how to open Port 3306.</p>
</div>
</div>
</body>
</html>```
