<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\EmployeeType;

class EmployeeTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $emps = [
            [
                "name" => "Part Time",
            ],
            [
                "name" => "Full Time",
            ],
        ];

    	foreach ($emps as $epm) {
    		$existing = EmployeeType::where('name', $epm['name'])->get();
    		if( !$existing->isEmpty() ){
    			continue;
    		}
           EmployeeType::create($epm);
    	}
    }
}
