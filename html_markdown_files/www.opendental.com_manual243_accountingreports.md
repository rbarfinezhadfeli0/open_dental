# File: ./www.opendental.com/manual243/accountingreports.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Accounting Reports</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('accountingreports','accounting','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/accountingreports.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/accountingreports.html" >v24.2</option><option value="https://www.opendental.com/manual241/accountingreports.html" >v24.1</option><option value="https://www.opendental.com/manual233/accountingreports.html" >v23.3</option><option value="https://www.opendental.com/manual232/accountingreports.html" >v23.2</option><option value="https://www.opendental.com/manual231/accountingreports.html" >v23.1</option><option value="https://www.opendental.com/manual224/accountingreports.html" >v22.4</option><option value="https://www.opendental.com/manual223/accountingreports.html" >v22.3</option><option value="https://www.opendental.com/manual222/accountingreports.html" >v22.2</option><option value="https://www.opendental.com/manual221/accountingreports.html" >v22.1</option><option value="https://www.opendental.com/manual214/accountingreports.html" >v21.4</option><option value="https://www.opendental.com/manual213/accountingreports.html" >v21.3</option><option value="https://www.opendental.com/manual212/accountingreports.html" >v21.2</option><option value="https://www.opendental.com/manual211/accountingreports.html" >v21.1</option><option value="https://www.opendental.com/manual205/accountingreports.html" >v20.5</option><option value="https://www.opendental.com/manual204/accountingreports.html" >v20.4</option><option value="https://www.opendental.com/manual203/accountingreports.html" >v20.3</option><option value="https://www.opendental.com/manual202/accountingreports.html" >v20.2</option><option value="https://www.opendental.com/manual201/accountingreports.html" >v20.1</option><option value="https://www.opendental.com/manual194/accountingreports.html" >v19.4</option><option value="https://www.opendental.com/manual193/accountingreports.html" >v19.3</option><option value="https://www.opendental.com/manual192/accountingreports.html" >v19.2</option><option value="https://www.opendental.com/manual191/accountingreports.html" >v19.1</option><option value="https://www.opendental.com/manual184/accountingreports.html" >v18.4</option><option value="https://www.opendental.com/manual183/accountingreports.html" >v18.3</option><option value="https://www.opendental.com/manual182/accountingreports.html" >v18.2</option><option value="https://www.opendental.com/manual181/accountingreports.html" >v18.1</option><option value="https://www.opendental.com/manual174/accountingreports.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Accounting Reports</p></div>
<div class="GeneralPageContent">
<p>In <a href="accounting.html">Accounting</a>, at the top, click the Reports dropdown.</p>
<img src="images/accountingReportsDropdown.png" width="494" height="400"/><p>There are three reports in the accounting section available to run: General Ledger Detail, Balance Sheet, and Profit and Loss. </p>
<p>Once a report is selected, a window will pop up with a calendar. Use the calendars to select a date range. For the Balance Sheet report, select an <i>As of Date</i>. Click <b>OK</b> to generate the report. See <a href="reportcomplex.html">Complex Report System</a> for a description of tool buttons.</p>
<h2>General Ledger Details</h2>
<p>Lists all transactions in a date range for each chart of account.</p>
<img src="images/accountingReportGenLedger.png" width="696" height="902"/><h2>Balance Sheet</h2>
<p> Totals the asset, liability, and equity accounts as of the date selected.</p>
<img src="images/accountingReportBalSheet.png" width="527" height="338"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Retained Earnings (Auto): The sum of net income from all previous years.</li>
<li>NetIncomeThisYear: Income minus expenses as of the year for which the report is displayed.</li>
</ul>
<h2>Profit and Loss</h2>
<p>Totals the income and expense account types and displays net income (<span class="codeblock">income - expense</span>) for a date range.</p>
<img src="images/accountingReportProfLoss.png" width="508" height="360"/></div>
</div>
</body>
</html>```
