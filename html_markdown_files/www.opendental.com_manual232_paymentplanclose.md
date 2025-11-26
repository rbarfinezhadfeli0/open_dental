# File: ./www.opendental.com/manual232/paymentplanclose.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Close Payment Plan</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymentplanclose','paymentplanpatient','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/paymentplanclose.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/paymentplanclose.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymentplanclose.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymentplanclose.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymentplanclose.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/paymentplanclose.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymentplanclose.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymentplanclose.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymentplanclose.html" >v22.2</option><option value="https://www.opendental.com/manual221/paymentplanclose.html" >v22.1</option><option value="https://www.opendental.com/manual214/paymentplanclose.html" >v21.4</option><option value="https://www.opendental.com/manual213/paymentplanclose.html" >v21.3</option><option value="https://www.opendental.com/manual212/paymentplanclose.html" >v21.2</option><option value="https://www.opendental.com/manual211/paymentplanclose.html" >v21.1</option><option value="https://www.opendental.com/manual205/paymentplanclose.html" >v20.5</option><option value="https://www.opendental.com/manual204/paymentplanclose.html" >v20.4</option><option value="https://www.opendental.com/manual203/paymentplanclose.html" >v20.3</option><option value="https://www.opendental.com/manual202/paymentplanclose.html" >v20.2</option><option value="https://www.opendental.com/manual201/paymentplanclose.html" >v20.1</option><option value="https://www.opendental.com/manual194/paymentplanclose.html" >v19.4</option><option value="https://www.opendental.com/manual193/paymentplanclose.html" >v19.3</option><option value="https://www.opendental.com/manual192/paymentplanclose.html" >v19.2</option><option value="https://www.opendental.com/manual191/paymentplanclose.html" >v19.1</option><option value="https://www.opendental.com/manual184/paymentplanclose.html" >v18.4</option><option value="https://www.opendental.com/manual183/paymentplanclose.html" >v18.3</option><option value="https://www.opendental.com/manual182/paymentplanclose.html" >v18.2</option><option value="https://www.opendental.com/manual181/paymentplanclose.html" >v18.1</option><option value="https://www.opendental.com/manual174/paymentplanclose.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Close Payment Plan</p></div>
<div class="GeneralPageContent">
<p>The Close Payment Plans tool allows offices to easily close out all Payment Plans with a zero balance and no future charges.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Tools, Misc Tools, Close Payment Plans.</p>
<img src="images/payplanAutoClose.PNG" width="409" height="221"/><p>This tool is helpful if the practice has Payment Plans showing in the <a href="reportpaymentplan.html">Payment Plan Report</a> that have zero balance or a negative balance, no future charges, but are not closed.</p>
<p>Once the tool is clicked, the above message appears. </p>
<p><b>Include Dynamic Payment Plans</b>: Check to close <a href="paymentplandynamic.html">Dynamic Payment Plans</a> with zero balance or a negative balance, no future charges, and no treatment planned procedures when running the tool. Uncheck to exclude Dynamic Payment Plans when running the tool.</p>
<p>Click <b>OK</b> to continue and close all plans that meet the criteria. Click <b>Cancel</b> to close the tool without closing Payment Plans.</p>
<p>A confirmation appears once Payment Plans have finished closing, indicating the number of Payments Plans closed. If no Payments Plans met the criteria, a message appears instead indicating "<i>There were no plans to close.</i>"</p>
<img src="images/payPlanAutoCloseConfirm.png" width="175" height="132"/></div>
</div>
</body>
</html>```
