# File: ./www.opendental.com/site/apiautonotecontrols.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API AutoNoteControls</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiautonotecontrols','apispecification','documentation')">
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
		<div class="TopBar2"><p>API AutoNoteControls</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Auto Note Controls are the prompts for <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7autonotesetup.html">Auto Notes</a>.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96autonotecontrol.html" target="_blank">AutoNoteControl Database Schema.</a></p>
<h2>AutoNoteControls GET</h2>
<p>Version Added: 22.3.22</p>
<p>Gets a list of AutoNoteControls.</p>
<p><b>Example Request:</b><br> GET /autonotecontrols</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "AutoNoteControlNum": 1,<br> "Descript": "Medications",<br> "ControlType": "MultiResponse",<br> "ControlLabel": "Medications",<br> "ControlOptions": "Zantac\r\nValium\r\nAdvair\r\nElavil"<br> },<br> {<br> "AutoNoteControlNum": 2,<br> "Descript": "Allergies",<br> "ControlType": "MultiResponse",<br> "ControlLabel": "Allergies",<br> "ControlOptions": "Amox\r\nLatex\r\nPen VK\r\nCeph\r\nErythro\r\nSulfa"<br> },<br> {<br> "AutoNoteControlNum": 3,<br> "Descript": "BP Pulse",<br> "ControlType": "Text",<br> "ControlLabel": "BP Pulse",<br> "ControlOptions": "BP: / Pulse: "<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest</p>
<h2>AutoNoteControls POST (create)</h2>
<p>Version Added: 22.3</p>
<p>Creates a new AutoNoteControl.</p>
<p><b>Descript</b>: Required. The description of the AutoNoteControl as it will be displayed.<br><b>ControlType</b>: Required. Either "Text", "OneResponse", "MultiResponse".<br><b>ControlLabel</b>: Required. Prompt text.<br><b>ControlOptions</b>: Required unless the ControlType is Text. The list of possible responses, one per line. Responses must be separated by \r\n.</p>
<b>Example Request:</b><br> POST /autonotecontrols<br><span class="codeblock"> {<br> "Descript": "Medications",<br> "ControlType": "MultiResponse",<br> "ControlLabel": "Medications",<br> "ControlOptions": "Zantac\r\nValium\r\nAdvair\r\nElavil"<br> }<br><br></span><b>Example Response</b>:<br><span class="codeblock"> {<br> "AutoNoteControlNum": 5,<br> "Descript": "Medications",<br> "ControlType": "MultiResponse",<br> "ControlLabel": "Medications",<br> "ControlOptions": "Zantac\r\nValium\r\nAdvair\r\nElavil"<br> }<br><br></span> 201 Created<br> 400 BadRequest (Missing or invalid fields)<br><br><h2>AutoNoteControls PUT (update)</h2>
<p>Version Added: 22.3</p>
<p>Updates an existing AutoNoteControl. All fields are optional. </p>
<p><b>AutoNoteControlNum</b>: Required in the URL.<br><br><b>Descript</b>: The description of the AutoNoteControl as it will be displayed.<br><b>ControlType</b>: Either "Text", "OneResponse", "MultiResponse"<br><b>ControlLabel</b>: Prompt text. <br><b>ControlOptions</b>: The list of possible responses, one per line. Responses must be separated by \r\n.</p>
<b>Example Request:</b><br> PUT /autonotecontrols/5<br><span class="codeblock">{<br> "ControlType": "MultiResponse"<br> }<br><br></span> 200 OK<br> 400 BadRequest (Missing or invalid fields) <br> 404 NotFound ("AuotNoteControl not found")<br>		</div>
	</div>
</body>
</html>```
