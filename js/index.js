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
      category: 'Code',
      likes: 10
    },
    {
      title: 'FR',
      url: 'https://www.ft.com/?edition=uk',
      category: 'News',
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

  $scope.showResult = false;
  $scope.newLink = '';
  $scope.urlError = false;
    
  $scope.increment = function ($index) {
    $scope.likes++;
  };

  $scope.hideResults = function () {
    $scope.showResult = false;
  };

  $scope.isValidUrl = function (str) {
    var a  = document.createElement('a');
    a.href = str;
    return (a.host && a.host != window.location.host);
  };

  $scope.addBookmark = function () {
    const name = $scope.site_name;
    const category = $scope.site_category;
    const url = $scope.site_url;
    if ($scope.isValidUrl(url) === true) {
      $scope.bookmarks.push({
        title: name.charAt(0).toUpperCase() + name.slice(1),
        url: url,
        category: category.charAt(0).toUpperCase() + category.slice(1),
        likes: 0
      });
      $scope.newLink = $scope.site_name;
      $scope.site_name = '';
      $scope.site_url = '';
      $scope.site_category = '';
      $scope.showResult = true;
      $scope.urlError = false;
    } else {
      return $scope.urlError = true;
    }
  };
    
  $scope.deleteBookmark = function (id) {
    var bookmark = $scope.bookmarks[id];
    $scope.bookmarks.splice(id, 1);
  };
};