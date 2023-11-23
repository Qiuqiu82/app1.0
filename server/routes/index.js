var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/api/index_list/data",function(req,res,next){
	
	res.send({
			"code": 0,
			"data":{
				topBar:[
					{id:1,name:'蔬果'},
					{id:2,name:'电器'},
					{id:3,name:'衣物'},
					{id:4,name:'日用品'},
					{id:5,name:'我要捐衣'}
				],
				data:[
					{
						type:"swiperlist",
						data:[
							{imgUrl:'../../static/img/swiper1.jpg'},
							{imgUrl:'../../static/img/swiper2.jpg'},
							{imgUrl:'../../static/img/swiper3.jpg'}
					]
					},
					{
						type:"recommendList",
						data:[
							{
								bigUrl:'../../static/img/swiper1.jpg',
								data:[
									{imgUrl:'../../static/img/Children1.jpg'},
									{imgUrl:'../../static/img/Children2.jpg'},
									{imgUrl:'../../static/img/Children3.jpg'}
								]
							},
							{
								bigUrl:'../../static/img/Furnishing.jpg',
								data:[
									{imgUrl:'../../static/img/Furnishing1.jpg'},
									{imgUrl:'../../static/img/Furnishing2.jpg'},
									{imgUrl:'../../static/img/Furnishing3.jpg'}
								]
							},
							{
								type:"commodityList",
								data:[
									{
										id:1,
										imgUrl:"../../static/img/commodity1.jpg",
										name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice:"299",
										oprice:"659",
										discount:"5.2"
									},
									{
										id:2,
										imgUrl:"../../static/img/commodity2.jpg",
										name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice:"299",
										oprice:"659",
										discount:"5.2"
									},
									{
										id:3,
										imgUrl:"../../static/img/commodity3.jpg",
										name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice:"299",
										oprice:"659",
										discount:"5.2"
									},
									{
										id:4,
										imgUrl:"../../static/img/commodity4.jpg",
										name:"大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
										pprice:"299",
										oprice:"659",
										discount:"5.2"
									}
								]
							}
							
					]
					}
				]
			}
		})
	
	
});


module.exports = router;
