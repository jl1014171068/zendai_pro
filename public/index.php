<?php

echo json_encode([
	'code' => 200,
	 'result'=>[
	 	'savePath' => 'images/art-works-1.jpg',
	 	'realPath' => '2015-02-33/tupian.png'
	 ],
     'results'=>[
        [
            'savePath' =>'images/art-works-1.jpg',
            'realPath' =>'images/art-tx.jpg'
        ],
        [
           'savePath' =>'images/art-works-2.jpg',
            'realPath' =>'images/art-tx.jpg' 
        ],
        [
            'savePath' =>'images/art-works-3.jpg',
            'realPath' =>'images/art-tx.jpg' 
        ],
        [
            'savePath' =>'images/art-works-4.jpg',
            'realPath' =>'images/art-tx.jpg' 
        ]
     ],
     'option' =>[
        'id' => 10,
        'name' =>'传统古话'
     ],

     'msg' =>'重复的作品集名称'

	]);