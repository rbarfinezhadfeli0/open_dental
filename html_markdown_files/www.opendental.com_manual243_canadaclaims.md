# File: ./www.opendental.com/manual243/canadaclaims.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Canada Claims</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('canadaclaims','canada','countries','technical','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/canadaclaims.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/canadaclaims.html" >v24.2</option><option value="https://www.opendental.com/manual241/canadaclaims.html" >v24.1</option><option value="https://www.opendental.com/manual233/canadaclaims.html" >v23.3</option><option value="https://www.opendental.com/manual232/canadaclaims.html" >v23.2</option><option value="https://www.opendental.com/manual231/canadaclaims.html" >v23.1</option><option value="https://www.opendental.com/manual224/canadaclaims.html" >v22.4</option><option value="https://www.opendental.com/manual223/canadaclaims.html" >v22.3</option><option value="https://www.opendental.com/manual222/canadaclaims.html" >v22.2</option><option value="https://www.opendental.com/manual221/canadaclaims.html" >v22.1</option><option value="https://www.opendental.com/manual214/canadaclaims.html" >v21.4</option><option value="https://www.opendental.com/manual213/canadaclaims.html" >v21.3</option><option value="https://www.opendental.com/manual212/canadaclaims.html" >v21.2</option><option value="https://www.opendental.com/manual211/canadaclaims.html" >v21.1</option><option value="https://www.opendental.com/manual205/canadaclaims.html" >v20.5</option><option value="https://www.opendental.com/manual204/canadaclaims.html" >v20.4</option><option value="https://www.opendental.com/manual203/canadaclaims.html" >v20.3</option><option value="https://www.opendental.com/manual202/canadaclaims.html" >v20.2</option><option value="https://www.opendental.com/manual201/canadaclaims.html" >v20.1</option><option value="https://www.opendental.com/manual194/canadaclaims.html" >v19.4</option><option value="https://www.opendental.com/manual193/canadaclaims.html" >v19.3</option><option value="https://www.opendental.com/manual192/canadaclaims.html" >v19.2</option><option value="https://www.opendental.com/manual191/canadaclaims.html" >v19.1</option><option value="https://www.opendental.com/manual184/canadaclaims.html" >v18.4</option><option value="https://www.opendental.com/manual183/canadaclaims.html" >v18.3</option><option value="https://www.opendental.com/manual182/canadaclaims.html" >v18.2</option><option value="https://www.opendental.com/manual181/canadaclaims.html" >v18.1</option><option value="https://www.opendental.com/manual174/canadaclaims.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Canada Claims</p></div>
<div class="GeneralPageContent">
<p>For <a href="canada.html">Canada</a> users, in the <a href="account.html">Account Module</a>, click <b>New Claim</b>, or double-click an existing claim to edit.</p>
<img src="images/canadaClaim.png" width="915" height="685"/><p>To send electronic claims, setup the <a href="itrans20.html">ITRANS 2.0</a> or <a href="claimstream.html">Claimstream</a> (TELUS) clearinghouse first.</p>
<h2>Edit Claim Window</h2>
<p>Buttons and fields in this window match what is found in the Edit <a href="claimedit.html">Claim</a> window for the U.S. version. Differences are noted below.</p>
<p><b>Procedures</b>: Displays procedures attached to the claim. Up to seven procedures can be included on a claim, per CDA limitations. If sending more than seven procedures, create multiple claims.</p>
<p><b>Send</b>: Send the claim. This button is grayed out if the claim was sent and the carrier returned a transaction reference number. </p>
<p><b>Resend</b>: Click to resend the claim. Can be used even when the Send button is grayed out as noted above. When prompted to select a reason for resending the claim, select either option as the choices do not affect claims in Canada. </p>
<p><b>History</b>: Click to view the history of the last action taken on the claim. See <a href="canadaetransedit.html">Canada Etrans Edit</a> for details on claim responses. </p>
<h2>Canadian Tab</h2>
<p>The Canadian tab contains specific Canadian information.</p>
<p class="MarginBottomZero"><b>Referring Provider</b></p>
<ul class="MarginBottomGap">
<li>CDA Number or Identifier: Canadian Dental Association identifier of the referring provider.</li>
<li>Reason: Required when sending the referring provider. The reason why the referring doctor chose to refer the work related to this claim.</li>
</ul>
<p><b>Accident Date</b>: Used to indicate that dental treatment was needed as the result of an accident. If a value is entered, the <i>Is Accident</i> field on the printed claim is automatically marked.</p>
<p><b>Trans Ref Num</b>: When a claim is sent electronically, this box is automatically filled with a unique transaction reference number composed of letters and numbers. </p>
<p class="MarginBottomZero"><b>Reverse</b>: Click to reverse or unsend a claim. Claims can only be reversed on the same day, by carriers that support claim reversal, and when a Transaction Reference Number is generated.  </p>
<ul class="MarginBottomGap">
<li>After reversing a claim, manually update the claim status back to<i> Unsent</i>. If needed, successfully reversed claims can be deleted and recreated.</li>
<li>If a claim needs to be reversed on a date later than the date it was originally adjudicated, the carrier does not support claim reversals, or a transaction reference number was not generated, the claim must be reversed manually by contacting the carrier.</li>
</ul>
<p><b>Materials Forwarded (E-mail, Correspondence, Models, X-rays, Images)</b>: Indicate the types of supporting documents which have been physically mailed to the insurance carrier. These boxes can be checked/unchecked independently.</p>
<p><b>Treatment Required for Ortho</b>: Only used for <a href="orthodontic.html">Ortho</a> claims. If checked, the ortho flag is sent.</p>
<p class="MarginBottomZero"><b>Ortho Treatment (Predetermination Only)</b>: Only for predetermination claims, not regular claims. These fields are only sent electronically; they are not displayed on printed claim forms. </p>
<ul class="MarginBottomGap">
<li>Estimated Treatment Start Date: The treatment plan date for the first appointment regarding this orthodontic treatment.</li>
<li>Initial Payment: The amount the patient will pay out of pocket at the first appointment.</li>
<li>Expected Payment Cycle (Months): Frequency of payments related to the orthodontic treatment. Accepted numbers are 1-4.  <ul>
<li>1 - Once a month.</li>
<li>2 - Every two months.</li>
<li>3 - Every three months.</li>
<li>4 - Every four months.</li>
</ul>
</li>
<li>Treatment Duration (Months): The number of months it will take to entirely finish the orthodontic treatment.</li>
<li>Number of Payments Anticipated: Number of total expected patient payments for the orthodontic treatment.</li>
<li>Anticipated Pay Amount: The expected periodic payment amount.</li>
</ul>
<p class="MarginBottomZero"><b>Maxillary Prosthesis</b>: All information entered here is sent on electronic claims when needed. Only the Initial placement upper is sent on printed claims. </p>
<ul class="MarginBottomGap">
<li>Initial placement upper: For the upper arch only. Indicate whether the prosthetic work associated with this claim is or is not the first prosthetic, or if there is no prosthetic.</li>
<li>Initial Date: If initial placement upper is set to No, then this date is required and is the date that the prosthetic was first added to the patient's mouth.</li>
<li>Prosthesis Material: Describe the prosthetic material used for the initial placement. Required when initial placement upper is set to No.</li>
</ul>
<p class="MarginBottomZero"><b>Mandibular Prosthesis</b>: All information entered here is sent on electronic claims when needed. Only the Initial placement lower is sent on printed claims. </p>
<ul class="MarginBottomGap">
<li>Initial placement lower: For the lower arch only. Indicate whether the prosthetic work associated with this claim is or is not the first prosthetic, or if there is no prosthetic.</li>
<li>Initial Date: If initial placement lower is set to No, then this date is required and is the date that the prosthetic was first added to the patient's mouth.</li>
<li>Prosthesis Material: Describes the prosthetic material used for the initial placement. Required when initial placement lower is set to No.</li>
</ul>
<p><b>Extracted Teeth</b>: This box is empty until something other than <i>Not a...</i> is selected in the Maxillary or Mandibular Prosthesis dropdowns. When an option is selected, any extracted teeth with a status of Complete, Existing Other, or Existing Current and a valid procedure date list. This information is sent on all electronic claims, regardless of the Maxillary or Mandibular selections. </p>
<p><b>Missing Teeth</b>: List of the patient's missing teeth. For display only. Change the missing status of teeth from the Chart Module, <a href="missingteeth.html">Missing/Primary Teeth</a> tab.</p>
<h2>Substitutions</h2>
<p>If a carrier substitutes a code, the substitution code is added as a new row in the Edit Claim window and displayed at the end of the procedure list on the response printout. Substitute codes always list lab amounts (usually $0.00). This allows the user to view all details regarding the submitted code as well as the substituted code.</p>
<h2>Preauthorizations</h2>
<p>Primary electronic preauthorizations are available for carriers that accept them. On the CDA claim form, <i>Predetermination only.</i> displays in the Remarks field.</p>
<p>Open Dental does not support the electronic sending of secondary preauthorizations (COB predeterminations).</p>
<p>If a patient has dual insurances from the same carrier (i.e., blue-on-blue), the carrier may coordinate secondary coverage estimates automatically and send two responses to Open Dental. These display one after the other.</p>
<h2>Electronic Attachments</h2>
<p>Some carriers accept electronic attachments. See <a href="canadaattachments.html">Canada Attachments</a> for details.</p>
<p>To add a note to a claim, use the Remarks field in the <a href="claimtabgeneral.html">Edit Claim - General Tab</a> for printed claims, or add a text file as an attachment for electronic claims.</p>
<h2>Secondary Claims</h2>
<p class="MarginBottomZero">If a patient has primary and secondary insurance: </p>
<ul class="MarginBottomGap">
<li>It is best practice to first create the primary claim and send it or print it before worrying about the secondary.</li>
<li>Secondary claims are sent electronically and automatically if the primary claim was sent electronically and an EOB response was received, and the secondary carrier accepts secondary (COB) claims. <ul>
<li>If the primary insurance pays in full, a secondary claim is not sent.</li>
<li>If the secondary claim is created before the primary claim is sent, the secondary claim must be sent or printed manually.</li>
<li>In other cases, secondary claims may need to be manually created and sent by physical mail. </li>
<li>To manually create a secondary claim, in the Account Module, select procedures, click the New Claim dropdown, and select Secondary.</li>
</ul>
</li>
<li>The secondary claim response displays after the primary claim's EOB has been closed.</li>
</ul>
<h2>Students</h2>
<p>If insurance is requiring the student school and status, enter information in the <a href="patientedit.html">Edit Patient Information</a> window under Name of School and Eligibility Excep. Code.</p>
<h2>Electronic Claims and Sunlife</h2>
<p>When sending electronic claims, both the treating dentist and billing dentist are submitted. If sending to Sunlife, the treating dentist receives the payment instead of the billing dentist. This is a decision made by Sunlife.</p>
</div>
</div>
</body>
</html>```
