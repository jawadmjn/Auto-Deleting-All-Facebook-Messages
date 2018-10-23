# Auto Delete All Facebook Messages

JavaScript utility that allows you to auto delete all your Facebook messages. Adds a feature to Facebook that should have already been added.

> !function(e){var t=function(){null!==e('div[aria-label="Conversation actions"]')?(e('div[aria-label="Conversation actions"]').click(),setTimeout(n,200)):o()},n=function(){for(var e=document.evaluate('//span[text()="Delete"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),t=0;t<e.snapshotLength;t++)e.snapshotItem(t).click();setTimeout(l,1e3)},l=function(){document.evaluate("//button[contains(text(),'Delete')]",document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue.click(),setTimeout(t,1e3)},o=function(){var e=document.evaluate("//a[contains(text(),'Show Older')]",document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;e?(e.click(),setTimeout(t,2e3)):console.log("All Messages has been deleted")};console.log("Deleting all Facebook messages..."),t()}(function(e){return document.querySelector(e)});

*The code above is just a minified version of the facebook_delete_message.js file


* * *

### Running it

You can run this code using your web browser's console. First navigate to your Facebook messages page and then press Control+Shift+i on your keyboard. This will open your developer tools once it opens if you do not see the console which should be at the bottom of the window press the Escape key on your keyboard. Now you should see the console now simply copy all the code from the gist and paste it into the console and hit enter.

After you've pasted the code into the console don't forget to press the Enter key on your keyboard to run the code. When it runs the console will say "Deleting all Facebook messages - By: Matthew Dunham" this tells you that it is working, and your messages should start deleting. When the script has finished deleting all your messages it will say "No more messages to delete" in the console.

You can stop the delete process at any time by closing your browser or simply refreshing the page or even just navigate away from your Facebook messages page. 


* * *


### Security Info

If you see a warning that says Stop in all red don't worry it's just a precaution to stop people from accidentally XSS attacking themselves. This code does not make any external calls, and only contains 29 lines of code. If you are not comfortable running things from your web console then don't! Always read and know what any code will do before running anything in console. Regardless if you're on Facebook or some other site.