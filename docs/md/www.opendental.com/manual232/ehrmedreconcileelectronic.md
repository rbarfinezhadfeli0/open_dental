Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR: Reconciling from an Imported Summary of Care

When you receive a summary of care file (ccd.xml file) from another provider, you can electronically reconcile a patient's medications, allergies, or problems. Open Dental will automatically compare the [Medications](medicationspatient.html), [Allergies](allergiespatient.html), and/or [Problems](problempatient.html) with the items listed in the summary of care file and make recommendations.

To reconcile medications using a paper document instead see [EHR Reconcile from Paper Document](ehrmedreconcilemanual.html).

## Reconciling medications

1. On the [EHR Dashboard](ehrdashboard1.html), click **Electronic Reconciliation**.
   ![](images/ehrMedReconManualRef.gif)
2. Highlight the provider from whom the document came, then click OK to select. To add a new referral click Add. The referral must be marked as *Is Doctor*.
   ![](images/ehrmedRecSummary.gif)
3. Summary of Care files that have already been received list as line items under **Received**.
   * To import a new Summary of Care, click **File Import** then select the file.
   * To open a received file, double click on it.
   * The document will open in a browser window.
   ![](images/ehrCCD.gif)
4. At the bottom of the window, click **Medications**.
   ![](images/ehrMedReconcile.gif)
5. * By default, if medications are identified as a match (based on [RxNorms](rxnorms.html)), the medication as listed in the patient's Open Dental medication list is used.
   * To remove a medication from the Reconciled Medications list, highlight it then click **Remove Selected**.
   * To add a medication from the Current Medications or Summary list, highlight it, then click Add. Any duplicate medications must be removed first.
   * The Last Modified date will always be today's date.
   * Any notes attached to the medication will also be reconciled, so be aware of any notes in the patient's current Open Dental medication list.Compare the patient's current medications with those imported from the Summary of Care. Open Dental will automatically make recommendations and list them under Reconciled Medications.
6. When you are satisfied that the medications under Reconciled Medications are accurate, click OK to finish the reconcile and update the patient's Open Dental Medication List. Any medications that were reconciled, but didn't already exist in the Medication Master List (RxNorm), will be added to the master list.

## Allergy and problem reconciliation

Allergies and problems can be reconciled electronically using the same steps as for medication reconciliation.

* **Allergies**: In the browser window, click Allergies. Allergies in a patient's Allergy List will be automatically compared with allergies in the Summary of Care. Recommendations will list in the Reconciled Allergies list.
* **Problems**: In the browser window, click Problems. Problems in a patient's Problem List will be automatically compared with problems in the Summary of Care. Recommendations will list in the Reconciled Problems list.