# File: ./www.opendental.com/site/searchSite.html

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Open Dental Software - Search</title>
    <link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<link href="../css/searchFromServer.css" rel="stylesheet" type="text/css">
	<script src="resources/siteSearch.js"></script>
    <script src="resources/siteTerms.js"></script>
    <script src="resources/siteWithTreeToc.js"></script>
	<script src="resources/siteWithTree.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="../js/searchFromServer.js" type="text/javascript"></script>
	<link rel="icon" type="image/png" href="../favicon.png">
	<link href="https://fonts.googleapis.com/css?family=Roboto&amp;display=swap" rel="stylesheet">
</head>
<body onLoad="init();initSearch()">
    <nav class="LeftTree">
    	<div class="TopBarLeft"><p>Table of Contents</p></div>
        <!--div id="search"><a href="https://www.opendental.com/site/search.html">Search</a></div-->
        <div id="TocTree"><a href="documentation.html">Documentation</a></div>
    </nav>
    <div class="RightMain">
        <div class="TopBar">
            <a href="../index.html">
                <div class="Logo">
                    <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
                </div>
            </a>
            <div class="TopBarLinks">
                <div class="TopBarTitle">
				</div>
            </div>
        </div>
        <div class="TopBar2"><p>Search</p></div>
		<!-- New search -->
        <div class="">
			<form id="formMain" name="formMain" autocomplete="off" enctype="multipart/form-data" style="margin:0 auto;">
				<div id="resultContainer">
					<div class="dropDown">
						<input id="textSearch" type="text" name="textSearch" autoComplete="off">
						<input id="searchIcon" type="submit" name="searchIcon" autoComplete="off" value="">
					</div>
					<div>
						<ul id="results" name="selectResults">
						</ul>
					</div>
				</div>
			</form>
        </div>
    </div>
</body>
</html>
```
