# File: ./www.opendental.com/manual/paymentplanprint.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Sign and Print Payment Plan</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paymentplanprint','paymentplandynamic','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/paymentplanprint.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/paymentplanprint.html" >v24.2</option><option value="https://www.opendental.com/manual241/paymentplanprint.html" >v24.1</option><option value="https://www.opendental.com/manual233/paymentplanprint.html" >v23.3</option><option value="https://www.opendental.com/manual232/paymentplanprint.html" >v23.2</option><option value="https://www.opendental.com/manual231/paymentplanprint.html" >v23.1</option><option value="https://www.opendental.com/manual224/paymentplanprint.html" >v22.4</option><option value="https://www.opendental.com/manual223/paymentplanprint.html" >v22.3</option><option value="https://www.opendental.com/manual222/paymentplanprint.html" >v22.2</option><option value="https://www.opendental.com/manual221/paymentplanprint.html" >v22.1</option><option value="https://www.opendental.com/manual214/paymentplanprint.html" >v21.4</option><option value="https://www.opendental.com/manual213/paymentplanprint.html" >v21.3</option><option value="https://www.opendental.com/manual212/paymentplanprint.html" >v21.2</option><option value="https://www.opendental.com/manual211/paymentplanprint.html" >v21.1</option><option value="https://www.opendental.com/manual205/paymentplanprint.html" >v20.5</option><option value="https://www.opendental.com/manual204/paymentplanprint.html" >v20.4</option><option value="https://www.opendental.com/manual203/paymentplanprint.html" >v20.3</option><option value="https://www.opendental.com/manual202/paymentplanprint.html" >v20.2</option><option value="https://www.opendental.com/manual201/paymentplanprint.html" >v20.1</option><option value="https://www.opendental.com/manual194/paymentplanprint.html" >v19.4</option><option value="https://www.opendental.com/manual193/paymentplanprint.html" >v19.3</option><option value="https://www.opendental.com/manual192/paymentplanprint.html" >v19.2</option><option value="https://www.opendental.com/manual191/paymentplanprint.html" >v19.1</option><option value="https://www.opendental.com/manual184/paymentplanprint.html" >v18.4</option><option value="https://www.opendental.com/manual183/paymentplanprint.html" >v18.3</option><option value="https://www.opendental.com/manual182/paymentplanprint.html" >v18.2</option><option value="https://www.opendental.com/manual181/paymentplanprint.html" >v18.1</option><option value="https://www.opendental.com/manual174/paymentplanprint.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Sign and Print Payment Plan</p></div>
<div class="GeneralPageContent">
<p>Terms for a payment plan can be electronically signed by a patient and printed.</p>
<p>In a <a href="paymentplandynamic.html">Payment Plan</a>, at the bottom, is a <b>Sign &amp; Print</b> button.</p>
<img src="images/paymentplanSignPrint.png" width="669" height="159"/><p><a href="electronicsignatures.html">Electronic Signatures</a> are only an option when using <a href="paymentplansheets.html">Payment Plan Layout</a> with a <a href="sheetssignature.html">Signature Box</a>.</p>
<p>To use a Payment Plan Sheet <i> Pay Plans use Sheets for printing</i> must be enabled in <a href="preferences.html">Preferences</a>.</p>
<p>If <i> Pay Plans use Sheets for printing</i> is disabled, terms can be printed using a default template.</p>
<h2>Sign &amp; Print </h2>
<p>Click <b>Sign &amp; Print</b> to open <a href="sheetsfillout.html">Fill Sheet</a> to preview the payment plan terms and electronically sign.</p>
<p>The button is only available for saved <a href="paymentplandynamic.html">Payment Plans</a> and <a href="paymentplanpatient.html">Old Payment Plans</a> when electronic signatures are an option. If the payment plan has already been signed, a <b>View &amp; Print</b> button is available instead.</p>
<img src="images/paymentplanTermsPrinted.png" width="883" height="992"/><br/><p><div class="Note">Note: For <a href="https://www.opendental.com/manual/paymentpland">Payment Plans</a>, if <i>Await procedure complete</i> is selected, the scheduled charges for treatment planned procedures are to be determined (TBD) and the interest and due amounts are not yet calculated. The charge Date, Interest, and Due show TBD. When not using sheets, the Date is blank, and the Interest and Due amounts show zero. Once the procedure is set complete, the scheduled charges update.</div>
</p>
<p>The payment plan terms can be signed using the signature box on the sheet.</p>
<p class="MarginBottomZero">Click a button to save, print, or email the terms.  </p>
<ul class="MarginBottomGap">
<li><b>Create PDF</b>: Preview and save a PDF copy of the terms. The PDF is only viewable by clicking View &amp; Print in an <a href="paymentplanpatient.html">Old Payment Plan</a>.</li>
<li><b>Print/Email</b>: Open Sheet Output window to print or email the terms.</li>
<li><b>Print</b>: Send the terms to the printer.</li>
<li><b>Email</b>: Open <a href="emailmessage.html">Email Message Edit</a> to email a copy of the terms.</li>
<li><b>Save</b>: Keep signature and save a PDF copy to the Imaging module.</li>
</ul>
<p><div class="Note">Note: PDF versions of saved payment plans are saved in the Imaging Module in the folder designated for payment plans (<a href="definitionsimagecat.html">Definitions: Image Categories</a>).</div>
</p>
<h2>Re-sign Payment Plan Terms</h2>
<p>Signatures are invalidated when the plan guarantor or terms (APR, number of payments, payment amount, or charge frequency), change or if the patient or guarantor name changes (first name, last name, or preferred name).</p>
<p class="MarginBottomZero">To re-sign payment plan terms </p>
<ol class="MarginBottomGap">
<li>Click <b>View &amp; Print</b>.</li>
<li>Click <b>Unlock</b> to make changes to the sheet (<i>Sheet Edit</i> security <a href="permissions.html">Permission</a> required).</li>
<li>Click <b>X</b> to clear the current signature.</li>
<li>Sign the terms.</li>
<li>Click <b>Save</b> to keep changes and add a new PDF copy to the Imaging Module.</li>
</ol>
<p>After an electronic signature is saved, it displays in the Payment Plan or Old Payment Plan window.</p>
<h2>Print</h2>
<p>If <i> Pay Plans use Sheets for printing</i> is disabled or an electronic signature does not exist on the Payment Plan sheet, a Print button is shown below the Amortization Schedule. Click <b>Print</b> to open a print preview of the terms.</p>
<img src="images/paymentPlanTerms.png" width="697" height="754"/><p>For details on the options in this window, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<p><div class="Note">Note: For Payment Plans with <i>Await procedure complete</i> selected, the Date is blank, and Interest and Due amounts show zero. Once a procedure is set complete, the scheduled charges are updated.</div>
</p>
</div>
</div>
</body>
</html>```
