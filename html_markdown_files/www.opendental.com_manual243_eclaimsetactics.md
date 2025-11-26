# File: ./www.opendental.com/manual243/eclaimsetactics.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Etactics</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclaimsetactics','clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eclaimsetactics.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eclaimsetactics.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclaimsetactics.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclaimsetactics.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclaimsetactics.html" >v23.2</option><option value="https://www.opendental.com/manual231/eclaimsetactics.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclaimsetactics.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclaimsetactics.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclaimsetactics.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclaimsetactics.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclaimsetactics.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclaimsetactics.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclaimsetactics.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclaimsetactics.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclaimsetactics.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclaimsetactics.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclaimsetactics.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclaimsetactics.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclaimsetactics.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclaimsetactics.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclaimsetactics.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclaimsetactics.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclaimsetactics.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclaimsetactics.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclaimsetactics.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclaimsetactics.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclaimsetactics.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclaimsetactics.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Etactics</p></div>
<div class="GeneralPageContent">
<p>Etactics is an E-Claims clearinghouse.</p>
<p>In <a href="clearinghouses.html">Clearinghouses</a>, click <b>Add</b>.</p>
<img src="images/eclaimsEtactics.png" width="915" height="689"/><p>The Etactics clearinghouse must be manually added to Open Dental. Visit their website at <a href="https://www.etacticsinc.com/" target="_blank">www.etacticsinc.com</a>.</p>
<h2>Setup</h2>
<p class="MarginBottomZero">Set up the clearinghouse as follows:  </p>
<ul class="MarginBottomGap">
<li><b>Description</b>: Enter <i>Etactics</i>.</li>
<li><b>Sender ID Qualifier</b>: Enter <i>ZZ</i>.</li>
<li><b>Tax ID</b>: Enter the Tax ID. </li>
<li><b>Name</b>: Enter the name. </li>
<li><b>Telephone Number</b>: Enter the practice number. </li>
<li><b>Receiver ID Qualifier</b>: Enter <i>ZZ</i>.</li>
<li><b>Clearinghouse ID</b>: Enter <i>ETACTICINC</i>.</li>
<li><b>GS03</b>: Enter <i>ETACTICINC</i>.</li>
<li><b>Test or Production</b>: Enter <i>P</i>.</li>
<li><b>Component Element Separator</b>: Enter <i>3E</i>.</li>
<li><b>Claim Export Path</b>: Typically <b>C:\eTACTICS\Claims</b>.</li>
<li><b>Format</b>: Select <i>x837D_5010_dental</i>.</li>
</ul>
</div>
</div>
</body>
</html>```
