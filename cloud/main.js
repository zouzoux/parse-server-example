







Parse.serverURL = 'https://comerate2016.herokuapp.com/parse/';

var schedule = require('node-schedule');

const { AppCache } = require('parse-server/lib/cache');


var j = schedule.scheduleJob(' */1440 * * * *', function(){
	
	var topguys = [];
	
	 var trendingQ = new Parse.Query('_User');
	trendingQ.limit(10);
	var top10featured;
	trendingQ.descending( "TrendingIndicator");
	
	
	 trendingQ.find({
  success: function(resultsT) {
 
  
 
var counter = 0;
   for (var i = 0; i < resultsT.length; i++) {
  
    var userData = resultsT[i];
	 
	   var name = userData.get("username");
	  topguys.push(name);
	   console.log('wel esem houwe ' + topguys[i] + 'aw' + name);
   }
	  
	    var FeaturedList = Parse.Object.extend("Featured");  
var featuredList = new FeaturedList();  
    console.log('SAMIRRRR ');
	  console.log('Janaa ' + topguys[i]);
featuredList.set("FeaturedTop", topguys);
featuredList.save(null, {
    success: function(featuredList) {
        console.log("update succeed");
    }
});
	  
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
  
  
	
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
	

});

Parse.Cloud.define('resetTrendingIndicator', function(req, res) {
 

	
 
});

 
Parse.Cloud.define('multipleNoti',function(request,response)
{    
  

var myUsername = request.params.myUsername
	var selectedUsers = request.params.selectedUsers 
	var type = request.params.type 
	var description = request.params.description
	var postid = request.params.postid
	
	
	  console.log("Bitch you guessing " + selectedUsers.length);
	
	
	 for (var i = 0; i < selectedUsers.length; i++) {
  
		 	 var NotiList = Parse.Object.extend("Notifications");  
var notiList = new NotiList();  
notiList.set("Receiver", selectedUsers[i]);
		 notiList.set("Sender",myUsername);
		 notiList.set("Seen",false);
		 notiList.set("Type",type);
		  notiList.set("Description",description);
		  notiList.set("PostId",postid);
		 
		   console.log("Youzz right " + i);
		 
notiList.save(null, {
    success: function(featuredList) {
        console.log("update succeed");
    }
});
    
     
   }
  
});



Parse.Cloud.define('SeenCloud', function(req, res) {
  var userQuery = new Parse.Query('Notifications');
	
	
var myUsername = req.params.myUsername
	
	
	userQuery.equalTo('Receiver',myUsername);
	userQuery.equalTo('Seen',false);
	
	console.log('Username is ' + myUsername);
	 userQuery.find({
  success: function(results) {
 
  
 
var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
	   
	   
	console.log('Username anjad huwe  ' + myUsername);
    var userData = results[i];
    userData.set('Seen',true);
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


Parse.Cloud.define('SeenCloud', function(req, res) {
  var userQuery = new Parse.Query('Notifications');
	
	
var myUsername = req.params.myUsername
	
	
	userQuery.equalTo('Receiver',myUsername);
	userQuery.equalTo('Seen',false);
	
	console.log('Username is ' + myUsername);
	 userQuery.find({
  success: function(results) {
 
  
 
var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
	   
	   
	console.log('Username anjad huwe  ' + myUsername);
    var userData = results[i];
    userData.set('Seen',true);
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

Parse.Cloud.define('forgetNoti1', function(req, res) {
  var userQuery = new Parse.Query('Notifications');
	
	
var myUsername = req.params.myUsername
var selectedUser = req.params.selectedUser 
	
	
	userQuery.equalTo('Receiver',myUsername);
	userQuery.equalTo('Sender',selectedUser);
	
	console.log('Username is ' + myUsername);
	 userQuery.find({
  success: function(results) {
 
  
 
var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
	   
	   
	console.log('Username anjad huwe  ' + myUsername);
    var userData = results[i];
    userData.destroy({});
    
     
   }
    res.success('I passed on '+counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
	
 
});


Parse.Cloud.define('forgetNoti2', function(req, res) {
  var userQuery = new Parse.Query('Notifications');
	
	
var myUsername = req.params.myUsername
var selectedUser = req.params.selectedUser 
	
	
	userQuery.equalTo('Receiver',selectedUser);
	userQuery.equalTo('Sender',myUsername);
	
	console.log('Username is ' + myUsername);
	 userQuery.find({
  success: function(results) {
 
  
 
var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
	   
	   
	console.log('Username anjad huwe  ' + myUsername);
    var userData = results[i];
    userData.destroy({});
    
     
   }
    res.success('I passed on '+counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
	
 
});



Parse.Cloud.define("sendWelcomeMail", function(request, response) {
  
	var myEmail = request.params.myEmail
	
	
	const MailgunAdapter = AppCache.get('2016comrate')['userController']['adapter'];
 
// Invoke the send method with an options object 
MailgunAdapter.send({
  templateName: 'welcomeEmailAlert',
  // Optional override of your configuration's subject 
  subject: 'Welcome to Socialive!',
  // Optional override of the adapter's fromAddress 
  fromAddress: 'Socialive <socialive@socialiveapp.com>',
  recipient: myEmail,
  variables: {}
	// {{alert}} will be compiled to 'New posts' 
});
	 response.success('Done'); 
});






Parse.Cloud.define('resetBadge',function(request,response)
{    
 

var myUsername = request.params.myUsername
	
  var userQuery = new Parse.Query('_Installation');
  userQuery.equalTo('username',myUsername);
  
	
	
  console.log("The kingos is usename: " + myUsername);
	
	
	 userQuery.find({ useMasterKey: true }) // count() will use the master key to bypass ACLs
    .then(function(count) {
		   for (var i = 0; i < count.length; i++) {
  
    var userData = count[i];
    userData.set('badge',0);
    userData.save(null, { useMasterKey: true });
	
    
     
   }
      response.success(count);
    });
	
	
});



Parse.Cloud.define('incrementUserNum',function(request,response)
{    
 


	
  var userQuery = new Parse.Query('Numbers');
  userQuery.equalTo('objectId','v0zCjecHp6');
  
	
	
  
	
	
	 userQuery.find({ useMasterKey: true }) // count() will use the master key to bypass ACLs
    .then(function(count) {
		   for (var i = 0; i < count.length; i++) {
  
    var userData = count[i];
    userData.increment('usersNum');
    userData.save(null, { useMasterKey: true });
	
    
     
   }
      response.success(count);
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



Parse.Cloud.define('incrementBlockers',function(request,response)
{    
  

var myUsername = request.params.myUsername
	var selectedUser = request.params.selectedUser
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
   
           var blockers = userData.get('BlockedBy');
           blockers.push(myUsername);
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});

Parse.Cloud.define('incrementReporters',function(request,response)
{    
  

var myUsername = request.params.myUsername
	var selectedUser = request.params.selectedUser
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
   
           var blockers = userData.get('ReportedBy');
           blockers.push(myUsername);
    return userData.save(null, { useMasterKey: true });
  }).then((userDataAgain) => {
    console.log('after save');
    response.success('whatever you want to return');
  }, (error) => {
    console.log(error);
    response.error(error);
  });
});



Parse.Cloud.define('letHimForget',function(request,response)
{    
  

var myUsername = request.params.myUsername
	var selectedUser = request.params.selectedUser
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
         userData.set('NumberOfFollowing',userData.get('NumberOfFollowing') - 1);
         var following = userData.get('Following')
	var arrayLength = following.length;
	for (var i = 0; i < arrayLength; i++) {
	if(myUsername == following[i]){
	following.splice(i, 1)
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

Parse.Cloud.define('unBlock',function(request,response)
{    
  

var myUsername = request.params.myUsername
	var selectedUser = request.params.selectedUser
  var userQuery = new Parse.Query('_User');
  userQuery.equalTo('username',selectedUser);
  

  userQuery.first({ useMasterKey: true }).then((userData) => {
  console.log('before save');
  console.log(userData.get('username') + ' is a king!');
    
    
        
         var followers = userData.get('BlockedBy')
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

Parse.Cloud.define("multiplePush", function(request, response) {

  var selectedUsers = request.params.selectedUser
  var params = request.params;
  var data = params.data

 var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.containedIn('username', selectedUsers); // targeting iOS devices only
 


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
