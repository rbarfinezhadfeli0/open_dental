Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Electronic Dental Services

Electronic Dental Services (EDS) is a dental E-Claims clearinghouse that offers claim processing, electronic billing, ERAs, and attachments.

In [Clearinghouses](clearinghouses.html), double-click Electronic Dental Services.

![](images/eclaimsEDS.png)

Visit their website at [www.edsedi.com](http://www.edsedi.com). EDS supplies the program and setup.

EDS also offers a medical clearinghouse, see [Electronic Dental Services - Medical](eclaimsedsmedical.html).

## Open Dental Setup

To enable EDS as the default clearinghouse, set EDS as the Dental default in the Clearinghouses window.

In the Edit Clearinghouses window, set the following:

![](images/eClaimsEDSsettings.png)

* **Claim Export Path**: Typically **C:\EDS\Claims\In\** but can be edited as needed.
* **Use Claim Export Path:** Only available when EDS is set as the Comm Bridge. Check the box save 837 files sent with e-claims to the Claim Export Path. Uncheck to block saving the files.
* **Comm Bridge**: When set to *EDS*, send claims directly to the EDS clearinghouse. When set to *None*, send claims to the Claim Export Path instead.
* **ERA Options**: Select the preferred ERA download setting.
  + **Do Not Download ERAs:** Only available when EDS is set as the Comm Bridge. Do not automatically download [ERAs](claimsera835.html).
  + **Download ERAs**: Only available when EDS is set as the Comm Bridge. Automatically download ERAs to the Report Path.
* **Allow sending attachments**: Determine if the practice is sending attachments through Open Dental.
  + Checked: Allow sending attachments through Open Dental. Only used when also signed up for the EDS attachment service. See [EDS Attachment Service](edsattachmentservice.html).
  + Unchecked: Do not allow sending attachments via the EDS attachment service.
* **Save Attachments to Imaging Module**: Only displays when *Allow sending attachments* is checked. Determine if attachments should be saved to the Imaging Module.
  + Checked: Save attachments to the Imaging Module. Set a default category in [Definitions: Image Categories](definitionsimagecat.html).
  + Unchecked: Do not save attachments to the Imaging Module.

Note: **Location ID** can be left blank. EDS support may enter a value as needed.

## Other Services

To use EDS for:

* Electronic Billing, see [Billing Defaults](billingdefaults.html).
* ERAs, see [ERAs](claimsera835.html).
* Eligibility, see [Electronic Eligibility and Benefits](ebenefits.html).

## Payer IDs

The [Electronic Payer IDs](payerids.html) list is automatically updated when EDS is set as the default clearinghouse. The [Open Dental Service](opendentalservice.html) is required.