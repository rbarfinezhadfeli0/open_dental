Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Mail Merge in Word

These steps are provided as a courtesy as an alternative to [Letter](letterspatient.html) or [Sheets](sheets.html).

Note:

* Open Dental support technicians do not assist with Microsoft Mail Merges. We cannot walk you through these steps as it is not an Open Dental skill, but rather a Microsoft Office skill.
* The steps below are specific to Word version 1911. Please see [Microsoft Support](https://support.office.com/) for additional information or other versions. Other programs, such as Excel or Open Office, can also perform a Mail Merge, but the steps are different.
* Similar steps can be taken to do an email merge, which can be used to send mass emails.

If you use Word and you need to do a mail merge, you have some different choices. For a single letter, see [Letter Merge](lettermerge.html). But if you are merging letters for multiple patients then you can either do a query and export the result, or you can link directly to the database.

## Query Export

1. In Open Dental, run the report for the data you need. Click **Export** and select the file location. The default is **C:\OpenDentalExports**.

   Note: For a list of patients with upcoming appointments and contact details, see [Query 1505](https://opendentalsoft.com:1943/ODQueryList/QueryList.aspx).
2. The report will be saved as a text document. ![](images/WordDataSource.gif)
    The first row of the text file will contain the names of the columns, and the fields are separated by tabs. ![](images/WordDataTextDoc.gif)
3. Open Word. You can open an existing letter template, or a blank document.
4. Select the **Mailings** tab.
5. If mailing letters, click the **Start Mail Merge** dropdown, then **Step-by-Step Mail Merge Wizard ![](images/WordStepByStep.gif)**
    If emailing a letter, click the **E-Mail Messages** dropdown, then **Step-by-Step Mail Merge Wizard.**![](images/mailMergeEmail.png)
6. The Mail Merge Wizard will take you through creating the letter step-by-step. See the Word manual for more information.

Emailing letters from Word will use your email setup from Outlook. This can also be done using Thunderbird. You will not get a confirmation that emails have been sent.

## Direct Link

Another way to use the data is to directly link to the database. You would not normally need to do this since the text export is simpler, but here are instructions in case you need to.

Be sure to set up your ODBC Connection first. See [ODBC](odbc.html).

1. Open ODBC Data Sources on the computer where you want to access the data.
2. Open a blank Word document and go to the **Mailings** tab.
3. Use the **Select Recipients** dropdown and select **Use an Existing List**. This will open the Select Data Source window.
4. Click **New Source**.
   ![](images/WordMailList.gif)
5. Select **Other/Advanced** and click Next.
   ![](images/WordDataConnect.gif)
6. Select the **Connection** tab.
7. Select OpenDental from the data source list and enter the MySQL username and password.
   ![](images/WordDataLink.gif)

   Note:
   * If you are not using a MySQL password, check Blank Password.
   * You can click Test Connection to verify that you have a good connection.
8. Select the table you want from the list and then select the new data source you have created.

You will now have a list which you can further filter, sort, and select from, just as in the text import section.