<?php

namespace App\Http\Livewire;

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


        return redirect()->to('/');

    }

    public function render()
    {
        return view('livewire.login');
    }
}
