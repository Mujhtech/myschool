<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'role_id' => $this->role_id,
            'locked' => $this->locked ? true : false,
            'email' => $this->email,
            'fullname' => $this->fullname,
            'avatar' => $this->profile_photo_url,
            'otp' => $this->otp,
            'otp_expired' => Carbon::parse($this->otp_expired)
        ];
    }
}
