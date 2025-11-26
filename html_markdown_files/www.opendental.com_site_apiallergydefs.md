# File: ./www.opendental.com/site/apiallergydefs.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API AllergyDefs</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiallergydefs','apispecification','documentation')">
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
		<div class="TopBar2"><p>API AllergyDefs</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96allergydef.html" target="_blank">AllergyDef Database Schema.</a></p>
<h2>AllergyDefs GET</h2>
<p>Version Added: 21.3</p>
<p> Gets a list of all allergies that that are assigned to patients.</p>
<p><span style="color:red">Rarely used. Usually just use Allergies GET and POST.</span></p>
<p><b>Example Requests:</b><br> GET /allergydefs<br> GET /allergydefs?Offset=200<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br>  "AllergyDefNum": 44,<br>  "Description ": "Allergy - Phentermine",<br>  "IsHidden": "false",<br>  "DateTStamp": "2020-07-17 02:45:38",<br>  "SnomedType": "",<br>  "MedicationNum": 0,<br>  "UniiCode": "",<br> },<br>  {<br>  "AllergyDefNum": 45,<br>  "Description ": "Allergy - Sudogest",<br>  "IsHidden": "false",<br>  "DateTStamp": "2015-12-10 05:40:32",<br>  "SnomedType": "",<br>  "MedicationNum": 0,<br>  "UniiCode": "",<br> },<br> etc...<br> ]<br></span></p>
<h2>AllergyDefs POST</h2>
<p>Version Added: 21.3</p>
<p>Inserts a single AllergyDef using a unique <b>Description.</b></p>
<p><span style="color:red">Rarely used. Usually just use Allergies GET and POST.</span></p>
<p><b>Example Request:</b><br> POST /allergydefs</p>
<p><span class="codeblock"> {<br> "Description": "Tylenol"<br> }<br></span></p>
<p><b>Example Response:<br></b> 201 Created<br> 400 BadRequest "Description is required" or "An AllergyDef with that name already exists".<br></p>
		</div>
	</div>
</body>
</html>```
