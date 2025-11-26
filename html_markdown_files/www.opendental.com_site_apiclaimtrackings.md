# File: ./www.opendental.com/site/apiclaimtrackings.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API ClaimTrackings</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiclaimtrackings','apispecification','documentation')">
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
		<div class="TopBar2"><p>API ClaimTrackings</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96claimtracking.html" target="_blank">ClaimTracking Database Schema.</a></p>
<h2>ClaimTrackings GET</h2>
<p>Version Added: 23.2.5</p>
<p>Gets a list of ClaimTrackings.</p>
<p><b>ClaimNum</b>: Optional. FK to claim.ClaimNum.</p>
<p><b>Example Requests:</b><br> GET /claimtrackings<br> GET /claimtrackings?ClaimNum=25<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "ClaimTrackingNum": 45,<br> "ClaimNum": 19,<br> "TrackingType": "StatusHistory",<br> "UserNum": 1,<br> "DateTimeEntry": "2023-07-20 14:05:45",<br> "Note": "",<br> "TrackingDefNum": 345,<br> "TrackingErrorDefNum": 343<br> },<br> {<br> "ClaimTrackingNum": 46,<br> "ClaimNum": 3,<br> "TrackingType": "StatusHistory",<br> "UserNum": 1,<br> "DateTimeEntry": "2023-07-20 13:23:20",<br> "Note": "",<br> "TrackingDefNum": 341,<br> "TrackingErrorDefNum": 0<br> },<br> {<br> "ClaimTrackingNum": 34,<br> "ClaimNum": 1,<br> "TrackingType": "StatusHistory",<br> "UserNum": 1,<br> "DateTimeEntry": "2023-07-20 13:22:19",<br> "Note": "",<br> "TrackingDefNum": 0,<br> "TrackingErrorDefNum": 0<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 404 NotFound (Claim not found)</p>
<h2>ClaimTrackings POST (create)</h2>
<p>Version Added: 23.2.5</p>
<p>Creates a new ClaimTracking. Requires one-time setup by the Dental Office, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7claimtabstatus.html">Edit Claim - Status History Tab</a>.</p>
<p><b>ClaimNum: </b>Required. FK to claim.ClaimNum.<br><b>Note:</b> Optional. Default empty string.<br><b>TrackingDefNum:</b> Required and cannot be 0 if the ClaimTrackingStatusExcludesNone preference is enabled. If not enabled, <b>TrackingDefNum</b> is optional and defaults to 0 (None). Definition.DefNum where definition.Category=31.<br><b>TrackingErrorDefNum:</b> Optional. Definition.DefNum where definition.Category=43. Default 0.<br></p>
<p><b>Example Request:</b><br> POST /claimtrackings<br></p>
<p><span class="codeblock">{<br> "ClaimNum": 15,<br> "Note": "Missing attachment.",<br> "TrackingDefNum": 339,<br> "TrackingErrorDefNum": 340<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock">{<br> "ClaimTrackingNum": 52,<br> "ClaimNum": 15,<br> "TrackingType": "StatusHistory",<br> "UserNum": 0,<br> "DateTimeEntry": "2023-07-26 09:47:10",<br> "Note": "Missing attachment.",<br> "TrackingDefNum": 339,<br> "TrackingErrorDefNum": 340<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>ClaimTrackings PUT (update)</h2>
<p>Version Added: 23.2.5</p>
<p>Updates an existing ClaimTracking.</p>
<p><b>ClaimTrackingNum:</b> Required in the URL. Primary key.<br><b>Note:</b> Optional. Overwrites existing note.<br><b>TrackingDefNum:</b> Optional. Definition.DefNum where definition.Category=31. Cannot be 0 if the ClaimTrackingStatusExcludesNone preference is enabled. Use 0 to indicate None.<br><b>TrackingErrorDefNum:</b> Optional. Definition.DefNum where definition.Category=43. Use 0 to indicate None.<br></p>
<p><b>Example Request:</b><br> PUT /claimtrackings/52<br></p>
<p><span class="codeblock">{<br> "Note": "Attachments sent.",<br> "TrackingDefNum": 341,<br> "TrackingErrorDefNum": 0<br> }<br></span></p>
<p><b>Example Responses:</b><br><span class="codeblock">{<br> "ClaimTrackingNum": 52,<br> "ClaimNum": 15,<br> "TrackingType": "StatusHistory",<br> "UserNum": 0,<br> "DateTimeEntry": "2023-07-26 10:00:54",<br> "Note": "Attachments sent.",<br> "TrackingDefNum": 341,<br> "TrackingErrorDefNum": 0<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
