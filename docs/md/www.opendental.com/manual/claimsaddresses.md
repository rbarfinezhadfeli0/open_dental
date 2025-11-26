Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Claim Addresses

Clinic addresses determine the address and phone information for the practice sent or printed on a [Claim](claimedit.html).

Enter Practice address and phone information in [Practice Setup](practice.html) and Clinic addresses in [Clinic List](clinicsetup.html).

There are three address and phone number options for claims: Physical Treating, Billing, and Pay To. The *Billing* and *Pay To* address and phone numbers are only needed if different than the Physical Treating Address and main phone number. Below is the order in which the Practice Setup and Clinic addresses, and phone numbers are used on e-claims versus printed [Claims](claimedit.html).

A Site's *Place of Service* address may also be sent on e-claims (loop 2310C) and printed claims (box 54 and 56). See [Site List](sites.html), Technical Details.

## E-Claims in 5010 Format

On e-claims there is an address and phone number for the billing provider (loop 2010AA, segments N3 and N4) and address for the pay-to provider (loop 2010AB, segments N3 and N4). Loop 2010AB is only included if the Practice Setup or Clinic, Pay To Address is entered. The address and phone number used from the Practice Setup and Clinic are determined based on the order below.

| Billing Provider Address  (loop 2010AA, segments N3 and N4) | Billing Provider Phone Number | Pay-To Provider Address  (loop 2010AB, segments N3 and N4) |
| --- | --- | --- |
| 1. Billing Address of Clinic if *Use on Claims* is checked 2. Billing Address of Practice if *Use on Claims* is checked 3. Physical Treating Address of Clinic 4. Physical Treating Address of Practice | 1. Billing Address Phone of Practice if *Use on Claims* is checked 2. Default Clinic Phone 3. Default Practice Phone | 1. Pay To Address of Clinic 2. Pay To Address of Practice |

Note:

* If the Clinic selected on a claim is None, the Practice Setup information is used instead.
* If using [Change Healthcare E-Claims](eclaimswebmd.html) as a clearinghouse, if the Pay To address is sent on an e-claim to Change Healthcare, then Change Healthcare will refer to the Pay To address as the billing address on a claim detail printout (since it does not need to be a physical address). It will refer to what is normally considered the billing address as the rendering address since it must be a physical address sent on e-claims.

## Printed Claims

On printed claim forms there is an address and phone number for the billing and treating dentist. The treating dentist address (box 56) and treating dentist phone number (box 57) will always use the Physical Treating Address and default phone number of the Practice or Clinic. The address and phone number for the billing dentist (box 48 and 52) from the Practice Setup and Clinic are determined based on the order below.

| Billing Dentist Address (box 48) | Billing Dentist Phone Number (box 52) |
| --- | --- |
| 1. Pay To Address of Clinic 2. Pay To Address of Practice 3. Billing Address of Clinic if *Use on Claims* is checked 4. Billing Address of Practice if *Use on Claims* is checked 5. Physical Treating Address of Clinic 6. Physical Treating Address of Practice | 1. Pay To Address Phone of Practice 2. Billing Address Phone of Practice if *Use on Claims* is checked 3. Default Clinic Phone 4. Default Practice Phone |

Note: If the Clinic selected on a claim is None, the Practice Setup information is used instead.