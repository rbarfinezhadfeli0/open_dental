# File: ./www.opendental.com/manual243/apistatements.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - API Statements</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('apistatements','+needtoOrganize','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/apistatements.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/apistatements.html" >v24.2</option><option value="https://www.opendental.com/manual241/apistatements.html" >v24.1</option><option value="https://www.opendental.com/manual233/apistatements.html" >v23.3</option><option value="https://www.opendental.com/manual232/apistatements.html" >v23.2</option><option value="https://www.opendental.com/manual231/apistatements.html" >v23.1</option><option value="https://www.opendental.com/manual224/apistatements.html" >v22.4</option><option value="https://www.opendental.com/manual223/apistatements.html" >v22.3</option><option value="https://www.opendental.com/manual222/apistatements.html" >v22.2</option><option value="https://www.opendental.com/manual221/apistatements.html" >v22.1</option><option value="https://www.opendental.com/manual214/apistatements.html" >v21.4</option><option value="https://www.opendental.com/manual213/apistatements.html" >v21.3</option><option value="https://www.opendental.com/manual212/apistatements.html" >v21.2</option><option value="https://www.opendental.com/manual211/apistatements.html" >v21.1</option><option value="https://www.opendental.com/manual205/apistatements.html" >v20.5</option><option value="https://www.opendental.com/manual204/apistatements.html" >v20.4</option><option value="https://www.opendental.com/manual203/apistatements.html" >v20.3</option><option value="https://www.opendental.com/manual202/apistatements.html" >v20.2</option><option value="https://www.opendental.com/manual201/apistatements.html" >v20.1</option><option value="https://www.opendental.com/manual194/apistatements.html" >v19.4</option><option value="https://www.opendental.com/manual193/apistatements.html" >v19.3</option><option value="https://www.opendental.com/manual192/apistatements.html" >v19.2</option><option value="https://www.opendental.com/manual191/apistatements.html" >v19.1</option><option value="https://www.opendental.com/manual184/apistatements.html" >v18.4</option><option value="https://www.opendental.com/manual183/apistatements.html" >v18.3</option><option value="https://www.opendental.com/manual182/apistatements.html" >v18.2</option><option value="https://www.opendental.com/manual181/apistatements.html" >v18.1</option><option value="https://www.opendental.com/manual174/apistatements.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>API Statements</p></div>
<div class="GeneralPageContent">
<p>See <a href="../site/apispecification.html">API Specification</a></p>
<p>See <a href="statementwindow.html">Statement Window</a> for more information.</p>
<h2>Statements GET (single)</h2>
<p>Version Added: 24.2.23</p>
<p>Gets a single statement.</p>
<p><b>StatementNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br/> GET /statements/1<br/></p>
<p><b>Example Response:</b><br/><span class="codeblock"> {<br/>  "StatementNum": 1,<br/> "PatNum": 1430,<br/> "DateSent": "2003-12-05",<br/> "DateRangeFrom": "0001-01-01",<br/> "DateRangeTo": "2004-02-01",<br/> "Note": "",<br/> "NoteBold": "",<br/> "Mode_": "Mail",<br/> "HidePayment": "false",<br/> "SinglePatient": "false",<br/> "Intermingled": "false",<br/> "IsSent": "false",<br/> "DocNum": 354,<br/> "DateTStamp": "2024-07-26 10:58:28",<br/> "IsReceipt": "false",<br/> "IsInvoice": "false",<br/> "IsInvoiceCopy": "false",<br/> "SuperFamily": 0,<br/> "IsBalValid": "false",<br/> "InsEst": 0.0,<br/> "BalTotal": 0.0,<br/> "StatementType": "NotSet",<br/> } </span></p>
<p>200 OK<br/> 404 NotFound (with explanation)<br/></p>
<h2>Statements GET (multiple)</h2>
<p>Version Added: 24.2.23</p>
<p>Gets a list of statements.</p>
<p><b>PatNum: </b> Optional. Filter by patient.PatNum. Typically the guarantor.<br/></p>
<p><b>Example Requests:</b><br/> GET /statements<br/> GET /statements?PatNum=1430<br/></p>
<p><b>Example Response:</b><br/><span class="codeblock"> [<br/> {<br/> "StatementNum": 1,<br/> "PatNum": 1430,<br/> "DateSent": "2003-12-05",<br/> "DateRangeFrom": "0001-01-01",<br/> "DateRangeTo": "2004-02-01",<br/> "Note": "",<br/> "NoteBold": "",<br/> "Mode_": "Mail",<br/> "HidePayment": "false",<br/> "SinglePatient": "false",<br/> "Intermingled": "false",<br/> "IsSent": "false",<br/> "DocNum": 354,<br/> "DateTStamp": "2024-07-26 10:58:28",<br/> "IsReceipt": "false",<br/> "IsInvoice": "false",<br/> "IsInvoiceCopy": "false",<br/> "SuperFamily": 0,<br/> "IsBalValid": "false",<br/> "InsEst": 0.0,<br/> "BalTotal": 0.0,<br/> "StatementType": "NotSet",<br/> },<br/> {<br/> "StatementNum": 2,<br/> "PatNum": 1430,<br/> "DateSent": "2024-02-08",<br/> "DateRangeFrom": "2024-01-01",<br/> "DateRangeTo": "2024-03-31",<br/> "Note": "",<br/> "NoteBold": "",<br/> "Mode_": "Mail",<br/> "HidePayment": "false",<br/> "SinglePatient": "false",<br/> "Intermingled": "false",<br/> "IsSent": "true",<br/> "DocNum": 355,<br/> "DateTStamp": "2022-09-30 14:20:24",<br/> "IsReceipt": "false",<br/> "IsInvoice": "false",<br/> "IsInvoiceCopy": "false",<br/> "SuperFamily": 0,<br/> "IsBalValid": "false",<br/> "InsEst": 0.0,<br/> "BalTotal": 0.0,<br/> "StatementType": "NotSet",<br/> },<br/> etc...<br/> ]<br/></span></p>
<p>200 OK<br/> 400 BadRequest (with explanation)<br/> 404 NotFound (with explanation)<br/></p>
</div>
</div>
</body>
</html>```
