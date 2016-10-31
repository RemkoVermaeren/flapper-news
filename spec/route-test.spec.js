// npm install --save-dev request
// npm install -g jasmine-node
var request = require("request");
// Nu gebruiken we onze mongodb databank, maar deze is niet gemaakt om te testen > fictieve of mock databank gebruiken > Mockgooze

describe("router", function() {
  //test gaat wachtent tot done aangeroepen is indien we done meegeven als parameter
  it("test", function(done) {
      request.get("http://localhost:3000/posts", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        console.log(body);
        done();
      });
  });
});
