(function ($) {
 var
  stepOne = function () {
   if (null !== $('div[aria-label="Conversation actions"]')) {
    $('div[aria-label="Conversation actions"]').click();
    setTimeout(stepTwo, 200);
   } else {
    checkForShowOlder();
   }
  },
  stepTwo = function () {
   var elements = document.evaluate('//span[text()="Delete"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
   for (var i = 0; i < elements.snapshotLength; i++) {
    elements.snapshotItem(i).click();
   }
   setTimeout(stepThree, 1000);
  },
  stepThree = function () {
   var el = "//button[contains(text(),'Delete')]";
   var matchingElement = document.evaluate(el, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
   matchingElement.click();
   setTimeout(stepOne, 1000);
  },
  checkForShowOlder = function () {
   var el = "//a[contains(text(),'Show Older')]";
   var matchingElement = document.evaluate(el, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
   if(matchingElement) {
    matchingElement.click();
    setTimeout(stepOne, 2000);
   }
   else {
    console.log('All Messages has been deleted');
   }
  };

 console.log('Deleting all Facebook messages...');
 stepOne();
})(function (sel) {
 return document.querySelector(sel);
});