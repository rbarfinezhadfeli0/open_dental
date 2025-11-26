# File: ./www.opendental.com/site/apiperioexams.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API PerioExams</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiperioexams','apispecification','documentation')">
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
		<div class="TopBar2"><p>API PerioExams</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96perioexam.html" target="_blank">PerioExam Database Schema.</a></p>
<h2>PerioExams GET (single)</h2>
<p>Version Added: 22.4.36</p>
<p>Gets a single perioexam.</p>
<p><b>PerioExamNum:</b> Required in the URL.</p>
<p><b>Example Request:</b><br> GET /perioexams/171</p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "PerioExamNum": 171,<br>  "PatNum": 236,<br>  "ExamDate": "2023-04-01",<br>  "ProvNum": 2,<br>  "DateTMeasureEdit": "2023-04-01 05:25:46",<br>  "Note": ""<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>PerioExams GET (multiple)</h2>
<p>Version Added: 22.4.36</p>
<p>Gets a list of perioexams.</p>
<p><b>Parameters</b>: All optional.<br><br><b>PatNum:</b> FK to patient.PatNum.<br><b>ExamDate:</b> String in "yyyy-MM-dd" format. Gets all PerioExams made on or after a certain date.</p>
<p><b>Example Request:</b><br> GET /perioexams?PatNum=236 <br> GET /perioexams?ExamDate=2023-04-01</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br>  "PerioExamNum": 171,<br>  "PatNum": 236,<br>  "ExamDate": "2023-04-01",<br>  "ProvNum": 2,<br>  "DateTMeasureEdit": "2023-04-01 05:25:46",<br>  "Note": ""<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>PerioExams POST</h2>
<p>Version Added: 23.1.20</p>
<p>Inserts a new perioexam for a patient. For more information, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7perio.html">Perio Chart</a>.</p>
<p><span style="color:red">Rarely used.</span> If <b>UpperFacial</b>, <b>UpperLingual</b>, <b>LowerLingual</b>, and/or <b>LowerFacial</b> are passed in, then corresponding PerioMeasures will be created and inserted along with the new PerioExam. Values strings are parsed left to right and will traverse surfaces in that region from the right side of the mouth to the left side (AutoAdvance Left in UI). Each integer (0-9) functions as a Probing measurement for a new surface.</p>
<p>Any bleeding flag characters (b,s,p,c) following the integer sets Bleeding, Suppuration, Plaque, and Calculus respectively for the same surface. Any other characters are ignored. After the region is fully measured, all further characters are ignored. </p>
<p>For example, "UpperFacial":"323b" will insert a PerioMeasure for ToothNum 1 with DB, B, MB values of 3,2,and 3, and a PerioMeasure for ToothNum 1 with a bleeding flag on MB. Use <a href="apiperiomeasures.html">PerioMeasures GET</a> to retrieve any created PerioMeasures.</p>
<p><b>PatNum:</b> Required. FK to patient.PatNum.<br></p>
<p><b>UpperFacial:</b> Optional, string. Probing and Bleeding values for facial surfaces of upper teeth (1-16). Defaults to empty string.<br><b>UpperLingual:</b> Optional, string. Probing and Bleeding values for lingual surfaces of upper teeth (1-16). Defaults to empty string.<br><b>LowerLingual:</b> Optional, string. Probing and Bleeding values for lingual surfaces of lower teeth (17-32). Defaults to empty string.<br><b>LowerFacial:</b> Optional, string. Probing and Bleeding values for facial surfaces of lower teeth (17-32). Defaults to empty string.<br><b>ExamDate: </b>(Added in version 23.3.27) Optional. String in "yyyy-MM-dd" format. Default today.<br><b>ProvNum: </b>(Added in version 23.3.27) Optional. Defaults to the patient's primary provider.<br><b>Note: </b>(Added in version 23.3.27) Optional. Note for the exam.<br></p>
<p><b>Example Request:</b><br> POST /perioexams<br><span class="codeblock"><br> {<br> "PatNum": 20,<br> "UpperFacial": "32b4b32432332332332bs132332331342c3c3253233223p2c3p22b3b343",<br> "UpperLingual": "323,323,322,222,232,222,212,212,212,212,232,323,323,323,343,343",<br> "LowerLingual": "3b2b4b 424 323 323 323 321 323 323.313 42c3c 325 323 322 3p2c3p 22b3b 343c",<br> "LowerFacial": "4 3b 2s 4bs 4p 2bp 4sp 3bsp 2c 3bc 3sc 2bsc 3pc 3bpc 2spc 3bspc"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PerioExamNum": 31,<br> "PatNum": 20,<br> "ExamDate": "2023-05-12",<br> "ProvNum": 3,<br> "DateTMeasureEdit": "2023-05-12 13:21:48",<br> "Note": ""<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>PerioExams PUT (update)</h2>
<p>Version Added: 23.3.27</p>
<p>Updates a perioexam.</p>
<p><b>PerioExamNum:</b> Required in the URL.<br></p>
<p><b>ExamDate: </b>Optional. String in "yyyy-MM-dd" format.<br><b>ProvNum: </b>Optional. FK to provider.ProvNum.<br><b>Note: </b>Optional. Note for the exam. Overwrites existing note.<br></p>
<p><b>Example Request:</b><br> PUT /perioexams/31<br></p>
<p><span class="codeblock"> {<br> "ExamDate": "2023-06-15",<br> "ProvNum": 2,<br> "Note": "Overall improvement!"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PerioExamNum": 31,<br> "PatNum": 20,<br> "ExamDate": "2023-06-15",<br> "ProvNum": 2,<br> "DateTMeasureEdit": "2023-06-15 09:43:54",<br> "Note": "Overall improvement!"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>PerioExams DELETE</h2>
<p>Version Added: 23.3.27</p>
<p>Deletes a perioexam. Also deletes all associated periomeasures.</p>
<p><b>PerioExamNum:</b> Required in the URL.<br></p>
<p><b>Example Request:</b><br> DELETE /perioexams/31<br></p>
<p><b>Example Responses:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
