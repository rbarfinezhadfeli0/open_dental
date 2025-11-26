# File: ./www.opendental.com/site/apipatientnotes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API PatientNotes</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apipatientnotes','apispecification','documentation')">
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
		<div class="TopBar2"><p>API PatientNotes</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96patientnote.html" target="_blank">PatientNote Database Schema.</a></p>
<h2>PatientNotes GET (single)</h2>
<p>Version Added: 21.2</p>
<p>PatientNotes have a 1:1 relationship to Patients and contain additional information about the patient. The PatNum must be included in the URL.</p>
<p><b>Example Request:</b><br> GET /patientnotes/15<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "PatNum": 15,<br>  "FamFinancial": "",<br>  "Medical": "Diabetes.",<br>  "Service": "No flo", <br>  "MedicalComp": "",<br> "Treatment": "Patient enjoys the outdoors.",<br>  "ICEName": "Carolyn Wright",<br>  "ICEPhone": "(820) 202-1134",<br>  "SecDateTEntry": "2025-06-18 11:48:40",<br>  "SecDateTEdit": "2025-06-18 11:48:40"<br> } </span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>PatientNotes GET (multiple)</h2>
<p>Version Added: 25.2.14</p>
<p>Gets a list of patientNotes.</p>
<p><b>Example Request:</b><br> GET /patientnotes<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br>  "PatNum": 15,<br>  "FamFinancial": "",<br>  "Medical": "Diabetes.",<br>  "Service": "No flo", <br>  "MedicalComp": "",<br> "Treatment": "Patient enjoys the outdoors.",<br>  "ICEName": "Carolyn Wright",<br>  "ICEPhone": "(820) 202-1134",<br>  "SecDateTEntry": "2025-06-18 11:48:40",<br>  "SecDateTEdit": "2025-06-18 11:48:40"<br> },<br> {<br>  "PatNum": 16,<br>  "FamFinancial": "",<br>  "Medical": "Headaches",<br>  "Service": "No flo", <br>  "MedicalComp": "",<br> "Treatment": "Patient enjoys the sports.",<br>  "ICEName": "John White",<br>  "ICEPhone": "(271) 828-1828",<br>  "SecDateTEntry": "2025-09-22 12:08:40",<br>  "SecDateTEdit": "2025-09-22 12:08:40"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br></p>
<h2>PatientNotes PUT </h2>
<p>Version Added: 21.2</p>
<p>Updates a patientNote. If you want to append a note instead of replace, then use PatientNotes GET, and do your own concatenation before calling PUT.</p>
<p><b>PatNum: </b>Required in the URL.<br><br><b>FamFinancial: </b>(added in version 25.2.14). Only one note per family stored with guarantor.<br><b>Medical: </b>(added in version 25.2.14). Replace existing medical history note.<br><b>Service:</b> (added in version 21.4). Replaces existing service note.<br><b>MedicalComp:</b> (added in version 25.2.14). Complete current Medical History.<br><b>Treatment:</b> (added in version 25.2.14). Notes that are not pertinent to the patient's treatment. Also known as Odontogram Notes.<br><b>ICEName: </b>Replaces existing ICEName.<br><b>ICEPhone: </b>String. Replaces existing ICEPhone.<br></p>
<p><b>Example Requests:</b><br> PUT /patientnotes/15<br></p>
<p><span class="codeblock"> {<br>  "Medical": "Unknown family history."<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br>  "ICEName": "Herbert Grayson",<br>  "ICEPhone": "(134) 721-1321"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "PatNum": 15,<br>  "FamFinancial": "",<br>  "Medical": "Unknown family history.",<br>  "Service": "No flo", <br>  "MedicalComp": "",<br> "Treatment": "Patient enjoys the outdoors.",<br>  "ICEName": "Herbert Grayson",<br>  "ICEPhone": "(134) 721-1321",<br>  "SecDateTEntry": "2025-07-28 11:48:40",<br>  "SecDateTEdit": "2025-07-28 11:48:40"<br> } </span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
