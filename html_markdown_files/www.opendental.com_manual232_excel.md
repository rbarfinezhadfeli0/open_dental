# File: ./www.opendental.com/manual232/excel.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Excel</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('excel','queryoverview','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/excel.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/excel.html" >v24.2</option><option value="https://www.opendental.com/manual241/excel.html" >v24.1</option><option value="https://www.opendental.com/manual233/excel.html" >v23.3</option><option value="https://www.opendental.com/manual232/excel.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/excel.html" >v23.1</option><option value="https://www.opendental.com/manual224/excel.html" >v22.4</option><option value="https://www.opendental.com/manual223/excel.html" >v22.3</option><option value="https://www.opendental.com/manual222/excel.html" >v22.2</option><option value="https://www.opendental.com/manual221/excel.html" >v22.1</option><option value="https://www.opendental.com/manual214/excel.html" >v21.4</option><option value="https://www.opendental.com/manual213/excel.html" >v21.3</option><option value="https://www.opendental.com/manual212/excel.html" >v21.2</option><option value="https://www.opendental.com/manual211/excel.html" >v21.1</option><option value="https://www.opendental.com/manual205/excel.html" >v20.5</option><option value="https://www.opendental.com/manual204/excel.html" >v20.4</option><option value="https://www.opendental.com/manual203/excel.html" >v20.3</option><option value="https://www.opendental.com/manual202/excel.html" >v20.2</option><option value="https://www.opendental.com/manual201/excel.html" >v20.1</option><option value="https://www.opendental.com/manual194/excel.html" >v19.4</option><option value="https://www.opendental.com/manual193/excel.html" >v19.3</option><option value="https://www.opendental.com/manual192/excel.html" >v19.2</option><option value="https://www.opendental.com/manual191/excel.html" >v19.1</option><option value="https://www.opendental.com/manual184/excel.html" >v18.4</option><option value="https://www.opendental.com/manual183/excel.html" >v18.3</option><option value="https://www.opendental.com/manual182/excel.html" >v18.2</option><option value="https://www.opendental.com/manual181/excel.html" >v18.1</option><option value="https://www.opendental.com/manual174/excel.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Excel</p></div>
<div class="GeneralPageContent">
<p><span style="color:red">These steps are provided as a courtesy. Open Dental support technicians do not assist with Microsoft Excel spreadsheets.</span></p>
<p>There are two options for using Open Dental data in an Excel spreadsheet, generate a <a href="queryoverview.html">User Query</a> and export the result or link directly to the database.</p>
<h2>Query Export</h2>
<p>Users can generate a query from within Open Dental and export the resulting table. It will normally be saved as a text file in the OpenDentalExports folder on the local <b>C:\</b> drive. The first row of the text file will contain the names of the columns, and the fields are separated by tabs. This makes it very easy to open in Excel. In Excel, select Data, Import External Data, Import Data to bring up the Select Data Source dialog:</p>
<img src="images/WordDataSource.gif" width="835" height="319"/><p class="MarginBottomZero">Find the OpenDentalExports folder in the file list, and click the name of the text file exported from Open Dental. The Text Import Wizard has three windows that come up. </p>
<ol class="MarginBottomGap">
<li>In window 1, select Delimited.</li>
<li>In window 2, select Tab.</li>
<li>In window 3, select General.</li>
<li>Then click Finish and select where to place the data.</li>
</ol>
<p>The entire table is now loaded into the worksheet and can be manipulated as needed.</p>
<h2>Direct Link</h2>
<p>This is not normally needed as the text import is simpler, however, instructions are still provided in case they are needed.. First, set up the <a href="odbc.html">ODBC</a> on the computer where the data will be accessed. Then, open Excel and open the Select Data Source dialog as shown above. Select New Source at the bottom.</p>
<img src="images/WordDataConnect.gif" width="512" height="363"/><p>Select Other/Advanced, and click Next.</p>
<img src="images/WordDataLink.gif" width="365" height="468"/><p>Select OpenDental from the data source list and enter the username and password. Click Test Connection to verify there is a good connection. Select a table from the list and select the new data source that has been created. The table will be loaded into the spreadsheet for further manipulation. </p>
</div>
</div>
</body>
</html>```
