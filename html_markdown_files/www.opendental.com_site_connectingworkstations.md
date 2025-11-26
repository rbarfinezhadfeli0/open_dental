# File: ./www.opendental.com/site/connectingworkstations.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Connecting Workstations to a Database</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('connectingworkstations','computernetworksetup','documentation')">
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
		<div class="TopBar2"><p>Connecting Workstations to a Database</p></div>
		<div class="GeneralPageContent">
<p>See <a href="computernetworksetup.html">Network and Computer Setup</a>.</p>
<p>Workstations can connect to databases via direct connection, <a href="remote.html">Remote Access</a> (RDP), or <a href="middletier.html">Middle Tier</a>. These methods can be mixed and matched in any network (LAN or VPN). Also see <a href="multiplelocations.html">Multiple Locations</a>.</p>
<h2>Direct Connection</h2>
<p>In this method, workstations connect directly to the MySQL database using ServerName, DataBase, MySqlUser, and MySqlPassword (see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7choosedatabase.html">Choose Database</a>).</p>
<img src="images/networkConnectDirect.png" width="227" height="207"/><h2>Virtual Private Network (VPN)</h2>
<p>There are different types of VPN solutions and a network administrator is usually involved in setting it up. Open Dental support technicians do not set up network specifics. Once the VPN is set up, the offices should be securely connected and function as if they were a single office. If the client is connecting directly to the database over a VPN and it is sluggish, consider trying a Middle Tier connection which may be very fast in comparison. The Middle Tier improves the speed and responsiveness of the Open Dental client because there are fewer round trips between the client and the database.</p>
<h2>Remote Desktop Protocol (RDP)</h2>
<p>Each workstation acts as a thin client, with multiple copies of Open Dental running on the server. Open Dental is specifically designed to run well in this environment and many offices use RDP successfully. Other names for similar technology include Terminal Services, Citrix XenApp, application virtualization, LogMeIn, RemoteApp, GoToMyPC, VNC, VMware, etc.</p>
<p><b>Small Office Example</b>:</p>
<img src="images/networkConnectRDPSmall.png" width="244" height="214"/><p><b>Large Enterprise Example:</b></p>
<img src="images/networkConnectRDPLarge.png" width="295" height="297"/><h2>Middle Tier</h2>
<p>The Middle Tier is a server program that sits between the database and the client machines. It isolates the database, improving security by preventing client workstations from directly accessing the database. Workstations are ordinary thick clients running the full Windows version of Open Dental.</p>
<p><b>Small Office Example:</b></p>
<img src="images/networkConnectWebServiceSmall.png" width="212" height="200"/><p><b>Large Enterprise Example:</b></p>
<img src="images/networkConnectWebServiceLarge.png" width="300" height="300"/>		</div>
	</div>
</body>
</html>```
