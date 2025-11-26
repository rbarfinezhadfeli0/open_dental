# File: ./www.opendental.com/site/apidiseases.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Diseases</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apidiseases','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Diseases</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7problemmaster.html">Problem List</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96disease.html" target="_blank">Disease Database Schema.</a></p>
<h2>Diseases GET (single)</h2>
<p>Version Added: 24.2.5</p>
<p>Get a single disease (Problem) that can be assigned to a patient.</p>
<p><b>DiseaseNum:</b> Required in the URL.</p>
<p><b>Example Request:</b><br> GET /diseases/2<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "DiseaseNum": 2,<br>  "PatNum": 41,<br>  "DiseaseDefNum": 44,<br>  "diseaseDefName": "COPD",<br>  "PatNote": "",<br>  "ProbStatus": "Active",<br>  "DateStart": "0001-01-01",<br>  "DateStop": "0001-01-01"<br> } </span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>Diseases GET (multiple)</h2>
<p>Version Added: 21.3</p>
<p> Gets a list of all diseases (Problems) that are assigned to a patient.</p>
<p><b>Parameters:</b></p>
<p><b>PatNum:</b> Optional (Optional after version 24.2.5).</p>
<p><b>Example Requests:</b><br> GET /diseases<br> GET /diseases?PatNum=41<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br>  "DiseaseNum": 2,<br>  "PatNum": 41,<br>  "DiseaseDefNum": 44,<br>  "diseaseDefName": "COPD",<br>  "PatNote": "",<br>  "ProbStatus": "Active",<br>  "DateStart": "0001-01-01",<br>  "DateStop": "0001-01-01"<br> },<br>  {<br>  "DiseaseNum": 8,<br>  "PatNum": 41,<br>  "DiseaseDefNum": 58,<br>  "diseaseDefName": "Severe Back Pain",<br>  "PatNote": "",<br>  "ProbStatus": "Inactive",<br>  "DateStart": "0001-01-01",<br>  "DateStop": "0001-01-01"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Diseases POST</h2>
<p>Version Added: 21.3</p>
<p>Attaches a diseaseDef (Problem) to a patient. </p>
<p><b>PatNum: </b>Required. <br><b>DiseaseDefNum: </b><span style="color:red">Rarely used.</span> Just use <b>diseaseDefName </b>instead, which handles insertion of DiseaseDef automatically.<br><b>diseaseDefName:</b> Required unless you choose to use <b>DiseaseDefNum.</b><br><br><b>DateStart: </b>Optional. String in "yyyy-MM-dd" format. Default "0001-01-01".<br><b>DateStop: </b>Optional. String in "yyyy-MM-dd" format. Default "0001-01-01".<br><b>ProbStatus:</b> Optional. Either "Active", "Resolved" or "Inactive". Default "Active".<br><b>PatNote:</b> Optional.<br></p>
<p><b>Example Requests:</b><br> POST /diseases<br></p>
<p><span class="codeblock"> {<br>  "PatNum": 74,<br>  "diseaseDefName": "Diabetes"<br> }<br></span> or<br><span class="codeblock"> {<br>  "PatNum": 74,<br>  "DiseaseDefName": "Severe Back Pain",<br>  "PatNote": "Patient underwent corrective surgery 04/11/2019",<br>  "ProbStatus": "Resolved",<br>  "DateStart": "2016-01-01",<br>  "DateStop": "2019-04-30"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DiseaseNum": 15,<br> "PatNum": 74,<br> "DiseaseDefNum": 28<br> "diseaseDefName": "Severe Back Pain",<br> "PatNote": "Patient underwent corrective surgery 04/11/2019",<br> "ProbStatus": "Resolved",<br> "DateStart": "2016-01-01",<br> "DateStop": "2019-04-30"<br> }<br></span></p>
<p> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Diseases PUT</h2>
<p>Version Added: 22.1</p>
<p>Updates a disease (Problem) for a patient. </p>
<p><b>DiseaseNum:</b> Required in the URL.<br><br><b>DateStart:</b> Optional. String in "yyyy-MM-dd" format.<br><b>DateStop:</b> Optional. String in "yyyy-MM-dd" format.<br><b>ProbStatus:</b> Optional. Either "Active", "Resolved" or "Inactive".<br><b>PatNote:</b> Optional. Will overwrite existing note.<br></p>
<p><b>Example Request:</b><br> PUT /diseases/8<br></p>
<p><span class="codeblock"> {<br> "ProbStatus": "Resolved",<br> "DateStart": "2020-10-01",<br> "DateStop": "2022-05-25"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DiseaseNum": 8,<br> "PatNum": 26,<br> "DiseaseDefNum": 14<br> "diseaseDefName": "Asthma",<br> "PatNote": "",<br> "ProbStatus": "Resolved",<br> "DateStart": "2020-10-01",<br> "DateStop": "2022-05-25"<br> }<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Diseases DELETE</h2>
<p>Version Added: 22.1</p>
<p>Deletes a disease (Problem) for a patient. </p>
<p><b>DiseaseNum:</b> Required in the URL.<br></p>
<p><b>Example Request:</b><br> DELETE /diseases/8<br></p>
<p><b>Example Response:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
