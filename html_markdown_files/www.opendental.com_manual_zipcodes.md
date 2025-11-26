# File: ./www.opendental.com/manual/zipcodes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Zip Code List</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('zipcodes','+lists','mainmenu','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/zipcodes.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/zipcodes.html" >v24.2</option><option value="https://www.opendental.com/manual241/zipcodes.html" >v24.1</option><option value="https://www.opendental.com/manual233/zipcodes.html" >v23.3</option><option value="https://www.opendental.com/manual232/zipcodes.html" >v23.2</option><option value="https://www.opendental.com/manual231/zipcodes.html" >v23.1</option><option value="https://www.opendental.com/manual224/zipcodes.html" >v22.4</option><option value="https://www.opendental.com/manual223/zipcodes.html" >v22.3</option><option value="https://www.opendental.com/manual222/zipcodes.html" >v22.2</option><option value="https://www.opendental.com/manual221/zipcodes.html" >v22.1</option><option value="https://www.opendental.com/manual214/zipcodes.html" >v21.4</option><option value="https://www.opendental.com/manual213/zipcodes.html" >v21.3</option><option value="https://www.opendental.com/manual212/zipcodes.html" >v21.2</option><option value="https://www.opendental.com/manual211/zipcodes.html" >v21.1</option><option value="https://www.opendental.com/manual205/zipcodes.html" >v20.5</option><option value="https://www.opendental.com/manual204/zipcodes.html" >v20.4</option><option value="https://www.opendental.com/manual203/zipcodes.html" >v20.3</option><option value="https://www.opendental.com/manual202/zipcodes.html" >v20.2</option><option value="https://www.opendental.com/manual201/zipcodes.html" >v20.1</option><option value="https://www.opendental.com/manual194/zipcodes.html" >v19.4</option><option value="https://www.opendental.com/manual193/zipcodes.html" >v19.3</option><option value="https://www.opendental.com/manual192/zipcodes.html" >v19.2</option><option value="https://www.opendental.com/manual191/zipcodes.html" >v19.1</option><option value="https://www.opendental.com/manual184/zipcodes.html" >v18.4</option><option value="https://www.opendental.com/manual183/zipcodes.html" >v18.3</option><option value="https://www.opendental.com/manual182/zipcodes.html" >v18.2</option><option value="https://www.opendental.com/manual181/zipcodes.html" >v18.1</option><option value="https://www.opendental.com/manual174/zipcodes.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Zip Code List</p></div>
<div class="GeneralPageContent">
<p>The Zip Code list is a list of common zip codes, associated to a city and state.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Lists, Zip Codes.</p>
<img src="images/zipCodes.png" width="717" height="379"/><p>For Canada users, this window is titled Postal Codes.</p>
<p>This list can simplify data entry when entering patient information.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Add</b>: Click to add a new zip code to the main list.</li>
<li><b>Delete</b>: Highlight a zip code, then click to delete it from the main list.</li>
</ul>
<p>Click the header of any column to order the list.</p>
<h2>Add or Edit a Zip Code</h2>
<p>Click Add or double-click an existing zip code to edit.</p>
<img src="images/zipCodeAdd.png" width="400" height="254"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Zip Code</b>: Enter the zip code. </li>
<li><b>City</b>: Enter the city. </li>
<li><b>ST</b>: Enter the state. Useful for practices that border another state. </li>
<li><b>Used Frequently</b>: Check this box to add this zip code to dropdown on the Edit Patient Information window.</li>
</ul>
<h2>Edit Patient Information Window</h2>
<p>Zip codes are entered for patient addresses in the <a href="patientedit.html">Edit Patient Information</a> window.</p>
<img src="images/zipCodeField.gif" width="303" height="152"/><p>Manually enter the patient's zip code, or use the dropdown to select from frequent zip codes. </p>
<p class="MarginBottomZero"><b>Edit Zip</b>: Enter a zip code for the patient, then click to take action. </p>
<ul class="MarginBottomGap">
<li>If the zip code does not exist in the main list, opens the Edit Zip Code window. Allows the user to quickly add the zip code to the main list.</li>
<li>If the zip code exists in the main list, opens the Select Zip Code window. Allows user to select a zip code from the list to quickly enter the city and state for the patient.<br/><img src="images/zipCodeSelect.png" width="432" height="249" class="ImageInParagraph"/><ul>
<li><b>Add</b>: Opens the Zip Code Edit window. Allows user to add an additional city to the zip code. </li>
<li><b>Delete</b>: Highlight a zip code from the list, then click to delete it. </li>
<li><b>Edit</b>: Highlight a zip code from the list, then click to edit it.</li>
</ul>
</li>
</ul>
</div>
</div>
</body>
</html>```
