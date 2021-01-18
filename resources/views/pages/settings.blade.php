@extends('page')

@section('title', 'Table')

@section('breadcrum', 'Table')

@section('content')
<div class="row tabs-contant">
    <div class="col-xxl-6">
        <div class="card card-statistics">
            <div class="card-header">
                <div class="card-heading">
                    <h4 class="card-title"> Settings</h4>
                </div>
            </div>
            <div class="card-body">
                <div class="tab round">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link show" id="home-07-tab" data-toggle="tab" href="#home-07" role="tab" aria-controls="home-07" aria-selected="false"> General</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show" id="profile-07-tab" data-toggle="tab" href="#profile-07" role="tab" aria-controls="profile-07" aria-selected="false">Report</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link show" id="portfolio-07-tab" data-toggle="tab" href="#portfolio-07" role="tab" aria-controls="portfolio-07" aria-selected="false">Students</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active show" id="contact-07-tab" data-toggle="tab" href="#contact-07" role="tab" aria-controls="contact-07" aria-selected="true">System</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade py-3" id="home-07" role="tabpanel" aria-labelledby="home-07-tab">
                            <p>Motivation is not an accident or something that someone else can give you — you are the only one with the power to motivate you. Motivation cannot be an external force, it must come from within as the natural product of your desire to achieve something and your belief that you are capable to succeed at your goal.</p>
                        </div>
                        <div class="tab-pane fade py-3" id="profile-07" role="tabpanel" aria-labelledby="profile-07-tab">
                            <p>What is the exact sequence of events that will take you to where you want to be? Have a think consciously of what you need to do. Every outcome begins with the first step. When you decide you want to have a romantic meal for two, there are many steps that you need to perform in order for that to happen. You need to determine the exact sequence of events and write it down. </p>
                        </div>
                        <div class="tab-pane fade py-3" id="portfolio-07" role="tabpanel" aria-labelledby="portfolio-07-tab">
                            <p>The sad thing is the majority of people have no clue about what they truly want. They have no clarity. When asked the question, responses will be superficial at best, and at worst, will be what someone else wants for them.</p>
                        </div>
                        <div class="tab-pane fade py-3 active show" id="contact-07" role="tabpanel" aria-labelledby="contact-07-tab">
                            <p>Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path, you are switching off the opportunity to drift back to that place. Then step out and take your future path. Absorb yourself in the sensations, the feelings, the sights, the sounds and of course continue to engage in your future the way I have discussed in previous articles on this blog.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection