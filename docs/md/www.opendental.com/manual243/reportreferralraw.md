Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Referral - Raw Report

Write simple SQL queries using fields in the Referral table with the Referral - Raw report.

In [Standard Reports](reportsstandard.html), in the Lists section, click **Referral - Raw**.
![](images/referralraw.png)

Available options are hard-coded and may not reflect all fields. For more complex queries, see [Custom Query Requests](https://opendentalsoft.com:1943/ODQueryRequest/QueryRequestForm.aspx).

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## SELECT Tab

![](images/reportRefRawSelect.png)

In the SELECT tab, users can choose which columns of data to include in the report (e.g., Address, Email, etc). This information is pulled directly from the Referral Table in Open Dental and most can be edited or added from the [Referral List](referralsetup.html). Most fields are self-explanatory. The following are fields that may need additional explanation.

* **IsHidden**: Referrals cannot be deleted. Indicates if the referral has been marked as hidden (e.g., is no longer in use).
* **Note**: *Notes* field of Edit Referral window. Does not display the *Display Notes (shows in Family module)* field.
* **ReferralNum**: Unique system-assigned number given to each referral entry. Cannot be edited. Change the Query Format to *Raw* to see the ReferralNum rather than the Referral Name when running the report.
* **Phone2**: *Other Phone* number entered in Edit Referral window.
* **Using TIN**: Indicate if referral is using TIN instead of SSN. False indicates SSN column (if shown) is marked as SSN. True indicates SSN column (if shown) marked as TIN.

Ctrl + click, click and drag, or shift + click to select multiple items.

**All**: Click to select all available fields.

**None**: Click to deselect all currently selected fields.

The selected fields are added to the statement at the bottom of the report window.

## WHERE Tab

In the WHERE tab, users can select Referral Table fields to limit report results. See the previous SELECT section for fields that may need additional explanation.

![](images/reportreferralrawWhere.png)

**Field Dropdown**: Choose a referral table field to limit the report results. Fields may not exactly match the report column name.

**Operator**:

* **LIKE**: Include results that are similar to the filter entered (e.g., results would include ReferralNum: 14, 140, 7142, and any other results that contain the combination of characters entered).
* **=**: Only includes results matching the statement exactly (e.g., results would only include ReferralNum: 14).
* **>**: Include all results greater than the statement entered (e.g., ReferralNum: 15 and above are included in results).
* **<**: Include all results less than the statement entered (e.g., ReferralNum: 13 and lower are included in results).
* **>=**: Include all results greater than or equal to the statement entered (e.g., ReferralNum: 14 and above are included in results).
* **<=**: Include all results less than or equal to the statement entered (e.g., ReferralNum: 14 and lower are included in results).
* **<>**: Include only results less than or greater than the statement entered (e.g., ReferralNum: 14 is excluded from the results, but 15 and above are included and 13 and lower are included).

**Text Box**: Select or enter the statement filter value.

**Add**: After setting WHERE statement criteria, click to add the statement to the WHERE statement list and the query. Multiple WHERE statements can be added to the report.

**Delete Row**: Select an existing WHERE statement from the list and click to remove from the list and query.

## Query

The bottom section of the Referral Report window reflects the query being written as SELECT rows and WHERE criteria are added.

![](images/reportRefRawQuery.png)

Click **OK** to run the query and view results in the [User Query](queryoverview.html) window.