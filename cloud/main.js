







Parse.serverURL = 'https://comerate2016.herokuapp.com/parse/';

var client = require('./myMailModule-1.0.0');
client.initialize('socialiveapp.com', 'key-10e82eb3489a68ed4f84dec523a73fdf');


Parse.Cloud.define("sendWelcomeMail", function(request, response) {
  client.sendEmail({
    to: "hajjarjoseph97@gmail.com",
    from: "socialive@socialiveapp.com",
    subject: "Hello from Socialive!",
    text: "Hello Joseph we would like to welcome you to our team!"
  }).then(function(httpResponse) {
    response.success("Email sent!");
  }, function(httpResponse) {
    console.error(httpResponse);
    response.error("Uh oh, something went wrong");
  });
});

Parse.Cloud.define('incrementFollowers',function(request,response)
{    
  

var myUsername = request.params.myUsername
	var selectedUser = request.params.selectedUser
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
         userData.set('NumberOfFollowers',userData.get('NumberOfFollowers') + 1);
           var followers = userData.get('Followers');
           followers.push(myUsername);
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});
Parse.Cloud.define('decrementFollowers',function(request,response)
{    
  

var myUsername = request.params.myUsername
	var selectedUser = request.params.selectedUser
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
         userData.set('NumberOfFollowers',userData.get('NumberOfFollowers') - 1);
         var followers = userData.get('Followers')
	var arrayLength = followers.length;
	for (var i = 0; i < arrayLength; i++) {
	if(myUsername == followers[i]){
	followers.splice(i, 1)
		}
								//Do something
			}
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});
Parse.Cloud.define('decrementFollowers',function(request,response)
{    
  

var myUsername = request.params.myUsername
	var selectedUser = request.params.selectedUser
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
         userData.set('NumberOfFollowers',userData.get('NumberOfFollowers') - 1);
         var followers = userData.get('Followers')
	var arrayLength = followers.length;
	for (var i = 0; i < arrayLength; i++) {
	if(myUsername == followers[i]){
	followers.splice(i, 1)
		}
								//Do something
			}
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});
Parse.Cloud.define('incrementPost',function(request,response)
{    
  

var myUsername = request.params.myUsername
	
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',myUsername);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
         userData.set('NumberOfPosts',userData.get('NumberOfPosts') + 1);
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});

Parse.Cloud.define('incrementHearts',function(request,response)
{    
  

var myUsername = request.params.myUsername
var selectedUser = request.params.selectedUser
	
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
         userData.set('HeartsReceived',userData.get('HeartsReceived') + 1);
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});




Parse.Cloud.define('sendLove',function(request,response)
{    
  


	
  var userQuery = new Parse.Query('_User');
 
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
       
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});



Parse.Cloud.define('incrementCrush',function(request,response)
{    
  

var myUsername = request.params.myUsername
var selectedUser = request.params.selectedUser
	
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
          var crushBy = userData.get('CrushBy');
           crushBy.push(myUsername);
  
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});

Parse.Cloud.define('decrementCrush',function(request,response)
{    
  

var myUsername = request.params.myUsername
var selectedUser = request.params.selectedUser
	
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
          var crushBy = userData.get('CrushBy');
           
           	var arrayLength = crushBy.length;
	for (var i = 0; i < arrayLength; i++) {
	if(myUsername == crushBy[i]){
	crushBy.splice(i, 1)
		}
								//Do something
			}
  
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});
Parse.Cloud.define('allTimeRatingAppend',function(request,response)
{    
  

var rating = request.params.rating
var selectedUser = request.params.selectedUser
	
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
          var addRating = userData.get('AllPostsRatings');
           
         addRating.push(rating);
  
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});


Parse.Cloud.define('appendSearchesBy',function(request,response)
{    
  

var myUsername = request.params.myUsername
var selectedUser = request.params.selectedUser
	
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
          var trends = userData.get('TodaySearches');
           
         trends.push(myUsername);
  
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});

Parse.Cloud.define('appendSearchesDays',function(request,response)
{    
  

var activityDays = request.params.activityDays
var selectedUser = request.params.selectedUser
	
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
     userData.set('SearchesDays',activityDays);
     
  
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});

Parse.Cloud.define('appendSearchesMonths',function(request,response)
{    
  

var activityMonths = request.params.activityMonths
var selectedUser = request.params.selectedUser
	
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
     userData.set('SearchesMonths',activityMonths);
   
  
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});
Parse.Cloud.define('updateTrendingIndicator',function(request,response)
{    
  

var trendingIndicator = request.params.trendingIndicator
var selectedUser = request.params.selectedUser
	
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
      userData.set('TrendingIndicator',trendingIndicator);
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});


Parse.Cloud.define('appendSearchesYears',function(request,response)
{    
  

var activityYears = request.params.activityYears
var selectedUser = request.params.selectedUser
	
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
       userData.set('SearchesYears',activityYears);
       
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});


Parse.Cloud.define("iosPush", function(request, response) {

  var selectedUser = request.params.selectedUser
  var params = request.params;
  var data = params.data

 var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo('username', selectedUser); // targeting iOS devices only
 


  Parse.Push.send({
    where: pushQuery, // Set our Installation query
    data: data
  }, { success: function() {
      console.log("#### PUSH OK");
  }, error: function(error) {
      console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});

  response.success('success');
});


Parse.Cloud.define("iosPush", function(request, response) {

  var selectedUser = request.params.selectedUser
  var params = request.params;
  var data = params.data

 var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo('username', selectedUser); // targeting iOS devices only
 


  Parse.Push.send({
    where: pushQuery, // Set our Installation query
    data: data
  }, { success: function() {
      console.log("#### PUSH OK");
  }, error: function(error) {
      console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});

  response.success('success');
});


Parse.Cloud.define('fixedInstall',function(request,response)
{    
  

var myUsername = request.params.myUsername
var deviceToken = request.params.deviceToken
	
  var userQuery = new Parse.Query(Parse.Installation);
  userQuery.equalTo('deviceToken',deviceToken);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');

    
    
         userData.set('username',myUsername);
        
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});
