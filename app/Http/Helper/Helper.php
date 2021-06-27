<?php

use App\Models\Setting;


if (!function_exists('school_logo')) {

	function school_logo(){
		$school_name = Setting::where('name', 'school-name')->first()->value;
		$school_logo = Setting::where('name', 'school-logo')->first()->value;

		return $school_logo ? $school_logo : 'https://ui-avatars.com/api/?name='.urlencode($school_name).'&color=7F9CF5&background=EBF4FF';
	}

}


if (!function_exists('get_favicon')) {

	function get_favicon(){
		$school_name = Setting::where('name', 'school-name')->first()->value;
		$favicon = Setting::where('name', 'favicon')->first()->value;

		return $favicon ? $favicon : 'https://ui-avatars.com/api/?name='.urlencode($school_name).'&color=7F9CF5&background=EBF4FF';
	}

}


if (!function_exists('school_name')) {

	function school_name(){
		
		$school_name = Setting::where('name', 'school-name')->first()->value;

		return $school_name;
	}

}


if (!function_exists('get_setting')) {

	function get_setting(string $type){
		
		$value = Setting::where('name', $type)->first()->value;

		return $value;
	}

}