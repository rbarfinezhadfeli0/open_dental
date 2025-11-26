# File: ./www.opendental.com/manual232/xchargetroubleshooting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - XCharge Troubleshooting</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('xchargetroubleshooting','xcharge','paymentpatientcreditcard','payment','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/xchargetroubleshooting.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/xchargetroubleshooting.html" >v24.2</option><option value="https://www.opendental.com/manual241/xchargetroubleshooting.html" >v24.1</option><option value="https://www.opendental.com/manual233/xchargetroubleshooting.html" >v23.3</option><option value="https://www.opendental.com/manual232/xchargetroubleshooting.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/xchargetroubleshooting.html" >v23.1</option><option value="https://www.opendental.com/manual224/xchargetroubleshooting.html" >v22.4</option><option value="https://www.opendental.com/manual223/xchargetroubleshooting.html" >v22.3</option><option value="https://www.opendental.com/manual222/xchargetroubleshooting.html" >v22.2</option><option value="https://www.opendental.com/manual221/xchargetroubleshooting.html" >v22.1</option><option value="https://www.opendental.com/manual214/xchargetroubleshooting.html" >v21.4</option><option value="https://www.opendental.com/manual213/xchargetroubleshooting.html" >v21.3</option><option value="https://www.opendental.com/manual212/xchargetroubleshooting.html" >v21.2</option><option value="https://www.opendental.com/manual211/xchargetroubleshooting.html" >v21.1</option><option value="https://www.opendental.com/manual205/xchargetroubleshooting.html" >v20.5</option><option value="https://www.opendental.com/manual204/xchargetroubleshooting.html" >v20.4</option><option value="https://www.opendental.com/manual203/xchargetroubleshooting.html" >v20.3</option><option value="https://www.opendental.com/manual202/xchargetroubleshooting.html" >v20.2</option><option value="https://www.opendental.com/manual201/xchargetroubleshooting.html" >v20.1</option><option value="https://www.opendental.com/manual194/xchargetroubleshooting.html" >v19.4</option><option value="https://www.opendental.com/manual193/xchargetroubleshooting.html" >v19.3</option><option value="https://www.opendental.com/manual192/xchargetroubleshooting.html" >v19.2</option><option value="https://www.opendental.com/manual191/xchargetroubleshooting.html" >v19.1</option><option value="https://www.opendental.com/manual184/xchargetroubleshooting.html" >v18.4</option><option value="https://www.opendental.com/manual183/xchargetroubleshooting.html" >v18.3</option><option value="https://www.opendental.com/manual182/xchargetroubleshooting.html" >v18.2</option><option value="https://www.opendental.com/manual181/xchargetroubleshooting.html" >v18.1</option><option value="https://www.opendental.com/manual174/xchargetroubleshooting.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>XCharge Troubleshooting</p></div>
<div class="GeneralPageContent">
<p>Below are some troubleshooting steps when using <a href="xcharge.html">XCharge (OpenEdge)</a>.</p>
<p><div class="Note">Note: <a href="xcharge.html">XCharge (OpenEdge)</a> was a previous option available through Global Payments Integrated. Existing XCharge installations can still be used, though Global Payments Integrated no longer supports XCharge. Users should contact Global Payments Integrated to switch to EdgeExpress, their updated payment processing option. </div>
</p>
<p><b>Problem: After the <a href="xcharge.html">XCharge (OpenEdge)</a> window is closed, the wrong information goes into the Payment window in Open Dental. For example patient A paid $200 using XCharge and when going to patient B account to make a $150 patient payment it shows patient A's $200 payment.</b></p>
<p>The correct amount is posting to the accounts, the textual information coming back is from the previous transaction. Do not re-run cards without looking in the XCharge reports.</p>
<p class="MarginBottomZero">This is happening because of a problem with the text file used in the bridge. The text file is located in the same place as the Program Path in the XCharge Setup window <a href="xchargesetup.html">XCharge Setup</a>. The typical path to the text file is: <b>C:\Program Files\X-Charge\XResult.txt</b>. Look for that file.  </p>
<ol class="MarginBottomGap">
<li>If using the new version of XCharge (requires a username and password) delete the information in the XResult.txt but not the file itself. Otherwise Open Dental will not be able to re-create this TXT file the next time it is run.</li>
<li>If using an older version of XCharge that does not require a username and password, the file may be deleted. Make sure the user has full security access to the file's folder.</li>
</ol>
<p><b>Problem: When making a patient payment in the Account module, you are required to enter your username and password every time you go to process it.</b></p>
<p>Check to make sure you have the correct username and password entered in the XCharge Setup window. If that is not the issue, reach out to XCharge. They installed the standalone version instead of the integrated version.</p>
<p><b>Problem: Receive error "Could not delete XResult.txt file. It may be in use by another program, flagged as read only, or you might not have sufficient permissions."</b></p>
<p>Run Open Dental as the administrator.</p>
<p><b>Problem: Something went wrong during a claim payment transaction using a prepaid insurance card (<a href="claimpayfinalize.html">Finalize Insurance Payment</a>). How can I determine if the transaction was successful?</b></p>
<p>In XCharge reports, search for transactions with a receipt number of Prepaid, which indicate they are payments using a prepaid insurance card.</p>
</div>
</div>
</body>
</html>```
