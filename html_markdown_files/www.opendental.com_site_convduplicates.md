# File: ./www.opendental.com/site/convduplicates.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Conversions: Duplicate Patients</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('convduplicates','usingodconversion','conversions','documentation')">
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
		<div class="TopBar2"><p>Conversions: Duplicate Patients</p></div>
		<div class="GeneralPageContent">
<p>See <a href="usingodconversion.html">Use Converted Database</a>.</p>
<p>In some dental software, the guarantor account has to be a separate account from the patient account. In Open Dental, the guarantor does not need to be a separate patient. Instead, a patient is simply marked as a guarantor or not.</p>
<p>During final conversion (see <a href="conversions.html">Conversions</a>), if the prior software had separate accounts for guarantors and patients, Open Dental attempts to merge them into one patient account. Any patients that share last name, first name, and date of birth, and are in the same family, are automatically merged into one patient. The patient record is kept, not the guarantor record.</p>
<p>If merge requirements aren't met (e.g., missing name, DOB, same family), there may still be duplicate patient records after the conversion. </p>
<p class="MarginBottomZero">To clean up duplicate patients, two queries are available (see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7queryfavorites.html">Query Favorites</a>):  </p>
<ul class="MarginBottomGap">
<li><i>Conv - Possible Duplicate Patients (1)</i>: Filters to only include possible duplicates who have not had a procedure set complete after the selected Cut Off Date (i.e., inactive patients). Leave the date filter as <i>0001-01-01</i> to include all possible duplicates. Includes the following Patient Information: <ul>
<li>PatID (i.e., PatNum)</li>
<li>First Name, Middle Initial, Last Name and Preferred Name (LName, Fname, MiddleI, Preferred)</li>
<li>Birthdate</li>
<li>Address Note (AddrNote)</li>
<li>Patient Status (PatStatus)</li>
<li>Date Created (i.e., the date the patient record/chart was initially created)</li>
<li>Recent Procedure Date (Recent Proc, i.e., last date a procedure was set complete)</li>
<li>Next Visit Date (Next Visit, i.e., next scheduled appointment date)</li>
</ul>
</li>
<li><i>Conv - Possible Duplicate Patients (2)</i>: Lists all patients records with the same first and last name. Includes the following Patient Information:  <ul>
<li>PatID (i.e., Patient Number)</li>
<li>LegacyPatID</li>
<li>First Name, Middle Initial, Last Name and Preferred Name (LName, Fname, MiddleI, Preferred)</li>
<li>Birthdate</li>
<li>Patient Status (PatStatus)</li>
<li>Chart Number</li>
<li>Duplicate Count (DupCount, i.e., the total possible duplicate patients for this name)</li>
</ul>
</li>
</ul>
<p>Run the query from <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7queryfavorites.html">User Query Favorites</a>. Double-click <i>Conv - Possible Duplicate Patients (1)</i> or <i>Conv - Possible Duplicate Patients (2)</i>. </p>
<img src="images/convqueryDupPat.png" width="915" height="380"/><p>Use the query results to find which patients are duplicated, then use the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mergepatients.html">Merge Patients</a> tool to combine them.</p>
<p>Resource: <a href="checklistconverteddb.html">Post-Data Conversion Setup Checklist</a></p>
		</div>
	</div>
</body>
</html>```
