# File: ./www.opendental.com/site/apidiscountplansubs.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API DiscountPlanSubs</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apidiscountplansubs','apispecification','documentation')">
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
		<div class="TopBar2"><p>API DiscountPlanSubs</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7discountplan.html">Discount Plan</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96discountplansub.html" target="_blank">DiscountPlanSub Database Schema.</a></p>
<h2>DiscountPlanSubs GET</h2>
<p>Version Added: 21.3</p>
<p>Gets a DiscountPlanSub from a patient that is subscribed to a Discount Plan.</p>
<p><b>PatNum:</b> Required.</p>
<p><b>Example Request:</b><br> GET /discountplansubs?PatNum=56<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DiscountSubNum": 32,<br> "DiscountPlanNum": 8,<br> "PatNum": 56,<br> "DateEffective": "2021-01-01",<br> "DateTerm": "2022-01-01",<br> "SubNote": ""<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>DiscountPlanSubs POST</h2>
<p>Version Added: 21.3</p>
<p>Subscribes a patient to an existing DiscountPlan. </p>
<p><b>DiscountPlanNum:</b> Required. <br><b>PatNum: </b>Required.<br><br><b>DateEffective:</b> Optional. String in "yyyy-MM-dd" format. The date when the plan will start impacting procedure fees. Default "0001-01-01" to indicate the beginning of the current calendar year.<br><b>DateTerm: </b>Optional. String in "yyyy-MM-dd" format. The date when the plan will no longer impact procedure fees. Default "0001-01-01" to indicate no end date.<br><b>SubNote: </b>Optional. Subscriber note.<br></p>
<p><b>Example Request:</b><br> POST /discountplansubs<br></p>
<p><span class="codeblock"> {<br>  "DiscountPlanNum": 6,<br>  "PatNum": 67,<br>  "DateEffective": "2021-01-01",<br>  "DateTerm": "2022-01-01"<br> }<br></span></p>
<p><b>Example Response:</b><br> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>DiscountPlanSubs PUT</h2>
<p>Version Added: 22.3.13</p>
<p>Updates an existing DiscountPlanSub. Updating <b>SubNote</b> will overwrite the existing subscriber note.</p>
<p><b>DiscountSubNum:</b> Required in the URL. <br><b>PatNum:</b> Required. The PatNum attached to the DiscountPlanSub.<br><br><b>DateEffective:</b> Optional. String in "yyyy-MM-dd" format.<br><b>DateTerm:</b> Optional. String in "yyyy-MM-dd" format.<br><b>SubNote:</b> Optional. Subscriber note.<br></p>
<p><b>Example Request:</b><br> PUT /discountplansubs/14<br></p>
<p><span class="codeblock"> {<br> "PatNum": 23,<br> "DateEffective": "2022-09-16",<br> "DateTerm": "2024-12-31",<br> "SubNote": "25% discount to services."<br> }<br></span></p>
<p><b>Example Response:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>DiscountPlanSubs DELETE</h2>
<p>Version Added: 23.1.12</p>
<p>Deletes an existing DiscountPlanSub.</p>
<p><b>DiscountSubNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> DELETE /discountplansubs/14</p>
<p><b>Example Response:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
