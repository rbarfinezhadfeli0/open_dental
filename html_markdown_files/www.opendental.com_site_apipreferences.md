# File: ./www.opendental.com/site/apipreferences.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Preferences</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apipreferences','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Preferences</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96preference.html" target="_blank">Preference Database Schema.</a></p>
<h2>Preferences GET </h2>
<p>Version Added: 21.1</p>
<p>PrefName is optional. Otherwise you end up with all ~1000 preferences, paginated.</p>
<p><b>Example Requests:</b><br> GET /preferences?PrefName=RecallDaysPast<br> GET /preferences?Offset=200<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br> "PrefNum": 14,<br> "PrefName": "PracticeDefaultBillType",<br> "ValueString": "40"<br> },<br>  {<br> "PrefNum": 15,<br> "PrefName": "RecallDaysPast",<br> "ValueString": "365"<br> },<br>  {<br> "PrefNum": 16,<br> "PrefName": "RecallDaysFuture",<br> "ValueString": "7"<br> },<br> etc...<br> ]<br></span></p>
		</div>
	</div>
</body>
</html>```
