<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AllowNullableLinkBodyPosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn([
              'link',
              'body'
            ]);
        });
        Schema::table('posts', function (Blueprint $table) {
          $table->string('link')->nullable();
          $table->longText('body')->nullable();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn([
              'link',
              'body'
            ]);
        });
        Schema::table('posts', function (Blueprint $table) {
          $table->string('link')->nullable();
          $table->longText('body')->nullable();
        });
    }
}
