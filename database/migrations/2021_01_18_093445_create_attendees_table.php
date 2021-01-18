<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttendeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attendees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('session_id');
            $table->unsignedBigInteger('term_id');
            $table->unsignedBigInteger('class_id');
            $table->string('pnp')->nullable();
            $table->string('neat')->nullable();
            $table->string('health')->nullable();
            $table->string('cooperate')->nullable();
            $table->string('attentive')->nullable();
            $table->string('attitude')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('class_id')->references('id')->on('classes');
            $table->foreign('session_id')->references('id')->on('academic_sessions');
            $table->foreign('term_id')->references('id')->on('academic_terms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attendees');
    }
}
