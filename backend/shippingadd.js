let app=angular.module("myApp",[]);
app.controller('shipadd',function($scope,$http){
    console.log("inside controller");
    $scope.submit=function(){
        if($scope.name && $scope.email && $scope.mobile && $scope.pincode && $scope.houseno && $scope.loaclity && $scope.landmark && $scope.city && $scope.State)
        {
            console.log("inside submit");
            let data={
                //"SellerName":$scope.Sellername,
                
                "Name":$scope.name,
                "Email":$scope.email,
                "PhoneNo":$scope.mobile,
                "PinCode":$scope.pincode,
                "HouseNo":$scope.houseno,
                "Loaclity":$scope.loaclity,
                "Landmark":$scope.landmark,
                "City":$scope.city,
                "State":$scope.State,
                "ProductName":1

            };
            console.log(data);
            alert("Product Purchased");
            $http.post("http://localhost:3000/shipdetails",data).then(function(response){
                console.log("data request sent");
            });
            $windows.location.href="thankyou.html"
        }
        else
        {
            alert("Input all Fields");
        }
    }
});