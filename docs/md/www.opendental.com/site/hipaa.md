Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

HIPAA

See [United States Regulatory Information](regulatoryinformationusa.html).

The responsibility for HIPAA compliance falls to each dental office. It is up to you to make sure your practice is secure. Open Dental software is a tool to help you become HIPAA compliant. See [HIPAA at Open Dental Software, Inc.](hipaaopendental.html).

HIPAA is an acronym for the Health Insurance Portability and Accountability Act, a federal law to protect Protected Health Information (PHI).

* The [HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html) regulates the use and disclosure of all PHI.
* The [HIPAA Security Rule](https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html) establishes detailed standards to protect the integrity, confidentiality, and availability of electronic PHI (ePHI).

**What is Protected Health Information (PHI)?**
 PHI is defined in 45 CFR 160.103. Under the HIPAA Privacy Rule, PHI refers to individually identifiable health information that is transmitted or maintained in any form or medium by health care providers or their business associates acting on their behalf. In the United States generally any health information that includes more than first name and age (unless over 89) is considered individually identifiable and thus PHI (see <https://privacyruleandresearch.nih.gov/pr_07.asp>).

 In other countries the laws regarding privacy of patient information may vary.

**Why is it important to comply with HIPAA requirements?**
 Following HIPAA guidelines help protect PHI and your organization. Businesses that fail to do so may be responsible for consequences, including fines, if data is compromised (hacked, computer stolen or lost). See [HHS.gov: HIPAA News Releases and Bulletins](https://www.hhs.gov/hipaa/newsroom/index.html)

**What should I do to make my computer systems HIPAA compliant?**
 To get started, we recommend following all guidelines on Network and Computer Setup. This includes but is not limited to:

* Backing up data.
* Using virus protection.
* Setting up security profiles in Open Dental for all users (user groups, user names, passwords).
* [Encryption of Data at Rest and in Transit](encryption.html).
* Conduct a Security Risk Analysis (see below).

For information on how Open Dental Software, Inc. addresses HIPAA security guidelines and standards, see [HIPAA and Open Dental Business Practices](hipaaopendental.html).

## Security Risk Analysis

As part of the Security Rule, dental practices must conduct a security risk analysis, document it, and develop safeguards to protect ePHI.

**Resources:**

* Security Risk Assessment Tool provided by healthit.gov: <http://www.healthit.gov/providers-professionals/security-risk-assessment>
* Guidance on Risk Analysis: <https://www.hhs.gov/hipaa/for-professionals/security/guidance/guidance-risk-analysis/index.html>

## Business Associate Agreement

If your practice shares PHI with a third party (e.g. IT professionals, backup service, Dropbox) we recommend you enter into Business Associate Agreements. If you need more information, or examples of the forms that patients and business associates must sign, you can request information from the American Dental Association at [www.ada.org](http://www.ada.org).

If you will be sending PHI to Open Dental for any reason, please be sure to sign and date the Open Dental [Business Associate Agreement](../resources/Business%20Associate%20Agreement.pdf) and make a copy. Keep one for your records, and return one to us for our records. We do not sign alternate versions of Business Associate Agreements from customers or other third parties because we do not have the resources to review them. Our Business Associate Agreement was updated March 2014 and includes all Rule requirements. Please let us know if there is an issue with the document or if you require additional language that applies to our relationship (e.g. state specific requirements). We will not include language that does not apply to our relationship. For example, we will not include language agreeing to retain PHI for five years since we will not do so.

**I have submitted my company's Business Associate Agreement to Open Dental, and I have been told that Open Dental will not sign it. Why not?**

We provide a reasonable and compliant BAA. If you want us to add additional language to comply with law or to protect you, read the one we have and compare it with yours. Submit very specific requested changes to us and we will consider them, and if the change is reasonable, we will incorporate the changes into our published BAA.

We have thousands of customers. In order to review distinct BAAs from each customer, we would need a legal team to read and respond to discovered issues with thousands of customers each year. Note that my staff cannot give me legal advice, so this would be an external team or I would hire in-house counsel. This would mean we would raise our prices significantly, and it would not be constructive use of anyone's time.

Further, with many distinct BAAs, we might have distinct required responses and requirements for each customer, which is unreasonable because our security policies and response to a breach must be the same for every customer's data. Because we are a Business Associate of so many entities, we provide a BAA you can download and countersign at any time.

If your state has specific requirements for a BAA that are not included in ours, we will add those sections as needed.

**The ARRA sections 13405(d) and 13406 amend CFR Title 45 to respectively, limit the sale of PHI/medical records and to limit the use of patient information in marketing and fundraising. Why is this not addressed in the Open Dental BAA?**

This is addressed in the Open Dental BAA under Obligations and Activities, Section A, B and C.

**I think I need a BAA for my eRx (ePrescriber) that I use with Open Dental, how do I get that?**

You only need a BAA with companies that you contract with, not following a potentially endless chain of thousands of subcontractors. Because you are getting and paying for your service through Open Dental, it is instead Open Dental that has a BAA with each of our subcontractors. Likewise we do not have a BAA with each of their subcontractors. It would be impossible for each of our customers to have a unique BAA with each of our subcontractors, and we do not provide a way for you to do that. Instead, you print out, sign, and return the BAA with Open Dental. You are still protected because you have a BAA with Open Dental.

## Data

Open Dental may have an encrypted copy of your data. See: [Supplemental Backups](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7supplementalbackups.html).

## Additional Questions and Answers

**I have an external contractor who needs to use Open Dental regularly outside of my local network. How can I accomplish this?**

Follow HIPAA guidelines. We do not give advice on selecting contractors or assess the risk of allowing others access to business and patient data (PHI), However this is a common scenario and not materially different than a direct employee having access to your data. Do minimize access to data the contractor does not need and track the contractor's usage via the audit trail. Below are some suggestions to prevent direct access to the database:

1. Have the contractor access Open Dental via Middle Tier using a HTTPS connection with a Security Certificate.
2. In the contractor's Open Dental user profile, remove the permissions for User Query (to prevent access to user reporting) and Security Admin (so they do not have Admin privileges).
3. Set up a local OpenDentImages folder (A to Z) for the contractor that has limited data in it (e.g. update files but not scanned images). This may take some time to setup.

## Other Resources

* Security Rule Guidance Material: <https://www.hhs.gov/hipaa/for-professionals/security/guidance/index.html?language=es>
* Guide to Privacy and Security Health Information: <https://www.healthit.gov/sites/default/files/pdf/privacy/privacy-and-security-guide.pdf>
* [Authorized Representatives](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7authrep.html) (Patient Portal, Web Sched)