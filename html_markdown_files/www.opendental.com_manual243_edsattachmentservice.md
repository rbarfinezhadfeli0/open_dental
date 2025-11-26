# File: ./www.opendental.com/manual243/edsattachmentservice.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EDS Attachment Service</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('edsattachmentservice','claimtabattach','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/edsattachmentservice.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/edsattachmentservice.html" >v24.2</option><option value="https://www.opendental.com/manual241/edsattachmentservice.html" >v24.1</option><option value="https://www.opendental.com/manual233/edsattachmentservice.html" >v23.3</option><option value="https://www.opendental.com/manual232/edsattachmentservice.html" >v23.2</option><option value="https://www.opendental.com/manual231/edsattachmentservice.html" >v23.1</option><option value="https://www.opendental.com/manual224/edsattachmentservice.html" >v22.4</option><option value="https://www.opendental.com/manual223/edsattachmentservice.html" >v22.3</option><option value="https://www.opendental.com/manual222/edsattachmentservice.html" >v22.2</option><option value="https://www.opendental.com/manual221/edsattachmentservice.html" >v22.1</option><option value="https://www.opendental.com/manual214/edsattachmentservice.html" >v21.4</option><option value="https://www.opendental.com/manual213/edsattachmentservice.html" >v21.3</option><option value="https://www.opendental.com/manual212/edsattachmentservice.html" >v21.2</option><option value="https://www.opendental.com/manual211/edsattachmentservice.html" >v21.1</option><option value="https://www.opendental.com/manual205/edsattachmentservice.html" >v20.5</option><option value="https://www.opendental.com/manual204/edsattachmentservice.html" >v20.4</option><option value="https://www.opendental.com/manual203/edsattachmentservice.html" >v20.3</option><option value="https://www.opendental.com/manual202/edsattachmentservice.html" >v20.2</option><option value="https://www.opendental.com/manual201/edsattachmentservice.html" >v20.1</option><option value="https://www.opendental.com/manual194/edsattachmentservice.html" >v19.4</option><option value="https://www.opendental.com/manual193/edsattachmentservice.html" >v19.3</option><option value="https://www.opendental.com/manual192/edsattachmentservice.html" >v19.2</option><option value="https://www.opendental.com/manual191/edsattachmentservice.html" >v19.1</option><option value="https://www.opendental.com/manual184/edsattachmentservice.html" >v18.4</option><option value="https://www.opendental.com/manual183/edsattachmentservice.html" >v18.3</option><option value="https://www.opendental.com/manual182/edsattachmentservice.html" >v18.2</option><option value="https://www.opendental.com/manual181/edsattachmentservice.html" >v18.1</option><option value="https://www.opendental.com/manual174/edsattachmentservice.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EDS Attachment Service</p></div>
<div class="GeneralPageContent">
<p>Attachments can be sent electronically through the Electronic Dental Services (EDS) clearinghouse.</p>
<p>In the <a href="claimtabattach.html">Edit Claim - Attachments Tab</a>, click the EDS tab.</p>
<img src="images/edsAttachmentTab.png" width="468" height="217"/><p>Enable the EDS Attachment service in the <a href="eclaimseds.html">Electronic Dental Services</a> clearinghouse prior to sending attachments.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Attachment ID</b>: An attachment ID is automatically populated when attachments are sent. EDS uses the attachment ID to associate attachments to the claim.</li>
<li><b>Add Attachment</b>: Click to add a new attachment. </li>
<li><b>Attachments Sent</b>: Lists attachments already sent.</li>
</ul>
<h2>Adding Attachments</h2>
<p>Click <b>Add Attachment</b> to open the Claim Attachments window. A warning appears to ensure all changes to the claim have been saved first. The Edit Claim window is closed. </p>
<p><div class="Note">Note:  For a new <a href="claimedit.html">Claim</a>, clicking <b>Send</b> or <b>Save</b> in the Edit Claim window validates the claim. If an attachment is required by EDS and/or the insurance carrier, the user is prompted to add the attachment.</div>
</p>
<img src="images/edsClaimAttachments.png" width="555" height="418"/><p><b>Images to Send</b>: Lists all images added to this claim attachment. Double-click a row to edit details.</p>
<p><b>Add Image</b>: Attach an existing image from the File Explorer.</p>
<p><b> Snipping Tool</b>: Opens Windows Snip &amp; Sketch or Snipping Tool to take a screenshot. The Image Info window does not automatically open when using this option. Instead, double-click the image from the list to add information.</p>
<p><b>Paste Image</b>: Paste an image currently copied to the clipboard.</p>
<p><div class="Note">Note: <ul>
<li>PDF files are not supported by the EDS Attachment Service.</li>
<li>If no <a href="definitionsimagecat.html">Image Category</a> is selected for Attachments, users are warned, and first image category listed is used.</li>
<li>Users can add as many attachments as needed. If the service times out, attachments are be sent one at a time until all have been sent. </li>
</ul>
</div>
</p>
<p><b>Narrative</b>: When needed, enter a narrative. Allows up to 2,000 characters. If adding a narrative, an attachment with an image type of <i>Narrative</i> is required.</p>
<p><b>Claim Validation Status</b>: Lists any errors or validation notes received from EDS for the claim or attachments.</p>
<p>Click <b>Save</b> to add the attachment information to the claim</p>
<h2>Image Info</h2>
<p>As each image is added, the Image Info window opens.</p>
<img src="images/edsImageInfo.png" width="586" height="365"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>File Name</b>: Give the image a file name.</li>
<li><b>Date Created</b>: This field auto-populates with today's date. Change the date if needed.</li>
<li><b>Image Type</b>: Select an image type from the list.</li>
<li><b>Is xray mirror image</b>: Determines the image orientation. <ul>
<li>Checked: The left side of the image corresponds with the patient's left side. </li>
<li>Unchecked: The left side of the image corresponds with the patient's right side. </li>
</ul>
</li>
</ul>
<p><b>Save (and Snip Another)</b>: Only appears if <b>Snipping Tool</b> was selected in the Claim Attachments window. Add the current image information to <i>Images to Send</i> and re-open the snipping tool to snip an additional image. </p>
<p>A preview of the image is displayed on the right. Click <b>Save</b> to add the attachment and return to the Claim Attachments window.</p>
<p><div class="Note">Note: After completing a snip (screenshot), any modal windows (e.g., graphical perio chart) open in Open Dental are automatically closed before the Image Info window opens.</div>
</p>
<p>Once attachments have been sent, return to the Edit Claim window and send the claim. If <i>Save Attachments to Imaging Module</i> is checked in the <a href="eclaimseds.html">Electronic Dental Services</a> clearinghouse, any attached images or documents are automatically saved to the patient's <a href="images.html">Imaging Module</a>. Text entered into the <i>Narrative</i> box is not saved to the Imaging Module.</p>
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
</div>
</div>
</body>
</html>```
