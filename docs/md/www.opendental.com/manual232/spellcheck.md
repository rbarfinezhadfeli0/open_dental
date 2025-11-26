Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Spell Check

A custom dictionary can be created for words or abbreviations not commonly known.

In the [Main Menu](mainmenu.html), click Setup, Spell Check.

![](images/spellcheck.gif)

**Spell Check Enabled**: Enable spell check to underline misspelled words throughout the program.

Note: This preference will be disabled if *Text boxes use foreign language Input Method Editor (IME) composition* is checked in [Miscellaneous Setup](miscsetup.html).

**Add**: Enter a custom word or abbreviation, then click Add to add it to your dictionary. The custom dictionary is stored in the database and shared, so it is available on every computer in the office.

Double-click an existing word to edit it.
![](images/spellcheckeditword.gif)

**Delete**: Highlight an existing word and click to remove it from Custom Words.

A restart of Open Dental may be required for existing text (e.g., an existing Commlog) to reflect changes after updating Custom Words if the text has already been spell checked.

## Using Spell Check

[Text Boxes](rightclicktextboxes.html) throughout the program have spell checking built in. Words flagged as possible misspellings are underlined in red. When you see a red underlined word, right-click on it.

![](images/spellcheckpopup.gif)

Select the appropriate action:

* Replace the word with a Hunspell generated suggestion.
* Add the word to the custom dictionary.
* Disable Spell Check: Disables the Spell Check feature for all users. Re-enable Spell Check from Setup, Spell Check.

## Technical Details

We make use of the open source [Hunspell](http://hunspell.sourceforge.net/) spell checker and morphological analyzer.