# File: ./www.opendental.com/manual/limited.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Limited Statement</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('limited','statementwindow','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/limited.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/limited.html" >v24.2</option><option value="https://www.opendental.com/manual241/limited.html" >v24.1</option><option value="https://www.opendental.com/manual233/limited.html" >v23.3</option><option value="https://www.opendental.com/manual232/limited.html" >v23.2</option><option value="https://www.opendental.com/manual231/limited.html" >v23.1</option><option value="https://www.opendental.com/manual224/limited.html" >v22.4</option><option value="https://www.opendental.com/manual223/limited.html" >v22.3</option><option value="https://www.opendental.com/manual222/limited.html" >v22.2</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Limited Statement</p></div>
<div class="GeneralPageContent">
<p>If a patient needs a statement for specific transactions or procedures, a Limited or Limited (Custom) Statement can be generated. </p>
<p>In the <a href="account.html">Account Module</a> toolbar, click the <a href="statementwindow.html">Statement Window</a> dropdown, <b>Limited</b> or <b>Limited (Custom)</b>.</p>
<img src="images/statementLimited.png" width="205" height="193"/><p class="MarginBottomZero">There are two options for creating Limited Statements: Limited and Limited (Custom). </p>
<ul class="MarginBottomGap">
<li>Limited: A statement is created based on production or income items highlighted in the account grid before clicking the button or the current day's procedures (if applicable). See Limited section below for details.</li>
<li>Limited (Custom): Opens the Limited Statement Select window to select items before generating a statement. See Limited (Custom) section below for details.</li>
</ul>
<p class="MarginBottomZero">The name and contact information that appears on a statement depend on the selected items:  </p>
<ul class="MarginBottomGap">
<li>When only transactions for the selected patient are used, the patient's name appears on the statement. The family guarantor's address is used. The statement is saved to the patient's account</li>
<li>When transactions for other family members are selected or the statement is created from <i>Entire Family</i>, the guarantor's name and address appear on the statement. The statement is saved to the family guarantor's account.</li>
<li>When transactions for other members of the Super Family are selected, the Super Family head's name and address appear on the statement. The statement is saved to the Super Family head, family guarantor, and patient accounts.</li>
</ul>
<h2>Limited</h2>
<p>In the Account Module, highlight production or income items in the account grid (i.e., procedures, patient payments, insurance payments, and adjustments). Then in the Statement dropdown, click <b>Limited</b>. </p>
<p>Alternatively, if no account items are selected, click <b>Limited</b> to create a statement for completed procedures from the current day along with any attached adjustments or payments are automatically included.</p>
<p>The Statement options window opens.</p>
<img src="images/limitedOptions.png" width="722" height="588"/><p class="MarginBottomZero"> Select options for the Limited statement. Most options match the <a href="statementwindow.html">Statement Window</a>. </p>
<ul class="MarginBottomGap">
<li><b>Exclude income transfers</b>: Only available on Limited Statements not marked <i>Sent</i>. Specific to Limited Statements. Check to exclude <a href="incometransfer.html">Income Transfer</a> from appearing on the statement. When checked, status is saved when Limited Statement is marked Sent.</li>
<li><b>Include patient last name</b>: Only available on Limited Statements not marked <i>Sent</i>. When checked, status is saved when Limited Statement is marked <i>Sent</i>.</li>
</ul>
<h2>Limited (Custom)</h2>
<p>In the Statement dropdown, click <b>Limited (Custom)</b>. </p>
<img src="images/statementLimitedSelect.png" width="915" height="339"/><p>The Limited Statement Select opens. Select filters, then highlight the account items to show use to generate the statement. Click <b>OK</b> to continue to the Statement window.</p>
<p class="MarginBottomZero">Filters: Set filters to determine items in the Limited Statement Items grid. </p>
<ul class="MarginBottomGap">
<li><b>From/To</b>: Enter date range of account items to display.</li>
<li><b>Transaction Types</b>: Highlight transaction types to show.</li>
<li><b>Show entries for:</b> Highlight whose account items appear in the grid. <i>SuperFamily</i> option is only available when the selected patient is a member of a <a href="superfamily.html">Super Family</a> and <i>Included in Super Family Billing</i> is checked in <a href="patientedit.html">Edit Patient Information</a>.</li>
</ul>
<p><b>All</b>: Select all transactions displayed in the grid.</p>
<p><b>Today</b>: Select all displayed account items with today's date.</p>
<p><b>None</b>: Deselect all currently account items.</p>
<p>Click <b>OK</b> to generate a statement for selected transactions.</p>
<p>Customize the columns that appear in the Limited Statement Items grid from <a href="displayfields.html">Display Fields</a>. The columns that appear in the grid do not reflect the the columns that appear on the <i>StatementMain </i><a href="sheetsgrid.html">Sheet Grid</a>.</p>
<p>Limited (Custom) statements do not include aging or payment plan information. The total due, insurance estimate, and balance information is based on the items in the statement only. Statements include all transactions attached to selected procedure. This may include some transactions that were not selected or do not appear in the Limited Statement Select window.</p>
</div>
</div>
</body>
</html>```
