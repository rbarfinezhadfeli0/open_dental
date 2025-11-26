# File: ./www.opendental.com/site/apicovspans.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API CovSpans</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apicovspans','apispecification','documentation')">
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
		<div class="TopBar2"><p>API CovSpans</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Coverage Spans are specific procedure code ranges used by <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7inscatssetup.html">Insurance Categories</a>. Also see <a href="apicovcats.html">API CovCats</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96covspan.html" target="_blank">CovSpan Database Schema.</a></p>
<h2>CovSpans GET (single)</h2>
<p>Version Added: 24.1.19</p>
<p>Gets a single CovSpan.</p>
<p><b>CovSpanNum:</b> Required.<br></p>
<p><b>Example Requests:</b><br> GET /covspans/40</p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "CovSpanNum": 40,<br> "CovCatNum": 15,<br> "FromCode": "D4000",<br> "ToCode": "D4999"<br> }<br></span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>CovSpans GET (multiple)</h2>
<p>Version Added: 24.1.19</p>
<p>Gets a list of CovSpans.</p>
<p><b>CovCatNum:</b> Optional. FK to covcat.CovCatNum.<br></p>
<p><b>Example Requests:</b><br> GET /covspans<br> GET /covspans?CovCatNum=10<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "CovSpanNum": 32,<br> "CovCatNum": 10,<br> "FromCode": "D0000",<br> "ToCode": "D7999"<br> },<br> {<br> "CovSpanNum": 33,<br> "CovCatNum": 10,<br> "FromCode": "D9000",<br> "ToCode": "D9999"<br> }<br> ]<br></span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>CovSpans POST (create)</h2>
<p>Version Added: 24.1.22</p>
<p> Creates a CovSpan.</p>
<p><b>CovCatNum: </b>Required. FK to covcat.CovCatNum.<br><b>FromCode: </b>Required. Lower range of the span. Must be alphabetically less than ToCode. Does not need to be a valid code.<br><b>ToCode: </b>Required. Upper range of the span. Must be alphabetically greater than FromCode. Does not need to be a valid code.<br></p>
<p><b>Example Request:</b><br> POST /covspans<br></p>
<p><span class="codeblock"> {<br> "CovCatNum": 37,<br> "FromCode": "D1400",<br> "ToCode": "D1499"<br>  }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "CovSpanNum": 45,<br> "CovCatNum": 37,<br> "FromCode": "D1400",<br> "ToCode": "D1499"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>CovSpans PUT (update)</h2>
<p>Version Added: 24.1.22</p>
<p>Updates a CovSpan.</p>
<p><b>CovSpanNum:</b> Required in the URL.<br></p>
<p><b>FromCode: </b>Lower range of the span. Must be alphabetically less than ToCode. Does not need to be a valid code.<br><b>ToCode: </b>Upper range of the span. Must be alphabetically greater than FromCode. Does not need to be a valid code.<br></p>
<p><b>Example Request:</b><br> PUT /covspans/34<br></p>
<p><span class="codeblock"> {<br> "FromCode": "D1400",<br> "ToCode": "D1499"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "CovSpanNum": 34,<br> "CovCatNum": 37,<br> "FromCode": "D1400",<br> "ToCode": "D1499"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>CovSpans DELETE</h2>
<p>Version Added: 24.1.22</p>
<p>Deletes a CovSpan.</p>
<p><b>CovSpanNum:</b> Required in the URL.<br></p>
<p><b>Example Requests:</b><br> DELETE /covspans/13<br></p>
<p><b>Example Responses:</b><br> 200 OK<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
