# File: ./www.opendental.com/manual232/dentalxchangeattachmentservice.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - DentalXChange Attachment</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dentalxchangeattachmentservice','claimtabattach','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/dentalxchangeattachmentservice.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/dentalxchangeattachmentservice.html" >v24.2</option><option value="https://www.opendental.com/manual241/dentalxchangeattachmentservice.html" >v24.1</option><option value="https://www.opendental.com/manual233/dentalxchangeattachmentservice.html" >v23.3</option><option value="https://www.opendental.com/manual232/dentalxchangeattachmentservice.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/dentalxchangeattachmentservice.html" >v23.1</option><option value="https://www.opendental.com/manual224/dentalxchangeattachmentservice.html" >v22.4</option><option value="https://www.opendental.com/manual223/dentalxchangeattachmentservice.html" >v22.3</option><option value="https://www.opendental.com/manual222/dentalxchangeattachmentservice.html" >v22.2</option><option value="https://www.opendental.com/manual221/dentalxchangeattachmentservice.html" >v22.1</option><option value="https://www.opendental.com/manual214/dentalxchangeattachmentservice.html" >v21.4</option><option value="https://www.opendental.com/manual213/dentalxchangeattachmentservice.html" >v21.3</option><option value="https://www.opendental.com/manual212/dentalxchangeattachmentservice.html" >v21.2</option><option value="https://www.opendental.com/manual211/dentalxchangeattachmentservice.html" >v21.1</option><option value="https://www.opendental.com/manual205/dentalxchangeattachmentservice.html" >v20.5</option><option value="https://www.opendental.com/manual204/dentalxchangeattachmentservice.html" >v20.4</option><option value="https://www.opendental.com/manual203/dentalxchangeattachmentservice.html" >v20.3</option><option value="https://www.opendental.com/manual202/dentalxchangeattachmentservice.html" >v20.2</option><option value="https://www.opendental.com/manual201/dentalxchangeattachmentservice.html" >v20.1</option><option value="https://www.opendental.com/manual194/dentalxchangeattachmentservice.html" >v19.4</option><option value="https://www.opendental.com/manual193/dentalxchangeattachmentservice.html" >v19.3</option><option value="https://www.opendental.com/manual192/dentalxchangeattachmentservice.html" >v19.2</option><option value="https://www.opendental.com/manual191/dentalxchangeattachmentservice.html" >v19.1</option><option value="https://www.opendental.com/manual184/dentalxchangeattachmentservice.html" >v18.4</option><option value="https://www.opendental.com/manual183/dentalxchangeattachmentservice.html" >v18.3</option><option value="https://www.opendental.com/manual182/dentalxchangeattachmentservice.html" >v18.2</option><option value="https://www.opendental.com/manual181/dentalxchangeattachmentservice.html" >v18.1</option><option value="https://www.opendental.com/manual174/dentalxchangeattachmentservice.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>DentalXChange Attachment</p></div>
<div class="GeneralPageContent">
<p>Attachments can be sent electronically through the DentalXChange (ClaimConnect) clearinghouse.</p>
<p>In the <a href="claimtabattach.html">Edit Claim - Attachments Tab</a>, click the DXC tab.</p>
<img src="images/dentalXchangeAttachmentTab.png" width="467" height="255"/><p>Enable the DentalXChange Attachment service in <a href="eclaimsclaimconnect.html">ClaimConnect E-Claims</a> prior to sending attachments.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Attachment ID</b>: An attachment ID will automatically populate when attachments are sent. DentalXChange will use the attachment ID to associate attachments to the claim.</li>
<li><b>Add Attachment</b>: Click to add a new attachment. </li>
<li><b>Attachments Sent</b>: Lists attachments already sent.</li>
</ul>
<h2>Adding Attachments</h2>
<p>Click <b>Add Attachment</b> to open the Claim Attachments window. A warning will appear to ensure all changes to the claim have been saved first. The Edit Claim window will be closed. </p>
<p><div class="Note">Note:  For a new <a href="claimedit.html">Claim</a>, clicking <b>Send</b> or <b>OK</b> in the Edit Claim window will validate the claim. If an attachment is required by DentalXChange and/or the insurance carrier, the user is prompted to add the attachment.</div>
</p>
<img src="images/dentalXchangeClaimAttachments.png" width="616" height="430"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Add Image</b>: Attach and existing image from the File Explorer.</li>
<li><b> Snipping Tool</b>: Opens Windows Snip &amp; Sketch or Snipping Tool to take a screenshot. The Image Info window will not automatically open when using the Snipping Tool. Instead, double-click the image from the list to add information.</li>
<li><b>Paste Image</b>: Paste an image currently copied to the clipboard.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>PDF files are not supported by the DentalXChange Attachment Service.</li>
<li>If no <a href="definitionsimagecat.html">Image Category</a> is selected for Attachments, a warning will appear stating the first image category listed will be used.</li>
<li>Users can add as many attachments as needed. If the service times out, attachments will be sent one at a time until all have been sent. </li>
</ul>
</div>
</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Narrative</b>: Enter a narrative (optional). Allows up to 2,000 characters.</li>
<li><b>Claim Validation Status</b>: Lists any errors or validation notes received from DentalXChange for the claim or attachments.</li>
</ul>
<p>As each image is added, the following window will appear:<br/><img src="images/dentalXchangeImageInfo.png" width="594" height="369" class="ImageInParagraph"/></p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>File Name</b>: Give the image a file name.</li>
<li><b>Date Created</b>: This field will auto-populate with today's date. Change the date if needed.</li>
<li><b>Image Type</b>: Select from: <ul>
<li>Referral Form</li>
<li>Diagnostic Report</li>
<li>Explanation of Benefits</li>
<li>Other Attachments</li>
<li>Periodontal Chart</li>
<li>X-Rays</li>
<li>Dental Models</li>
<li>Radiology Reports</li>
<li>Intra-Oral Photographs</li>
<li>Narrative</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero"><b>Is xray mirror image</b>: Determines the image orientation. </p>
<ul class="MarginBottomGap">
<li>Checked: The left side of the image corresponds with the patient's left side. </li>
<li>Unchecked: The left side of the image corresponds with the patient's right side. </li>
</ul>
<p>A preview of the image will display on the right.</p>
<p><b>OK (and Snip Another)</b>: Click to save image information and re-open the snipping tool to snip an additional image. This option will only appear if <b>Snipping Tool</b> was selected in the previous window. </p>
<p><b>OK</b>: Click to save image information and return to the Claim Attachments window. </p>
<p><b>Cancel</b>: Click to return to the Claim Attachments window without saving the current image.</p>
<p><div class="Note">Note: After completing a snip (screenshot), any modal windows (e.g., graphical perio chart) open in Open Dental will automatically be closed before the Image Info window opens.</div>
</p>
<p>Once attachments have been sent, return to the Edit Claim window and send the claim. If <i>Save DXC Attachments to Images Module</i> is checked in <a href="eclaimsclaimconnect.html">ClaimConnect Clearinghouse Setup</a>, any attached images or documents are automatically saved to the patient's <a href="images.html">Imaging Module</a>. Text entered into the <i>Narrative</i> box is not saved to the Imaging Module.</p>
<h2>Resending a Claim</h2>
<p>If a claim must be resent due to a missing attachment, do the following: </p>
<p class="MarginBottomZero"><b>If insurance provided a reference ID number:</b></p>
<ol class="MarginBottomGap">
<li>Add the attachment to the original claim.</li>
<li>In the Misc Tab of the claim, add the Original Reference Number. </li>
<li>Change the Correction Type to <i>Replacement.</i></li>
<li>Resend the claim using the <i>Resend</i> button</li>
<li>Select <i>The claim was accepted and I need to replace it with updated information</i> when prompted.</li>
</ol>
<p class="MarginBottomZero"><b>If insurance did not provide a reference ID number.</b></p>
<ol class="MarginBottomGap">
<li>Add the attachment to the original claim.</li>
<li>Resend the claim using the <i>Resend</i> button. </li>
<li>Select <i>The claim has not been accepted yet and I need to resend it</i> when prompted.</li>
</ol>
<h2>Troubleshooting</h2>
<p><b>I get the following message when I click the Snipping Tool button<br/><img src="images/dxcAttachError.png" width="412" height="170" class="ImageInParagraph"/></b></p>
<p>Windows Snip &amp; Sketch tool could not be launched on the workstation. Instead, copy the image and use the Paste Image button. Alternatively, save the image to a folder and import it using the Add Image button. </p>
</div>
</div>
</body>
</html>```
