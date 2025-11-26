Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Claim Types

In the [Account Module](account.html) toolbar, click the drop down arrow on **New Claim**.

![](images/claimCreateDropdown.png)

There are five options when creating a claim:

* New Claim
* Primary
* Secondary
* Medical
* Other

Open Dental determines how claims are created based on the [Insurance Plan](insplan.html) order. The logic follows the table below.

![](images/claimTypeOrder.png)

| Insurance Plan Situation   (order listed in Family Module) | New Claim | Primary | Secondary | Medical |
| --- | --- | --- | --- | --- |
| 1. Dental (Primary) | Claim type: Primary   Med/Dent: Dental   Insurance Plan: Dental Plan   Other Coverage: Blank | Claim type: Primary   Med/Dent: Dental   Insurance Plan: Dental Plan   Other Coverage: Blank | Message displays stating the patient does not have secondary insurance | Message displays stating the patient does not have medical insurance |
| 1. Medical | Claim type: Medical   Med/Dent: Medical or Institutional   Insurance Plan: Medical Plan   Other Coverage: Blank | Message displays stating the patient does not have any dental plans | Message displays stating the patient does not have secondary insurance | Claim type: Medical   Med/Dent: Medical or Institutional   Insurance Plan: Medical Plan   Other Coverage: Blank |
| 1. Dental (Primary)  2. Dental (Secondary) | Two claims are created   (except for certain [Canada Claims](canadaclaims.html)).  **Primary claim**:   Claim Type: Primary   Med/Dent: Dental   Insurance Plan: Dental plan with lowest ordinal   Other Coverage: Dental plan with the second lowest ordinal  **Secondary Claim**:   Claim Type: Secondary   Med/Dent: Dental   Insurance Plan: Dental plan with the second lowest ordinal   Other Coverage: Dental plan with lowest ordinal | Claim Type: Primary   Med/Dent: Dental   Insurance plan: Dental plan with the lowest ordinal   Other Coverage: Dental plan with the second lowest ordinal | Claim Type: Secondary   Med/Dent: Dental   Insurance plan: Dental plan with the second lowest ordinal   Other Coverage: Dental plan with the lowest ordinal | Message displays stating the patient does not have medical insurance |
| 1. Dental (Primary)  2. Medical | Same as Dental | Same as Dental | Message displays stating the patient does not have secondary dental insurance | Same as Medical |
| 1. Medical  2. Dental (Primary) | Same as Dental | Same as Dental | Message displays stating the patient does not have secondary dental insurance | Same as Medical |
| 1. Medical  2. Medical | Same as Medical | Message displays stating the patient does not have any dental plans | Message displays stating the patient does not have secondary insurance | Same as Medical |
| 1. Dental (Primary)  2. Dental (Secondary)  3. Medical | Same as Dental Dental | Same as Dental Dental | Same as Dental Dental | Same as Medical |
| 1. Dental (Primary)  2. Medical  3. Dental (Secondary) | Same as Dental Dental | Same as Dental Dental | Same as Dental Dental | Same as Medical |
| 1. Medical  2. Dental (Primary)  3. Dental (Secondary) | Same as Dental Dental | Same as Dental Dental | Same as Dental Dental | Same as Medical |
| 1. Dental (Primary)  2. Dental (Secondary)  3. Dental (Tertiary) | Three claims are created   (except for certain [Canada Claims](canadaclaims.html)).  **Primary claim**:   Claim Type: Primary   Med/Dent: Dental   Insurance Plan: Dental plan with lowest ordinal   Other Coverage: Dental plan with the second lowest ordinal  **Secondary Claim**:   Claim Type: Secondary   Med/Dent: Dental   Insurance Plan: Dental plan with the second lowest ordinal   Other Coverage: Dental plan with lowest ordinal  **Tertiary Claim**:   Claim Type: Other   Med/Dent: Dental   Insurance Plan: Dental plan with the third lowest ordinal   Other Coverage: Dental plan with the second lowest ordinal | Same as Dental Dental | Same as Dental Dental | Message displays stating the patient does not have medical insurance |
| 1. Medical  2. Dental (Primary)  3. Dental (Secondary)   4. Dental (Tertiary) | Same as Dental Dental Dental | Same as Dental Dental | Same as Dental Dental | Same as Medical |

Note: *Med/Dent* and *Other Coverage* can be manually changed on the claim from [Edit Claim](claimedit.html). Changing the Other Coverage on a claim may result in the e-claim sending secondary claim information that is inconsistent with the situations listed in the table.

## Claim Type Other

If the patient has more than three dental insurance plans, subsequent claims must be created manually using the *Other* claim type. This claim type can also be used to create a tertiary dental claims from the New Claim dropdown.

1. In the [Main Menu](mainmenu.html), click the New Claim dropdown, **Other**. ![](images/claimCreateOther.png)

   All plans the patient is currently attached to the patient are listed. To see all insurance plans for the family, including inactive or dropped plans, check **Show plans for family which are not in use by the current patient**.
2. Select the dental insurance plan.
3. Select the patient's relationship to subscriber.
4. Click **OK**.
5. On the [Claim](claimedit.html), verify the claim information and change if necessary.
6. Send or print the claim.

## Example

If a patient has an insurance set up of:

1. Dental (Primary)
2. Medical
3. Dental (Secondary)

Use the following steps to create a claim for all insurance plans.

![](images/claimTypeExample.png)

1. Click **New Claim** to create the Primary Dental claim and the Secondary Dental claim.
2. Click the New Claim dropdown and **Medical** to create a claim for the Medical insurance.