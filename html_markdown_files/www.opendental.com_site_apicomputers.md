# File: ./www.opendental.com/site/apicomputers.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Computers</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apicomputers','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Computers</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7computer.html">Computers</a> for additional information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96computer.html" target="_blank">Computer Database Schema.</a></p>
<h2>Computers GET</h2>
<p>Version Added: 23.1.30</p>
<p>Gets a list of computers.</p>
<p><b>LastHeartBeat</b> indicates which computers are actively running. See <a href="../OpenDentalDocumentation23-1.xml">Database Schema</a> for additional information.</p>
<p><b>Example Request:</b><br> GET /computers<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "ComputerNum": 1,<br> "CompName": "JORDANS",<br> "LastHeartBeat": "0001-01-01 00:00:00"<br> },<br> {<br> "ComputerNum": 3,<br> "CompName": "ROCHELLES",<br> "LastHeartBeat": "0001-01-01 00:00:00"<br> },<br> {<br> "ComputerNum": 5,<br> "CompName": "SARAHL",<br> "LastHeartBeat": "0001-01-01 00:00:00"<br> },<br> {<br> "ComputerNum": 7,<br> "CompName": "JUSTINE",<br> "LastHeartBeat": "2023-06-28 14:55:25"<br> },<br> {<br> "ComputerNum": 9,<br> "CompName": "JTS",<br> "LastHeartBeat": "0001-01-01 00:00:00"<br> },<br> {<br> "ComputerNum": 11,<br> "CompName": "DEREKR",<br> "LastHeartBeat": "0001-01-01 00:00:00"<br> },<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest<br></p>
		</div>
	</div>
</body>
</html>```
