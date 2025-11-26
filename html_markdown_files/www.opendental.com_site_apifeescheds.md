# File: ./www.opendental.com/site/apifeescheds.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API FeeScheds</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apifeescheds','apispecification','documentation')">
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
		<div class="TopBar2"><p>API FeeScheds</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7feeschedules.html">Fee Schedules</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96feesched.html" target="_blank">FeeSched Database Schema.</a></p>
<h2>FeeScheds GET</h2>
<p>Version Added: 22.4.31</p>
<p>Gets a list of fee schedules.</p>
<p><b>Example Request:</b><br> GET /feescheds<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "FeeSchedNum": 53,<br> "Description": "Standard",<br> "FeeSchedType": "Normal",<br> "ItemOrder": 0,<br> "IsHidden": "false",<br> "IsGlobal": "true",<br> "SecUserNumEntry": 0,<br> "SecDateEntry": "0001-01-01",<br> "SecDateTEdit": "2018-07-18 08:59:30"<br> },<br> {<br> "FeeSchedNum": 54,<br> "Description": "BCBS Co-pay",<br> "FeeSchedType": "CoPay",<br> "ItemOrder": 1,<br> "IsHidden": "false",<br> "IsGlobal": "true",<br> "SecUserNumEntry": 1,<br> "SecDateEntry": "2021-08-05",<br> "SecDateTEdit": "2021-08-05 12:54:44"<br> },<br> {<br> "FeeSchedNum": 55,<br> "Description": "USR Archive",<br> "FeeSchedType": "Normal",<br> "ItemOrder": 2,<br> "IsHidden": "true",<br> "IsGlobal": "true",<br> "SecUserNumEntry": 1,<br> "SecDateEntry": "2022-02-05",<br> "SecDateTEdit": "2022-02-05 13:25:55"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br></p>
<h2>FeeScheds POST (create)</h2>
<p>Version Added: 23.3.7</p>
<p>Creates a new feesched. Global fee schedules only allow a single (global) fee per procedure. When using a non-global fee schedule, fees can be overridden for clinics or providers. See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurefeeoverrides.html">Fee Override for Provider or Clinic</a> for more information.</p>
<p><b>Description: </b>Required. The name of the fee schedule.<br><b>FeeSchedType: </b>Required. Either "Normal", "CoPay", "OutNetwork", "FixedBenefit", or "ManualBlueBook". <b>FeeSchedType</b> cannot be changed once it is inserted.<br><b>IsHidden: </b>Optional. Either "true" or "false". Default false.<br><b>IsGlobal: </b>Optional. Either "true" or "false". Default true.<br></p>
<p><b>Example Requests:</b><br> POST /feescheds<br></p>
<p><span class="codeblock"> {<br> "Description": "BCBS_2023",<br> "FeeSchedType": "Normal"<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br> "Description": "BCBS_2023",<br> "FeeSchedType": "Normal",<br> "IsHidden": "false",<br> "IsGlobal": "false"<br>  }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "FeeSchedNum": 274,<br> "Description": "BCBS_2023",<br> "FeeSchedType": "Normal",<br> "ItemOrder": 16,<br> "IsHidden": "false",<br> "IsGlobal": "false",<br> "SecUserNumEntry": 0,<br> "SecDateEntry": "2023-11-03",<br> "SecDateTEdit": "2023-11-03 13:57:46"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br></p>
<h2>FeeScheds PUT (update)</h2>
<p>Version Added: 23.3.7</p>
<p>Updates a feesched.</p>
<p><b>FeeSchedNum:</b> Required in the URL.<br></p>
<p><b>Description: </b>The name of the fee schedule.<br><b>IsHidden: </b>Either "true" or "false".<br><b>IsGlobal: </b>Either "true" or "false".<br></p>
<p><b>Example Request:</b><br> PUT /feescheds/293<br></p>
<p><span class="codeblock"> {<br> "Description": "BCBS_outdated",<br> "IsHidden": "true",<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "FeeSchedNum": 293,<br> "Description": "BCBS_outdated",<br> "FeeSchedType": "Normal",<br> "ItemOrder": 16,<br> "IsHidden": "true",<br> "IsGlobal": "false",<br> "SecUserNumEntry": 0,<br> "SecDateEntry": "2022-01-01",<br> "SecDateTEdit": "2023-11-03 14:57:46"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
