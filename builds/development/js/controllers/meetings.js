myApp.controller('MeetingsController',
    function($scope, $firebaseArray) {

    var ref = new Firebase('https://angulardt.firebaseio.com/meetings');
    $scope.meetings = $firebaseArray(ref);
    $scope.addMeeting = function() {
        $scope.meetings.$add({
            name: $scope.meetingname,
            date: Firebase.ServerValue.TIMESTAMP
        }).then(function() {
            $scope.meetingname='';
        });
    }; //addmeeting

    $scope.deleteMeeting = function(key) {
        $scope.meetings.$remove(key);
    } //deletmeeting

}); //MeetingsController
