# File: ./www.opendental.com/site/apireferrals.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Referrals</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apireferrals','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Referrals</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7referralsetup.html">Referral List</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96referral.html" target="_blank">Referral Database Schema.</a></p>
<h2>Referrals GET (single)</h2>
<p>Version Added: 24.1.34</p>
<p>Gets a single referral.</p>
<p><b>Parameters:</b></p>
<p><b>ReferralNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /referrals/1<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "ReferralNum": 1,<br> "LName": "Davidson",<br> "FName": "Norm",<br> "MName": "",<br> "SSN": "123456789",<br> "UsingTIN": "true",<br> "Specialty": 465,<br> "specialty": "Endodontics",<br> "ST": "OR",<br> "Telephone": "",<br> "Address": "163 Madison Loop",<br> "Address2": "",<br> "City": "Portland",<br> "Zip": "54698",<br> "Note": "",<br> "Phone2": "",<br> "IsHidden": "false",<br> "NotPerson": "false",<br> "Title": "DMD",<br> "EMail": "",<br> "PatNum": 0,<br> "IsDoctor": "true",<br> "DateTStamp": "2021-06-21 10:03:08",<br> "IsPreferred": "true",<br> "BusinessName": "",<br> "DisplayNote": "",<br> "isPatient": "false"<br> } </span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>Referrals GET (multiple)</h2>
<p>Version Added: 21.4</p>
<p>Gets a list of all referral sources. These can be either a provider, patient, or non-person. The description of non-patient sources is stored in the LName field.</p>
<p><b>Parameters:</b> All optional.</p>
<p><b>IsHidden: </b> (Added in version 24.1.34) Filter hidden responses. Either "true" or "false"<br><b>NotPerson: </b> (Added in version 24.1.34) Filter referrals that are marked NotPerson. Either "true" or "false".<br><b>IsDoctor: </b> (Added in version 24.1.34) Filter referrals that are marked IsDoctor. Either "true" or "false".<br><b>IsPreferred: </b> (Added in version 24.1.34) Filter referrals that are marked Preferred. Either "true" or "false"<br><b>isPatient: </b> (Added in version 24.1.34) Filter referrals that are marked isPatient. Either "true" or "false".<br><b>BusinessName: </b> (Added in version 24.4.19) Filter referrals by business name. Supports partial string matching.<br></p>
<p><b>Example Requests:</b><br> GET /referrals<br> GET /referrals?IsPreferred=true<br> GET /referrals?IsPreferred=true&amp;isPatient=true<br> GET /referrals?BusinessName=Facebook<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br> "ReferralNum": 1,<br> "LName": "Davidson",<br> "FName": "Norm",<br> "MName": "",<br> "SSN": "123456789",<br> "UsingTIN": "true",<br> "Specialty": 465,<br> "specialty": "Endodontics",<br> "ST": "OR",<br> "Telephone": "",<br> "Address": "163 Madison Loop",<br> "Address2": "",<br> "City": "Portland",<br> "Zip": "54698",<br> "Note": "",<br> "Phone2": "",<br> "IsHidden": "false",<br> "NotPerson": "false",<br> "Title": "DMD",<br> "EMail": "",<br> "PatNum": 0,<br> "IsDoctor": "true",<br> "DateTStamp": "2021-06-21 10:03:08",<br> "IsPreferred": "true",<br> "BusinessName": "",<br> "DisplayNote": "",<br> "isPatient": "false"<br> },<br> {<br> "ReferralNum": 2,<br> "LName": "Facebook Ad",<br> "FName": "",<br> "MName": "",<br> "SSN": "",<br> "UsingTIN": "false",<br> "Specialty": 0,<br> "specialty": "",<br> "ST": "",<br> "Telephone": "",<br> "Address": "",<br> "Address2": "",<br> "City": "",<br> "Zip": "",<br> "Note": "Ad active from 06/01/2021 to 09/01/2021",<br> "Phone2": "",<br> "IsHidden": "false",<br> "NotPerson": "true",<br> "Title": "",<br> "EMail": "",<br> "PatNum": 0,<br> "IsDoctor": "false",<br> "DateTStamp": "2021-07-21 11:03:08",<br> "IsPreferred": "true",<br> "BusinessName": "Facebook Ad",<br> "DisplayNote": "",<br> "isPatient": "false"<br> },<br> {<br> "ReferralNum": 3,<br> "LName": "Beringer",<br> "FName": "Debbie",<br> "MName": "L",<br> "SSN": "111111111",<br> "UsingTIN": "false",<br> "Specialty": 0,<br> "specialty": "",<br> "ST": "OR",<br> "Telephone": "5033635432",<br> "Address": "",<br> "Address2": "",<br> "City": "Salem",<br> "Zip": "",<br> "Note": "",<br> "Phone2": "",<br> "IsHidden": "false",<br> "NotPerson": "false",<br> "Title": "",<br> "EMail": "",<br> "PatNum": 435,<br> "IsDoctor": "false",<br> "DateTStamp": "2021-09-21 12:03:08",<br> "IsPreferred": "false",<br> "BusinessName": "",<br> "DisplayNote": "",<br>  "isPatient": "true"<br><br> },<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br></p>
<h2>Referrals POST (create)</h2>
<p>Version Added: 22.3</p>
<p>Creates a new Referral. Referrals can be for patients (provide PatNum), providers (provide specialty) or non-persons (provide neither PatNum or specialty). In the last case, isPatient and IsDoctor will be set false automatically while NotPerson will be set to true. If you wish to create an associated RefAttach please see RefAttaches POST.</p>
<p><b>LName</b>: Required. The last name of a referral source or referral source description.<br><b>PatNum</b>: Optional. Only set this if the referral source is a patient. The provided <b>LName</b> must match the patient for whom the PatNum is given. This automatically populates the rest of the referral based on the given patient. If this is set, <b>IsDoctor</b> and <b>NotPerson</b> are set to "false", while isPatient will be true.<br><b>FName</b>: Optional. The referral source's first name.<br><b>MName</b>: Optional. The referral source's middle name or initial.<br><b>SSN</b>: (Added in version 24.4.16) Optional. SSN, or TIN if <b>UsingTIN</b> is true. No punctuation.<br><b>UsingTIN</b>: (Added in version 24.4.16) Optional. Either "true" or "false". Dictates whether <b>SSN</b> contains an SSN or TIN. Default "false".<br><b>Specialty</b>: Optional. definition.DefNum where definition.Category=35 (ProviderSpecialty). If set, <b>NotPerson</b> will default to "false", <b>IsDoctor</b> will default to "true", and isPatient will be false.<br><b>specialty</b>: Optional. Only set this if the Referral source is a Provider. This is a definition.ItemName where the DefCat is ProviderSpecialty(35). If this is set, <b>IsDoctor</b> will default to "true", <b>NotPerson</b> will default to "false", and isPatient will be false.<br><b>ST</b>: (Added in version 24.4.16) Optional. The referral source's state. Two characters maximum.<br><b>Telephone</b>: (Added in version 24.4.16) Optional. The referral source's phone number. Must be ten digits.<br><b>Address</b>: (Added in version 24.4.16) Optional. The referral source's mailing address.<br><b>Address2</b>: (Added in version 24.4.16) Optional. Additional info regarding the referral source's mailing address.<br><b>City</b>: (Added in version 24.4.16) Optional. The referral source's city.<br><b>Zip</b>: (Added in version 24.4.16) Optional. The referral source's ZIP code.<br><b>Note</b>: Optional.<br><b>Phone2</b>: (Added in version 24.4.16) Optional. Additional phone.<br><b>NotPerson</b>: (Added in version 24.4.16) Optional. Either "true" or "false". Default "false", unless neither PatNum nor Specialty were supplied.<br><b>Title</b>: Optional. The referral source's title.<br><b>EMail</b>: (Added in version 24.4.16) Optional. The email address for the referral.<br><b>IsDoctor</b>: (Added in version 24.4.16) Optional. Either "true" or "false". Default "false", unless a Specialty was supplied.<br><b>BusinessName</b>: (Added in version 24.4.16) Optional. Name of the business that the referral works for.<br><b>DisplayNote</b>: (Added in version 24.4.16) Optional. Shows in the Family Module's Patient Info grid.<br></p>
<p><b>Example Request:</b><br> POST /referrals<br><span class="codeblock"> {<br> "LName": "Yellow Pages"<br> }<br><br> {<br> "LName": "Smith",<br> "PatNum": 435<br> }<br><br> {<br> "LName": "Smith",<br> "FName": "John",<br> "specialty": "Surgery"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "ReferralNum": 314,<br> "LName": "Smith",<br> "FName": "James",<br> "MName": "",<br> "SSN": "",<br> "UsingTIN": "false",<br> "Specialty": 0,<br> "specialty": "",<br> "ST": "OR",<br> "Telephone": "5033635432",<br> "Address": "123 Gumtree Ln",<br> "Address2": "",<br> "City": "Salem",<br> "Zip": "97304",<br> "Note": "",<br> "Phone2": "(503)363-5432",<br> "IsHidden": "false",<br> "NotPerson": "false",<br> "Title": "Mr",<br> "EMail": "name@site.com",<br> "PatNum": 435,<br> "IsDoctor": "false",<br> "DateTStamp": "2021-06-21 10:03:08",<br> "IsPreferred": "false",<br> "BusinessName": "",<br> "DisplayNote": "",<br> "isPatient": "true"<br> }<br></span></p>
<p> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Referrals PUT (update)</h2>
<p>Version Added: 22.4.24</p>
<p>Updates an existing Referral. All fields are optional. Referrals for a patient can only have the Note and DisplayNote fields modified. </p>
<p><b>LName</b>: The last name of a referral source or referral source description.<br><b>FName</b>: The referral source's first name.<br><b>MName</b>: The referral source's middle name or initial.<br><b>SSN</b>: (Added in version 24.4.16) SSN, or TIN if UsingTIN is true.<br><b>UsingTIN</b>: (Added in version 24.4.16) Either "true" or "false". Dictates whether SSN contains an SSN or TIN.<br><b>Specialty</b>: definition.DefNum where definition.Category=35 (ProviderSpecialty). Use 0 to indicate None.<br><b>ST</b>: (Added in version 24.4.16) The referral source's state. Two characters maximum.<br><b>Telephone</b>: (Added in version 24.4.16) The referral source's phone number. Must be ten digits.<br><b>Address</b>: (Added in version 24.4.16) The referral source's mailing address.<br><b>Address2</b>: (Added in version 24.4.16) Additional info regarding the referral source's mailing address.<br><b>City</b>: (Added in version 24.4.16) The referral source's city.<br><b>Zip</b>: (Added in version 24.4.16) The referral source's ZIP code.<br><b>Note</b>: Overwrites existing note.<br><b>Phone2</b>: (Added in version 24.4.16) Additional phone.<br><b>NotPerson</b>: (Added in version 24.4.16) Either "true" or "false".<br><b>Title</b>: The referral source's title.<br><b>EMail</b>: (Added in version 24.4.16) The email address for the referral.<br><b>IsDoctor</b>: (Added in version 24.4.16) Either "true" or "false".<br><b>BusinessName</b>: (Added in version 24.4.16) Optional.<br><b>DisplayNote</b>: (Added in version 24.4.16) Overwrites existing DisplayNote.<br></p>
<p><b>Example Requests:</b><br> PUT /referrals/325<br><p><span class="codeblock"> {<br> "Note": "Referral credit added to account on 08/21/2022"<br> }<br></span></p>
<p>or</p>
<span class="codeblock"> {<br> "LName": "Smithers",<br> "FName": "Jonathan",<br> "MName": "C",<br> "Title": "DDS",<br> "Specialty": 272,<br> "Note": "Out on Thursdays"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "ReferralNum": 325,<br> "LName": "Smithers",<br> "FName": "Jonathan",<br> "MName": "C",<br> "SSN": "11111",<br> "UsingTIN": "true",<br> "Specialty": 272,<br> "specialty": "Surgery",<br> "ST": "OR",<br> "Telephone": "5033635432",<br> "Address": "123 Gumtree Ln",<br> "Address2": "",<br> "City": "Salem",<br> "Zip": "97304",<br> "Note": "Out on Thursdays",<br> "Phone2": "(536)265-8587",<br> "IsHidden": "false",<br> "NotPerson": "false",<br> "Title": "DDS",<br> "EMail": "name@site.com",<br> "PatNum": 0,<br> "IsDoctor": "true",<br> "DateTStamp": "2021-06-21 10:03:08",<br> "IsPreferred": "false",<br> "BusinessName": "Surgery Center",<br> "DisplayNote": "",<br> "isPatient": "false"<br> }<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
