# File: ./www.opendental.com/manual232/canadainsplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Canada Insurance Plans</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('canadainsplan','canada','countries','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/canadainsplan.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/canadainsplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/canadainsplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/canadainsplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/canadainsplan.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/canadainsplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/canadainsplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/canadainsplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/canadainsplan.html" >v22.2</option><option value="https://www.opendental.com/manual221/canadainsplan.html" >v22.1</option><option value="https://www.opendental.com/manual214/canadainsplan.html" >v21.4</option><option value="https://www.opendental.com/manual213/canadainsplan.html" >v21.3</option><option value="https://www.opendental.com/manual212/canadainsplan.html" >v21.2</option><option value="https://www.opendental.com/manual211/canadainsplan.html" >v21.1</option><option value="https://www.opendental.com/manual205/canadainsplan.html" >v20.5</option><option value="https://www.opendental.com/manual204/canadainsplan.html" >v20.4</option><option value="https://www.opendental.com/manual203/canadainsplan.html" >v20.3</option><option value="https://www.opendental.com/manual202/canadainsplan.html" >v20.2</option><option value="https://www.opendental.com/manual201/canadainsplan.html" >v20.1</option><option value="https://www.opendental.com/manual194/canadainsplan.html" >v19.4</option><option value="https://www.opendental.com/manual193/canadainsplan.html" >v19.3</option><option value="https://www.opendental.com/manual192/canadainsplan.html" >v19.2</option><option value="https://www.opendental.com/manual191/canadainsplan.html" >v19.1</option><option value="https://www.opendental.com/manual184/canadainsplan.html" >v18.4</option><option value="https://www.opendental.com/manual183/canadainsplan.html" >v18.3</option><option value="https://www.opendental.com/manual182/canadainsplan.html" >v18.2</option><option value="https://www.opendental.com/manual181/canadainsplan.html" >v18.1</option><option value="https://www.opendental.com/manual174/canadainsplan.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Canada Insurance Plans</p></div>
<div class="GeneralPageContent">
<p>For <a href="canada.html">Canada</a> users, in the <a href="family.html">Family Module</a>, double-click an <a href="insplan.html">Insurance Plan</a>.</p>
<img src="images/canadianInsPlan.gif" width="915" height="674"/><p>The Insurance plan looks slightly different in Canada than it does for other countries. The key difference is terminology; all insurance plan fields are in the same place. Notable differences are highlighted in orange and discussed below.</p>
<p><div class="Note">Note: Some Canadian insurance carriers may combine the division number, subscriber ID, and dependent code into a single string of text, (e.g., UTM876543211-01) where the letters (UTM) are the Div. No., the numbers before the hyphen (876543211) are the subscriber ID and the numbers after the hyphen (01) are the Dependent Code. The hyphen is not entered.</div>
</p>
<p><b>Assignment of Benefits (pay dentist)</b>: When checked, insurance will send payments to provider. When unchecked, payments will be sent to patient. Unchecking box will also turn off the automatic import of EOBs (when in use in <a href="clearinghouses.html">Clearinghouses</a>).</p>
<p><b>EDI Code</b>: The 6-digit carrier ID number. Required for electronic claims.</p>
<p><b>Plan Number</b>: Also known as Policy Number, Contract Number, or Group Number.</p>
<p><b>Plan Type</b>: Typically Category Percentage for nearly all Canadian insurance plans.</p>
<p><b>Fee Schedule</b>: Leave as <i>None</i> if the plan pays on the current year fee guide.</p>
<p><b>Subscriber ID</b>: Also known as Certificate Number or Member Number.</p>
<p><b>Request Electronic Benefits</b>: Eligibility requests are not currently supported in Canada.</p>
<p><b>Benefit Information</b>: To see recommended insurance categories for Canada, see <a href="canadainscatsetup.html">Canada Insurance Categories</a>. To set up time units, see <a href="canadaproctimeunits.html">Canada Procedure Code Time Units</a>.</p>
<h2>Canadian Tab </h2>
<p>The Canadian tab hosts additional Canada-specific settings.</p>
<img src="images/canadianInsPlanInfoSection.gif" width="464" height="183"/><p><b>Dentaide Card Sequence</b>: Enter the mandatory two digit value for Dentaide.</p>
<p class="MarginBottomZero"><b>Plan Flag</b>: Usually left blank, but used to indicate one of three kinds of Provincial Medical Plans: </p>
<ul class="MarginBottomGap">
<li>A = Newfoundland MCP Plan</li>
<li>V = Veteran's Affairs Plan</li>
<li>N = NIHB</li>
</ul>
<p><b>Is Provincial Medical Plan</b>: If Plan Flag indicates a Provincial Medical Plan, check the box. If it is blank, uncheck the box.</p>
<p><b>Diagnostic and Institution codes</b>: Only required if Plan Flag is set to A.</p>
</div>
</div>
</body>
</html>```
