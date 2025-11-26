Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Electronic Dental Services

In [Clearinghouses](clearinghouses.html), double-click Electronic Dental Services.

![](images/eclaimsEDS.png)

Electronic Dental Services - Dental (EDS Dental) is an E-Claims clearinghouse. They offer claim processing, electronic billing, ERAs, and attachments. Visit their website at [www.edsedi.com](http://www.edsedi.com). EDS supplies the program and setup.

## Open Dental Setup

To enable EDS as the default clearinghouse, set EDS as the Dental default in the Clearinghouses window.

In the Edit Clearinghouses window, set the following:

![](images/eClaimsEDSsettings.png)

* **Comm Bridge**: When set to *EDS*, send claims directly to the EDS clearinghouse. When set to *None*, send claims to the Claim Export Path instead.
* **Use Claim Export Path:** Only available when EDS is set as the Comm Bridge. Check the box save 837 files sent with e-claims to the Claim Export Path. Uncheck to block saving the files.
* **ERA Options**: Select the preferred ERA download setting.
  + **Do Not Download ERAs:** Only available when EDS is set as the Comm Bridge. Do not automatically download [ERAs](claimsera835.html).
  + **Download ERAs**: Only available when EDS is set as the Comm Bridge. Automatically download ERAs to the Report Path.

## Other Services

To use EDS for:

* Electronic Billing, see [Billing Defaults](billingdefaults.html).
* ERAs, see [ERAs](claimsera835.html).
* Eligibility, see [Electronic Eligibility and Benefits](ebenefits.html).
* Attachments, discuss with EDS. Attachments are not integrated within Open Dental and are done separately through EDS.

## Payer IDs

The [Electronic Payer IDs](payerids.html) list is automatically updated when EDS is set as the default clearinghouse. The [Open Dental Service](opendentalservice.html) is required.