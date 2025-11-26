# File: ./www.opendental.com/manual/networkusers.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Network Users</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('networkusers','securitycomputers','computernetworksetup','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/networkusers.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/networkusers.html" >v24.2</option><option value="https://www.opendental.com/manual241/networkusers.html" >v24.1</option><option value="https://www.opendental.com/manual233/networkusers.html" >v23.3</option><option value="https://www.opendental.com/manual232/networkusers.html" >v23.2</option><option value="https://www.opendental.com/manual231/networkusers.html" >v23.1</option><option value="https://www.opendental.com/manual224/networkusers.html" >v22.4</option><option value="https://www.opendental.com/manual223/networkusers.html" >v22.3</option><option value="https://www.opendental.com/manual222/networkusers.html" >v22.2</option><option value="https://www.opendental.com/manual221/networkusers.html" >v22.1</option><option value="https://www.opendental.com/manual214/networkusers.html" >v21.4</option><option value="https://www.opendental.com/manual213/networkusers.html" >v21.3</option><option value="https://www.opendental.com/manual212/networkusers.html" >v21.2</option><option value="https://www.opendental.com/manual211/networkusers.html" >v21.1</option><option value="https://www.opendental.com/manual205/networkusers.html" >v20.5</option><option value="https://www.opendental.com/manual204/networkusers.html" >v20.4</option><option value="https://www.opendental.com/manual203/networkusers.html" >v20.3</option><option value="https://www.opendental.com/manual202/networkusers.html" >v20.2</option><option value="https://www.opendental.com/manual201/networkusers.html" >v20.1</option><option value="https://www.opendental.com/manual194/networkusers.html" >v19.4</option><option value="https://www.opendental.com/manual193/networkusers.html" >v19.3</option><option value="https://www.opendental.com/manual192/networkusers.html" >v19.2</option><option value="https://www.opendental.com/manual191/networkusers.html" >v19.1</option><option value="https://www.opendental.com/manual184/networkusers.html" >v18.4</option><option value="https://www.opendental.com/manual183/networkusers.html" >v18.3</option><option value="https://www.opendental.com/manual182/networkusers.html" >v18.2</option><option value="https://www.opendental.com/manual181/networkusers.html" >v18.1</option><option value="https://www.opendental.com/manual174/networkusers.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Network Users</p></div>
<div class="GeneralPageContent">
<p>For <a href="../site/hipaa.html">HIPAA</a> compliance, practices must have user passwords on every computer. These passwords are a part of <a href="securitycomputers.html">Computer Security</a>, not Open Dental security. If a computer is not in use for a while, then it should be set to automatically log out so that a user needs to use a password to log back in.</p>
<h2>Small Office</h2>
<p>(10 computers or less)</p>
<p class="MarginBottomZero">A small office will usually designate one of their workstations as the server. If possible, it should only be used as the office server and not for day-to-day use. </p>
<ul class="MarginBottomGap">
<li>Each workstation can have individual Windows users or use the same user account. Those user accounts should not have administrative access to protect against accidental installation of viruses or ransomware.</li>
<li>For each workstation to access the shared data folder on the server computer, the credential manager needs to have the admin account credentials added to each workstation. Usually, it is added the first time a computer accesses the server's shared folder and the <i>Save My Credentials</i> box is checked after entering the proper username and password.</li>
</ul>
<p>To create separate users and logins for Open Dental, see <a href="security.html">Security</a>.</p>
<p>To update Open Dental, a user with the <i>Update Install</i> security permission is required.</p>
<h2>Large Office</h2>
<p>(more than 10 computers)</p>
<p>A large office will typically use a Windows Server operating system. Set up an active domain and security policies according to your office policies.</p>
</div>
</div>
</body>
</html>```
