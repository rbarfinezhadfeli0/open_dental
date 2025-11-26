Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Referral List

Maintain a list of all patient referral sources in the Referrals list.

In the [Main Menu](mainmenu.html), click Lists, Referrals.

![](images/referrals.png)

Search for referral sources using a variety of criteria. Results are updated automatically as criteria is entered.

* **Search**: Enter a referral or business name to find a specific referral source.
* **Show**: Further narrow results by additional information.
  + **Patient**: Show referrals who are also existing patients (marked X in the Patient column).
  + **Doctor**: Show referrals marked as *Is Doctor*.
  + **Other**: Show referrals that are not marked as a patient or marked as *Is Doctor*.
  + **Preferred Only**: Show referrals marked as *preferred*. Checked by default if the *Show preferred referrals only in the Select Referral window by default* preference is enabled.
  + **Hidden**: Show referrals that are marked *Hidden.*
* **Clinic**: Filter referrals by Clinic. Select *All* to display referrals for all clinics. Select *Unassigned* for referral sources not assigned to a clinic.

The Select Referral grid shows up to 500 results matching the search criteria.

* **Last Name**: The last name of a referral source or referral source description.
* **First Name**: The first name of a referral source.
* **MI**: The middle initial of a referral source.
* **Title**: The provider title of the referral source (e.g., DDS or DMD).
* **Specialty**: The specialty of the referral source, if a provider (e.g., Ortho, Surgery, etc).
* **Patient**: X indicates the referral is also a patient.
* **Business Name**: The referral's business name.
* **Note**: Notes specific to the referral source.

Note: See [Merge Referrals](mergereferrals.html) for information on merging duplicate referral sources.

## Add / Edit Referral Source

Click **Add** to create a new referral source, or double-click an existing referral to edit.

When adding a new referral source, a prompt asks if the referral is an existing patient.

* Click **Yes** to select the patient from the Select Patient window. The name and address fills automatically for the referral source. This information can only be edited from the [Edit Patient Information](patientedit.html) window.
* Click **No** to create a new referral source from blank.

![](images/referralEdit.png)

* **Hidden**: Check to hide this referral from the Referrals list.
* **Not Person**: Check if this referral is not a person (e.g., online ad).
* **Last Name/First Name/Middle Name**: Enter the first and last name of the referral source. If this referral is a business, enter the information in the Last Name field.
* **Title**: The provider's title.
* **Address/City/State/Zip**: The mailing address for the referral.
* **Phone/Other Phone**: The contact number for the referral.
* **Email**: The email address for the referral.
* **Business Name**: Business name of the referral.
* **Email Trust for Direct**: For [Direct Messaging](direct.html) (EHR). Check to indicate when direct trust is established with this provider. Once saved, Open Dental attempts to locate the provider's email certificate public key (based on the email address). If the public key is found, it is stored in the local certificate store and Direct trust is established. Patients referred to this provider are then able to transmit a Summary of Care to the provider using the Patient Portal. If the public key is not found, a message indicates that it cannot be located. In this case, uncheck the box since Direct trust is not established. If unchecked, patients referred to this provider are not be able to transmit a Summary of Care using the Patient Portal.
* **SSN/TIN**: SSN or TIN of the referral if a provider.
* **National Provider ID**: NPI of the referral if a provider.
* **Preferred Referral**: Mark this referral as a preferred. When filtering the Referrals List, they appear when *Preferred Only* is checked.
* **Is Doctor**: Check if this referral is a provider. To send provider referrals electronically, *Is Doctor* must be checked and *Not Person* unchecked. See [Edit Claim - General Tab](claimtabgeneral.html).
* **Specialty**: Select the provider's specialty. If the referral is not a provider, select *None*.
* **Referral Slip**: Assign a custom [Referral Slip Layout](sheetsreferralslips.html). The custom slip is the default slip generated when this referral is selected. To generate a referral slip for a patient, see [Referral Slip](referralslips.html).
* **Clinics**: Assign referral source to a Clinic.
* **Used By Patients**: Shows a count of patients that have been referred to or referred from this referral source. As the referral is attached to patients, the information is automatically updated. Use the dropdown menus to see a list of patients this referral is attached to. For more referral tracking options, see [Referrals](referrals.html), Track Referrals.
* **Notes**: Notes about the referral source. Displays in Referrals List. [Right-Click](rightclicktextboxes.html) the text box for additional options.
* **Display Notes**: Displays in the Patient Information grid in the Family Module when referral is attached.

**Add Comm**: Create a new [Commlog](commlog.html) item attached to this referral source. Opens the Communication Item for Referral window.

![](images/referralCommlog.png)

* **User**: Logged-on user when the commlog was created.
* **Hidden**: Hide this Commlog items from the Communications Log grid.
* **Anchored to top**: Move this Commlog item to the top of the grid and highlight.
* **Date/Time Created**: Auto-generated time stamp when the Commlog was created.
* **Mode**: Method of communication.
* **Sent or Received**: Direction of communication.
* **Note**: Commlog text. Right-click the text box for additional options.

**Communications Log**: The grid displays Commlogs created for this referral source. Anchored items are grouped at the top in chronological order and highlighted. Remaining items are listed in chronological order.

**Delete**: Only referrals that are not attached to patients can be deleted. If no patients are listed in the *Used By Patients* section, the referral is deleted from the list. If the referral is attached to patients, hide the referral instead.