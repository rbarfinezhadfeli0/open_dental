# File: ./www.opendental.com/manual/inssecondary.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Secondary Insurance</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('inssecondary','insplan','family','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/inssecondary.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/inssecondary.html" >v24.2</option><option value="https://www.opendental.com/manual241/inssecondary.html" >v24.1</option><option value="https://www.opendental.com/manual233/inssecondary.html" >v23.3</option><option value="https://www.opendental.com/manual232/inssecondary.html" >v23.2</option><option value="https://www.opendental.com/manual231/inssecondary.html" >v23.1</option><option value="https://www.opendental.com/manual224/inssecondary.html" >v22.4</option><option value="https://www.opendental.com/manual223/inssecondary.html" >v22.3</option><option value="https://www.opendental.com/manual222/inssecondary.html" >v22.2</option><option value="https://www.opendental.com/manual221/inssecondary.html" >v22.1</option><option value="https://www.opendental.com/manual214/inssecondary.html" >v21.4</option><option value="https://www.opendental.com/manual213/inssecondary.html" >v21.3</option><option value="https://www.opendental.com/manual212/inssecondary.html" >v21.2</option><option value="https://www.opendental.com/manual211/inssecondary.html" >v21.1</option><option value="https://www.opendental.com/manual205/inssecondary.html" >v20.5</option><option value="https://www.opendental.com/manual204/inssecondary.html" >v20.4</option><option value="https://www.opendental.com/manual203/inssecondary.html" >v20.3</option><option value="https://www.opendental.com/manual202/inssecondary.html" >v20.2</option><option value="https://www.opendental.com/manual201/inssecondary.html" >v20.1</option><option value="https://www.opendental.com/manual194/inssecondary.html" >v19.4</option><option value="https://www.opendental.com/manual193/inssecondary.html" >v19.3</option><option value="https://www.opendental.com/manual192/inssecondary.html" >v19.2</option><option value="https://www.opendental.com/manual191/inssecondary.html" >v19.1</option><option value="https://www.opendental.com/manual184/inssecondary.html" >v18.4</option><option value="https://www.opendental.com/manual183/inssecondary.html" >v18.3</option><option value="https://www.opendental.com/manual182/inssecondary.html" >v18.2</option><option value="https://www.opendental.com/manual181/inssecondary.html" >v18.1</option><option value="https://www.opendental.com/manual174/inssecondary.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Secondary Insurance</p></div>
<div class="GeneralPageContent">
<p>The <a href="insplan.html">Insurance Plan</a> listed second in the <a href="family.html">Family Module</a> (Order = 2) is considered secondary insurance.</p>
<p><img src="images/secondaryInsOrder.png" width="624" height="126"/></p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our webinar: <a href="https://youtu.be/gzpUuywWZvU">Secondary Claims</a></p>
<h2>Adding Secondary Insurance</h2>
<p>Follow the steps in <a href="insadd.html">Add Insurance</a> to add primary and secondary plans. From the <a href="insplan.html">Edit Insurance Plan</a> window, ensure the <i>Order</i> for the secondary plan is "2" and "1" for the primary plan. If the primary plan was added first, then the secondary added next, the order is automatically set correctly.</p>
<p>If the patient has more than two insurance plans, follow the steps to add these plans and ensure the order is set correctly. If the patient has <a href="medicalins.html">Medical Insurance</a>, the second plan, not marked <i>Is Medical</i>, is considered secondary. This may not be the plan listed as <i>Order</i> 2. </p>
<h2>Coordination of Benefits</h2>
<p><a href="cob.html">Coordination of Benefits ( COB )</a> affects how Open Dental calculates secondary insurance coverage. There are several different COBs. The rules used can vary by state, region, or insurance carrier. Check with the carrier to determine which COB is to be used with a specific insurance plan.</p>
<p>Set the COB Rule for an insurance plan in the Edit Insurance Plan: Other Ins Info tab. Set the default COB rule in Preferences.</p>
<img src="images/secondaryInsCOB.png" width="475" height="349"/><h2>Creating Secondary Claims</h2>
<p class="MarginBottomZero">In the <a href="account.html">Account Module</a>, click <b>New Claim</b> and verify claim information. After clicking, <b>Save</b>, two claims are automatically created:  </p>
<ul class="MarginBottomGap">
<li>The primary claim has a status of <i>Waiting to Send</i>.</li>
<li>The secondary claim has a status of <i>Hold until Pri received</i>. This claim will stay in the patient's account with the <i>Hold</i> status until the claim is sent or the status is manually changed.</li>
</ul>
<img src="images/secondaryInsNewClaim.png" width="493" height="289"/><p>To manually create a secondary claim, highlight the procedures, click the <b>New Claim</b> dropdown and select <i>Secondary</i>. This is necessary if the secondary plan was added after creating the primary claim.</p>
<img src="images/secondaryNewClaim.png" width="150" height="123"/><p><i>Primary</i> and <i>Secondary</i> claims appear as follows in the patient account: <br/><img src="images/claimsecondary.png" width="551" height="110" class="ImageInParagraph"/></p>
<p class="MarginBottomZero">After the primary claim is received: </p>
<ol class="MarginBottomGap">
<li>If <i>Prompt for secondary claims</i>, is enabled in <a href="preferences.html">Preferences</a>, users are prompted to take action on the secondary claim after finalizing payment or upon clicking <b>Save</b> on the primary claim once it has been marked as <i>Received</i>. <br/><img src="images/claimSecondaryOptions.png" width="436" height="193" class="ImageInParagraph"/><br/></li>
 There are four options: <ul>
<li>Change the claim status to 'Waiting to send': Change the status of the secondary claim to <i>Waiting to Send</i>. </li>
<li>Send secondary claim(s) now: Electronically sends the secondary claim to the clearinghouse and changes the status to <i>Sent-Verified</i>.. </li>
<li>Print secondary claim(s) now: Prints the secondary claim and changes the to <i>Sent-Verified</i>.</li>
<li>Do Nothing: The status of the secondary claim is not changed and it is not sent electronically or printed. This option is unavailable if the preference, <i> Remove 'Do Nothing' for secondary claims with 'Hold until Pri received</i>, is enabled.</li>
</ul>
<li>If the preference, <i>Prompt for secondary claims</i>, is disabled, when finalizing payment on the primary claim, a list of outstanding secondary claims associated with the payment is shown. <br/><img src="images/claimSecondaryMsg.png" width="704" height="224" class="ImageInParagraph"/><br/> The list can be used to find open secondary claims, verify claim estimates, and send secondary claims.</li>
</ol>
<p class="MarginBottomZero"><b>Electronic Claims</b>: </p>
<ul class="MarginBottomGap">
<li>5010 Format: Primary claim payment information is sent to the clearinghouse.</li>
<li>4010 Format: Primary claim payment information is not sent to the clearinghouse.</li>
<li>Unique Formats (other than 4010 or 5010): Check with the clearinghouse to determine if primary claim payment information is sent.</li>
</ul>
<p class="MarginBottomZero">Attachment requirements depend on the clearinghouse. </p>
<ul class="MarginBottomGap">
<li>Some clearinghouses require that attachments are uploaded to the clearinghouse first.</li>
<li>Some clearinghouses only require that claim attachments are marked electronic when sent. They will then notify practices when the attachment is needed. See <a href="claimtabattach.html">Edit Claim - Attachments Tab</a>.</li>
</ul>
<h2>Procedures Marked as Do Not Bill to Insurance</h2>
<p>Procedures marked as <i>Do Not Bill to Ins</i> can be changed per insurance estimate. </p>
<p>From <a href="procedureedit.html">Edit Procedure</a>, double-click on the estimate for the insurance that should not be billed. The <a href="claimprocedure.html">Claim Procedure</a> opens. Check <i>Do Not Bill to This Insurance</i>. Estimates then show an<i> X</i> in the NoBill column of the Insurance Estimates and Payments grid.<br/><img src="images/noBillInsSecondary.png" width="675" height="70" class="ImageInParagraph"/></p>
<p>When creating the claim, highlight the procedures and click <b>New Claim</b> . A warning is shown explaining the procedure will be excluded from the insurance marked as <i>NoBill</i>. <br/><img src="images/noBillInsPopup.png" width="379" height="159" class="ImageInParagraph"/></p>
<p>If all selected procedures are marked <i>NoBill</i> for Secondary, a warning is instead shown that no claim is created. </p>
<h2>Write-Offs</h2>
<p>Write-offs should typically be entered after all claims have been received for the procedures to prevent entering write-off amounts that cause procedures to be overpaid. If only one insurance is in-network, write-offs should be entered onto that carrier's claim. If both are in-network, write-offs can be entered on either claim.</p>
<p>Write-off estimates may show zero if the primary plan has a plan type of Category Percentage, and secondary plan is PPO. To change this, enable the preference, <i>Calculate secondary insurance PPO write-offs</i>. This should only be enabled when staff understand COB rules and use PPO Percentage Plan Types for all in-network insurance plans.</p>
<h2>Estimates</h2>
<p class="MarginBottomZero">If the primary insurance pays a different amount than was originally estimated: </p>
<ul class="MarginBottomGap">
<li>If the preference <i>Auto update secondary claim estimates when primary is received</i> is enabled, secondary <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> estimates are automatically updated to consider the Ins Pay amount on the primary <a href="claimedit.html">Claim</a> when it is received. Only payments entered <i>By Procedure</i> are considered.</li>
<li>If the <i>Auto update secondary claim estimates when primary is received</i> is disabled, secondary estimates are not automatically updated. To update estimates manually, click <b>Recalculate Estimates</b> on the secondary claim </li>
</ul>
<p>If a patient has both primary and secondary insurance, both must be set up as PPO Percentage plan types for benefit estimates to be more accurate. See <a href="planppo.html">PPO Insurance Plan</a>, Option 1.</p>
<p>If the primary is not estimated to pay anything, the estimated write-off is calculated using the secondary allowed amount.</p>
</div>
</div>
</body>
</html>```
