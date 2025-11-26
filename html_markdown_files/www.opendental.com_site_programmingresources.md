# File: ./www.opendental.com/site/programmingresources.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Programming Resources</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('programmingresources','advancedtopics','documentation')">
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
		<div class="TopBar2"><p>Programming Resources</p></div>
		<div class="GeneralPageContent">
<p>See <a href="advancedtopics.html">Advanced Topics</a></p>
<h3>Database Documentation</h3><p>This has been moved up a few levels in the tree. See <a href="databaseschema.html">Database Schema</a></p>
<h3>Unit Testing</h3><p>See <a href="../resources/UnitTestsDocumentation.xml">Unit Testing</a>. </p>
<h3>SQLyog</h3><p>MySQL does not include a way to view and edit the data in your database. We recommend <a href="https://webyog.com/product/sqlyog">SQLyog</a>. It has a variety of useful tools for working with your raw database. You should never use it to change the data in your database since that will cause corruption.</p>
<h2>Interacting with Open Dental</h2>
<p><b>Queries</b><br>  Simple read-only operations can be performed with queries. This is useful for reports. Any third party is welcome to query the database as long as no writes are involved. We have <a href="integrity.html">security measures</a> in place to prevent writing to the database, so don't even think about it. Make sure your queries are optimized. One frequent problem is that an unoptimized query can take 20 seconds to run, and all the workstations in office lock up during that time. If you need to run long queries, maybe try doing that in the middle of the night or on a slave database.</p>
<p><b>API</b><br> This is the only way of interacting with Open Dental for any action that requires a write to the database. Direct writes to the database are never allowed other than by going through the API. See <a href="apispecification.html">API Specification</a>.</p>
<p><b>Plug-ins</b><br><a href="plugins.html">Plug-ins</a> are a way for certain large organizations to add custom functionality for internal use. We strongly encourage using the API instead, but certain organizations have critical requirements that require a tighter integration, so we sometimes allow it after negotiation.</p>
<p>If you have reviewed the information on this page and the forum, but need additional assistance, email vendor.relations@opendental.com.</p>
<h2>License</h2><p>See <a href="license.html">License</a></p>
		</div>
	</div>
</body>
</html>```
