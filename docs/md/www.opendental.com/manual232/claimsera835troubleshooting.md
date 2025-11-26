Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

ERA Troubleshooting

The information provided below is for [ERAs](claimsera835.html) troubleshooting.

Note: The first step in any troubleshooting is to update to the latest stable version of Open Dental. For information on initial setup, see [ERA Workflow](era835workflow.html).

**After receiving a claim, the X is not showing in the Recd column, or the claim cannot be processed in the ERA window.**

Highlight the problematic claim and click the *Detach* button, then process the ERA outside of the ERA window as a bulk check (see ERA Workflow, Detaching a Claim for full steps).

**After entering payments, patient accounts show a credit.**

The plan type is not set to a PPO Plan Type. An in-network insurance plan must be set to PPO Percentage or PPO Fixed Benefit for write-offs to calculate correctly. See [PPO Insurance Plan](planppo.html) or [PPO Fixed Benefit Insurance Plan](planppofixed.html). If using an out-of-network plan (category percentage) you may need to manually zero out write-offs on procedures.

**How do I manually download reports?**

1. Contact your clearinghouse to obtain ERA files. The files must be in the specified 835 format to work.
2. Verify the *Report Path* set in your [Clearinghouses](clearinghouses.html).
3. Copy and paste reports to the designated *Report Path* or download reports directly into path.
4. In Open Dental, go to the Manage Module, [Send Claims](claimsend.html). This will automatically retrieve the downloaded reports.

**When processing an ERA, write-offs for supplemental payments are not posting.**

If write-offs were not posted to the initial claim payment and need to be posted to the supplemental, this must be done manually. When manually processing an ERA enter the write-off amount in the Verify and Enter Payment window. If the ERA was auto-processed, return to the [Claim](claimedit.html) to enter the write-off.

**I have a duplicate ERA.**

Delete the duplicate ERA: Double-click the duplicate and click **Delete**.

Note: This can happen when the clearinghouse does not change the download flag for the ERA. It is usually easier to delete the duplicates, but you can contact your clearinghouse if it becomes problematic.

**When clicking Send Claims, I receive error: "Error retrieving. Era request unsuccessful. Error message received directly from ClaimConnect: 150. Service Not Contracted."**

This means you are not signed up for the ERA download service with [ClaimConnect](eclaimsclaimconnect.html). Contact ClaimConnect to sign up.

ClaimConnect Note: Once ERAs are downloaded they are marked processed on the ClaimConnect website. To mark an ERA as unprocessed (e.g., if there is an error), do so on the ClaimConnect website.

**Insurance sent back different code than what was billed (e.g., FMX instead of Pano/BW).**

Open Dental will post payment as total. You can leave this as-is, or split payment between completed procedures. See [Process ERA](eraprocess.html) for additional information.

Logic: Sometimes EOBs do not itemize payments by procedure. In these cases, paid amounts are assigned to the Total Payment amount. If procedure payments are known (itemized), then those payments will be subtracted from the Total Payment amount, and amounts are indicated in each procedure row. When all procedures are itemized, and there are no claim adjustments, there will be no Total Payment entry because it is unnecessary.

**Why won't some of my ERAs download?**

Common reasons certain ERAs won't download:

* The ERA or ERA List was viewed on the clearinghouse's website prior to it being downloaded in Open Dental. Viewing the ERA on the clearinghouse's website will flag the ERA as processed and not available for download.
* The ERA was not downloaded into Open Dental with in the clearinghouse time limit. This is typically 7 days. If you need Open Dental to be able to download ERAs from a specific date range, contact your clearinghouse and request they make that date range available for download again. If you are set up for automatic downloads of ERAs, check your [Clearinghouse Settings](clearinghouses.html) to make sure it is working.

**I need to get ERAs for a carrier that is not contracted with a clearinghouse that provides ERAs in the standard 835 format to be used by my Open Dental program. What can I do?**

If the payer can provide you with the ERA file (835) it can be manually downloaded into the clearinghouse report path, then processed as usual. If not, you must use paper or other way of getting the EOB. Currently only the clearinghouses listed on the ERA Workflow page are able to provide ERA 835s to you. Keep in mind that most processors are not willing to do 835s only, they also want you to file all of your claims with them to provide this service.

**Primary and Secondary payment from the same insurance is included on the same ERA and is attaching only to the primary claim (Known issue with GEHA and CIGNA flex spending).**

If a carrier responds with a primary and secondary payment with the same claimID after a primary claim is sent, the workaround in Open Dental is to manually detach the secondary payment from the primary claim and attach it to the correct secondary claim before finalizing the ERA.

**Alert: A matching claim was found, but the patient name the carrier sent does not match the patient on the claim.**

This warning lets the user know a matching claim has been found, but the patient name does not match. If the claim match is correct, the user can proceed with processing the ERA.

**Failed to process the following files due to permission issues or malformed data.**

[Update](update.html) to the latest stable version of Open Dental.

**The [ERAs](claimsera835.html) summary does not match the same patient name or patient count as the [ERA](era.html) breakdown.**

Run the [Database Maintenance](databasemaintenance.html) method *Etrans835MultipleForEtrans*.

**Failed to move the following files to archive folder due to permission issues or duplicate file names.**

You may have duplicate ERAs already in your Reports folder. Move any duplicates to the Archived folder.