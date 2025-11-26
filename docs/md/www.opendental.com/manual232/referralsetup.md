Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Referral List

Maintain a list of all patient referral sources in the Referrals list.

In the [Main Menu](mainmenu.html), click Lists, Referrals.

![](images/referrals.png)

Search for referral sources using a variety of criteria. Results are updated automatically as criteria is entered.

* **Search**: Enter a referral or business name to find a specific referral source.
* **Show**: Further narrow results by additional information.
  + **Patient**: Show referrals who are also existing patients (marked X in the Patient column).
  + **Doctor**: Show referrals marked as *Is Doctor*.
  + **Other**: Show referrals that are not patients or providers marked as *Not Person*.
  + **Preferred Only**: Show referrals marked as *preferred*. Checked by default if the *Show preferred referrals only in the Select Referral window by default* preference is enabled.
  + **Hidden**: Show referrals that are marked *Hidden.*
* **Clinic**: Filter referrals by Clinic. Select *All* to display referrals for all clinics. Select *Unassigned* for referral sources not assigned to a clinic.

The Select Referral grid shows a list of all patient, non-patient, and provider referrals.

* **Last Name**: The last name of a referral source or referral source description.
* **First Name**: The first name of a referral source.
* **MI**: The middle initial of a referral source.
* **Title**: The provider title of the referral source (e.g., DDS or DMD).
* **Specialty**: The specialty of the referral source, if a provider (e.g., Ortho, Surgery, etc).
* **Patient**: X indicates a patient.
* **Note**: Notes specific to the referral source.

## Add / Edit Referral Source

Click **Add** to create a new referral source, or double-click an existing referral to edit.

When adding a new referral source, a prompt will ask if the referral is an existing patient. Click **Yes** to select the patient from the Select Patient window. Click **No** to continue to the Edit Referral window.

![](images/referralEdit.png)

Note: If the referral is a patient, some fields can only be edited from the [Edit Patient Information](patientedit.html) window.

* **Hidden**: Check to hide this referral from the Referrals list.
* **Not Person**: Check if this referral is not a person (e.g., online ad).
* **Last Name/First Name/Middle Name**: Enter the referral's name. If a patient, this defaults to the patient's last name. If not a person, enter the referral description in the last name field and leave the first name blank.
* **Title**: The provider's title.
* **Address/City/State/Zip**: The mailing address for the referral.
* **Phone/Other Phone**: The contact number for the referral.
* **Email**: The email address for the referral.
* **Business Name**: Business name of the referral.
* **Email Trust for Direct**: For [Direct Messaging](direct.html) (EHR). Check to indicate when direct trust is established with this provider. When you click OK, Open Dental will attempt to locate the provider's email certificate public key (based on the email address). If the public key is found, it will be stored in the local certificate store and Direct trust will be established. Patients referred to this provider will then be able to transmit a summary of care to the provider using the Patient Portal. If the public key is not found, you will receive a message that it cannot be located. In this case, uncheck the box since Direct trust is not established. If unchecked, patients referred to this provider will not be able to transmit a summary of care using the portal.
* **SSN/TIN**: SSN or TIN of the referral if a provider.
* **National Provider ID**: NPI of the referral if a provider.
* **Preferred Referral**: Mark this referral as a preferred. When filtering the Referrals List, they will appear when *Preferred Only* is checked.
* **Is Doctor**: Check if this referral is a provider. To send provider referrals electronically, Is Doctor must be checked and Not Person unchecked. See [Edit Claim - General Tab](claimtabgeneral.html).
* **Specialty**: Select the provider's specialty. If the referral is not a provider, select *None*.
* **Referral Slip**: Assign a custom [Referral Slip Layout](sheetsreferralslips.html). The custom slip will be the default slip generated when this referral is selected. To generate a referral slip for a patient, see [Referral Slip](referralslips.html).
* **Clinics**: Assign referral source to a Clinic.
* **Used By Patients**: shows a count of patients that have been referred to or referred from this referral source. As the referral is attached to patients, the information is automatically updated. Use the dropdown menus to see a list of patients this referral is attached to. For more referral tracking options, see [Referrals](referrals.html), Track Referrals.
* **Notes**: Notes about the referral source. Displays in Referrals List.
* **Display Notes**: Displays in the Patient Information grid in the Family Module when referral is attached.

**Add Comm**: Create a new [Commlog](commlog.html) item attached to this referral source. Opens the Communication Item for Referral window.

![](images/referralCommlog.png)

* **User**: Logged-on user when the commlog was created.
* **Hidden**: Hide this Commlog items from the Communications Log grid.
* **Anchored to top**: Move this Commlog item to the top of the grid and highlight.
* **Date/Time Created**: Auto-generated time stamp when the Commlog was created.
* **Mode**: Method of communication.
* **Sent or Received**: Direction of communication.
* **Note**: Commlog text.

**Communications Log**: The grid displays Commlogs created for this referral source. Anchored items are grouped at the top in chronological order and highlighted. Remaining items are listed in chronological order.

**Delete**: Only referrals that are not attached to patients can be deleted. If no patients are listed in the *Used By Patients* section, the referral will be deleted from the list. If the referral is attached to patients, hide the referral instead.

Click **OK** to save the referral information.