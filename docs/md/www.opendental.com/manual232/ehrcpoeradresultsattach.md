Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EHR Attach Image to Radiology Order

This information applied to EHR Stage 2.

See [2019 Program Requirements - Medicaid](https://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/2019ProgramRequirementsMedicaid.html) for current EHR/PI information.

Imaging results (x-rays) can be attached to CPOE radiology orders.

Note: Attaching imaging results to radiology orders was a menu measure for EHR stage 2, but is no longer a reporting requirement for EHR Modified Stage 2.

## Waiting for images

If a radiology order is awaiting results, you can flag the order. On the Lab Order Edit window, click **Manage Images**, then check **Waiting for Images**. This affects the denominator of the EHR imaging results measure. See [EHR Medical Lab Order ( CPOE )](ehrcpoelab.html).

## Attach images

1. The image must first exist in the patient's [Imaging Module](images.html). Images can be imported or scanned.
2. On the EHR Dashboard for Stage 2, click **Manage Images**.
3. Double click the original radiology order.
4. Click **Manage Images**.
   ![](images/ehrcpoeRadImage.gif)

   All image files in the Images module will list under Available Images. Click on a row to preview an image.
5. Click the **Attached column** of an image row to attach the image to this order. An X will show.
6. If **Waiting for Images** is checked, click to clear it.
7. Click OK, then Save.

The numerator of the Lab Images menu measure should increase by 1.