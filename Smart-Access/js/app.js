
/*
 * Developed by Ajmal Muhammad P
 * Contact me @ ajumalp@gmail.com
 * https://owner.erratums.com
 * Date created: 19-Apr-2020
 */

window.myApp = {};

document.addEventListener('init', function (event) {
   var page = event.target;

   // Each page calls its own initialization controller.

   if (page.hasAttribute('eClassName')) {
      var varClassType = page.getAttribute('eClassName');

      var varClass = null;
      switch (varClassType) {
         case "DeviceController":
            varClass = myApp.controllers.devices;
            break;
         case "GadgetsController":
            varClass = myApp.controllers.gadgets;
            break;
      }

      if (varClass != null) {
         varClass[page.id](page);
      } else {
         throw new Error('Invalid Class Reference');
      }
   } else if (myApp.controllers.hasOwnProperty(page.id)) {
      myApp.controllers[page.id](page);
   }
});