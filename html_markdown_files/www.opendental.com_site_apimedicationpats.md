# File: ./www.opendental.com/site/apimedicationpats.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API MedicationPats</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apimedicationpats','apispecification','documentation')">
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
		<div class="TopBar2"><p>API MedicationPats</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96medicationpat.html" target="_blank">MedicationPat Database Schema.</a></p>
<h2>MedicationPats GET</h2>
<p>Version Added: 21.3</p>
<p>Gets a list of all medications for a given patient.</p>
<p><b>Example Request:</b><br> GET /medicationpats?PatNum=234</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br>  "MedicationPatNum": 45,<br>  "PatNum": "234",<br>  "medName": "Metformin",<br>  "MedicationNum": 12,<br>  "PatNote": "500mg, taken twice a day.",<br>  "DateStart": "2000-06-20",<br>  "DateStop": "0001-01-01",<br>  "ProvNum": 1<br> },<br> etc...<br> ]<br></span></p>
<h2>MedicationPats POST</h2>
<p>Version Added: 21.3</p>
<p>Attaches a medication to a patient. </p>
<p><b>PatNum:</b> Required. <br><b>medName: </b>Required. Tries to match to an existing medication. If a new medication must be created, it will be assumed to be generic rather than brand. For more control, use medication POST.<br><b>MedicationNum: </b><span style="color:red">Rarely used.</span> Just use<b> medName</b> instead, which handles insertion of a Medication automatically. If MedicationNum is used, then medName is not required.<br><br><b>PatNote: </b>Optional. <br><b>DateStart: </b>Optional. String in "yyyy-MM-dd" format. Default "0001-01-01".<br><b>DateStop:</b> Optional. String in "yyyy-MM-dd" format. Default "0001-01-01".<br><b>ProvNum: </b>Optional. Default is 0.<br></p>
<p><b>Example Requests:</b><br> POST /medicationpats<br></p>
<p><span class="codeblock"> {<br>  "PatNum": 234,<br>  "medName": "Metformin"<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br>  "PatNum": 234,<br>  "medName": "Metformin",<br>  "PatNote": "500mg, taken twice a day.",<br>  "DateStart": "2006-02-01",<br>  "DateStop": "0001-01-01",<br>  "ProvNum": 1<br> }<br></span></p>
<p><b>Example Response:</b><br> 201 Created<br> 400 BadRequest (Missing or Invalid fields)<br> 404 NotFound "Patient not found", "Provider not found" or "Medication not found"<br></p>
<h2>MedicationPats PUT</h2>
<p>Version Added: 22.1</p>
<p>Updates the medication associated with a patient. </p>
<p><b>MedicationPatNum:</b> Required in the URL. <br><br><b>PatNote: </b>Optional. String for notes specific to this patient's medication.<br><b>DateStart: </b>Optional. String in "yyyy-MM-dd" format. Set to an empty string to reset to default of "0001-01-01".<br><b>DateStop:</b> Optional. String in "yyyy-MM-dd" format. Set to an empty string to reset to default of "0001-01-01".<br><b>ProvNum: </b>Optional. <br></p>
<p><b>Example Requests:</b><br> PUT /medicationpats/212<br></p>
<p><span class="codeblock"> {<br>  "PatNote": "500mg, taken twice a day.",<br>  "DateStart": "2006-02-01",<br>  "DateStop": "2022-05-11",<br>  "ProvNum": 1<br> } </span></p>
<p><b>Example Response:</b><br> 200 OK<br> 400 BadRequest (Missing or Invalid fields)<br> 404 NotFound "Provider not found", "Provider not found" or "MedicationPat not found"<br></p>
<h2>MedicationPats DELETE</h2>
<p>Version Added: 22.1</p>
<p>Deletes a MedicationPat by MedicationPatNum. </p>
<p><b>MedicationPatNum:</b> Required in URL. <br></p>
<p><b>Example Request:</b><br> DELETE /medicationpats/5<br></p>
<p><b>Example Response:</b><br> 200 OK<br> 400 BadRequest "MedicationPatNum is required."<br> 404 NotFound "MedicationPat not found."<br></p>
		</div>
	</div>
</body>
</html>```
