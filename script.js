var posting = new Vue({
    el: '#add',
    data:{
        ID:'2',
        NAME:'ad',
        AGE:'12',
        PHONE:'123123',
        SLALARY:'1234' 
    },
    methods: {
        vclickPost: function () {
            
            alert('you are Entering new employee')

            
            $.ajax({
                url: 'http://hassanhussain.com/ameer/add.php',
                type: 'POST',
                data: {
                    userId:posting.ID,
                    userName:posting.NAME,
                    userAge:posting.AGE,
                    userPhone:posting.PHONE,
                    userSalary:posting.SLALARY

                },
                success: function () {
                    alert('New Employee has been added')
                },
                error: function(){
                alert('something err.')
            }
            })
        }
    }

})



var geting = new Vue({
    el: '#get',
    data:{
        arr:[]
    },
    methods: {
        vclickGet: function () {
            
            
             $.ajax({
                url: 'http://hassanhussain.com/ameer/report.php',
                method: 'post',
                data:{
                     userId:1
                },

                success: function (result) {
                    geting.arr=result
                    console.log(result)
                    
                    
                },
                error: function(err){
                alert('something err:' + err)
                    
            }
            })

           
        }
    },
    created: function() {
        this.vclickGet()
    }

})





        function openNav() {
            document.getElementById("mySidenav").style.width = "300px";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }