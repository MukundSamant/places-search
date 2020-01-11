Steps to run
1. Install Angular CLI. Instructions -> https://angular.io/cli.
2. From the project, run npm install.
3. Type ng serve to run locally.
4. Type ng test to test.

Design:
1. Listening to input value changes from search text field in app.component.ts.
2. Calling getPlaces method of places.service.ts(which uses venues/search of FourSquare API) 
   to fetch places list. 
3. Once obtained passing the list to places-list.component.ts component.
4. This also returns places from locations outside USA.

Bonus:
1. Fully Responsive using Flex layout.

Test Coverage:
1. Around 98%

