# File: ./www.opendental.com/manual/dentalxchangeattachmentservice.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - DentalXChange Attachment</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dentalxchangeattachmentservice','claimedit','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/dentalxchangeattachmentservice.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/dentalxchangeattachmentservice.html" >v24.2</option><option value="https://www.opendental.com/manual241/dentalxchangeattachmentservice.html" >v24.1</option><option value="https://www.opendental.com/manual233/dentalxchangeattachmentservice.html" >v23.3</option><option value="https://www.opendental.com/manual232/dentalxchangeattachmentservice.html" >v23.2</option><option value="https://www.opendental.com/manual231/dentalxchangeattachmentservice.html" >v23.1</option><option value="https://www.opendental.com/manual224/dentalxchangeattachmentservice.html" >v22.4</option><option value="https://www.opendental.com/manual223/dentalxchangeattachmentservice.html" >v22.3</option><option value="https://www.opendental.com/manual222/dentalxchangeattachmentservice.html" >v22.2</option><option value="https://www.opendental.com/manual221/dentalxchangeattachmentservice.html" >v22.1</option><option value="https://www.opendental.com/manual214/dentalxchangeattachmentservice.html" >v21.4</option><option value="https://www.opendental.com/manual213/dentalxchangeattachmentservice.html" >v21.3</option><option value="https://www.opendental.com/manual212/dentalxchangeattachmentservice.html" >v21.2</option><option value="https://www.opendental.com/manual211/dentalxchangeattachmentservice.html" >v21.1</option><option value="https://www.opendental.com/manual205/dentalxchangeattachmentservice.html" >v20.5</option><option value="https://www.opendental.com/manual204/dentalxchangeattachmentservice.html" >v20.4</option><option value="https://www.opendental.com/manual203/dentalxchangeattachmentservice.html" >v20.3</option><option value="https://www.opendental.com/manual202/dentalxchangeattachmentservice.html" >v20.2</option><option value="https://www.opendental.com/manual201/dentalxchangeattachmentservice.html" >v20.1</option><option value="https://www.opendental.com/manual194/dentalxchangeattachmentservice.html" >v19.4</option><option value="https://www.opendental.com/manual193/dentalxchangeattachmentservice.html" >v19.3</option><option value="https://www.opendental.com/manual192/dentalxchangeattachmentservice.html" >v19.2</option><option value="https://www.opendental.com/manual191/dentalxchangeattachmentservice.html" >v19.1</option><option value="https://www.opendental.com/manual184/dentalxchangeattachmentservice.html" >v18.4</option><option value="https://www.opendental.com/manual183/dentalxchangeattachmentservice.html" >v18.3</option><option value="https://www.opendental.com/manual182/dentalxchangeattachmentservice.html" >v18.2</option><option value="https://www.opendental.com/manual181/dentalxchangeattachmentservice.html" >v18.1</option><option value="https://www.opendental.com/manual174/dentalxchangeattachmentservice.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>DentalXChange Attachment</p></div>
<div class="GeneralPageContent">
<p>Attachments can be sent electronically through the DentalXChange (ClaimConnect) clearinghouse.</p>
<p>In the <a href="account.html">Account Module</a>, right-click a claim, and select a DentalXChange attachment option. </p>
<img src="images/accountDXCAttachmentOptions.png" width="803" height="401"/><p>Alternatively, in the <a href="treatmentplan.html">Treatment Plan Module</a>, right-click a Preauthorization. </p>
<p class="MarginBottomZero">Additional Information: </p>
<ul class="MarginBottomGap">
<li>Options are only available when <a href="eclaimsclaimconnect.html">DentalXChange ClaimConnect</a> is set as the default dental clearinghouse and <i>Allow sending attachments</i> is enabled for the clearinghouse.</li>
<li>For a new <a href="claimedit.html">Claim</a>, clicking <b>Send</b> or <b>Save</b> in the Edit Claim window validates the claim. If an attachment is required by DentalXChange ClaimConnect and/or the insurance carrier, there is a prompt to add an attachment.</li>
<li>If sending a narrative, text entered in the <i>Narrative</i> box can only be sent with another attachment (i.e., image). To send a narrative only, attach it as an image (i.e., screenshot) instead.</li>
<li>If <i>Save Attachments to Imaging Module</i> is enabled in <a href="eclaimsclaimconnect.html">DentalXChange ClaimConnect E-Claims</a> clearinghouse setup, a copy of the image is saved to the Imaging Module when using <b>Snip Attachment for DentalXChange</b> or <b>Paste Attachment(s) for DentalXChange</b>.</li>
<li>Attachments must be attached and sent prior to sending the claim or preauthorization. The attachment ID is what links the attachment to the claim to allow the two to be sent together.</li>
</ul>
<p>The window that opens is dependent on the option selected from the right-click menu. Claims needing attachments must have the attachment created prior to sending the claim. </p>
<h2>Select Attachment</h2>
<p>Choose <i>Select Attachment for DentalXChange</i> to open Select Image to add attachments from the <a href="images.html">Imaging Module</a>.</p>
<img src="images/dentalXChangeAttachSelect.png" width="894" height="614"/><p class="MarginBottomZero">Highlight an image from an Image Category to attach. Only image files (e.g., PNG, JPEG, TIFF, etc.) can be attached. If an invalid file type is selected, there is a warning. Enter attachment details: </p>
<ul class="MarginBottomGap">
<li><b>File Name</b>: Defaults to the description for the file in <a href="imageinfo.html">Image Info</a>. If there is no description, the File Name defaults to <i>Attachment</i>. Edit as needed.</li>
<li><b>Image Type</b>: Highlight a type to indicate what the attachment is.</li>
<li><b>Date Created</b>: Date of the attached image. Defaults to the current date. </li>
</ul>
<p><b>Narrative</b>: Enter a claim narrative as needed. Allows up to 2,000 characters. If there is an existing narrative entered, it can be edited here.</p>
<p><b>Claim Validation Status</b>: Lists any errors or validation notes received from DentalXChange for the claim or attachments.</p>
<p>Click <b>Send and Select Another</b> to send the attachment to DentalXChange and keep Select Image open to choose an additional attachment.</p>
<p>Click <b>Send</b> to send the attachment to DentalXChange and close Select Image.</p>
<h2>Snip Attachment</h2>
<p>Choose <i>Snip Attachment for DentalXChange</i> to launch the Snipping Tool and Image Info to create a screenshot to attach. </p>
<img src="images/dentalXchangeAttachmentSnip.png" width="591" height="506"/><p class="MarginBottomZero">After the screenshot is taken, a preview of the screenshot is displayed in the Image Info window. Enter attachment details: </p>
<ul class="MarginBottomGap">
<li><b>File Name</b>: Enter a description for the attachment. If <i>Save Attachments to Imaging Module</i> is enabled in DentalXChange ClaimConnect clearinghouse setup, this is added as the <i>Description</i> in Image Info.</li>
<li><b>Date Created</b>: Date of the attached image. Defaults to the current date.</li>
<li><b>Image Type</b>: Highlight a type to indicate what the attachment is.</li>
</ul>
<p><b>Narrative</b>: Enter a claim narrative as needed. Allows up to 2,000 characters. If there is an existing narrative entered, it can be edited here. Clipboard contents (e.g., copied text) are cleared when opening the Image Info window.</p>
<p>Click <b>Send and Snip Another</b> to send the attachment to DentalXChange and relaunch the Snipping Tool and Image Info windows to create an additional attachment.</p>
<p>Click <b>Send</b> to send the attachment to DentalXChange and close Image Info.</p>
<h2>Paste Attachment</h2>
<p>Choose <i>Paste Attachment(s) for DentalXChange</i> to paste an item from the Clipboard and open Paste Attachment.</p>
<img src="images/dentalXchangeAttachmentPaste.png" width="879" height="433"/><p class="MarginBottomZero">The grid lists all attachments pasted since the window opened.  </p>
<ul class="MarginBottomGap">
<li>Double-click an image name to edit details.</li>
<img src="images/dentalXchangeAttachmentEditItem.png" width="296" height="332"/><ul>
<li><b>File Name</b>: Enter a description for the attachment. If <i>Save Attachments to Imaging Module</i> is enabled in DentalXChange ClaimConnect clearinghouse setup, this is added as the <i>Description</i> in Image Info.</li>
<li><b>Date Created</b>: Date of the attached image. Defaults to the current date.</li>
<li><b>Image Type</b>: Highlight a type to indicate what the attachment is.</li>
<li>Click <b>Delete</b> to remove the file from the attachment.</li>
<li>Click <b>Save</b> to keep changes.</li>
</ul>
<li>Right-click an image name to select or change the Image Type.</li>
</ul>
<p>The currently selected image is shown in the preview area.</p>
<p><b>Claim Validation Status</b>: Lists any errors or validation notes received from DentalXChange for the claim or attachments.</p>
<p><b>Narrative</b>: Enter a claim narrative as needed. Allows up to 2,000 characters. If there is an existing narrative entered, it can be edited here.</p>
<p>Copy another image and click <b>Paste Again</b> to add an additional image from the clipboard.</p>
<p>Click <b>Send</b> to close Paste Attachment and send the attachments to DentalXChange. </p>
<h2>View Sent Attachments</h2>
<p>Choose <i>View Sent Attachments for DentalXChange</i> to open Attachment History and view details of any attachments. <br/><img src="images/dentalXChangeAttachHist.png" width="593" height="326" class="ImageInParagraph"/></p>
<p><b>Attachment Images Sent</b>: Lists the File Names of any attachments that have already been sent.</p>
<p><b>Claim Validation Status</b>: Lists any errors or validation notes received from DentalXChange for the claim or attachments.</p>
<p><b>Attachment ID</b>: Read-only. Displays the auto-generated number associated with the claim attachments. </p>
<p><b>Clear Attachment</b>: Click to remove all images, clear the narrative, and clear the attachment ID. Any attachments that need to be sent must be reattached and a new Attachment ID is created.</p>
<p><b>Narrative</b>: Enter a claim narrative as needed. Allows up to 2,000 characters. If there is an existing narrative entered, it can be edited here.</p>
<p><b>Delete Images</b>: Highlight files from the Attachment Images Sent grid and click to remove files from the attachment.</p>
<h2>Resending a Claim</h2>
<p>If a claim must be resent due to a missing attachment, do the following: </p>
<p class="MarginBottomZero"><b>If insurance provided a reference ID number:</b></p>
<ol class="MarginBottomGap">
<li>Add the missing attachment to the original claim.</li>
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
<p><b>When choosing <i>Snip Attachment for DentalXChange</i>, I get an error that neither Snip &amp; Sketch nor the Snipping Tool could be launched.<br/><img src="images/dxcAttachError.png" width="412" height="170" class="ImageInParagraph"/></b></p>
<p>Windows Snip &amp; Sketch or Snipping tool could not be launched from Open Dental. Use the <i>Paste Attachment(s) for DentalXChange</i> or <i>Select Attachment for DentalXChange</i> options instead. </p>
</div>
</div>
</body>
</html>```
