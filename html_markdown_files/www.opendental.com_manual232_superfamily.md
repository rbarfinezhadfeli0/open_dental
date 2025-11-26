# File: ./www.opendental.com/manual232/superfamily.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Super Family</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('superfamily','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/superfamily.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/superfamily.html" >v24.2</option><option value="https://www.opendental.com/manual241/superfamily.html" >v24.1</option><option value="https://www.opendental.com/manual233/superfamily.html" >v23.3</option><option value="https://www.opendental.com/manual232/superfamily.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/superfamily.html" >v23.1</option><option value="https://www.opendental.com/manual224/superfamily.html" >v22.4</option><option value="https://www.opendental.com/manual223/superfamily.html" >v22.3</option><option value="https://www.opendental.com/manual222/superfamily.html" >v22.2</option><option value="https://www.opendental.com/manual221/superfamily.html" >v22.1</option><option value="https://www.opendental.com/manual214/superfamily.html" >v21.4</option><option value="https://www.opendental.com/manual213/superfamily.html" >v21.3</option><option value="https://www.opendental.com/manual212/superfamily.html" >v21.2</option><option value="https://www.opendental.com/manual211/superfamily.html" >v21.1</option><option value="https://www.opendental.com/manual205/superfamily.html" >v20.5</option><option value="https://www.opendental.com/manual204/superfamily.html" >v20.4</option><option value="https://www.opendental.com/manual203/superfamily.html" >v20.3</option><option value="https://www.opendental.com/manual202/superfamily.html" >v20.2</option><option value="https://www.opendental.com/manual201/superfamily.html" >v20.1</option><option value="https://www.opendental.com/manual194/superfamily.html" >v19.4</option><option value="https://www.opendental.com/manual193/superfamily.html" >v19.3</option><option value="https://www.opendental.com/manual192/superfamily.html" >v19.2</option><option value="https://www.opendental.com/manual191/superfamily.html" >v19.1</option><option value="https://www.opendental.com/manual184/superfamily.html" >v18.4</option><option value="https://www.opendental.com/manual183/superfamily.html" >v18.3</option><option value="https://www.opendental.com/manual182/superfamily.html" >v18.2</option><option value="https://www.opendental.com/manual181/superfamily.html" >v18.1</option><option value="https://www.opendental.com/manual174/superfamily.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Super Family</p></div>
<div class="GeneralPageContent">
<p>In the <a href="family.html">Family Module</a>, super families can be used to group patients that are related in some way. </p>
<img src="images/superfamily.png" width="915" height="287"/><p>For example, a super family could consist of all patients in a particular nursing home, a split family due to divorce, or members of an athletic team getting mouthguards. Families can be billed individually or super statements can be created that include the account activity for all super family members.</p>
<p>The guarantor of the first family added to a super family is considered the super head. This family is listed first in the Family Module, Super Family grid in bold red.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>To quickly switch between families or patients, click on a name.</li>
<li>The sort order of families is determined by the <i>Super family sorting strategy</i> preference.</li>
<li>If a family's guarantor is included in super family billing, an X shows in the Stmt column.</li>
<li>To add the name of the super head to the Patient Information area, add <i>Super Head</i> to Fields Showing in <a href="displayfields.html">Display Fields</a>, PatientInformation.</li>
</ul>
<h2>Turn on Super Families</h2>
<p class="MarginBottomZero">To use this feature, enable Super Families in <a href="showfeatures.html">Show Features</a> and restart Open Dental. The following options will then be available in the Open Dental interface.  </p>
<ul class="MarginBottomGap">
<li>Family Module toolbar, Super Family buttons (Add, Remove, Disband).</li>
<li><a href="patientedit.html">Edit Patient Information</a>, Included in Super Family Billing checkbox.</li>
<li><a href="statementwindow.html">Statement Window</a>, Send to Super Family checkbox.</li>
<li><a href="billing.html">Billing</a>, Group by Super Family checkbox.</li>
</ul>
<p class="MarginBottomZero">Review and set default options in <a href="preferences.html">Preferences</a>: </p>
<ul class="MarginBottomGap">
<li><i>Super family sorting strategy</i>.</li>
<li><i>Allow syncing patient information to all super family members</i>.</li>
<li><i>Copy the super guarantor's primary insurance to all new super family members</i>.</li>
<li><i>New patient clones use super family instead of regular family</i>.</li>
</ul>
<h2>Create a Super Family</h2>
<p>To create a super family, first add the super head, then add other families.</p>
<p class="MarginBottomZero">Create the Super Family: </p>
<ol class="MarginBottomGap">
<li>Select the patient (guarantor) who will be the super head.</li>
<li>In the Family Module toolbar, click <b>SuperFamily: Add</b>.  <ul>
<li>When first clicked, all family members of the super head will list in a new Super Family section (in bold red).</li>
</ul>
</li>
</ol>
<p class="MarginBottomZero">Add family members to the Super Family: </p>
<ol class="MarginBottomGap">
<li>Click <b>Super Family: Add</b>. The Select Patient window will open. </li>
<li>Select the patient. </li>
<li>If the <i>Copy the super guarantor's primary insurance to all new super family members</i> preference is enabled, a message will show.  <ul>
<li>Click Yes to copy the super head's primary insurance plan to the each patient in the new family. For each copied plan the following will occur: <ul>
<li>The patient's Medicaid ID will be used as the Subscriber ID. If there is no Medicaid ID entered, a prompt to enter the subscriber ID on the <a href="insplan.html">Insurance Plan</a> will display.</li>
<li>The default Relationship to Subscriber will be set to <i>Self</i>.</li>
<li>If the patient has no other insurance, the plan will added as the primary insurance (order = 1). If other plans are entered, the plan will be given then next available order number (order = 2, 3, etc).</li>
</ul>
</li>
<li>Click No to add the family without copying insurance plans.</li>
</ul>
</li>
<li>The patient will be added to the super family.</li>
</ol>
<h2>Super Family Statements / Invoices</h2>
<p>Statements and invoices can be sent to each family guarantor, or create super statements or invoices that are addressed to the super head, include account activity for all patients in the super family, and are grouped by the family guarantor.</p>
<p><div class="Note">Note:  To be included in a super statement or invoice, each guarantor of a family must have <i>Included in Super Family Billing</i> checked on the Edit Patient Information window. </div>
</p>
<p class="MarginBottomZero">Create a single super statement: </p>
<ol class="MarginBottomGap">
<li>Select any patient in the super family.</li>
<li>From the <a href="account.html">Account Module</a>, click the Statement dropdown, <b>More Options</b>. See <a href="statementwindow.html">Statement Window</a>.</li>
<li>Select <b>Send to Super Family</b>.</li>
<li>Select other options as needed.</li>
<li>Click <b>Print</b>, <b>Email</b> or <b>OK</b> to generate.</li>
</ol>
<p class="MarginBottomZero">Create a super statement using the billing list: </p>
<ol class="MarginBottomGap">
<li>In the <a href="manage.html">Manage Module</a>, click <b>Billing</b>. See <a href="billing.html">Billing</a>.</li>
<li>Check the <b>Group by Super Family</b> box.</li>
<li>Click <b>Create List</b>. Only the super head will have a statement generated.</li>
<li>Click <b>Print</b>, <b>Email</b> or <b>OK</b> to generate.</li>
</ol>
<p class="MarginBottomZero">Create a super invoice: </p>
<ol class="MarginBottomGap">
<li>Select any patient in the super family.</li>
<li>From the Account Module, click the Statement dropdown, <b>Invoice</b>. See <a href="invoice.html">Invoice</a>.</li>
<li>Select the procedures, payment plan debits, and adjustments.</li>
<li>Select <b>Send to Super Family</b>.</li>
<li>Select other options as needed.</li>
<li>Click <b>Print</b>, <b>Email</b> or <b>OK</b> to generate.</li>
</ol>
<p>All patients included in a super statement or invoice will have a statement entry added in their patient account ledger.</p>
<h2>Remove a Patient/Family</h2>
<p>To remove a patient/family from a super family, click on their name, then click <b>Remove</b>. The screen will switch to the removed guarantor's record. Any super statements generated for patients in the removed super family will no longer show in their patient account ledger.</p>
<h2>Disband a Super Family</h2>
<p>Disbanding a super family removes the relationship between all members of super family. A confirmation message will show to verify the removal. Any super statements generated for disbanded family members will no longer show in their patient account ledger.</p>
<h2>Turn off Super Families</h2>
<p>If super families are turned off in Show Features, but patients are left in a super family, there is no way to disband them. Only turn off super families when all super families have been disbanded,</p>
</div>
</div>
</body>
</html>```
