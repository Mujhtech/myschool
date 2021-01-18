<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('session_id');
            $table->unsignedBigInteger('term_id');
            $table->string('title');
            $table->string('description');
            $table->double('amount', 15, 2)->nullable()->comment('Total amount to be paid');
            $table->double('amount_paid', 15, 2)->nullable()->comment('Amount paid');
            $table->integer('status')->comment('Paid or unpaid');
            $table->string('payment_method')->nullable()->comment('Cash or Bank Transfer');
            $table->timestamps();


            $table->foreign('user_id')->references('id')->on('users');
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
        Schema::dropIfExists('invoices');
    }
}
