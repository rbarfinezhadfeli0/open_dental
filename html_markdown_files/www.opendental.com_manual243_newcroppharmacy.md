# File: ./www.opendental.com/manual243/newcroppharmacy.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - NewCrop eRx Pharmacies</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('newcroppharmacy','newcrop','+eRx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/newcroppharmacy.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/newcroppharmacy.html" >v24.2</option><option value="https://www.opendental.com/manual241/newcroppharmacy.html" >v24.1</option><option value="https://www.opendental.com/manual233/newcroppharmacy.html" >v23.3</option><option value="https://www.opendental.com/manual232/newcroppharmacy.html" >v23.2</option><option value="https://www.opendental.com/manual231/newcroppharmacy.html" >v23.1</option><option value="https://www.opendental.com/manual224/newcroppharmacy.html" >v22.4</option><option value="https://www.opendental.com/manual223/newcroppharmacy.html" >v22.3</option><option value="https://www.opendental.com/manual222/newcroppharmacy.html" >v22.2</option><option value="https://www.opendental.com/manual221/newcroppharmacy.html" >v22.1</option><option value="https://www.opendental.com/manual214/newcroppharmacy.html" >v21.4</option><option value="https://www.opendental.com/manual213/newcroppharmacy.html" >v21.3</option><option value="https://www.opendental.com/manual212/newcroppharmacy.html" >v21.2</option><option value="https://www.opendental.com/manual211/newcroppharmacy.html" >v21.1</option><option value="https://www.opendental.com/manual205/newcroppharmacy.html" >v20.5</option><option value="https://www.opendental.com/manual204/newcroppharmacy.html" >v20.4</option><option value="https://www.opendental.com/manual203/newcroppharmacy.html" >v20.3</option><option value="https://www.opendental.com/manual202/newcroppharmacy.html" >v20.2</option><option value="https://www.opendental.com/manual201/newcroppharmacy.html" >v20.1</option><option value="https://www.opendental.com/manual194/newcroppharmacy.html" >v19.4</option><option value="https://www.opendental.com/manual193/newcroppharmacy.html" >v19.3</option><option value="https://www.opendental.com/manual192/newcroppharmacy.html" >v19.2</option><option value="https://www.opendental.com/manual191/newcroppharmacy.html" >v19.1</option><option value="https://www.opendental.com/manual184/newcroppharmacy.html" >v18.4</option><option value="https://www.opendental.com/manual183/newcroppharmacy.html" >v18.3</option><option value="https://www.opendental.com/manual182/newcroppharmacy.html" >v18.2</option><option value="https://www.opendental.com/manual181/newcroppharmacy.html" >v18.1</option><option value="https://www.opendental.com/manual174/newcroppharmacy.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>NewCrop eRx Pharmacies</p></div>
<div class="GeneralPageContent">
<p>When using the <a href="newcrop.html">Ensora eRx (formerly NewCrop eRx) / Prescription</a> interface, prescribers can select from a list of saved pharmacies. </p>
<h2>Select pharmacy at time of transmission</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Write the prescription.</li>
<li>When the user reaches the Transmit Rx page, pharmacy options are listed at the bottom.</li>
<li>Select or search for a pharmacy:  <ul>
<li>Location Pharmacies (saved pharmacies) and patient's preferred pharmacies are listed automatically. Uncheck Location Pharmacies to see only patient's preferred pharmacies.</li>
<li>Click <b>Search</b> to find a different pharmacy and enter search criteria. Users can search by zip code, phone, fax, name, or location information. Matching results are listed.</li>
</ul>
</li>
<li>Click on the pharmacy name to select it.</li>
</ol>
<h2>Maintain a list of saved pharmacies</h2>
<p><i>Location Pharmacies</i> are a list of commonly-used pharmacies saved by the office. </p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In the Ensora eRx window, click the <b>Admin</b> tab in the top toolbar.</li>
<li>Click <b>Location Pharmacies</b> in the <i>List Maintenance</i> area.</li>
<li>Click <b>Add</b>.</li>
<img src="images/newCropLocationPharmaciesList.png" width="915" height="355"/><li>Enter search criteria. </li>
<li>Click <b>Search</b>. Matching results are listed.</li>
<li>Check the box next to pharmacy to add. The pharmacy is added to the list once the box is checked.</li>
<li>Repeat the steps for any additional pharmacies.</li>
</ol>
<h2>Attach a preferred pharmacy to a patient</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In Ensora eRx, click the <b>Pt Details tab</b>.</li>
<ul>
<li>Users can also click the Pharmacy dropdown from any tab (except the Admin and Help tabs) to proceed with the following steps.</li>
</ul>
<li>In the Patient Pharmacies area, click <b>Add</b>.</li>
<img src="images/newCropAddPtPharmacy.png" width="915" height="126"/><li>Pharmacies saved to the Location Pharmacies List are shown. Users can also search for other pharmacies. </li>
<li>If searching for a pharmacy not saved to the Location Pharmacies list, enter search criteria and click <b>Search</b>.</li>
<li>Click <b>Select</b> next to the name of the pharmacy to add.</li>
</ol>
</div>
</div>
</body>
</html>```
