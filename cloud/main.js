







Parse.serverURL = 'https://comerate2016.herokuapp.com/parse/';

var schedule = require('node-schedule');


var j = schedule.scheduleJob(' */1 * * * *', function(){
	
	
	 var trendingQ = new Parse.Query('_User');
	trendingQ.limit(10);
	var top10featured;
	trendingQ.descending( "TrendingIndicator");
	
	
	 trendingQ.find({
  success: function(results) {
 
  
 
var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
	     console.log("HOLAAAAAAAAAA");
   }
	  
	
    res.success('I passed on '+counter + ' users');
  
	  
	  var featured = Parse.Object.extend("Featured");
var featuredList = new featured();
var testarr;
	  testarr.push("hello");
featuredList.set("FeaturedTop", testarr);


featuredList.save(null, {
  success: function(featuredList) {
   console.log("akall");
    
  },
  error: function(featuredList, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
   console.log("SHU 3am Bi Sir");
  }
});
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
	
  console.log('The answer to life, the universe, and everything!');
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	userQuery.greaterThanOrEqualTo( "TrendingIndicator",0);
	
	
	 userQuery.find({
  success: function(results) {
 
  
 
var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    userData.set('TrendingIndicator',0);
    userData.save(null, { useMasterKey: true });
	   counter++;
    
     
   }
    res.success('I passed on '+counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
});

Parse.Cloud.define('resetTrendingIndicator', function(req, res) {
 
	
	
 
});

 


Parse.Cloud.define("sendWelcomeMail", function(request, response) {
  
	var api_key = 'key-10e82eb3489a68ed4f84dec523a73fdf';
var domain = 'socialiveapp.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
	
	console.log('Mailgun Skwastka');

var data = {
  from: 'Socialive <socialive@socialiveapp.com>',
  to: 'hajjarjoseph97@gmail.com',
  subject: 'Welcome to Socialive',
  text: 'Ahla w sahla'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
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
