# File: ./www.opendental.com/site/apirecalltypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API RecallTypes</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apirecalltypes','apispecification','documentation')">
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
		<div class="TopBar2"><p>API RecallTypes</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7recalltypes.html">Recall Types</a> for additional information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96RecallType.html" target="_blank">RecallType Database Schema.</a></p>
<h2>RecallTypes GET (single)</h2>
<p>Version Added: 24.1.44</p>
<p>Gets a single recalltype.</p>
<p><b>RecallTypeNum:</b> Required in URL.<br></p>
<p><b>Example Request:</b><br> GET /recalltypes/7</p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "RecallTypeNum": 7,<br> "Description": "Exam",<br> "DefaultInterval": "6m1d",<br> "TimePattern": "",<br> "Procedures": "D0120",<br> "AppendToSpecial": "true"<br> }<br></span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>RecallTypes GET (multiple)</h2>
<p>Version Added: 24.1.44</p>
<p>Gets a list of all recalltypes.</p>
<p><b>Example Request:</b><br> GET /recalltypes<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "RecallTypeNum": 1,<br> "Description": "Prophy",<br> "DefaultInterval": "6m1d",<br> "TimePattern": "/XXXX/",<br> "Procedures": "D1110",<br> "AppendToSpecial": "false"<br> },<br> {<br> "RecallTypeNum": 2,<br> "Description": "Child Prophy",<br> "DefaultInterval": "",<br> "TimePattern": "XXX",<br> "Procedures": "D1120,D1208",<br> "AppendToSpecial": "false"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br></p>
		</div>
	</div>
</body>
</html>```
