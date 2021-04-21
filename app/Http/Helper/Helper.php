<?php

use App\Models\Setting;


if (!function_exists('school_logo')) {

	function school_logo(){
		$school_name = Setting::where('type', 'school-name')->first()->value;
		$school_logo = Setting::where('type', 'school-logo')->first()->value;

		return $school_logo ? $school_logo : 'https://ui-avatars.com/api/?name='.urlencode($school_name).'&color=7F9CF5&background=EBF4FF';
	}

}


if (!function_exists('school_name')) {

	function school_name(){
		
		$school_name = Setting::where('type', 'school-name')->first()->value;

		return $school_name;
	}

}