# File: ./www.opendental.com/site/canadalabfees.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - Canada Lab Fees</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('canadalabfees','canada','countries','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>Canada Lab Fees</p></div>
		<div class="GeneralPageContent">
<p>For <a href="canada.html">Canada</a> users, in the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodes.html">Procedure Codes</a> list, double-click a procedure code.</p>
<img src="images/canadaIsLabFee.png" width="867" height="407"/><p>Lab fees can be charted in Open Dental and associated with a procedure code. </p>
<p>To ensure a procedure code is considered a lab, check <b>Is Lab Fee</b> in the Edit Procedure Code window.</p>
<h2>Attaching Lab Fees to Procedures</h2>
<p>Labs must be attached to a procedure prior to sending a claim. Each procedure may have up to two lab procedures attached. </p>
<p class="MarginBottomZero">There are two ways to associate a lab with a procedure. </p>
<ol class="MarginBottomGap">
<li>Add the lab fee directly to the procedure code.<br><p>Double-click on the procedure code, then click the Canada tab. Type in the lab amount. Add up to two lab fees.</p>
<img src="images/canadaLabTab.png" width="915" height="629"/><p>This automatically creates the 99111 procedure code. </p>
</li>
<li>Manually attach a lab fee. <br><p>Chart the procedure and the lab procedure code separately. Once both are charted, in the Chart Module, highlight both the procedure and lab, right-click on either code, and select <b>Attach Lab Fee</b>.</p>
<img src="images/canadaLabAttach.png" width="699" height="285"/><p>This attaches the lab fee with the procedure. Use this method if using a custom lab procedure code.</p>
</li>
</ol>
<p>When a lab is attached to a procedure code, a visual indicator of ^^ appears in the description.</p>
<img src="images/canadaProcwithLabFee.png" width="681" height="48"/><p>The lab fee can be updated from the lab procedure. Double-click the lab procedure code to open <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedureedit.html">Procedure Info</a> and edit the Amount as needed. </p>
<h2>Providers</h2>
<p>By default, the provider associated with the lab procedure matches the provider on the attached dental procedure. A default provider override can be set for lab codes in the Procedure Code List.</p>
<p>To change the provider on a lab, double-click into the lab procedure and use the Provider dropdown. When the provider on the lab procedure differs from the dental procedure, a warning appears when sending claims. The warning message is informational only and does not stop the claim from sending.</p>
<h2>Removing Lab Fees</h2>
<p>To remove a lab fee, delete the lab procedure or clear out the lab fee from the procedure it is attached to. Labs can only be removed from a procedure that has not been added to a predetermination or claim.</p>
<p>Lab fees can also be detached from procedures by right-clicking the lab procedure in the Chart Module and selecting <b>Detach Lab Fee</b>.</p>
<h2>Change Lab Procedure Code</h2><p>The default lab code is 99111, however other codes (e.g., Expense Fee code 99121) can be used.</p>
<p class="MarginBottomZero">To chart a different lab code:  </p>
<ul class="MarginBottomGap">
<li>In the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedureedit.html">Procedure Info</a> window, click <i>Change</i>.</li>
<li>Chart the alternate code separately then use right-click options to attach it to the procedure.</li>
</ul>
<h2>Appointments</h2>
<p>Lab procedures show on a separate line in the Appointments Module. The lab amount calculates into production.</p>
<img src="images/canadaLabAppt.png" width="915" height="165"/><h2>Insurance Estimates</h2>
<p>Lab fee estimates are based on the coverage of the associated procedure. Overrides to estimates must happen on the procedure rather than the lab. To use the same insurance estimate logic for PPO plans, enable the <i>Canadian PPO insurance plans create lab estimates</i> preference.</p>
<h2>Claims</h2>
<p>Lab procedures must be attached to the related procedure before submitting on a claim. If the lab procedure is a custom procedure code, printed and electronic claims show only the first 5 characters, but EOB printouts show the custom code as it shows in Open Dental. </p>
<p>Lab procedures show in the Edit Claim window. The lab fee shows as a separate line item.</p>
<img src="images/canadaLabFeesClaim.png" width="915" height="244"/><p>On a printed claim, the sum of attached lab and expense fees show under the Laboratory Charge column on the same line item as the procedure.</p>
<img src="images/canadaLabOnPrint.png" width="506" height="70"/>		</div>
	</div>
</body>
</html>```
