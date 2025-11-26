# File: ./www.opendental.com/manual/securitylogin.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Log On</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('securitylogin','security','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/securitylogin.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/securitylogin.html" >v24.2</option><option value="https://www.opendental.com/manual241/securitylogin.html" >v24.1</option><option value="https://www.opendental.com/manual233/securitylogin.html" >v23.3</option><option value="https://www.opendental.com/manual232/securitylogin.html" >v23.2</option><option value="https://www.opendental.com/manual231/securitylogin.html" >v23.1</option><option value="https://www.opendental.com/manual224/securitylogin.html" >v22.4</option><option value="https://www.opendental.com/manual223/securitylogin.html" >v22.3</option><option value="https://www.opendental.com/manual222/securitylogin.html" >v22.2</option><option value="https://www.opendental.com/manual221/securitylogin.html" >v22.1</option><option value="https://www.opendental.com/manual214/securitylogin.html" >v21.4</option><option value="https://www.opendental.com/manual213/securitylogin.html" >v21.3</option><option value="https://www.opendental.com/manual212/securitylogin.html" >v21.2</option><option value="https://www.opendental.com/manual211/securitylogin.html" >v21.1</option><option value="https://www.opendental.com/manual205/securitylogin.html" >v20.5</option><option value="https://www.opendental.com/manual204/securitylogin.html" >v20.4</option><option value="https://www.opendental.com/manual203/securitylogin.html" >v20.3</option><option value="https://www.opendental.com/manual202/securitylogin.html" >v20.2</option><option value="https://www.opendental.com/manual201/securitylogin.html" >v20.1</option><option value="https://www.opendental.com/manual194/securitylogin.html" >v19.4</option><option value="https://www.opendental.com/manual193/securitylogin.html" >v19.3</option><option value="https://www.opendental.com/manual192/securitylogin.html" >v19.2</option><option value="https://www.opendental.com/manual191/securitylogin.html" >v19.1</option><option value="https://www.opendental.com/manual184/securitylogin.html" >v18.4</option><option value="https://www.opendental.com/manual183/securitylogin.html" >v18.3</option><option value="https://www.opendental.com/manual182/securitylogin.html" >v18.2</option><option value="https://www.opendental.com/manual181/securitylogin.html" >v18.1</option><option value="https://www.opendental.com/manual174/securitylogin.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Log On</p></div>
<div class="GeneralPageContent">
<p>When Open Dental starts, if the user <a href="security.html">Security</a> is properly set up, the Log On window should open.</p>
<img src="images/securityLogOn.png" width="534" height="394"/><p>To protect data and prevent misuse, every user should be required to log on with a unique username and password, then log off when they leave the workstation. See <a href="security.html">Security</a> to set up user profiles and assign permissions.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Filter</b>: Type to filter the user list by username.</li>
<li><b>User</b>: Select a username to log into.</li>
<li><b>Password</b>: Enter the password for the selected user. </li>
</ul>
<p>Alternatively, if the <a href="securitysettings.html">Global Security Setting</a>, <i>Manually Enter Log On Credentials</i> is enabled, the Log On window will appear as shown below. Users must manually enter their username to log in. The user list and filter will not be shown.</p>
<img src="images/securityLogOnManual.png" width="534" height="164"/><p></p>
<p><div class="Note">Note: <ul>
<li>If a badge scanner is connected to the workstation, users can also scan or swipe their badge to log on. See <a href="securitybadges.html">Security Badges</a> for details. </li>
<li>If the users are not prompted to log on when they start the program, an Admin user does not have a password setup. This user will automatically be logged in.</li>
<li>If a user's current password does not meet password criteria, they may be required to create a new password that does.</li>
<li>To force a user to change their password the first time they use it to log on, check <i>Require Password Reset</i> when setting up the <a href="securityusers.html">User Edit</a>.</li>
<li>After five consecutive failed attempts to log on, a user will temporarily be locked out of the account for five minutes or until a user with Security Admin privileges manually unlocks the account. See <a href="securityusers.html">User Edit</a> for details.</li>
<li>The screen differs based on whether the setting for <i>Manually enter logon credentials</i> is on or off. If on, the user will need to manually type their username and password.</li>
<li>To set up single sign on (LDAP), see <a href="singlesignon.html">Single Sign-On / Domain Login</a>.</li>
</ul>
</div>
</p>
<h2>Logging Off</h2>
<p>To log off manually, in the Main Menu, click <b>Log Off</b>. A message will appear, warning the user they are about to be logged off of Open Dental.</p>
<img src="images/securityLogOff.png" width="451" height="136"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Alternatively, click the close button (X) in the upper right of the program.</li>
</ul>
<p><b>Do not show me this message again</b>. Check to disable the log off prompt. This setting is independent for each user. To reinstate the Log Off message for a user, see <a href="usersettings.html">User Settings</a>.</p>
<p><div class="Note">Note: <ul>
<li>Set automatic log off options in <a href="securitysettings.html">Global Security Settings</a>.</li>
<li>If the user logs off and there are unsaved changes, a warning message will show. If automatic log off is turned on, and the user manually clicks Log Off, any unsaved changes will be lost, and no warning message will show.</li>
</ul>
</div>
</p>
<h2>Multi-Factor Authentication</h2>
<p>Multi-Factor Authentication is not available when logging onto Open Dental. Consider a third-party to add additional security to the computer system as a whole instead. Often times, Multi-Factor Authentication will require employees to carry an additional item with them as they move through the office (e.g., a cell phone or keycard).</p>
</div>
</div>
</body>
</html>```
