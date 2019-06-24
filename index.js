(function() {

    var type = [0, 1, 2, 3, 4, 5, 6];  // 0：全部  1：最近7天  2：最近1个月  3：最近3个月 4：最近半年 5：最近1年 6：最近5年
    var amonth = ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"];
    var realType;
        realType = type[0];
    var timelineBottom = 0; //时间轴底部的横线长度;
    var events = []; //每个时间轴上的时间点 数组对象  对象属性有年月日 以及发生的事件

    var gap = [ , 80, 30, 60, 120, 80, 60]    //一格与一格的间距    

    function init() {
        
        //根据上方选择按钮选择时间轴的标度
        switch (realType) {
            case 0:
                typeZero();
                break;
            case 1:
                typeOne();
                break;
            case 2:
                typeTwo();
                break;
            case 3:
                typeThree();
                break;   
            case 4:
                typeFour();
                break;
            case 5:
                typeFive();
                break;
            case 6: 
                typeSix();
                break;            
            default:
                break;
        }

        function typeZero() {
   
        }

        function typeOne() {

            clearAll();

            var days = [];
            var index = 0;
            var realGap = gap[realType];

            //获取前七天的日期对象
            // 对象两个属性  month  day  year
            for (var i = 0; i < 8; i++) {
                days[i] = getBeforeDate(7 - i);  
            }
            
            var timeline = document.getElementById("timeline");
            var html = "";
            var timelinejq = $('#timeline');


            //生成日期竖条
            for (var a = 0; a < days.length; a++) {

                index = a * (realGap + 1) + "px";
          
                html += (
                    '<div class="day" style="left:'+index+'">'+
                        '<div class="day-info">'+
                            '<p>'+days[a].month+'月</p>'+
                            '<p>'+days[a].day+'</p>'+
                        '</div>'+
                    '</div>'

                );
            }

            timelinejq.append(html);

            timelineBottom = (parseInt(index) + 1) + "px"
            timeline.style.width = timelineBottom;

            //append时间点对象

            var realEvents = []; //符合该时间轴的时间对象
            
            //筛选时间对象
            for ( let i of events) {
                if (events[i].year >= days[i].year && events[i].year <= days[days.length - 1]) {
                    if (events[i].month >= days[i].month && events[days.length - 1]) {
                        realEvents.push(events[i]);
                    }
                }
            }


            var eventPoint = "";

            for ( let x of realEvents) {
                
                eventPoint = (
                    '<div class = "dis-container">' + 
                        '<div class = "dis">' +
                            '<div class = "dis-info">' +
                                '<a href = #' + realEvents.event + '</a>' +
                            '</div>' +
                        '</div>' +
                    '</div>'
                    );


            }

            timelinejq.append(eventPoint);
      
        }

        function typeTwo() {

            clearAll();

            var days = [];
            var index = 0;
            var realGap = gap[realType];
            
            //获取前31天的日期对象
            // 对象3个属性  month  day  year
            for (var i = 0; i < 32; i++) {
                days[i] = getBeforeDate(31 - i);  
            }

            var timeline = document.getElementById("timeline");
            var html = "";
            var timelinejq = $('#timeline');


            //生成日期竖条
            for (var a = 0; a < days.length; a++) {

                if( days[a].day == 1) {
                    
                    html += (
                        '<div class="month" style="left:'+ index +'px">'+
                            '<div class="month-info">'+
                                '<p>'+ days[a].month +'月</p>'+
                                '<p>'+ days[a].day +'</p>'+
                            '</div>'+
                        '</div>'
                    );

                    index += (realGap + 2);
                   

                } else {

                    html += (
                        '<div class="day" style="left:'+ index +'px">'+
                            '<div class="day-info">'+
                                '<p>'+days[a].month+'月</p>'+
                                '<p>'+days[a].day+'</p>'+
                            '</div>'+
                        '</div>'
    
                    );

                    index += (realGap + 1);
                    
                }

          
                
            }

            timelinejq.append(html);

            if(days[31].day == 1) {
                timelineBottom = (index + 1 - realGap) + "px";
            } else {
                timelineBottom = (index - realGap) + "px";
            }

            timeline.style.width = timelineBottom;

        }

        function typeThree() {

            clearAll();

            var days = [];
            var index = 0
            var realGap = gap[realType];
            
            //获取前90天的日期对象
            // 对象3个属性  month  day  year
            for (var i = 0; i < 15; i++) {
                days[i] = getBeforeDate(7 * (14 - i));
                
            }

            var timeline = document.getElementById("timeline");
            var html = "";
            var timelinejq = $('#timeline');


            //生成日期竖条
            for (var a = 0; a < days.length; a++) {

                if( days[a].day == 1) {
                    
                    html += (
                        '<div class="month" style="left:'+ index +'px">'+
                            '<div class="month-info">'+
                                '<p>'+ days[a].month +'月</p>'+
                                '<p>'+ days[a].day +'</p>'+
                            '</div>'+
                        '</div>'
                    );

                    index += (realGap + 2);
                   

                } else {

                    html += (
                        '<div class="day" style="left:'+ index +'px">'+
                            '<div class="day-info">'+
                                '<p>'+days[a].month+'月</p>'+
                                '<p>'+days[a].day+'</p>'+
                            '</div>'+
                        '</div>'
    
                    );

                    index += (realGap + 1);
                    
                }

          
                
            }

            timelinejq.append(html);

            if(days[14].day == 1) {
                timelineBottom = (index + 1 - realGap) + "px";
            } else {
                timelineBottom = (index - realGap) + "px";
            }

            timeline.style.width = timelineBottom;

        }

        function typeFour() {

            clearAll();

            var index = 0
            var realGap = gap[realType];
            
            //获取前6个月的日期对象
            // 对象2个属性  month   year
            var months = getMonth(7);
            var timeline = document.getElementById("timeline");
            var html = "";
            var timelinejq = $('#timeline');


            //生成日期竖条
            for (var a = 0; a < months.length; a++) {

                if( months[a].month == 1) {
                    
                    html += (
                        '<div class="year" style="left:'+ index +'px">'+
                            '<div class="year-info">'+
                                '<p class="year-bold">'+ months[a].year +'</P>'+
                                '<p>'+ months[a].month +'月</p>'+
                            '</div>'+
                        '</div>'
                    );
    
                    index += (realGap + 3);
                    

                } else {

                    html += (
                        '<div class="month" style="left:'+ index +'px">'+
                            '<div class="month-info">'+
                                '<p>'+ months[a].year+'</p>'+
                                '<p>'+ months[a].month+'月</p>'+
                            '</div>'+
                        '</div>'
    
                    );

                    index += (realGap + 2);
                    
                }

          
                
            }

            timelinejq.append(html);

            if(months[7].month == 1) {
                timelineBottom = (index + 1 - realGap) + "px";
            } else {
                timelineBottom = (index - realGap) + "px";
            }

            timeline.style.width = timelineBottom;

        }

        function typeFive() {

            clearAll();

            var index = 0
            var realGap = gap[realType];
            
            //获取前12个月的日期对象
            // 对象2个属性  month   year
            var months = getMonth(13);
            var timeline = document.getElementById("timeline");
            var html = "";
            var timelinejq = $('#timeline');


            //生成日期竖条
            for (var a = 0; a < months.length; a++) {

                if( months[a].month == 1) {
                    
                    html += (
                        '<div class="year" style="left:'+ index +'px">'+
                            '<div class="year-info">'+
                                '<p class="year-bold">'+ months[a].year +'</P>'+
                                '<p>'+ months[a].month +'月</p>'+
                            '</div>'+
                        '</div>'
                    );
    
                    index += (realGap + 3);
                    

                } else {

                    html += (
                        '<div class="month" style="left:'+ index +'px">'+
                            '<div class="month-info">'+
                                '<p>'+ months[a].year+'</p>'+
                                '<p>'+ months[a].month+'月</p>'+
                            '</div>'+
                        '</div>'
    
                    );

                    index += (realGap + 2);
                    
                }

          
                
            }

            timelinejq.append(html);

            if(months[13].month == 1) {
                timelineBottom = (index + 1 - realGap) + "px";
            } else {
                timelineBottom = (index - realGap) + "px";
            }

            timeline.style.width = timelineBottom;


        }

        function typeSix() {

            clearAll();

            var months = [];
            var index = 0
            var realGap = gap[realType];
            
            //获取5年 每4个月的日期对象
            // 对象2个属性  month   year
            for (var i = 0; i< 16; i++) {
                months[i] = getMonthTwo( 4 * i);
            }

            months = months.reverse();
            
            var timeline = document.getElementById("timeline");
            var html = "";
            var timelinejq = $('#timeline');


            //生成日期竖条
            for (var a = 0; a < months.length; a++) {

                if( months[a].month == 1) {
                    
                    html += (
                        '<div class="year" style="left:'+ index +'px">'+
                            '<div class="year-info">'+
                                '<p class="year-bold">'+ months[a].year +'</P>'+
                                '<p>'+ months[a].month +'月</p>'+
                            '</div>'+
                        '</div>'
                    );
    
                    index += (realGap + 3);
                    

                } else {

                    html += (
                        '<div class="month" style="left:'+ index +'px">'+
                            '<div class="month-info">'+
                                '<p>'+ months[a].year+'</p>'+
                                '<p>'+ months[a].month+'月</p>'+
                            '</div>'+
                        '</div>'
    
                    );

                    index += (realGap + 2);
                    
                }

          
                
            }

            timelinejq.append(html);

            if(months[7].month == 1) {
                timelineBottom = (index + 1 - realGap) + "px";
            } else {
                timelineBottom = (index - realGap) + "px";
            }

            timeline.style.width = timelineBottom;
        } 
 
    }

    init();

    //圆点与其所属可隐藏信息框的隐藏与出现
    function HideAndShow() {

        var disInfos = document.getElementsByClassName("dis-info"),
            dises    = document.getElementsByClassName("dis");

        for (var z = 0; z < dises.length; z++) {
            (function() {
                dises[z].addEventListener("mouseover",function() {
                    disInfos[z-1].style.display = "block";
                })
            })();
            
        }

        for (var i = 0; i < disInfos.length; i++) {
            (function() {
                disInfos[i].addEventListener("mouseout",function() {
                    this.style.display = "none";
                })
            })();
            
        }


    }

    HideAndShow();

    // 获取当前日期 前n天对象的方法
    function getBeforeDate(n){
        var n = n;
        var d = new Date();
        
        var year = d.getFullYear();
        var mon=d.getMonth()+1;
        var day=d.getDate();
        if (day <= n) {
            if (mon>1) {
                mon=mon-1;
            }else {
                year = year-1;
                mon = 12;
                }
            }
        d.setDate(d.getDate()-n);
        year = d.getFullYear();
        mon=d.getMonth()+1;
        day=d.getDate();
         
        return {
            month: mon,
            day: day,
            year: year
        };
        
    }


    //上方天数选择
    function navSelect() {
        var lis = $('.top-nav a');
        lis.each(function (ind, item) {
            item.addEventListener("click", function() {
                $('.top-nav a.selected').removeClass('selected');
                $(item).addClass('selected');
                realType = type[ind];
                init();

                //调用一个初始化时间轴的方法
            })
        })

    }
    
    navSelect();


    //清空timeline中内容的方法

    function clearAll() {
        var timeline = document.getElementById("timeline");
        timeline.innerHTML = "";
    }



    //获取当前月及n个月的方法
    function getMonth(n) {
        var n = n + 1;
        var dataArr = [];
        var data = new Date();
        var year = data.getFullYear();
        data.setMonth(data.getMonth()+2, 1)
        for (var i = 0; i < n; i++) {
            data.setMonth(data.getMonth() - 1);
            var m = data.getMonth() + 1;
            m = parseInt(m < 10 ? "0" + m : m);
            dataArr.push({
                year: data.getFullYear(),
                month: m
            })
        }

        return dataArr.reverse();
    }

    //获取当前n个月的方法
    function getMonthTwo(n) {
        
        var nowdate = new Date();
        nowdate.setMonth((nowdate.getMonth() - n) + 1);
        var y = nowdate.getFullYear();
        var m = nowdate.getMonth() + 1;

        return {
            year: y,
            month: m
        }
    }


})();