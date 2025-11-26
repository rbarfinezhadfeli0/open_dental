# File: ./www.opendental.com/site/apiautonotes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API AutoNotes</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiautonotes','apispecification','documentation')">
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
		<div class="TopBar2"><p>API AutoNotes</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7autonotesetup.html">Auto Notes</a> are templates used to insert frequently-used, large, or complex notes.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96autonote.html" target="_blank">AutoNote Database Schema.</a></p>
<h2>AutoNotes GET</h2>
<p>Version Added: 22.3.22</p>
<p>Gets a list of Auto Notes.</p>
<p><b>Parameters:</b></p>
<p><b>Category: </b>Optional. definition.DefNum where definition.Category=41.<br></p>
<p><b>Example Requests:</b><br> GET /autonotes<br> GET /autonotes?Category=340</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "AutoNoteNum": 7,<br> "AutoNoteName": "SOAP",<br> "MainText": "Subjective:\r\nPatient Presents with:[Prompt:\"Chief Complaint\"]\r\nMedical history:\r\nReviewed today's procedure:[Prompt:\"Responsible party\"] [Prompt:\"Patient Response\"]\r\nObjective:\r\nVitals: \r\nExtraoral: [Prompt:\"Extraoral\"]\r\nIntraoral:) [Prompt:\"Intraoral\"]\r\nRadiology:[Prompt:\"Radiology\"]\r\nAssessment:[Prompt:\"Assess\"]\r\nPlan:[Prompt:\"Plan\"]\r\nPARQ\r\nNV",<br> "Category": 0,<br> "category": ""<br> },<br> {<br> "AutoNoteNum": 8,<br> "AutoNoteName": "SRP- Kelli",<br> "MainText": "Review med hx\r\nPt chief complaint\r\nBP taken: [Prompt:\"BP Pulse\"]\r\nQuad/s: [Prompt:\"Quad\"]\r\nAnesth: [Prompt:\"Anesth\"]\r\nCapules: [Prompt:\"Carps\"]\r\nNV\r\nIn",<br> "Category": 0,<br> "category": ""<br> },<br> {<br> "AutoNoteNum": 9,<br> "AutoNoteName": "TMJ Consult",<br> "MainText": "Reviewed Med HX:\r\nPt's Chief concern:\r\nBP Taken: [Prompt:\"BP Pulse\"]\r\nPain: [Prompt:\"Pain\"]\r\nPano and Ceph and I/O photos taken.\r\nMuscle: Left: [Prompt:\"Left Muscle\"] Right: [Prompt:\"Right Muscle\"]\r\nDeviation: [Prompt:\"Deviation\"]",<br> "Category": 340,<br> "category": "Exams"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br></p>
<h2>AutoNotes POST (create)</h2>
<p>Version Added: 22.3.33</p>
<p>Inserts an Auto Note. For information on how Auto Notes are categorized, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitionsautonotes.html">Definitions: Auto Note Categories</a>. When including Prompts in <b>MainText</b>, they must be formatted as <span class="codeblock">[Prompt:\"autonotecontrol.Descript\"]</span>. To obtain the Descript, see <a href="apiautonotecontrols.html">AutoNoteControls GET</a>.</p>
<p><b>AutoNoteName: </b>Required. Identifying name of the Auto Note.<br><b>MainText: </b>Required. Can include static text and Prompts (<a href="apiautonotecontrols.html">Auto Note Controls</a>).<br><b>Category: </b> Optional. definition.DefNum where definition.Category=41. Use 0 to indicate Uncategorized. Default is 0. </p>
<p><b>Example Requests:</b><br> POST /autonotes<br></p>
<p><span class="codeblock"> {<br> "AutoNoteName": "Allergens",<br> "MainText": "Allergies: [Prompt:\"Allergies\"]",<br> "Category": 399<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "AutoNoteNum": 10,<br> "AutoNoteName": "Allergens",<br> "MainText": "Allergies: [Prompt:\"Allergies\"]",<br> "Category": 399,<br> "category": "Patient Information"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (Missing or invalid fields)<br></p>
<h2>AutoNotes PUT (update)</h2>
<p>Version Added: 22.3.33</p>
<p>Updates an Auto Note. For information on how Auto Notes are categorized, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitionsautonotes.html">Definitions: Auto Note Categories</a>. When including Prompts in <b>MainText</b>, they must be formatted as <span class="codeblock">[Prompt:\"autonotecontrol.Descript\"]</span>. To obtain the Descript, see <a href="apiautonotecontrols.html">AutoNoteControls GET</a>.</p>
<p><b>AutoNoteNum: </b>Required in the URL.<br><br><b>AutoNoteName: </b>Optional. Identifying name of the Auto Note.<br><b>MainText: </b>Optional. Can include static text and Prompts (<a href="apiautonotecontrols.html">Auto Note Controls</a>). <br><b>Category: </b> Optional. definition.DefNum where definition.Category=41. Use 0 to indicate Uncategorized. </p>
<p><b>Example Requests:</b><br> PUT /autonotes/5<br></p>
<p><span class="codeblock"> {<br> "AutoNoteName": "Filling",<br> "MainText": "Pt presents with:\r\nAnesthetic: [Prompt:\"Anesth\"]\r\nCarpules: [Prompt:\"Carps\"]",<br> "Category": 425<br> }<br></span></p>
<p> or<br></p>
<p><span class="codeblock"> {<br> "Category": 0<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "AutoNoteNum": 5,<br> "AutoNoteName": "Filling",<br> "MainText": "Pt presents with:\r\nAnesthetic: [Prompt:\"Anesth\"]\r\nCarpules: [Prompt:\"Carps\"]",<br> "Category": 425,<br> "category": "Restorative"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (Missing or invalid fields)<br> 404 NotFound<br></p>
		</div>
	</div>
</body>
</html>```
