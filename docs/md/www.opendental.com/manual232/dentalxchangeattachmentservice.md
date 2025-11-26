Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

DentalXChange Attachment

Attachments can be sent electronically through the DentalXChange (ClaimConnect) clearinghouse.

In the [Edit Claim - Attachments Tab](claimtabattach.html), click the DXC tab.

![](images/dentalXchangeAttachmentTab.png)

Enable the DentalXChange Attachment service in [ClaimConnect E-Claims](eclaimsclaimconnect.html) prior to sending attachments.

* **Attachment ID**: An attachment ID will automatically populate when attachments are sent. DentalXChange will use the attachment ID to associate attachments to the claim.
* **Add Attachment**: Click to add a new attachment.
* **Attachments Sent**: Lists attachments already sent.

## Adding Attachments

Click **Add Attachment** to open the Claim Attachments window. A warning will appear to ensure all changes to the claim have been saved first. The Edit Claim window will be closed.

Note: For a new [Claim](claimedit.html), clicking **Send** or **OK** in the Edit Claim window will validate the claim. If an attachment is required by DentalXChange and/or the insurance carrier, the user is prompted to add the attachment.

![](images/dentalXchangeClaimAttachments.png)

* **Add Image**: Attach and existing image from the File Explorer.
* **Snipping Tool**: Opens Windows Snip & Sketch or Snipping Tool to take a screenshot. The Image Info window will not automatically open when using the Snipping Tool. Instead, double-click the image from the list to add information.
* **Paste Image**: Paste an image currently copied to the clipboard.

Note:

* PDF files are not supported by the DentalXChange Attachment Service.
* If no [Image Category](definitionsimagecat.html) is selected for Attachments, a warning will appear stating the first image category listed will be used.
* Users can add as many attachments as needed. If the service times out, attachments will be sent one at a time until all have been sent.

* **Narrative**: Enter a narrative (optional). Allows up to 2,000 characters.
* **Claim Validation Status**: Lists any errors or validation notes received from DentalXChange for the claim or attachments.

As each image is added, the following window will appear:
![](images/dentalXchangeImageInfo.png)

* **File Name**: Give the image a file name.
* **Date Created**: This field will auto-populate with today's date. Change the date if needed.
* **Image Type**: Select from:
  + Referral Form
  + Diagnostic Report
  + Explanation of Benefits
  + Other Attachments
  + Periodontal Chart
  + X-Rays
  + Dental Models
  + Radiology Reports
  + Intra-Oral Photographs
  + Narrative

**Is xray mirror image**: Determines the image orientation.

* Checked: The left side of the image corresponds with the patient's left side.
* Unchecked: The left side of the image corresponds with the patient's right side.

A preview of the image will display on the right.

**OK (and Snip Another)**: Click to save image information and re-open the snipping tool to snip an additional image. This option will only appear if **Snipping Tool** was selected in the previous window.

**OK**: Click to save image information and return to the Claim Attachments window.

**Cancel**: Click to return to the Claim Attachments window without saving the current image.

Note: After completing a snip (screenshot), any modal windows (e.g., graphical perio chart) open in Open Dental will automatically be closed before the Image Info window opens.

Once attachments have been sent, return to the Edit Claim window and send the claim. If *Save DXC Attachments to Images Module* is checked in [ClaimConnect Clearinghouse Setup](eclaimsclaimconnect.html), any attached images or documents are automatically saved to the patient's [Imaging Module](images.html). Text entered into the *Narrative* box is not saved to the Imaging Module.

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

## Troubleshooting

**I get the following message when I click the Snipping Tool button
![](images/dxcAttachError.png)**

Windows Snip & Sketch tool could not be launched on the workstation. Instead, copy the image and use the Paste Image button. Alternatively, save the image to a folder and import it using the Add Image button.