# File: ./www.opendental.com/site/apipopups.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Popups</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apipopups','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Popups</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96popup.html" target="_blank">Popup Database Schema.</a></p>
<h2>Popups GET</h2>
<p>Version Added: 21.4</p>
<p>Gets active and disabled popups for a patient and associated Family and SuperFamily. For versions 22.2 and later, the IsDisabled field is deprecated and may give unreliable information. DateTimeDisabled, also introduced in 22.2, should be referenced instead.</p>
<p><b>Example Request:</b><br> GET /popups?PatNum=10<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [ <br> {<br> "PopupNum": 10,<br> "PatNum": 21,<br> "Description": "Ask about medications.",<br> "IsDisabled": "false",<br> "PopupLevel": "SuperFamily",<br> "DateTimeEntry": "2025-03-21 13:11:18",<br> "IsArchived": "false",<br> "PopupNumArchive": 0,<br> "DateTimeDisabled": "0001-01-01 00:00:00"<br> },<br> {<br> "PopupNum": 9,<br> "PatNum": 12,<br> "Description": "Verify cell phone number is accurate.",<br> "IsDisabled": "false",<br> "PopupLevel": "Family",<br> "DateTimeEntry": "2025-03-21 13:10:43",<br> "IsArchived": "false",<br> "PopupNumArchive": 0,<br> "DateTimeDisabled": "0001-01-01 00:00:00"<br> },<br> {<br> "PopupNum": 8,<br> "PatNum": 11,<br> "Description": "Needs to fill out paperwork.",<br> "IsDisabled": "false",<br> "PopupLevel": "Patient",<br> "DateTimeEntry": "2025-03-21 13:10:27",<br> "IsArchived": "false",<br> "PopupNumArchive": 0,<br> "DateTimeDisabled": "0001-01-01 00:00:00"<br> }<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Popups POST (create)</h2>
<p>Version Added: 21.1</p>
<p>Be careful. Popups tend to be annoying to users and are usually reserved for more important notes.</p>
<p><b>PatNum:</b> Required.<br><b>Description:</b> Required.<br><b>PopupLevel:</b> Optional, either "Patient", which is triggered when patient is selected in Open Dental, "Family", which is triggered when any member of the patient's family is selected in Open Dental, or "SuperFamily", which is triggered when any member of the patient's super family is selected in Open Dental. The patient must be part of a SuperFamily for "SuperFamily" to be valid. Default is "Patient".<br><b>DateTimeDisabled: </b>(Added in version 25.1.12) Optional. String in "yyyy-MM-dd HH:mm:ss" format. Popup will be disabled after this date and time. Set to "0001-01-01 00:00:00" to never disable. Default "0001-01-01 00:00:00".<br></p>
<p><b>Example Request:</b><br> POST /popups<br></p>
<p><span class="codeblock"> {<br> "PatNum": 11,<br> "Description": "Needs to fill out paperwork",<br> "PopupLevel": "Patient"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PopupNum": 8,<br> "PatNum": 11,<br> "Description": "Needs to fill out paperwork",<br> "IsDisabled": "false",<br> "PopupLevel": "Patient",<br> "DateTimeEntry": "2025-03-21 13:10:27",<br> "IsArchived": "false",<br> "PopupNumArchive": 0,<br> "DateTimeDisabled": "0001-01-01 00:00:00"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Popups PUT (update)</h2>
<p>Version Added: 25.1.12</p>
<p>Updates a popup. Popups are self-archiving, meaning that if an existing popup's Description is changed, then a new copy of the popup is created with IsArchived set to true, and a PopupNumArchive equal to the primary key of the Popup being modified. </p>
<p><b>PopupNum:</b> Required in the URL.<br></p>
<p><b>Description: </b>The text of the popup. Overwrites existing Description.<br><b>PopupLevel: </b>Either "Patient", "Family", or "SuperFamily".<br><b>DateTimeDisabled: </b>String in "yyyy-MM-dd HH:mm:ss" format. Popup will be disabled after this date and time. Set to "0001-01-01 00:00:00" to never disable.<br></p>
<p><b>Example Requests:</b><br> PUT /popups/17<br></p>
<p><span class="codeblock"> {<br> "DateTimeDisabled": "0001-01-01 00:00:00"<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br> "Description": "Verify address",<br> "PopupLevel": "Family",<br> "DateTimeDisabled": "2025-10-15 10:00:00"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PopupNum": 17,<br> "PatNum": 13,<br> "Description": "Verify address",<br> "IsDisabled": "false",<br> "PopupLevel": "Family",<br> "DateTimeEntry": "2025-03-04 09:43:21",<br> "IsArchived": "false",<br> "PopupNumArchive": 0,<br> "DateTimeDisabled": "2025-10-15 10:00:00"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
