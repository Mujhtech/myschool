<?php

namespace App\Http\Livewire;
use Auth;

use Livewire\Component;

class LoginOtp extends Component
{
    public $otp;

    protected $rules = [
        'otp' => 'required',
    ];

    public function submit()
    {
        $this->validate();

        if(Auth::attempt(['email' => $this->email, 'password' => $this->password])){

            return redirect()->to('/');

        } else {

            session()->flash('alert', 'The provided credentials do not match our records.');

        }
    }

    public function render()
    {
        return view('livewire.otp');
    }
}
