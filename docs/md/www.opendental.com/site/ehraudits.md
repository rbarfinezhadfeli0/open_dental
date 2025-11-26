[![Open Dental Software](resources/logo.png)](../index.html)

503-363-5432

☰

* [Home](../index.html)
* [Trial Version](trial.html)
* [Order](order.html)
* [Documentation](documentation.html)
* [Forum](http://opendentalsoft.com/forum/)
* [Contact Us](contact.html)
* [![](resources/iconSearch.gif)](searchSite.html)

# EHR Audits

The audit rate for EHR is high. If you are selected for an EHR audit, the auditor may require documentation and data that supports the information entered during attestation. This can include, but is not limited to, percentage information, exclusion support, reports, and screenshots that clearly prove that a yes/no measure was completed or enabled as required (e.g. during the reporting period).

We also recommend that documentation include identifying information such as dates, titles, and provider (e.g. NPI, name).

**Q: What do I need for an audit?**

A: You will need documentation that supports all information you attested to. See [CMS Supporting Documents for Audits](http://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/EHR_SupportingDocumentation_Audits.pdf) and [EHR Attestation](ehrattest.html).

**Q. Medicaid/Medicare/Auditor wants (fill in the blanks). How do I get it?**

A. First clarify exactly what is wanted and the format required. Then, contact Open Dental Support and we may be able to help you pull the information from your data. Be aware that some things they ask for we may not be able to provide.

**Q: What can I give to the auditor to prove drug interaction checks were enabled?**

A: In both Open Dental and eRx, drug interaction checks are always enabled; you cannot turn them off. Provide dated screenshots of the occurrence of a drug interaction alert.

**Q: What can I give to the auditor to prove a clinical decision support intervention was enabled?**

A: Provide a dated screenshot of the intervention configuration and an example of the intervention in action.

* For years 2011, 2012, and 2013, clinical decision support interventions were created using Open Dental's [Automation](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7automation.html).
* For years 2014 and above, the interventions are created using clinical decision support rules. See [EHR Configure CDS Rules](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7ehrcdsconfigure.html).

**Q: What do I need to provide as proof of a Security Risk Analysis?**

A: There are no definitive format requirements. In our experience, the requests from each state vary.

**Q: I am being audited for meaningful use. How can I find the original measure requirements for 2011 edition, stage 1, or stage 2 meaningful use?**

A: We have links to the measure specification sheets for each year. See [EHR Archived Information](ehr2011edition.html).

**Q: Clinical Summary calculation: When running measure reports in a newer version, I notice that numerator and denominator for the old Clinical Summaries measure are different. Why?**

A: We discovered a bug in the clinical summary calculation in version 16.4. Instead of using unique completed procedures on a date to determine an encounter, encounters were created for all completed procedures. This may have inflated denominator and numerator encounter values, however the percentage should be the same. The bug fix was backported to version 16.2.76,16.3.47, and 16.4.19. If you have concerns about this calculation in case of an audit, this CMS FAQ may be useful: <https://questions.cms.gov/faq.php?id=5005&faqId=6097.>

## Useful Resources:

* CMS FAQ on audits [CMS FAQ on audits](https://questions.cms.gov/faq.php?id=5005&faqId=7711)
* [CMS Supporting Documents for Audits](http://www.cms.gov/Regulations-and-Guidance/Legislation/EHRIncentivePrograms/Downloads/EHR_SupportingDocumentation_Audits.pdf) CMS Supporting Documents for Audits