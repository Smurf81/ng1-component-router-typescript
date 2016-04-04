export class Home {
    public input:string;
    public scope:any;
    
    /*@ngInject*/
    public constructor($scope){
        this.scope = $scope;
    }
    
    public $onInit(){
        this.input = 'test';
        
        this.scope.$watch(()=> this.input,(o,n)=>{
            console.log(n);
        });
    }
    
    public $onChanges(obj){
        if(obj.input){
            console.log(obj.input);
        }
    }
}

angular.module('home',[]).component('home',{
   controller:Home,
   templateUrl:'app/home/home.html'
});