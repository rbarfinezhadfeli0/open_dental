# File: ./www.opendental.com/manual232/mobilesettings.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Mobile Settings</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mobilesettings','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/mobilesettings.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/mobilesettings.html" >v24.2</option><option value="https://www.opendental.com/manual241/mobilesettings.html" >v24.1</option><option value="https://www.opendental.com/manual233/mobilesettings.html" >v23.3</option><option value="https://www.opendental.com/manual232/mobilesettings.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/mobilesettings.html" >v23.1</option><option value="https://www.opendental.com/manual224/mobilesettings.html" >v22.4</option><option value="https://www.opendental.com/manual223/mobilesettings.html" >v22.3</option><option value="https://www.opendental.com/manual222/mobilesettings.html" >v22.2</option><option value="https://www.opendental.com/manual221/mobilesettings.html" >v22.1</option><option value="https://www.opendental.com/manual214/mobilesettings.html" >v21.4</option><option value="https://www.opendental.com/manual213/mobilesettings.html" >v21.3</option><option value="https://www.opendental.com/manual212/mobilesettings.html" >v21.2</option><option value="https://www.opendental.com/manual211/mobilesettings.html" >v21.1</option><option value="https://www.opendental.com/manual205/mobilesettings.html" >v20.5</option><option value="https://www.opendental.com/manual204/mobilesettings.html" >v20.4</option><option value="https://www.opendental.com/manual203/mobilesettings.html" >v20.3</option><option value="https://www.opendental.com/manual202/mobilesettings.html" >v20.2</option><option value="https://www.opendental.com/manual201/mobilesettings.html" >v20.1</option><option value="https://www.opendental.com/manual194/mobilesettings.html" >v19.4</option><option value="https://www.opendental.com/manual193/mobilesettings.html" >v19.3</option><option value="https://www.opendental.com/manual192/mobilesettings.html" >v19.2</option><option value="https://www.opendental.com/manual191/mobilesettings.html" >v19.1</option><option value="https://www.opendental.com/manual184/mobilesettings.html" >v18.4</option><option value="https://www.opendental.com/manual183/mobilesettings.html" >v18.3</option><option value="https://www.opendental.com/manual182/mobilesettings.html" >v18.2</option><option value="https://www.opendental.com/manual181/mobilesettings.html" >v18.1</option><option value="https://www.opendental.com/manual174/mobilesettings.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Mobile Settings</p></div>
<div class="GeneralPageContent">
<p>In the <a href="eservicessetup.html">eServices Setup</a> window, click Mobile Settings.</p>
<img src="images/mobileSettingsWindow.png" width="311" height="316"/><p>Mobile Settings determine your login credentials when using <a href="eclipboardsetup.html">eClipboard</a> and <a href="opendentalmobile.html">ODMobile</a>.</p>
<p><b>Clinic</b>: Use the dropdown to select the clinic login information. If no login exists, the information will be blank. If a clinic has a login already created, you will see the user name and account recovery information.</p>
<p><b>User Name</b>: Enter the user name to use when signing into the eClipoard or ODMobile apps. This username associates your database with the app.</p>
<p><b>Password / Re-Enter Password</b>: Create a password to use when signing into the eClipboard or ODMobile apps. This password associates your database with the app.</p>
<p class="MarginBottomZero">Account Recovery: If the username and password are forgotten, use a email address and phone number to recover the credentials.  </p>
<ul class="MarginBottomGap">
<li><b>Email Address</b>: Enter an email address to use when recovering login credentials. </li>
<li><b>Phone Number</b>: Enter a phone number to use when recovering login credentials. </li>
</ul>
<p><b>Verify and Save</b>: Click to save credentials. An authorization code will be sent the email address and phone number provided. Enter the authorization code in the following box when prompted, then click OK. Credentials will save, then click Close to leave the window.<br/><img src="images/authCode.png" width="311" height="163" class="ImageInParagraph"/></p>
<h2>Recovering Credentials</h2>
<p>If the username or password is forgotten, use the eClipboard or ODMobile app to recover them. </p>
<p>In the app, you will be prompted for the Signup Portal Login. Click <b>Forgot user name?</b> or <b>Forgot password?</b>, then follow the prompts to recover your password. </p>
<img src="images/appPasswordForgot.png" width="277" height="467"/></div>
</div>
</body>
</html>```
