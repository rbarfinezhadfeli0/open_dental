# File: ./www.opendental.com/site/apilocal.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Modes - Local, Service, and Remote</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apilocal','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Modes - Local, Service, and Remote</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>An API Mode is a way for a third-party application to connect to an Open Dental database. There are three types of modes available: Local, Service, and Remote. Which mode an application should use depends on how the application is developed. In some situations it is possible to use these modes in a Cascading way, when appropriate, to ensure redundancies and to prevent service disruptions. </p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Local API</b>: An instance of our API that runs on every workstation as part of <i>opendental.exe</i>. </li>
<li><b>API Service</b>: An instance of our API that continuously runs on the customer's database server. </li>
<li><b>Remote</b>: A public facing, cloud-hosted version of our API. </li>
</ul>
<h2>Local</h2><p>Version Added: 22.1</p>
<p>The Local API is an instance of our API that runs on a single workstation. Open Dental automatically launches the Local API on startup after the user has successfully logged in. No other action is required from the user. A specific port (30222) is opened and API requests can be sent locally on that workstation.</p>
<p class="MarginBottomZero"><b>Recommended when</b>: </p>
<ul class="MarginBottomGap">
<li>The third-party application is installed on each individual workstation. </li>
</ul>
<p class="MarginBottomZero"><b>Endpoints</b>: </p>
<ul class="MarginBottomGap">
<li>http://localhost:30222/api/v1/</li>
<li>http://127.0.0.1:30222/api/v1/</li>
</ul>
<p>Open Dental will close this port automatically when the software closes. If more than one instance of Open Dental is opened on the workstation, only the first instance will open a port and listen for API requests. Subsequent concurrent instances will not run the Local API. No firewall setting should need to be changed.</p>
<p class="MarginBottomZero"><b>How to Use</b>: </p>
<ol class="MarginBottomGap">
<li>Start Open Dental on a workstation.</li>
<li>Choose a database. The Local API is started automatically.</li>
<li>Software on that workstation can make calls to http://localhost:30222/api/v1/ .</li>
<li>Close Open Dental to stop the Local API.</li>
</ol>
<h2>Service</h2><p>Version Added: 22.2</p>
<p>See <a href="https://tinyurl.com/3m6s3z48">API Guide - The API Service</a>.</p>
<p>The API Service is an instance of our API that continuously runs on a machine. A specific port (30223) is opened and API requests can be sent locally or from in-network workstations. Customers will run this service on the server that is also hosting their database. Installation occurs automatically from the OpenDentalAPIService.exe that is included when updating Open Dental. When started, the API Service will connect to the database specified in the OpenDentalWebConfig.xml file created at installation. It will also attempt to create a localhost firewall rule for port 30223. Log files are also created. These files are located in the \\OpenDental\OpenDentalAPIService directory.</p>
<p class="MarginBottomZero"><b>Recommended when</b>:  </p>
<ul class="MarginBottomGap">
<li>The third-party service is installed upon the database server.</li>
<li>The practice is using Open Dental Cloud.</li>
</ul>
<p class="MarginBottomZero"><b>Endpoints</b>: </p>
<ul class="MarginBottomGap">
<li>http://localhost:30223/api/v1/</li>
<li>http://127.0.0.1:30223/api/v1/</li>
<li>http://{Private IP Address}:30223/api/v1/ </li>
</ul>
<p>An Inbound Rule for port 30223 must be created on the server to allow API requests from other workstations.</p>
<p class="MarginBottomZero"><b>How to Use</b>: </p>
<ol class="MarginBottomGap">
<li>Update the dental office Server that runs the eConnector to version 22.2.16 or later. Open Dental should be run as Admin. <ul>
<li> (One time only) Create an Inbound Rule in Windows Firewall for Port 30223.</li>
</ul>
</li>
<li>The API Service is automatically installed and started on this machine (no other workstations).</li>
<li>Software on the server or any network workstation can make calls to http://{IP Address of Server}:30223/api/v1/ . <ul>
<li>If a subscription has been set up, Database Events will also fire from this machine.</li>
</ul>
</li>
<li>The API Service will automatically start after restarting the server.</li>
<li>Stop the API Service either in Open Dental's Service Manager (Tools &gt; Misc Tools &gt; Service Manager) or with the Windows Service Manager. </li>
</ol>
<p><b>Manual Installation</b>:<br> The API Service is automatically installed and started for dental offices that have the API enabled. However, to manually install the service follow the steps below.</p>
<p class="MarginBottomZero"><b>For versions 22.2.42 and later</b>: </p>
<ol class="MarginBottomGap">
<li>Launch Open Dental as Administrator.</li>
<li>Ensure the API Enabled box is checked in Setup &gt; Advanced Setup &gt; API.</li>
<li>Navigate to Tools &gt; Misc Tools &gt; Service Manager. Click Add.</li>
<li>Name the service OpenDentalAPIService and Browse to select the OpenDentalAPIService.exe.</li>
<li>Click Install, enter your database connection details in the form, click OK, then Start.</li>
</ol>
<p class="MarginBottomZero"><b>For versions 22.2.41 and earlier</b>: </p>
<ol class="MarginBottomGap">
<li>Navigate to \\OpenDental\OpenDentalAPIService and ensure there is an OpenDentalWebConfig.xml <ul>
<li>. If absent, copy the OpenDentalWebConfig.xml from \\OpenDental\OpenDentalEconnector</li>
<li> Move the copy to the OpenDentalAPIService folder. Paste the following line between the &lt;/DatabaseType&gt; and &lt;/DatabaseConnection&gt; nodes: <span class="codeblock">&lt;Note&gt;DentalOffice&lt;/Note&gt;</span></li>
</ul>
</li>
<li>Launch Open Dental as Administrator.</li>
<li>Ensure the API Enabled box is checked in Setup &gt; Advanced Setup &gt; API.</li>
<li>Navigate to Tools &gt; Misc Tools &gt; Service Manager. Click Add.</li>
<li>Name the service OpenDentalAPIService and Browse to select the OpenDentalAPIService.exe.</li>
<li>Click Install and then Start.</li>
</ol>
<p>The API Service can be uninstalled by clicking the Uninstall button within this same window.</p>
<h2>Open Dental Cloud</h2><p>Version Added: 22.3</p>
<p>Users of Open Dental Cloud are able to use the API Service. The virtual machine hosting Open Dental has both the eConnector and the API Service installed for the dental office. The Open Dental Cloud Client passes API requests from the user's workstation to and from the virtual machine. The endpoint is the same as the cloudless API Service. Therefore, a third party software does not even need to distinguish between the customer utilizing Cloud or not.</p>
<p class="MarginBottomZero"><b>How to Use</b>: </p>
<ol class="MarginBottomGap">
<li>Software on the workstation can make calls to: <ul>
<li>http://localhost:30223/api/v1/</li>
<li>http://127.0.0.1:30223/api/v1/</li>
<li>http://localhost:30222/api/v1/</li>
<li>http://127.0.0.1:30222/api/v1/ </li>
</ul>
</li>
<li>API requests can be made as long as the Cloud Client is running</li>
</ol>
<h2>Remote</h2><p>Version Added: 21.1</p>
<p>For developers that want to access data without their software to installed on a customers local network.</p>
<p class="MarginBottomZero"><b>Recommended when</b>: </p>
<ul class="MarginBottomGap">
<li>The third-party application is internet-based. </li>
</ul>
<p class="MarginBottomZero"><b>Endpoint</b>: </p>
<ul class="MarginBottomGap">
<li>https://api.opendental.com/api/v1/</li>
</ul>
<p class="MarginBottomZero"><b>How to Use</b>: </p>
<ol class="MarginBottomGap">
<li>Developer sends a request to https://api.opendental.com/api/v1/ with valid credentials.</li>
<li>OpenDental validates credentials and then routes request to the correct office.</li>
<li>Office receives the request, accesses the database, processes the request, and then routes data back.</li>
</ol>
<h2>Cascading</h2><p>To ensure redundancies and to prevent service interruptions, we recommend developers utilize a "cascade" strategy of API endpoints for their application</p>
<p>Developers may elect to use either the Local or Service modes in addition to our Remote API. Both the Local and Service modes operate on the customer's network, which greatly decreases execution time. They make a single remote web call automatically to validate credentials. Subsequent API requests in these modes can be made without an internet connection. This web call is made once per instance of the Local API and API Service and is valid for six hours until another web call will need to be made.</p>
<p>Most implementations will prefer to use the API Service but will be programmed in such a way to use the Remote API instead, if the API Service were unavailable at the dental office (their server is offline, etc). Similarly, applications using the Local mode should fall back upon the Service and Remote modes, if necessary.</p>
		</div>
	</div>
</body>
</html>```
