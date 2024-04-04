@extends('layouts.app')

@section('content')
<div class="container">

</div>
@endsection


@extends('layouts.app')

@section('content')
    <index></index>
@endsection
<script>
    import Index from "../js/components";
    export default {
        components: {Index}
    }
</script>
