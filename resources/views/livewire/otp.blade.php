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
                <div class="form-group">
                    <label class="control-label">Otp*</label>
                    <input type="email" class="form-control" placeholder="Otp" wire:model="otp"/>
                    @error('otp') <span class="error">{{ $message }}</span> @enderror
                </div>
            </div>
            <div class="col-12 mt-3">
                <button type="submit" class="btn btn-primary text-uppercase">Verify</button>
            </div>
            <!--<div class="col-12  mt-3">
                <p>Don't have an account ?<a href="auth-register.html"> Sign Up</a></p>
            </div>-->
        </div>
    </form>
</div>
