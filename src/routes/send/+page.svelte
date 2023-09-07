<div class='papa'>여기는 카톡으로 send 메세지를 보내는 곳입니다.</div> 
{teacher}

<button on:click={press}> 여기를 눌리세요.   </button>
<script>
    let teacher =0

const press = () =>{ teacher ++ }


</script>


<style>
.papa {
    color: red;
    font-size: 30px;
}
</style>