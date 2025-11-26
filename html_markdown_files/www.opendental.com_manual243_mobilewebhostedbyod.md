# File: ./www.opendental.com/manual243/mobilewebhostedbyod.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Mobile Web</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('mobilewebhostedbyod','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/mobilewebhostedbyod.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/mobilewebhostedbyod.html" >v24.2</option><option value="https://www.opendental.com/manual241/mobilewebhostedbyod.html" >v24.1</option><option value="https://www.opendental.com/manual233/mobilewebhostedbyod.html" >v23.3</option><option value="https://www.opendental.com/manual232/mobilewebhostedbyod.html" >v23.2</option><option value="https://www.opendental.com/manual231/mobilewebhostedbyod.html" >v23.1</option><option value="https://www.opendental.com/manual224/mobilewebhostedbyod.html" >v22.4</option><option value="https://www.opendental.com/manual223/mobilewebhostedbyod.html" >v22.3</option><option value="https://www.opendental.com/manual222/mobilewebhostedbyod.html" >v22.2</option><option value="https://www.opendental.com/manual221/mobilewebhostedbyod.html" >v22.1</option><option value="https://www.opendental.com/manual214/mobilewebhostedbyod.html" >v21.4</option><option value="https://www.opendental.com/manual213/mobilewebhostedbyod.html" >v21.3</option><option value="https://www.opendental.com/manual212/mobilewebhostedbyod.html" >v21.2</option><option value="https://www.opendental.com/manual211/mobilewebhostedbyod.html" >v21.1</option><option value="https://www.opendental.com/manual205/mobilewebhostedbyod.html" >v20.5</option><option value="https://www.opendental.com/manual204/mobilewebhostedbyod.html" >v20.4</option><option value="https://www.opendental.com/manual203/mobilewebhostedbyod.html" >v20.3</option><option value="https://www.opendental.com/manual202/mobilewebhostedbyod.html" >v20.2</option><option value="https://www.opendental.com/manual201/mobilewebhostedbyod.html" >v20.1</option><option value="https://www.opendental.com/manual194/mobilewebhostedbyod.html" >v19.4</option><option value="https://www.opendental.com/manual193/mobilewebhostedbyod.html" >v19.3</option><option value="https://www.opendental.com/manual192/mobilewebhostedbyod.html" >v19.2</option><option value="https://www.opendental.com/manual191/mobilewebhostedbyod.html" >v19.1</option><option value="https://www.opendental.com/manual184/mobilewebhostedbyod.html" >v18.4</option><option value="https://www.opendental.com/manual183/mobilewebhostedbyod.html" >v18.3</option><option value="https://www.opendental.com/manual182/mobilewebhostedbyod.html" >v18.2</option><option value="https://www.opendental.com/manual181/mobilewebhostedbyod.html" >v18.1</option><option value="https://www.opendental.com/manual174/mobilewebhostedbyod.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Mobile Web</p></div>
<div class="GeneralPageContent">
<p>In <a href="eservicessetup.html">eServices Setup</a>, click <b>Mobile Web</b>.</p>
<p><div class="Note">Note: Mobile Web has been replaced by <a href="opendentalmobile.html">ODMobile</a>, an app that is installed right to your mobile device! Existing users, on Open Dental Version 22.4 or greater, can continue to use Open Dental Mobile Web, however new features will not be added.</div>
</p>
<img src="images/mobileWebSetup.png" width="718" height="246"/><p>To begin using Mobile Web, first <a href="eservicessignup.html">Sign up</a> for the service.</p>
<p><div class="Note">Note: Security <a href="permissions.html">Permissions</a> granted for the user also applies to the user when using Mobile Web.</div>
</p>
<h2>Mobile Web URL</h2>
<p><b>Hosted URL</b>: Use this URL to access Mobile Web. This link is unique to the database. </p>
<p>Alternatively, the URL can be found in the <a href="eservicessignup.html">eServices Signup</a> Portal by hovering over Mobile Web.</p>
<p>A entry is logged in the audit trail every time a user logs into the Mobile Web.</p>
<h2>Setup Users</h2>
<p><b>Setup Mobile Web Users</b>: Click to open the <a href="security.html">Security</a> window. Set up users as needed. </p>
<p class="MarginBottomZero">To access Mobile Web, the following is required:  </p>
<ul class="MarginBottomGap">
<li>The <i>ODTouch/ODMobile</i> security permission. See <a href="securityusergroups.html">User Group</a>.</li>
<li><i>Passwords must be strong</i> must be enabled in <a href="securitysettings.html">Global Security Settings</a>.</li>
<li>Users must have a strong password. See <a href="changepassword.html">Change Password</a>.</li>
</ul>
</div>
</div>
</body>
</html>```
