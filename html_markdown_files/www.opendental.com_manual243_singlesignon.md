# File: ./www.opendental.com/manual243/singlesignon.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Single Sign-On / Domain Login</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('singlesignon','securitysettings','security','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/singlesignon.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/singlesignon.html" >v24.2</option><option value="https://www.opendental.com/manual241/singlesignon.html" >v24.1</option><option value="https://www.opendental.com/manual233/singlesignon.html" >v23.3</option><option value="https://www.opendental.com/manual232/singlesignon.html" >v23.2</option><option value="https://www.opendental.com/manual231/singlesignon.html" >v23.1</option><option value="https://www.opendental.com/manual224/singlesignon.html" >v22.4</option><option value="https://www.opendental.com/manual223/singlesignon.html" >v22.3</option><option value="https://www.opendental.com/manual222/singlesignon.html" >v22.2</option><option value="https://www.opendental.com/manual221/singlesignon.html" >v22.1</option><option value="https://www.opendental.com/manual214/singlesignon.html" >v21.4</option><option value="https://www.opendental.com/manual213/singlesignon.html" >v21.3</option><option value="https://www.opendental.com/manual212/singlesignon.html" >v21.2</option><option value="https://www.opendental.com/manual211/singlesignon.html" >v21.1</option><option value="https://www.opendental.com/manual205/singlesignon.html" >v20.5</option><option value="https://www.opendental.com/manual204/singlesignon.html" >v20.4</option><option value="https://www.opendental.com/manual203/singlesignon.html" >v20.3</option><option value="https://www.opendental.com/manual202/singlesignon.html" >v20.2</option><option value="https://www.opendental.com/manual201/singlesignon.html" >v20.1</option><option value="https://www.opendental.com/manual194/singlesignon.html" >v19.4</option><option value="https://www.opendental.com/manual193/singlesignon.html" >v19.3</option><option value="https://www.opendental.com/manual192/singlesignon.html" >v19.2</option><option value="https://www.opendental.com/manual191/singlesignon.html" >v19.1</option><option value="https://www.opendental.com/manual184/singlesignon.html" >v18.4</option><option value="https://www.opendental.com/manual183/singlesignon.html" >v18.3</option><option value="https://www.opendental.com/manual182/singlesignon.html" >v18.2</option><option value="https://www.opendental.com/manual181/singlesignon.html" >v18.1</option><option value="https://www.opendental.com/manual174/singlesignon.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Single Sign-On / Domain Login</p></div>
<div class="GeneralPageContent">
<p> Setting up Domain Login (also known an single sign-on) will allow users to automatically log into Open Dental using their associated Windows domain user. </p>
<p>In <a href="securitysettings.html">Global Security Settings</a>, locate the Domain Login area.</p>
<img src="images/singlesignonDomainLogin.gif" width="272" height="79"/><p>Alternatively, <a href="cemtsecurity.html">CEMT Security</a> also allows for Domain Login.</p>
<p>Each time the user is logged on automatically, there will be an entry in the audit trail. This feature is useful for large enterprise offices.</p>
<div class="Note">Note: <ul>
<li>Your network must be on an Active Directory domain controller.</li>
<li>Each workstation must be connected to the same network as the domain controller.</li>
<li>A direct connection is required. To use single sign-on with Middle Tier, see <a href="middletierinstallation.html">Middle Tier Installation</a>.</li>
<li>If the Admin user has a blank password in Open Dental, the associated domain user will be ignored and the Admin will be logged on.</li>
<li>When the domain path is entered, to help ensure the identity of the domain, we will store the ObjectGuid of the Active Directory domain object. Upon login we will check to make sure the user's current domain matches.</li>
</ul>
</div>
<br/><br/><h2>Enable Domain Login</h2>
<p>Check <b>Domain Login Enabled</b>.</p>
<p>Enter the LDAP URI as the Domain Path (e.g. <b>LDAP://DC=[DomainName],DC=[TopLevelDomain]</b> or <b>LDAP://[DomainName]</b>).</p>
<p>Click <b>OK</b> to close the Global Security Settings window.</p>
<h2>Add Domain User to Open Dental User</h2>
<p>On the <a href="security.html">Security</a>, Users tab, double-click on a user.</p>
<p>On the <a href="securityusers.html">User Edit Window</a>, click [...] next to Domain User and select the domain user.</p>
<img src="images/singlesignonUserEdit.gif" width="455" height="115"/><p>Click <b>OK</b> to save.</p>
<h2>Technical Details</h2>
<p>Logging on remotely (e.g. from a laptop): When a user is logging on remotely, they will need to set up a VPN connection to the same network as the domain controller.</p>
<p class="MarginBottomZero">Single sign-on works in a Terminal Server environment. </p>
<ol class="MarginBottomGap">
<li>Remote App: Single sign-on will log on as normal. The user logged onto the workstation will be used to log on for single sign-on.</li>
<li>Remote Desktop Protocol: Single sign-on will log on using the user logged into Remote Desktop Protocol.</li>
</ol>
</div>
</div>
</body>
</html>```
