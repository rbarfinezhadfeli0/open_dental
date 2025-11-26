# File: ./www.opendental.com/manual243/odtouchpayplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ODTouch: Payment Plans</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('odtouchpayplan','odtouchhome','odtouchsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/odtouchpayplan.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/odtouchpayplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/odtouchpayplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/odtouchpayplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/odtouchpayplan.html" >v23.2</option><option value="https://www.opendental.com/manual231/odtouchpayplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/odtouchpayplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/odtouchpayplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/odtouchpayplan.html" >v22.2</option><option value="https://www.opendental.com/manual221/odtouchpayplan.html" >v22.1</option><option value="https://www.opendental.com/manual214/odtouchpayplan.html" >v21.4</option><option value="https://www.opendental.com/manual213/odtouchpayplan.html" >v21.3</option><option value="https://www.opendental.com/manual212/odtouchpayplan.html" >v21.2</option><option value="https://www.opendental.com/manual211/odtouchpayplan.html" >v21.1</option><option value="https://www.opendental.com/manual205/odtouchpayplan.html" >v20.5</option><option value="https://www.opendental.com/manual204/odtouchpayplan.html" >v20.4</option><option value="https://www.opendental.com/manual203/odtouchpayplan.html" >v20.3</option><option value="https://www.opendental.com/manual202/odtouchpayplan.html" >v20.2</option><option value="https://www.opendental.com/manual201/odtouchpayplan.html" >v20.1</option><option value="https://www.opendental.com/manual194/odtouchpayplan.html" >v19.4</option><option value="https://www.opendental.com/manual193/odtouchpayplan.html" >v19.3</option><option value="https://www.opendental.com/manual192/odtouchpayplan.html" >v19.2</option><option value="https://www.opendental.com/manual191/odtouchpayplan.html" >v19.1</option><option value="https://www.opendental.com/manual184/odtouchpayplan.html" >v18.4</option><option value="https://www.opendental.com/manual183/odtouchpayplan.html" >v18.3</option><option value="https://www.opendental.com/manual182/odtouchpayplan.html" >v18.2</option><option value="https://www.opendental.com/manual181/odtouchpayplan.html" >v18.1</option><option value="https://www.opendental.com/manual174/odtouchpayplan.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ODTouch: Payment Plans</p></div>
<div class="GeneralPageContent">
<p>Create, review, and edit Payment Plans from the ODTouch device.</p>
<p>From the <a href="odtouchhome.html">ODTouch: Home Screen</a>, tap <b>Pay Plans</b>.</p>
<img src="images/odtouchPayPlan.png" width="774" height="512"/><p>All Payment Plans are listed on the left. Tap <b>Show Closed</b> to view both open and closed plans. Select a Payment Plan to view details on the right.</p>
<p>Tap the caret at the top to print the selected Payment Plan.</p>
<p>Payment Plans are not available when using a mobile phone device.</p>
<h2>Add or Edit a Payment Plan</h2>
<p>Tap <b>+</b> to create a new Payment Plan. Select an existing plan, then tap the Edit icon to edit it. </p>
<img src="images/odtouchPayPlanEdit.png" width="767" height="508"/><p class="MarginBottomZero">Fields to create or edit a Payment Plan match the fields found in the <a href="paymentplandynamic.html">Payment Plan</a> in Open Dental. </p>
<ol class="MarginBottomGap">
<li>Tap <b>+</b> to add procedures to the Payment Plan.  <ul>
<li>Tap <b>Include</b> on each procedure to add to the Payment Plan, then tap OK to return to Terms.</li>
</ul>
</li>
<li>Enter Payment Plan terms as desired, or tap the caret, then <b>Template</b> to select terms from <a href="payplantemplates.html">Payment Plan Templates</a>. </li>
<li>To finalize the plan, tap the caret, then tap <b>Save</b>. </li>
</ol>
<p>Tap the Principal Paid circle to view a visual graph of amount paid. </p>
<img src="images/odtouchPayPlanVisual.png" width="767" height="508"/><h2>Sign a Payment Plan</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>From the Payment Plan Home Screen, tap <b>Sign Plans</b></li>
<li>Tap a plan on the left. Plans already signed are indicated with a signature icon.</li>
<li>Tap <b>Sign</b>.</li>
<img src="images/odtouchPayPlanSign.png" width="767" height="508"/><li>Sign the plan, then tap OK. </li>
</ol>
<p>Tap the Expand icon to view the plan in full screen. </p>
<p>If a plan is already signed, the signature can be replaced as needed. Tap the already signed plan, then tap Sign. A warning displays explaining the plan has already been signed. Continue to replace the signature.</p>
<h2>View Payment Plan Summary</h2>
<p>Select a payment plan on the left, then tap <b>Summary</b> to view details.</p>
<img src="images/odtouchPayPlanSummary.png" width="767" height="508"/></div>
</div>
</body>
</html>```
