Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

DentalXChange ClaimConnect E-Claims

DentalXChange offers a variety of services, such as claim processing, attachments, payments, ERAs, and more.

In [Clearinghouses](clearinghouses.html), double-click DentalXChange ClaimConnect.

![](images/eClaimsClaimConnect.png)![](images/claimConnectHeader.png)

Website: [www.dentalxchange.com](http://www.dentalxchange.com).

## Initial Setup

Before a setup appointment with DentalXChange, there is initial setup in Open Dental that must be completed:

* Enter information for all [Providers](providers.html).
* Enter practice details in [Practice Setup](practice.html). A 9-digit zip code is required for DentalXChange.
* If using clinics, enter details for all [Clinics](clinicsetup.html). A 9-digit zip code is required for DentalXChange.
* Add insurance [Carriers](carriers.html) with their DentalXChange payer ID. Only a few carriers need to be set up prior to the DentalXChange setup call.
* Create [Fee Schedules](feeschedules.html) and enter [Procedure Code Fees](procedurecodes.html). During the DentalXChange setup call, some procedures must be set complete. Enter the fees for at least these procedures.
* Appointments/procedures need to be [Set Complete](apptcomplete.html). A few appointments for different patients that need insurance claims should be set complete.

## Clearinghouse Setup

To enable DentalXChange / ClaimConnect as the default clearinghouse, set DentalXChange ClaimConnect as the Dental default in the Clearinghouses window.

In the Edit Clearinghouses window, set the following. Credentials entered in this window are for use with only claims, ERAs, and electronic eligibility.

![](images/eClaimsClaimConnectSetting.png)

* **Login ID**: Enter the DentalXChange account Login ID.
* **Password**: Enter the DentalXChange account password.
* **Location ID**: Not currently in use.
* **Claim Export Path**: Typically **C:\ClaimConnect\Upload\** but can be edited as needed.
* **Use Claim Export Path**: Determine if 837 files should be saved.
  + Checked: Save 837 files sent with e-claims to the Claim Export Path.
  + Unchecked: Block saving 837 files sent with e-claims to the Claim Export Path.
* **Report Path**: Enter path where downloaded [ERAs](claimsERA835.html) should be saved. Typically **C:\ClaimConnect\Report\** but can be edited as needed.
* ERA Options: Determine if ERAs should be downloaded.
  + **Do Not Download ERAs**: Do not automatically download ERAs.
  + **Download ERAs**: Automatically download ERAs to the Report Path.
* **Format**: x837D\_5010\_dental. Does not need changed.
* **Comm Bridge**: ClaimConnect. Does not need changed.
* **Allow sending attachments**: Determine if the practice is sending attachments through Open Dental.
  + Checked: Allow sending attachments through Open Dental. Only used when also signed up for DentalXChange's attachment service.
  + Unchecked: Do not allow sending attachments via the DentalXChange attachment service through Open Dental.
* **Save Attachments to Imaging Module**: Only displays when *Allow sending attachments* is checked. Determine if attachments should be saved to the Imaging Module.
  + Checked: Save attachments to the Imaging Module. Set a default category in [Definitions: Image Categories](definitionsimagecat.html).
  + Unchecked: Do not save attachments to the Imaging Module.
* **Save DXC Transmissions (Troubleshooting Only)**: View the XML file of outgoing attachment requests. Typically only checked when troubleshooting. The XML file is saved to the Claim Export Path.

Note:

* If using Clinics, use the Clinic dropdown in the top right to switch between clinics and alter setup as required.
* See *Other Services* below to set up credentials for Patient Billing or PayConnect integrated credit card services.

## Advantages

The DentalXChange ClaimConnect payments platform integrates with Open Dental to streamline connections and data sharing between providers and payers to keep claims moving. With DentalXChange ClaimConnect practices can:

* Submit, edit, and manage claims directly within Open Dental
* Connect to 950+ payers
* Validate claims instantly
* Reduce billing overhead
* Improve clean claim rates
* Gain complete visibility into claims workflow
* Access unlimited training and support

## Register with DentalXChange

1. Go to [www.dentalxchange.com](http://www.dentalxchange.com).
2. Create a new account or edit an existing account.
3. Select Open Dental as the Practice Management Software.
4. Choose the services the practice is interested in.

## Other Services

To use DentalXChange for:

* Electronic Eligibility and Benefits, see [Electronic Eligibility and Benefits](ebenefits.html).
* Patient Credit Checks, see [DentalXChange Patient Credit Score Service](dentalxchangecreditservice.html).
* Patient Billing, see [Billing Defaults](billingdefaults.html).
* Electronic Benefit Remittance (ERAs), see [ERA Workflow](era835workflow.html).
* Attachments, see [DentalXChange Attachment](dentalxchangeattachmentservice.html).
* Merchant Services, see [PayConnect Setup](payconnectsetup.html).

## Payer IDs

The [Electronic Payer IDs](payerids.html) list is automatically updated when DentalXChange ClaimConnect is set as the default clearinghouse. The [Open Dental Service](opendentalservice.html) is required.

## Troubleshooting & Technical Details

The best troubleshooting approach to nearly any problem is to monitor the DentalXChange website. It shows which claims were successfully submitted, which ones have errors, and so on. Use it regularly to stay on top of claims.

**When sending claims, receive 'authentication failed.authBadPwd' error.**

This error is due to a bad password.

1. Go to the DentalXChange website and verify that the user can login.
2. Verify that the same password is entered for the clearinghouse in Open Dental.

Note: Passwords in DentalXChange are case sensitive. Be sure to use the correct capitalization when entering the DentalXChange password in Open Dental.

**Uploads Fail, "A previous batch submission was found in an incomplete state."**

After a failed upload, the next time that a user tries to send a claim, there is a warning. Resubmit the batch in question as well as the subsequent failed batch. Check the DentalXChange website to make sure all claims went through.

**Can we use a terminal server / hosted app for DentalXChange?**

Yes. The claim export path uses temporary subfolders when on a terminal server / hosted app. This allows multiple users to send claims simultaneously.