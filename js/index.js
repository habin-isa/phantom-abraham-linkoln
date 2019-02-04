function appCtrl ($scope) {
  $scope.bookmarks = [
    {
      title: 'Phantom',
      url: 'http://phantom.land',
      category: 'Creative Agency',
      likes: 2
    },
    {
      title: 'HIK',
      url: 'http://habin-isa.com',
      category: 'Art',
      likes: 1
    },
    {
      title: 'Github',
      url: 'http://github.com',
      category: 'News',
      likes: 10
    },
    {
      title: 'Google',
      url: 'http://google.com',
      category: 'Web Design',
      likes: 15
    },
    {
      title: 'Google',
      url: 'http://google.com',
      category: 'Web Design',
      likes: 15
    },
    {
      title: 'Google',
      url: 'http://google.com',
      category: 'Web Design',
      likes: 15
    }
  ];
    
  $scope.increment = function ($index) {
    $scope.likes++;
  };

  $scope.validUrl = function (str) {
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      if (regexp.test(str))
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  };
  
  $scope.addBookmark = function () {
    $scope.validUrl($scope.site_url);
	  $scope.bookmarks.push({
		  title: $scope.site_name,
		  url: $scope.site_url,
		  category: $scope.site_category,
      likes: 0
	  });
	  $scope.site_name = '';
	  $scope.site_url = '';
    $scope.site_category = '';
    window.location.href = "submission.html";
  },
    
  $scope.deleteBookmark = function (id) {
    var bookmark = $scope.bookmarks[id];
    $scope.bookmarks.splice(id, 1);
  }
}