# File: ./www.opendental.com/site/middletiersecuritycert.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Middle Tier Security Certificate</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('middletiersecuritycert','middletier','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Middle Tier Security Certificate</p></div>
		<div class="GeneralPageContent">
<p>See <a href="middletier.html">Middle Tier</a>.</p>
<p>To securely access the Middle Tier from outside your network (e.g. from home), additional steps are required.</p>
<ul>
<li>You must purchase an SSL certificate from a certificate authority, import the certificate to your server, then set up https.</li>
<li>You need to forward port 443 on your router to your Middle Tier server.</li>
<li>You need to be very careful about security.  <ul>
<li>All Open Dental passwords should be reviewed to make sure they are strong enough.</li>
<li>The <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7atozfolder.html">A to Z Folder</a> needs to be stored via SFTP (as set in <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paths.html">Paths</a>) so they are accessible outside your local network.</li>
<li>See <a href="encryption.html">Encryption of Data at Rest and in Transit</a> for information about how data would be protected.</li>
</ul>
</li>
</ul>
<br><div class="Note">Note: If only accessing your Middle Tier service within your office or within your VPN, these steps are not needed.</div>
<br><br><h2>Set Up Security Certificates</h2>
<ol>
<li>Purchase and download a security certificate from a certificate authority such as GoDaddy. The certificate must be in pfx format and must be created with the following purpose: "ensure the identity of a remote computer over HTTPS".</li>
<li>Go to Control Panel, Administrator Tools, IIS Manager.</li>
<li>In the left-hand pane, left-click the top-most item in the tree view. <br><img src="images/middletierIISMgr.gif" width="778" height="676" class="ImageInParagraph"/></li>
<li>In the middle-pane, select Server Certificates. <br><img src="images/middletierSvcMgr2.gif" width="672" height="480" class="ImageInParagraph"/></li>
<li>In the right-hand pane, click Import. <br><img src="images/middletierImportCert.gif" width="364" height="259" class="ImageInParagraph"/></li>
<li>Browse for the pfx file. Type in your password for the pfx file. Ensure that <i>Allow this certificate to be exported</i> is checked. Click OK. <br><img src="images/middletierSelfCert2.gif" width="640" height="480" class="ImageInParagraph"/><p>Make note of the exact Issued To name. You will use this name in the URL when attempting to connect to the Middle Tier.</p>
</li>
<li>Go back to the IIS Manager main screen. In the left-pane, left-click on the web site, usually called Default Web Site. <br><img src="images/middletierDefaultWebSite.gif" width="778" height="676" class="ImageInParagraph"/></li>
<li>In the right-hand pane, click Bindings... <br><img src="images/middletierBindings.gif" width="576" height="269" class="ImageInParagraph"/></li>
<li>Click Add... <br><img src="images/middletierBindingAdd.gif" width="473" height="252" class="ImageInParagraph"/></li>
<li>Set Type to <i>https</i>, then select the SSL certificate imported in step 6. Click OK, then click Close.</li>
</ol>
<p>IMPORTANT: When attempting to connect the Middle Tier, you must use the name the certificate was Issued To, and the URL must begin with 'https'. For example, if the certificate was issued to derek.abc.com, the Choose Database window should look like this when attempting to connect to the Middle Tier:</p>
<img src="images/middletierChooseDatabase.gif" width="730" height="609"/>		</div>
	</div>
</body>
</html>```
