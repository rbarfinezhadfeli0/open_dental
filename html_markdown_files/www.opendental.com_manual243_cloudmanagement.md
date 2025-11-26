# File: ./www.opendental.com/manual243/cloudmanagement.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Cloud Management</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('cloudmanagement','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/cloudmanagement.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/cloudmanagement.html" >v24.2</option><option value="https://www.opendental.com/manual241/cloudmanagement.html" >v24.1</option><option value="https://www.opendental.com/manual233/cloudmanagement.html" >v23.3</option><option value="https://www.opendental.com/manual232/cloudmanagement.html" >v23.2</option><option value="https://www.opendental.com/manual231/cloudmanagement.html" >v23.1</option><option value="https://www.opendental.com/manual224/cloudmanagement.html" >v22.4</option><option value="https://www.opendental.com/manual223/cloudmanagement.html" >v22.3</option><option value="https://www.opendental.com/manual222/cloudmanagement.html" >v22.2</option><option value="https://www.opendental.com/manual221/cloudmanagement.html" >v22.1</option><option value="https://www.opendental.com/manual214/cloudmanagement.html" >v21.4</option><option value="https://www.opendental.com/manual213/cloudmanagement.html" >v21.3</option><option value="https://www.opendental.com/manual212/cloudmanagement.html" >v21.2</option><option value="https://www.opendental.com/manual211/cloudmanagement.html" >v21.1</option><option value="https://www.opendental.com/manual205/cloudmanagement.html" >v20.5</option><option value="https://www.opendental.com/manual204/cloudmanagement.html" >v20.4</option><option value="https://www.opendental.com/manual203/cloudmanagement.html" >v20.3</option><option value="https://www.opendental.com/manual202/cloudmanagement.html" >v20.2</option><option value="https://www.opendental.com/manual201/cloudmanagement.html" >v20.1</option><option value="https://www.opendental.com/manual194/cloudmanagement.html" >v19.4</option><option value="https://www.opendental.com/manual193/cloudmanagement.html" >v19.3</option><option value="https://www.opendental.com/manual192/cloudmanagement.html" >v19.2</option><option value="https://www.opendental.com/manual191/cloudmanagement.html" >v19.1</option><option value="https://www.opendental.com/manual184/cloudmanagement.html" >v18.4</option><option value="https://www.opendental.com/manual183/cloudmanagement.html" >v18.3</option><option value="https://www.opendental.com/manual182/cloudmanagement.html" >v18.2</option><option value="https://www.opendental.com/manual181/cloudmanagement.html" >v18.1</option><option value="https://www.opendental.com/manual174/cloudmanagement.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Cloud Management</p></div>
<div class="GeneralPageContent">
<p>For Open Dental Cloud Users, manage cloud sessions, storage, and passwords.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Cloud Management.</p>
<img src="images/cloudManagement.png" width="915" height="500"/><p>This window is only available for <a href="../site/opendentalcloud.html">Open Dental Cloud</a> users.</p>
<h2>Session Management</h2>
<p><b>Current Sessions</b>: Displays the current number of sessions open and the current number of sessions allowed.</p>
<p class="MarginBottomZero"><b>Current Session Grid</b>: Displays currently opened sessions. Information includes the Open Dental user, the computer name where logged in, and the date/time of last activity. </p>
<ul class="MarginBottomGap">
<li><b>Close Selected</b>: Highlight a session and click to close it. </li>
</ul>
<p class="MarginBottomZero"><b>Change Session Limit</b>: Click to add additional Cloud Sessions. The top of the window displays the current numbers of sessions included in your agreement. Additional sessions incur an additional fee. The following window opens. <br/><img src="images/cloudSessionLimit.png" width="350" height="202" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>Current maximum concurrent sessions</b>: The current number of sessions allowed. </li>
<li><b>Desired maximum concurrent sessions</b>: Enter the amount of sessions needed for the office. This cannot be set below the agreement maximum.</li>
</ul>
<h2>Allowed Addresses</h2>
<p>Users with the <i>Allow Login From Any Location</i> permission can log in from any workstation/IP Address. Users without the permission may only login if the IP Address of their workstation is listed (e.g., public IP address). Specified IP Addresses can be added to the Allowed Addresses list.</p>
<p><b>Allow Address</b>: Type an IP Address, then click to add the IP address to the list. Only workstations with a static IP Address can be added.</p>
<p><b>Allow Addressed Grid</b>: Displays the IP address, last Open Dental user logged in, and the last connection date/time.</p>
<p><b>Delete</b>: Highlight a session, then click to delete it from the list.</p>
<p><b>Add Current</b>: Click to add the current session to the list.</p>
<h2>Storage Information</h2>
<p><b>AtoZ Size</b>: The current size of the OpenDentImages folder out of max. (e.g., <span class="codeblock">45/50 GB</span> = 45 GB used out of 50 GB max). Data over the max incurs an additional fee. </p>
<h2>Change Password</h2>
<p>Click<b> Change Password </b>to update the Open Dental Cloud login password.</p>
<img src="images/changeOfficePassword.png" width="521" height="238"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Old Password</b>: Enter the current password.</li>
<li><b>New Password</b>: Enter the new password.</li>
<li><b>Show</b>: Click to view password. </li>
</ul>
<p>Click<b> Change</b> to save.</p>
<p><div class="Note">Note: To update user specific passwords, see <a href="changepassword.html">Change Password</a>.</div>
</p>
</div>
</div>
</body>
</html>```
