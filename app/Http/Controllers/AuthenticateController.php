<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\User;
use Auth;

class AuthenticateController extends Controller
{
  public function getLogin() {
    return view('auth.login');
  }

  public function postLogin(Request $request) {
    if (Auth::attempt($request->only('username', 'password'), true)) {
      return redirect()->intended('/');
    } else {
      return response()->json([
        "id" => "invalidCredentials",
        "error" => "Invalid username or password"
      ]);
    }
  }

  public function getRegister() {
    return view('auth.register');
  }

  public function postRegister(Request $request) {
    $data = [
      "username" => $request->username,
      "email" => $request->email,
      "password" => bcrypt($request->password)
    ];
    $user = User::create($data);

    Auth::login($user);

    return redirect()->intended('/');
  }

  public function getLogout() {
    Auth::logout();
    return redirect('/');
  }
}
