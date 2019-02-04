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
    }
  ];
    
  $scope.increment = function ($index) {
    $scope.likes++;
   };
  
  $scope.addBookmark = function () {
	  $scope.bookmarks.push({
		  title: $scope.site_name,
		  url: $scope.site_url,
		  category: $scope.site_category,
      likes: 0
	  });
	  $scope.site_name = '';
	  $scope.site_url = '';
	  $scope.site_category = '';
  },
    
  $scope.deleteBookmark = function (id) {
    var bookmark = $scope.bookmarks[id];
    $scope.bookmarks.splice(id, 1);
  }
}