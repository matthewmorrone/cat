<?
header('Access-Control-Allow-Origin: *');
echo file_get_contents("http://www.cattransit.com/routes-and-schedules/");