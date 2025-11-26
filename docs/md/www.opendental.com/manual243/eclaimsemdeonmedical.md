Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Change Healthcare Medical E-Claims

In [Clearinghouses](clearinghouses.html), double-click Emdeon Medical.

![](images/eClaimsEmdeonMedical.png)

Change Healthcare is not a recommended clearinghouse solution. It appears Change Healthcare has stopped providing clearinghouse services after a cyber attack that took place in early 2024.

## Signup & Setup

1. Fill out this registration form (right-click to save file): [Emdeon Enrollment Form](http://opendental.com/resources/EmdeonEnrollmentForm.docx)
2. Within 3 to 5 business days of receipt, an Emdeon rep will deliver the ITS credentials (used in step 4), discuss payor agreement requirements, and review reporting and support tools.
3. In Open Dental, [Show Features](showfeatures.html), enable *Medical Insurance*.
4. In Open Dental, set up the Emdeon Medical clearinghouse (shown above). Enter the user name and password provided by Emdeon, then click OK to save.

## Electronic Attachments

Medical attachments cannot be sent through Open Dental. Most medical payers do not accept electronic attachments. However, it may be possible to send electronic attachments to a few select carriers with a third party application called [NEA FastAttach](https://vynemedical.com/our-products/fastattach/) (Vyne Medical). Emdeon Medical is directly integrated with FastAttach. Contact Emdeon Medical or FastAttach support lines for details.

## ERA Automatic Downloads

Emdeon Medical supports automatic downloads of [ERAs](claimsera835.html). Setup a Report Path, and select Download ERAs to enable in Open Dental. Contact Change Healthcare to enable this option for the practice.

## Viewing Status of Sent Claims

Log into the Emdeon Vision online portal at <https://access.emdeon.com/> to see the status of sent claims. Contact Emdeon Medical for details.

## Troubleshooting

**Problem: When I submit e-claims, I get the error message "Medicare Assignment is required."**

Solution: There are two known reasons why this error can occur. Either the claims were submitted with an older version of Open Dental, or the Filing Code on the [Insurance Plan](insplan.html) was not set to the proper Medicare option (the most common option is MedicarePartB).

**Problem: I receive an error message in the Emdeon Vision online portal stating "Billing Provider Taxonomy Code: Required; Must be entered for Payer."**

Solution: The claim billing and treating provider must be the same for any claim sent to the insurance carrier in question. Most carriers do not require this extra step. However, in some states, Medicare and Medicaid sometimes have this extra requirement.