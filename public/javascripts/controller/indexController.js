app.controller('indexController', ['$scope', 'indexFactory', ($scope, indexFactory)=>{
   
    $scope.init = () =>{
        const username = prompt('please enter username');

        if(username)
            initSocket(username);
        else
            return false;
    };

    function initSocket(username){

        const connecionOptions = {
            reconnectionAttemts: 3,
            reconnectionDelay: 600
        };
    
        indexFactory.connectSocket('http://localhost:3001', connecionOptions)
        .then((socket)=>{
            console.log('bağlantı gerçekleşti', socket);
        }).catch((err)=>{
            console.log(err);
        });
    }  
}]);
