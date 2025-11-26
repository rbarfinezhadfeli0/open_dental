# File: ./www.opendental.com/manual/productionincome.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Production and Income</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('productionincome','reportprodinc','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/productionincome.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/productionincome.html" >v24.2</option><option value="https://www.opendental.com/manual241/productionincome.html" >v24.1</option><option value="https://www.opendental.com/manual233/productionincome.html" >v23.3</option><option value="https://www.opendental.com/manual232/productionincome.html" >v23.2</option><option value="https://www.opendental.com/manual231/productionincome.html" >v23.1</option><option value="https://www.opendental.com/manual224/productionincome.html" >v22.4</option><option value="https://www.opendental.com/manual223/productionincome.html" >v22.3</option><option value="https://www.opendental.com/manual222/productionincome.html" >v22.2</option><option value="https://www.opendental.com/manual221/productionincome.html" >v22.1</option><option value="https://www.opendental.com/manual214/productionincome.html" >v21.4</option><option value="https://www.opendental.com/manual213/productionincome.html" >v21.3</option><option value="https://www.opendental.com/manual212/productionincome.html" >v21.2</option><option value="https://www.opendental.com/manual211/productionincome.html" >v21.1</option><option value="https://www.opendental.com/manual205/productionincome.html" >v20.5</option><option value="https://www.opendental.com/manual204/productionincome.html" >v20.4</option><option value="https://www.opendental.com/manual203/productionincome.html" >v20.3</option><option value="https://www.opendental.com/manual202/productionincome.html" >v20.2</option><option value="https://www.opendental.com/manual201/productionincome.html" >v20.1</option><option value="https://www.opendental.com/manual194/productionincome.html" >v19.4</option><option value="https://www.opendental.com/manual193/productionincome.html" >v19.3</option><option value="https://www.opendental.com/manual192/productionincome.html" >v19.2</option><option value="https://www.opendental.com/manual191/productionincome.html" >v19.1</option><option value="https://www.opendental.com/manual184/productionincome.html" >v18.4</option><option value="https://www.opendental.com/manual183/productionincome.html" >v18.3</option><option value="https://www.opendental.com/manual182/productionincome.html" >v18.2</option><option value="https://www.opendental.com/manual181/productionincome.html" >v18.1</option><option value="https://www.opendental.com/manual174/productionincome.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Production and Income</p></div>
<div class="GeneralPageContent">
<p>See <a href="reportprodinc.html">Production and Income Reports</a>.</p>
<p>Below is a definition of terms used when discussing production and income, as well as a discussion about compensating providers by production vs income.</p>
<h2>Definition of Terms</h2>
<p><b>Production:</b> The amount of money the practice expects to collect. Production is often described in terms of production for all (or a group of) patients in a date range (or on a certain date). Gross production is the sum of the fees charged to the patient(s). It is a good number to compare how busy the practice is in different periods. Net production is gross production, plus adjustments, minus insurance write-offs.</p>
<p><b>Write-offs:</b> The difference between the insurance fee the provider is contractually obliged to charge and the provider's UCR fees. </p>
<p><b>Adjustments:</b> Reductions in charges to patients. Open Dental splits adjustments into positive adjustments and negative adjustments for data entry purposes, but they are reported together or by type. For example, a positive adjustment type might be 'missed appointment' or 'late charge'. A negative adjustment might be 'senior discount'.</p>
<p><b>Income:</b> The amount of money brought in or paid on accounts (e.g., collections), usually described in terms of a date range. </p>
<p class="MarginBottomZero"><b>Production or Income?</b> Sometimes there is confusion about whether a particular entry is production or income. Examples: </p>
<ul class="MarginBottomGap">
<li>Patient refund: Both a negative adjustment (production) or a negative payment (income) would reduce the account balance. However, because money is entering or leaving the office, it should be entered as a negative payment so it shows as income in reports.</li>
<li>Warranty credit: A patient comes into the office and a veneer that was applied last week has come off.  <ol>
<li>The office wants to show the production of putting the veneer back on, so a user enters the procedure like normal (chart the procedure, mark it complete). However, the office is not going to collect the fee (no money exchanges hands) and does not want the production to show in Net Production for the day.</li>
<li>Thus, add a negative adjustment equal in amount to the procedure fee. The gross production for the day will include the work for the veneer, but the net production will take into account the adjustment, thus making the net production for that patient zero.</li>
</ol>
</li>
</ul>
<h2>Reports</h2>
<p>There are several <a href="reportprodinc.html">Production and Income Reports</a> (daily, monthly, annual, provider). Each summarizes the data differently but is comprised of the same information.</p>
<p>If there are insurance plans that use the PPO percentage plan type, and the office tracks write-offs, there are three options that affect when write-offs in reports are applied to production. See <a href="writeoffstoproduction.html">Show Insurance Write-offs</a> for guidance and examples.</p>
<h2>Paying Providers Based on Production</h2>
<p>Some offices compensate providers by paying them a percentage of production. To determine provider production, run the Production and Income Report for a date range, using the <i>Provider</i> report type or by selecting only a single provider.</p>
<p><b>If the office does not use PPO insurance plans</b>: The Tot Prod amount indicates the net production and accounts for adjustments. Set a Global Lock Date so that financial report data doesn't change over time. See <a href="securitylockdates.html">Security Lock Dates</a>. The practice should not be utilizing write-offs, so the write-off preference should not affect reports.</p>
<p><b>If the office has PPO insurance plans</b>: Determine how the practice would like to calculate write-offs. There are three options. See <a href="writeoffstoproduction.html">Show Insurance Write-offs</a> for information on each option and how it functions. .</p>
<h2>Paying Providers by Income / Collection</h2>
<p>Provider income or collections can be viewed on the same Production and Income Report used to view production. There are two types of income: insurance income (Ins Income) and patient income (Pt Income). Together they equal the total income (Tot Income). </p>
<p class="MarginBottomZero">There are two issues to be aware of when tracking income: </p>
<ol class="MarginBottomGap">
<li>Payments need to be properly allocated. For more details, see <a href="trackingincome.html">Track Income by Provider</a>.</li>
<li>Income may be received after the period in which it was earned.</li>
</ol>
<p class="MarginBottomZero">Insurance Income: Insurance income is allocated when a user receives the claim payment. </p>
<ul class="MarginBottomGap">
<li>If a user receives the claim by procedure, the income for each procedure is allocated to the <a href="claimprocedure.html">Claimproc</a> provider. This is normally the treating provider.</li>
<li>If a user receives the claim by total, the total payment will default to the patient's primary provider but can be changed. This is not recommended. If receiving claim payments As Total, enable the <a href="allocationssetup.html">Allocation Preference</a><i> Claim Pay by Total splits automatically</i> to ensure payments are allocated to procedures. This will ensure payment goes to the claimproc provider, rather than the patient's primary provider.</li>
</ul>
<p><b>Patient Income:</b> Patient income can be allocated when entering the payment or at a later date using income transfers. Depending on Allocation Setup, Open Dental may suggest paysplits based on the family's outstanding charges, payment amount, and FIFO logic (first in, first out, by date). It is very important to know which provider should and is getting credit for a payment. The practice should also develop a policy for allocating payment to multiple providers. The daily or weekly <a href="reportdailypayments.html">Daily Payments Report</a> (run by provider) can be a useful report to give to providers so they can verify the income information.</p>
<p class="MarginBottomZero"><b>Adjustments to income:</b> Adjustments themselves only affect production amounts, not income. If income needs to be adjusted, enter a payment or an income transfer. Below are some example scenarios. </p>
<ul class="MarginBottomGap">
<li>Returned patient check: Enter a negative payment to increase account balance. See <a href="refunds.html">Refund</a>.</li>
<li>Customer has work done, does not want to pay for it, and the practice or provider have agreed to credit the fee: Enter a negative adjustment to affect production only. This will decrease the account balance.</li>
</ul>
<p><b>What are the issues with reporting income by provider?</b></p>
<ul>
<li>Income may not come in at the time of service. The obligation to pay a provider their share of income lasts as long as the oldest balance for that provider. The exception to this is when the provider signs a contract or settlement stating otherwise. </li>
<li>Patient payments are made before insurance pays and insurance does not pay as expected. If amounts are not the same as anticipated and differ by provider, one provider may end up receiving more payment than they produced. One way to handle this is to <a href="incometransfer.html">transfer income</a> when insurance payments come in.</li>
<li>Patient prepays (See: <a href="unearnedprepayment.html">Unearned / Prepayment</a>). <ul>
<li>Prepayments can be made unallocated to any procedure or provider. These will show as Unearned income on the account. Once work is complete, use the <a href="unearnedallocate.html">Allocate Unearned Tool</a> or complete an <a href="incometransfer.html">Income Transfer</a> to allocate income to completed procedures.</li>
<li>Prepayments can also be allocated to treatment planned procedures. These payments appear in the Hidden Splits tab of the Account. When procedures are completed, an income transfer is automatically completed.</li>
<li>If using accrual accounting, see <a href="accrual.html">Accrual Basis Accounting</a>.</li>
</ul>
</li>
<li>Improperly allocated payments may bias toward the default practice provider. This is especially true as the default practice provider is assigned as the default primary provider for new patients. If this is not changed and staff does not verify payment allocation, the default provider is more likely to be allocated payments. <p class="MarginBottomZero">To mitigate this issue:  </p>
<ul class="MarginBottomGap">
<li>Train staff to set the correct primary provider.</li>
<ul>
<li>Use a dummy practice provider if patients do not have assigned primary providers.</li>
</ul>
<li>Train staff to correctly allocate incoming payment by provider. </li>
</ul>
</li>
</ul>
</div>
</div>
</body>
</html>```
