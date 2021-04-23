<?php

namespace App\Http\Livewire;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use Livewire\Component;

class Locked extends Component
{
    public $password;

    protected $rules = [
        'password' => 'required',
    ];

    public function submit(Request $request)
    {
        $this->validate();

        if(Hash::check($this->password, $request->user()->password)){

            $user = $request->user();

            $user->locked = 0;

            $user->save();

            return redirect()->to('/');

        } else {

            session()->flash('alert', 'Incorrect password.');

        }
    }

    public function render()
    {
        return view('livewire.locked');
    }
}
