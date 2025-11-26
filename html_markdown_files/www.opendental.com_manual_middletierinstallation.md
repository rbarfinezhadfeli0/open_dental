# File: ./www.opendental.com/manual/middletierinstallation.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Middle Tier Installation</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('middletierinstallation','middletier','advancedtopics','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/middletierinstallation.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/middletierinstallation.html" >v24.2</option><option value="https://www.opendental.com/manual241/middletierinstallation.html" >v24.1</option><option value="https://www.opendental.com/manual233/middletierinstallation.html" >v23.3</option><option value="https://www.opendental.com/manual232/middletierinstallation.html" >v23.2</option><option value="https://www.opendental.com/manual231/middletierinstallation.html" >v23.1</option><option value="https://www.opendental.com/manual224/middletierinstallation.html" >v22.4</option><option value="https://www.opendental.com/manual223/middletierinstallation.html" >v22.3</option><option value="https://www.opendental.com/manual222/middletierinstallation.html" >v22.2</option><option value="https://www.opendental.com/manual221/middletierinstallation.html" >v22.1</option><option value="https://www.opendental.com/manual214/middletierinstallation.html" >v21.4</option><option value="https://www.opendental.com/manual213/middletierinstallation.html" >v21.3</option><option value="https://www.opendental.com/manual212/middletierinstallation.html" >v21.2</option><option value="https://www.opendental.com/manual211/middletierinstallation.html" >v21.1</option><option value="https://www.opendental.com/manual205/middletierinstallation.html" >v20.5</option><option value="https://www.opendental.com/manual204/middletierinstallation.html" >v20.4</option><option value="https://www.opendental.com/manual203/middletierinstallation.html" >v20.3</option><option value="https://www.opendental.com/manual202/middletierinstallation.html" >v20.2</option><option value="https://www.opendental.com/manual201/middletierinstallation.html" >v20.1</option><option value="https://www.opendental.com/manual194/middletierinstallation.html" >v19.4</option><option value="https://www.opendental.com/manual193/middletierinstallation.html" >v19.3</option><option value="https://www.opendental.com/manual192/middletierinstallation.html" >v19.2</option><option value="https://www.opendental.com/manual191/middletierinstallation.html" >v19.1</option><option value="https://www.opendental.com/manual184/middletierinstallation.html" >v18.4</option><option value="https://www.opendental.com/manual183/middletierinstallation.html" >v18.3</option><option value="https://www.opendental.com/manual182/middletierinstallation.html" >v18.2</option><option value="https://www.opendental.com/manual181/middletierinstallation.html" >v18.1</option><option value="https://www.opendental.com/manual174/middletierinstallation.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Middle Tier Installation</p></div>
<div class="GeneralPageContent">
<p>See <a href="middletier.html">Middle Tier</a>.</p>
<p>Follow the steps below to install Middle Tier.</p>
<h2>Before Setup</h2>
<p>Install and perform updates directly from the Middle Tier server. Any attempt to perform an update from another computer will cause errors. </p>
<p class="MarginBottomZero">These items must be checked before beginning setting up Middle Tier. </p>
<ul class="MarginBottomGap">
<li>Locate the OpenDentImages folder, then run <i>Setup.exe</i>. This ensures all the correct libraries and folders are installed.</li>
<li>Ensure that Open Dental can connect to the production database on the selected Middle Tier server.</li>
<li>Make sure all Open Dental Users that will be connecting through Middle Tier have a <a href="changepassword.html">Password</a> created.</li>
<li>In the production database, change the <i>Update Server</i> in <a href="preferences.html">Preferences</a> to match the Middle Tier server name.</li>
<li>See <a href="securitymysql.html">MySQL Security</a> if strong MySQL security is required.</li>
</ul>
<h2>Installation</h2>
<p>Perform the installation directly on the Middle Tier server. Log in as an administrative user.</p>
<p class="MarginBottomZero"><b>Step 1</b>: Download this file (right-click, Save As): <a href="../resources/OpenDentalServerConfig.xml" download>OpenDentalServerConfig.xml</a>, and place it in the application directory of Open Dental on the Middle Tier server. Edit the file to set the users and passwords.<br/><img src="images/openDentalServerConfig.png" width="573" height="364" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li>If MySQL users/passwords are not set up, use <i>root</i> for the User and leave the password blank.</li>
<li>To enable running reports through Middle Tier, also enter MySQL user credentials in the <i>UserLow</i> and <i>PasswordLow</i> sections. See <a href="securitymysql.html">MySQL Security</a> for instructions on creating a MySQL <i>read-only</i> user account for this purpose. If a read only user account is not needed, the root user can be used.</li>
</ul>
<p><div class="Note">Note: Step 2 varies depending on the Windows edition. For Windows Server versions, see Step 2A. For Windows 10/11, see Step 2B.</div>
</p>
<p class="MarginBottomZero"><b>Step 2A</b>: Windows Server Users </p>
<ol class="MarginBottomGap">
<li>Navigate to the Manage menu and select Add Roles and Features.</li>
<li>Select Role-based or feature-based installation.</li>
<li>Within Server Selection, ensure the information selected is accurate and valid. If yes, then click Next.</li>
<li>Ensure that all aspects of IIS, ASP.net, and DotNet are selected within the Server (IIS) selection. <ul>
<li>Server (IIS) <ul>
<li>Common HTTP Features <ul>
<li>Default Document</li>
<li>Directory Browsing</li>
<li>HTTP Errors</li>
<li>Static Content</li>
</ul>
</li>
<li>Security <ul>
<li>Request Filtering</li>
<li>IIS Client Certificate Mapping Authentication</li>
<li>Windows Authentication</li>
</ul>
</li>
<li>Application Development <ul>
<li>.Net Extensibility 3.5</li>
<li>.Net Extensibility 4.8</li>
<li>ASP.NET 4.8</li>
<li>ISAPI Extensions</li>
<li>ISAPI Filters</li>
</ul>
</li>
</ul>
</li>
<li>Management Tools <ul>
<li>IIS Management Console</li>
<li>IIS 6 Management Compatibility <ul>
<li>IIS Metabase Compatibility</li>
</ul>
</li>
<li>IIS Management Scripts and Tools</li>
<li>Management Service</li>
</ul>
<img src="images/mtServerRoles.png" width="629" height="745"/></li>
</ul>
</li>
<li>Verify that .Net 3.5 and 4.8 features are selected.  <ul>
<li>NET Framework 3.5 Features <ul>
<li>Net Framework 3.5 (includes .NET 2.0 and 3.0)</li>
<li>HTTP Activation</li>
<li>Non-HTTP Activation</li>
</ul>
</li>
<li>.NET Framework 4.8 Features <ul>
<li>.NET Framework 4.8</li>
<li>ASP.NET 4.8</li>
<li>WCF Services (all)</li>
</ul>
<img src="images/mtNet.png" width="629" height="448"/></li>
</ul>
</li>
<li>Confirm the selections and click <b>Install</b>.</li>
</ol>
<p class="MarginBottomZero"><b>Step 2B</b>: Windows 10 / Windows 11 Users </p>
<ol class="MarginBottomGap">
<li>Open Windows Features by pressing Win + R to open Run and type 'optionalfeatures', click Enter.</li>
<li>In Windows Features, ensure the following features are enabled: <ul>
<li>.NET Framework 4.8 Advanced Services <ul>
<li>ASP.NET 4.8</li>
<li>WCF Services (all)</li>
</ul>
</li>
<li>Internet Information Services <ul>
<li>Web Management Tools <ul>
<li>IIS Management Console</li>
</ul>
</li>
<li>World Wide Web Services <ul>
<li>Application Development Services <ul>
<li>.NET Extensibility 3.5</li>
<li>.NET Extensibility 4.8</li>
<li>Application Initialization</li>
<li>ASP.NET 4.8</li>
<li>ISAPI Extensions</li>
<li>ISAPI Filters</li>
</ul>
</li>
</ul>
</li>
<li>Common HTTP Features <ul>
<li>Default Document</li>
<li>Static Content</li>
</ul>
</li>
<li>Security <ul>
<li>IIS Client Certificate Mapping Authentication</li>
<li>Request Filtering</li>
<li>Windows Authentication</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<img src="images/windowsMT1.png" width="421" height="413"/><br/><img src="images/windowsMT2.png" width="403" height="869" class="ImageInParagraph"/><li>Click OK and allow Windows to install the additional features.</li>
</ol>
<p class="MarginBottomZero"><b>Step 3</b>: Open the IIS Management Console: </p>
<ol class="MarginBottomGap">
<li>Open Internet Information Services (IIS) Manager by searching the Start menu or Win + R and enter 'InetMgr.exe', click <b>Enter</b>.</li>
<div class="Note">Note: On Windows Server, open Server Manager and click IIS. Do not use the second IIS option further down for the older IIS 6.0.</div>
<li>Expand Connections and click Application Pools. <br/><img src="images/iisManagement.png" width="629" height="311" class="ImageInParagraph"/></li>
<li>Right-click DefaultAppPool, Advanced Settings. <br/><img src="images/appPoolAdvSettings.png" width="408" height="324" class="ImageInParagraph"/></li>
<li>Ensure the .NET CLR Version is 4.0 and Enable 32-Bit Applications is True.</li>
<li>Click OK.</li>
</ol>
<p><b>Step 4</b>: In Connections, right-click Default Website, Add Application.</p>
<img src="images/websiteAdd.gif" width="519" height="386"/><p>The Alias determines how the connection is referred to in the URI. This can be anything, but the physical path needs to point to the Open Dental application folder.</p>
<p class="MarginBottomZero"><b>Step 5</b>: Configure .Net Globalization with the appropriate Culture settings. </p>
<ol class="MarginBottomGap">
<li>Click on OpenDentalServer, then double click .NET Globalization.</li>
<img src="images/middletierOpenDentalServer.png" width="629" height="311"/><li>Set the Culture and UI Culture languages to match the region.</li>
<img src="images/middletierNetGlobalization.png" width="629" height="311"/><li>Set Enable Client Based Culture to True and click Apply.</li>
</ol>
<p><b>Step 6</b>: Open the IIS Manager and select the OpenDentalServer site in the object browser. Double-click on the Configuration Editor.</p>
<img src="images/IISConfig1.PNG" width="915" height="819"/><p><b>Step 7</b>: Use the Section dropdown at the top of the Configuration Editor to select the <i>system.web/httpRuntime</i> section</p>
<img src="images/IISConfig2.PNG" width="915" height="669"/><p><b>Step 8</b>: Modify the maxRequestLength attribute and click <b>Apply</b> on the right.</p>
<p><div class="Note">Note: The maxRequestLength value is in kilobytes while the maxAllowedContentLength is in bytes.</div>
</p>
<img src="images/IISConfig3.PNG" width="915" height="606"/><p><b>Step 9</b>: Use the Section dropdown at the top of the Configuration Editor to select the <i>system.webServer/security/requestFiltering</i> section. </p>
<img src="images/IISConfig4.PNG" width="915" height="668"/><p><b>Step 10</b>: Expand the requestLimits attribute, modify the maxAllowedContentLength value, and click <b>Apply</b> on the right.</p>
<img src="images/IISConfig5.PNG" width="915" height="608"/><p><div class="Note">Note: After making these edits it may be necessary to restart the site by selecting the the site name (e.g., Default Web Site) in the object browser on the left and selecting Restart under the Manage Website section on the right.</div>
</p>
<p><b>Step 11</b>: When connecting from a client workstation, the Choose Database window looks similar to this. Test this on the server first, then on workstations. </p>
<img src="images/chooseDatabaseServer.png" width="725" height="669"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Enter the <b>URI</b>. If unsure what to use for the URI, see What is my URI? in Troubleshooting below.</li>
<li>Enter the log on credentials, <b>Open Dental User (not MySQL user)</b> and <b>Password</b>, of the user logging in.</li>
<li>Check <b>Log me in automatically</b> to allow users to automatically log on using their associated Windows user. See, Single Sign-on below.</li>
</ul>
<p>The above connections settings will be used from other workstations, but not from the Middle Tier server. After the initial testing, the upper direct connection settings will be used anytime on the server. This is required in order to perform version updates.</p>
<p><b>Step 12</b>: When running Open Dental as Administrator and connecting via Middle Tier, there should be a FreeDentalConfig file in the application folder similar to the image below. This file should replace the existing .xml file on all the workstations. <br/><img src="images/midtierFreeDentConfig.gif" width="626" height="253" class="ImageInParagraph"/></p>
<h2>Additional Setup Options</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><a href="proxyserver.html">Proxy Server</a></li>
<li><a href="middletiersecuritycert.html">Middle Tier Security Certificate</a> (Middle Tier across internet)</li>
<li><a href="hostmultipledatabases.html">Host Multiple Databases from One Web Server</a></li>
</ul>
<h2>Single Sign-on</h2>
<p>Set up single sign-on to allow users to automatically log into Open Dental. </p>
<p class="MarginBottomZero"><b>To enable</b>: </p>
<ol class="MarginBottomGap">
<li>Launch Open Dental.</li>
<li>In the Choose Database window, enter the Open Dental user name and password.</li>
<li>Check<i> Log me in automatically</i>.</li>
<li>Click OK to save.</li>
</ol>
<p>The FreeDentalConfig file will store the state of the Log me in automatically check box and the credentials will be stored within the Credential Manager. See Technical Details below for more information. </p>
<p class="MarginBottomZero"><b>To disable</b> (requires the <i>Choose Database</i>, <a href="permissions.html">Permissions</a>): </p>
<ol class="MarginBottomGap">
<li>Launch Open Dental.</li>
<li>In the <a href="mainmenu.html">Main Menu</a> select File, Choose Database to open the Choose Database window.</li>
<li>Uncheck Log me in automatically.</li>
<li>Click OK to save.</li>
</ol>
<p>The FreeDentalConfig file will store the state of the Log me in automatically check box and the user will be prompted to enter their user name and password the next time Open Dental is launched. </p>
<p class="MarginBottomZero">If the user does not have security permissions, disable single sign-on in the FreeDentalConfig file: </p>
<ol class="MarginBottomGap">
<li>Navigate to the Open Dental directory, typically <b>C:\Program Files (x86)\Open Dental</b>.</li>
<li>Right-click the FreeDentalConfig file and select Edit or Open With and select Notepad.</li>
<li>Look for <span class="codeblock">&lt;UsingAutoLogin&gt;True&lt;/UsingAutoLogin&gt;</span> and replace True with False.</li>
<li>Save the file.</li>
</ol>
<p>The next time the user launches Open Dental, they will be prompted to enter their user name and password.</p>
<h2>Technical Details</h2>
<p>When using the single sign-on feature via Middle Tier Open Dental makes use of the Credential Manager that comes natively to all Windows 8 and higher versions. The Credential Manager was designed by Microsoft for 3rd party app developers on the Windows Store. This created a uniform and secure place for Microsoft app developers to store user credentials and passwords. The information entered in to the Credential Manager requires a user sign in to access and takes care of all encryption. As such the user should not remove the Credential Manager entry that Open Dental has made or else the feature will no longer work.</p>
<p>The Windows user currently logged in must have read and write permissions to the FreeDentalConfig file in order to enable single sign-on. Do not right-click on the Open Dental shortcut on the Desktop and run as administrator if the Windows user currently logged in does not have elevated privileges. Windows will prompt for administrator credentials when the user does not have sufficient privileges. Entering another user's credentials will cause the Open Dental credentials entered into the Choose Database window to be stored under the other user's Credential Manager and single sign-on may not work as expected. </p>
<p>Also see <a href="middletiertroubleshooting.html">Middle Tier Troubleshooting</a></p>
</div>
</div>
</body>
</html>```
