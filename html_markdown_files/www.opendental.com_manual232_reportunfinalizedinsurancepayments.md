# File: ./www.opendental.com/manual232/reportunfinalizedinsurancepayments.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Unfinalized Insurance Payment Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportunfinalizedinsurancepayments','+daily','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportunfinalizedinsurancepayments.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportunfinalizedinsurancepayments.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportunfinalizedinsurancepayments.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportunfinalizedinsurancepayments.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportunfinalizedinsurancepayments.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportunfinalizedinsurancepayments.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportunfinalizedinsurancepayments.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportunfinalizedinsurancepayments.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportunfinalizedinsurancepayments.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportunfinalizedinsurancepayments.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportunfinalizedinsurancepayments.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportunfinalizedinsurancepayments.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportunfinalizedinsurancepayments.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportunfinalizedinsurancepayments.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportunfinalizedinsurancepayments.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportunfinalizedinsurancepayments.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportunfinalizedinsurancepayments.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportunfinalizedinsurancepayments.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportunfinalizedinsurancepayments.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportunfinalizedinsurancepayments.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportunfinalizedinsurancepayments.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportunfinalizedinsurancepayments.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportunfinalizedinsurancepayments.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportunfinalizedinsurancepayments.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportunfinalizedinsurancepayments.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportunfinalizedinsurancepayments.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportunfinalizedinsurancepayments.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportunfinalizedinsurancepayments.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Unfinalized Insurance Payment Report</p></div>
<div class="GeneralPageContent">
<p>Run the Unfinalized Insurance Payments Report to locate insurance payments that need to be finalized.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Daily section, click <b>Unfinalized Insurance Payments</b>.</p>
<img src="images/reportunfinalizedinspayment.png" width="915" height="275"/><p>Alternatively, in the <a href="mainmenu.html">Main Menu</a> click Reports, Unfinalized Payments. </p>
<p>The number of unfinalized payments within the last 30 days will also be noted, in parentheses (e.g., <i>Unfinalized Payments (3)</i>), in the Reports dropdown from the Main Menu. </p>
<p><div class="Note">Note: The <a href="opendentalservice.html">Open Dental Service</a> must be running to show in order for the number of unfinalized payments to display in the Report dropdown. The number may not populate for 10+ minutes after Open Dental has been open.</div>
</p>
<h2>Filters</h2>
<p class="MarginBottomZero"><b>Type:</b> Select the type of insurance payments to display.  </p>
<ul class="MarginBottomGap">
<li>All: All unfinalized insurance payments.</li>
<li>Partial Payments: Batch insurance payment not finalized.</li>
<li>Unfinalized Payment: Single unfinalized insurance payment.</li>
</ul>
<p class="MarginBottomZero"><b>Clinics</b>: Select clinics to include in the report. Ctrl + click to select multiple clinics or check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic attached to claim or clinic attached to bulk check (partial payments).</li>
<li>If user is restricted to specific clinics, only accessible clinics will list. When checking <b>All (includes hidden)</b>, results will include all clinics user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics user is restricted from.</li>
</ul>
<p><b>Carrier:</b> Type an insurance carrier name to narrow results by carrier.</p>
<h2>Unfinalized Insurance Payment Grid</h2>
<p>Click <b>Refresh</b> to update the results in the Unfinalized Insurance Insurance Payment grid. Descriptions of each column in the grid are below.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Type</b>: Type of payment (i.e., unfinalized payment or partial payment).</li>
<li><b>Patient</b>: Last name and first name of patient on claim. Partial payments attached to multiple payments will be listed in the grid once; one patient name will be shown with <i>(multiple)</i> to indicate additional patients are on the payment.</li>
<li><b>Carrier</b>: Insurance carrier on claim or bulk check (partial payments).</li>
<li><b>Clinic</b>: Clinic attached to claim or bulk check (partial payments).</li>
<li><b>Date</b>: Date payment was entered.</li>
<li><b>Date of Service</b>: Claim date of service.</li>
<li><b>Amount</b>: Unfinalized payment total for claim.</li>
</ul>
<p class="MarginBottomZero">Right-click a row for additional options. Options are not available for all unfinalized payments. </p>
<ul class="MarginBottomGap">
<li><b>Open EOB</b>: Click to open the Insurance Payment (EOB) a partial payment is attached to. See <a href="claimpaymentbatch.html">Batch Insurance Payment</a>. </li>
<li><b>Delete EOB</b>: Click to delete a Batch Insurance Payment. All attached claim payments will now list individually as <i>Unfinalized Payment</i> (not Partial Payment).</li>
<li><b>Go to Account</b>: Click to open the <a href="account.html">Account Module</a> for the selected patient. For payments attached to multiple patients (Partial Payments), this will open the account for the listed patient.</li>
<li><b>Open Claim</b>: Click to open the claim associated with the payment. </li>
<li><b>Create Check</b>: Click to finalize the claim payment for a single claim. See <a href="claimpayfinalize.html">Finalize Insurance Payment</a>. </li>
</ul>
<p> Click <b>Print</b> to immediately print the report. Click <b>Export</b> to save the results as a .txt or .xls file.</p>
</div>
</div>
</body>
</html>```
