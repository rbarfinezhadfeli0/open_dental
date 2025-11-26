# File: ./www.opendental.com/site/apiusergroups.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API UserGroups</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiusergroups','apispecification','documentation')">
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
		<div class="TopBar2"><p>API UserGroups</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7securityusers.html">User Edit</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96usergroup.html" target="_blank">UserGroup Database Schema.</a></p>
<h2>UserGroups GET</h2>
<p>Version Added: 23.2.21</p>
<p>Gets a list of user groups, which can include CEMT user groups. See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7securityusergroups.html">User Group</a>.</p>
<p><b>includeCEMT:</b> Optional. Either "true" or "false". Set to "true" to return usergroups that are designated as CEMT as well as those that are not. Default "false".</p>
<p><b>Example Request:</b><br> GET /usergroups<br> GET /usergroups?includeCEMT=true<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br> "UserGroupNum": 1,<br>  "Description": "Admin",<br>  "UserGroupNumCEMT": 0<br> },<br>  {<br> "UserGroupNum": 3,<br>  "Description": "Security",<br>  "UserGroupNumCEMT": 3<br> },<br>  {<br> "UserGroupNum": 4,<br>  "Description": "HR",<br>  "UserGroupNumCEMT": 0<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 Bad Request (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
