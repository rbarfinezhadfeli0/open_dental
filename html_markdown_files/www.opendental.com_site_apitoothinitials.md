# File: ./www.opendental.com/site/apitoothinitials.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API ToothInitials</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apitoothinitials','apispecification','documentation')">
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
		<div class="TopBar2"><p>API ToothInitials</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7missingteeth.html">Missing/Primary Teeth</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96toothinitial.html" target="_blank">ToothInitial Database Schema.</a></p>
<h2>ToothInitials GET</h2>
<p>Version Added: 24.2.3</p>
<p>Gets all toothinitials.</p>
<p><b>PatNum:</b> Optional.<br></p>
<p><b>Example Requests:</b><br> GET /toothinitials<br> GET /toothinitials?PatNum=13<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "ToothInitialNum": 322,<br> "PatNum": 13,<br> "ToothNum": "32",<br> "InitialType": "Missing",<br> "Movement": "0",<br> "DrawingSegment": "",<br> "ColorDraw": "0,0,0",<br> "SecDateTEntry": "2024-05-30 12:18:00",<br> "SecDateTEdit": "2024-05-30 12:18:00",<br> "DrawText": ""<br> },<br> {<br> "ToothInitialNum": 324,<br> "PatNum": 13,<br> "ToothNum": "17",<br> "InitialType": "Hidden",<br> "Movement": "0",<br> "DrawingSegment": "",<br> "ColorDraw": "0,0,0",<br> "SecDateTEntry": "2024-05-30 12:18:08",<br> "SecDateTEdit": "2024-05-30 12:18:08",<br> "DrawText": ""<br> },<br> {<br> "ToothInitialNum": 344,<br> "PatNum": 13,<br> "ToothNum": "22",<br> "InitialType": "Rotate",<br> "Movement": "-20",<br> "DrawingSegment": "",<br> "ColorDraw": "0,0,0",<br> "SecDateTEntry": "2024-05-30 12:42:57",<br> "SecDateTEdit": "2024-05-30 12:42:57",<br> "DrawText": ""<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>ToothInitials POST (create)</h2>
<p>Version Added: 24.2.3</p>
<p>Creates a toothinitial for a patient.</p>
<p><b>PatNum: </b>Required.<br><b>ToothNum:</b> Required. A single tooth number, either 1-32 or A-T.<br><b>InitialType:</b> Required. Either "Missing", "Hidden", or "Primary".<br></p>
<p><b>Example Request:</b><br> POST /toothinitials<br></p>
<p><span class="codeblock"> {<br> "PatNum": 13,<br> "ToothNum": 32,<br> "InitialType": "Missing"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "ToothInitialNum": 346,<br> "PatNum": 13,<br> "ToothNum": "32",<br> "InitialType": "Missing",<br> "Movement": "0",<br> "DrawingSegment": "",<br> "ColorDraw": "0,0,0",<br> "SecDateTEntry": "2024-05-30 14:11:19",<br> "SecDateTEdit": "2024-05-30 14:11:19",<br> "DrawText": ""<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>ToothInitials DELETE</h2>
<p>Version Added: 24.2.3</p>
<p>Deletes an existing toothinitial with an InitialType of "Missing", "Hidden", or "Primary".</p>
<p><b>ToothInitialNum:</b> Required in the URL.<br></p>
<p><b>Example Request:</b><br> DELETE /toothinitials/346<br></p>
<p><b>Example Responses:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
