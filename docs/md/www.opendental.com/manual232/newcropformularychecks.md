Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

NewCrop eRx Drug Formulary Checks

Drug formulary checks automatically indicate insurance coverage when searching for drugs using the [NewCrop eRx / Prescription](newcrop.html) interface.

![](images/newCropFormularyStatus.png)

Drug formulary checking is only available in the comprehensive version of NewCrop eRx. For EHR measure details, see [EHR Objective 4: ePrescribing](../site/ehreprescribing.html).

Offices must complete two steps to set up drug formulary checks:

1. Add health plans to the NewCrop eRx Account Health Plans list. Health plans are preloaded in New Crop eRX.
2. Attach health plans to patients in NewCrop eRx. Insurance information from Open Dental is not passed to New Crop eRX.

Once set up, checks occur automatically when [Writing and Transmitting New Crop eRX Prescriptions](newcrop.html).

## Add Health Plans to List

1. In the [Chart Module](chart.html), click eRx to open the NewCrop eRx interface.
2. Click the **Admin** tab in the upper right corner.
3. Click **Account Health Plans** in the *List Maintenance* area.
4. Click **Add**.
![](images/newCropAddHealthPlans.png)5. Check the boxes next to any health plan(s) to add. By default, choices for the prescriber's state are listed. To search for national accounts, type in the search box and click **Search**
   * If users cannot find the desired plan, try a different or shorter version of the name.
6. Click **Add**.
7. Once plans are added, a banner displays at the top of the window noting the number of plans added.

All selected health plans should now list under the Account Health Plans list.

## Attach a Health Plan to a Patient

1. In NewCrop eRx, click the **Pt Details** tab.
2. In the *Health Plan Information* section, click the appropriate dropdown for the type of health plan (e.g., Primary, Secondary, etc.) then select the patient's health plan.
   * If the patient's insurance is not currently listed, click **Add Health Plan** from the dropdown and follow the steps in Add Health Plans to List above before proceeding
3. Click **Save**.
![](images/newCropHealthPlanInfo.png)

The health plan is now attached to this patient. NewCrop eRx automatically checks the formulary whenever drugs are searched and indicates formulary status.