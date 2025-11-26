Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Conversions: Unassigned Clinics

See [Use Converted Database](usingodconversion.html).

When [Clinics](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7clinics.html) is enabled, patient assignment to a clinic determines the default clinic used for billing, claims, payments, adjustments, and more. During [Conversions](conversions.html), any patients not already assigned to clinics are assigned to a clinic named *Conv\_Unassigned*. We recommend identifying these patients, then assigning them to the correct clinic as soon possible after a conversion. To identify these patients, we provide the query, *Conv - Patients in Unassigned Clinic*.

Go to [User Query Favorites](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7queryfavorites.html), then double-click on the *Conv - Patients in Unassigned Clinic* query

![](images/convqueryClinics.png)

For each patient listed, go the [Edit Patient Information Window](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7patientedit.html) and assign a clinic.

Once all patients have been assigned an actual clinic, delete the *Conv\_Unassigned* clinic from the [Clinic List](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7clinicsetup.html).

Note: To run [Batch Billing](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7billing.html) for patients who are assigned to the Conv\_Unassigned clinic, select the Conv\_Unassigned clinic in the [Billing Options](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7billing.html) before creating the Billing List.

Resource: [Post-Data Conversion Setup Checklist](checklistconverteddb.html)