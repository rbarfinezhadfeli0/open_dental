# File: ./www.opendental.com/manual243/securitybadges.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Security Badges</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('securitybadges','security','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/securitybadges.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/securitybadges.html" >v24.2</option><option value="https://www.opendental.com/manual241/securitybadges.html" >v24.1</option><option value="https://www.opendental.com/manual233/securitybadges.html" >v23.3</option><option value="https://www.opendental.com/manual232/securitybadges.html" >v23.2</option><option value="https://www.opendental.com/manual231/securitybadges.html" >v23.1</option><option value="https://www.opendental.com/manual224/securitybadges.html" >v22.4</option><option value="https://www.opendental.com/manual223/securitybadges.html" >v22.3</option><option value="https://www.opendental.com/manual222/securitybadges.html" >v22.2</option><option value="https://www.opendental.com/manual221/securitybadges.html" >v22.1</option><option value="https://www.opendental.com/manual214/securitybadges.html" >v21.4</option><option value="https://www.opendental.com/manual213/securitybadges.html" >v21.3</option><option value="https://www.opendental.com/manual212/securitybadges.html" >v21.2</option><option value="https://www.opendental.com/manual211/securitybadges.html" >v21.1</option><option value="https://www.opendental.com/manual205/securitybadges.html" >v20.5</option><option value="https://www.opendental.com/manual204/securitybadges.html" >v20.4</option><option value="https://www.opendental.com/manual203/securitybadges.html" >v20.3</option><option value="https://www.opendental.com/manual202/securitybadges.html" >v20.2</option><option value="https://www.opendental.com/manual201/securitybadges.html" >v20.1</option><option value="https://www.opendental.com/manual194/securitybadges.html" >v19.4</option><option value="https://www.opendental.com/manual193/securitybadges.html" >v19.3</option><option value="https://www.opendental.com/manual192/securitybadges.html" >v19.2</option><option value="https://www.opendental.com/manual191/securitybadges.html" >v19.1</option><option value="https://www.opendental.com/manual184/securitybadges.html" >v18.4</option><option value="https://www.opendental.com/manual183/securitybadges.html" >v18.3</option><option value="https://www.opendental.com/manual182/securitybadges.html" >v18.2</option><option value="https://www.opendental.com/manual181/securitybadges.html" >v18.1</option><option value="https://www.opendental.com/manual174/securitybadges.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Security Badges</p></div>
<div class="GeneralPageContent">
<p>Enter Badge IDs for users to allow them to log on to Open Dental using a badge scanner.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Security Badges.</p>
<img src="images/securityBadgesUser.png" width="266" height="136"/><p>Select a username from the dropdown and click <b>OK</b>.</p>
<p>Usernames can be added to the dropdown from the <a href="security.html">Security</a> window. Users marked as <i>Is Hidden</i> do not show.</p>
<p>Edit Badge ID is opened.</p>
<img src="images/securityBadgesEdit.png" width="302" height="147"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Username</b>: Displays the user selected in the previous window for reference.</li>
<li><b>Badge ID</b>: Displays any Badge ID associated to the <a href="securityusers.html">User</a>. If there is no Badge ID for the user, this is blank. Enter an eight-digit ID associated with the employee's badge. </li>
</ul>
<p>Badge IDs can also be entered from <a href="securityusers.html">User Edit</a>. </p>
<h2>Logging On With a Badge</h2>
<p class="MarginBottomZero">With Badge IDs entered, users can <a href="securitylogin.html">Log On</a> to Open Dental by scanning or swiping their badge. There are some requirements: </p>
<ul class="MarginBottomGap">
<li>Badge IDs must be exactly eight digits.</li>
<li>The badge scanner being used must simulate keyboard input.</li>
</ul>
<p class="MarginBottomZero">Logging in with a badge is considered lower security than utilizing a username and password. The badge can be used to immediately log a user on or select the user but still require a password. </p>
<ul class="MarginBottomGap">
<li>To immediately log users on with badge input, disable <i>When logging in with a badge, require a password</i> in <a href="securitysettings.html">Global Security Settings</a></li>
<li>To only select a user with badge input, enable <i>When logging in with a badge, require a password</i> in Global Security Settings.</li>
</ul>
</div>
</div>
</body>
</html>```
