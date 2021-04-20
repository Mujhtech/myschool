<?php

namespace App\Http\Livewire;
use Auth;

use Livewire\Component;

class Login extends Component
{
    public $password;
    public $email;

    protected $rules = [
        'password' => 'required|min:6',
        'email' => 'required|email',
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
        return view('livewire.login');
    }
}
