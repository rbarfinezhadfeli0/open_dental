Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Conversions: Unassigned Clinics

See [Use Converted Database](usingodconversion.html).

When [Clinics](clinics.html) is enabled, patient assignment to a clinic determines the default clinic used for billing, claims, payments, adjustments, and more. During [Conversions](../site/conversions.html), any patients not already assigned to clinics are assigned to a clinic named *Conv\_Unassigned*. We recommend identifying these patients, then assigning them to the correct clinic as soon possible after a conversion. To identify these patients, we provide the query, *Conv - Patients in Unassigned Clinic*.

Go to [User Query Favorites](queryfavorites.html), then double-click on the *Conv - Patients in Unassigned Clinic* query

![](images/convqueryClinics.gif)

For each patient listed, go the [Edit Patient Information Window](patientedit.html) and assign a clinic.

Once all patients have been assigned an actual clinic, delete the *Conv\_Unassigned* clinic from the [Clinic List](clinicsetup.html).

Note: To run [Batch Billing](billing.html) for patients who are assigned to the Conv\_Unassigned clinic, select the Conv\_Unassigned clinic in the [Billing Options](billing.html) before creating the Billing List.

Resource: [Post Conversion Checklist (PDF)](../resources/conversions/Post%20Conversion%20Checklist.pdf)