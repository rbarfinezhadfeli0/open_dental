# File: ./www.opendental.com/site/apisecurity.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API SecurityPerms</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apisecurity','apispecification','documentation')">
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
		<div class="TopBar2"><p>API SecurityPerms</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<h2>SecurityPerms GET</h2>
<p>Version Added: 22.2</p>
<p>Gets all <a href="apipermissions.html">API Permissions</a> for a single dental office. Uses the Customer's API Key specified in the API request header.</p>
<p><b>Example Request:</b><br> GET /securityperms<br></p>
<p><b>Example Response:</b><br><br><span class="codeblock"> [<br> {<br> "Permission": "ApiReadAll",<br> "HasPermission": "true"<br> },<br> {<br> "Permission": "ApiAllOthers",<br> "HasPermission": "true"<br> },<br> {<br> "Permission": "ApiComm",<br> "HasPermission": "true"<br> },<br> {<br> "Permission": "ApiDocuments",<br> "HasPermission": "false"<br> },<br> {<br> "Permission": "ApiQueries",<br> "HasPermission": "true"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK</p>
		</div>
	</div>
</body>
</html>```
