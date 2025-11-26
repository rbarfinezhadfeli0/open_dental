# File: ./www.opendental.com/manual243/sheetsdepositslip.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Deposit Slip Layout</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('sheetsdepositslip','sheets','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/sheetsdepositslip.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/sheetsdepositslip.html" >v24.2</option><option value="https://www.opendental.com/manual241/sheetsdepositslip.html" >v24.1</option><option value="https://www.opendental.com/manual233/sheetsdepositslip.html" >v23.3</option><option value="https://www.opendental.com/manual232/sheetsdepositslip.html" >v23.2</option><option value="https://www.opendental.com/manual231/sheetsdepositslip.html" >v23.1</option><option value="https://www.opendental.com/manual224/sheetsdepositslip.html" >v22.4</option><option value="https://www.opendental.com/manual223/sheetsdepositslip.html" >v22.3</option><option value="https://www.opendental.com/manual222/sheetsdepositslip.html" >v22.2</option><option value="https://www.opendental.com/manual221/sheetsdepositslip.html" >v22.1</option><option value="https://www.opendental.com/manual214/sheetsdepositslip.html" >v21.4</option><option value="https://www.opendental.com/manual213/sheetsdepositslip.html" >v21.3</option><option value="https://www.opendental.com/manual212/sheetsdepositslip.html" >v21.2</option><option value="https://www.opendental.com/manual211/sheetsdepositslip.html" >v21.1</option><option value="https://www.opendental.com/manual205/sheetsdepositslip.html" >v20.5</option><option value="https://www.opendental.com/manual204/sheetsdepositslip.html" >v20.4</option><option value="https://www.opendental.com/manual203/sheetsdepositslip.html" >v20.3</option><option value="https://www.opendental.com/manual202/sheetsdepositslip.html" >v20.2</option><option value="https://www.opendental.com/manual201/sheetsdepositslip.html" >v20.1</option><option value="https://www.opendental.com/manual194/sheetsdepositslip.html" >v19.4</option><option value="https://www.opendental.com/manual193/sheetsdepositslip.html" >v19.3</option><option value="https://www.opendental.com/manual192/sheetsdepositslip.html" >v19.2</option><option value="https://www.opendental.com/manual191/sheetsdepositslip.html" >v19.1</option><option value="https://www.opendental.com/manual184/sheetsdepositslip.html" >v18.4</option><option value="https://www.opendental.com/manual183/sheetsdepositslip.html" >v18.3</option><option value="https://www.opendental.com/manual182/sheetsdepositslip.html" >v18.2</option><option value="https://www.opendental.com/manual181/sheetsdepositslip.html" >v18.1</option><option value="https://www.opendental.com/manual174/sheetsdepositslip.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Deposit Slip Layout</p></div>
<div class="GeneralPageContent">
<p>The Deposit Slip sheet can be customized to meet the needs of the practice.</p>
<p>In <a href="sheets.html">Sheets</a>, double-click on a custom sheet with the type of DepositSlip.</p>
<img src="images/sheetDepositSlip.gif" width="915" height="528"/><p class="MarginBottomZero">Alternatively in Sheets:  </p>
<ul class="MarginBottomGap">
<li>Click <b>New</b> and choose <i>DepositSlip</i> as the Sheet Type to create a new deposit slip from blank.</li>
<li>Select an existing Custom DepositSlip sheet and click <b>Duplicate</b> to create a copy of an existing deposit slip.</li>
<li>Select the existing Internal DepositSlip sheet and click <b>Copy</b> to create a copy of the default deposit slip that can be edited.</li>
</ul>
<p>Also see: <a href="sheetproperties.html">Sheet Def Properties</a> and <a href="sheetsaddelements.html">Sheet Field Types</a>.</p>
<p>Only the top-most sheet with the type of <i>DepositSlip</i> in the list of custom sheets will be used for printing. If no custom deposit slips exist, the internal deposit slip is used. To generate a deposit slip, see <a href="depositslip.html">Deposit Slip</a>.</p>
<p><div class="Note">Note: The internal (default) deposit slip is designed to print onto preprinted QuickBooks forms. The top third gets torn off and includes preprinted bank account information and room for up to 18 deposit items. The bottom 2/3 is a detailed report to be kept by the dental office that includes deposit date, total, and a list of items. The internal slip cannot be edited. It must be copied.</div>
</p>
<p>To customize a DepositSlip sheet type, see <a href="sheetsetup.html">Edit Sheet Def</a>. </p>
<p class="MarginBottomZero">The following OutputText fields are supported: </p>
<ul class="MarginBottomGap">
<li><b>cashSumTotal</b>: The total sum of cash payments. Cash payments must have a payment type of <i>Cash</i> associated to calculate. Users must add this output field for cash payments to be included on QuickBook laser forms.</li>
<li><b>CheckNumber01</b> - <b>CheckNumber18</b>: Each deposit item may have a check number attached. Up to 18 check numbers may be associated with deposits.</li>
<li><b>deposit.BankAccountInfo</b>: The bank account information as entered on the Edit Practice window or, if using Clinics, Edit Clinic window. <a href="practice.html">Practice Setup</a>, <a href="cliniceditwindow.html">Clinic</a></li>
<li><b>deposit.DateDeposit</b>: The date of the deposit as entered on the Edit Deposit Slip window.</li>
<li><b>depositList</b>: A list of all deposit line items.  <ul>
<li>About 32 line items can fit on an internal deposit slip. However, the slip can be customized to include as many line items as fits on one sheet of paper by removing the depositItems and moving the depositList higher on the sheet. For Growth Behavior, choose Down Global so the field auto-grows based on output. </li>
<li>The default font for this <a href="sheetsoutputtext.html">Output Text Field</a> is Courier New. Customizing the font may affect alignment of the text rows when generating a deposit slip.</li>
<li>The deposit slips are only one page, regardless of the number of line items.</li>
</ul>
</li>
<li><b>depositTotal</b>: The total dollar amount included in the deposit.</li>
<li><b>depositItemCount</b>: The total count of all deposit items on the slip.</li>
<li><b>depositItem01</b> - <b>depositItem18</b>: Each deposit item represents one deposit line item. There are only 18 possible deposit items. To create a deposit slip that allows more than 18 items, use the depositList field instead and remove all depositItems from the sheet.</li>
</ul>
</div>
</div>
</body>
</html>```
