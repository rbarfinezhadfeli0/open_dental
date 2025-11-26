# File: ./www.opendental.com/manual232/eclipboardpaymentplans.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - eClipboard: Payment Plans</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('eclipboardpaymentplans','paymentplanpatient','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/eclipboardpaymentplans.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/eclipboardpaymentplans.html" >v24.2</option><option value="https://www.opendental.com/manual241/eclipboardpaymentplans.html" >v24.1</option><option value="https://www.opendental.com/manual233/eclipboardpaymentplans.html" >v23.3</option><option value="https://www.opendental.com/manual232/eclipboardpaymentplans.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/eclipboardpaymentplans.html" >v23.1</option><option value="https://www.opendental.com/manual224/eclipboardpaymentplans.html" >v22.4</option><option value="https://www.opendental.com/manual223/eclipboardpaymentplans.html" >v22.3</option><option value="https://www.opendental.com/manual222/eclipboardpaymentplans.html" >v22.2</option><option value="https://www.opendental.com/manual221/eclipboardpaymentplans.html" >v22.1</option><option value="https://www.opendental.com/manual214/eclipboardpaymentplans.html" >v21.4</option><option value="https://www.opendental.com/manual213/eclipboardpaymentplans.html" >v21.3</option><option value="https://www.opendental.com/manual212/eclipboardpaymentplans.html" >v21.2</option><option value="https://www.opendental.com/manual211/eclipboardpaymentplans.html" >v21.1</option><option value="https://www.opendental.com/manual205/eclipboardpaymentplans.html" >v20.5</option><option value="https://www.opendental.com/manual204/eclipboardpaymentplans.html" >v20.4</option><option value="https://www.opendental.com/manual203/eclipboardpaymentplans.html" >v20.3</option><option value="https://www.opendental.com/manual202/eclipboardpaymentplans.html" >v20.2</option><option value="https://www.opendental.com/manual201/eclipboardpaymentplans.html" >v20.1</option><option value="https://www.opendental.com/manual194/eclipboardpaymentplans.html" >v19.4</option><option value="https://www.opendental.com/manual193/eclipboardpaymentplans.html" >v19.3</option><option value="https://www.opendental.com/manual192/eclipboardpaymentplans.html" >v19.2</option><option value="https://www.opendental.com/manual191/eclipboardpaymentplans.html" >v19.1</option><option value="https://www.opendental.com/manual184/eclipboardpaymentplans.html" >v18.4</option><option value="https://www.opendental.com/manual183/eclipboardpaymentplans.html" >v18.3</option><option value="https://www.opendental.com/manual182/eclipboardpaymentplans.html" >v18.2</option><option value="https://www.opendental.com/manual181/eclipboardpaymentplans.html" >v18.1</option><option value="https://www.opendental.com/manual174/eclipboardpaymentplans.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>eClipboard: Payment Plans</p></div>
<div class="GeneralPageContent">
<p>Payment Plans can be sent to eClipboard to be reviewed and signed by the patient.</p>
<p>In a <a href="paymentplanpatient.html">Payment Plan</a>, click <b>eClipboard</b>.</p>
<img src="images/eClipboardPaymentPlan.png" width="681" height="59"/><p>Both Patient Payment Plans and <a href="paymentplandynamic.html">Dynamic Payment Plans</a> can be sent to eClipboard.</p>
<p>To save signed Payment Plans to the Imaging Module, enable <i>In eClipboard, save signed Payment Plans as PDF</i> in <a href="preferences.html">Preferences</a>.</p>
<h2>Patient Currently in Session</h2>
<p>If a patient is currently in an eClipboard session, in the Payment Plan, click <b>eClipboard</b>. The Payment Plan is added to their Check-in checklist.</p>
<img src="images/eClipboardPaymentPlanChecklist.png" width="635" height="384"/><h2>Patient Not in Session</h2>
<p>If the patient is not currently in an eClipboard session, the Payment Plan can be sent to the device.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In the Account Module, double-click into the Payment Plan, then click <b>eClipboard</b>.</li>
<li>The following window displays.<br/><img src="images/eClipboardPaymentPlanQR.png" width="413" height="373" class="ImageInParagraph"/></li>
<li>In eClipboard, tap the <b>QR icon</b>. <ul>
<li>Alternatively, in the eClipboard menu, tap <b>Payment Plans</b>.</li>
</ul>
</li>
<li>Either use the device camera to scan the QR code, or type in the unlock code.</li>
<li>The Payment Plan populates in eClipboard.<br/><img src="images/eClipboardPaymentPlans.png" width="636" height="340" class="ImageInParagraph"/></li>
</ol>
<h2>Signing the Payment Plan</h2>
<p>Select the payment plan to sign.</p>
<img src="images/eClipboardPaymentPlanShow.png" width="636" height="136"/><p>Once the patient has made a decision, tap <b>Sign</b>.</p>
<img src="images/eClipboardPaymentPlanSign.png" width="638" height="376"/><p>Sign on the device, then tap OK to save.</p>
</div>
</div>
</body>
</html>```
