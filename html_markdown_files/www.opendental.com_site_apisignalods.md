# File: ./www.opendental.com/site/apisignalods.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Signalods</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apisignalods','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Signalods</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96signalod.html" target="_blank">Signalod Database Schema.</a></p>
<h2>Signalods GET</h2>
<p>Version Added: 21.2</p>
<p>SigDateTime is a required parameter. If any Signalods exist after the given dateTime, they will be returned. If a matching Signalod does not exist, it returns an empty list. Store serverDateTime that gets returned and use it to run the next GET.</p>
<p><b>Example Request</b><br> GET /signalods?SigDateTime=2021-02-02%2005%3A05%3A00</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br>  "SignalNum": 71,<br>  "DateViewing": "0001-01-01",<br>  "SigDateTime": "2021-04-15 08:01:46",<br>  "FKey": 0,<br>  "FKeyType": "Undefined",<br>  "IType": "Security",<br>  "RemoteRole": "ClientDirect",<br>  "MsgValue": "",<br>  "serverDateTime": "2021-05-25 08:01:46"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 404 Not Found (with reason)<br> 400 Bad Request (with reason)<br></p>
		</div>
	</div>
</body>
</html>```
