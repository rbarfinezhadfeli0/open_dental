# File: ./www.opendental.com/manual243/apilabcases.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - API LabCases</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('apilabcases','+needtoOrganize','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/apilabcases.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/apilabcases.html" >v24.2</option><option value="https://www.opendental.com/manual241/apilabcases.html" >v24.1</option><option value="https://www.opendental.com/manual233/apilabcases.html" >v23.3</option><option value="https://www.opendental.com/manual232/apilabcases.html" >v23.2</option><option value="https://www.opendental.com/manual231/apilabcases.html" >v23.1</option><option value="https://www.opendental.com/manual224/apilabcases.html" >v22.4</option><option value="https://www.opendental.com/manual223/apilabcases.html" >v22.3</option><option value="https://www.opendental.com/manual222/apilabcases.html" >v22.2</option><option value="https://www.opendental.com/manual221/apilabcases.html" >v22.1</option><option value="https://www.opendental.com/manual214/apilabcases.html" >v21.4</option><option value="https://www.opendental.com/manual213/apilabcases.html" >v21.3</option><option value="https://www.opendental.com/manual212/apilabcases.html" >v21.2</option><option value="https://www.opendental.com/manual211/apilabcases.html" >v21.1</option><option value="https://www.opendental.com/manual205/apilabcases.html" >v20.5</option><option value="https://www.opendental.com/manual204/apilabcases.html" >v20.4</option><option value="https://www.opendental.com/manual203/apilabcases.html" >v20.3</option><option value="https://www.opendental.com/manual202/apilabcases.html" >v20.2</option><option value="https://www.opendental.com/manual201/apilabcases.html" >v20.1</option><option value="https://www.opendental.com/manual194/apilabcases.html" >v19.4</option><option value="https://www.opendental.com/manual193/apilabcases.html" >v19.3</option><option value="https://www.opendental.com/manual192/apilabcases.html" >v19.2</option><option value="https://www.opendental.com/manual191/apilabcases.html" >v19.1</option><option value="https://www.opendental.com/manual184/apilabcases.html" >v18.4</option><option value="https://www.opendental.com/manual183/apilabcases.html" >v18.3</option><option value="https://www.opendental.com/manual182/apilabcases.html" >v18.2</option><option value="https://www.opendental.com/manual181/apilabcases.html" >v18.1</option><option value="https://www.opendental.com/manual174/apilabcases.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>API LabCases</p></div>
<div class="GeneralPageContent">
<p>See <a href="../site/apispecification.html">API Specification</a></p>
<p>See <a href="labcaseedit.html">Lab Case</a> for more information.</p>
<h2>LabCases GET (single)</h2>
<p>Version Added: 24.2.28</p>
<p>Gets a single labcase.</p>
<p><b>LabCaseNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br/> GET /labcases/1<br/></p>
<p><b>Example Response:</b><br/><span class="codeblock"> {<br/> "LabCaseNum": 1,<br/> "PatNum": 33,<br/> "LaboratoryNum": 1,<br/> "AptNum": 6994,<br/> "PlannedAptNum": 0,<br/> "DateTimeDue": "0001-01-01 00:00:00",<br/> "DateTimeCreated": "0001-01-01 00:00:00",<br/> "DateTimeSent": "2000-01-01 00:00:00",<br/> "DateTimeRecd": "2000-01-01 00:00:00",<br/> "DateTimeChecked": "0001-01-01 00:00:00",<br/> "ProvNum": 1,<br/> "Instructions": "",<br/> "LabFee": 0.0,<br/> "DateTStamp": "2022-09-30 14:23:12",<br/> "InvoiceNum": ""<br/> } </span></p>
<p>200 OK<br/> 404 NotFound (with explanation)<br/></p>
<h2>LabCases GET (multiple)</h2>
<p>Version Added: 24.2.28</p>
<p>Gets a list of labcases.</p>
<p><b>Parameters:</b> All optional.<br/></p>
<p><b>PatNum: </b> FK to patient.PatNum.<br/><b>LaboratoryNum: </b> FK to laboratory.LaboratoryNum. The lab that the case gets sent to.<br/><b>AptNum: </b> FK to appointment.AptNum.<br/><b>PlannedAptNum: </b> FK to appointment.AptNum.<br/><b>ProvNum : </b> FK to provider.ProvNum.<br/></p>
<p><b>Example Requests:</b><br/> GET /labcases<br/> GET /labcases?PatNum=1<br/> GET /labcases?LaboratoryNum=5<br/> GET /labcases?AptNum=143<br/> GET /labcases?PlannedAptNum=357<br/> GET /labcases?AptNum=143&amp;ProvNum=3<br/></p>
<p><b>Example Responses:</b><br/><span class="codeblock"> [<br/> {<br/> "LabCaseNum": 226,<br/> "PatNum": 33,<br/> "LaboratoryNum": 1,<br/> "AptNum": 143,<br/> "PlannedAptNum": 0,<br/> "DateTimeDue": "0001-01-01 00:00:00",<br/> "DateTimeCreated": "2022-09-30 14:23:12",<br/> "DateTimeSent": "2022-10-03 14:24:12",<br/> "DateTimeRecd": "2022-10-04 14:24:12",<br/> "DateTimeChecked": "2022-10-05 14:24:12",<br/> "ProvNum": 3,<br/> "Instructions": "Repair clasps on Max partial",<br/> "LabFee": 0.0,<br/> "DateTStamp": "2022-10-05 14:24:12",<br/> "InvoiceNum": ""<br/> },<br/> {<br/> "LabCaseNum": 227,<br/> "PatNum": 33,<br/> "LaboratoryNum": 1,<br/> "AptNum": 143,<br/> "PlannedAptNum": 0,<br/> "DateTimeDue": "0001-01-01 00:00:00",<br/> "DateTimeCreated": "2022-09-30 14:24:12",<br/> "DateTimeSent": "2022-09-30 14:24:12",<br/> "DateTimeRecd": "2022-10-03 14:24:12",<br/> "DateTimeChecked": "2022-10-04 14:24:12",<br/> "ProvNum": 3,<br/> "Instructions": "",<br/> "LabFee": 0.0,<br/> "DateTStamp": "2022-10-04 14:24:12",<br/> "InvoiceNum": ""<br/> },<br/> etc...<br/> ]<br/></span></p>
<p>200 OK<br/> 400 BadRequest (with explanation)<br/> 404 NotFound (with explanation)<br/></p>
</div>
</div>
</body>
</html>```
