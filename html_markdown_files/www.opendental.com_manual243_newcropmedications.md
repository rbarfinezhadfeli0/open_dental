# File: ./www.opendental.com/manual243/newcropmedications.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - NewCrop eRx Medications</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('newcropmedications','newcrop','+eRx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/newcropmedications.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/newcropmedications.html" >v24.2</option><option value="https://www.opendental.com/manual241/newcropmedications.html" >v24.1</option><option value="https://www.opendental.com/manual233/newcropmedications.html" >v23.3</option><option value="https://www.opendental.com/manual232/newcropmedications.html" >v23.2</option><option value="https://www.opendental.com/manual231/newcropmedications.html" >v23.1</option><option value="https://www.opendental.com/manual224/newcropmedications.html" >v22.4</option><option value="https://www.opendental.com/manual223/newcropmedications.html" >v22.3</option><option value="https://www.opendental.com/manual222/newcropmedications.html" >v22.2</option><option value="https://www.opendental.com/manual221/newcropmedications.html" >v22.1</option><option value="https://www.opendental.com/manual214/newcropmedications.html" >v21.4</option><option value="https://www.opendental.com/manual213/newcropmedications.html" >v21.3</option><option value="https://www.opendental.com/manual212/newcropmedications.html" >v21.2</option><option value="https://www.opendental.com/manual211/newcropmedications.html" >v21.1</option><option value="https://www.opendental.com/manual205/newcropmedications.html" >v20.5</option><option value="https://www.opendental.com/manual204/newcropmedications.html" >v20.4</option><option value="https://www.opendental.com/manual203/newcropmedications.html" >v20.3</option><option value="https://www.opendental.com/manual202/newcropmedications.html" >v20.2</option><option value="https://www.opendental.com/manual201/newcropmedications.html" >v20.1</option><option value="https://www.opendental.com/manual194/newcropmedications.html" >v19.4</option><option value="https://www.opendental.com/manual193/newcropmedications.html" >v19.3</option><option value="https://www.opendental.com/manual192/newcropmedications.html" >v19.2</option><option value="https://www.opendental.com/manual191/newcropmedications.html" >v19.1</option><option value="https://www.opendental.com/manual184/newcropmedications.html" >v18.4</option><option value="https://www.opendental.com/manual183/newcropmedications.html" >v18.3</option><option value="https://www.opendental.com/manual182/newcropmedications.html" >v18.2</option><option value="https://www.opendental.com/manual181/newcropmedications.html" >v18.1</option><option value="https://www.opendental.com/manual174/newcropmedications.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>NewCrop eRx Medications</p></div>
<div class="GeneralPageContent">
<p>In the <a href="newcrop.html">Ensora eRx (formerly NewCrop eRx) / Prescription</a> interface, at the bottom, is an Active Medications area. </p>
<img src="images/erxMedications.png" width="915" height="173"/><p>Ensora eRx uses the medications entered here when doing <a href="newcropdruginteraction.html">Drug Interaction Checks</a>. When a user writes and transmits an electronic prescription, the medication is automatically listed here. However, medications entered directly in Open Dental are not currently passed to Ensora eRx; users must manually enter them.</p>
<p class="MarginBottomZero">To add a medication to the <i>Active Medications</i> list: </p>
<ol class="MarginBottomGap">
<li>Click the <b>Med Entry</b> tab at the top of the Ensora Rx window.</li>
<li>If needed, enter in <i>Outside Prescriber</i> name and <i>Original Date</i> for the medication.</li>
<li>Enter the first few characters of the drug name and click <b>Drug Search</b>.</li>
<img src="images/newCropMedEntry.png" width="915" height="101"/><li>Click a medication type to see all dosage options.</li>
<li>Click the matching medication and dosage combination.</li>
<li>(optional) To enter more details about the medication (e.g., Sig), click <b>Edit</b>. Some information cannot be edited once the medication has been added to the patient's active medications. Click <b>Queue Rx</b> once information has been entered.</li>
<li>The medication has been added to the <i>Pending Medications</i> list. Check the box next to the medication and click <b>Record</b> to move the medication to the patient's <i>Active Medications</i>.</li>
</ol>
<p>The medication is added to the Current Medications list with an  <img src="images/newCropMedEntryIcon.png" width="17" height="20" style="margin-bottom: 0px"/> icon to indicate it was added via the Med Entry tab. The medication is also added to the patient's active medications in Open Dental.</p>
<h2>Discontinued Medications</h2>
<p>If a patient is no longer taking a medication listed in the <i>Active Medications</i> list, it can be marked discontinued.</p>
<p class="MarginBottomZero">To discontinue an Active Medication: </p>
<ol class="MarginBottomGap">
<li>Click the Edit dropdown on an active medication.</li>
<li>Click <b>Discontinue</b>. </li>
 The medication is moved to the <i>Discontinued Medications</i> list. The medication is also marked discontinued in Open Dental when the Chart Module is refreshed (a <i>Stop Date</i> is entered). To change a current medication, click <b>Edit</b>. </ol>
</div>
</div>
</body>
</html>```
