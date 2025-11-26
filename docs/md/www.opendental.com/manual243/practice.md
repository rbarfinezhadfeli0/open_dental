Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Practice Setup

Enter or update practice billing and contact information in the Edit Practice Info window.

In the [Main Menu](mainmenu.html), click Setup, Practice.

![](images/practiceEdit.png)

Enter the general contact and billing information for the practice. Practices using clinics should enter each clinic's contact and billing information in the [Clinic List](clinicsetup.html).

Note: Phone and fax numbers are formatted automatically in the following format, *(###)###-####*, when typing. Any non-numeric characters (e.g., letters) that are typed into Phone and Fax fields are not saved.

## General Practice Information

* **Practice is Medical**: Check to enable the non-dental interface. See [Non-Dental](nondentalinterface.html).
* **Provider Name/Practice Title**: Enter the provider's name if there is only one provider or the practice title.
* **Phone**: Enter the practice's main telephone number.
* **Fax**: Enter the practice's fax number.

## Practice and Billing Address

Enter the default practice address used on statements, sheets, etc., and the billing address and phone number used on claims. If using clinics, the clinic address and phone number overrides the practice address and phone. For more information on which address, and phone number is used on claims, see [Claim Addresses](claimsaddresses.html).

**Physical Treating Address**: Enter the address of the physical location where treatment is performed. This is used as the treating address on claims and the practice address on statements.

**Billing Address**: Enter the billing address used on claims if different than the physical treating address.

* **Use on Claims**: Check to use this address as the billing address on claims. If checked, the address cannot be a PO Box for e-claims. This overrides the practice address on DentalXChange statements.
* **Phone**: Enter if different than the practice phone number. If *Use on Claims* is checked, this is used as the billing telephone number on claims.

**Pay To Address**: Enter the address where insurance payments should be sent if different than the physical treating address. This can be a PO Box. It is used as the billing address on claims. If the billing address is also entered, and *Use on Claims* is checked, the pay to address is sent with the billing address on e-claims but overrides the billing address on printed claims.

* **Phone**: Enter if different than the practice phone number. This is used as the billing phone number on claims.

Note: A 9-digit zip code is required for all addresses when sending 5010 e-claims.

## Banking Info

**Bank Deposit Acct Number and Info**: Enter the account information for bank deposits. This information is used on Deposit Slips.

## Billing Default Type

Select the default billing type assigned to new patients. The billing type is automatically selected in the [Edit Patient Information](patientedit.html) window when creating new patients.

Customize options in [Definitions: Billing Types](definitionsbillingtypes.html).

## Default Provider

Select the default provider assigned to new patients. The primary provider is automatically selected in the Edit Patient Information window when creating new patients.

## Default Proc Place Service

Select the default place of service assigned to procedures ([Procedure - Misc Tab](proceduremisc.html)). This option is only visible if [Public Health](publichealth.html) is turned on.

## Default Insurance Billing Provider

Select which provider is used as the default billing provider on claims.

* **Default Practice Provider**: Check to use the practice provider.
* **Treating Provider**: Check to use the treating provider. To see how the treating provider is selected on a claim, see [Claim](claimedit.html).
* **Specific Provider**: Check to use a specific provider then select the provider from the dropdown menu.