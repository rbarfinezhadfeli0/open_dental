# File: ./www.opendental.com/site/networkusers.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Network Users</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('networkusers','securitycomputers','computernetworksetup','documentation')">
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
		<div class="TopBar2"><p>Network Users</p></div>
		<div class="GeneralPageContent">
<p>For <a href="hipaa.html">HIPAA</a> compliance, practices must have user passwords on every computer. These passwords are a part of <a href="securitycomputers.html">Computer Security</a>, not Open Dental security. If a computer is not in use for a while, then it should be set to automatically log out so that a user needs to use a password to log back in.</p>
<h2>Small Office</h2>
<p>(10 computers or less)</p>
<p class="MarginBottomZero">A small office will usually designate one of their workstations as the server. If possible, it should only be used as the office server and not for day-to-day use. </p>
<ul class="MarginBottomGap">
<li>Each workstation can have individual Windows users or use the same user account. Those user accounts should not have administrative access to protect against accidental installation of viruses or ransomware.</li>
<li>For each workstation to access the shared data folder on the server computer, the credential manager needs to have the admin account credentials added to each workstation. Usually, it is added the first time a computer accesses the server's shared folder and the <i>Save My Credentials</i> box is checked after entering the proper username and password.</li>
</ul>
<p>To create separate users and logins for Open Dental, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7security.html">Security</a>.</p>
<p>To update Open Dental, a user with the <i>Update Install</i> security permission is required.</p>
<h2>Large Office</h2>
<p>(more than 10 computers)</p>
<p>A large office will typically use a Windows Server operating system. Set up an active domain and security policies according to your office policies.</p>
		</div>
	</div>
</body>
</html>```
