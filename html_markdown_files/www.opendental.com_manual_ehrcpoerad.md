# File: ./www.opendental.com/manual/ehrcpoerad.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Lab Order RAD codes</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrcpoerad','ehrcpoelab','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrcpoerad.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrcpoerad.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrcpoerad.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrcpoerad.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrcpoerad.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrcpoerad.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrcpoerad.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrcpoerad.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrcpoerad.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrcpoerad.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrcpoerad.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrcpoerad.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrcpoerad.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrcpoerad.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrcpoerad.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrcpoerad.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrcpoerad.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrcpoerad.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrcpoerad.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrcpoerad.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrcpoerad.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrcpoerad.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrcpoerad.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrcpoerad.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrcpoerad.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrcpoerad.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrcpoerad.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrcpoerad.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Lab Order RAD codes</p></div>
<div class="GeneralPageContent">
<p>Lab orders for RAD codes (radiology orders) can be manually entered using the lab order interface and imaging results can be attached. This is an older method of entering CPOE radiology orders, but still valid. To be considered a radiology order the Service Identifier (<a href="loinc.html">LOINC Codes</a>) must have a class type of <i>RAD</i>. For an order to count as CPOE, a provider must be logged on when the order is created.</p>
<div class="Note">Note: In version 15.4 and greater there is a different and simpler way to enter and approve CPOE radiology orders for EHR.</div>
<br/><br/><ol>
<li>From the <a href="ehrdashboard1.html">EHR Dashboard</a>, click <a href="ehrcpoelab.html">Edit labs</a>. <br/><img src="images/ehrCpoeLab.gif" width="915" height="135" class="ImageInParagraph"/><p>Only orders entered after December 31, 2013 show. To view prior orders, click Labs/Rads on the EHR dashboard.</p>
</li>
<li>Click Add. <br/><img src="images/ehrcpoeRad.gif" width="915" height="657" class="ImageInParagraph"/></li>
<li>Enter required order information. <p><b>Ordering Provider:</b> Identifier, ID, Identifier Type, Universal ID.</p>
<p>Click [...] to select a provider and auto-populate provider information. If the provider has an NPI, the default Identifier will be the NPI number. If the provider does not have an NPI, the Provider Number (OID) is the default. Identifier must be the NPI or Provider Number.</p>
<p><b>Service Identifier:</b> Code System, Observation ID and Date/Time Start.</p>
<p>Click <i>[...]</i>to select the LOINC code for this order. The code must have a classtype of RAD. For example, bitewings use the code 46386-9. Date/Time Start must be entered using this format: YYYY-MM-DD.</p>
<p>Or, some dental related LOINC codes that might be useful include: <br/><img src="images/ehrLoincDental.png" width="350" height="635" class="ImageInParagraph"/></p>
<p>To determine which other codes are RAD, you can use this Query: <p class="codeblock">SELECT * FROM loinc WHERE classtype="RAD";</p></p>
</li>
<li>Enter other information if desired (optional).  <ul>
<li>Place Order Number: Object Identifiers (OIDs) must be set up. To auto-create order numbers, check the Auto box. When you click Save, the ID, Identifier, and Universal ID fields will populate. The Place Order ID number should exactly match the identifying number on the lab order being sent to the lab.</li>
<li>Last Update: This date reflects the last time results changed and affects the date of the order on the Lab Orders window. It is not updated automatically.</li>
<li>All Dates: Must be entered using this format: YYYY-MM-DD</li>
<li>TQ1 Dates: TQ1 equals Timing and Quantity.</li>
<li>Notes: Notes about the lab. You can create new notes, or add comments to existing notes.</li>
</ul>
</li>
<li>Click Save to close the window. The denominator and numerator for CPOE_RadiologyOrdersOnly should increase by one. Measure details are visible in Stage 2 measure reports.</li>
<li>To track the imaging results, you have two options: <ul>
<li>If you will send the order off and wait for results, reopen the order, click Manage Images, then check the Waiting for Images checkbox.</li>
<li>If/when the images are ready, reopen the order, click Manage Images, then attach them to the order. See Imaging Results.</li>
</ul>
</li>
</ol>
<br/><h2>Troubleshooting</h2>
<p><b>The dates of orders on the Lab Orders window are all 01/01/0001.</b></p>
<p>This date matches the Last Update date entered on the Lab Order Edit window. Change it as needed.</p>
</div>
</div>
</body>
</html>```
