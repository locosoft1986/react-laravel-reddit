<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AuthenticateController extends Controller
{
  public function getLogin() {
    return view('auth.login');
  }

  public function getRegister() {
    return view('auth.register');
  }
}
