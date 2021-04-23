<div>
    {{-- Close your eyes. Count to one. That is how long forever feels. --}}
    @if (session()->has('alert'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Alert!</strong> {{ session('alert') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <i class="ti ti-close"></i>
            </button>
        </div>
    @endif
    <form wire:submit.prevent="submit" class="mt-2 mt-sm-5">
        @csrf
        <div class="row">
            <div class="col-12">
                <div class="input-group my-3">
                    <input type="text" class="form-control" placeholder="Enter Password" aria-label="" aria-describedby="basic-addon2" wire:model="password">
                    <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon2"><i class="fa fa-unlock"></i></span>
                    </div>
                </div>
                @error('password') <span class="error">{{ $message }}</span> @enderror
            </div>
            <div class="col-12 mt-3">
                <button type="submit" class="btn btn-primary text-uppercase">Unlock</button>
            </div>
            <!--<div class="col-12  mt-3">
                <p>Don't have an account ?<a href="auth-register.html"> Sign Up</a></p>
            </div>-->
        </div>
    </form>
</div>
