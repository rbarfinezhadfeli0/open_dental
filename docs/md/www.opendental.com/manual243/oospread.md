Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

OpenOffice.org Spreadsheet

These steps are provided as a courtesy. Open Dental support technicians do not assist with Open Office Form Spreadsheets.

Users have a couple of options for using data in an [OpenOffice.org](http://www.openoffice.org/) spreadsheet, the Free alternative to Word/Excel. Users can either perform [User Query](queryoverview.html) and export the result, or link directly to the database.

The instructions provided may be for a different version of OpenOffice than in use by your office, so steps may differ depending on the version of OpenOffice.

## Query Export

Users can do a query from within Open Dental and export the resulting table. It will normally be saved as a text file in the OpenDentalExports folder on the local **C:\** drive. The first row of the text file will contain the names of the columns, and the fields are separated by tabs. This makes it very easy to open in OpenOffice.org. First, open a new Text Document. Select Tools then Data Sources.

![](images/ooDataSource.gif)

Click **New Data Source** at the top and name the data source. Set the type to *Text* Click Next.

![](images/ooDataSourcePath.gif)

Select the OpenDentalExports folder (or other folder the query text file has been saved) as the *Path to Text Files*using the **Browse** button to the right. Change the field separator type to *{Tab}*. Users can also select which tables (files) they want to be made available from the ones on the list.

Click **Next** to proceed with final steps and saving the database.

## Direct Link

Another way to use the data is to directly link to the database. Users would not normally need to do this since the text export is simpler, but here are instructions if needed. First, set up the ODBC data source on the computer where the data is accessed. Then, open a new Text Document and the Data Sources as shown above.

This time, select the database type as ODBC. Then use the search button at the right and select Open Dental from the list.

## Inserting Data into the Spreadsheet

If opening a text file, select File and Open.

![](images/ooOpenTextFile.gif)

First, change the file type to *Text CSV*. Then select the file to open and click **Open**.

Another alternative for either text file or database link is to view the data sources as shown below by selecting View then Data Sources, or pressing F4.

![](images/ooSpreadsheet.png)

The top of the window shows text file and ODBC data sources, which are browsable. Click a table to preview data. The bottom of the window is the original spreadsheet.

To move data from the data source table to the spreadsheet, select the top-left blank cell of the table, this will select all cells of data, and drag to the spreadsheet below. Users can now manipulate the data from the spreadsheet.