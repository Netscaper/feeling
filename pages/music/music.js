var music=angular.module("music",[]);
var musicdata=[
    {
        img:'lhy-music_24.png',
        title:"恋人心",
        people:"1.2"
    },
    {
        img:'lhy-music_26.png',
        title:"以后的以后",
        people:"2.2"
    },
    {
        img:'lhy-music_28.png',
        title:"告白气球",
        people:"3.4"
    }
]
music.controller("music",function($scope){
    $scope.musicdata=musicdata;
})	