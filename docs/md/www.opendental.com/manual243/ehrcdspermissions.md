Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR CDS Permissions

In the [Main Menu](mainmenu.html), click Setup, Chart, EHR, then click **CDS Triggers**. In the upper left corner, click **Setup**.

![](images/cdsSupportSetup.gif)

In Clinical Decision Support (CDS) setup, you can grant or block specific users from [EHR Configure CDS Rules](ehrcdsconfigure.html) or encountering [EHR CDS Interventions](ehrcdsintervention.html).

All users set up in Security will be listed, along with a column for each permission area. The Admin user always has the ability to view this window.

Click in a column to allow or block a user from a permission. An X in a cell indicates the user has permission.

|  |  |
| --- | --- |
| User Name | The user's name as set in [Security](security.html). |
| Group Name | The user's [User Group](securityusergroups.html). |
| Show CDS | User will encounter CDS interventions for allowed categories. If this permission is blocked, user will see no interventions. |
| Show *i* | User can see and access the [EHR InfoButton](ehrinfobutton.html). |
| Edit CDS | User can change CDS permissions and Configure CDS Interventions. |
| Source | User can edit instructions and bibliography information. |
| Problem | User will encounter CDS interventions based on [Problems](problempatient.html). |
| Medication | User will encounter CDS interventions based on [Medications](medicationspatient.html). |
| Allergy | User will encounter CDS interventions based on [Allergies](allergiespatient.html). |
| Demographic | User will encounter CDS interventions based on Demographic information. |
| Lab | User will encounter CDS interventions based on Lab Results. |
| Vitals | User will encounter CDS interventions based on [EHR Vital Signs](vitalsignsenter.html). |