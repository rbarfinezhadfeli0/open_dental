# File: ./www.opendental.com/site/apiallergies.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Allergies</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiallergies','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Allergies</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96allergy.html" target="_blank">Allergy Database Schema.</a></p>
<h2>Allergies GET</h2>
<p>Version Added: 21.1</p>
<p>Gets all allergies for a specified patient.</p>
<p><b>PatNum:</b> Required.</p>
<p><b>Example Request:</b><br> GET /allergies?PatNum=15</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br>  "AllergyNum": 1, <br>  "AllergyDefNum": 4,<br>  "PatNum": 15,<br>  "defDescription": "Penicillin",<br>  "defSnomedType": "None",<br>  "Reaction": "Rash",<br>  "StatusIsActive": "true",<br>  "DateAdverseReaction": "2020-03-18"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Allergies POST</h2>
<p>Version Added: 21.3</p>
<p>Attaches an AllergyDef to a patient. </p>
<p><b>AllergyDefNum:</b><span style="color:red"> Rarely used.</span> Just use <b>defDescription</b> instead, which handles insertion of AllergyDef automatically.<br><b>PatNum:</b> Required. <br><b>defDescription:</b> Required unless you choose to use <b>AllergyDefNum.</b><br><br><b>Reaction:</b> Optional. String describing the adverse reaction.<br><b>StatusIsActive:</b> Optional. Either "true" or "false". Default "true".<br><b>DateAdverseReaction:</b> Optional. String in "yyyy-MM-dd" format. Default "0001-01-01".<br></p>
<p><b>Example Requests:</b><br> POST /allergies</p>
<p><span class="codeblock"> {<br>  "PatNum": 12,<br>  "AllergyDefNum": "243"<br> }<br></span></p>
 or<br><br><p><span class="codeblock"> {<br>  "PatNum": 12,<br>  "defDescription": "Penicillin",<br>  "Reaction": "Hives",<br>  "DateAdverseReaction": "2019-09-23"<br> }<br></span></p>
<p><b>Example Responses:<br></b> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Allergies PUT</h2>
<p>Version Added: 22.1</p>
<p>Updates the allergy associated with a patient. </p>
<p><b>AllergyNum: </b> Required in the URL.<br><br><b>Reaction:</b> String describing the adverse reaction. <br><b>DateAdverseReaction:</b> String in "yyyy-MM-dd" format. <br><b>StatusIsActive:</b> Either "true" or "false". <br></p>
<p><b>Example Request:</b><br> PUT /allergies/12</p>
<p><span class="codeblock"> {<br>  "Reaction": "Rash",<br>  "DateAdverseReaction": "2022-04-13",<br>  "StatusIsActive": "true"<br> }<br></span></p>
<p><b>Example Responses:<br></b> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Allergies DELETE</h2>
<p>Version Added: 22.1</p>
<p>Deletes an allergy associated with a patient.</p>
<p><b>AllergyNum:</b> Required in the URL.<br></p>
<p><b>Example Requests:</b><br> DELETE /allergies/13<br></p>
<p><b>Example Responses:</b><br> 200 OK<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
