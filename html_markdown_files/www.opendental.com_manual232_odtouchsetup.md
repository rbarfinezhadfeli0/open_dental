# File: ./www.opendental.com/manual232/odtouchsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ODTouch Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('odtouchsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/odtouchsetup.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/odtouchsetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/odtouchsetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/odtouchsetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/odtouchsetup.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/odtouchsetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/odtouchsetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/odtouchsetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/odtouchsetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/odtouchsetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/odtouchsetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/odtouchsetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/odtouchsetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/odtouchsetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/odtouchsetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/odtouchsetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/odtouchsetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/odtouchsetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/odtouchsetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/odtouchsetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/odtouchsetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/odtouchsetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/odtouchsetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/odtouchsetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/odtouchsetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/odtouchsetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/odtouchsetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/odtouchsetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ODTouch Setup</p></div>
<div class="GeneralPageContent">
<p>See <a href="eservicessetup.html">eServices Setup</a>.</p>
<p>ODTouch is an application designed to navigate patient appointments via a convenient tablet device. </p>
<p><div class="Note">Note: ODTouch is currently in Limited Beta. Contact Open Dental Support for signup details.</div>
</p>
<h2>Set Up ODTouch in Open Dental</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Sign up for ODTouch in the <a href="eservicessignup.html">eServices Signup Portal</a>. </li>
<li>Set up <a href="mobilesettings.html">Mobile Settings</a> to use when logging into the app. This only needs done once and is used for all Open Dental apps.</li>
<li>Determine <a href="odtouchsecurity.html">ODTouch Security</a> settings in Open Dental. </li>
<li>Set up <a href="erouting.html">eRouting</a> definitions.</li>
<li>Set up <a href="securityusers.html">Users</a> to log into ODTouch.  <ul>
<li>Users must have the <i>Mobile Web/ODMobile</i> security permission.</li>
<li><i>Passwords must be strong</i> must be enabled in <a href="securitysettings.html">Global Security Settings</a>.</li>
<li>Users must have a strong password. </li>
</ul>
</li>
</ol>
<h2>Install ODTouch on a Tablet Device</h2>
<p>ODTouch is designed for tablet devices, not mobile phones. See <a href="../site/tablet.html">Tablet</a> for compatible devices and details. </p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Install the app to each desired device. ODTouch is available for iOS and Android. <ul>
<li><a href="https://apps.apple.com/us/app/odtouch/id6444294687">App Store</a></li>
<li><a href="https://play.google.com/store/apps/details?id=com.opendental.clinical">Google Play</a></li>
</ul>
</li>
<li>In the app, enter the Mobile Settings to connect the app with the database.<br/><img src="images/odtouchSignupLogin.png" width="679" height="302" class="ImageInParagraph"/></li>
<li>In Open Dental, enable the device in the <a href="devicemanager.html">Device Manager</a>.</li>
<li>In the app, log in using an Open Dental username and password. <ul>
<li>If <i>Manually enter log on credentials</i> is enabled in <a href="securitysettings.html">Global Security Settings</a>, the User must be typed instead of selected.</li>
</ul>
<br/><img src="images/odtouchUserLogin.png" width="652" height="275" class="ImageInParagraph"/></li>
<li>If <i>Clinical Security</i> is enabled in ODTouch Security, determine security options in <a href="odtouchsettings.html">ODTouch: Settings</a>.</li>
</ol>
</div>
</div>
</body>
</html>```
