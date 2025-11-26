Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Canada Claim Form

Below is an explanation of how each field on the printed Canadian [Claim Form](claimforms.html) is populated.

Note: The requirements for e-claims are different than the requirements for paper claims. Printing a claim does not represent what is sent in an e-claim. Likewise information sent in an e-claim does not necessarily print on a paper claim.

| Area / Field Name | Claim Form Item Used | Where Entered |
| --- | --- | --- |
| **Part 1 - Dentist** |  |  |
| **Patient** | PatientLastFirst | Edit Patient Information window, last and first name |
|  | PatientAddress | Edit Patient Information window, Address |
|  | PatientAddress2 | Edit Patient Information window, Address2 |
|  | PatientCity | Edit Patient Information window, City |
|  | PatientST | Edit Patient Information window, Province |
|  | PatientZip | Edit Patient Information window, Postal Code |
|  |  |  |
| Unique No. | TreatingDentistNPI | Provider Edit window, CDA number |
| Spec. |  | Not entered |
| Patients Office Account No | PatientPatNum | Edit Patient Information window, Patient Number |
|  |  |  |
| **Dentist** | TreatingDentist | Edit Provider window, first name, last name, middle initial, suffix. Displays treating provider on claim. |
|  | PayToDentistAddress | Edit Practice Info window, Pay To Address. If blank, uses physical treating address. |
|  | PayToDentistAddress2 | Edit Practice Info window, Pay To Address 2. If blank, uses physical treating address. |
|  | PayToDentistCity | Edit Practice Info window, Pay To City. If blank, uses physical treating address. |
|  | PayToDentistST | Edit Practice Info window, Pay To St (province). If blank, uses phyiscal treating address. |
|  | PayToDentistZip | Edit Practice Info window, Pay To Zip. If blank, uses phyiscal treating address. |
|  | TreatingDentistPhoneRaw | Edit Practice Info window, Phone |
|  |  |  |
| I hereby assign... | Patient Assignment | Edit Insurance Plan window. When Assignment of Benefits is checked, *Signature on File* shows. |
|  |  |  |
| For Dentist Use Only | Remarks | Line 1: If predetermination, shows *Predetermination Only*. If Assignment of Benefits is checked, shows *Please pay patient*.   Line 2: Shows notes entered in Edit Claim window, General Tab, Claim Note. |
|  |  |  |
| I understand that the fee... | TotalFee | Fee billed to insurance for all items on claim. |
| Signature of Patient | PatientRelease | Edit Insurance Plan window. When Release of Information is checked, *Signature on File* shows. |
| Date of Service | P1Date, etc | Procedure Info window, Date |
| Procedure Code | P1Code, etc | Procedure sent to insurance |
| Intl Tooth Code | P1ToothNumOrArea, etc | Treatment area of procedure code, if any |
| Tooth Surfaces | P1Surface, etc | Tooth surface of procedure code, if any |
| Dentists Fee | P1FeeMinusLab, etc | Fee billed to insurance for procedure, minus the lab fee, if any. |
| Laboratory Charge | P1Lab, etc | Lab fee associated with procedure |
| Total Charges | P1Fee, etc | Sum of Dentist's fee and lab charges for the procedure code |
| Total Fee Submitted | TotalFee | Sum of Total Charges for all procedures |
|  |  |  |
| **Part 2 - Employee/Plan Member/Subscriber** |  |  |
| Group Policy/Plan No | GroupNum | Edit Insurance Plan window, Plan Number |
| Division/Section No | DivisionNum | Edit Insurance Plan window, Div. No. |
| Your Name | SubscrLastFirst | Edit Patient Information window, last and first name of subscriber |
| Employer | EmployerName | Edit Insurance Plan window, Employer |
| Your Cert No or SIN or ID No | SubscrIDStrict | Edit Insurance Plan window, Subscriber ID |
| Name of Insurance Agency or Plan | PriInsCarrierName | Edit Insurance Plan window, Carrier |
| Your Date of Birth | SubscrDOB | Edit Patient Information window, Birthdate of subscriber |
|  |  |  |
| **Part 3 - Patient Information** |  |  |
| Patient Relationship to Employee/Plan Member/Subscriber | Relationship | Edit Insurance Plan window, Relationship to Subscriber |
| Date of Birth | PatientDOB | Edit Patient Information window, Birthdate |
| If child indicate... Student | Is Student | Edit Patient Information window, Other tab, Eligibility Excep Code 1 or 3 |
| If child indicate... Handicapped |  | Not entered |
| If student, indicate school | College Name | Edit Patient Information window, Other tab, Name of school |
| Patient ID No | PatIDFromPatPlan | If carrier is Pacific Blue Cross, then: Edit Insurance Plan window, Subscriber ID   If any other carrier, then: Edit Insurance Plan window, Dependent Code |
| Are any dental benefit or services... No | OtherInsNotExists | If no secondary coverage |
| Are any dental benefit or services... Yes | OtherInsExists | If secondary coverage exists |
| Policy No | OtherInsGroupNum | Edit Insurance Plan window, Plan Number (of secondary insurance, if any) |
| Spouse Date of Birth | OtherInsSubscrDOB | Edit Patient Information window, Birthdate (of secondary coverage subscriber) |
| Name of other insuring agency or plan | OtherInsCarrierName | Edit Insurance Plan, Carrier (of secondary coverage) |
| Signature of Employee/Plan Member/Subscriber |  | Not entered |
| Is any treatment required as the result of the accident?No | IsNotAccident | Edit Claim window, Canadian tab. No accident date entered. |
| Is any treatment required as the result of the accident?Yes | IsAccident | Edit Claim window, Canadian tab. Accident date entered. |
| If Denture, Crown or Bridge... No | IsReplacementProsth | Edit Claim window, Canadian tab. Maxillary Prosthesis and Mandibular Prosthesis - 1 No and the other not entered or both No |
| If Denture, Crown or Bridge... Yes | IsInitialProsth | Edit Claim window, Canadian tab. Maxillary Prosthesis and Mandibular Prosthesis - 1 Yes and the other not entered or both Yes |
| Is any treatment required for ortho... No | IsNotOrtho | Edit Claim window, Canadian tab, Treatment Required for Ortho, not checked |
| Is any treatment required for ortho... Yes | IsOrtho | Edit Claim window, Canadian tab, Treatment Required for Ortho, checked |
| Date | PatientReleaseDate | Displays todays date |
|  |  |  |
| **Part 4 - Policy Holder / Employer** |  | Not entered. If needed, must be filled by hand. |