# File: ./www.opendental.com/site/apidefinitions.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Definitions</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apidefinitions','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Definitions</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96definition.html" target="_blank">Definition Database Schema.</a></p>
<h2>Definitions GET</h2>
<p>Version Added: 21.1</p>
<p>includeHidden is an optional parameter that defaults to false.</p>
<p><b>Example Requests:</b><br> GET /definitions<br> GET /definitions?Offset=200<br> GET /definitions?Category=1<br> GET /definitions?Category=1&amp;includeHidden=true<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br> "DefNum": 293,<br> "ItemName": "Sales Tax",<br> "ItemValue": "+",<br> "Category": 1,<br> "category": "AdjTypes",<br> "isHidden": "false"<br> },<br>  {<br> "DefNum": 8,<br> "ItemName": "Professional Discount",<br> "ItemValue": "-",<br> "Category": 1,<br> "category": "AdjTypes",<br> "isHidden": "false"<br> },<br>  {<br> "DefNum": 9,<br> "ItemName": "Cash Discount",<br> "ItemValue": "-",<br> "Category": 1,<br> "category": "AdjTypes",<br> "isHidden": "false"<br> },<br> etc...<br> ]<br></span></p>
<h2>Definitions POST (create)</h2>
<p>Version Added: 22.1</p>
<p>Creates a new Definition, attempts to set the Category (definition.Category) will be silently ignored.</p>
<p><b>ItemName</b>: Required. Name of the definition.<br><b>category</b>: Required. See the list of current <a href="../OpenDentalDocumentation22-1.xml">Definitions</a> for a valid definition.Category name.</p>
<p><b>ItemValue</b>: Optional. Values will be validated differently for each Category.<br><b>isHidden</b>: Optional. Defaults to "false".</p>
<b>Example Request:</b><br> POST /definitions<br><p><span class="codeblock"> {<br> "ItemName": "Interest Payment",<br> "category": "PaymentTypes"<br> } </span></p>
<p><span class="codeblock"> {<br> "ItemName": "Cash Discount",<br> "ItemValue":"-",<br> "category": "AdjTypes",<br> "isHidden":"false"<br> } </span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DefNum": 12,<br> "ItemName": "Cash Discount",<br> "ItemValue":"-",<br> "Category": 1,<br> "category":"AdjTypes",<br> "isHidden":"false"<br> } </span></p>
 201 Created<br> 400 BadRequest (Missing or Invalid fields)<br>		</div>
	</div>
</body>
</html>```
