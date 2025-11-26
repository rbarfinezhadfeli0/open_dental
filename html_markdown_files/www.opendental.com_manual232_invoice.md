# File: ./www.opendental.com/manual232/invoice.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Invoice</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('invoice','statementwindow','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/invoice.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/invoice.html" >v24.2</option><option value="https://www.opendental.com/manual241/invoice.html" >v24.1</option><option value="https://www.opendental.com/manual233/invoice.html" >v23.3</option><option value="https://www.opendental.com/manual232/invoice.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/invoice.html" >v23.1</option><option value="https://www.opendental.com/manual224/invoice.html" >v22.4</option><option value="https://www.opendental.com/manual223/invoice.html" >v22.3</option><option value="https://www.opendental.com/manual222/invoice.html" >v22.2</option><option value="https://www.opendental.com/manual221/invoice.html" >v22.1</option><option value="https://www.opendental.com/manual214/invoice.html" >v21.4</option><option value="https://www.opendental.com/manual213/invoice.html" >v21.3</option><option value="https://www.opendental.com/manual212/invoice.html" >v21.2</option><option value="https://www.opendental.com/manual211/invoice.html" >v21.1</option><option value="https://www.opendental.com/manual205/invoice.html" >v20.5</option><option value="https://www.opendental.com/manual204/invoice.html" >v20.4</option><option value="https://www.opendental.com/manual203/invoice.html" >v20.3</option><option value="https://www.opendental.com/manual202/invoice.html" >v20.2</option><option value="https://www.opendental.com/manual201/invoice.html" >v20.1</option><option value="https://www.opendental.com/manual194/invoice.html" >v19.4</option><option value="https://www.opendental.com/manual193/invoice.html" >v19.3</option><option value="https://www.opendental.com/manual192/invoice.html" >v19.2</option><option value="https://www.opendental.com/manual191/invoice.html" >v19.1</option><option value="https://www.opendental.com/manual184/invoice.html" >v18.4</option><option value="https://www.opendental.com/manual183/invoice.html" >v18.3</option><option value="https://www.opendental.com/manual182/invoice.html" >v18.2</option><option value="https://www.opendental.com/manual181/invoice.html" >v18.1</option><option value="https://www.opendental.com/manual174/invoice.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Invoice</p></div>
<div class="GeneralPageContent">
<p>In the <a href="account.html">Account Module</a> toolbar, click the <a href="statementwindow.html">Statement</a> dropdown, <b>Invoice</b>.</p>
<img src="images/statementDropdown.png" width="187" height="189"/><p>Invoice will be generated based on selected procedures and adjustments.</p>
<div class="Note">Note: <ul>
<li>Selecting Invoice before selecting procedures will create an invoice for all procedures and payments for today (unless <a href="superfamily.html">Super Family</a> billing is enabled).</li>
<li>Once attached to an invoice, the same procedures and adjustments cannot be attached to a new invoice.</li>
<li>Printed and emailed invoices are saved as PDFs in the patient account and <a href="images.html">Imaging Module</a>, Statements image category.</li>
<li>To reprint, resend, or view, double-click on the invoice number in the patient account.</li>
</ul>
</div>
<br/><br/><p class="MarginBottomZero">Setup Options: </p>
<ul class="MarginBottomGap">
<li>To customize invoices, see <a href="statementsheets.html">Statement Layout</a>. <ul>
<li>Payments are not included on invoices by default. Add <i>StatementInvoicePayment</i> Grid to statement layout to include them.</li>
</ul>
</li>
<li><a href="preferences.html">Preferences</a>, <i>Invoice payments grid shows write-offs</i>: Select whether insurance write-offs show by default.</li>
</ul>
<img src="images/invoiceStatementOptions.gif" width="719" height="615"/><p class="MarginBottomZero">Change invoice options as needed. </p>
<ul class="MarginBottomGap">
<li><b>Date</b>: Defaults to today's date.</li>
<li><b>Sent</b>: Automatically checked once the statement, invoice, or receipt is printed or emailed. It can also be changed manually.</li>
<li><b>Hide payment options</b>: Automatically checked to exclude amount due, date due, amount enclosed, credit card payment section, and aging information. If unchecked, the entire family balance will reflect in the amount due field which may be different than the invoice total.</li>
<li><b>Single patient only</b>: Informational only and cannot be changed.</li>
<li><b>Send to Super Family</b>: Informational only and cannot be changed.</li>
<li><b>Invoice</b>: Always checked and cannot be changed.</li>
<li><b>Invoice number</b>: Automatically generated and cannot be changed.</li>
<li><b>Note</b>: By default shows the Invoice Note set in <a href="billingdefaults.html">Billing Defaults</a>.</li>
<li><b>Bold Note</b>: Shows in bold red above and below the procedure grid.</li>
</ul>
<p>Click <b>View</b> to preview the invoice. If a PDF has been created, View will preview the PDF. If no PDF exists, View will preview the Fill Sheet window. Edit any custom <a href="sheetsaddelements.html">Sheet Field Types</a> then Print or Email to save the changes. <p>Click <b>Print</b> to send the invoice to the default Printer.</p>
<p>Click <b>Pat Portal</b> to send the invoice to the <a href="../site/patientportal.html">Patient Portal Feature</a>.</p>
<p>Click <b>Email</b> to email the invoice as a PDF.</p>
<p>Click <b>OK</b> to generate the invoice without saving, printing or emailing the PDF.</p>
</p>
<p>If the Mode is changed on an existing invoice, a new PDF is created.</p>
<h2>Invoice Search</h2>
<p>Set up a Display Field in the Patient Select window to search for patients by invoice number.</p>
<h2>Foreign Users</h2>
<p>To use the title <i>TAX INVOICE</i>, add the output text field, <i>statementIsTaxReceipt</i>, to the sheet.</p>
<p>To show the word <i>COPY</i> at the top of statements printed more than once, add the output text field, <i>statementIsCopy</i>, to the sheet. To print again without the word <i>COPY</i>, uncheck the <i>Sent</i> checkbox and the<i> Invoice Copy </i>checkbox, then print again.</p>
<p>Sample Invoice:</p>
<img src="images/invoice.gif" width="767" height="736"/></div>
</div>
</body>
</html>```
