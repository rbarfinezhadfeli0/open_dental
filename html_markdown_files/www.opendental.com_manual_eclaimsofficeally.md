# File: ./www.opendental.com/manual/eclaimsofficeally.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Office Ally E-Claims</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclaimsofficeally','clearinghouses','+familyinsurance','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/eclaimsofficeally.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/eclaimsofficeally.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclaimsofficeally.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclaimsofficeally.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclaimsofficeally.html" >v23.2</option><option value="https://www.opendental.com/manual231/eclaimsofficeally.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclaimsofficeally.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclaimsofficeally.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclaimsofficeally.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclaimsofficeally.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclaimsofficeally.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclaimsofficeally.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclaimsofficeally.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclaimsofficeally.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclaimsofficeally.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclaimsofficeally.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclaimsofficeally.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclaimsofficeally.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclaimsofficeally.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclaimsofficeally.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclaimsofficeally.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclaimsofficeally.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclaimsofficeally.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclaimsofficeally.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclaimsofficeally.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclaimsofficeally.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclaimsofficeally.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclaimsofficeally.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Office Ally E-Claims</p></div>
<div class="GeneralPageContent">
<p>Office Ally is an E-Claims Clearinghouse.</p>
<p>In <a href="clearinghouses.html">Clearinghouses</a>, click <b>Add</b>.</p>
<img src="images/clearinghouseOfficeAlly.png" width="915" height="689"/><p> Office Ally accepts medical and institutional claims in addition to dental claims. Visit their website at <a href="http://www.officeally.com/" target="_blank">www.officeally.com</a>.</p>
<h2>Setup</h2>
<p class="MarginBottomZero">Office Ally must be manually added to Open Dental. Set up the clearinghouse as follows: </p>
<ul class="MarginBottomGap">
<li><b>Sender ID Qualifier</b>: Enter <i>ZZ</i>.</li>
<li><b>Tax ID Number</b>: Enter the Tax ID. </li>
<li><b>Name</b>: Enter the name. </li>
<li><b>Telephone Number</b>: Enter the practice phone number. </li>
<li><b>Receiver ID Qualifier</b>: Enter <i>ZZ</i>.</li>
<li><b>Clearinghouse ID</b>: Enter <i>330897513</i>.</li>
<li><b>GS03</b>: Enter <i>330897513</i>.</li>
<li><b>Test or Production</b>: Enter <i>P</i>.</li>
<li><b>Claim Export Path</b>: Typically <b>C:\Office Ally\Claims</b>.</li>
<li><b>Format</b>: Select <i>x837D_5010_dental</i>.</li>
</ul>
<h2>Claims</h2>
<p>Manually upload claim files to the Office Ally website.</p>
</div>
</div>
</body>
</html>```
