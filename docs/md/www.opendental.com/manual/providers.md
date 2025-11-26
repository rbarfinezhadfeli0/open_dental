Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Providers

The Provider List contains the profiles of doctors and hygienists in the practice.

In the [Main Menu](mainmenu.html), click Lists, **Providers**.

![](images/providers2.gif)

Create providers and enter provider information (ID numbers, provider defaults, appointment colors, etc.) Also use this window to create security user profiles and move patients from one provider to another.

All providers set up are listed, as well as their user name and how many patients for whom they are the primary (PriPats) or secondary (SecPats) provider. The provider order shown here determines the order in which providers show in various lists throughout the program. Available providers in those lists may be filtered by [Clinic](clinics.html).

**Search**: Enter search term to filter the provider list. Will search by first name, last name, and abbreviation.

**Show Patient Count**: Check to view *PriPats* and *SecPats* columns. Counts the number of primary and secondary patients associated to a provider.

**Show Hidden**: Check to view providers that have been marked Hidden from the [Provider](providerseditwindow.html) window.

**Show Deleted**: Check to view providers that were removed during a [Provider Merge](mergeproviders.html).

**Add**: Click to create a new provider. The *Provider Add* permission is required.

Double-click an existing provider to open the [Edit Provider](providerseditwindow.html) window.

Note:

* Providers cannot be deleted. Instead mark them hidden on the Edit Provider window. This will remove them as a selection option.
* If using Dental Schools, additional dental school instructor, student, and provider information shows. See [Dental School Providers](dsproviders.html).

## Create Users

Quickly assign a provider to a security user group and create a user name and a temporary password. The *Security Admin* security permission is required. The user name and password will be the provider's last name plus first initial (e.g. SmithJ).

1. Select the provider.
2. Under Create Users, select the **User Group**.
3. Click **Create**.

Providers should log in and change their password to something only they know. If using Clinics, see [User Edit](securityusers.html) to set a default clinic or restrict a user to clinics.

## Move Patients

Change or remove providers for a group of patients. The *Security Admin* security permission is required. Check **Show Patient Count** to view each provider's total number of patients..

* PriPats: The number of patients for which the provider is selected as the primary provider.
* SecPats: The number of patients for which the provider is selected as the secondary provider.

**Change primary provider for a group of patients**: The *Patient Primary Provider Edit* permission is also required.

1. Highlight the current primary provider.
2. Under Move Patients, click **[...]**. Select the new primary provider and click **OK**.
3. Click **Move Pri**.
4. Click **OK** to confirm the move. The patients will now have the new provider as their primary.

**Change secondary provider for a group of patients**:

1. Highlight the current secondary provider.
2. Under Move Patients, click **[...]**. Select the new secondary provider and click **OK**.
3. Click **Move Sec**.
4. Click **OK** to confirm the move. The patients will now have the new provider as their secondary.

**Remove a secondary provider from a group of patients**:

1. Highlight the provider.
2. Under Move Patients, click **[...]**.
3. Click **None**.
4. Click **Move Sec**.
5. Click **OK** on the confirmation message. This provider will no longer be assigned as the secondary provider to any patients.

**Reassign by most-used provider**: Useful if a provider is no longer with the practice. Reassigns the primary provider of all patients from the selected provider to the provider who has completed the majority of their procedures. Requires the *Patient Primary Provider Edit* permission. The tool uses the following logic:

* Any patients with procedures completed by another provider are reassigned.
* If the selected provider has completed the most procedures for the patient, the provider with the second most completed procedures is used.
* Providers marked as *Hidden*, *Secondary Provider (Hyg)*, or *Not a Person* are not considered for reassignment.
* If multiple providers are tied for the most-used provider (i.e., share an equal number of completed procedures), the provider the patient is reassigned to is selected at random.

To use the tool:

1. Highlight the provider whose patients will be reassigned.
2. Click **Reassign**.
3. There is a prompt to continue with the tool. Click **OK** to proceed and search for possible reassignments.
4. There is a prompt confirming the number of patients that will be reassigned.
   * Click **OK** to reassign all patients from the selected provider.
   * Click **Cancel** to exit the tool without reassigning patients.

## Reorder the Provider List

Changing the order does not harm any patient data. To manually reorder providers:

1. Highlight a provider.
2. Click the **Up** or **Down** arrow to move the provider one row higher or lower.

**Alphabetize Providers**: Click to alphabetize providers by abbreviation in the following order. The *Provider Alphabetize* permission is required.

* Providers who are people
* Providers who are marked *Not a Person* (e.g. a billing entity)
* Hidden providers

Note: If the Dental Schools feature is enabled, the Provider List is automatically alphabetized and the Up/Down arrows are unavailable.