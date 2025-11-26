Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

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
2. Under Move Patients, click **[...]**. Select the new primary provider and click OK.
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

**Reassign by most-used provider**: Quickly change a patient's primary provider to the provider who has completed most of the patient's procedures. This process will look at all patients who have the selected provider(s) as their primary provider. If a different provider has performed more of their completed procedures, that provider will be assigned as their new primary provider. The *Patient Primary Provider Edit* permission is also required.

1. Highlight the provider(s) to review.
2. Click **Reassign**.
3. A confirmation message will show. Click **OK** to proceed and search for possible reassignments.
4. A message will show indicating how many possible reassignments have been identified. Click **OK** to reassign the patients to the most-used provider. Click **Cancel** to abort.

Note: If multiple providers share an equal number of completed procedures, the most recently used provider will take precedence.

## Reorder the Provider List

Changing the order does not harm any patient data. To manually reorder providers:

1. Highlight a provider.
2. Click the **Up** or **Down** arrow to move the provider one row higher or lower.

**Alphabetize Providers**: Click to alphabetize providers by abbreviation in the following order. The *Provider Alphabetize* permission is required.

* Providers who are people
* Providers who are marked *Not a Person* (e.g. a billing entity)
* Hidden providers

Note: If the Dental Schools feature is enabled, the Provider List is automatically alphabetized and the Up/Down arrows are unavailable.