# File: ./www.opendental.com/site/sensorschick.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Schick Sensors</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('sensorschick','sensorcompatibility','vendorssupplementalservices','documentation')">
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
		<div class="TopBar2"><p>Schick Sensors</p></div>
		<div class="GeneralPageContent">
<p>See <a href="sensorcompatibility.html">Sensor Compatibility</a></p>
<p><span style="color:red">As of 12/31/2024, Dentsply Sirona is discontinuing support for the drivers below. Contact us if you need assistance obtaining a driver.</span></p>
<p>Schick sensors are supported, including limited assistance with installation of drivers. Here are installation and setup instructions:</p>
<p>Determine the type of drivers needed based on your specific sensor model.<br><a href="https://www.dentsplysironasupport.com/en-us/user_section/user_section_imaging/schick_brand_software.html">https://www.dentsplysironasupport.com/en-us/user_section/user_section_imaging/schick_brand_software.html</a></p>
<p>Download both drivers for your specific sensor.</p>
<p><img src="images/imagingSchick1.png" width="915" height="386"/></p>
<p>Install the drivers. Confirm that the sensors are being recognized by the USB ports by using one of the utilities that came with Schick. If using Schick AE, the utility is called "AE USB Interface Utility":</p>
<img src="images/imagingSchick3.png" width="525" height="599"/><p>If using Schick 33/Elite, the utility is called "Schick 33/Elite Utility":</p>
<img src="images/imagingSchick4.png" width="559" height="626"/><p>It might also simply be called "Upgrade Utility". Whichever Schick utility you use, see their documentation for instructions.</p>
<p>Add the sensor in Open Dental in <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7imagingdevices.html">Imaging Devices</a>. Make sure to check the box for <i>Show Twain UI</i>. If you attempted to take radiographs without this box checked, then you may need to check the box and restart Open Dental.</p>
<p>In the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7images.html">Imaging Module</a>, in the top Toolbar, create a new <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mountdefinitions.html">Mount</a>. Click Acquire.</p>
<p><img src="images/imagingSchick5.png" width="613" height="490"/></p>
<p>If the <i>Use AutoTake to acquire</i> and <i>Automatically Accept Image</i> boxes are checked, then when you push the button the x-ray machine, the CDR window will capture the image and then close. </p>
		</div>
	</div>
</body>
</html>```
