# File: ./www.opendental.com/site/sensornewtom.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - NewTom Pano</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('sensornewtom','sensorcompatibility','vendorssupplementalservices','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>NewTom Pano</p></div>
		<div class="GeneralPageContent">
<p>See <a href="sensorcompatibility.html">Sensor Compatibility</a>.</p>
<p>NewTom machines have a Twain driver which should make them compatible with Open Dental.</p>
<p>For assistance with setup of a NewTom machine, contact NewTom/Cefla: <a href="https://ceflamedicalna.com/contact-us/">https://ceflamedicalna.com/contact-us/</a>.</p>
<h2>Troubleshooting</h2><p>If a NewTom machine is not working in Open Dental, there are several troubleshooting steps to resolve. </p>
<p><b>Device Setup</b></p>
<p>We have found the driver combination that works best is using NewTom's iCapture_NT_4.31 or higher driver set.</p>
<p class="MarginBottomZero">In <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7imagingdevices.html">Imaging Devices</a>, double-click the device.  </p>
<ul class="MarginBottomGap">
<li>Check <i>Show Twain UI</i>.</li>
<li>Toggle the <i>Device Type</i> to Twain Radiograph. The other option, Twain Multi, is not appropriate.</li>
<li>Choose the<i> iCapture Standard interface</i> driver.</li>
</ul>
<p></p>
<p><b>Antivirus</b></p>
<p>Antivirus programs (e.g., Windows Defender, Endpoint Security, etc.) may prevent image transfer. Work with your IT to troubleshoot or configure your antivirus software.</p>
<p><b>Disable Multi-image</b></p>
<p>In the NewTom iCapture Monitor program, uncheck <i>Enable multi image transfer</i>.</p>
<p><b>Save to Folder</b></p>
<p>In the NewTom TwainToDisk program, choose a destination folder in Settings. In Open Dental, from the Imaging Module, Import dropdown, select Import Automatically. Enter the same file path there as you entered into the NewTom settings.</p>
<p><b>Error: There are 1 images not transferred yet to any imaging application.</b></p>
<p>Contact NewTom to run a fix to their driver to resolve the issue.</p>
		</div>
	</div>
</body>
</html>```
