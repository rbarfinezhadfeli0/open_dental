# File: ./www.opendental.com/site/canadainscatsetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Canada Insurance Categories</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('canadainscatsetup','canada','countries','documentation')">
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
		<div class="TopBar2"><p>Canada Insurance Categories</p></div>
		<div class="GeneralPageContent">
<p>Canadian insurance categories allow automatic calculations of insurance coverage based on the procedure code. </p>
<p>For <a href="canada.html">Canada</a> users, in the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7mainmenu.html">Main Menu</a>, click Setup, Family/Insurance, Insurance Categories.</p>
<img src="images/canadaInsCat.png" width="715" height="687"/><p><div class="Note">Note: <ul>
<li>We do not recommend altering insurance categories. Changes affect benefit information for all <a href="canadainsplan.html">Canada Insurance Plans</a>.</li>
<li>The insurance categories above are the recommended setup for Canada.</li>
<li>If spans contain Part A, Part B, Part C, and Endo, convert to the recommended setup. See Convert Four-Part Insurance Categories to Default Insurance Categories below.</li>
</ul>
</div>
</p>
<p><b>Coverage Spans Grid</b>: Displays the currently set categories and spans.</p>
<p class="MarginBottomZero"><b>Categories</b>: Coverage categories have specific procedure code spans attached according to typical insurance groupings. Categories are used to calculate the actual insurance coverage for specific procedures. </p>
<ul class="MarginBottomGap">
<li><b>Up / Down Arrows</b>: Highlight a category, then click an arrow to reorder it.  <ul>
<li>The General category should be at the top, because it keeps track of annual maximums for all patients.</li>
<li>If a category is a subset of another span, then that category should be lower in the list.</li>
</ul>
</li>
<li><b>Add</b>: Click to add a new category. See Add Category below. </li>
</ul>
<p class="MarginBottomZero"><b>Add Span</b>: Click to add a new coverage span. See Add Spans below.  </p>
<ul class="MarginBottomGap">
<li><p>Each coverage category can have unlimited spans of procedure codes attached. The default spans should work for most offices. Adding extra spans does not increase complexity for the staff. They still only see the coverage categories set up. Spans simply allow whatever procedures are needed into each category. A span can be as short as a single code. Spans can be deleted although this affects patient data if the span includes a patient's procedure (it does not corrupt the data). Changes to spans affect the treatment plans of multiple patients.</p>
</li>
</ul>
<p><b>Set to Defaults</b>: Update existing spans in categories with an E-Benefit Categories assigned. The database must set to <i>English (Canada)</i>. All E-Benefit Categories must be represented by an non-hidden Insurance Category in the list for the button to work.</p>
<h2>Add Category</h2>
<p>Click <b>Add</b>, or double-click a category row to edit.</p>
<img src="images/insCatEditCan.png" width="478" height="207"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Description</b>: Name of category.</li>
<li><b>Default Percent</b>: The percentage default for new insurance plans. Changing this number only changes the default value for future insurance plans. It does not affect any patient records.</li>
<li><b>Is Hidden</b>: Check to hide this category.</li>
<li><b>Electronic Benefit Category</b>: There must be exactly one of each E-Benefit Category. There can be no duplicates and no missing categories. Coverage categories are completely unrelated to procedure code categories in <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitions.html">Definitions</a>.</li>
</ul>
<h2>Add Spans</h2>
<p>Click <b>Add Span</b>, or double-click a coverage span row to edit. </p>
<img src="images/canadaInsCatCovSpan.png" width="248" height="147"/><p><b>From Code / To Code</b>: Enter the procedure codes for the span. Open Dental warns users if the code is not in the correct CDA format (at least the first 5 digits), but the codes can still be used if needed.</p>
<h2>Convert Four-Part Insurance Categories to Default Insurance Categories</h2>
<p>Older Open Dental installations may be using a Four-Part setup. Follow these instructions to convert to the recommended setup. </p>
<img src="images/canadaInsCat4part.png" width="480" height="217"/><p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Rename <i>Part C</i> category to <i>Ortho</i>.</li>
<li>Add new categories to match the recommended setup. Do not add Endo and Ortho because they already exist. Do not change Part A or Part B. For each new category, select the electronic benefit category and enter a default percentage. <ul>
<li>The Category and E-Benefit Category must match exactly.</li>
<li>The default category percentages affect all patients. Do not change any default percentages from their old values unless certain they were wrong. Use the percentage values from Part A and Part B for reference.</li>
</ul>
<img src="images/canadaInsCat4partTable.png" width="773" height="350"/></li>
<li>Reorder categories to match the recommended setup. Place Part A and Part B categories between General and Diagnostic. The first 4 categories must be in the following order: <ul>
<li>General</li>
<li>Part A</li>
<li>Part B</li>
<li>Diagnostic</li>
</ul>
</li>
<li>Manually change the code spans for each category to match the recommended setup. Do not modify existing coverage spans for Part A or Part B.</li>
<li>Hide the Part A and Part B categories. </li>
</ol>
<p>The resulting insurance category spans will look like this:</p>
<img src="images/canadaInsCatConverted.png" width="484" height="583"/><p>As new insurance plans are added, they will only use the new insurance categories. Part A and Part B categories will not be used.</p>
<p>Existing insurance plans will continue to use the old insurance categories and percentages unless the plans are manually edited. To do so, we recommend changing insurance plan Benefit Information via the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insplanlist.html">Insurance Plans</a> (Lists, Insurance Plans) so all subscribers are affected by the change.</p>
		</div>
	</div>
</body>
</html>```
