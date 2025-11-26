# File: ./www.opendental.com/site/apiemployees.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Employees</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiemployees','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Employees</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96employee.html" target="_blank">Employee Database Schema.</a></p>
<h2>Employees GET (single)</h2>
<p>Version Added: 23.3.22</p>
<p>Gets a single employee.</p>
<p><b>Parameters:</b></p>
<p><b>EmployeeNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /employees/17 </p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "EmployeeNum": 17,<br>  "LName": "Elser",<br>  "FName": "Sierra",<br>  "MiddleI": "O",<br>  "IsHidden": "false",<br>  "ClockStatus": "Working",<br>  "PayrollID": "",<br>  "WirelessPhone": "(555)012-4816",<br>  "EmailWork": "ElserS@email.net",<br>  "EmailPersonal": "",<br>  "IsFurloughed": "false",<br>  "ReportsTo": 0<br> }<br></span></p>
<p> 200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>Employees GET (multiple)</h2>
<p>Version Added: 23.3.22</p>
<p>Gets a list of employees.</p>
<p><b>Parameters:</b></p>
<p><b>ReportsTo: </b>Optional. FK to employee.EmployeeNum.<br></p>
<p><b>Example Requests:</b><br> GET /employees<br> GET /employees?ReportsTo=0<br> GET /employees?ReportsTo=17<br></p>
<p><span class="codeblock"> [<br> {<br>  "EmployeeNum": 34,<br>  "LName": "Bell",<br>  "FName": "Sharron",<br>  "MiddleI": "J",<br>  "IsHidden": "false",<br>  "ClockStatus": "Working",<br>  "PayrollID": "",<br>  "WirelessPhone": "(022)920-2325",<br>  "EmailWork": "SharronB@email.net",<br>  "EmailPersonal": "",<br>  "IsFurloughed": "false",<br>  "ReportsTo": 17<br> },<br> {<br>  "EmployeeNum": 52,<br>  "LName": "Grayson",<br>  "FName": "Fiona",<br>  "MiddleI": "D",<br>  "IsHidden": "false",<br>  "ClockStatus": "Home",<br>  "PayrollID": "",<br>  "WirelessPhone": "(555)122-9202",<br>  "EmailWork": "GraysonF@email.net",<br>  "EmailPersonal": "",<br>  "IsFurloughed": "false",<br>  "ReportsTo": 17<br> }<br> ]<br></span></p>
<p><b>Example Response:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
