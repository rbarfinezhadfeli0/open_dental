# File: ./www.opendental.com/manual232/paymentplanprint.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sign and Print Payment Plan</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymentplanprint','paymentplanpatient','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/paymentplanprint.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/paymentplanprint.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymentplanprint.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymentplanprint.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymentplanprint.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/paymentplanprint.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymentplanprint.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymentplanprint.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymentplanprint.html" >v22.2</option><option value="https://www.opendental.com/manual221/paymentplanprint.html" >v22.1</option><option value="https://www.opendental.com/manual214/paymentplanprint.html" >v21.4</option><option value="https://www.opendental.com/manual213/paymentplanprint.html" >v21.3</option><option value="https://www.opendental.com/manual212/paymentplanprint.html" >v21.2</option><option value="https://www.opendental.com/manual211/paymentplanprint.html" >v21.1</option><option value="https://www.opendental.com/manual205/paymentplanprint.html" >v20.5</option><option value="https://www.opendental.com/manual204/paymentplanprint.html" >v20.4</option><option value="https://www.opendental.com/manual203/paymentplanprint.html" >v20.3</option><option value="https://www.opendental.com/manual202/paymentplanprint.html" >v20.2</option><option value="https://www.opendental.com/manual201/paymentplanprint.html" >v20.1</option><option value="https://www.opendental.com/manual194/paymentplanprint.html" >v19.4</option><option value="https://www.opendental.com/manual193/paymentplanprint.html" >v19.3</option><option value="https://www.opendental.com/manual192/paymentplanprint.html" >v19.2</option><option value="https://www.opendental.com/manual191/paymentplanprint.html" >v19.1</option><option value="https://www.opendental.com/manual184/paymentplanprint.html" >v18.4</option><option value="https://www.opendental.com/manual183/paymentplanprint.html" >v18.3</option><option value="https://www.opendental.com/manual182/paymentplanprint.html" >v18.2</option><option value="https://www.opendental.com/manual181/paymentplanprint.html" >v18.1</option><option value="https://www.opendental.com/manual174/paymentplanprint.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sign and Print Payment Plan</p></div>
<div class="GeneralPageContent">
<p>In a <a href="paymentplanpatient.html">Payment Plan</a>, at the bottom, is a <b>Sign &amp; Print</b> button.</p>
<img src="images/paymentplanSignPrint.gif" width="728" height="162"/><p>Terms for Payment Plans can be electronically signed by the patient and printed. <a href="electronicsignatures.html">Electronic Signatures</a> are only an option when using a custom printed payment plan layout that has a signature box. See <a href="paymentplansheets.html">Payment Plan Layout</a>.</p>
<h2>Electronically Sign Terms</h2>
<p>When using a custom Payment Plan Sheet that has a signature box, the terms can be electronically signed before printing or saving.<i> Pay Plans use Sheets for printing</i> must be checked in <a href="preferences.html">Preferences</a>. </p>
<p>After the initial setup is complete, a <b>Sign &amp; Print</b> button will appear below the amortization schedule on both the <a href="paymentplanpatient.html">Payment Plan</a> and <a href="paymentplandynamic.html">Dynamic Payment Plan</a>.</p>
<p>Click <b>Sign &amp; Print</b> to preview the payment plan terms and electronically sign.</p>
<img src="images/paymentplanTermsPrinted.png" width="891" height="952"/><br/><div class="Note">Note: For Dynamic Payment Plans, if <i>Await procedure complete</i> is selected, the scheduled charges for treatment planned procedures are to be determined (TBD) and the interest and due amounts are not yet calculated. When <i>Pay Plans use sheets</i> is enabled, the charge Date, Interest, and Due will show TBD. When not using sheets, the Date will be blank, and the Interest and Due amounts will show zero. Once the procedure is set complete, the scheduled charges will update.</div>
<br/><br/><p>Sign the terms.</p>
<p class="MarginBottomZero">Click a button to save, print, email the terms.  </p>
<ul class="MarginBottomGap">
<li><b>Create PDF</b>: Preview and save a PDF copy of the terms. The PDF is only viewable by clicking View &amp; Print in the <a href="paymentplanpatient.html">Payment Plan</a>.</li>
<li><b>Print/Email</b>: Print and/or email the terms to the guarantor and save a PDF copy in the Images module.</li>
<li><b>Save</b>: Save a PDF copy in the Images module.</li>
<li><b>Cancel</b>: Close the window without saving.</li>
</ul>
<p>PDF versions of saved payment plans are saved in the Images module in the folder designated for payment plans (<a href="definitionsimagecat.html">Definitions: Image Categories</a>).</p>
<img src="images/paymentplanSavedPDF.gif" width="225" height="44"/><p>Signatures are invalidated when the plan guarantor or terms change; APR, number of payments, payment amount, and charge frequency, and if the patient or guarantor name changes (first name, last name, or preferred name).</p>
<p class="MarginBottomZero">If a signature is invalidated, it can be re-signed: </p>
<ol class="MarginBottomGap">
<li>Click <b>View &amp; Print</b>.</li>
<li>Click <b>Unlock</b> to unlock the sheet (<i>Sheet Edit</i> security <a href="permissions.html">Permission</a> required).</li>
<li>Click <b>X</b> to clear the invalidated signature.</li>
<li>Sign the terms.</li>
</ol>
<h2>Print Terms (without signing)</h2>
<p>If using the classic payment plan layout, or an electronic signature does not exist on the custom payment plan sheet, a Print button shows below the amortization schedule. Click <b>Print</b> to preview the terms.</p>
<img src="images/paymentPlanTerms.gif" width="579" height="756"/></div>
</div>
</body>
</html>```
