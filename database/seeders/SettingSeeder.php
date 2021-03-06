<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $settings = [
            [
                "type" => "school-name",
                "value" => 'Futminna',
            ],
            [
                "type" => "school-logo",
                "value" => null,
            ],
            [
                "type" => "favicon",
                "value" => null,
            ],
            [
                "type" => "application-form",
                "value" => "open",
            ],
            [
                "type" => "school-email",
                "value" => null,
            ],
            [
                "type" => "application-fee",
                "value" => null,
            ],
        ];

    	foreach ($settings as $setting) {
    		$existing = Setting::where('type', $setting['type'])->get();
    		if( !$existing->isEmpty() ){
    			continue;
    		}
           Setting::create($setting);
    	}
    }
}
