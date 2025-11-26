# File: ./www.opendental.com/site/apiuserods.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Userods</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiuserods','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Userods</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7securityusers.html">User Edit</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96userod.html" target="_blank">Userod Database Schema.</a></p>
<h2>Userods GET</h2>
<p>Version Added: 21.3</p>
<p>Gets a list of users (called userod since "user" is a reserved word in mysql). Users are separate entities from Providers and Employees, although they can be linked. A user can be a provider, an employee, both, or neither. CEMT users are not included.</p>
<p><b>includeHidden:</b> (Added in version 22.4.24) Optional. Either "true" or "false". Set to "true" to return userods marked as hidden alongside those who are not hidden. Default "false".<br><b>includeCEMT:</b> (Added in version 25.1.10) Optional. Either "true" or "false". Set to "true" to return userods that are designated as CEMT as well as those that are not. Default "false".<br></p>
<p>Returned fields are detailed below:</p>
<p><b>userGroupNums:</b> (Added in version 25.1.10) An array of UserGroupNums, in [1,2,3] format.<br><b>EmployeeNum:</b> Contains the employeeNum if the user is a employee. Otherwise, 0.<br><b>employeeName:</b> The first and last name of the employee. Blank if user is not an employee.<br><b>ProviderNum: </b>Contains the provNum if the user is a provider. Otherwise, 0.<br><b>providerName:</b> The full name of the provider, including suffix. Blank if user is not a provider.<br></p>
<p><b>Example Requests:</b><br> GET /userods<br> GET /userods?includeHidden=true</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br> "UserNum": 1,<br>  "UserName": "Lynda",<br>  "userGroupNums": [2],<br>  "EmployeeNum": 0,<br>  "employeeName": "",<br>  "ClinicNum": 1,<br>  "ProviderNum": 9,<br>  "providerName": "Lynda Larson, DMD",<br>  "emailAddress": "LyndaLarson@email.com",<br>  "IsHidden": "false",<br> "UserNumCEMT": 0,<br>  "IsPasswordResetRequired": "false"<br> },<br>  {<br>  "UserNum": 2,<br>  "UserName": "Charlie",<br>  "userGroupNums": [1,5,7],<br>  "EmployeeNum": 3,<br>  "employeeName": "Charles Sorenson",<br>  "ProviderNum": 0,<br>  "providerName": "",<br>  "ClinicNum": 1,<br>  "emailAddress": "Chuck@hotmail.com",<br>  "IsHidden": "true",<br> "UserNumCEMT": 0,<br> "IsPasswordResetRequired": "false"<br> },<br>  {<br>  "UserNum": 3,<br>  "UserName": "Becca",<br>  "userGroupNums": [3,4],<br>  "EmployeeNum": 4,<br>  "employeeName": "Becca Alexandria",<br>  "ProviderNum": 6,<br>  "providerName": "Becca Alexandria",<br>  "ClinicNum": 2,<br>  "emailAddress": "BAlexandria@gmail.com",<br>  "IsHidden": "false",<br> "UserNumCEMT": 0,<br>  "IsPasswordResetRequired": "true"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br></p>
<h2>Userods POST (create)</h2>
<p>Version Added: 22.1</p>
<p><b>UserName: </b>Required. Must be unique. Cannot end with whitespace.<br><b>UserGroupNum:</b> Required. Obtain this separately with <a href="apiusergroups.html"> UserGroups GET</a>. In the response, only the UserGroupNum used in the POST is returned even though users can belong to multiple user groups.<br><b>Password:</b> Required. Strong password is required, so it must be at least 8 characters and have at least one number, one uppercase letter, and one lowercase letter. If the office preference is turned on for requiring special characters, it must also contain a symbol such as $, #, &gt;.<br><b>IsPasswordResetRequired:</b> (Added in version 25.1.10) Optional. Either "true" or "false". Default is "false".<br></p>
<p><b>Example Request:</b><br> POST /userods<br></p>
<p><span class="codeblock"> {<br> "UserName": "Sally",<br> "UserGroupNum": 2,<br> "Password": "My1password"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "UserNum": 7,<br>  "UserName": "Sally",<br>  "EmployeeNum": 0,<br>  "employeeName": "",<br>  "ProviderNum": 0,<br>  "providerName": "",<br>  "ClinicNum": 0,<br>  "emailAddress": "",<br>  "IsHidden": "false",<br>  "UserGroupNum": 2,<br>  "Password": "My1password",<br> "IsPasswordResetRequired": "false"<br> }<br></span></p>
<p> 201 Created<br> 400 Bad Request (with explanation)<br> 404 Not Found (with explanation) </p>
<h2>Userods PUT (update)</h2>
<p>Version Added: 22.4.20</p>
<p>Updates an existing user.</p>
<p><b>UserNum: </b>Required in the URL. <br><b>userGroupNums:</b> (Added in version 25.1.10) Optional. An array of UserGroupNums, in [1,2,3] format.<br><b>EmployeeNum:</b> Optional. EmployeeNum for an employee.<br><b>ProviderNum:</b> Optional. ProvNum for a provider.<br><b>ClinicNum:</b> Optional. ClinicNum for a clinic.<br><b>IsHidden:</b> Optional. Either "true" or "false".<br><b>IsPasswordResetRequired:</b> (Added in version 25.1.10) Optional. Either "true" or "false".<br></p>
<p><b>Example Requests:</b><br> PUT /userods/2<br></p>
<p><span class="codeblock"> {<br> "IsHidden": "true"<br> }<br></span></p>
<p> or </p>
<p><span class="codeblock"> {<br> "userGroupNums": [2,4,8],<br> "EmployeeNum": 3,<br> "ProviderNum": 2,<br> "ClinicNum": 1,<br> "IsHidden": "false"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "UserNum": 2,<br> "UserName": "User",<br> "userGroupNums": [2,4,8],<br> "EmployeeNum": 3,<br> "employeeName": "Beth Assistant",<br> "ProviderNum": 2,<br> "providerName": "Tina Jones",<br> "ClinicNum": 1,<br> "emailAddress": "",<br> "IsHidden": "false",<br> "UserNumCEMT": 0,<br> "IsPasswordResetRequired": "false"<br> }<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation) </p>
		</div>
	</div>
</body>
</html>```
