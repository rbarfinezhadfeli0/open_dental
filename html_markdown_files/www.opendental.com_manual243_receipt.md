# File: ./www.opendental.com/manual243/receipt.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Receipt</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('receipt','statementwindow','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/receipt.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/receipt.html" >v24.2</option><option value="https://www.opendental.com/manual241/receipt.html" >v24.1</option><option value="https://www.opendental.com/manual233/receipt.html" >v23.3</option><option value="https://www.opendental.com/manual232/receipt.html" >v23.2</option><option value="https://www.opendental.com/manual231/receipt.html" >v23.1</option><option value="https://www.opendental.com/manual224/receipt.html" >v22.4</option><option value="https://www.opendental.com/manual223/receipt.html" >v22.3</option><option value="https://www.opendental.com/manual222/receipt.html" >v22.2</option><option value="https://www.opendental.com/manual221/receipt.html" >v22.1</option><option value="https://www.opendental.com/manual214/receipt.html" >v21.4</option><option value="https://www.opendental.com/manual213/receipt.html" >v21.3</option><option value="https://www.opendental.com/manual212/receipt.html" >v21.2</option><option value="https://www.opendental.com/manual211/receipt.html" >v21.1</option><option value="https://www.opendental.com/manual205/receipt.html" >v20.5</option><option value="https://www.opendental.com/manual204/receipt.html" >v20.4</option><option value="https://www.opendental.com/manual203/receipt.html" >v20.3</option><option value="https://www.opendental.com/manual202/receipt.html" >v20.2</option><option value="https://www.opendental.com/manual201/receipt.html" >v20.1</option><option value="https://www.opendental.com/manual194/receipt.html" >v19.4</option><option value="https://www.opendental.com/manual193/receipt.html" >v19.3</option><option value="https://www.opendental.com/manual192/receipt.html" >v19.2</option><option value="https://www.opendental.com/manual191/receipt.html" >v19.1</option><option value="https://www.opendental.com/manual184/receipt.html" >v18.4</option><option value="https://www.opendental.com/manual183/receipt.html" >v18.3</option><option value="https://www.opendental.com/manual182/receipt.html" >v18.2</option><option value="https://www.opendental.com/manual181/receipt.html" >v18.1</option><option value="https://www.opendental.com/manual174/receipt.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Receipt</p></div>
<div class="GeneralPageContent">
<p>A receipt shows payments made for the current day or date range.</p>
<p>In the <a href="account.html">Account Module</a> toolbar, click the Statement dropdown, <b>Receipt</b>.</p>
<img src="images/canadaReceipt.png" width="183" height="185"/><p>This immediately prints to the default printer and only shows today's payments.</p>
<p class="MarginBottomZero">Alternatively, to email or print a receipt for a date range: </p>
<ol>
<li>In the Statement dropdown, click <b>More Options</b></li>
<li>On the <a href="statementwindow.html">Statement Window</a>:  <ul>
<li>enter the <i>Date Range</i>. </li>
<li>Check <i>Receipt</i>.</li>
<li>Select the <i>Mode</i>. Defaults to <i>InPerson</i> if no selection is made and the receipt is printed. If emailed, the mode defaults to <i>Email</i>.</li>
<li>(optional) Add statement note/bold notes.</li>
</ul>
</li>
<li>To preview before printing or emailing, click <b>View</b>. Click <b>Print</b> to send the receipt to the default printer. Click <b>Email</b> to email the receipt as a PDF, see <a href="emailmessage.html">Email Message Edit</a>.</li>
</ol>
<p class="MarginBottomGap"><br/><img src="images/receiptEdit.png" width="719" height="611" class="ImageInParagraph"/></p>
<p>As seen in the example below, receipts show payment plan information, insurance estimates, and the patient balance for a single patient. Prepayment amounts for treatment planned procedures do not reflect in the credit and balance columns of the receipt as to not affect the patients' overall balance (see <a href="hiddensplits.html">Hidden Splits</a>). The prepayment details are for informational purposes only. A slightly different version of the receipt is created for Canada, see <a href="canadareceipts.html">Canada Receipts</a>. Once printed, the receipt shows as a line item in the Patient Account grid. Double-click to view, reprint, or resend. A PDF of the receipt is also stored in the <a href="images.html">Imaging Module</a> under the <a href="definitionsimagecat.html">Image Category</a> assigned <i>Statements</i> usage.</p>
<img src="images/receipt.png" width="614" height="398"/><p>To set the default printer receipts print to, see <a href="printersetup.html">Printer Setup</a>.</p>
<h2>Credit Card/ACH Receipts</h2>
<p>Receipts generated from the integrated credit card processing companies can also be printed or emailed but do not include patient account information. After processing a <a href="paymentpatientcreditcard.html">Credit Card Payment</a>, click <b>Print Receipt</b> or <b>Email Receipt</b> on the <a href="payment.html">Payment</a> window. These receipts can also be set to automatically print after a successful transaction for <a href="xchargesetup.html">XCharge</a>, <a href="edgeexpresssetup.html">EdgeExpress</a>, or <a href="paysimple.html">PaySimple</a> users. <a href="payconnectpaymentwindow.html">PayConnect</a> transactions always automatically print a receipt. </p>
<p>To print receipts for successful recurring charge transactions, see <a href="recurringcharges.html">CC Recurring Charges</a>, Printing Receipts.</p>
</div>
</div>
</body>
</html>```
