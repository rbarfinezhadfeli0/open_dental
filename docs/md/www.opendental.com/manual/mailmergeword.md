Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Mail Merge in Word

These steps are provided as a courtesy as an alternative to [Letter](letterspatient.html) or [Sheets](sheets.html).

Note:

* Open Dental support technicians do not assist with Microsoft Mail Merges. We cannot walk users through these steps as it is not an Open Dental skill, but rather a Microsoft Office skill.
* The steps below are specific to Word version 1911. Please see [Microsoft Support](https://support.office.com/) for additional information or other versions. Other programs, such as Excel or Open Office, can also perform a Mail Merge, but the steps are different.
* Similar steps can be taken to do an email merge, which can be used to send mass emails.

If using Word and a mail merge is needed, there are a couple different choices. For a single letter, see [Letter Merge](lettermerge.html). If merging letters for multiple patients, either do a query and export the result, or link directly to the database.

## Query Export

1. In Open Dental, run the report for the data needed. Click **Export** and select the file location. The default is **C:\OpenDentalExports**.

   Note: For a list of patients with upcoming appointments and contact details, see [Query 1505](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx).
2. The report is saved as a text document. ![](images/WordDataSource.gif)
    The first row of the text file contains the names of the columns, and the fields are separated by tabs. ![](images/WordDataTextDoc.gif)
3. Open Word. Open an existing letter template, or a blank document.
4. Select the **Mailings** tab.
5. If mailing letters, click the **Start Mail Merge** dropdown, then **Step-by-Step Mail Merge Wizard ![](images/WordStepByStep.gif)**
    If emailing a letter, click the **E-Mail Messages** dropdown, then **Step-by-Step Mail Merge Wizard.**![](images/mailMergeEmail.png)
6. The Mail Merge Wizard goes through creating the letter step-by-step. See the Word manual for more information.

Emailing letters from Word uses the email setup from Outlook. This can also be done using Thunderbird. There is no confirmation that emails have been sent.

## Direct Link

Another way to use the data is to directly link to the database. This is normally not needed since the text export is simpler, but here are instructions in case it's needed.

Be sure to set up the ODBC Connection first. See [ODBC](odbc.html).

1. Open ODBC Data Sources on the computer to access the data.
2. Open a blank Word document and go to the **Mailings** tab.
3. Use the **Select Recipients** dropdown and select **Use an Existing List**. This opens the Select Data Source window.
4. Click **New Source**.
   ![](images/WordMailList.gif)
5. Select **Other/Advanced** and click Next.
   ![](images/WordDataConnect.gif)
6. Select the **Connection** tab.
7. Select OpenDental from the data source list and enter the MySQL username and password.
   ![](images/WordDataLink.gif)

   Note:
   * If not using a MySQL password, check Blank Password.
   * Click Test Connection to verify a good connection.
8. Select the table wanted from the list and then select the new data source created.

This creates a list which can be filtered, sorted, and selected from, just as in the text import section.