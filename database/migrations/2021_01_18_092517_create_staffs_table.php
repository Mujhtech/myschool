<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staffs', function (Blueprint $table) {
            $table->id();
            $table->string('staff_no');
            $table->unsignedBigInteger('class_id')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('employee_type');
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('sex')->nullable();
            $table->string('marital_status')->nullable();
            $table->longText('academic_qualification')->nullable();
            $table->longText('experiences')->nullable();
            $table->string('parent_name')->nullable();
            $table->string('dob')->nullable();
            $table->date('joining_on');
            $table->timestamps();

            $table->foreign('class_id')->references('id')->on('classes');
            $table->foreign('employee_type')->references('id')->on('employee_types');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('staffs');
    }
}
