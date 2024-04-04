<?php

namespace App\Http\Controllers;

use App\Http\Resources\PersonResource;
use App\Models\Person;
use Illuminate\Http\Request;

class ViewAllController extends Controller
{
    public function __invoke()
    {
        return PersonResource::collection(Person::all());
    }
}
