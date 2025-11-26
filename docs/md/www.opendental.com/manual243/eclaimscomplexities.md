Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

E-Claims Complexities

This page includes technical information about what goes out on [E-Claims](clearinghouses.html).

Also see:

* [E-Claims Errors](eclaimserrors.html)
* [Claim Addresses](claimsaddresses.html)

## Updating to 5010 Format

Electronic claims are sent and received using the standard EDI X12 837 data format.

* This format meets HIPAA requirements for the electronic submission of healthcare claim information.
* Within the standard are two versions, 4010 and 5010. Version 5010 is preferred because it is newer and has more fields available.
* Each e-claim consists of loops, segments, and elements.

To use the 5010 format:

1. Edit your [Clearinghouses](clearinghouses.html) to use the 5010 format.
2. Update your [Practice](practice.html) address to include the full 9-digit zip code within your Open Dental database.
3. Monitor your reports for dropped claims or other problems.

## Optional Patient ID

5010 e-claims: The Optional Patient ID is not sent because the Member ID field was removed between versions 4010 and 5010. A check to block users from sending claims if the Optional Patient ID exists was added in version 12.2.3. The message that shows up when a claim is blocked due to the existence of this field is as follows: "Create a new insurance plan instead of using the optional patient ID."

4010 e-claims: This field was sent in element NM109 of loop 2010CA when the patient is not the subscriber. This field is known in the standard documentation as the Member ID. When the Optional Patient ID is blank, the patient SSN (with dashes removed) is sent in the Member ID field if the SSN is not blank.

## Prosthesis (Initial or Replacement)

E-claims: There is no claim-level field for this information. The information is instead attached directly to each procedure. The claim-level field that is shown in the [Claim](claimedit.html) will be completely ignored on e-claims. All e-claims are validated before they are sent. If the procedure-level prosthesis information is missing in the [Procedure](procedureedit.html) for any prosthesis procedure, the e-claim cannot be sent.

Paper claims: The opposite is true: procedure-level prosthesis information is ignored and all that goes out on the claim is the claim-level information.

## Claim Note

**Edit Claim window, Claim Note**: On both e-claims and printed claims, the Attachment ID Number ([Edit Claim - Attachments Tab](claimtabattach.html)) is included at the beginning of the note. For example, if the Attachment ID Number is *NEA#4521687* and the Claim Note is *Patient is anemic*, then the combined note would be *NEA#4521687 Patient is anemic*.

The Claim Note box is limited to 400 characters. On printed claims, the first 253 characters are printed. On e-claims, only the first 400 characters of the combined note are sent in the NTE segment of loop 2300.

**Procedure Info window, E-claim Note**: limited to 80 characters. This note is sent on e-claims in the NTE segment of loop 2400 in version 4010, and in the SV3 segment of loop 2400 in version 5010. Again, the 80-character limit is a restriction of the standard electronic format and is beyond our control. The procedure e-claim note is not included on printed claims.

## CLM01

The specifications state,

*The number that the submitter transmits in this position is echoed back to the submitter in the 835 transaction. The two recommended identifiers are either the Patient Account Number or the Claim Number in the billing submitter's patient management system. The developers of this implementation guide strongly recommend that submitters use completely unique numbers for this field for each individual claim.*

Prior to version 7.0, the internal OD ClaimNum was used because it is unique for each claim. But it turns out that the PatNum is much more useful because some clearinghouses display this number in their reports. And if the number is PatNum, then it becomes very easy for the office to look up the patient being referenced. We currently use PatNum/ClaimNum, for example 3246/5412.

Emdeon is known to add their own unique string to the end of whatever number is sent so that the number will be unique. In the case of a preauthorization followed by a claim, Denti-Cal requires that the number in this field be identical in both submissions. The string added by Emdeon would seem to break the requirement by Denti-Cal. Denti-Cal "has no funds" to refine their interfaces, so there may not be a workable solution.

DentalXChange replaces (but stores) the claim ID received on the claim with a unique claim ID since very few PMS programs supply unique numbers. You are able to search claims by either ID in ClaimConnect so that you will have the unique claim ID available if checking on a claim with a Payer.

Regardless of which clearinghouse is used, Open Dental does not submit an identical string in the claims as was submitted in the preauthorization. This behavior is consistent with the X-12 specifications, but does not follow the Denti-Cal requirements. It is a feature request to be able to send an identical CLM01 in both a preauth and subsequent claim.

## Preauthorization DCN

This is only an issue with Denti-Cal. For other carriers, please see the discussion further down regarding the Original Reference Number in 2300 REF (F8).

## Prior Authorization Number

Also called the Preauthorization Number.

In the X12 documentation, this is called 2300 REF (G1): Prior Authorization. This number can be sent from the Claim Edit window within the Prior Authorization dropdown inside of the Misc tab. You can add this field, PriorAuthString, to your paper claim form by placing it to the right of the PreAuthString field. When carriers want a preauthorization number, they are probably referring to this field.

## Predetermination of Benefits Number

In the X12 documentation, this is called 2300 REF (G3): Predetermination Identification. This number can be sent from the Claim Edit window within the Predeterm Benefits box. On the paper Claim Form, we show this field as PreAuthString.

## Quadrants

From time to time, we get complaints about claim rejections due to missing quadrants. We have reviewed numerous paper and electronic claims in response to the various complaints, but have never found a problem. The quadrant is clearly listed every time. On paper claims, there is a column labeled *25. Area of Oral Cavity*. In this column, there should be a number, either 10, 20, 30, or 40 that corresponds to the quadrants UR, UL, LL or LR. Due to rejections by insurance companies, we began tacking the letter version of the quadrant onto the beginning of the description in addition to sending the number in box 25.

For e-claims, to verify that the number is going out correctly, from the Insurance Claims window ([Send Claims](claimsend.html)), open the raw text of the sent claim. It will be easier to troubleshoot if there is only a single claim in the batch. Look about 2/3 of the way down the claim for the row(s) that start with SV3. For example, an SRP with code D4341, a fee of $175, performed in an office (11), with a quadrant of UL (20), and a quantity of 1, would look like this:

SV3\*AD:D4341\*175\*11\*20\*\*1~

It's easy to see by looking at the SV3 rows that the quadrants are being properly sent. We have never seen a situation where they were not being sent. But if you have an example of such a situation, we would be happy to review it. We continue to be baffled by the periodic claim rejections.

6/26/2012 It has been suggested that some insurance companies are requiring *UL* etc in box 27, the tooth number box. The same letters would presumably go out in the same place on e-claims. This sounds like it might be plausible, but we have seen no documentation stating that this is required by any insurance company. More importantly, it would also violate the HIPAA standard, which every insurance company is required by law to follow. If someone provides us proof that an insurance company is requiring this format, then we will add it as an option. But we strongly suspect that it would cause rejections from other insurance companies.

## Original Reference Number

In the X12 documentation, this is called 2300 REF (F8): Original Reference Number. In other places, it seems to be called one of the following:

* Original Document Control Number/Internal Control Number (DCN/ICN)
* Original Transaction Control Number (TCN)
* Claim Reference Number
* Payer Claim Control Number (in new 5010 documentation)

This field is required by Medicaid when voiding a claim or replacing a claim by setting the CLM05-3. The ability to send void or replacement claims was added in version 12.2 within the Claim Edit window. Users can enter the Original Reference Number in the [Edit Claim - Misc Tab](claimtabmisc.html).

## Attachment Control Number (ACN)

In the X12 documentation, this is placed in the Claim Supplemental Information loop, 2300 PWK06. To send an ACN in Open Dental, enter the number in the Attachment ID Number field in the [Edit Claim - Attachments Tab](claimtabattach.html). There can be only one ACN per claim.

There is a checkbox in Preferences for *Require ACN# in remarks on claims with ADDP group name*. This is an enforcement policy that was requested by one user. Their carrier expects the ACN# in the remarks of the claim.

Medicaid of Iowa providers may now submit electronic claims relative to an approved Exception to Policy (ETP). Providers are instructed to enter the Exception to Policy number in the Attachment Control Number (ACN) field 2300 PWK06. When completing the ACN field the ETP number must be preceded with the letters ETP. Ex. ETP08-E1234.

## Clinics and Providers

Providers should not move between clinics prior to version 11.1. In the Insurance Claims window, we encouraged but did not enforce sending claims for only one clinic at a time. A batch of claims goes to the clearinghouse as a single hierarchical file, grouped by billing provider. The billing address for a group of providers is pulled from the first claim in the group under the assumption that the provider/clinic relationship won't change in that group. This has been resolved in version 11.1 by enforcing batches to all belong to a single clinic.

## Ordering Provider

Ordering Provider is only used in medical e-claims on a procedure level. The ordering provider in loop 2420E (one per procedure) is required for DMERC (Medicaid) carriers only and must be a person, not an organization, according to the X12 standard.

By default, the ordering provider is the treating provider, but it can be changed.

* Version 16.3.22 and greater: Option to select a referring provider as the ordering provider override.
* Version 16.2.56 and greater, 16.3.14 and greater: Option to set the treating provider as the default ordering provider or to leave it blank. If the carrier is Medicaid (see [Electronic Payer IDs](payerids.html)) the treating provider is always sent as the ordering provider, regardless of the preference.
* Version 14.2 and greater:
  1. Set an ordering provider override on the procedure ([Procedure - Medical Tab](proceduremedical.html)) or claim ([Edit Claim - Medical Tab](claimmedical.html)). If an override is set on the procedure, it overrides providers set elsewhere.
  2. If no override is set, the preference for *On e-claims, send treating provider info for each separate procedure* determines the default ordering provider.
     + Checked: The provider set on the procedure will be the ordering provider.
     + Unchecked: The treating dentist set on the Edit Claim window will be the procedure's ordering provider.

  Note: If an overriding ordering provider on a procedure is not a person (*Not a Person* checked on [Provider](providerseditwindow.html)), or has no last name, no ordering provider information will be sent with the claim.

## Sites

If a [Site](sites.html) is assigned to a procedure on a claim, and a default provider (not a person) and place of service (not office) are set for the site, the site NPI, place of service, and address will be sent in loop 2310C for new 5010 dental e-claims. This is the criteria that must be met:

* At least one procedure on the claim must have a site assigned.
* The site must have a default provider that is marked as Not a Person and has a valid NPI.
* The site must have a valid address, city, state, and zip code.
* The claim place of service is not Office.
* The site provider and claim billing provider cannot match.

## Service Authorization Exception Code

Open Dental does not currently send or support this code. It is described in the X12 documentation as follows:

Used only in claims where providers are required by state law (e.g., New York State Medicaid) to obtain authorization for specific services but, for the reasons listed in REF02, performed the services without obtaining the service authorization. Check with your state Medicaid to see if this applies in your state.

## Resubmission Codes

Resubmission codes are determined by the *Correction Type* in the Edit Claim - Misc Tab.

Original=1, Replacement=7, Void=8.

## Gender

ADA only allows Male, Female, or Unknown as a gender on claims. If *Other* is selected as gender for a patient in [Edit Patient Information](patientedit.html), the gender will be sent as *Unknown* on the electronic claim.

## Subscriber Date of Birth

When using the 5010 format for DentalXChange ClaimConnect, Vyne, Apex, or Electronic Dental Service (EDS), the subscriber date of birth is always sent.

When using the 5010 format for other clearinghouses, the subscriber date of birth is only transmitted when the subscriber is also the patient.

When using the 4010 format, both the subscriber birthdate and patient birthdate will be transmitted when the subscriber is not the patient.

## Coordination of Benefits

*Send Paid By Other Insurance At* [Preference](preferences.html) is only applicable when using the 5010 format. Claim payment must be entered *By Procedure* in order to be included on subsequent claims (e.g., [Secondary Insurance](inssecondary.html) claims).

Other insurance paid details are not transmitted when using the 4010 format.

## Rendering Provider Primary Identification

When using the 5010 format for DentalXChange ClaimConnect, ChangeHealthcare, Vyne, Tesia, or Electronic Dental Services (EDS), the provider's State License Number is always sent when using the default value for the GS03/ISA08 field.

## Rendering Provider Secondary Identification

When using the 5010 format for DentalXChange ClaimConnect, ChangeHealthcare, Vyne, Tesia, or Electronic Dental Service (EDS), the provider's State License Number is always sent.