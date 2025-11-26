# File: ./www.opendental.com/manual/discountplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Discount Plan Subscriber Edit</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('discountplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/discountplan.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/discountplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/discountplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/discountplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/discountplan.html" >v23.2</option><option value="https://www.opendental.com/manual231/discountplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/discountplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/discountplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/discountplan.html" >v22.2</option><option value="https://www.opendental.com/manual221/discountplan.html" >v22.1</option><option value="https://www.opendental.com/manual214/discountplan.html" >v21.4</option><option value="https://www.opendental.com/manual213/discountplan.html" >v21.3</option><option value="https://www.opendental.com/manual212/discountplan.html" >v21.2</option><option value="https://www.opendental.com/manual211/discountplan.html" >v21.1</option><option value="https://www.opendental.com/manual205/discountplan.html" >v20.5</option><option value="https://www.opendental.com/manual204/discountplan.html" >v20.4</option><option value="https://www.opendental.com/manual203/discountplan.html" >v20.3</option><option value="https://www.opendental.com/manual202/discountplan.html" >v20.2</option><option value="https://www.opendental.com/manual201/discountplan.html" >v20.1</option><option value="https://www.opendental.com/manual194/discountplan.html" >v19.4</option><option value="https://www.opendental.com/manual193/discountplan.html" >v19.3</option><option value="https://www.opendental.com/manual192/discountplan.html" >v19.2</option><option value="https://www.opendental.com/manual191/discountplan.html" >v19.1</option><option value="https://www.opendental.com/manual184/discountplan.html" >v18.4</option><option value="https://www.opendental.com/manual183/discountplan.html" >v18.3</option><option value="https://www.opendental.com/manual182/discountplan.html" >v18.2</option><option value="https://www.opendental.com/manual181/discountplan.html" >v18.1</option><option value="https://www.opendental.com/manual174/discountplan.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Discount Plan Subscriber Edit</p></div>
<div class="GeneralPageContent">
<p>For patients without insurance, a Discount Plan can be added to offer office-defined discounts.</p>
<p>In the <a href="family.html">Family Module</a>, double-click an existing Discount Plan.</p>
<img src="images/discountPlanSubEdit.png" width="432" height="395"/><p class="MarginBottomZero">Alternatively: </p>
<ul class="MarginBottomGap">
<li>For a patient with an existing Discount Plan, in the Family Module, click <b>Discount Plan</b>.</li>
<li>For a patient without a Discount Plan, click <b>Discount Plan</b> to add a new plan. See below for details.</li>
</ul>
<p><div class="Note">Note: To make edits to a plan's Annual Max or Frequency Limitations, see <a href="discountplans.html">Discount Plans</a>.</div>
</p>
<h2>Discount Plan Subscriber Edit</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Discount Plan ID</b>: A number assigned to the Discount Plan automatically. Cannot be changed.</li>
<li><b>Discount Plan</b>: The name of the Discount Plan associated with this patient. Click <b>[...]</b> to change Discount Plan. </li>
<li><b>Fee Schedule</b>: The fee schedule assigned to the Discount Plan.</li>
<li><b>Adjustment Type</b>: The adjustment type selected for the Discount Plan.</li>
<li><b>Plan Note</b>: Notes regarding the Discount Plan in general. </li>
</ul>
<p class="MarginBottomZero">Subscriber Information: Enter information specific to the subscriber of the Discount Plan in this area. </p>
<ul class="MarginBottomGap">
<li><b>Name</b>: Subscriber name. Displays last name, first name.</li>
<li><b>Effective Dates</b>: Enter the effective from and to dates for patient's Discount Plan. If a Discount Plan has ended, the <i>Date Term</i> is highlighted in orange in the Family Module.</li>
<li><b>Subscriber Note</b>: Notes specific to the subscriber of the plan.</li>
</ul>
<p><b>Drop</b>: Remove the plan from the current patient. Alternatively, use the dropdown menu on the Discount Plan button in the Family Module.</p>
<p>Click <b>OK</b> to save any changes.</p>
<p>Click <b>Cancel</b> to close without saving changes.</p>
<h2>Add a Discount Plan</h2>
<p>In the <a href="family.html">Family Module</a> toolbar, click <b>Discount Plan</b>. The <a href="discountplans.html">Discount Plans</a> list displays.</p>
<img src="images/discountPlanAdd.png" width="798" height="263"/><p>Double-click a plan from the list or highlight a plan and click <b>OK</b> to add the plan to the patient or click <b>Add</b> to create a new plan.</p>
<p>Once a plan is selected, make any necessary changes to the Plan Note and Subscriber Information on the Discount Plan Subscriber Edit window.</p>
<h2>View Discount Amounts in the Treatment Plan Module</h2>
<p class="MarginBottomZero">Once a Discount Plan is added to a patient, Discount Plan discounts show by default in the Treatment Plan Module. If Discount Plan amounts are not displaying, follow these steps to ensure they are set to show:  </p>
<ol class="MarginBottomGap">
<li>Add <i>DPlan</i> to <i>TreatmentPlanModule</i> in <a href="displayfields.html">Display Fields</a>.</li>
<li>In the Treatment Plan, double-click the unsaved Treatment Plan (active or inactive), and set the Plan Type to <i>Discount</i>. <br/><img src="images/discountPlanTP.gif" width="619" height="126" class="ImageInParagraph"/></li>
</ol>
<p><div class="Note">Note: <ul>
<li>When a procedure fee on a Discount Plan Fee Schedule changes, the change is immediately reflected in the Treatment Plan. </li>
<li>When a procedure fee on the UCR/Office Fee Schedule changes, the change is only reflected when Update Fees is clicked or when the Global Update Fees tool is run.</li>
<li>If updating fees, first save a copy of the Treamtent Plan for Discount Plan patients to retain original estimates.</li>
<li>The effective date range of the Discount Plan is considered for treatment plan estimates. If running the treatment plan as of a date outside of the effective dates of the Discount Plan, discounts are not reflected.</li>
<li>Annual Max and Frequency Limitations of the Discount Plan are considered in treatment plan estimates.</li>
</ul>
</div>
</p>
<h2>Discount Plan Adjustments</h2>
<p>Once procedures are set complete, adjustments are automatically created for any discounted procedures. The adjustment that is created matches the amount that was in the <i>DPlan</i> column for the procedure in the Treatment Plan.</p>
<img src="images/discountPlanAdjust.png" width="741" height="117"/><p> The adjustment amount is determined by difference between the fee billed (e.g., UCR fee) and the Discount Plan fee. The Discount Plan fee is based on the fee schedule assigned in <a href="discountplans.html">Discount Plan Edit</a>. Open Dental makes the calculation automatically to create the adjustment. The patient responsibility (i.e., patient portion) for the procedure equals the fee in the Discount Plan <a href="feeschedules.html">Fee Schedule</a>.</p>
</div>
</div>
</body>
</html>```
