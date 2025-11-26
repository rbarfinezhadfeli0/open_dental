Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

E-Claims Errors

When [Sending E-Claims](claimsend.html), some fields are optional within the e-claim format.

Some carriers require the field and others do not. This page details common error messages from a carrier due to data that is "required and missing" and how to enter the missing information. For more details, see [E-Claims Complexities](eclaimscomplexities.html).

**The clearinghouse states that the claim was rejected because Loop 2000B segment SBR element 03 is missing.**

On the [Insurance Plan](insplan.html) for the carrier, enter the Group Number for the carrier the claim was sent to and send the claim again.

**The clearinghouse states that the claim was rejected because Loop 2320 segment SBR element 03 is missing.**

On the Edit Insurance Plan window for the other carrier, enter the other plan's Group Number and send the claim again. For example, if submitting to the primary plan, the other carrier is the secondary carrier. If submitting to the secondary plan, the other carrier is the primary carrier. For a tertiary plan, the other plan is the secondary plan. For a fourth plan, the other insurance would be the tertiary, etc.