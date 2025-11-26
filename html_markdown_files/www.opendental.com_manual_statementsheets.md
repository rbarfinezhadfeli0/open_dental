# File: ./www.opendental.com/manual/statementsheets.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Statement Layout</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('statementsheets','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/statementsheets.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/statementsheets.html" >v24.2</option><option value="https://www.opendental.com/manual241/statementsheets.html" >v24.1</option><option value="https://www.opendental.com/manual233/statementsheets.html" >v23.3</option><option value="https://www.opendental.com/manual232/statementsheets.html" >v23.2</option><option value="https://www.opendental.com/manual231/statementsheets.html" >v23.1</option><option value="https://www.opendental.com/manual224/statementsheets.html" >v22.4</option><option value="https://www.opendental.com/manual223/statementsheets.html" >v22.3</option><option value="https://www.opendental.com/manual222/statementsheets.html" >v22.2</option><option value="https://www.opendental.com/manual221/statementsheets.html" >v22.1</option><option value="https://www.opendental.com/manual214/statementsheets.html" >v21.4</option><option value="https://www.opendental.com/manual213/statementsheets.html" >v21.3</option><option value="https://www.opendental.com/manual212/statementsheets.html" >v21.2</option><option value="https://www.opendental.com/manual211/statementsheets.html" >v21.1</option><option value="https://www.opendental.com/manual205/statementsheets.html" >v20.5</option><option value="https://www.opendental.com/manual204/statementsheets.html" >v20.4</option><option value="https://www.opendental.com/manual203/statementsheets.html" >v20.3</option><option value="https://www.opendental.com/manual202/statementsheets.html" >v20.2</option><option value="https://www.opendental.com/manual201/statementsheets.html" >v20.1</option><option value="https://www.opendental.com/manual194/statementsheets.html" >v19.4</option><option value="https://www.opendental.com/manual193/statementsheets.html" >v19.3</option><option value="https://www.opendental.com/manual192/statementsheets.html" >v19.2</option><option value="https://www.opendental.com/manual191/statementsheets.html" >v19.1</option><option value="https://www.opendental.com/manual184/statementsheets.html" >v18.4</option><option value="https://www.opendental.com/manual183/statementsheets.html" >v18.3</option><option value="https://www.opendental.com/manual182/statementsheets.html" >v18.2</option><option value="https://www.opendental.com/manual181/statementsheets.html" >v18.1</option><option value="https://www.opendental.com/manual174/statementsheets.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Statement Layout</p></div>
<div class="GeneralPageContent">
<p>Statements, invoices, and receipts can be customized to meet the needs of the practice.</p>
<p>In <a href="sheets.html">Sheets</a>, double-click on a custom sheet with the type of Statement.</p>
<img src="images/sheetsStatement.gif" width="915" height="699"/><p class="MarginBottomZero">Alternatively, in Sheets:  </p>
<ul class="MarginBottomGap">
<li>Click <b>New</b> and choose <i>Statement</i> as the Sheet Type to create a new Statement sheet from blank.</li>
<li>Select an existing Custom <i>Statement</i> sheet and click <b>Duplicate</b> to create a copy of an existing Statement sheet.</li>
<li>Select the existing Internal <i>Statement</i> sheet and click <b>Copy</b> to create a copy of the default Statement that can be edited.</li>
</ul>
<p>To use a custom sheet for <a href="statement.html">Statements</a>, <a href="limited.html">Limited Statements</a>, <a href="invoice.html">Invoices</a>, and <a href="receipt.html">Receipts</a>, see <a href="sheetdefaults.html">Sheet Def Defaults</a>.</p>
<p>Also see: <a href="sheetproperties.html">Sheet Def Properties</a>.</p>
<h2>Editing Statement Sheet</h2>
<p>To customize a Statement sheet type, see <a href="sheetsetup.html">Edit Sheet Def</a>.</p>
<p>Some <a href="sheetsaddelements.html">Sheet Field Types</a> that are only available for sheets with a <i>Statement</i> type. A few are described below.</p>
<p class="MarginBottomZero"><b><a href="sheetsgrid.html">Grids</a></b>: There are five grids that can be added to a Statement sheet.  </p>
<ul class="MarginBottomGap">
<li>StatementAging: Fixed information, cannot be changed.</li>
<li>StatementEnclosed: Fixed information, cannot be changed.</li>
<li>StatementMain: Column names, order, and size can be changed in <a href="displayfields.html">Display Fields</a>, StatementMainGrid.</li>
<li>StatementPayPlanOld: Fixed information, cannot be changed. <ul>
<li>Displays information on open <a href="paymentplanpatient.html">Old Payment Plans</a>. </li>
</ul>
</li>
<li>StatementPayPlanGrid: Fixed information, cannot be changed. <ul>
<li>Displays information on open <a href="paymentplandynamic.html">Payment Plans</a>.</li>
</ul>
</li>
<li>StatementInvoicePayment: Fixed information, cannot be changed. The grid will populate with payments attached to procedures on the invoice as well as unattached payments that were made on the same day.  <ul>
<li>This grid shows payments attached to procedures and payments made on the same day that are not attached to procedures. Changing a payment overrides the original amount on the invoice.</li>
</ul>
</li>
</ul>
<p><b>Payment Options</b>: When adding <a href="sheetsstatictext.html">Static Text Fields</a>, there is an additional 'Is Payment Options' checkbox. When checked, this designates the field for inclusion when payment information is included in a statement, invoice, or receipt. The checkbox 'Hide payment options' on the Statement window determines if payment information is included or not.</p>
<p><b>Output Text Fields</b>: See <a href="sheetsoutputtext.html">Sheet Output Text Field</a>.</p>
</div>
</div>
</body>
</html>```
