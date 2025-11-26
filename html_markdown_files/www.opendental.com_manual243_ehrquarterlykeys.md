# File: ./www.opendental.com/manual243/ehrquarterlykeys.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Quarterly Keys</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrquarterlykeys','ehrproviderkeys','ehrsetupwindow','+chart','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrquarterlykeys.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrquarterlykeys.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrquarterlykeys.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrquarterlykeys.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrquarterlykeys.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrquarterlykeys.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrquarterlykeys.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrquarterlykeys.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrquarterlykeys.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrquarterlykeys.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrquarterlykeys.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrquarterlykeys.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrquarterlykeys.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrquarterlykeys.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrquarterlykeys.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrquarterlykeys.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrquarterlykeys.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrquarterlykeys.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrquarterlykeys.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrquarterlykeys.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrquarterlykeys.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrquarterlykeys.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrquarterlykeys.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrquarterlykeys.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrquarterlykeys.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrquarterlykeys.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrquarterlykeys.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrquarterlykeys.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Quarterly Keys</p></div>
<div class="GeneralPageContent">
<p>Quarterly keys were used in version 13.2 and earlier for <a href="ehrmeasures.html">EHR Measure Reporting</a>. In versions 14.2 and greater, <a href="ehrproviderkeys.html">Annual EHR Provider Keys</a> allow access to EHR reporting. </p>
<ul>
<li>If after July 1, 2014, you need to view historical EHR reports, you will need to <a href="update.html">Update</a> to version 14.1 or greater. This will allow you to access 2013 EHR reports and enter EHR data without any keys. </li>
<li>To run 2014 EHR reports, you will need to be in a 2014 EHR contract with Open Dental and running version 14.2 or greater. We will then provide you with a new annual provider key for 2014. Older versions of Open Dental do not have the 2014 certification that is required for EHR reporting. </li>
</ul>
<br/><p>Contact an Open Dental EHR specialist if you have any questions.</p>
<h2>Enter Quarterly Keys</h2>
<p>In version 13.2 and earlier, in the Main Menu, click Setup, Chart, <a href="ehrsetupwindow.html">EHR</a>, Quarterly Keys.</p>
<p><img src="images/ehrQuarterlyKeys.gif" width="513" height="504"/></p>
<p>Click Add.</p>
<p><img src="images/ehrQuarterlyKeyEdit.gif" width="404" height="194"/></p>
<p>Enter the year, quarter, and the key.<br/>  - <b>Year:</b> The last two digits of the current year (2013 = 13).<br/>  - <b>Quarter:</b> Jan. - Mar. = 1, Apr. - June = 2, July - Sept. = 3, Oct. - Dec. = 4 <br/>  - <b>Key: </b>The quarterly key given to you by technical support. </p>
</div>
</div>
</body>
</html>```
