# File: ./www.opendental.com/site/apiproviders.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Providers</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiproviders','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Providers</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96provider.html" target="_blank">Provider Database Schema.</a></p>
<h2>Providers GET (single)</h2>
<p>Version Added: 24.4.17</p>
<p>Gets a single provider.</p>
<p><b>ProvNum: </b>Required in URL.<br></p>
<p><b>Example Request:</b><br> GET /providers/4<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "ProvNum": 4,<br> "Abbr": "HYG2",<br> "LName": "Bently",<br> "FName": "Bruce",<br> "MI": "",<br> "Suffix": "",<br> "FeeSched": 53,<br> "Specialty": 265,<br> "SSN": "",<br> "StateLicense": "",<br> "IsSecondary": "true",<br> "provColor": "164,164,255",<br> "IsHidden": "false",<br> "UsingTIN": "false",<br> "SigOnFile": "false",<br> "NationalProvID": "",<br> "DateTStamp": "2016-03-03 13:10:47",<br> "IsNotPerson": "false",<br> "ProvStatus": "Active",<br> "IsHiddenReport": "false",<br> "Birthdate": "0001-01-01",<br> "SchedNote": "",<br> "PreferredName": "",<br> "serverDateTime": "2021-01-16 12:55:39"<br> }<br></span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>Providers GET (multiple)</h2>
<p>Version Added: 21.1</p>
<p>Gets a list of all providers. Can be optionally filtered by either <b>ClinicNum</b> or <b>DateTStamp</b>. Two different queries are used. ClinicNum is not a field in the Provider table, so it does not get returned in any results.</p>
<p><b>ClinicNum: </b>Optional. Specifying a ClinicNum returns list of non-hidden providers that are either not restricted to a clinic, or are restricted to the ClinicNum provided. When using ClinicNum, a serverDateTime will not be returned.<br><b>DateTStamp </b>(added in version 21.3): Optional. String in "yyyy-MM-dd HH:mm:ss" format. Get providers altered after the specified date and time. This is a good way for you to keep a synchronized copy of providers. Store serverDateTime that gets returned, and use it to run the next GET. </p>
<p><b>Example Requests:</b><br> GET /providers<br> GET /providers?DateTStamp=2021-08-01%2005%3A30%3A00<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br> "ProvNum": 1,<br> "Abbr": "DOC1",<br> "LName": "Albert",<br> "FName": "Brian",<br> "MI": "L",<br> "Suffix": "",<br> "FeeSched": 53,<br> "Specialty": 263,<br> "SSN": "1522864182",<br> "StateLicense": "D7601",<br> "IsSecondary": "false",<br> "provColor": "164,255,164",<br> "IsHidden": "false",<br> "UsingTIN": "true",<br> "SigOnFile": "true",<br> "NationalProvID": "1679608723",<br> "DateTStamp": "2021-08-04 08:33:01",<br> "IsNotPerson": "false",<br> "ProvStatus": "Active",<br> "IsHiddenReport": "false",<br> "Birthdate": "0001-01-01",<br> "SchedNote": "",<br> "PreferredName": "",<br> "serverDateTime": "2021-08-31 12:05:31"<br> },<br>  {<br> "ProvNum": 2, <br> "Abbr": "HYG1",<br> "LName": "Jones",<br> "FName": "Tina",<br> "MI": "",<br> "Suffix": "",<br> "FeeSched": 53,<br> "Specialty": 264,<br> "SSN": "",<br> "StateLicense": "D7601",<br> "IsSecondary": "true",<br> "provColor": "203,151,255",<br> "IsHidden": "false",<br> "UsingTIN": "false",<br> "SigOnFile": "false",<br> "NationalProvID": "1657398425",<br> "DateTStamp": "2021-08-15 13:18:51",<br> "IsNotPerson": "false",<br> "ProvStatus": "Deleted",<br> "IsHiddenReport": "false",<br> "Birthdate": "0001-01-01",<br> "SchedNote": "",<br> "PreferredName": "",<br> "serverDateTime": "2021-08-31 12:05:31"<br> }<br> ]<br></span></p>
<p><b>Example Request:</b><br> GET /providers?ClinicNum=4<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "ProvNum": 6, <br> "Abbr": "HYG2",<br> "LName": "Thomason",<br> "FName": "Shirley",<br> "MI": "",<br> "Suffix": "",<br> "FeeSched": 53,<br> "Specialty": 264,<br> "SSN": "",<br> "StateLicense": "D7601",<br>  "IsSecondary": "true",<br> "provColor": "255,183,183",<br> "IsHidden": "false",<br> "UsingTIN": "false",<br> "SigOnFile": "false",<br> "NationalProvID": "1857495435",<br> "DateTStamp": "2021-07-25 10:20:21",<br> "IsNotPerson": "false",<br> "ProvStatus": "Active",<br> "IsHiddenReport": "false",<br> "Birthdate": "1969-10-01",<br> "SchedNote": "",<br> "PreferredName": "",<br> "serverDateTime": ""<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest "DateTStamp format must be yyyy-MM-dd HH:mm:ss"<br> 404 NotFound "Clinic not found"<br></p>
<h2>Providers POST (create)</h2>
<p>Version Added: 21.4</p>
<p>Creates a new provider, billing entity, or dummy provider. After adding a provider, there's no way to delete it, not even from within Open Dental. The best you can do is to go into Open Dental and hide the provider.</p>
<p><b>Abbr:</b> Required. A short abbreviation that shows in various lists throughout Open Dental.<br><b>LName:</b> Optional. Last name. If billing as an entity, enter the billing entity name.<br><b>FName:</b> Optional. First name.<br><b>MI:</b> Optional. Middle initial.<br><b>Suffix:</b> Optional. MD, DMD, DDS, etc.<br><b>FeeSched:</b> Optional. Foreign key to feesched.FeeSchedNum. Default is the first in the Fee Schedule list.<br><b>Specialty:</b> Optional. Definition.DefNum where definition.Category=35. Default is the first in the Specialty list.<br><b>SSN:</b> Optional. Provider's SSN or TIN. Most offices will enter their TIN here. If SSN the TIN field must be set to "false". SSN/TIN is not allowed to have dashes.<br><b>StateLicense:</b> (Added in version 24.4.31) Optional. The provider's state license number.<br><b>IsSecondary:</b> Optional. True if provider is a hygienist. Default is false.<br><b>IsHidden:</b> Optional. If true, provider will be removed as a selection option in various areas of Open Dental. Default is false.<br><b>UsingTIN:</b> Optional. True if SSN field is storing TIN. Default is true.<br><b>SigOnFile:</b> (Added in version 24.4.17) Optional. Signature on file. May affect what shows on the ADA Claim Forms for treating provider signature. Either "true" or "false". Default is "false".<br><b>NationalProvID:</b> (Added in version 24.4.31) Optional. The provider's national provider ID.<br><b>IsNotPerson:</b> Optional. This is set to true if the provider is used as an entity or organization instead of a person. When set to true, FName and MI must be omitted. Default is false.<br><b>IsHiddenReport:</b> Optional. Determines whether the provider will show on standard reports. Default is false.<br><b>BirthDate:</b> Optional. Provider's birth date in "yyyy-mm-dd" format.<br><b>SchedNote:</b> Optional. Indicates if the provider should be scheduled in a certain way.<br><b>PreferredName:</b> Optional. The preferred name of the provider. This is displayed in the eClipboard.<br></p>
<p><b>Example Request:</b><br> POST /providers<br></p>
<p><span class="codeblock"> {<br>  "Abbr": "DOCE",<br>  "LName": "Fisher",<br>  "FName": "Ethan",<br>  "Suffix": "DDS",<br>  "SSN":"123859778",<br>  "IsHiddenReport": "true",<br>  "Birthdate": "1987-07-17",<br>  "SchedNote": "Root canals only.",<br>  "PreferredName": "Doc E."<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock">{<br>  "ProvNum": 12,<br>  "Abbr": "DOCE",<br>  "LName": "Fisher",<br>  "FName": "Ethan",<br>  "MI": "",<br>  "Suffix": "DDS",<br>  "FeeSched": 53,<br>  "Specialty": 263,<br>  "SSN": "123859778",<br> "StateLicense": "",<br>  "IsSecondary": "false",<br>  "provColor": "0,0,0",<br>  "IsHidden": "false",<br>  "UsingTIN": "true",<br> "SigOnFile": "false",<br> "NationalProvID": "",<br> "DateTStamp": "2021-08-04 08:33:01",<br>  "IsNotPerson": "false",<br> "ProvStatus": "Active",<br>  "IsHiddenReport": "true",<br>  "Birthdate": "1987-07-17",<br>  "SchedNote": "Root canals only.",<br>  "PreferredName": "Doc E.",<br>  "serverDateTime": ""<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Providers PUT (update)</h2>
<p>Version Added: 22.1</p>
<p>All fields are optional.</p>
<p><b>Abbr:</b> The provider's abbreviation. Cannot be blank.<br><b>FName:</b> The provider's first name.<br><b>LName:</b> The provider's last name.<br><b>MI:</b> The provider's middle initial.<br><b>Suffix:</b> The provider's suffix (Jr., III, IV, etc...).<br><b>PreferredName:</b> The provider's preferred name.<br><b>Specialty:</b> The DefNum of the provider's specialty, where the definition category is 35.<br><b>SigOnFile:</b> (Added in version 24.4.17) Signature on file. May affect what shows on the ADA Claim Forms for treating provider signature. Either "true" or "false".<br><b>NationalProvId:</b> The provider's national provider ID. <br><b>StateLicense:</b> The provider's state license number.<br><b>SSN:</b> Provider's SSN or TIN, no dashes.<br><b>UsingTIN:</b> True if SSN field is storing TIN. Valid values are "true" and "false".<br></p>
<p><b>Example Request:</b><br> PUT /providers/13<br></p>
<p><span class="codeblock"> {<br> "Abbr": "DOC1",<br> "FName": "Philip",<br> "LName": "Sherman",<br> "MI": "",<br> "Suffix": "",<br> "PreferredName": "Phil",<br> "Specialty": 264,<br> "NationalProvId": "1245319599", <br> "StateLicense": "183815",<br> "SSN": "123456789",<br> "UsingTIN": "false"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock">{<br>  "ProvNum": 13,<br>  "Abbr": "DOC1",<br>  "LName": "Sherman",<br>  "FName": "Philip",<br>  "MI": "",<br>  "Suffix": "",<br>  "FeeSched": 53,<br>  "Specialty": 263,<br>  "SSN": "123456789",<br> "StateLicense": "D7601",<br>  "IsSecondary": "false",<br>  "provColor": "0,0,0",<br>  "IsHidden": "false",<br>  "UsingTIN": "false",<br> "SigOnFile": "true",<br> "NationalProvID": "1245319599",<br> "DateTStamp": "2021-08-04 08:33:01",<br>  "IsNotPerson": "false",<br> "ProvStatus": "Active",<br>  "IsHiddenReport": "true",<br>  "Birthdate": "1987-07-17",<br>  "SchedNote": "Root canals only.",<br>  "PreferredName": "Phil",<br>  "serverDateTime": ""<br> }<br></span><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
