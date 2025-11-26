# File: ./www.opendental.com/site/integrity.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Database Integrity</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('integrity','programmingresources','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Database Integrity</p></div>
		<div class="GeneralPageContent">
<p>See <a href="programmingresources.html">Programming Resources</a></p>
<p>Our Database Integrity feature ensures that if any outside party directly makes changes to a database, it will trigger warnings.</p>
<h2>Warnings</h2>
<p>Small warnings show up at the upper left of various windows throughout Open Dental if the database was modified.</p>
<img src="images/integrityWarning.png" width="16" height="14"/><br><p>Clicking on the warning will display the following window.</p>
<img src="images/databaseIntegrity.png" width="464" height="254"/><h2>Removing Warnings</h2>
<p>Offices will want to know how to get rid of these warnings. There are two steps:</p>
<p>1. Stop using the software that is making the changes. This will prevent new warnings, but will not remove existing warnings.</p>
<p>2. Update to a slightly newer version (the third "build" number). This will remove older warnings up to a certain date, but will not prevent new warnings.</p>
<p>There is no tool to remove the warnings. Both of the steps above must be taken. The first step is the most effective because it can be done immediately. The second step might take a week or two, depending on our release cycle. The warnings should not be annoying, and should not interfere with efficiency or usage of Open Dental.</p>
<h2>Technical explanation</h2>
<p>On certain tables in the database, we choose columns that we need to protect. We hash all the column values and store that hash in a column in that table called SecurityHash. In certain places throughout the program, we display warnings and popups if the hashes don't match. We only look for SecurityHash matches as of a certain hard-coded date. Each build has a slightly newer hard-coded date so that only fairly recent changes are ever considered. At any time, we can change which columns we protect so that we can be responsive.</p>
<h2>Guidelines for Companies</h2>
<p>You are not allowed to send queries to the database that would alter data in any way. You are instead required to use our <a href="apispecification.html">API</a>. </p>
<p><b>Transition Timeline:</b><br> We need to give you time to transition to the API. Here's a rough idea of how that transition will work. Version 21.4 has been released and will show small innocuous warnings. The warnings are mild enough that customers shouldn't be concerned and they shouldn't call anyone. Every three to four months, as new versions are released, users will see more notifications in more places. They might eventually start to see some popups as well, but not too soon. So it will be a gradual process that should give you plenty of time. Eventually, the popups will become much more frequent and aggressive, and the warnings will use harsher language with words like "unsafe" and "dangerous".</p>
<h2>Specific Companies</h2>
<p>For more details and a list of companies, see <a href="vendorsthirdparty.html">Third-Party Vendors</a>.</p>
		</div>
	</div>
</body>
</html>```
