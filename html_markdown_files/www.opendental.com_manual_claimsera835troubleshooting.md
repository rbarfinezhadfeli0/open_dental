# File: ./www.opendental.com/manual/claimsera835troubleshooting.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - ERA Troubleshooting</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('claimsera835troubleshooting','claimsera835','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/claimsera835troubleshooting.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/claimsera835troubleshooting.html" >v24.2</option><option value="https://www.opendental.com/manual241/claimsera835troubleshooting.html" >v24.1</option><option value="https://www.opendental.com/manual233/claimsera835troubleshooting.html" >v23.3</option><option value="https://www.opendental.com/manual232/claimsera835troubleshooting.html" >v23.2</option><option value="https://www.opendental.com/manual231/claimsera835troubleshooting.html" >v23.1</option><option value="https://www.opendental.com/manual224/claimsera835troubleshooting.html" >v22.4</option><option value="https://www.opendental.com/manual223/claimsera835troubleshooting.html" >v22.3</option><option value="https://www.opendental.com/manual222/claimsera835troubleshooting.html" >v22.2</option><option value="https://www.opendental.com/manual221/claimsera835troubleshooting.html" >v22.1</option><option value="https://www.opendental.com/manual214/claimsera835troubleshooting.html" >v21.4</option><option value="https://www.opendental.com/manual213/claimsera835troubleshooting.html" >v21.3</option><option value="https://www.opendental.com/manual212/claimsera835troubleshooting.html" >v21.2</option><option value="https://www.opendental.com/manual211/claimsera835troubleshooting.html" >v21.1</option><option value="https://www.opendental.com/manual205/claimsera835troubleshooting.html" >v20.5</option><option value="https://www.opendental.com/manual204/claimsera835troubleshooting.html" >v20.4</option><option value="https://www.opendental.com/manual203/claimsera835troubleshooting.html" >v20.3</option><option value="https://www.opendental.com/manual202/claimsera835troubleshooting.html" >v20.2</option><option value="https://www.opendental.com/manual201/claimsera835troubleshooting.html" >v20.1</option><option value="https://www.opendental.com/manual194/claimsera835troubleshooting.html" >v19.4</option><option value="https://www.opendental.com/manual193/claimsera835troubleshooting.html" >v19.3</option><option value="https://www.opendental.com/manual192/claimsera835troubleshooting.html" >v19.2</option><option value="https://www.opendental.com/manual191/claimsera835troubleshooting.html" >v19.1</option><option value="https://www.opendental.com/manual184/claimsera835troubleshooting.html" >v18.4</option><option value="https://www.opendental.com/manual183/claimsera835troubleshooting.html" >v18.3</option><option value="https://www.opendental.com/manual182/claimsera835troubleshooting.html" >v18.2</option><option value="https://www.opendental.com/manual181/claimsera835troubleshooting.html" >v18.1</option><option value="https://www.opendental.com/manual174/claimsera835troubleshooting.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>ERA Troubleshooting</p></div>
<div class="GeneralPageContent">
<p>The information provided below is for troubleshooting <a href="claimsERA835.html">ERAs</a>.</p>
<div class="Note">Note: The first step in any troubleshooting is to <a href="update.html">Update</a> to the latest stable version of Open Dental. For information on initial setup, see <a href="era835workflow.html">ERA Workflow</a>.</div>
<br/><br/><p><b> After receiving a claim, the X is not showing in the Recd column, or the claim cannot be processed in the ERA window. </b></p>
<p>Highlight the problematic claim and click the <i>Detach</i> button, then process the ERA outside of the ERA window as a bulk check (see ERA Workflow, Detaching a Claim for full steps). </p>
<p><b>After entering payments, patient accounts show a credit.</b></p>
<p>The plan type is not set to a PPO Plan Type. An in-network insurance plan must be set to PPO Percentage or PPO Fixed Benefit for write-offs to calculate correctly. See <a href="planppo.html">PPO Insurance Plan</a> or <a href="planppofixed.html">PPO Fixed Benefit Insurance Plan</a>. If using an out-of-network plan (category percentage) you may need to manually zero out write-offs on procedures.</p>
<p><b>How do I manually download reports?</b></p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Contact your clearinghouse to obtain ERA files. The files must be in the specified 835 format to work.<br/></li>
<li>Verify the <i>Report Path</i> set in your <a href="clearinghouses.html">Clearinghouses</a>.</li>
<li>Copy and paste reports to the designated <i>Report Path</i> or download reports directly into path.</li>
<li>In Open Dental, go to the Manage Module, <a href="claimsend.html">Send Claims</a>. This will automatically retrieve the downloaded reports.</li>
</ol>
<p><b>When processing an ERA, write-offs for supplemental payments are not posting.</b></p>
<p>If write-offs were not posted to the initial claim payment and need to be posted to the supplemental, this must be done manually. When manually processing an ERA enter the write-off amount in the Verify and Enter Payment window. If the ERA was auto-processed, return to the <a href="claimedit.html">Claim</a> to enter the write-off.</p>
<p><b>I have a duplicate ERA.</b></p>
<p>Delete the duplicate ERA: Double-click the duplicate and click <b>Delete</b>. <div class="Note">Note: This can happen when the clearinghouse does not change the download flag for the ERA. It is usually easier to delete the duplicates, but you can contact your clearinghouse if it becomes problematic. </div>
</p>
<p><b>When clicking Send Claims, I receive error: "Error retrieving. Era request unsuccessful. Error message received directly from ClaimConnect: 150. Service Not Contracted."</b></p>
<p>This means you are not signed up for the ERA download service with <a href="eclaimsclaimconnect.html">DentalXChange ClaimConnect </a>. Contact DentalXChange ClaimConnect to sign up.</p>
<p>DentalXChange ClaimConnect Note: Once ERAs are downloaded they are marked processed on the DentalXChange ClaimConnect website. To mark an ERA as unprocessed (e.g., if there is an error), do so on the DentalXChange ClaimConnect website.</p>
<p><b>Insurance sent back different code than what was billed (e.g., FMX instead of Pano/BW).</b></p>
<p>Open Dental will post payment as total. You can leave this as-is, or split payment between completed procedures. See <a href="eraprocess.html">Process ERA</a> for additional information.</p>
<p>Logic: Sometimes EOBs do not itemize payments by procedure. In these cases, paid amounts are assigned to the Total Payment amount. If procedure payments are known (itemized), then those payments will be subtracted from the Total Payment amount, and amounts are indicated in each procedure row. When all procedures are itemized, and there are no claim adjustments, there will be no Total Payment entry because it is unnecessary.</p>
<p><b>Why won't some of my ERAs download? </b></p>
<p class="MarginBottomZero">Common reasons certain ERAs won't download:  </p>
<ul class="MarginBottomGap">
<li>The ERA or ERA List was viewed on the clearinghouse's website prior to it being downloaded in Open Dental. Viewing the ERA on the clearinghouse's website will flag the ERA as processed and not available for download.</li>
<li>The ERA was not downloaded into Open Dental with in the clearinghouse time limit. This is typically 7 days. If you need Open Dental to be able to download ERAs from a specific date range, contact your clearinghouse and request they make that date range available for download again. If you are set up for automatic downloads of ERAs, check your <a href="clearinghouses.html">Clearinghouse Settings</a> to make sure it is working.</li>
</ul>
<p><b>I need to get ERAs for a carrier that is not contracted with a clearinghouse that provides ERAs in the standard 835 format to be used by my Open Dental program. What can I do? </b></p>
<p> If the payer can provide you with the ERA file (835) it can be manually downloaded into the clearinghouse report path, then processed as usual. If not, you must use paper or other way of getting the EOB. Currently only the clearinghouses listed on the ERA Workflow page are able to provide ERA 835s to you. Keep in mind that most processors are not willing to do 835s only, they also want you to file all of your claims with them to provide this service.</p>
<p><b>Primary and Secondary payment from the same insurance is included on the same ERA and is attaching only to the primary claim (Known issue with GEHA and CIGNA flex spending).</b></p>
<p>If a carrier responds with a primary and secondary payment with the same claimID after a primary claim is sent, the workaround in Open Dental is to manually detach the secondary payment from the primary claim and attach it to the correct secondary claim before finalizing the ERA.</p>
<p><b>Alert: A matching claim was found, but the patient name the carrier sent does not match the patient on the claim. </b></p>
<p>This warning lets the user know a matching claim has been found, but the patient name does not match. If the claim match is correct, the user can proceed with processing the ERA.</p>
<p><b>Failed to process the following files due to permission issues or malformed data.</b></p>
<p><a href="update.html">Update</a> to the latest stable version of Open Dental. </p>
<p><b>The <a href="claimsERA835.html">ERAs</a> summary does not match the same patient name or patient count as the <a href="era.html">ERA</a> breakdown. </b></p>
 Run the <a href="databasemaintenance.html">Database Maintenance</a> method <i>Etrans835MultipleForEtrans</i>. <p><p><b>Failed to move the following files to archive folder due to permission issues or duplicate file names.</b></p>
</p>
<p>You may have duplicate ERAs already in your Reports folder. Move any duplicates to the Archived folder.</p>
</div>
</div>
</body>
</html>```
