Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

EDS Attachment Service

Attachments can be sent electronically through the Electronic Dental Services (EDS) clearinghouse.

In the [Edit Claim - Attachments Tab](claimtabattach.html), click the EDS tab.

![](images/edsAttachmentTab.png)

Enable the EDS Attachment service in the [Electronic Dental Services](eclaimseds.html) clearinghouse prior to sending attachments.

* **Attachment ID**: An attachment ID is automatically populated when attachments are sent. EDS uses the attachment ID to associate attachments to the claim.
* **Add Attachment**: Click to add a new attachment.
* **Attachments Sent**: Lists attachments already sent.

## Adding Attachments

Click **Add Attachment** to open the Claim Attachments window. A warning appears to ensure all changes to the claim have been saved first. The Edit Claim window is closed.

Note: For a new [Claim](claimedit.html), clicking **Send** or **Save** in the Edit Claim window validates the claim. If an attachment is required by EDS and/or the insurance carrier, the user is prompted to add the attachment.

![](images/edsClaimAttachments.png)

**Images to Send**: Lists all images added to this claim attachment. Double-click a row to edit details.

**Add Image**: Attach an existing image from the File Explorer.

**Snipping Tool**: Opens Windows Snip & Sketch or Snipping Tool to take a screenshot. The Image Info window does not automatically open when using this option. Instead, double-click the image from the list to add information.

**Paste Image**: Paste an image currently copied to the clipboard.

Note:

* PDF files are not supported by the EDS Attachment Service.
* If no [Image Category](definitionsimagecat.html) is selected for Attachments, users are warned, and first image category listed is used.
* Users can add as many attachments as needed. If the service times out, attachments are be sent one at a time until all have been sent.

**Narrative**: When needed, enter a narrative. Allows up to 2,000 characters. If adding a narrative, an attachment with an image type of *Narrative* is required.

**Claim Validation Status**: Lists any errors or validation notes received from EDS for the claim or attachments.

Click **Save** to add the attachment information to the claim

## Image Info

As each image is added, the Image Info window opens.

![](images/edsImageInfo.png)

* **File Name**: Give the image a file name.
* **Date Created**: This field auto-populates with today's date. Change the date if needed.
* **Image Type**: Select an image type from the list.
* **Is xray mirror image**: Determines the image orientation.
  + Checked: The left side of the image corresponds with the patient's left side.
  + Unchecked: The left side of the image corresponds with the patient's right side.

**Save (and Snip Another)**: Only appears if **Snipping Tool** was selected in the Claim Attachments window. Add the current image information to *Images to Send* and re-open the snipping tool to snip an additional image.

A preview of the image is displayed on the right. Click **Save** to add the attachment and return to the Claim Attachments window.

Note: After completing a snip (screenshot), any modal windows (e.g., graphical perio chart) open in Open Dental are automatically closed before the Image Info window opens.

Once attachments have been sent, return to the Edit Claim window and send the claim. If *Save Attachments to Imaging Module* is checked in the [Electronic Dental Services](eclaimseds.html) clearinghouse, any attached images or documents are automatically saved to the patient's [Imaging Module](images.html). Text entered into the *Narrative* box is not saved to the Imaging Module.

## Resending a Claim

If a claim must be resent due to a missing attachment, do the following:

**If insurance provided a reference ID number:**

1. Add the attachment to the original claim.
2. In the Misc Tab of the claim, add the Original Reference Number.
3. Change the Correction Type to *Replacement.*
4. Resend the claim using the *Resend* button
5. Select *The claim was accepted and I need to replace it with updated information* when prompted.

**If insurance did not provide a reference ID number.**

1. Add the attachment to the original claim.
2. Resend the claim using the *Resend* button.
3. Select *The claim has not been accepted yet and I need to resend it* when prompted.